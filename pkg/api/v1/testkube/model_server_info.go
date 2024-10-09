/*
 * Testkube API
 *
 * Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

// Server information with build version, build commit etc.
type ServerInfo struct {
	// build version
	Version string `json:"version"`
	// build commit
	Commit string `json:"commit,omitempty"`
	// server installaton namespace
	Namespace string `json:"namespace,omitempty"`
	// cluster id
	ClusterId string `json:"clusterId,omitempty"`
	// currently configured testkube API context
	Context string `json:"context,omitempty"`
	// cloud organization id
	OrgId string `json:"orgId,omitempty"`
	// cloud env id
	EnvId string `json:"envId,omitempty"`
	// helm chart version
	HelmchartVersion string `json:"helmchartVersion,omitempty"`
	// dashboard uri
	DashboardUri string `json:"dashboardUri,omitempty"`
	// enable secret endpoint to list secrets in namespace
	EnableSecretEndpoint bool `json:"enableSecretEndpoint,omitempty"`
	// disable secret creation for tests and test sources
	DisableSecretCreation bool          `json:"disableSecretCreation,omitempty"`
	Secret                *SecretConfig `json:"secret,omitempty"`
	Features              *Features     `json:"features,omitempty"`
	// execution namespaces
	ExecutionNamespaces []string `json:"executionNamespaces,omitempty"`
	// docker image version
	DockerImageVersion string `json:"dockerImageVersion,omitempty"`
}
