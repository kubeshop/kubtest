package testsuites

import (
	"github.com/spf13/cobra"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	"github.com/kubeshop/testkube/pkg/ui"
)

func UpdateTestSuitesCmd() *cobra.Command {

	var (
		file                     string
		name                     string
		labels                   map[string]string
		schedule                 string
		executionName            string
		variables                []string
		secretVariables          []string
		httpProxy, httpsProxy    string
		secretVariableReferences map[string]string
		timeout                  int32
		jobTemplate              string
		cronJobTemplate          string
		scraperTemplate          string
		pvcTemplate              string
		jobTemplateReference     string
		cronJobTemplateReference string
		scraperTemplateReference string
		pvcTemplateReference     string
	)

	cmd := &cobra.Command{
		Use:   "testsuite",
		Short: "Update Test Suite",
		Long:  `Update Test Custom Resource Definitions, `,
		Run: func(cmd *cobra.Command, args []string) {
			options, err := NewTestSuiteUpdateOptionsFromFlags(cmd)
			ui.ExitOnError("getting test suite options", err)

			testSuiteName := ""
			if options.Name != nil {
				testSuiteName = *options.Name
			}

			if testSuiteName == "" {
				ui.Failf("pass valid test suite name (in '--name' flag)")
			}

			client, namespace, err := common.GetClient(cmd)
			ui.ExitOnError("getting client", err)

			testSuite, _ := client.GetTestSuite(testSuiteName)
			if testSuiteName != testSuite.Name {
				ui.Failf("TestSuite with name '%s' not exists in namespace %s", testSuiteName, namespace)
			}

			testSuite, err = client.UpdateTestSuite(options)
			ui.ExitOnError("updating TestSuite "+testSuiteName+" in namespace "+namespace, err)
			ui.Success("TestSuite updated", testSuiteName)
		},
	}

	cmd.Flags().StringVarP(&file, "file", "f", "", "JSON test file - will be read from stdin if not specified, look at testkube.TestUpsertRequest")
	cmd.Flags().StringVar(&name, "name", "", "Set/Override test suite name")
	cmd.Flags().StringToStringVarP(&labels, "label", "l", nil, "label key value pair: --label key1=value1")
	cmd.Flags().StringArrayVarP(&variables, "variable", "v", nil, "param key value pair: --variable key1=value1")
	cmd.Flags().StringArrayVarP(&secretVariables, "secret-variable", "s", nil, "secret variable key value pair: --secret-variable key1=value1")
	cmd.Flags().StringVarP(&schedule, "schedule", "", "", "test suite schedule in a cron job form: * * * * *")
	cmd.Flags().StringVarP(&executionName, "execution-name", "", "", "execution name, if empty will be autogenerated")
	cmd.Flags().StringVar(&httpProxy, "http-proxy", "", "http proxy for executor containers")
	cmd.Flags().StringVar(&httpsProxy, "https-proxy", "", "https proxy for executor containers")
	cmd.Flags().StringToStringVarP(&secretVariableReferences, "secret-variable-reference", "", nil, "secret variable references in a form name1=secret_name1=secret_key1")
	cmd.Flags().Int32Var(&timeout, "timeout", 0, "duration in seconds for test suite to timeout. 0 disables timeout.")
	cmd.Flags().StringVar(&jobTemplate, "job-template", "", "job template file path for extensions to job template")
	cmd.Flags().StringVar(&cronJobTemplate, "cronjob-template", "", "cron job template file path for extensions to cron job template")
	cmd.Flags().StringVar(&scraperTemplate, "scraper-template", "", "scraper template file path for extensions to scraper template")
	cmd.Flags().StringVar(&pvcTemplate, "pvc-template", "", "pvc template file path for extensions to pvc template")
	cmd.Flags().StringVar(&jobTemplateReference, "job-template-reference", "", "reference to job template to use for the test")
	cmd.Flags().StringVar(&cronJobTemplateReference, "cronjob-template-reference", "", "reference to cron job template to use for the test")
	cmd.Flags().StringVar(&scraperTemplateReference, "scraper-template-reference", "", "reference to scraper template to use for the test")
	cmd.Flags().StringVar(&pvcTemplateReference, "pvc-template-reference", "", "reference to pvc template to use for the test")

	return cmd
}
