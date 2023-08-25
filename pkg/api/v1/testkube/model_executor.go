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

// CRD based executor data
type Executor struct {
	// ExecutorType one of \"rest\" for rest openapi based executors or \"job\" which will be default runners for testkube soon
	ExecutorType string `json:"executorType,omitempty"`
	// Image for kube-job
	Image string `json:"image,omitempty"`
	// container image pull secrets
	ImagePullSecrets []LocalObjectReference `json:"imagePullSecrets,omitempty"`
	// executor image command
	Command []string `json:"command,omitempty"`
	// additional executor binary argument
	Args []string `json:"args,omitempty"`
	// Types defines what types can be handled by executor e.g. \"postman/collection\", \":curl/command\" etc
	Types []string `json:"types,omitempty"`
	// URI for rest based executors
	Uri string `json:"uri,omitempty"`
	// list of handled content types
	ContentTypes []string `json:"contentTypes,omitempty"`
	// Job template to launch executor
	JobTemplate string `json:"jobTemplate,omitempty"`
	// name of the template resource
	JobTemplateReference string `json:"jobTemplateReference,omitempty"`
	// executor labels
	Labels map[string]string `json:"labels,omitempty"`
	// Available executor features
	Features []string      `json:"features,omitempty"`
	Meta     *ExecutorMeta `json:"meta,omitempty"`
}
