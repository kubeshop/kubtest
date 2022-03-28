package tests

import (
	"os"
	"strings"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common/render"
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/tests/renderer"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/ui"
	"github.com/spf13/cobra"
)

func NewGetTestsCmd() *cobra.Command {
	var (
		selectors   []string
		noExecution bool
	)

	cmd := &cobra.Command{
		Use:     "test <testName>",
		Aliases: []string{"tests", "t"},
		Short:   "Get all available tests",
		Long:    `Getting all available tests from given namespace - if no namespace given "testkube" namespace is used`,
		Run: func(cmd *cobra.Command, args []string) {
			namespace := cmd.Flag("namespace").Value.String()
			client, _ := common.GetClient(cmd)

			var name string
			var tests testkube.Tests
			var err error

			if len(args) > 0 {
				name = args[0]
				test, err := client.GetTestWithExecution(name, namespace)
				ui.ExitOnError("getting test in namespace "+namespace, err)

				if test.Test != nil {
					err = render.Obj(cmd, test.Test, os.Stdout, renderer.TestRenderer)
					ui.ExitOnError("rendering obj", err)
				}

				if test.LatestExecution != nil && !noExecution {
					err = render.Obj(cmd, test.LatestExecution, os.Stdout, renderer.ExecutionRenderer)
					ui.ExitOnError("rendering obj", err)
				}

			} else {
				tests, err = client.ListTests(namespace, strings.Join(selectors, ","))
				ui.ExitOnError("getting all tests in namespace "+namespace, err)
				render.List(cmd, tests, os.Stdout)
			}

		},
	}
	cmd.Flags().StringSliceVarP(&selectors, "label", "l", nil, "label key value pair: --label key1=value1")
	cmd.Flags().BoolVar(&noExecution, "no-execution", false, "don't show latest execution")

	return cmd
}
