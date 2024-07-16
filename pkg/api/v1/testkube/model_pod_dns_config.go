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

type PodDnsConfig struct {
	Nameservers []string             `json:"nameservers,omitempty"`
	Searches    []string             `json:"searches,omitempty"`
	Options     []PodDnsConfigOption `json:"options,omitempty"`
}