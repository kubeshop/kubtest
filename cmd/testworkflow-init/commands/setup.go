package commands

import (
	"os"
	"os/exec"
	"strings"

	"github.com/kubeshop/testkube/cmd/testworkflow-init/constants"
	"github.com/kubeshop/testkube/cmd/testworkflow-init/data"
	"github.com/kubeshop/testkube/cmd/testworkflow-init/output"
	"github.com/kubeshop/testkube/cmd/testworkflow-toolkit/env"
	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor/action/actiontypes/lite"
	"github.com/kubeshop/testkube/pkg/version"
)

func Setup(config lite.ActionSetup) {
	stdout := output.Std
	stdoutUnsafe := stdout.Direct()

	// Copy the init process TODO: only when it is required
	stdoutUnsafe.Print("Configuring init process...")
	if config.CopyInit {
		err := exec.Command("cp", "/init", data.InitPath).Run()
		if err != nil {
			stdoutUnsafe.Error(" error")
			data.Failf(data.CodeInternal, "failed to copy the /init process: %s", err.Error())
		}
		stdoutUnsafe.Print(" done\n")
	} else {
		stdoutUnsafe.Print(" skipped\n")
	}

	// Copy the shell and useful libraries TODO: only when it is required
	stdoutUnsafe.Print("Configuring shell...")
	if config.CopyBinaries {
		// Use `cp` on the whole directory, as it has plenty of files, which lead to the same FS block.
		// Copying individual files will lead to high FS usage
		err := exec.Command("cp", "-rf", "/bin", data.InternalBinPath).Run()
		if err != nil {
			stdoutUnsafe.Error(" error\n")
			data.Failf(data.CodeInternal, "failed to copy the /init process: %s", err.Error())
		}
		stdoutUnsafe.Print(" done\n")
	} else {
		stdoutUnsafe.Print(" skipped\n")
	}

	// Expose debugging Pod information
	stdoutUnsafe.Output(data.InitStepName, "pod", map[string]string{
		"name":               os.Getenv(constants.EnvPodName),
		"nodeName":           os.Getenv(constants.EnvNodeName),
		"namespace":          os.Getenv(constants.EnvNamespaceName),
		"serviceAccountName": os.Getenv(constants.EnvServiceAccountName),
		"agent":              version.Version,
		"toolkit":            stripCommonImagePrefix(env.Config().Images.Toolkit, "testkube-tw-toolkit"),
		"init":               stripCommonImagePrefix(env.Config().Images.Init, "testkube-tw-init"),
	})
}

func stripCommonImagePrefix(image, common string) string {
	if !strings.HasPrefix(image, "docker.io/") {
		return image
	}
	image = image[10:]
	if !strings.HasPrefix(image, "kubeshop/") {
		return image
	}
	image = image[9:]
	if !strings.HasPrefix(image, common+":") {
		return image
	}
	return image[len(common)+1:]
}
