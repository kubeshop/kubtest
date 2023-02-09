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

// test execution request update body
type ExecutionUpdateRequest struct {
	// test execution custom name
	Name *string `json:"name,omitempty"`
	// unique test suite name (CRD Test suite name), if it's run as a part of test suite
	TestSuiteName *string `json:"testSuiteName,omitempty"`
	// test execution number
	Number *int32 `json:"number,omitempty"`
	// test execution labels
	ExecutionLabels *map[string]string `json:"executionLabels,omitempty"`
	// test kubernetes namespace (\"testkube\" when not set)
	Namespace *string `json:"namespace,omitempty"`
	// variables file content - need to be in format for particular executor (e.g. postman envs file)
	VariablesFile *string              `json:"variablesFile,omitempty"`
	Variables     *map[string]Variable `json:"variables,omitempty"`
	// test secret uuid
	TestSecretUUID *string `json:"testSecretUUID,omitempty"`
	// test suite secret uuid, if it's run as a part of test suite
	TestSuiteSecretUUID *string `json:"testSuiteSecretUUID,omitempty"`
	// container executor image command
	Command *[]string `json:"command,omitempty"`
	// additional executor binary arguments
	Args *[]string `json:"args,omitempty"`
	// container image, executor will run inside this image
	Image *string `json:"image,omitempty"`
	// container image pull secrets
	ImagePullSecrets *[]LocalObjectReference `json:"imagePullSecrets,omitempty"`
	// Environment variables passed to executor.
	// Deprecated: use Basic Variables instead
	Envs *map[string]string `json:"envs,omitempty"`
	// Execution variables passed to executor from secrets.
	// Deprecated: use Secret Variables instead
	SecretEnvs *map[string]string `json:"secretEnvs,omitempty"`
	// whether to start execution sync or async
	Sync *bool `json:"sync,omitempty"`
	// http proxy for executor containers
	HttpProxy *string `json:"httpProxy,omitempty"`
	// https proxy for executor containers
	HttpsProxy *string `json:"httpsProxy,omitempty"`
	// whether to run test as negative test
	NegativeTest *bool `json:"negativeTest,omitempty"`
	// whether negativeTest was changed by user
	IsNegativeTestChangedOnRun *bool `json:"isNegativeTestChangedOnRun,omitempty"`
	// duration in seconds the test may be active, until its stopped
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty"`
	// list of file paths that need to be copied into the test from uploads
	Uploads *[]string `json:"uploads,omitempty"`
	// minio bucket name to get uploads from
	BucketName      *string                 `json:"bucketName,omitempty"`
	ArtifactRequest **ArtifactUpdateRequest `json:"artifactRequest,omitempty"`
	// job template extensions
	JobTemplate    *string                    `json:"jobTemplate,omitempty"`
	ContentRequest **TestContentUpdateRequest `json:"contentRequest,omitempty"`
	// script to run before test execution
	PreRunScript *string `json:"preRunScript,omitempty"`
	// scraper template extensions
	ScraperTemplate *string `json:"scraperTemplate,omitempty"`
}
