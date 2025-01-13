package controlplaneclient

import (
	"strings"

	"github.com/kubeshop/testkube/internal/config"
	"github.com/kubeshop/testkube/pkg/cloud"
)

var _ Client = &client{}

type client struct {
	client     cloud.TestKubeCloudAPIClient
	proContext config.ProContext
	agentID    string
	agentToken string
	opts       ClientOptions
}

type ClientOptions struct {
	StorageSkipVerify  bool
	ExecutionID        string
	ParentExecutionIDs []string
}

//go:generate mockgen -destination=./mock_client.go -package=controlplaneclient "github.com/kubeshop/testkube/pkg/controlplaneclient" Client
type Client interface {
	IsSuperAgent() bool
	IsRunner() bool
	IsLegacy() bool

	ExecutionClient
	ExecutionSelfClient
	RunnerClient
}

func New(grpcClient cloud.TestKubeCloudAPIClient, proContext config.ProContext, agentID, agentToken string, opts ClientOptions) Client {
	return &client{
		client:     grpcClient,
		proContext: proContext,
		agentID:    agentID,
		agentToken: agentToken,
		opts:       opts,
	}
}

func (c *client) IsSuperAgent() bool {
	return strings.HasPrefix(c.agentToken, "tkcagnt_")
}

func (c *client) IsRunner() bool {
	return strings.HasPrefix(c.agentToken, "tkcrun_")
}

func (c *client) IsLegacy() bool {
	return c.IsSuperAgent() && !c.proContext.NewExecutions
}
