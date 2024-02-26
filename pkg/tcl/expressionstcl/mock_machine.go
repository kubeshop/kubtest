// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/tcl/expressionstcl (interfaces: Machine)

// Package expressionstcl is a generated GoMock package.
package expressionstcl

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// MockMachine is a mock of Machine interface.
type MockMachine struct {
	ctrl     *gomock.Controller
	recorder *MockMachineMockRecorder
}

// MockMachineMockRecorder is the mock recorder for MockMachine.
type MockMachineMockRecorder struct {
	mock *MockMachine
}

// NewMockMachine creates a new mock instance.
func NewMockMachine(ctrl *gomock.Controller) *MockMachine {
	mock := &MockMachine{ctrl: ctrl}
	mock.recorder = &MockMachineMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMachine) EXPECT() *MockMachineMockRecorder {
	return m.recorder
}

// Call mocks base method.
func (m *MockMachine) Call(arg0 string, arg1 ...StaticValue) (Expression, bool, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0}
	for _, a := range arg1 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "Call", varargs...)
	ret0, _ := ret[0].(Expression)
	ret1, _ := ret[1].(bool)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// Call indicates an expected call of Call.
func (mr *MockMachineMockRecorder) Call(arg0 interface{}, arg1 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0}, arg1...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Call", reflect.TypeOf((*MockMachine)(nil).Call), varargs...)
}

// Finalizer mocks base method.
func (m *MockMachine) Finalizer() MachineCore {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Finalizer")
	ret0, _ := ret[0].(MachineCore)
	return ret0
}

// Finalizer indicates an expected call of Finalizer.
func (mr *MockMachineMockRecorder) Finalizer() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Finalizer", reflect.TypeOf((*MockMachine)(nil).Finalizer))
}

// Get mocks base method.
func (m *MockMachine) Get(arg0 string) (Expression, bool, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", arg0)
	ret0, _ := ret[0].(Expression)
	ret1, _ := ret[1].(bool)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// Get indicates an expected call of Get.
func (mr *MockMachineMockRecorder) Get(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockMachine)(nil).Get), arg0)
}
