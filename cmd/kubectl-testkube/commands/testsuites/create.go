package testsuites

import (
	"fmt"
	"strconv"

	"github.com/robfig/cron"
	"github.com/spf13/cobra"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	apiClient "github.com/kubeshop/testkube/pkg/api/v1/client"
	"github.com/kubeshop/testkube/pkg/crd"
	"github.com/kubeshop/testkube/pkg/ui"
)

func NewCreateTestSuitesCmd() *cobra.Command {

	var (
		name                     string
		file                     string
		labels                   map[string]string
		variables                map[string]string
		secretVariables          map[string]string
		schedule                 string
		executionName            string
		httpProxy, httpsProxy    string
		secretVariableReferences map[string]string
		timeout                  int32
	)

	cmd := &cobra.Command{
		Use:     "testsuite",
		Aliases: []string{"testsuites", "ts"},
		Short:   "Create new TestSuite",
		Long:    `Create new TestSuite Custom Resource`,
		Run: func(cmd *cobra.Command, args []string) {
			crdOnly, err := strconv.ParseBool(cmd.Flag("crd-only").Value.String())
			ui.ExitOnError("parsing flag value", err)

			options, err := NewTestSuiteUpsertOptionsFromFlags(cmd)
			ui.ExitOnError("getting test suite options", err)

			if options.Name == "" {
				ui.Failf("pass valid test suite name (in '--name' flag)")
			}

			if !crdOnly {
				client, namespace := common.GetClient(cmd)
				test, _ := client.GetTestSuite(options.Name)
				if options.Name == test.Name {
					ui.Failf("TestSuite with name '%s' already exists in namespace %s", options.Name, namespace)
				}

				_, err = client.CreateTestSuite(apiClient.UpsertTestSuiteOptions(options))
				ui.ExitOnError("creating test suite "+options.Name+" in namespace "+options.Namespace, err)

				ui.Success("Test suite created", options.Name)
			} else {
				if options.Description != "" {
					options.Description = fmt.Sprintf("%q", options.Description)
				}

				data, err := crd.ExecuteTemplate(crd.TemplateTestSuite, options)
				ui.ExitOnError("executing crd template", err)

				ui.Info(data)
			}
		},
	}

	cmd.Flags().StringVarP(&file, "file", "f", "", "JSON test suite file - will be read from stdin if not specified, look at testkube.TestUpsertRequest")
	cmd.Flags().StringVar(&name, "name", "", "Set/Override test suite name")
	cmd.Flags().StringToStringVarP(&labels, "label", "l", nil, "label key value pair: --label key1=value1")
	cmd.Flags().StringToStringVarP(&variables, "variable", "v", nil, "param key value pair: --variable key1=value1")
	cmd.Flags().StringToStringVarP(&secretVariables, "secret-variable", "s", nil, "secret variable key value pair: --secret-variable key1=value1")
	cmd.Flags().StringVarP(&schedule, "schedule", "", "", "test suite schedule in a cronjob form: * * * * *")
	cmd.Flags().StringVarP(&executionName, "execution-name", "", "", "execution name, if empty will be autogenerated")
	cmd.Flags().StringVar(&httpProxy, "http-proxy", "", "http proxy for executor containers")
	cmd.Flags().StringVar(&httpsProxy, "https-proxy", "", "https proxy for executor containers")
	cmd.Flags().StringToStringVarP(&secretVariableReferences, "secret-variable-reference", "", nil, "secret variable references in a form name1=secret_name1=secret_key1")
	cmd.Flags().Int32Var(&timeout, "timeout", 0, "duration in seconds for test suite to timeout. 0 disables timeout.")
	return cmd
}

func validateSchedule(schedule string) error {
	if schedule == "" {
		return nil
	}

	specParser := cron.NewParser(cron.Minute | cron.Hour | cron.Dom | cron.Month | cron.Dow)
	if _, err := specParser.Parse(schedule); err != nil {
		return err
	}

	return nil
}
