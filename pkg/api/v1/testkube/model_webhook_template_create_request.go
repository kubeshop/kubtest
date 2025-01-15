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

// webhook template create request body
type WebhookTemplateCreateRequest struct {
	Name      string      `json:"name"`
	Namespace string      `json:"namespace,omitempty"`
	Uri       string      `json:"uri,omitempty"`
	Events    []EventType `json:"events,omitempty"`
	// Labels to filter for tests and test suites
	Selector string `json:"selector,omitempty"`
	// will load the generated payload for notification inside the object
	PayloadObjectField string `json:"payloadObjectField,omitempty"`
	// golang based template for notification payload
	PayloadTemplate string `json:"payloadTemplate,omitempty"`
	// name of the template resource
	PayloadTemplateReference string `json:"payloadTemplateReference,omitempty"`
	// webhook headers (golang template supported)
	Headers map[string]string `json:"headers,omitempty"`
	// webhook labels
	Labels map[string]string `json:"labels,omitempty"`
	// webhook annotations
	Annotations map[string]string `json:"annotations,omitempty"`
	// whether webhook is disabled
	Disabled   bool                              `json:"disabled,omitempty"`
	Config     map[string]WebhookConfigValue     `json:"config,omitempty"`
	Parameters map[string]WebhookParameterSchema `json:"parameters,omitempty"`
}
