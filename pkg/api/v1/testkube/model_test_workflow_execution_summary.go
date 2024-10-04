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

type TestWorkflowExecutionSummary struct {
	// unique execution identifier
	Id string `json:"id"`
	// execution name
	Name string `json:"name"`
	// sequence number for the execution
	Number int32 `json:"number,omitempty"`
	// when the execution has been scheduled to run
	ScheduledAt time.Time `json:"scheduledAt,omitempty"`
	// when the execution result's status has changed last time (queued, passed, failed)
	StatusAt time.Time                  `json:"statusAt,omitempty"`
	Result   *TestWorkflowResultSummary `json:"result,omitempty"`
	Workflow *TestWorkflowSummary       `json:"workflow"`
	Tags     map[string]string          `json:"tags,omitempty"`
	// running context for the test workflow execution
	RunningContext []TestWorkflowRunningContext `json:"runningContext,omitempty"`
}
