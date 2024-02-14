// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/imageinspector (interfaces: SecretFetcher)

// Package imageinspector is a generated GoMock package.
package imageinspector

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	v1 "k8s.io/api/core/v1"
)

// MockSecretFetcher is a mock of SecretFetcher interface.
type MockSecretFetcher struct {
	ctrl     *gomock.Controller
	recorder *MockSecretFetcherMockRecorder
}

// MockSecretFetcherMockRecorder is the mock recorder for MockSecretFetcher.
type MockSecretFetcherMockRecorder struct {
	mock *MockSecretFetcher
}

// NewMockSecretFetcher creates a new mock instance.
func NewMockSecretFetcher(ctrl *gomock.Controller) *MockSecretFetcher {
	mock := &MockSecretFetcher{ctrl: ctrl}
	mock.recorder = &MockSecretFetcherMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockSecretFetcher) EXPECT() *MockSecretFetcherMockRecorder {
	return m.recorder
}

// Get mocks base method.
func (m *MockSecretFetcher) Get(arg0 context.Context, arg1 string) (*v1.Secret, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", arg0, arg1)
	ret0, _ := ret[0].(*v1.Secret)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Get indicates an expected call of Get.
func (mr *MockSecretFetcherMockRecorder) Get(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockSecretFetcher)(nil).Get), arg0, arg1)
}
