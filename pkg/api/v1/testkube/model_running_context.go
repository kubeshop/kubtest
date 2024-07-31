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

// running context for test or test suite execution
type RunningContext struct {
	// One of possible context types
	Type_ string `json:"type"`
	// Context value depending from its type
	Context   string            `json:"context,omitempty"`
	RunnerIds []string          `json:"runnerIds,omitempty"`
	Tags      map[string]string `json:"tags,omitempty"`
}
