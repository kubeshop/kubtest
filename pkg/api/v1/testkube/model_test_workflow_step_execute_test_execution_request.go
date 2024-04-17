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

type TestWorkflowStepExecuteTestExecutionRequest struct {
	// test execution custom name
	Name string `json:"name,omitempty"`
	// test execution labels
	ExecutionLabels map[string]string `json:"executionLabels,omitempty"`
	// in case the variables file is too big, it will be uploaded
	IsVariablesFileUploaded bool `json:"isVariablesFileUploaded,omitempty"`
	// variables file content - need to be in format for particular executor (e.g. postman envs file)
	VariablesFile string              `json:"variablesFile,omitempty"`
	Variables     map[string]Variable `json:"variables,omitempty"`
	// test secret uuid
	TestSecretUUID string `json:"testSecretUUID,omitempty"`
	// executor image command
	Command []string `json:"command,omitempty"`
	// additional executor binary arguments
	Args []string `json:"args,omitempty"`
	// usage mode for arguments
	ArgsMode string `json:"argsMode,omitempty"`
	// container image, executor will run inside this image
	Image string `json:"image,omitempty"`
	// container image pull secrets
	ImagePullSecrets []LocalObjectReference `json:"imagePullSecrets,omitempty"`
	// whether to start execution sync or async
	Sync bool `json:"sync,omitempty"`
	// http proxy for executor containers
	HttpProxy string `json:"httpProxy,omitempty"`
	// https proxy for executor containers
	HttpsProxy string `json:"httpsProxy,omitempty"`
	// whether to run test as negative test
	NegativeTest bool `json:"negativeTest,omitempty"`
	// duration in seconds the test may be active, until its stopped
	ActiveDeadlineSeconds int64            `json:"activeDeadlineSeconds,omitempty"`
	ArtifactRequest       *ArtifactRequest `json:"artifactRequest,omitempty"`
	// job template extensions
	JobTemplate string `json:"jobTemplate,omitempty"`
	// cron job template extensions
	CronJobTemplate string `json:"cronJobTemplate,omitempty"`
	// script to run before test execution
	PreRunScript string `json:"preRunScript,omitempty"`
	// script to run after test execution
	PostRunScript string `json:"postRunScript,omitempty"`
	// execute post run script before scraping (prebuilt executor only)
	ExecutePostRunScriptBeforeScraping bool `json:"executePostRunScriptBeforeScraping,omitempty"`
	// run scripts using source command (container executor only)
	SourceScripts bool `json:"sourceScripts,omitempty"`
	// scraper template extensions
	ScraperTemplate string `json:"scraperTemplate,omitempty"`
	// pvc template extensions
	PvcTemplate string `json:"pvcTemplate,omitempty"`
	// config map references
	EnvConfigMaps []EnvReference `json:"envConfigMaps,omitempty"`
	// secret references
	EnvSecrets []EnvReference `json:"envSecrets,omitempty"`
	// namespace for test execution (Pro edition only)
	ExecutionNamespace string `json:"executionNamespace,omitempty"`
}
