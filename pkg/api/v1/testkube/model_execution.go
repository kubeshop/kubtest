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

// Test execution
type Execution struct {
	// execution id
	Id string `json:"id,omitempty"`
	// unique test name (CRD Test name)
	TestName string `json:"testName,omitempty"`
	// test namespace
	TestNamespace string `json:"testNamespace,omitempty"`
	// test type e.g. postman/collection
	TestType string `json:"testType,omitempty"`
	// execution name
	Name string `json:"name,omitempty"`
	// environment variables passed to executor
	Envs map[string]string `json:"envs,omitempty"`
	// additional arguments/flags passed to executor binary
	Args      []string            `json:"args,omitempty"`
	Variables map[string]Variable `json:"variables,omitempty"`
	// variables file content - need to be in format for particular executor (e.g. postman envs file)
	VariablesFile string       `json:"variablesFile,omitempty"`
	Content       *TestContent `json:"content,omitempty"`
	// test start time
	StartTime time.Time `json:"startTime,omitempty"`
	// test end time
	EndTime time.Time `json:"endTime,omitempty"`
	// test duration
	Duration        string           `json:"duration,omitempty"`
	ExecutionResult *ExecutionResult `json:"executionResult,omitempty"`
	// execution labels
	Labels map[string]string `json:"labels,omitempty"`
}
