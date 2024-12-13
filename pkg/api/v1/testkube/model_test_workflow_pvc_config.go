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

type TestWorkflowPvcConfig struct {
	// Access mode for claim storage. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes
	AccessModes      []string               `json:"accessModes,omitempty"`
	VolumeMode       *BoxedString           `json:"volumeMode,omitempty"`
	Resources        *TestWorkflowResources `json:"resources,omitempty"`
	StorageClassName *BoxedString           `json:"storageClassName,omitempty"`
	// Volume name is used to identify the volume
	VolumeName string         `json:"volumeName,omitempty"`
	Selector   *LabelSelector `json:"selector,omitempty"`
}
