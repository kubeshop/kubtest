/*
 * TestKube API
 *
 * TestKube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

type ExecutionStatus string

// List of ExecutionStatus
const (
	QUEUED_ExecutionStatus  ExecutionStatus = "queued"
	PENDING_ExecutionStatus ExecutionStatus = "pending"
	SUCCESS_ExecutionStatus ExecutionStatus = "success"
	ERROR__ExecutionStatus  ExecutionStatus = "error"
)
