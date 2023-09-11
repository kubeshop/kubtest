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

// template update request body
type TemplateUpdateRequest struct {
	// template name for reference
	Name *string `json:"name"`
	// template namespace
	Namespace *string       `json:"namespace,omitempty"`
	Type_     *TemplateType `json:"type"`
	// template body to use
	Body *string `json:"body"`
	// template labels
	Labels *map[string]string `json:"labels,omitempty"`
}
