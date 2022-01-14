/*
 * TestKube API
 *
 * TestKube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

// repository representation for tests in git repositories
type Repository struct {
	// VCS repository type
	Type_ string `json:"type"`
	// uri of content file or git directory
	Uri string `json:"uri"`
	// branch/tag name for checkout
	Branch string `json:"branch"`
	// if needed we can checkout particular path (dir or file) in case of BIG/mono repositories
	Path string `json:"path,omitempty"`
	// git auth token for private repositories
	Token string `json:"token,omitempty"`
}
