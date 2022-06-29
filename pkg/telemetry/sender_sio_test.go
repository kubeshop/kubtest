package telemetry

import (
	"fmt"
	"net/http"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

func TestMapParams(t *testing.T) {
	// given
	payload := Payload{
		UserID:   "u1",
		ClientID: "c1",
		Events: []Event{
			{
				Name: "e1",
				Params: Params{
					AppName:         "testkube-api",
					AppVersion:      "v1.0.0",
					Architecture:    "amd64",
					OperatingSystem: "linux",
					MachineID:       "mid1",
					ClusterID:       "cid1",
					EventCategory:   "command",
					Host:            "local",
				},
			},
		},
	}

	// when
	track := mapEvent(payload.UserID, payload.Events[0])

	// then
	assert.Equal(t, "testkube-api", track.Properties["name"])
	assert.Equal(t, "v1.0.0", track.Properties["version"])
	assert.Equal(t, "amd64", track.Properties["arch"])
	assert.Equal(t, "linux", track.Properties["os"])
	assert.Equal(t, "cid1", track.Properties["clusterId"])
	assert.Equal(t, "mid1", track.Properties["machineId"])
	assert.Equal(t, "command", track.Properties["eventCategory"])
	assert.Equal(t, "local", track.Properties["host"])
}

func TestSegmentioSender(t *testing.T) {
	t.Skip("for debug only, to check if real events are getting into Segment.io")

	// given
	payload := Payload{
		UserID:   "u1",
		ClientID: "c1",
		Events: []Event{
			{
				Name: "kubectl testkube run test",
				Params: Params{
					AppName:         "testkube-api",
					AppVersion:      "v1.0.0",
					Architecture:    "amd64",
					OperatingSystem: "linux",
					MachineID:       "mid1",
					ClusterID:       "cid1",
					EventCategory:   "command",
					Host:            "local",
				},
			},
		},
	}

	for i := 0; i < 100; i++ {
		// when
		payload.Events[0].Params.MachineID = fmt.Sprintf("mid%d", i)
		out, err := SegmentioSender(http.DefaultClient, payload)

		time.Sleep(100 * time.Millisecond)

		// then
		assert.NoError(t, err)
		assert.Equal(t, "", out)

	}

}
