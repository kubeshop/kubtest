package slaves

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSlaveMeta_Names(t *testing.T) {
	t.Parallel()

	meta := SlaveMeta{
		"slave1": "192.168.1.1",
		"slave2": "192.168.1.2",
	}
	names := meta.Names()
	assert.Len(t, names, 2)
	assert.Equal(t, "slave1", names[0])
	assert.Equal(t, "slave2", names[1])
}

func TestSlaveMeta_IPs(t *testing.T) {
	t.Parallel()

	meta := SlaveMeta{
		"slave1": "192.168.1.1",
		"slave2": "192.168.1.2",
	}
	ips := meta.IPs()
	assert.Len(t, ips, 2)
	assert.Equal(t, "192.168.1.1", ips[0])
	assert.Equal(t, "192.168.1.2", ips[1])
}

func TestSlaveMeta_ToIPString(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name     string
		meta     SlaveMeta
		expected string
	}{
		{
			name:     "Empty",
			meta:     SlaveMeta{},
			expected: "",
		},
		{
			name:     "Single",
			meta:     SlaveMeta{"slave1": "192.168.1.1"},
			expected: "192.168.1.1",
		},
		{
			name:     "Multiple",
			meta:     SlaveMeta{"slave1": "192.168.1.1", "slave2": "192.168.1.2"},
			expected: "192.168.1.1,192.168.1.2",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ipString := tt.meta.ToIPString()
			assert.Equal(t, tt.expected, ipString)
		})
	}
}
