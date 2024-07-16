// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor (interfaces: InternalProcessor)

// Package testworkflowprocessor is a generated GoMock package.
package testworkflowprocessor

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	v1 "github.com/kubeshop/testkube-operator/api/testworkflows/v1"
)

// MockInternalProcessor is a mock of InternalProcessor interface.
type MockInternalProcessor struct {
	ctrl     *gomock.Controller
	recorder *MockInternalProcessorMockRecorder
}

// MockInternalProcessorMockRecorder is the mock recorder for MockInternalProcessor.
type MockInternalProcessorMockRecorder struct {
	mock *MockInternalProcessor
}

// NewMockInternalProcessor creates a new mock instance.
func NewMockInternalProcessor(ctrl *gomock.Controller) *MockInternalProcessor {
	mock := &MockInternalProcessor{ctrl: ctrl}
	mock.recorder = &MockInternalProcessorMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockInternalProcessor) EXPECT() *MockInternalProcessorMockRecorder {
	return m.recorder
}

// Process mocks base method.
func (m *MockInternalProcessor) Process(arg0 Intermediate, arg1 Container, arg2 v1.Step) (Stage, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Process", arg0, arg1, arg2)
	ret0, _ := ret[0].(Stage)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Process indicates an expected call of Process.
func (mr *MockInternalProcessorMockRecorder) Process(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Process", reflect.TypeOf((*MockInternalProcessor)(nil).Process), arg0, arg1, arg2)
}