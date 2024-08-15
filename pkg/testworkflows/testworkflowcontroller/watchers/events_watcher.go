package watchers

import (
	"context"
	"math"
	"sync"
	"time"

	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/watch"

	"github.com/kubeshop/testkube/internal/common"
)

type eventsWatcher struct {
	client kubernetesClient[corev1.EventList, *corev1.Event]
	opts   metav1.ListOptions
	ch     chan *corev1.Event
	ctx    context.Context
	cancel context.CancelFunc
	err    error
	mu     sync.Mutex
}

type EventsWatcher interface {
	Channel() <-chan *corev1.Event
	Update(t time.Duration) (int, error)
	Stop()
	Err() error
}

func NewEventsWatcher(ctx context.Context, client kubernetesClient[corev1.EventList, *corev1.Event], opts metav1.ListOptions, bufferSize int) EventsWatcher {
	childCtx, ctxCancel := context.WithCancel(ctx)
	opts.AllowWatchBookmarks = true
	watcher := &eventsWatcher{
		client: client,
		opts:   opts,
		ch:     make(chan *corev1.Event, bufferSize),
		ctx:    childCtx,
		cancel: ctxCancel,
	}
	go watcher.cycle()
	return watcher
}

func (e *eventsWatcher) setError(err error) {
	e.mu.Lock()
	defer e.mu.Unlock()
	e.err = err
	e.cancel()
}

func (e *eventsWatcher) read(t time.Duration) (int, error) {
	e.mu.Lock()
	defer e.mu.Unlock()

	// Fetch the data
	opts := e.opts
	opts.ResourceVersion = ""
	if t != 0 {
		opts.TimeoutSeconds = common.Ptr(int64(math.Ceil(t.Seconds())))
	}
	if opts.TimeoutSeconds == nil {
		opts.TimeoutSeconds = common.Ptr(defaultListTimeoutSeconds)
	}
	list, err := e.client.List(e.ctx, e.opts)
	if err != nil {
		return 0, err
	}

	// Update the latest resource version
	e.opts.ResourceVersion = list.ResourceVersion

	// Ignore error when the channel is already closed
	defer func() {
		recover()
	}()

	// Omit the events that have been already sent
	for i := range list.Items {
		if list.Items[i].ResourceVersion == e.opts.ResourceVersion {
			list.Items = list.Items[i+1:]
		}
	}

	// Send the received events
	for i := range list.Items {
		e.ch <- common.Ptr(list.Items[i])
	}

	return len(list.Items), nil
}

func (e *eventsWatcher) watch() error {
	// Initialize the watcher
	opts := e.opts
	if opts.TimeoutSeconds == nil {
		opts.TimeoutSeconds = common.Ptr(defaultWatchTimeoutSeconds)
	}
	watcher, err := e.client.Watch(e.ctx, opts)
	defer watcher.Stop()
	if err != nil {
		return err
	}

	// Ignore error when the channel is already closed
	defer func() {
		recover()
	}()

	// Read the items
	ch := watcher.ResultChan()
	for {
		// Prioritize checking for finished watcher
		select {
		case <-e.ctx.Done():
			return e.ctx.Err()
		default:
		}

		// Wait for the results
		select {
		case <-e.ctx.Done():
			return e.ctx.Err()
		case event, ok := <-ch:
			// Handle closed watcher
			if !ok {
				return e.ctx.Err()
			}

			// Load the current Kubernetes object
			object, ok := event.Object.(*corev1.Event)
			if !ok || object == nil {
				continue
			}

			// Save the latest resource version to recover
			e.mu.Lock()
			e.opts.ResourceVersion = object.ResourceVersion
			e.mu.Unlock()

			// Continue watching if that's just a bookmark
			if event.Type == watch.Bookmark {
				continue
			}

			// Send the event back
			e.ch <- object
		}
	}
}

func (e *eventsWatcher) cycle() {
	// Close the channel when the watcher is stopped
	go func() {
		<-e.ctx.Done()
		close(e.ch)
	}()

	// Read the initial data
	_, err := e.read(0)
	if err != nil {
		e.setError(err)
		return
	}

	// Watch for the data updates,
	// and restart the watcher as long as there are no errors
	for err == nil {
		err = e.watch()
	}
	e.setError(err)
}

func (e *eventsWatcher) Err() error {
	e.mu.Lock()
	defer e.mu.Unlock()
	if e.err != nil {
		return e.err
	}
	return e.ctx.Err()
}

// Channel returns the channel for reading the events.
func (e *eventsWatcher) Channel() <-chan *corev1.Event {
	return e.ch
}

// Stop cancels all the on-going communication
func (e *eventsWatcher) Stop() {
	e.cancel()
}

// Update gets the latest list of the events, to ensure that nothing is missed at that point.
// It returns number of items that have been appended.
func (e *eventsWatcher) Update(t time.Duration) (int, error) {
	return e.read(t)
}