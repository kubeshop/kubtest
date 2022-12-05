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

// test source update request body
type TestSourceUpdateRequest struct {
	// test type
	Type_      *string            `json:"type,omitempty"`
	Repository **RepositoryUpdate `json:"repository,omitempty"`
	// test content data as *string
	Data *string `json:"data,omitempty"`
	// test content
	Uri *string `json:"uri,omitempty"`
	// test source name
	Name *string `json:"name,omitempty"`
	// test source namespace
	Namespace *string `json:"namespace,omitempty"`
	// test source labels
	Labels *map[string]string `json:"labels,omitempty"`
}
