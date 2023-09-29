// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/executor/scraper (interfaces: Extractor)

// Package scraper is a generated GoMock package.
package scraper

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"
)

// MockExtractor is a mock of Extractor interface.
type MockExtractor struct {
	ctrl     *gomock.Controller
	recorder *MockExtractorMockRecorder
}

// MockExtractorMockRecorder is the mock recorder for MockExtractor.
type MockExtractorMockRecorder struct {
	mock *MockExtractor
}

// NewMockExtractor creates a new mock instance.
func NewMockExtractor(ctrl *gomock.Controller) *MockExtractor {
	mock := &MockExtractor{ctrl: ctrl}
	mock.recorder = &MockExtractorMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockExtractor) EXPECT() *MockExtractorMockRecorder {
	return m.recorder
}

// Extract mocks base method.
func (m *MockExtractor) Extract(arg0 context.Context, arg1 []string, arg2 ProcessFn, arg3 NotifyFn) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Extract", arg0, arg1, arg2, arg3)
	ret0, _ := ret[0].(error)
	return ret0
}

// Extract indicates an expected call of Extract.
func (mr *MockExtractorMockRecorder) Extract(arg0, arg1, arg2, arg3 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Extract", reflect.TypeOf((*MockExtractor)(nil).Extract), arg0, arg1, arg2, arg3)
}
