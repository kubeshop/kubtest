package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.27

import (
	"context"

	"github.com/kubeshop/testkube/internal/graphql/gen"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	executorsmapper "github.com/kubeshop/testkube/pkg/mapper/executors"
)

// Labels is the resolver for the labels field.
func (r *executorResolver) Labels(ctx context.Context, obj *testkube.Executor) (map[string]interface{}, error) {
	return MapToMapInterface(obj.Labels), nil
}

// Tooltips is the resolver for the tooltips field.
func (r *executorMetaResolver) Tooltips(ctx context.Context, obj *testkube.ExecutorMeta) (map[string]interface{}, error) {
	return MapToMapInterface(obj.Tooltips), nil
}

// Executors is the resolver for the executors field.
func (r *queryResolver) Executors(ctx context.Context) ([]testkube.ExecutorDetails, error) {
	return getExecutors(r)
}

// Executors is the resolver for the executors field.
func (r *subscriptionResolver) Executors(ctx context.Context) (<-chan []testkube.ExecutorDetails, error) {
	return CreateBusSubscription(ctx, r, "events.executor.>", getExecutors)
}

// Executor returns gen.ExecutorResolver implementation.
func (r *Resolver) Executor() gen.ExecutorResolver { return &executorResolver{r} }

// ExecutorMeta returns gen.ExecutorMetaResolver implementation.
func (r *Resolver) ExecutorMeta() gen.ExecutorMetaResolver { return &executorMetaResolver{r} }

type executorResolver struct{ *Resolver }
type executorMetaResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
func getExecutors(r ResolverData) ([]testkube.ExecutorDetails, error) {
	execs, err := r.ExecutorsClient().List("")
	if err != nil {
		return nil, err
	}

	execsDetails := make([]testkube.ExecutorDetails, len(execs.Items))
	for i, item := range execs.Items {
		execsDetails[i] = executorsmapper.MapExecutorCRDToExecutorDetails(item)
	}
	return execsDetails, nil
}
