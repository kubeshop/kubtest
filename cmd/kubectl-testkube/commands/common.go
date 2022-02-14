package commands

import (
	"fmt"
	"os/exec"
	"strings"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	"github.com/kubeshop/testkube/internal/migrations"
	"github.com/kubeshop/testkube/pkg/process"
	"github.com/kubeshop/testkube/pkg/ui"
	"github.com/spf13/cobra"
)

func RunMigrations(cmd *cobra.Command) (hasMigrations bool, err error) {
	client, _ := common.GetClient(cmd)
	info, err := client.GetServerInfo()
	ui.ExitOnError("getting server info", err)

	if info.Version == "" {
		ui.Failf("Can't detect cluster version")
	}

	migrator := migrations.Migrator
	ui.Info("Available migrations for", info.Version)
	migrations := migrator.GetValidMigrations(info.Version, true)
	if len(migrations) == 0 {
		ui.Warn("No migrations available for", info.Version)
		return false, nil
	}

	for _, migration := range migrations {
		fmt.Printf("- %+v - %s\n", migration.Version(), migration.Info())
	}

	return true, migrator.Run(info.Version, true)
}

func HelmUpgradeOrInstalTestkube(name, namespace, chart string, noDashboard, noMinio, noJetstack bool) error {
	helmPath, err := exec.LookPath("helm")
	if err != nil {
		return err
	}

	if !noJetstack {
		_, err = process.Execute("kubectl", "get", "crds", "certificates.cert-manager.io")
		if err != nil && !strings.Contains(err.Error(), "Error from server (NotFound)") {
			return err
		}

		if err != nil {
			ui.Info("Helm installing jetstack cert manager")
			_, err = process.Execute(helmPath, "repo", "add", "jetstack", "https://charts.jetstack.io")
			if err != nil && !strings.Contains(err.Error(), "Error: repository name (jetstack) already exists") {
				return err
			}

			_, err = process.Execute(helmPath, "repo", "update")
			if err != nil {
				return err
			}

			command := []string{"upgrade", "--install", "--create-namespace", "--namespace", namespace, "--set", "installCRDs=true"}
			command = append(command, "jetstack", "jetstack/cert-manager")

			out, err := process.Execute(helmPath, command...)
			if err != nil {
				return err
			}

			ui.Info("Helm install jetstack output", string(out))
		}
	}

	ui.Info("Helm installing testkube framework")
	_, err = process.Execute(helmPath, "repo", "add", "kubeshop", "https://kubeshop.github.io/helm-charts")
	if err != nil && !strings.Contains(err.Error(), "Error: repository name (kubeshop) already exists, please specify a different name") {
		ui.WarnOnError("adding testkube repo", err)
	}

	_, err = process.Execute(helmPath, "repo", "update")
	ui.ExitOnError("updating helm repositories", err)

	command := []string{"upgrade", "--install", "--create-namespace", "--namespace", namespace}
	command = append(command, "--set", fmt.Sprintf("api-server.minio.enabled=%t", !noMinio))
	command = append(command, "--set", fmt.Sprintf("testkube-dashboard.enabled=%t", !noDashboard))
	command = append(command, name, chart)

	out, err := process.Execute(helmPath, command...)
	if err != nil {
		return err
	}

	ui.Info("Helm install testkube output", string(out))
	return nil
}
