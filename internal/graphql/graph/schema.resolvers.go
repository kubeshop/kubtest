package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.27

import (
	"context"

	executors "github.com/kubeshop/testkube-operator/client/executors/v1"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	executorsmapper "github.com/kubeshop/testkube/pkg/mapper/executors"
	"github.com/kubeshop/testkube/pkg/rand"
)

// Labels is the resolver for the labels field.
func (r *executorResolver) Labels(ctx context.Context, obj *testkube.Executor) (map[string]interface{}, error) {
	return mapToMapInterface(obj.Labels), nil
}

// Tooltips is the resolver for the tooltips field.
func (r *executorMetaResolver) Tooltips(ctx context.Context, obj *testkube.ExecutorMeta) (map[string]interface{}, error) {
	return mapToMapInterface(obj.Tooltips), nil
}

// Executors is the resolver for the executors field.
func (r *queryResolver) Executors(ctx context.Context) ([]testkube.ExecutorDetails, error) {
	return getExecutors(r.Client)
}

// Executors is the resolver for the executors field.
func (r *subscriptionResolver) Executors(ctx context.Context) (<-chan []testkube.ExecutorDetails, error) {
	ch := make(chan []testkube.ExecutorDetails)

	// TODO You can (and probably should) handle your channels in a central place outside of `schema.resolvers.go`.
	// For this example we'll simply use a Goroutine with a simple loop.
	go func() {

		execs, err := getExecutors(r.Client)
		if err == nil {
			ch <- execs
		} else {
			r.Log.Errorw("failed to get initial executors", "error", err)
		}

		r.Log.Infof("%+v\n", "subscribed to events.executor.>")

		queue := rand.String(30)

		err = r.Bus.SubscribeTopic("events.executor.>", queue, func(e testkube.Event) error {
			r.Log.Infof("%s %s %s\n", e.Type_, *e.Resource, e.ResourceId)

			execs, err := getExecutors(r.Client)
			if err != nil {
				r.Log.Errorw("failed to get executors", "error", err)
				return err
			}
			ch <- execs
			return nil
		})

		if err != nil {
			go func() {
				<-ctx.Done()
				_ = r.Bus.Unsubscribe(queue)
			}()
		}
	}()

	return ch, nil
}

// Executor returns ExecutorResolver implementation.
func (r *Resolver) Executor() ExecutorResolver { return &executorResolver{r} }

// ExecutorMeta returns ExecutorMetaResolver implementation.
func (r *Resolver) ExecutorMeta() ExecutorMetaResolver { return &executorMetaResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// Subscription returns SubscriptionResolver implementation.
func (r *Resolver) Subscription() SubscriptionResolver { return &subscriptionResolver{r} }

type executorResolver struct{ *Resolver }
type executorMetaResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
func mapToMapInterface[T interface{}](input map[string]T) map[string]interface{} {
	if input == nil {
		return nil
	}
	result := make(map[string]interface{}, len(input))
	for k, v := range input {
		result[k] = v
	}
	return result
}
func getExecutors(client *executors.ExecutorsClient) ([]testkube.ExecutorDetails, error) {
	execs, err := client.List("")
	if err != nil {
		return nil, err
	}

	execsDetails := []testkube.ExecutorDetails{}
	for _, item := range execs.Items {
		execsDetails = append(execsDetails, executorsmapper.MapExecutorCRDToExecutorDetails(item))
	}
	return execsDetails, nil
}
