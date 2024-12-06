package testworkflowexecutor

import (
	"context"
	"encoding/json"
	errors2 "errors"
	"io"
	"math"
	"sync"
	"time"

	"github.com/pkg/errors"
	"google.golang.org/grpc"
	"google.golang.org/grpc/encoding/gzip"
	"google.golang.org/protobuf/types/known/emptypb"

	testworkflowsclientv1 "github.com/kubeshop/testkube-operator/pkg/client/testworkflows/v1"
	v1 "github.com/kubeshop/testkube/internal/app/api/metrics"
	"github.com/kubeshop/testkube/internal/common"
	"github.com/kubeshop/testkube/internal/config"
	agentclient "github.com/kubeshop/testkube/pkg/agent/client"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/capabilities"
	"github.com/kubeshop/testkube/pkg/cloud"
	"github.com/kubeshop/testkube/pkg/event"
	log2 "github.com/kubeshop/testkube/pkg/log"
	testworkflowmappers "github.com/kubeshop/testkube/pkg/mapper/testworkflows"
	"github.com/kubeshop/testkube/pkg/repository/testworkflow"
	"github.com/kubeshop/testkube/pkg/runner"
	"github.com/kubeshop/testkube/pkg/secretmanager"
	"github.com/kubeshop/testkube/pkg/testworkflows/executionworker/executionworkertypes"
	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowconfig"
)

const (
	ConfigSizeLimit = 3 * 1024 * 1024
)

//go:generate mockgen -destination=./mock_executor.go -package=testworkflowexecutor "github.com/kubeshop/testkube/pkg/testworkflows/testworkflowexecutor" TestWorkflowExecutor
type TestWorkflowExecutor interface {
	Execute(ctx context.Context, req *cloud.ScheduleRequest) (<-chan *testkube.TestWorkflowExecution, error)
}

type executor struct {
	direct               *bool
	directMu             sync.Mutex
	grpcClient           cloud.TestKubeCloudAPIClient
	apiKey               string
	cdEventsTarget       string
	organizationId       string
	defaultEnvironmentId string

	emitter       event.Interface
	metrics       v1.Metrics
	secretManager secretmanager.SecretManager
	dashboardURI  string
	runner        runner.Runner
	proContext    *config.ProContext
	scheduler     *scheduler
}

func New(
	grpClient cloud.TestKubeCloudAPIClient,
	apiKey string,
	cdEventsTarget string,
	emitter event.Interface,
	runner runner.Runner,
	repository testworkflow.Repository,
	output testworkflow.OutputRepository,
	testWorkflowTemplatesClient testworkflowsclientv1.TestWorkflowTemplatesInterface,
	testWorkflowsClient testworkflowsclientv1.Interface,
	metrics v1.Metrics,
	secretManager secretmanager.SecretManager,
	globalTemplateName string,
	dashboardURI string,
	organizationId string,
	defaultEnvironmentId string) TestWorkflowExecutor {
	return &executor{
		grpcClient:           grpClient,
		apiKey:               apiKey,
		cdEventsTarget:       cdEventsTarget,
		emitter:              emitter,
		metrics:              metrics,
		secretManager:        secretManager,
		dashboardURI:         dashboardURI,
		runner:               runner,
		organizationId:       organizationId,
		defaultEnvironmentId: defaultEnvironmentId,
		scheduler: NewScheduler(
			testWorkflowsClient,
			testWorkflowTemplatesClient,
			repository,
			output,
			globalTemplateName,
			organizationId,
			defaultEnvironmentId,
		),
	}
}

func (e *executor) isDirect() bool {
	e.directMu.Lock()
	defer e.directMu.Unlock()
	if e.direct == nil {
		if e.grpcClient == nil {
			e.direct = common.Ptr(true)
			return true
		}
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()
		ctx = agentclient.AddAPIKeyMeta(ctx, e.apiKey)
		proContext, _ := e.grpcClient.GetProContext(ctx, &emptypb.Empty{})
		if proContext != nil {
			e.direct = common.Ptr(!capabilities.Enabled(proContext.Capabilities, capabilities.CapabilityNewExecutions))
		}
	}
	return *e.direct
}

func (e *executor) Execute(ctx context.Context, req *cloud.ScheduleRequest) (<-chan *testkube.TestWorkflowExecution, error) {
	if e.isDirect() {
		return e.executeDirect(ctx, req)
	}
	return e.execute(ctx, req)
}

func (e *executor) execute(ctx context.Context, req *cloud.ScheduleRequest) (<-chan *testkube.TestWorkflowExecution, error) {
	ch := make(chan *testkube.TestWorkflowExecution)
	opts := []grpc.CallOption{grpc.UseCompressor(gzip.Name), grpc.MaxCallRecvMsgSize(math.MaxInt32)}
	ctx = agentclient.AddAPIKeyMeta(ctx, e.apiKey)
	resp, err := e.grpcClient.ScheduleExecution(ctx, req, opts...)
	if err != nil {
		close(ch)
		return ch, err
	}
	go func() {
		defer close(ch)
		errs := make([]error, 0)
		var item *cloud.ScheduleResponse
		for {
			item, err = resp.Recv()
			if err != nil {
				if !errors.Is(err, io.EOF) {
					// TODO: What to do with this error?
					errs = append(errs, err)
				}
				break
			}
			var r testkube.TestWorkflowExecution
			err = json.Unmarshal(item.Execution, &r)
			if err != nil {
				// TODO: What to do with this error?
				errs = append(errs, err)
				break
			}
			ch <- &r
		}
	}()
	return ch, nil
}

func (e *executor) executeDirect(ctx context.Context, req *cloud.ScheduleRequest) (<-chan *testkube.TestWorkflowExecution, error) {
	// Prepare dependencies
	sensitiveDataHandler := NewSecretHandler(e.secretManager)

	// Schedule execution
	ch, err := e.scheduler.Schedule(ctx, sensitiveDataHandler, req)
	if err != nil {
		return ch, err
	}

	// Analyze the environment ID
	environmentId := req.EnvironmentId
	if environmentId == "" {
		environmentId = e.defaultEnvironmentId
	}

	controlPlaneConfig := testworkflowconfig.ControlPlaneConfig{
		DashboardUrl:   e.dashboardURI,
		CDEventsTarget: e.cdEventsTarget,
	}

	ch2 := make(chan *testkube.TestWorkflowExecution, 1)
	go func() {
		defer close(ch2)
		for execution := range ch {
			e.emitter.Notify(testkube.NewEventQueueTestWorkflow(execution))

			// Send the data
			ch2 <- execution.Clone()

			// Finish early if it's immediately known to finish
			if execution.Result.IsFinished() {
				e.emitter.Notify(testkube.NewEventStartTestWorkflow(execution))
				if execution.Result.IsAborted() {
					e.emitter.Notify(testkube.NewEventEndTestWorkflowAborted(execution))
				} else if execution.Result.IsFailed() {
					e.emitter.Notify(testkube.NewEventEndTestWorkflowFailed(execution))
				} else {
					e.emitter.Notify(testkube.NewEventEndTestWorkflowSuccess(execution))
				}
				continue
			}

			// Start the execution
			parentIds := ""
			if execution.RunningContext != nil && execution.RunningContext.Actor != nil {
				parentIds = execution.RunningContext.Actor.ExecutionPath
			}
			result, err := e.runner.Execute(executionworkertypes.ExecuteRequest{
				Execution: testworkflowconfig.ExecutionConfig{
					Id:              execution.Id,
					GroupId:         execution.GroupId,
					Name:            execution.Name,
					Number:          execution.Number,
					ScheduledAt:     execution.ScheduledAt,
					DisableWebhooks: execution.DisableWebhooks,
					Debug:           false,
					OrganizationId:  e.organizationId,
					EnvironmentId:   environmentId,
					ParentIds:       parentIds,
				},
				Secrets:      sensitiveDataHandler.Get(execution.Id),
				Workflow:     testworkflowmappers.MapTestWorkflowAPIToKube(*execution.ResolvedWorkflow),
				ControlPlane: controlPlaneConfig,
			})

			// TODO: define "revoke" error by runner (?)
			if err != nil {
				err2 := e.scheduler.CriticalError(execution, "Failed to run execution", err)
				err = errors2.Join(err, err2)
				if err != nil {
					log2.DefaultLogger.Errorw("failed to run and update execution", "executionId", execution.Id, "error", err)
				}
				e.emitter.Notify(testkube.NewEventStartTestWorkflow(execution))
				e.emitter.Notify(testkube.NewEventEndTestWorkflowAborted(execution))
				continue
			}

			// Inform about execution start
			e.emitter.Notify(testkube.NewEventStartTestWorkflow(execution))

			// Apply the known data to temporary object.
			execution.Namespace = result.Namespace
			execution.Signature = result.Signature
			execution.RunnerId = ""
			if err = e.scheduler.Start(execution); err != nil {
				log2.DefaultLogger.Errorw("failed to mark execution as initialized", "executionId", execution.Id, "error", err)
			}
		}
	}()

	return ch2, nil
}
