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

// CRD based executor data
type ExecutorOutput struct {
	// One of possible output types
	Type_ string `json:"type"`
	// Message/event data passed from executor (like log lines etc)
	Content string           `json:"content,omitempty"`
	Result  *ExecutionResult `json:"result,omitempty"`
	// Timestamp of log
	Time time.Time `json:"time,omitempty"`
}