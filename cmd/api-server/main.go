package main

import (
	"context"
	"flag"
	"fmt"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2/middleware/cors"
	"google.golang.org/grpc"

	executorsclientv1 "github.com/kubeshop/testkube-operator/pkg/client/executors/v1"
	testkubeclientset "github.com/kubeshop/testkube-operator/pkg/clientset/versioned"
	"github.com/kubeshop/testkube/cmd/api-server/commons"
	"github.com/kubeshop/testkube/cmd/api-server/services"
	"github.com/kubeshop/testkube/internal/app/api/debug"
	agentclient "github.com/kubeshop/testkube/pkg/agent/client"
	cloudartifacts "github.com/kubeshop/testkube/pkg/cloud/data/artifact"
	cloudtestworkflow "github.com/kubeshop/testkube/pkg/cloud/data/testworkflow"
	"github.com/kubeshop/testkube/pkg/event/kind/cdevent"
	"github.com/kubeshop/testkube/pkg/event/kind/k8sevent"
	"github.com/kubeshop/testkube/pkg/event/kind/testworkflowexecutionmetrics"
	"github.com/kubeshop/testkube/pkg/event/kind/testworkflowexecutions"
	"github.com/kubeshop/testkube/pkg/event/kind/testworkflowexecutiontelemetry"
	"github.com/kubeshop/testkube/pkg/event/kind/webhook"
	ws "github.com/kubeshop/testkube/pkg/event/kind/websocket"
	"github.com/kubeshop/testkube/pkg/newclients/testworkflowclient"
	"github.com/kubeshop/testkube/pkg/newclients/testworkflowtemplateclient"
	runner2 "github.com/kubeshop/testkube/pkg/runner"
	"github.com/kubeshop/testkube/pkg/secretmanager"
	"github.com/kubeshop/testkube/pkg/server"
	"github.com/kubeshop/testkube/pkg/tcl/checktcl"
	"github.com/kubeshop/testkube/pkg/tcl/schedulertcl"
	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor/presets"

	"github.com/kubeshop/testkube/internal/common"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/version"

	"golang.org/x/sync/errgroup"

	"github.com/kubeshop/testkube/internal/app/api/metrics"
	"github.com/kubeshop/testkube/pkg/agent"
	"github.com/kubeshop/testkube/pkg/cloud"
	"github.com/kubeshop/testkube/pkg/event"
	"github.com/kubeshop/testkube/pkg/event/bus"
	"github.com/kubeshop/testkube/pkg/k8sclient"
	"github.com/kubeshop/testkube/pkg/triggers"

	kubeclient "github.com/kubeshop/testkube-operator/pkg/client"
	testtriggersclientv1 "github.com/kubeshop/testkube-operator/pkg/client/testtriggers/v1"
	testworkflowsclientv1 "github.com/kubeshop/testkube-operator/pkg/client/testworkflows/v1"
	apiv1 "github.com/kubeshop/testkube/internal/app/api/v1"
	"github.com/kubeshop/testkube/pkg/configmap"
	"github.com/kubeshop/testkube/pkg/log"
	"github.com/kubeshop/testkube/pkg/secret"
	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowexecutor"
)

func init() {
	flag.Parse()
}

func main() {
	cfg := commons.MustGetConfig()
	features := commons.MustGetFeatureFlags()

	// Determine the running mode
	mode := common.ModeStandalone
	if cfg.TestkubeProAPIKey != "" {
		mode = common.ModeAgent
	}

	// Run services within an errgroup to propagate errors between services.
	g, ctx := errgroup.WithContext(context.Background())

	// Cancel the errgroup context on SIGINT and SIGTERM,
	// which shuts everything down gracefully.
	g.Go(commons.HandleCancelSignal(ctx))

	commons.MustFreePort(cfg.APIServerPort)
	commons.MustFreePort(cfg.GraphqlPort)
	commons.MustFreePort(cfg.GRPCServerPort)

	configMapConfig := commons.MustGetConfigMapConfig(ctx, cfg.APIServerConfig, cfg.TestkubeNamespace, cfg.TestkubeAnalyticsEnabled)

	// k8s
	kubeClient, err := kubeclient.GetClient()
	commons.ExitOnError("Getting kubernetes client", err)
	clientset, err := k8sclient.ConnectToK8s()
	commons.ExitOnError("Creating k8s clientset", err)

	var runner runner2.Runner
	lazyRunner := runner2.Lazy(&runner)

	var eventsEmitter *event.Emitter
	lazyEmitter := event.Lazy(&eventsEmitter)

	// TODO: Make granular environment variables, yet backwards compatible
	secretConfig := testkube.SecretConfig{
		Prefix:     cfg.SecretCreationPrefix,
		List:       cfg.EnableSecretsEndpoint,
		ListAll:    cfg.EnableSecretsEndpoint && cfg.EnableListingAllSecrets,
		Create:     cfg.EnableSecretsEndpoint && !cfg.DisableSecretCreation,
		Modify:     cfg.EnableSecretsEndpoint && !cfg.DisableSecretCreation,
		Delete:     cfg.EnableSecretsEndpoint && !cfg.DisableSecretCreation,
		AutoCreate: !cfg.DisableSecretCreation,
	}
	secretManager := secretmanager.New(clientset, secretConfig)

	metrics := metrics.NewMetrics()

	// Start local Control Plane
	if mode == common.ModeStandalone {
		controlPlane := services.CreateControlPlane(ctx, cfg, features, configMapConfig, secretManager, metrics, lazyRunner, lazyEmitter)
		g.Go(func() error {
			return controlPlane.Run(ctx)
		})

		// Rewire connection
		cfg.TestkubeProURL = fmt.Sprintf("%s:%d", cfg.APIServerFullname, cfg.GRPCServerPort)
		cfg.TestkubeProTLSInsecure = true
	}

	clusterId, _ := configMapConfig.GetUniqueClusterId(ctx)
	telemetryEnabled, _ := configMapConfig.GetTelemetryEnabled(ctx)

	// k8s clients
	secretClient := secret.NewClientFor(clientset, cfg.TestkubeNamespace)
	configMapClient := configmap.NewClientFor(clientset, cfg.TestkubeNamespace)
	webhooksClient := executorsclientv1.NewWebhooksClient(kubeClient, cfg.TestkubeNamespace)
	testTriggersClient := testtriggersclientv1.NewClient(kubeClient, cfg.TestkubeNamespace)

	envs := commons.GetEnvironmentVariables()

	inspector := commons.CreateImageInspector(cfg, configMapClient, secretClient)

	var testWorkflowsClient testworkflowclient.TestWorkflowClient
	var testWorkflowTemplatesClient testworkflowtemplateclient.TestWorkflowTemplateClient

	var grpcClient cloud.TestKubeCloudAPIClient
	var grpcConn *grpc.ClientConn
	// Use local network for local access
	controlPlaneUrl := cfg.TestkubeProURL
	if strings.HasPrefix(controlPlaneUrl, fmt.Sprintf("%s:%d", cfg.APIServerFullname, cfg.GRPCServerPort)) {
		controlPlaneUrl = fmt.Sprintf("127.0.0.1:%d", cfg.GRPCServerPort)
	}
	grpcConn, err = agentclient.NewGRPCConnection(
		ctx,
		cfg.TestkubeProTLSInsecure,
		cfg.TestkubeProSkipVerify,
		controlPlaneUrl,
		cfg.TestkubeProCertFile,
		cfg.TestkubeProKeyFile,
		cfg.TestkubeProCAFile, //nolint
		log.DefaultLogger,
	)
	commons.ExitOnError("error creating gRPC connection", err)

	grpcClient = cloud.NewTestKubeCloudAPIClient(grpcConn)

	testWorkflowResultsRepository := cloudtestworkflow.NewCloudRepository(grpcClient, grpcConn, cfg.TestkubeProAPIKey)
	testWorkflowOutputRepository := cloudtestworkflow.NewCloudOutputRepository(grpcClient, grpcConn, cfg.TestkubeProAPIKey, cfg.StorageSkipVerify)
	triggerLeaseBackend := triggers.NewAcquireAlwaysLeaseBackend()
	artifactStorage := cloudartifacts.NewCloudArtifactsStorage(grpcClient, grpcConn, cfg.TestkubeProAPIKey)

	if mode == common.ModeAgent && cfg.WorkflowStorage == "control-plane" {
		testWorkflowsClient = testworkflowclient.NewCloudTestWorkflowClient(grpcConn, cfg.TestkubeProAPIKey)
		testWorkflowTemplatesClient = testworkflowtemplateclient.NewCloudTestWorkflowTemplateClient(grpcConn, cfg.TestkubeProAPIKey)
	} else {
		testWorkflowsClient = testworkflowclient.NewKubernetesTestWorkflowClient(kubeClient, cfg.TestkubeNamespace)
		testWorkflowTemplatesClient = testworkflowtemplateclient.NewKubernetesTestWorkflowTemplateClient(kubeClient, cfg.TestkubeNamespace)
	}

	nc := commons.MustCreateNATSConnection(cfg)
	eventBus := bus.NewNATSBus(nc)
	if cfg.Trace {
		eventBus.TraceEvents()
	}
	eventsEmitter = event.NewEmitter(eventBus, cfg.TestkubeClusterName)

	// Check Pro/Enterprise subscription
	proContext := commons.ReadProContext(ctx, cfg, grpcClient)
	subscriptionChecker, err := checktcl.NewSubscriptionChecker(ctx, proContext, grpcClient, grpcConn)
	commons.ExitOnError("Failed creating subscription checker", err)

	serviceAccountNames := map[string]string{
		cfg.TestkubeNamespace: cfg.JobServiceAccountName,
	}
	// Pro edition only (tcl protected code)
	if cfg.TestkubeExecutionNamespaces != "" {
		err = subscriptionChecker.IsActiveOrgPlanEnterpriseForFeature("execution namespace")
		commons.ExitOnError("Subscription checking", err)
		serviceAccountNames = schedulertcl.GetServiceAccountNamesFromConfig(serviceAccountNames, cfg.TestkubeExecutionNamespaces)
	}

	var deprecatedSystem *services.DeprecatedSystem
	if !cfg.DisableDeprecatedTests {
		deprecatedSystem = services.CreateDeprecatedSystem(
			ctx,
			mode,
			cfg,
			features,
			metrics,
			configMapConfig,
			secretConfig,
			grpcClient,
			grpcConn,
			nc,
			eventsEmitter,
			eventBus,
			inspector,
			subscriptionChecker,
			&proContext,
		)
	}

	// Build internal execution worker
	testWorkflowProcessor := presets.NewOpenSource(inspector)
	// Pro edition only (tcl protected code)
	if mode == common.ModeAgent {
		testWorkflowProcessor = presets.NewPro(inspector)
	}
	executionWorker := services.CreateExecutionWorker(clientset, cfg, clusterId, serviceAccountNames, testWorkflowProcessor)

	// Build the runner
	runner = runner2.New(
		executionWorker,
		testWorkflowOutputRepository,
		testWorkflowResultsRepository,
		configMapConfig,
		eventsEmitter,
		metrics,
		cfg.TestkubeDashboardURI,
		cfg.StorageSkipVerify,
	)

	// Recover control
	func() {
		var list []testkube.TestWorkflowExecution
		for {
			// TODO: it should get running only in the context of current runner (worker.List?)
			list, err = testWorkflowResultsRepository.GetRunning(ctx)
			if err != nil {
				log.DefaultLogger.Errorw("failed to fetch running executions to recover", "error", err)
				<-time.After(time.Second)
				continue
			}
			break
		}

		for i := range list {
			if (list[i].RunnerId == "" && len(list[i].Signature) == 0) || (list[i].RunnerId != "" && list[i].RunnerId != proContext.EnvID) {
				continue
			}

			// TODO: Should it throw error at all?
			// TODO: Pass hints (namespace, signature, scheduledAt)
			go func(e *testkube.TestWorkflowExecution) {
				err := runner.Monitor(ctx, e.Id)
				if err != nil {
					log.DefaultLogger.Errorw("failed to monitor execution", "id", e.Id, "error", err)
				}
			}(&list[i])
		}
	}()

	testWorkflowExecutor := testworkflowexecutor.New(
		grpcClient,
		cfg.TestkubeProAPIKey,
		cfg.CDEventsTarget,
		eventsEmitter,
		runner,
		testWorkflowResultsRepository,
		testWorkflowOutputRepository,
		testWorkflowTemplatesClient,
		testWorkflowsClient,
		metrics,
		secretManager,
		cfg.GlobalWorkflowTemplateName,
		cfg.TestkubeDashboardURI,
		proContext.OrgID,
		proContext.EnvID,
	)

	var deprecatedClients commons.DeprecatedClients
	var deprecatedRepositories commons.DeprecatedRepositories
	if deprecatedSystem != nil {
		deprecatedClients = deprecatedSystem.Clients
		deprecatedRepositories = deprecatedSystem.Repositories
	}

	// Initialize event handlers
	websocketLoader := ws.NewWebsocketLoader()
	if !cfg.DisableWebhooks {
		eventsEmitter.Loader.Register(webhook.NewWebhookLoader(log.DefaultLogger, webhooksClient, deprecatedClients, deprecatedRepositories, testWorkflowResultsRepository, metrics, &proContext, envs))
	}
	eventsEmitter.Loader.Register(websocketLoader)
	eventsEmitter.Loader.Register(commons.MustCreateSlackLoader(cfg, envs))
	if cfg.CDEventsTarget != "" {
		cdeventLoader, err := cdevent.NewCDEventLoader(cfg.CDEventsTarget, clusterId, cfg.TestkubeNamespace, cfg.TestkubeDashboardURI, testkube.AllEventTypes)
		if err == nil {
			eventsEmitter.Loader.Register(cdeventLoader)
		} else {
			log.DefaultLogger.Debugw("cdevents init error", "error", err.Error())
		}
	}
	if cfg.EnableK8sEvents {
		eventsEmitter.Loader.Register(k8sevent.NewK8sEventLoader(clientset, cfg.TestkubeNamespace, testkube.AllEventTypes))
	}

	// Update TestWorkflowExecution Kubernetes resource objects on status change
	eventsEmitter.Loader.Register(testworkflowexecutions.NewLoader(ctx, cfg.TestkubeNamespace, kubeClient))

	// Update the Prometheus metrics regarding the Test Workflow Execution
	eventsEmitter.Loader.Register(testworkflowexecutionmetrics.NewLoader(ctx, metrics, cfg.TestkubeDashboardURI))

	// Send the telemetry data regarding the Test Workflow Execution
	// TODO: Disable it if Control Plane does that
	eventsEmitter.Loader.Register(testworkflowexecutiontelemetry.NewLoader(ctx, configMapConfig))

	eventsEmitter.Listen(ctx)
	g.Go(func() error {
		eventsEmitter.Reconcile(ctx)
		return nil
	})

	// Create HTTP server
	httpServer := server.NewServer(server.Config{Port: cfg.APIServerPort})
	httpServer.Routes.Use(cors.New())

	if deprecatedSystem != nil && deprecatedSystem.API != nil {
		deprecatedSystem.API.Init(httpServer)
	}

	api := apiv1.NewTestkubeAPI(
		deprecatedClients,
		clusterId,
		cfg.TestkubeNamespace,
		testWorkflowResultsRepository,
		testWorkflowOutputRepository,
		artifactStorage,
		webhooksClient,
		testTriggersClient,
		testWorkflowsClient,
		testworkflowsclientv1.NewClient(kubeClient, cfg.TestkubeNamespace),
		testWorkflowTemplatesClient,
		testworkflowsclientv1.NewTestWorkflowTemplatesClient(kubeClient, cfg.TestkubeNamespace),
		configMapConfig,
		secretManager,
		secretConfig,
		executionWorker,
		eventsEmitter,
		websocketLoader,
		metrics,
		&proContext,
		features,
		cfg.TestkubeDashboardURI,
		cfg.TestkubeHelmchartVersion,
		serviceAccountNames,
		cfg.TestkubeDockerImageVersion,
		testWorkflowExecutor,
	)
	api.Init(httpServer)

	log.DefaultLogger.Info("starting agent service")

	getDeprecatedLogStream := agent.GetDeprecatedLogStream
	if deprecatedSystem != nil && deprecatedSystem.StreamLogs != nil {
		getDeprecatedLogStream = deprecatedSystem.StreamLogs
	}
	agentHandle, err := agent.NewAgent(
		log.DefaultLogger,
		httpServer.Mux.Handler(),
		grpcClient,
		getDeprecatedLogStream,
		agent.GetTestWorkflowNotificationsStream(testWorkflowResultsRepository, executionWorker),
		agent.GetTestWorkflowServiceNotificationsStream(testWorkflowResultsRepository, executionWorker),
		agent.GetTestWorkflowParallelStepNotificationsStream(testWorkflowResultsRepository, executionWorker),
		clusterId,
		cfg.TestkubeClusterName,
		features,
		&proContext,
		cfg.TestkubeDockerImageVersion,
		eventsEmitter,
		func(environmentId, executionId string) error {
			execution, err := testWorkflowResultsRepository.Get(context.Background(), executionId)
			if err != nil {
				return err
			}
			return testWorkflowExecutor.Start(environmentId, &execution, nil)
		},
	)
	commons.ExitOnError("Starting agent", err)
	g.Go(func() error {
		err = agentHandle.Run(ctx)
		commons.ExitOnError("Running agent", err)
		return nil
	})
	eventsEmitter.Loader.Register(agentHandle)

	if !cfg.DisableTestTriggers {
		k8sCfg, err := k8sclient.GetK8sClientConfig()
		commons.ExitOnError("Getting k8s client config", err)
		testkubeClientset, err := testkubeclientset.NewForConfig(k8sCfg)
		commons.ExitOnError("Creating TestKube Clientset", err)
		// TODO: Check why this simpler options is not working
		//testkubeClientset := testkubeclientset.New(clientset.RESTClient())

		triggerService := triggers.NewService(
			deprecatedSystem,
			clientset,
			testkubeClientset,
			testWorkflowsClient,
			triggerLeaseBackend,
			log.DefaultLogger,
			configMapConfig,
			eventBus,
			metrics,
			executionWorker,
			testWorkflowExecutor,
			testWorkflowResultsRepository,
			triggers.WithHostnameIdentifier(),
			triggers.WithTestkubeNamespace(cfg.TestkubeNamespace),
			triggers.WithWatcherNamespaces(cfg.TestkubeWatcherNamespaces),
			triggers.WithDisableSecretCreation(!secretConfig.AutoCreate),
			triggers.WithProContext(&proContext),
		)
		log.DefaultLogger.Info("starting trigger service")
		g.Go(func() error {
			triggerService.Run(ctx)
			return nil
		})
	} else {
		log.DefaultLogger.Info("test triggers are disabled")
	}

	// telemetry based functions
	g.Go(func() error {
		services.HandleTelemetryHeartbeat(ctx, clusterId, configMapConfig)
		return nil
	})

	log.DefaultLogger.Infow(
		"starting Testkube API server",
		"telemetryEnabled", telemetryEnabled,
		"clusterId", clusterId,
		"namespace", cfg.TestkubeNamespace,
		"version", version.Version,
	)

	if cfg.EnableDebugServer {
		debugSrv := debug.NewDebugServer(cfg.DebugListenAddr)

		g.Go(func() error {
			log.DefaultLogger.Infof("starting debug pprof server")
			return debugSrv.ListenAndServe()
		})
	}

	g.Go(func() error {
		return httpServer.Run(ctx)
	})

	if deprecatedSystem != nil {
		if deprecatedSystem.Reconciler != nil {
			g.Go(func() error {
				return deprecatedSystem.Reconciler.Run(ctx)
			})
		}

		if deprecatedSystem.API != nil {
			g.Go(func() error {
				return deprecatedSystem.API.RunGraphQLServer(ctx)
			})
		}
	}

	if err := g.Wait(); err != nil {
		log.DefaultLogger.Fatalf("Testkube is shutting down: %v", err)
	}
}
