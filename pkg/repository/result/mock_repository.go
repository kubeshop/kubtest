// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/repository/result (interfaces: Repository)

// Package result is a generated GoMock package.
package result

import (
	context "context"
	reflect "reflect"
	time "time"

	gomock "github.com/golang/mock/gomock"

	testkube "github.com/kubeshop/testkube/pkg/api/v1/testkube"
)

// MockRepository is a mock of Repository interface.
type MockRepository struct {
	ctrl     *gomock.Controller
	recorder *MockRepositoryMockRecorder
}

// MockRepositoryMockRecorder is the mock recorder for MockRepository.
type MockRepositoryMockRecorder struct {
	mock *MockRepository
}

// NewMockRepository creates a new mock instance.
func NewMockRepository(ctrl *gomock.Controller) *MockRepository {
	mock := &MockRepository{ctrl: ctrl}
	mock.recorder = &MockRepositoryMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockRepository) EXPECT() *MockRepositoryMockRecorder {
	return m.recorder
}

// DeleteAll mocks base method.
func (m *MockRepository) DeleteAll(arg0 context.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteAll", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteAll indicates an expected call of DeleteAll.
func (mr *MockRepositoryMockRecorder) DeleteAll(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteAll", reflect.TypeOf((*MockRepository)(nil).DeleteAll), arg0)
}

// DeleteByTest mocks base method.
func (m *MockRepository) DeleteByTest(arg0 context.Context, arg1 string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteByTest", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteByTest indicates an expected call of DeleteByTest.
func (mr *MockRepositoryMockRecorder) DeleteByTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteByTest", reflect.TypeOf((*MockRepository)(nil).DeleteByTest), arg0, arg1)
}

// DeleteByTestSuite mocks base method.
func (m *MockRepository) DeleteByTestSuite(arg0 context.Context, arg1 string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteByTestSuite", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteByTestSuite indicates an expected call of DeleteByTestSuite.
func (mr *MockRepositoryMockRecorder) DeleteByTestSuite(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteByTestSuite", reflect.TypeOf((*MockRepository)(nil).DeleteByTestSuite), arg0, arg1)
}

// DeleteByTestSuites mocks base method.
func (m *MockRepository) DeleteByTestSuites(arg0 context.Context, arg1 []string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteByTestSuites", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteByTestSuites indicates an expected call of DeleteByTestSuites.
func (mr *MockRepositoryMockRecorder) DeleteByTestSuites(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteByTestSuites", reflect.TypeOf((*MockRepository)(nil).DeleteByTestSuites), arg0, arg1)
}

// DeleteByTests mocks base method.
func (m *MockRepository) DeleteByTests(arg0 context.Context, arg1 []string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteByTests", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteByTests indicates an expected call of DeleteByTests.
func (mr *MockRepositoryMockRecorder) DeleteByTests(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteByTests", reflect.TypeOf((*MockRepository)(nil).DeleteByTests), arg0, arg1)
}

// DeleteForAllTestSuites mocks base method.
func (m *MockRepository) DeleteForAllTestSuites(arg0 context.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteForAllTestSuites", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteForAllTestSuites indicates an expected call of DeleteForAllTestSuites.
func (mr *MockRepositoryMockRecorder) DeleteForAllTestSuites(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteForAllTestSuites", reflect.TypeOf((*MockRepository)(nil).DeleteForAllTestSuites), arg0)
}

// EndExecution mocks base method.
func (m *MockRepository) EndExecution(arg0 context.Context, arg1 testkube.Execution) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "EndExecution", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// EndExecution indicates an expected call of EndExecution.
func (mr *MockRepositoryMockRecorder) EndExecution(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "EndExecution", reflect.TypeOf((*MockRepository)(nil).EndExecution), arg0, arg1)
}

// Get mocks base method.
func (m *MockRepository) Get(arg0 context.Context, arg1 string) (testkube.Execution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", arg0, arg1)
	ret0, _ := ret[0].(testkube.Execution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Get indicates an expected call of Get.
func (mr *MockRepositoryMockRecorder) Get(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockRepository)(nil).Get), arg0, arg1)
}

// GetByNameAndTest mocks base method.
func (m *MockRepository) GetByNameAndTest(arg0 context.Context, arg1, arg2 string) (testkube.Execution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetByNameAndTest", arg0, arg1, arg2)
	ret0, _ := ret[0].(testkube.Execution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetByNameAndTest indicates an expected call of GetByNameAndTest.
func (mr *MockRepositoryMockRecorder) GetByNameAndTest(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetByNameAndTest", reflect.TypeOf((*MockRepository)(nil).GetByNameAndTest), arg0, arg1, arg2)
}

// GetExecutionTotals mocks base method.
func (m *MockRepository) GetExecutionTotals(arg0 context.Context, arg1 bool, arg2 ...Filter) (testkube.ExecutionsTotals, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetExecutionTotals", varargs...)
	ret0, _ := ret[0].(testkube.ExecutionsTotals)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExecutionTotals indicates an expected call of GetExecutionTotals.
func (mr *MockRepositoryMockRecorder) GetExecutionTotals(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExecutionTotals", reflect.TypeOf((*MockRepository)(nil).GetExecutionTotals), varargs...)
}

// GetExecutions mocks base method.
func (m *MockRepository) GetExecutions(arg0 context.Context, arg1 Filter) ([]testkube.Execution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetExecutions", arg0, arg1)
	ret0, _ := ret[0].([]testkube.Execution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExecutions indicates an expected call of GetExecutions.
func (mr *MockRepositoryMockRecorder) GetExecutions(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExecutions", reflect.TypeOf((*MockRepository)(nil).GetExecutions), arg0, arg1)
}

// GetLabels mocks base method.
func (m *MockRepository) GetLabels(arg0 context.Context) (map[string][]string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetLabels", arg0)
	ret0, _ := ret[0].(map[string][]string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetLabels indicates an expected call of GetLabels.
func (mr *MockRepositoryMockRecorder) GetLabels(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetLabels", reflect.TypeOf((*MockRepository)(nil).GetLabels), arg0)
}

// GetLatestByTest mocks base method.
func (m *MockRepository) GetLatestByTest(arg0 context.Context, arg1, arg2 string) (testkube.Execution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetLatestByTest", arg0, arg1, arg2)
	ret0, _ := ret[0].(testkube.Execution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetLatestByTest indicates an expected call of GetLatestByTest.
func (mr *MockRepositoryMockRecorder) GetLatestByTest(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetLatestByTest", reflect.TypeOf((*MockRepository)(nil).GetLatestByTest), arg0, arg1, arg2)
}

// GetLatestByTests mocks base method.
func (m *MockRepository) GetLatestByTests(arg0 context.Context, arg1 []string, arg2 string) ([]testkube.Execution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetLatestByTests", arg0, arg1, arg2)
	ret0, _ := ret[0].([]testkube.Execution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetLatestByTests indicates an expected call of GetLatestByTests.
func (mr *MockRepositoryMockRecorder) GetLatestByTests(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetLatestByTests", reflect.TypeOf((*MockRepository)(nil).GetLatestByTests), arg0, arg1, arg2)
}

// GetNextExecutionNumber mocks base method.
func (m *MockRepository) GetNextExecutionNumber(arg0 context.Context, arg1 string) (int32, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetNextExecutionNumber", arg0, arg1)
	ret0, _ := ret[0].(int32)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetNextExecutionNumber indicates an expected call of GetNextExecutionNumber.
func (mr *MockRepositoryMockRecorder) GetNextExecutionNumber(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetNextExecutionNumber", reflect.TypeOf((*MockRepository)(nil).GetNextExecutionNumber), arg0, arg1)
}

// GetTestMetrics mocks base method.
func (m *MockRepository) GetTestMetrics(arg0 context.Context, arg1 string, arg2, arg3 int) (testkube.ExecutionsMetrics, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetTestMetrics", arg0, arg1, arg2, arg3)
	ret0, _ := ret[0].(testkube.ExecutionsMetrics)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetTestMetrics indicates an expected call of GetTestMetrics.
func (mr *MockRepositoryMockRecorder) GetTestMetrics(arg0, arg1, arg2, arg3 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTestMetrics", reflect.TypeOf((*MockRepository)(nil).GetTestMetrics), arg0, arg1, arg2, arg3)
}

// Insert mocks base method.
func (m *MockRepository) Insert(arg0 context.Context, arg1 testkube.Execution) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Insert", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// Insert indicates an expected call of Insert.
func (mr *MockRepositoryMockRecorder) Insert(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Insert", reflect.TypeOf((*MockRepository)(nil).Insert), arg0, arg1)
}

// StartExecution mocks base method.
func (m *MockRepository) StartExecution(arg0 context.Context, arg1 string, arg2 time.Time) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "StartExecution", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// StartExecution indicates an expected call of StartExecution.
func (mr *MockRepositoryMockRecorder) StartExecution(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "StartExecution", reflect.TypeOf((*MockRepository)(nil).StartExecution), arg0, arg1, arg2)
}

// Update mocks base method.
func (m *MockRepository) Update(arg0 context.Context, arg1 testkube.Execution) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Update", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// Update indicates an expected call of Update.
func (mr *MockRepositoryMockRecorder) Update(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Update", reflect.TypeOf((*MockRepository)(nil).Update), arg0, arg1)
}

// UpdateResult mocks base method.
func (m *MockRepository) UpdateResult(arg0 context.Context, arg1 string, arg2 testkube.Execution) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateResult", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateResult indicates an expected call of UpdateResult.
func (mr *MockRepositoryMockRecorder) UpdateResult(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateResult", reflect.TypeOf((*MockRepository)(nil).UpdateResult), arg0, arg1, arg2)
}
