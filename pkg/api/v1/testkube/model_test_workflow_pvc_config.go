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
	// Specify whether the PVC should be shared between test workflow pods
	Shared bool `json:"shared,omitempty"`
	// Access mode for claim storage. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes
	AccessModes []string `json:"accessModes,omitempty"`
	// Volume mode indicates the consumption of the volume as either a filesystem or block device. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#volume-mode
	VolumeMode string                 `json:"volumeMode,omitempty"`
	Resources  *TestWorkflowResources `json:"resources,omitempty"`
	// Storage class name specifies the name of a StorageClass. More info: https://kubernetes.io/docs/concepts/storage/storage-classes/
	StorageClassName string         `json:"storageClassName,omitempty"`
	Selector         *LabelSelector `json:"selector,omitempty"`
}
