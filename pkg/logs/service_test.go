package logs

import (
	"context"
	"fmt"
	"sync"
	"testing"
	"time"

	n "github.com/kubeshop/testkube/pkg/event/bus"
	"github.com/kubeshop/testkube/pkg/logs/consumer"
	"github.com/kubeshop/testkube/pkg/logs/events"
	"github.com/kubeshop/testkube/pkg/logs/state"

	"github.com/nats-io/nats.go"
	"github.com/nats-io/nats.go/jetstream"
	"github.com/stretchr/testify/assert"
)

func TestInitConsumer(t *testing.T) {
	event := events.Trigger{Id: "2"} ///rand.String(10)}

	streamName := StreamPrefix + event.Id

	// TODO - this one don't work correctly - create subscriber don't work here
	ns, nc := n.TestServerWithConnection()
	defer ns.Shutdown()

	// enbable this to make this test pass :/
	// nc, err := n.NewNATSConnection("nats://localhost:4222")
	// assert.NoError(t, err)

	js, err := jetstream.New(nc)
	assert.NoError(t, err)

	// ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(10*time.Second))
	defer cancel()

	err = js.DeleteStream(ctx, "c2")
	if err == nil {
		fmt.Printf("Deleting old stream 'c2'")
	}

	_, err = js.CreateOrUpdateStream(ctx, jetstream.StreamConfig{
		Name:    streamName,
		Storage: jetstream.MemoryStorage, // durable stream
	})
	assert.NoError(t, err)

	// and line by line we generate 4 log lines
	_, err = js.Publish(ctx, streamName, []byte(`{"content":"hello 1"}`))
	assert.NoError(t, err)

	cons, err := js.CreateConsumer(ctx, streamName, jetstream.ConsumerConfig{
		Name:          "c2",
		Durable:       "c2",
		DeliverPolicy: jetstream.DeliverAllPolicy,
	})
	// FIXME context deadline exceeded
	assert.NoError(t, err)

	receivedData := false
	cons.Consume(func(m jetstream.Msg) {
		receivedData = true
	})

	time.Sleep(time.Second)
	assert.True(t, receivedData, "should receive data")
}

func TestLogs(t *testing.T) {

	ctx := context.Background()

	ns, nc := n.TestServerWithConnection()
	defer ns.Shutdown()

	ec, err := nats.NewEncodedConn(nc, nats.JSON_ENCODER)
	assert.NoError(t, err)

	js, err := jetstream.New(nc)
	assert.NoError(t, err)

	kv, err := js.CreateKeyValue(ctx, jetstream.KeyValueConfig{Bucket: "state-test"})
	assert.NoError(t, err)
	assert.NotNil(t, kv)

	t.Run("should react on new message and pass data to consumer", func(t *testing.T) {

		// given one second context
		ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(1*time.Second))
		defer cancel()

		// and example consumer
		c := NewMockConsumer()

		fmt.Printf("%+v\n", kv)

		state := state.NewState(kv)
		fmt.Printf("%+v\n", state)

		// and initialized log service
		log := NewLogsService(ec, js, state, ":8080")

		// with 4 consumers (the same consumer is added 4 times so it'll receive 4 times more messages)
		log.AddConsumer(c)
		log.AddConsumer(c)
		log.AddConsumer(c)
		log.AddConsumer(c)

		// and log service running
		go func() {
			log.Run(ctx)
		}()

		// and ready to get messages
		<-log.Ready

		// and example trigger event
		event := events.Trigger{Id: "123"}

		// and published
		err = ec.Publish(StartSubject, event)
		assert.NoError(t, err)

		// and push logs to given logs stream
		str, err := log.CreateStream(ctx, event)
		assert.NoError(t, err)

		// and example stream name
		streamName := str.CachedInfo().Config.Name

		// and line by line we generate 4 log lines
		_, err = js.Publish(ctx, streamName, []byte(`{"content":"hello 1"}`))
		assert.NoError(t, err)
		_, err = js.Publish(ctx, streamName, []byte(`{"content":"hello 2"}`))
		assert.NoError(t, err)
		_, err = js.Publish(ctx, streamName, []byte(`{"content":"hello 3"}`))
		assert.NoError(t, err)
		_, err = js.Publish(ctx, streamName, []byte(`{"content":"hello 4"}`))
		assert.NoError(t, err)

		// and we stop propagating log messages
		err = ec.Publish(StopSubject, events.Trigger{Id: "123"})
		assert.NoError(t, err)

		// and wait for messages to be propagated
		time.Sleep(1000 * time.Millisecond)

		// then we should have 4*4 messages in consumer
		assert.Equal(t, 16, len(c.Messages))
	})
}

// Mock consumer
var _ consumer.Adapter = &MockConsumer{}

// NewMockConsumer creates new mocked consumer to check amount of messages passed to it
func NewMockConsumer() *MockConsumer {
	return &MockConsumer{
		Messages: []events.LogChunk{},
	}
}

type MockConsumer struct {
	lock     sync.Mutex
	Messages []events.LogChunk
}

func (s *MockConsumer) Notify(id string, e events.LogChunk) error {
	s.lock.Lock()
	defer s.lock.Unlock()

	e.Metadata = map[string]string{"id": id}
	s.Messages = append(s.Messages, e)
	return nil
}

func (s *MockConsumer) Stop(id string) error {
	fmt.Printf("stopping %s \n", id)
	return nil
}

func (s *MockConsumer) Name() string {
	return "mock"
}
