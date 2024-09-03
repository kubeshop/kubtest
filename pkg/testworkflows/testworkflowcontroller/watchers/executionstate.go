package watchers

import (
	"encoding/json"
	"errors"
	"fmt"
	"strings"
	"time"

	batchv1 "k8s.io/api/batch/v1"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	"github.com/kubeshop/testkube/internal/common"
	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor/action/actiontypes"
	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor/constants"
	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor/stage"
)

var (
	ErrMissingData = errors.New("missing data to fulfill request")
)

type executionState struct {
	job       Job
	pod       Pod
	jobEvents JobEvents
	podEvents PodEvents
	options   *ExecutionStateOptions
}

type ExecutionStateOptions struct {
	ResourceId     string
	RootResourceId string
	Namespace      string
	Signature      []stage.Signature
	ActionGroups   actiontypes.ActionGroups
	ScheduledAt    time.Time
}

type ExecutionState interface {
	Job() Job
	Pod() Pod
	JobEvents() JobEvents
	PodEvents() PodEvents
	JobExists() bool
	PodExists() bool

	Namespace() string
	ResourceId() string
	RootResourceId() string
	PodName() string
	PodNodeName() string
	PodIP() string
	PodDeletionTimestamp() time.Time
	CompletionTimestamp() time.Time
	ContainerStartTimestamp(name string) time.Time
	ContainerStarted(name string) bool
	ContainerFinished(name string) bool
	Signature() ([]stage.Signature, error)
	ActionGroups() (actiontypes.ActionGroups, error)

	ExecutionError() string
	JobExecutionError() string
	PodExecutionError() string

	PodCreationTimestamp() time.Time
	EstimatedPodCreationTimestamp() time.Time

	PodStartTimestamp() time.Time
	EstimatedPodStartTimestamp() time.Time

	JobCreationTimestamp() time.Time
	EstimatedJobCreationTimestamp() time.Time

	PodCreated() bool
	PodStarted() bool
	Completed() bool

	EstimatedJob() (Job, error)
	EstimatedPod() (Pod, error)
	MustEstimatedJob() Job
	MustEstimatedPod() Pod
	EstimatedJobExists() bool
	EstimatedPodExists() bool
}

func NewExecutionState(job Job, pod Pod, jobEvents JobEvents, podEvents PodEvents, opts *ExecutionStateOptions) ExecutionState {
	if opts == nil {
		opts = &ExecutionStateOptions{}
	}
	return &executionState{
		job:       job,
		pod:       pod,
		jobEvents: jobEvents,
		podEvents: podEvents,
		options:   opts,
	}
}

func (e *executionState) Job() Job {
	return e.job
}

func (e *executionState) Pod() Pod {
	return e.pod
}

func (e *executionState) JobExists() bool {
	return e.job != nil
}

func (e *executionState) PodExists() bool {
	return e.pod != nil
}

func (e *executionState) PodName() string {
	if e.pod != nil {
		return e.pod.Name()
	}
	if e.podEvents.Name() != "" {
		return e.podEvents.Name()
	}
	if e.jobEvents.PodName() != "" {
		return e.jobEvents.PodName()
	}
	return ""
}

func (e *executionState) PodNodeName() string {
	if e.pod != nil && e.pod.NodeName() != "" {
		return e.pod.NodeName()
	}
	if e.podEvents.NodeName() != "" {
		return e.podEvents.NodeName()
	}
	return ""
}

func (e *executionState) PodIP() string {
	if e.pod != nil {
		return e.pod.IP()
	}
	return ""
}

func (e *executionState) PodDeletionTimestamp() time.Time {
	if e.pod != nil && e.pod.Original().DeletionTimestamp != nil {
		return e.pod.Original().DeletionTimestamp.Time
	}
	if !e.jobEvents.PodDeletionTimestamp().IsZero() {
		return e.jobEvents.PodDeletionTimestamp()
	}
	return time.Time{}
}

func (e *executionState) CompletionTimestamp() time.Time {
	if !e.PodDeletionTimestamp().IsZero() {
		return e.PodDeletionTimestamp()
	}
	if e.pod != nil && !e.pod.FinishTimestamp().IsZero() {
		return e.pod.FinishTimestamp()
	}
	if e.job != nil && !e.job.FinishTimestamp().IsZero() {
		return e.job.FinishTimestamp()
	}
	if !e.podEvents.FinishTimestamp().IsZero() {
		return e.podEvents.FinishTimestamp()
	}
	if !e.jobEvents.FinishTimestamp().IsZero() {
		return e.jobEvents.FinishTimestamp()
	}
	return time.Time{}
}

func (e *executionState) ContainerStartTimestamp(name string) time.Time {
	if e.pod != nil && !e.pod.ContainerStartTimestamp(name).IsZero() {
		return e.pod.ContainerStartTimestamp(name)
	}
	return e.podEvents.Container(name).StartTimestamp()
}

func (e *executionState) Namespace() string {
	if e.options.Namespace != "" {
		return e.options.Namespace
	}
	if e.job != nil && e.job.Namespace() != "" {
		return e.job.Namespace()
	}
	if e.pod != nil && e.pod.Namespace() != "" {
		return e.pod.Namespace()
	}
	if e.jobEvents.Namespace() != "" {
		return e.jobEvents.Namespace()
	}
	if e.podEvents.Namespace() != "" {
		return e.podEvents.Namespace()
	}
	return ""
}

func (e *executionState) ResourceId() string {
	if e.options.ResourceId != "" {
		return e.options.ResourceId
	}
	if e.job != nil && e.job.ResourceId() != "" {
		return e.job.ResourceId()
	}
	if e.pod != nil && e.pod.ResourceId() != "" {
		return e.pod.ResourceId()
	}
	// Fallback computing that from the pod name
	if e.PodName() != "" {
		return e.PodName()[0:strings.LastIndex(e.PodName(), "-")]
	}
	return ""
}

func (e *executionState) RootResourceId() string {
	if e.options.ResourceId != "" {
		return e.options.ResourceId
	}
	if e.job != nil && e.job.RootResourceId() != "" {
		return e.job.RootResourceId()
	}
	if e.pod != nil && e.pod.RootResourceId() != "" {
		return e.pod.RootResourceId()
	}
	// Fallback computing that from the pod name
	if e.PodName() != "" {
		return e.PodName()[0:strings.Index(e.PodName(), "-")]
	}
	return ""
}

func (e *executionState) JobEvents() JobEvents {
	return e.jobEvents
}

func (e *executionState) PodEvents() PodEvents {
	return e.podEvents
}

func (e *executionState) Signature() ([]stage.Signature, error) {
	if e.job != nil {
		return e.job.Signature()
	}
	if e.pod != nil {
		return e.pod.Signature()
	}
	if e.options.Signature != nil {
		return e.options.Signature, nil
	}
	return nil, ErrMissingData
}

func (e *executionState) ActionGroups() (actiontypes.ActionGroups, error) {
	if e.job != nil {
		return e.job.ActionGroups()
	}
	if e.pod != nil {
		return e.pod.ActionGroups()
	}
	if e.options.ActionGroups != nil {
		return e.options.ActionGroups, nil
	}
	return nil, ErrMissingData
}

func (e *executionState) ContainerStarted(name string) bool {
	return e.ContainerFinished(name) ||
		(e.pod != nil && e.pod.ContainerStarted(name)) ||
		(e.podEvents.Container(name).Started())
}

func (e *executionState) ContainerFinished(name string) bool {
	//index, err := strconv.Atoi(name)
	//nextName := fmt.Sprintf("%d", index+1)
	//if err != nil {
	//	nextName = ""
	//}

	// TODO?
	return e.Completed() ||
		(e.pod != nil && e.pod.ContainerFinished(name))
	//return !e.CompletionTimestamp().IsZero() ||
	//	(e.pod != nil && e.pod.ContainerFinished(name)) ||
	//	e.podEvents.Container(nextName).Created() ||
	//	e.podEvents.Container(nextName).Started()
}

func (e *executionState) JobCreationTimestamp() time.Time {
	if e.job != nil {
		return e.job.CreationTimestamp()
	}
	return time.Time{}
}

func (e *executionState) EstimatedJobCreationTimestamp() time.Time {
	if e.job != nil {
		return e.job.CreationTimestamp()
	}
	if !e.options.ScheduledAt.IsZero() {
		return e.options.ScheduledAt
	}
	ts := e.jobEvents.FirstTimestamp()
	if e.podEvents.FirstTimestamp().Before(ts) {
		ts = e.podEvents.FirstTimestamp()
	}
	if !e.EstimatedPodCreationTimestamp().IsZero() && e.EstimatedPodCreationTimestamp().Before(ts) {
		ts = e.EstimatedPodCreationTimestamp()
	}
	return ts
}

func (e *executionState) PodCreationTimestamp() time.Time {
	if e.pod != nil {
		return e.pod.CreationTimestamp()
	}
	if !e.jobEvents.PodCreationTimestamp().IsZero() {
		return e.jobEvents.PodCreationTimestamp()
	}
	return time.Time{}
}

func (e *executionState) EstimatedPodCreationTimestamp() time.Time {
	if !e.PodCreationTimestamp().IsZero() {
		return e.PodCreationTimestamp()
	}
	if !e.podEvents.FirstTimestamp().IsZero() {
		return e.podEvents.FirstTimestamp()
	}
	return time.Time{}
}

func (e *executionState) PodStartTimestamp() time.Time {
	if e.pod != nil && !e.pod.StartTimestamp().IsZero() {
		return e.pod.StartTimestamp()
	}
	return e.podEvents.StartTimestamp()
}

func (e *executionState) EstimatedPodStartTimestamp() time.Time {
	if !e.PodStartTimestamp().IsZero() {
		return e.PodStartTimestamp()
	}
	for _, ev := range e.podEvents.Original() {
		if GetEventContainerName(ev) != "" {
			return GetFirstEventTimestamp(ev)
		}
	}
	return time.Time{}
}

func (e *executionState) PodCreated() bool {
	return !e.EstimatedPodCreationTimestamp().IsZero()
}

func (e *executionState) PodStarted() bool {
	return !e.EstimatedPodStartTimestamp().IsZero()
}

func (e *executionState) Completed() bool {
	return !e.CompletionTimestamp().IsZero()
}

func (e *executionState) EstimatedJobExists() bool {
	_, err := e.EstimatedJob()
	return err == nil
}

func (e *executionState) EstimatedPodExists() bool {
	_, err := e.EstimatedPod()
	return err == nil
}

func (e *executionState) JobExecutionError() string {
	if e.job != nil && e.job.ExecutionError() != "" {
		return e.job.ExecutionError()
	}

	if e.jobEvents.Error() {
		reason := e.jobEvents.ErrorReason()
		message := e.jobEvents.ErrorMessage()
		if message == "" {
			return reason
		}
		return fmt.Sprintf("(%s) %s", reason, message)
	}

	return ""
}

func (e *executionState) PodExecutionError() string {
	errorStr := ""
	if e.pod != nil && e.pod.ExecutionError() != "" {
		errorStr = e.pod.ExecutionError()
	}

	if (errorStr == "" || errorStr == "Error") && e.podEvents.Error() {
		reason := e.podEvents.ErrorReason()
		message := e.podEvents.ErrorMessage()
		if message == "" {
			return reason
		}
		return fmt.Sprintf("(%s) %s", reason, message)
	}

	if errorStr == "Error" {
		return "Fatal Error"
	}

	return errorStr
}

func (e *executionState) ExecutionError() string {
	podErr := e.PodExecutionError()
	jobErr := e.JobExecutionError()
	if podErr == "" && jobErr == "BackoffLimitExceeded" {
		return "Fatal Error"
	}
	if podErr == "" || (podErr == "Fatal Error" && jobErr != "" && jobErr != "BackoffLimitExceeded") {
		return jobErr
	}
	return podErr
}

func (e *executionState) EstimatedJob() (Job, error) {
	if e.job != nil {
		return e.job, nil
	}

	// Build the base job
	object := &batchv1.Job{
		TypeMeta: metav1.TypeMeta{
			Kind:       "Job",
			APIVersion: "batch/v1",
		},
		ObjectMeta: metav1.ObjectMeta{
			Name:              e.ResourceId(),
			Namespace:         e.Namespace(),
			CreationTimestamp: metav1.Time{Time: e.EstimatedJobCreationTimestamp()},
			Labels: map[string]string{
				constants.ResourceIdLabelName:     e.ResourceId(),
				constants.RootResourceIdLabelName: e.RootResourceId(),
			},
		},
		Status: batchv1.JobStatus{
			StartTime: &metav1.Time{Time: e.EstimatedJobCreationTimestamp()},
		},
		Spec: batchv1.JobSpec{
			Parallelism:  common.Ptr(int32(1)),
			BackoffLimit: common.Ptr(int32(0)),
		},
	}

	// Determine the Job status
	if e.jobEvents.Error() {
		// Job has failed, based on its events
		object.Status.Failed = 1
		object.Status.CompletionTime = &metav1.Time{Time: e.jobEvents.LastTimestamp()}
		object.Status.Conditions = []batchv1.JobCondition{
			CreateJobFailedCondition(e.jobEvents.LastTimestamp(), e.jobEvents.ErrorReason(), e.jobEvents.ErrorMessage()),
		}
	} else if e.jobEvents.Success() {
		// Job succeed, based on its events
		object.Status.Succeeded = 1
		object.Status.CompletionTime = &metav1.Time{Time: e.jobEvents.LastTimestamp()}
		object.Status.Conditions = []batchv1.JobCondition{
			CreateJobCompleteCondition(e.jobEvents.LastTimestamp()),
		}
	} else if e.podEvents.Error() {
		// Pod seems to be failed based on its events, so we assume that the Job did too
		object.Status.Failed = 1
		object.Status.CompletionTime = &metav1.Time{Time: e.podEvents.LastTimestamp()}
		object.Status.Conditions = []batchv1.JobCondition{
			CreateJobFailedCondition(e.podEvents.LastTimestamp(), e.podEvents.ErrorReason(), e.podEvents.ErrorMessage()),
		}
	} else if e.pod != nil && e.pod.Finished() && e.pod.ExecutionError() != "" {
		// Pod has failed, so we assume that the Job did too
		object.Status.Failed = 1
		object.Status.CompletionTime = &metav1.Time{Time: e.pod.FinishTimestamp()}
		object.Status.Conditions = []batchv1.JobCondition{
			CreateJobFailedCondition(e.pod.FinishTimestamp(), "BackoffLimitExceeded", e.pod.ExecutionError()),
		}
	} else if e.pod != nil && e.pod.Finished() {
		// Pod succeed, so we assume that the Job did too
		object.Status.Succeeded = 1
		object.Status.CompletionTime = &metav1.Time{Time: e.pod.FinishTimestamp()}
		object.Status.Conditions = []batchv1.JobCondition{
			CreateJobCompleteCondition(e.pod.FinishTimestamp()),
		}
	} else if e.pod != nil || !e.jobEvents.PodCreationTimestamp().IsZero() || !e.podEvents.StartTimestamp().IsZero() {
		// Pod seems to be already running
		object.Status.Active = 1
		if !e.podEvents.StartTimestamp().IsZero() {
			object.Status.Ready = common.Ptr(int32(1))
		}
	}

	// Build the Pod template
	approxPod, err := e.EstimatedPod()
	if err != nil {
		return nil, err
	}

	// Apply the Pod Template
	object.Spec.Template.Labels = approxPod.Original().Labels
	object.Spec.Template.Annotations = approxPod.Original().Annotations
	object.Spec.Template.Spec = approxPod.Original().Spec

	return NewJob(object), nil
}

func (e *executionState) MustEstimatedJob() Job {
	j, err := e.EstimatedJob()
	if err != nil {
		panic(err)
	}
	return j
}

func (e *executionState) EstimatedPod() (Pod, error) {
	if e.pod != nil {
		return e.pod, nil
	}

	actions, _ := e.ActionGroups()
	actionsSerialized, _ := json.Marshal(actions)
	sig, _ := e.Signature()
	sigSerialized, _ := json.Marshal(sig)
	object := &corev1.Pod{
		TypeMeta: metav1.TypeMeta{
			Kind:       "Pod",
			APIVersion: "v1",
		},
		ObjectMeta: metav1.ObjectMeta{
			Name:              e.PodName(),
			Namespace:         e.Namespace(),
			CreationTimestamp: metav1.Time{Time: e.EstimatedPodCreationTimestamp()},
			Labels: map[string]string{
				constants.ResourceIdLabelName:     e.ResourceId(),
				constants.RootResourceIdLabelName: e.RootResourceId(),
			},
			Annotations: map[string]string{
				constants.SignatureAnnotationName: string(sigSerialized),
				constants.SpecAnnotationName:      string(actionsSerialized),
			},
		},
	}

	// TODO is not needed?
	//if object.Name == "" {
	//	return nil, ErrMissingData
	//}

	// Build the deletion timestamp
	if !e.PodDeletionTimestamp().IsZero() {
		object.DeletionTimestamp = &metav1.Time{Time: e.PodDeletionTimestamp()}
	}

	// Build the Pod spec
	if e.job != nil {
		object.Labels = e.job.Original().Spec.Template.Labels
		object.Annotations = e.job.Original().Spec.Template.Annotations
		object.Spec = e.job.Original().Spec.Template.Spec
	}

	// Determine the container statuses
	actionGroups, err := e.ActionGroups()
	if err != nil {
		return nil, ErrMissingData
	}
	containerStatuses := make([]corev1.ContainerStatus, len(actionGroups))
	for i := range actionGroups {
		containerName := fmt.Sprintf("%d", i+1)
		// TODO: build based on TestWorkflowResult too
		containerStatuses[i] = corev1.ContainerStatus{
			Name:  containerName,
			Ready: false,
			State: corev1.ContainerState{
				Waiting: &corev1.ContainerStateWaiting{
					Reason:  "ContainerCreating",
					Message: "Waiting for container to start",
				},
			},
		}
		if e.ContainerFinished(containerName) {
			containerStatuses[i].State = corev1.ContainerState{
				Terminated: &corev1.ContainerStateTerminated{
					StartedAt:  metav1.Time{Time: time.Time{}}, // TODO
					FinishedAt: metav1.Time{Time: time.Time{}}, // TODO
					ExitCode:   0,                              // TODO
					Reason:     "Watcher Error",                // TODO
				},
			}
		} else if e.ContainerStarted(containerName) {
			containerStatuses[i].Started = common.Ptr(true)
			containerStatuses[i].State = corev1.ContainerState{
				Running: &corev1.ContainerStateRunning{
					StartedAt: metav1.Time{Time: time.Time{}}, // TODO
				},
			}
		}
	}
	if len(containerStatuses) > 0 {
		object.Status.InitContainerStatuses = containerStatuses[0 : len(containerStatuses)-1]
		object.Status.ContainerStatuses = containerStatuses[len(containerStatuses)-1:]
	}

	// Determine the Pod status
	if !e.CompletionTimestamp().IsZero() {
		if e.podEvents.Error() || (e.pod != nil && e.pod.ExecutionError() != "") || (e.job != nil && e.job.ExecutionError() != "") || e.jobEvents.Error() {
			object.Status.Phase = corev1.PodFailed
		} else {
			object.Status.Phase = corev1.PodSucceeded
		}
	} else if e.ContainerStarted("1") {
		object.Status.Phase = corev1.PodRunning
		startTs := e.podEvents.Container("1").StartTimestamp()
		if startTs.IsZero() && e.pod != nil {
			startTs = e.pod.StartTimestamp()
		}
		if startTs.IsZero() {
			startTs = e.podEvents.Container("1").StartTimestamp()
		}
		if startTs.IsZero() {
			startTs = e.podEvents.StartTimestamp()
		}
		if !startTs.IsZero() {
			object.Status.StartTime = &metav1.Time{Time: startTs}
		}
	} else {
		object.Status.Phase = corev1.PodPending
	}
	if e.pod != nil {
		object.Status.PodIP = e.pod.IP()
		object.Status.PodIPs = []corev1.PodIP{{IP: object.Status.PodIP}}
	}

	conditionReason := ""
	if e.pod != nil && e.pod.ExecutionError() != "" {
		conditionReason = e.pod.ExecutionError()
	} else if e.job != nil && e.job.ExecutionError() != "" {
		conditionReason = e.job.ExecutionError()
	} else if e.podEvents.Error() {
		conditionReason = e.podEvents.ErrorReason()
	} else if e.jobEvents.Error() {
		conditionReason = e.jobEvents.ErrorReason()
	} else if !e.CompletionTimestamp().IsZero() {
		conditionReason = "PodCompleted"
	}

	containersReady := corev1.ConditionFalse
	containersReadyTs := metav1.Time{}
	if e.ContainerStarted("1") {
		containersReady = corev1.ConditionTrue
		containersReadyTs.Time = e.podEvents.Container("1").CreationTimestamp()
	}
	podInitialized := corev1.ConditionFalse
	podInitializedTs := metav1.Time{}
	if !e.podEvents.StartTimestamp().IsZero() { // TODO?
		podInitialized = corev1.ConditionTrue
		podInitializedTs.Time = e.podEvents.StartTimestamp()
	}
	podReady := corev1.ConditionFalse
	podReadyTs := metav1.Time{}
	if e.ContainerStarted("1") { // TODO? services may differ, take from Job?
		containersReady = corev1.ConditionTrue
		containersReadyTs.Time = e.podEvents.Container("1").CreationTimestamp()
	}
	podScheduled := corev1.ConditionFalse
	podScheduledTs := metav1.Time{}
	if !e.podEvents.StartTimestamp().IsZero() {
		podScheduled = corev1.ConditionTrue
		podScheduledTs.Time = e.podEvents.StartTimestamp()
	}
	object.Status.Conditions = []corev1.PodCondition{
		{Type: corev1.ContainersReady, Status: containersReady, LastTransitionTime: containersReadyTs, Reason: conditionReason},
		{Type: corev1.PodInitialized, Status: podInitialized, LastTransitionTime: podInitializedTs, Reason: conditionReason},
		{Type: corev1.PodReady, Status: podReady, LastTransitionTime: podReadyTs, Reason: conditionReason},
		{Type: corev1.PodScheduled, Status: podScheduled, LastTransitionTime: podScheduledTs, Reason: conditionReason},
	}

	return NewPod(object), nil
}

func (e *executionState) MustEstimatedPod() Pod {
	p, err := e.EstimatedPod()
	if err != nil {
		panic(err)
	}
	return p
}