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

type TestWorkflowExecutionRequest struct {
	// custom execution name
	Name   string            `json:"name,omitempty"`
	Config map[string]string `json:"config,omitempty"`
	// test workflow execution name started the test workflow execution
	TestWorkflowExecutionName string `json:"testWorkflowExecutionName,omitempty"`
	// whether webhooks on the executions of this test workflow are disabled
	DisableWebhooks bool `json:"disableWebhooks,omitempty"`
	// running context for the test workflow execution
	RunningContext []TestWorkflowRunningContext `json:"runningContext,omitempty"`
}
