package commons

import (
	"context"
	"fmt"
	"net"
	"os"
	"os/signal"
	"strings"
	"syscall"

	"github.com/pkg/errors"
	"go.mongodb.org/mongo-driver/mongo"
	corev1 "k8s.io/api/core/v1"

	"github.com/kubeshop/testkube/internal/config"
	dbmigrations "github.com/kubeshop/testkube/internal/db-migrations"
	"github.com/kubeshop/testkube/pkg/cache"
	"github.com/kubeshop/testkube/pkg/configmap"
	"github.com/kubeshop/testkube/pkg/dbmigrator"
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
