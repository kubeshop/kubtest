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
	// currently configured testkube API context
	Context string `json:"context,omitempty"`
}
