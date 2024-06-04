// Copyright 2024 Testkube.
//
// Licensed as a Testkube Pro file under the Testkube Community
// License (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
//
//	https://github.com/kubeshop/testkube/blob/main/licenses/TCL.txt

package testworkflows

import (
	"fmt"
	"maps"

	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	executorv1 "github.com/kubeshop/testkube-operator/api/executor/v1"
	testsv3 "github.com/kubeshop/testkube-operator/api/tests/v3"
	testsuitesv3 "github.com/kubeshop/testkube-operator/api/testsuite/v3"
	testworkflowsv1 "github.com/kubeshop/testkube-operator/api/testworkflows/v1"
	"github.com/kubeshop/testkube/internal/common"
)

func MapExecutorKubeToTestWorkflowTemplateKube(v executorv1.Executor) testworkflowsv1.TestWorkflowTemplate {
	var workingDir *string
	if v.Spec.UseDataDirAsWorkingDir {
		workingDir = common.Ptr("/data")
	}

	var steps []testworkflowsv1.IndependentStep
	if len(v.Spec.Command) != 0 || len(v.Spec.Args) != 0 {
		steps = append(steps, testworkflowsv1.IndependentStep{
			StepMeta: testworkflowsv1.StepMeta{
				Name: "Run tests",
			},
			StepOperations: testworkflowsv1.StepOperations{
				Run: &testworkflowsv1.StepRun{
					ContainerConfig: testworkflowsv1.ContainerConfig{
						Command: &v.Spec.Command,
						Args:    &v.Spec.Args,
					},
				},
			},
		})
	}

	return testworkflowsv1.TestWorkflowTemplate{
		ObjectMeta: metav1.ObjectMeta{
			Name:        v.Name,
			Namespace:   v.Namespace,
			Labels:      v.Labels,
			Annotations: v.Annotations,
		},
		Spec: testworkflowsv1.TestWorkflowTemplateSpec{
			TestWorkflowSpecBase: testworkflowsv1.TestWorkflowSpecBase{
				Container: &testworkflowsv1.ContainerConfig{
					WorkingDir: workingDir,
					Image:      v.Spec.Image,
				},
				Pod: &testworkflowsv1.PodConfig{
					ImagePullSecrets: v.Spec.ImagePullSecrets,
				},
			},
			Steps: steps,
		},
	}
}

func MapTestContentKubeToContentKube(v testsv3.TestContent) testworkflowsv1.Content {
	var files []testworkflowsv1.ContentFile
	if v.Data != "" {
		files = append(files, testworkflowsv1.ContentFile{
			Path:    "/data/content",
			Content: v.Data,
		})
	}

	var git *testworkflowsv1.ContentGit
	if v.Repository != nil {
		revision := ""
		if v.Repository.Branch != "" {
			revision = v.Repository.Branch
		}

		if v.Repository.Commit != "" {
			revision = v.Repository.Commit
		}

		var paths []string
		if v.Repository.Path != "" {
			paths = append(paths, v.Repository.Path)
		}

		var username, token *corev1.EnvVarSource
		if v.Repository.UsernameSecret != nil {
			username = &corev1.EnvVarSource{
				SecretKeyRef: &corev1.SecretKeySelector{
					LocalObjectReference: corev1.LocalObjectReference{
						Name: v.Repository.UsernameSecret.Name,
					},
					Key: v.Repository.UsernameSecret.Key,
				},
			}
		}

		if v.Repository.TokenSecret != nil {
			token = &corev1.EnvVarSource{
				SecretKeyRef: &corev1.SecretKeySelector{
					LocalObjectReference: corev1.LocalObjectReference{
						Name: v.Repository.TokenSecret.Name,
					},
					Key: v.Repository.TokenSecret.Key,
				},
			}
		}

		git = &testworkflowsv1.ContentGit{
			Uri:          v.Repository.Uri,
			Revision:     revision,
			UsernameFrom: username,
			TokenFrom:    token,
			AuthType:     v.Repository.AuthType,
			Paths:        paths,
		}
	}

	return testworkflowsv1.Content{
		Files: files,
		Git:   git,
	}
}

func MapExecutionRequestKubeToContainerConfigKube(v testsv3.ExecutionRequest) testworkflowsv1.ContainerConfig {
	var env []corev1.EnvVar
	for _, e := range v.Variables {
		if e.Value != "" {
			env = append(env, corev1.EnvVar{
				Name:  e.Name,
				Value: e.Value,
			})
		} else if e.ValueFrom.SecretKeyRef != nil {
			env = append(env, corev1.EnvVar{
				Name: e.Name,
				ValueFrom: &corev1.EnvVarSource{
					SecretKeyRef: &corev1.SecretKeySelector{
						LocalObjectReference: corev1.LocalObjectReference{
							Name: e.ValueFrom.SecretKeyRef.Name,
						},
						Key: e.ValueFrom.SecretKeyRef.Key,
					},
				},
			})
		}
	}

	var envFrom []corev1.EnvFromSource
	for _, configMap := range v.EnvConfigMaps {
		envFrom = append(envFrom, corev1.EnvFromSource{
			ConfigMapRef: &corev1.ConfigMapEnvSource{
				LocalObjectReference: corev1.LocalObjectReference{
					Name: configMap.Name,
				},
			},
		})
	}

	for _, secret := range v.EnvSecrets {
		envFrom = append(envFrom, corev1.EnvFromSource{
			SecretRef: &corev1.SecretEnvSource{
				LocalObjectReference: corev1.LocalObjectReference{
					Name: secret.Name,
				},
			},
		})
	}

	return testworkflowsv1.ContainerConfig{
		Image:   v.Image,
		Env:     env,
		EnvFrom: envFrom,
	}
}

func MapExecutionRequestKubeToJobConfigKube(v testsv3.ExecutionRequest) testworkflowsv1.JobConfig {
	var activeDeadlineSeconds *int64
	if v.ActiveDeadlineSeconds != 0 {
		activeDeadlineSeconds = &v.ActiveDeadlineSeconds
	}

	return testworkflowsv1.JobConfig{
		Labels:                v.ExecutionLabels,
		ActiveDeadlineSeconds: activeDeadlineSeconds,
		Namespace:             v.ExecutionNamespace,
	}
}

func MapExecutionRequestKubeToPodConfigKube(v testsv3.ExecutionRequest) testworkflowsv1.PodConfig {
	return testworkflowsv1.PodConfig{
		ImagePullSecrets: v.ImagePullSecrets,
	}
}

func MapExecutionRequestKubeToStepKube(v testsv3.ExecutionRequest) testworkflowsv1.Step {
	var before, after []testworkflowsv1.Step
	if v.PreRunScript != "" {
		before = append(before, testworkflowsv1.Step{
			StepMeta: testworkflowsv1.StepMeta{
				Name: "PreRun script",
			},
			StepOperations: testworkflowsv1.StepOperations{
				Shell: v.PreRunScript,
			},
		})
	}

	if v.PostRunScript != "" {
		after = append(after, testworkflowsv1.Step{
			StepMeta: testworkflowsv1.StepMeta{
				Name: "PostRun script",
			},
			StepOperations: testworkflowsv1.StepOperations{
				Shell: v.PostRunScript,
			},
		})
	}

	if v.ArtifactRequest != nil {
		after = append(after, testworkflowsv1.Step{
			StepMeta: testworkflowsv1.StepMeta{
				Name: "Save artifacts",
			},
			StepOperations: testworkflowsv1.StepOperations{
				Artifacts: &testworkflowsv1.StepArtifacts{
					Paths: v.ArtifactRequest.Dirs,
				},
			},
		})
	}

	return testworkflowsv1.Step{
		StepMeta: testworkflowsv1.StepMeta{
			Name: "Run tests",
		},
		StepControl: testworkflowsv1.StepControl{
			Negative: v.NegativeTest,
		},
		Setup: before,
		StepOperations: testworkflowsv1.StepOperations{
			Run: &testworkflowsv1.StepRun{
				ContainerConfig: testworkflowsv1.ContainerConfig{
					Command: &v.Command,
					Args:    &v.Args,
				},
			},
		},
		Steps: after,
	}
}

func MapTestKubeToTestWorkflowKube(v testsv3.Test, templateName string) testworkflowsv1.TestWorkflow {
	var events []testworkflowsv1.Event
	if v.Spec.Schedule != "" {
		events = append(events, testworkflowsv1.Event{
			Cronjob: &testworkflowsv1.CronJobConfig{
				Cron: v.Spec.Schedule,
			},
		})
	}

	workingDir := ""
	if v.Spec.Content != nil && v.Spec.Content.Repository != nil {
		workingDir = v.Spec.Content.Repository.WorkingDir
	}

	container := common.MapPtr(v.Spec.ExecutionRequest, MapExecutionRequestKubeToContainerConfigKube)
	if workingDir != "" {
		if container == nil {
			container = &testworkflowsv1.ContainerConfig{}
		}

		container.WorkingDir = &workingDir
	}

	job := common.MapPtr(v.Spec.ExecutionRequest, MapExecutionRequestKubeToJobConfigKube)
	if v.Labels != nil {
		if job == nil {
			job = &testworkflowsv1.JobConfig{}
		}

		if job.Labels == nil {
			job.Labels = make(map[string]string)
		}

		maps.Copy(job.Labels, v.Labels)
	}

	step := common.MapPtr(v.Spec.ExecutionRequest, MapExecutionRequestKubeToStepKube)
	if step == nil {
		step = &testworkflowsv1.Step{
			StepMeta: testworkflowsv1.StepMeta{
				Name: "Run tests",
			},
		}
	}

	step.Template = &testworkflowsv1.TemplateRef{
		Name: templateName,
	}

	return testworkflowsv1.TestWorkflow{
		ObjectMeta: metav1.ObjectMeta{
			Name:        v.Name,
			Namespace:   v.Namespace,
			Labels:      v.Labels,
			Annotations: v.Annotations,
		},
		Description: v.Spec.Description,
		Spec: testworkflowsv1.TestWorkflowSpec{
			TestWorkflowSpecBase: testworkflowsv1.TestWorkflowSpecBase{
				Events:    events,
				Content:   common.MapPtr(v.Spec.Content, MapTestContentKubeToContentKube),
				Container: container,
				Job:       job,
				Pod:       common.MapPtr(v.Spec.ExecutionRequest, MapExecutionRequestKubeToPodConfigKube),
			},
			Steps: []testworkflowsv1.Step{*step},
		},
	}
}

func MapTestSuiteExecutionRequestKubeToContainerConfigKube(v testsuitesv3.TestSuiteExecutionRequest) testworkflowsv1.ContainerConfig {
	var env []corev1.EnvVar
	for _, e := range v.Variables {
		if e.Value != "" {
			env = append(env, corev1.EnvVar{
				Name:  e.Name,
				Value: e.Value,
			})
		} else if e.ValueFrom.SecretKeyRef != nil {
			env = append(env, corev1.EnvVar{
				Name: e.Name,
				ValueFrom: &corev1.EnvVarSource{
					SecretKeyRef: &corev1.SecretKeySelector{
						LocalObjectReference: corev1.LocalObjectReference{
							Name: e.ValueFrom.SecretKeyRef.Name,
						},
						Key: e.ValueFrom.SecretKeyRef.Key,
					},
				},
			})
		}
	}

	return testworkflowsv1.ContainerConfig{
		Env: env,
	}
}

func MapTestSuiteExecutionRequestKubeToJobConfigKube(v testsuitesv3.TestSuiteExecutionRequest) testworkflowsv1.JobConfig {
	labels := v.Labels
	if v.ExecutionLabels != nil {
		if labels == nil {
			labels = make(map[string]string)
		}

		maps.Copy(labels, v.ExecutionLabels)
	}

	return testworkflowsv1.JobConfig{
		Labels:    v.ExecutionLabels,
		Namespace: v.Namespace,
	}
}

func MapTestSuiteStepExecutionRequestKubeToStepControlKube(v *testsuitesv3.TestSuiteStepExecutionRequest) testworkflowsv1.StepControl {
	if v == nil {
		return testworkflowsv1.StepControl{}
	}

	return testworkflowsv1.StepControl{
		Negative: v.NegativeTest,
	}
}

func MapTestSuiteStepExecutionRequestKubeToStepDefaultsKube(v *testsuitesv3.TestSuiteStepExecutionRequest) testworkflowsv1.StepDefaults {
	if v == nil {
		return testworkflowsv1.StepDefaults{}
	}

	var env []corev1.EnvVar
	for _, e := range v.Variables {
		if e.Value != "" {
			env = append(env, corev1.EnvVar{
				Name:  e.Name,
				Value: e.Value,
			})
		} else if e.ValueFrom.SecretKeyRef != nil {
			env = append(env, corev1.EnvVar{
				Name: e.Name,
				ValueFrom: &corev1.EnvVarSource{
					SecretKeyRef: &corev1.SecretKeySelector{
						LocalObjectReference: corev1.LocalObjectReference{
							Name: e.ValueFrom.SecretKeyRef.Name,
						},
						Key: e.ValueFrom.SecretKeyRef.Key,
					},
				},
			})
		}
	}

	return testworkflowsv1.StepDefaults{
		Container: &testworkflowsv1.ContainerConfig{
			Env:     env,
			Command: &v.Command,
			Args:    &v.Args,
		},
	}
}

func MapTestSuiteStepSpecKubeToStepKube(v testsuitesv3.TestSuiteStepSpec) testworkflowsv1.Step {
	var execute *testworkflowsv1.StepExecute
	if v.Test != "" {
		execute = &testworkflowsv1.StepExecute{
			Workflows: []testworkflowsv1.StepExecuteWorkflow{
				{
					Name: v.Test,
				},
			},
		}
	}

	return testworkflowsv1.Step{
		StepMeta: testworkflowsv1.StepMeta{
			Name: "Run tests",
		},
		StepControl:  MapTestSuiteStepExecutionRequestKubeToStepControlKube(v.ExecutionRequest),
		StepDefaults: MapTestSuiteStepExecutionRequestKubeToStepDefaultsKube(v.ExecutionRequest),
		StepOperations: testworkflowsv1.StepOperations{
			Delay:   fmt.Sprint(v.Delay),
			Execute: execute,
		},
	}
}

func MapTestSuiteBatchStepKubeToStepKube(v testsuitesv3.TestSuiteBatchStep) testworkflowsv1.Step {
	return testworkflowsv1.Step{
		StepMeta: testworkflowsv1.StepMeta{
			Name: "Run test workflows",
		},
		StepControl: testworkflowsv1.StepControl{
			Optional: !v.StopOnFailure,
		},
		Steps: common.MapSlice(v.Execute, MapTestSuiteStepSpecKubeToStepKube),
	}
}

func MapTestSuiteKubeToTestWorkflowKube(v testsuitesv3.TestSuite, templateName string) testworkflowsv1.TestWorkflow {
	var events []testworkflowsv1.Event
	if v.Spec.Schedule != "" {
		events = append(events, testworkflowsv1.Event{
			Cronjob: &testworkflowsv1.CronJobConfig{
				Cron: v.Spec.Schedule,
			},
		})
	}

	job := common.MapPtr(v.Spec.ExecutionRequest, MapTestSuiteExecutionRequestKubeToJobConfigKube)
	if v.Labels != nil {
		if job == nil {
			job = &testworkflowsv1.JobConfig{}
		}

		if job.Labels == nil {
			job.Labels = make(map[string]string)
		}

		maps.Copy(job.Labels, v.Labels)
	}

	return testworkflowsv1.TestWorkflow{
		ObjectMeta: metav1.ObjectMeta{
			Name:        v.Name,
			Namespace:   v.Namespace,
			Labels:      v.Labels,
			Annotations: v.Annotations,
		},
		Description: v.Spec.Description,
		Spec: testworkflowsv1.TestWorkflowSpec{
			TestWorkflowSpecBase: testworkflowsv1.TestWorkflowSpecBase{
				Events:    events,
				Container: common.MapPtr(v.Spec.ExecutionRequest, MapTestSuiteExecutionRequestKubeToContainerConfigKube),
				Job:       job,
			},
			Setup: common.MapSlice(v.Spec.Before, MapTestSuiteBatchStepKubeToStepKube),
			Steps: common.MapSlice(v.Spec.Steps, MapTestSuiteBatchStepKubeToStepKube),
			After: common.MapSlice(v.Spec.After, MapTestSuiteBatchStepKubeToStepKube),
		},
	}
}
