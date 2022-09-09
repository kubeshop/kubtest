package websocket

import (
	"errors"
	"strings"

	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/event/kind/common"
	"github.com/kubeshop/testkube/pkg/log"
	"go.uber.org/zap"
)

var _ common.Listener = &WebsocketListener{}

func NewWebsocketListener(websockets []Websocket) *WebsocketListener {
	return &WebsocketListener{
		Log:        log.DefaultLogger,
		selector:   "",
		Websockets: websockets,
		events:     testkube.AllEventTypes,
	}
}

type WebsocketListener struct {
	Log        *zap.SugaredLogger
	events     []testkube.EventType
	Websockets []Websocket
	selector   string
}

func (l *WebsocketListener) Name() string {
	return common.ListenerName("websocket.all-events")
}

func (l *WebsocketListener) Selector() string {
	return l.selector
}

func (l *WebsocketListener) Events() []testkube.EventType {
	return l.events
}

func (l *WebsocketListener) Metadata() map[string]string {
	ids := ""
	for _, w := range l.Websockets {
		ids += w.Id + " "
	}
	return map[string]string{
		"name":    l.Name(),
		"selecor": l.Selector(),
		"id":      ids,
	}
}

func (l *WebsocketListener) Notify(event testkube.Event) (result testkube.EventResult) {
	var success, failed []string

	for _, w := range l.Websockets {
		err := w.Conn.WriteJSON(event)
		if err != nil {
			failed = append(failed, w.Id)
		} else {
			success = append(success, w.Id)
		}
	}

	if len(failed) > 0 {
		return testkube.NewFailedEventResult(event.Id, errors.New("message sent to not all clients, failed: "+strings.Join(failed, ", ")))
	} else if len(success) > 0 {
		return testkube.NewSuccessEventResult(event.Id, "message sent to websocket clients")
	} else {
		return testkube.NewFailedEventResult(event.Id, errors.New("message not sent"))
	}

}

func (l *WebsocketListener) Kind() string {
	return "websocket"
}
