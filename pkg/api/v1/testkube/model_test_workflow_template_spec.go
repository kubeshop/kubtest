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

type TestWorkflowTemplateSpec struct {
	Config    map[string]TestWorkflowParameterSchema        `json:"config,omitempty"`
	Content   *TestWorkflowContent                          `json:"content,omitempty"`
	Services  map[string]TestWorkflowIndependentServiceSpec `json:"services,omitempty"`
	Container *TestWorkflowContainerConfig                  `json:"container,omitempty"`
	Job       *TestWorkflowJobConfig                        `json:"job,omitempty"`
	Pod       *TestWorkflowPodConfig                        `json:"pod,omitempty"`
	Setup     []TestWorkflowIndependentStep                 `json:"setup,omitempty"`
	Steps     []TestWorkflowIndependentStep                 `json:"steps,omitempty"`
	After     []TestWorkflowIndependentStep                 `json:"after,omitempty"`
	Events    []TestWorkflowEvent                           `json:"events,omitempty"`
	Execution *TestWorkflowTagSchema                        `json:"execution,omitempty"`
}
