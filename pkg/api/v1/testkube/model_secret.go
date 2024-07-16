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

import (
	"time"
)

// Secret with keys
type Secret struct {
	// secret name
	Name string `json:"name"`
	// secret namespace
	Namespace string `json:"namespace,omitempty"`
	// secret type
	Type_     string    `json:"type,omitempty"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
	UpdatedAt time.Time `json:"updatedAt,omitempty"`
	// is this Secret controlled by Testkube
	Controlled bool         `json:"controlled"`
	Owner      *SecretOwner `json:"owner,omitempty"`
	// labels associated with the secret
	Labels map[string]string `json:"labels,omitempty"`
	// secret keys
	Keys []string `json:"keys,omitempty"`
}