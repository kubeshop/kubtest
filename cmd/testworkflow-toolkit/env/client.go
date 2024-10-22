package env

import (
	"context"
	"fmt"
	"math"

	corev1 "k8s.io/api/core/v1"

	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"

	config2 "github.com/kubeshop/testkube/cmd/testworkflow-toolkit/env/config"
	"github.com/kubeshop/testkube/pkg/cache"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/config"
	"github.com/kubeshop/testkube/pkg/agent"
	"github.com/kubeshop/testkube/pkg/api/v1/client"
	"github.com/kubeshop/testkube/pkg/cloud"
	cloudexecutor "github.com/kubeshop/testkube/pkg/cloud/data/executor"
	"github.com/kubeshop/testkube/pkg/configmap"
	phttp "github.com/kubeshop/testkube/pkg/http"
	"github.com/kubeshop/testkube/pkg/imageinspector"
	"github.com/kubeshop/testkube/pkg/k8sclient"
	"github.com/kubeshop/testkube/pkg/log"
	"github.com/kubeshop/testkube/pkg/secret"
	"github.com/kubeshop/testkube/pkg/ui"
)

func KubernetesConfig() *rest.Config {
	c, err := rest.InClusterConfig()
	if err != nil {
		var fsErr error
		c, fsErr = k8sclient.GetK8sClientConfig()
		if fsErr != nil {
			ui.Fail(fmt.Errorf("couldn't find Kubernetes config: %w and %w", err, fsErr))
		}
	}
	c.QPS = float32(math.Max(float64(c.QPS), 30))
	c.Burst = int(math.Max(float64(c.Burst), 50))
	return c
}

func Kubernetes() *kubernetes.Clientset {
	c, err := kubernetes.NewForConfig(KubernetesConfig())
	if err != nil {
		ui.Fail(fmt.Errorf("couldn't instantiate Kubernetes client: %w", err))
	}
	return c
}

func ImageInspector() imageinspector.Inspector {
	clientSet := Kubernetes()
	secretClient := &secret.Client{ClientSet: clientSet, Namespace: config2.Namespace(), Log: log.DefaultLogger}
	configMapClient := &configmap.Client{ClientSet: clientSet, Namespace: config2.Namespace(), Log: log.DefaultLogger}
	inspectorStorages := []imageinspector.Storage{imageinspector.NewMemoryStorage()}
	if config2.Config().Worker.ImageInspectorPersistenceEnabled {
		configmapStorage := imageinspector.NewConfigMapStorage(configMapClient, config2.Config().Worker.ImageInspectorPersistenceCacheKey, true)
		_ = configmapStorage.CopyTo(context.Background(), inspectorStorages[0].(imageinspector.StorageTransfer))
		inspectorStorages = append(inspectorStorages, configmapStorage)
	}
	return imageinspector.NewInspector(
		config2.Config().Worker.DefaultRegistry,
		imageinspector.NewCraneFetcher(),
		imageinspector.NewSecretFetcher(secretClient, cache.NewInMemoryCache[*corev1.Secret](), imageinspector.WithSecretCacheTTL(config2.Config().Worker.ImageInspectorPersistenceCacheTTL)),
		inspectorStorages...,
	)
}

func Testkube() client.Client {
	if config2.UseProxy() {
		return client.NewProxyAPIClient(Kubernetes(), client.NewAPIConfig(config2.Namespace(), config.APIServerName, config.APIServerPort))
	}
	httpClient := phttp.NewClient(true)
	sseClient := phttp.NewSSEClient(true)
	return client.NewDirectAPIClient(httpClient, sseClient, fmt.Sprintf("http://%s:%d", config.APIServerName, config.APIServerPort), "")
}

func Cloud(ctx context.Context) (cloudexecutor.Executor, cloud.TestKubeCloudAPIClient) {
	cfg := config2.Config().Worker.Connection
	grpcConn, err := agent.NewGRPCConnection(ctx, cfg.TlsInsecure, cfg.SkipVerify, cfg.Url, "", "", "", log.DefaultLogger)
	if err != nil {
		ui.Fail(fmt.Errorf("failed to connect with Cloud: %w", err))
	}
	grpcClient := cloud.NewTestKubeCloudAPIClient(grpcConn)
	return cloudexecutor.NewCloudGRPCExecutor(grpcClient, grpcConn, cfg.ApiKey), grpcClient
}
