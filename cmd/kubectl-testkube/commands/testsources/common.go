package testsources

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	apiclientv1 "github.com/kubeshop/testkube/pkg/api/v1/client"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/ui"
)

func newSourceFromFlags(cmd *cobra.Command) (source *testkube.TestSource, err error) {
	sourceType := cmd.Flag("source-type").Value.String()
	uri := cmd.Flag("uri").Value.String()
	gitUri := cmd.Flag("git-uri").Value.String()

	data, err := common.NewDataFromFlags(cmd)
	if err != nil {
		return nil, err
	}

	fileContent := ""
	if data != nil {
		fileContent = *data
	}

	// content is correct when is passed from file, by uri, ur by git repo
	if len(fileContent) == 0 && uri == "" && gitUri == "" {
		return nil, fmt.Errorf("empty test source, please pass some data to create test source")
	}

	if uri != "" && sourceType == "" {
		sourceType = string(testkube.TestContentTypeFileURI)
	}

	if len(fileContent) > 0 && sourceType == "" {
		sourceType = string(testkube.TestContentTypeString)
	}

	repository, err := common.NewRepositoryFromFlags(cmd)
	if err != nil {
		return nil, err
	}

	if repository != nil && sourceType == "" {
		sourceType = string(testkube.TestContentTypeGitDir)
	}

	source = &testkube.TestSource{
		Type_:      sourceType,
		Data:       string(fileContent),
		Repository: repository,
		Uri:        uri,
	}

	return source, nil
}

func NewUpsertTestSourceOptionsFromFlags(cmd *cobra.Command) (options apiclientv1.UpsertTestSourceOptions, err error) {
	source, err := newSourceFromFlags(cmd)
	ui.ExitOnError("creating source from passed parameters", err)

	name := cmd.Flag("name").Value.String()
	labels, err := cmd.Flags().GetStringToString("label")
	if err != nil {
		return options, err
	}

	options = apiclientv1.UpsertTestSourceOptions{
		Name:       name,
		Type_:      source.Type_,
		Data:       source.Data,
		Repository: source.Repository,
		Uri:        source.Uri,
		Labels:     labels,
	}

	return options, nil
}

func newSourceUpdateFromFlags(cmd *cobra.Command) (source *testkube.TestSourceUpdate, err error) {
	source = &testkube.TestSourceUpdate{}

	var fields = []struct {
		name        string
		destination *string
	}{
		{
			"source-type",
			source.Name,
		},
		{
			"uri",
			source.Uri,
		},
	}

	var nonEmpty bool
	for _, field := range fields {
		if cmd.Flag(field.name).Changed {
			value := cmd.Flag(field.name).Value.String()
			field.destination = &value
			nonEmpty = true
		}
	}

	data, err := common.NewDataFromFlags(cmd)
	if err != nil {
		return nil, err
	}

	if data != nil {
		source.Data = data
		nonEmpty = true
	}

	repository, err := common.NewRepositoryUpdateFromFlags(cmd)
	if err != nil {
		return nil, err
	}

	if repository != nil {
		source.Repository = &repository
		nonEmpty = true
	}

	if !nonEmpty {
		return source, nil
	}

	return nil, nil
}

func NewUpdateTestSourceOptionsFromFlags(cmd *cobra.Command) (options apiclientv1.UpdateTestSourceOptions, err error) {
	source, err := newSourceUpdateFromFlags(cmd)
	ui.ExitOnError("creating source from passed parameters", err)

	if cmd.Flag("name").Changed {
		name := cmd.Flag("name").Value.String()
		options.Name = &name
	}

	if cmd.Flag("label").Changed {
		labels, err := cmd.Flags().GetStringToString("label")
		if err != nil {
			return options, err
		}

		options.Labels = &labels
	}

	if source != nil {
		options.Type_ = source.Type_
		options.Data = source.Data
		options.Repository = source.Repository
		options.Uri = source.Uri
	}

	return options, nil
}
