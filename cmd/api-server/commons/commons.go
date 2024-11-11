package commons

import (
	"context"
	"encoding/json"
	"fmt"
	"net"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/nats-io/nats.go"
	"github.com/pkg/errors"
	"go.mongodb.org/mongo-driver/mongo"
	"google.golang.org/grpc/metadata"
	"google.golang.org/protobuf/types/known/emptypb"
	corev1 "k8s.io/api/core/v1"

	"github.com/kubeshop/testkube/internal/config"
	dbmigrations "github.com/kubeshop/testkube/internal/db-migrations"
	parser "github.com/kubeshop/testkube/internal/template"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/cache"
	"github.com/kubeshop/testkube/pkg/cloud"
	"github.com/kubeshop/testkube/pkg/configmap"
	"github.com/kubeshop/testkube/pkg/dbmigrator"
	"github.com/kubeshop/testkube/pkg/event"
	"github.com/kubeshop/testkube/pkg/event/bus"
	"github.com/kubeshop/testkube/pkg/event/kind/slack"
	kubeexecutor "github.com/kubeshop/testkube/pkg/executor"
	"github.com/kubeshop/testkube/pkg/featureflags"
	"github.com/kubeshop/testkube/pkg/imageinspector"
	"github.com/kubeshop/testkube/pkg/log"
	configRepo "github.com/kubeshop/testkube/pkg/repository/config"
	"github.com/kubeshop/testkube/pkg/repository/storage"
	"github.com/kubeshop/testkube/pkg/secret"
	domainstorage "github.com/kubeshop/testkube/pkg/storage"
	"github.com/kubeshop/testkube/pkg/storage/minio"
)

func ExitOnError(title string, err error) {
	if err != nil {
		log.DefaultLogger.Errorw(title, "error", err)
		os.Exit(1)
	}
}

// General

func GetEnvironmentVariables() map[string]string {
	list := os.Environ()
	envs := make(map[string]string, len(list))
	for _, env := range list {
		pair := strings.SplitN(env, "=", 2)
		if len(pair) != 2 {
			continue
		}

		envs[pair[0]] += pair[1]
	}
	return envs
}

func HandleCancelSignal(ctx context.Context) func() error {
	stopSignal := make(chan os.Signal, 1)
	signal.Notify(stopSignal, syscall.SIGINT, syscall.SIGTERM)
	return func() error {
		select {
		case <-ctx.Done():
			return nil
		case sig := <-stopSignal:
			go func() {
				<-stopSignal
				os.Exit(137)
			}()
			// Returning an error cancels the errgroup.
			return fmt.Errorf("received signal: %v", sig)
		}
	}
}

// Configuration

func MustGetConfig() *config.Config {
	cfg, err := config.Get()
	ExitOnError("error getting application config", err)
	cfg.CleanLegacyVars()
	return cfg
}

func MustGetFeatureFlags() featureflags.FeatureFlags {
	features, err := featureflags.Get()
	ExitOnError("error getting application feature flags", err)
	log.DefaultLogger.Infow("Feature flags configured", "ff", features)
	return features
}

func MustFreePort(port int) {
	ln, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	ExitOnError(fmt.Sprintf("Checking if port %d is free", port), err)
	_ = ln.Close()
	log.DefaultLogger.Debugw("TCP Port is available", "port", port)
}

func MustGetConfigMapConfig(ctx context.Context, name string, namespace string, defaultTelemetryEnabled bool) *configRepo.ConfigMapConfig {
	if name == "" {
		name = fmt.Sprintf("testkube-api-server-config-%s", namespace)
	}
	configMapConfig, err := configRepo.NewConfigMapConfig(name, namespace)
	ExitOnError("Getting config map config", err)

	// Load the initial data
	err = configMapConfig.Load(ctx, defaultTelemetryEnabled)
	if err != nil {
		log.DefaultLogger.Warn("error upserting config ConfigMap", "error", err)
	}
	return configMapConfig
}

func MustGetMinioClient(cfg *config.Config) domainstorage.Client {
	opts := minio.GetTLSOptions(cfg.StorageSSL, cfg.StorageSkipVerify, cfg.StorageCertFile, cfg.StorageKeyFile, cfg.StorageCAFile)
	minioClient := minio.NewClient(
		cfg.StorageEndpoint,
		cfg.StorageAccessKeyID,
		cfg.StorageSecretAccessKey,
		cfg.StorageRegion,
		cfg.StorageToken,
		cfg.StorageBucket,
		opts...,
	)
	err := minioClient.Connect()
	ExitOnError("Connecting to minio", err)
	if expErr := minioClient.SetExpirationPolicy(cfg.StorageExpiration); expErr != nil {
		log.DefaultLogger.Errorw("Error setting expiration policy", "error", expErr)
	}
	return minioClient
}

func runMongoMigrations(ctx context.Context, db *mongo.Database) error {
	migrationsCollectionName := "__migrations"
	activeMigrations, err := dbmigrator.GetDbMigrationsFromFs(dbmigrations.MongoMigrationsFs)
	if err != nil {
		return errors.Wrap(err, "failed to obtain MongoDB migrations from disk")
	}
	dbMigrator := dbmigrator.NewDbMigrator(dbmigrator.NewDatabase(db, migrationsCollectionName), activeMigrations)
	plan, err := dbMigrator.Plan(ctx)
	if err != nil {
		return errors.Wrap(err, "failed to plan MongoDB migrations")
	}
	if plan.Total == 0 {
		log.DefaultLogger.Info("No MongoDB migrations to apply.")
	} else {
		log.DefaultLogger.Info(fmt.Sprintf("Applying MongoDB migrations: %d rollbacks and %d ups.", len(plan.Downs), len(plan.Ups)))
	}
	err = dbMigrator.Apply(ctx)
	return errors.Wrap(err, "failed to apply MongoDB migrations")
}

func MustGetMongoDatabase(ctx context.Context, cfg *config.Config, secretClient secret.Interface, migrate bool) *mongo.Database {
	mongoSSLConfig := getMongoSSLConfig(cfg, secretClient)
	db, err := storage.GetMongoDatabase(cfg.APIMongoDSN, cfg.APIMongoDB, cfg.APIMongoDBType, cfg.APIMongoAllowTLS, mongoSSLConfig)
	ExitOnError("Getting mongo database", err)
	if migrate {
		if err = runMongoMigrations(ctx, db); err != nil {
			log.DefaultLogger.Warnf("failed to apply MongoDB migrations: %v", err)
		}
	}
	return db
}

// getMongoSSLConfig builds the necessary SSL connection info from the settings in the environment variables
// and the given secret reference
func getMongoSSLConfig(cfg *config.Config, secretClient secret.Interface) *storage.MongoSSLConfig {
	if cfg.APIMongoSSLCert == "" {
		return nil
	}

	clientCertPath := "/tmp/mongodb.pem"
	rootCAPath := "/tmp/mongodb-root-ca.pem"
	mongoSSLSecret, err := secretClient.Get(cfg.APIMongoSSLCert)
	ExitOnError(fmt.Sprintf("Could not get secret %s for MongoDB connection", cfg.APIMongoSSLCert), err)

	var keyFile, caFile, pass string
	var ok bool
	if keyFile, ok = mongoSSLSecret[cfg.APIMongoSSLClientFileKey]; !ok {
		log.DefaultLogger.Warnf("Could not find sslClientCertificateKeyFile with key %s in secret %s", cfg.APIMongoSSLClientFileKey, cfg.APIMongoSSLCert)
	}
	if caFile, ok = mongoSSLSecret[cfg.APIMongoSSLCAFileKey]; !ok {
		log.DefaultLogger.Warnf("Could not find sslCertificateAuthorityFile with key %s in secret %s", cfg.APIMongoSSLCAFileKey, cfg.APIMongoSSLCert)
	}
	if pass, ok = mongoSSLSecret[cfg.APIMongoSSLClientFilePass]; !ok {
		log.DefaultLogger.Warnf("Could not find sslClientCertificateKeyFilePassword with key %s in secret %s", cfg.APIMongoSSLClientFilePass, cfg.APIMongoSSLCert)
	}

	err = os.WriteFile(clientCertPath, []byte(keyFile), 0644)
	ExitOnError("Could not place mongodb certificate key file", err)

	err = os.WriteFile(rootCAPath, []byte(caFile), 0644)
	ExitOnError("Could not place mongodb ssl ca file: %s", err)

	return &storage.MongoSSLConfig{
		SSLClientCertificateKeyFile:         clientCertPath,
		SSLClientCertificateKeyFilePassword: pass,
		SSLCertificateAuthoritiyFile:        rootCAPath,
	}
}

// Actions

func ReadDefaultExecutors(cfg *config.Config) (executors []testkube.ExecutorDetails, images kubeexecutor.Images, err error) {
	rawExecutors, err := parser.LoadConfigFromStringOrFile(
		cfg.TestkubeDefaultExecutors,
		cfg.TestkubeConfigDir,
		"executors.json",
		"executors",
	)
	if err != nil {
		return nil, images, err
	}

	if err = json.Unmarshal([]byte(rawExecutors), &executors); err != nil {
		return nil, images, err
	}

	enabledExecutors, err := parser.LoadConfigFromStringOrFile(
		cfg.TestkubeEnabledExecutors,
		cfg.TestkubeConfigDir,
		"enabledExecutors",
		"enabled executors",
	)
	if err != nil {
		return nil, images, err
	}

	// Load internal images
	next := make([]testkube.ExecutorDetails, 0)
	for i := range executors {
		if executors[i].Name == "logs-sidecar" {
			images.LogSidecar = executors[i].Executor.Image
			continue
		}
		if executors[i].Name == "init-executor" {
			images.Init = executors[i].Executor.Image
			continue
		}
		if executors[i].Name == "scraper-executor" {
			images.Scraper = executors[i].Executor.Image
			continue
		}
		if executors[i].Executor == nil {
			continue
		}
		next = append(next, executors[i])
	}
	executors = next

	// When there is no executors selected, enable all
	if enabledExecutors == "" {
		return executors, images, nil
	}

	// Filter enabled executors
	specifiedExecutors := make(map[string]struct{})
	for _, executor := range strings.Split(enabledExecutors, ",") {
		if strings.TrimSpace(executor) == "" {
			continue
		}
		specifiedExecutors[strings.TrimSpace(executor)] = struct{}{}
	}

	next = make([]testkube.ExecutorDetails, 0)
	for i := range executors {
		if _, ok := specifiedExecutors[executors[i].Name]; ok {
			next = append(next, executors[i])
		}
	}

	return next, images, nil
}

func ReadProContext(ctx context.Context, cfg *config.Config, grpcClient cloud.TestKubeCloudAPIClient) config.ProContext {
	proContext := config.ProContext{
		APIKey:                           cfg.TestkubeProAPIKey,
		URL:                              cfg.TestkubeProURL,
		TLSInsecure:                      cfg.TestkubeProTLSInsecure,
		WorkerCount:                      cfg.TestkubeProWorkerCount,
		LogStreamWorkerCount:             cfg.TestkubeProLogStreamWorkerCount,
		WorkflowNotificationsWorkerCount: cfg.TestkubeProWorkflowNotificationsWorkerCount,
		SkipVerify:                       cfg.TestkubeProSkipVerify,
		EnvID:                            cfg.TestkubeProEnvID,
		OrgID:                            cfg.TestkubeProOrgID,
		Migrate:                          cfg.TestkubeProMigrate,
		ConnectionTimeout:                cfg.TestkubeProConnectionTimeout,
		DashboardURI:                     cfg.TestkubeDashboardURI,
	}

	if cfg.TestkubeProAPIKey == "" || grpcClient == nil {
		return proContext
	}

	ctx, cancel := context.WithTimeout(ctx, time.Second*3)
	md := metadata.Pairs("api-key", cfg.TestkubeProAPIKey)
	ctx = metadata.NewOutgoingContext(ctx, md)
	defer cancel()
	foundProContext, err := grpcClient.GetProContext(ctx, &emptypb.Empty{})
	if err != nil {
		log.DefaultLogger.Warnf("cannot fetch pro-context from cloud: %s", err)
		return proContext
	}

	if proContext.EnvID == "" {
		proContext.EnvID = foundProContext.EnvId
	}

	if proContext.OrgID == "" {
		proContext.OrgID = foundProContext.OrgId
	}

	return proContext
}

func MustCreateSlackLoader(cfg *config.Config, envs map[string]string) *slack.SlackLoader {
	slackTemplate, err := parser.LoadConfigFromStringOrFile(
		cfg.SlackTemplate,
		cfg.TestkubeConfigDir,
		"slack-template.json",
		"slack template",
	)
	ExitOnError("Creating slack loader", err)

	slackConfig, err := parser.LoadConfigFromStringOrFile(cfg.SlackConfig, cfg.TestkubeConfigDir, "slack-config.json", "slack config")
	ExitOnError("Creating slack loader", err)

	return slack.NewSlackLoader(slackTemplate, slackConfig, cfg.TestkubeClusterName, cfg.TestkubeDashboardURI,
		testkube.AllEventTypes, envs)
}

func MustCreateNATSConnection(cfg *config.Config) *nats.EncodedConn {
	// if embedded NATS server is enabled, we'll replace connection with one to the embedded server
	if cfg.NatsEmbedded {
		_, nc, err := event.ServerWithConnection(cfg.NatsEmbeddedStoreDir)
		ExitOnError("Creating NATS connection", err)

		log.DefaultLogger.Info("Started embedded NATS server")

		conn, err := nats.NewEncodedConn(nc, nats.JSON_ENCODER)
		ExitOnError("Creating NATS connection", err)
		return conn
	}

	conn, err := bus.NewNATSEncodedConnection(bus.ConnectionConfig{
		NatsURI:            cfg.NatsURI,
		NatsSecure:         cfg.NatsSecure,
		NatsSkipVerify:     cfg.NatsSkipVerify,
		NatsCertFile:       cfg.NatsCertFile,
		NatsKeyFile:        cfg.NatsKeyFile,
		NatsCAFile:         cfg.NatsCAFile,
		NatsConnectTimeout: cfg.NatsConnectTimeout,
	})
	ExitOnError("Creating NATS connection", err)
	return conn
}

// Components

func CreateImageInspector(cfg *config.Config, configMapClient configmap.Interface, secretClient secret.Interface) imageinspector.Inspector {
	inspectorStorages := []imageinspector.Storage{imageinspector.NewMemoryStorage()}
	if cfg.EnableImageDataPersistentCache {
		configmapStorage := imageinspector.NewConfigMapStorage(configMapClient, cfg.ImageDataPersistentCacheKey, true)
		_ = configmapStorage.CopyTo(context.Background(), inspectorStorages[0].(imageinspector.StorageTransfer))
		inspectorStorages = append(inspectorStorages, configmapStorage)
	}
	return imageinspector.NewInspector(
		cfg.TestkubeRegistry,
		imageinspector.NewCraneFetcher(),
		imageinspector.NewSecretFetcher(secretClient, cache.NewInMemoryCache[*corev1.Secret](), imageinspector.WithSecretCacheTTL(cfg.TestkubeImageCredentialsCacheTTL)),
		inspectorStorages...,
	)
}