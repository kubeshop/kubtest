package commands

import (
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common/validator"
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/tests"
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/testsuites"
	"github.com/kubeshop/testkube/pkg/ui"
	"github.com/spf13/cobra"
)

func NewRunCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "run <resourceName>",
		Aliases: []string{"r", "start"},
		Short:   "Runs tests or test suites",
		Run: func(cmd *cobra.Command, args []string) {
			ui.Logo()
			err := cmd.Help()
			ui.PrintOnError("Displaying help", err)
		},
		PersistentPreRun: func(cmd *cobra.Command, args []string) {
			validator.PersistentPreRunVersionCheck(cmd, Version)
		}}

	cmd.AddCommand(tests.NewRunTestCmd())
	cmd.AddCommand(testsuites.NewRunTestSuiteCmd())

	return cmd
}
