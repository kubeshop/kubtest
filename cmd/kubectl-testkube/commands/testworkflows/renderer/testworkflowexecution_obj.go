package renderer

import (
	"fmt"
	"os"

	"github.com/pkg/errors"
	"github.com/spf13/cobra"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common/render"
	"github.com/kubeshop/testkube/pkg/api/v1/client"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/ui"
)

func PrintTestWorkflowExecution(cmd *cobra.Command, execution testkube.TestWorkflowExecution) error {
	outputFlag := cmd.Flag("output")
	outputType := render.OutputPretty
	if outputFlag != nil {
		outputType = render.OutputType(outputFlag.Value.String())
	}

	switch outputType {
	case render.OutputPretty:
		printPrettyOutput(ui.NewUI(ui.Verbose, os.Stdout), execution)
	case render.OutputYAML:
		return render.RenderYaml(execution, os.Stdout)
	case render.OutputJSON:
		return render.RenderJSON(execution, os.Stdout)
	case render.OutputGoTemplate:
		tpl := cmd.Flag("go-template").Value.String()
		return render.RenderGoTemplate(execution, os.Stdout, tpl)
	default:
		return render.RenderYaml(execution, os.Stdout)
	}

	return nil
}

func TestWorkflowExecutionRenderer(client client.Client, ui *ui.UI, obj interface{}) error {
	execution, ok := obj.(testkube.TestWorkflowExecution)
	if !ok {
		return fmt.Errorf("can't use '%T' as testkube.TestWorkflowExecution in RenderObj for test workflow execution", obj)
	}

	printPrettyOutput(ui, execution)
	return nil
}

func printPrettyOutput(ui *ui.UI, execution testkube.TestWorkflowExecution) {
	ui.Info("Test Workflow Execution:")
	ui.Warn("Name:                ", execution.Workflow.Name)
	if execution.Id != "" {
		ui.Warn("Execution ID:        ", execution.Id)
		ui.Warn("Execution name:      ", execution.Name)
		ui.Warn("Execution namespace: ", execution.Namespace)
		if execution.Number != 0 {
			ui.Warn("Execution number:    ", fmt.Sprintf("%d", execution.Number))
		}
		ui.Warn("Requested at:        ", execution.ScheduledAt.String())
		if execution.Result != nil && execution.Result.Status != nil {
			ui.Warn("Status:              ", string(*execution.Result.Status))
			if !execution.Result.QueuedAt.IsZero() {
				ui.Warn("Queued at:          ", execution.Result.QueuedAt.String())
			}
			if !execution.Result.StartedAt.IsZero() {
				ui.Warn("Started at:          ", execution.Result.StartedAt.String())
			}
			if !execution.Result.FinishedAt.IsZero() {
				ui.Warn("Finished at:         ", execution.Result.FinishedAt.String())
				ui.Warn("Duration:            ", execution.Result.FinishedAt.Sub(execution.Result.QueuedAt).String())
			}
		}
	}

	if execution.Result != nil && execution.Result.Initialization != nil && execution.Result.Initialization.ErrorMessage != "" {
		ui.NL()
		ui.Err(errors.New(execution.Result.Initialization.ErrorMessage))
	}
}
