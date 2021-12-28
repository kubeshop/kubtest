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

import (
	"time"
)

// API server test scripts executions container
type TestExecution struct {
	// execution id
	Id string `json:"id,omitempty"`
	// execution name
	Name   string      `json:"name,omitempty"`
	Status *TestStatus `json:"status,omitempty"`
	// environment variables passed to executor
	Envs map[string]string `json:"envs,omitempty"`
	// execution params passed to executor converted to vars for usage in tests
	Params map[string]string `json:"params,omitempty"`
	// test start time
	StartTime time.Time `json:"startTime,omitempty"`
	// test end time
	EndTime time.Time `json:"endTime,omitempty"`
	// steps execution restults
	StepResults []TestStepExecutionResult `json:"stepResults,omitempty"`
	// test execution tags
	Tags []string `json:"tags,omitempty"`
}
