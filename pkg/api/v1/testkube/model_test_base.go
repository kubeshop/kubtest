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

type Test struct {
	Name        string      `json:"name"`
	Description string      `json:"description,omitempty"`
	Status      *TestStatus `json:"status"`
	// Run this step before whole suite
	Before []TestStep `json:"before,omitempty"`
	// Steps to run
	Steps []TestStep `json:"steps"`
	// Run this step after whole suite
	After   []TestStep `json:"after,omitempty"`
	Repeats int32      `json:"repeats,omitempty"`
}
