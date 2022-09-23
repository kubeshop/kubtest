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

// execution result data
type ExecutionStepResult struct {
	// step name
	Name       string `json:"name"`
	Duration   string `json:"duration,omitempty"`
	DurationMs int32  `json:"durationMs,omitempty"`
	// execution step status
	Status           string            `json:"status"`
	AssertionResults []AssertionResult `json:"assertionResults,omitempty"`
}
