// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/repository/testworkflow (interfaces: Repository)

// Package testworkflow is a generated GoMock package.
package testworkflow

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

// DeleteByTestWorkflow mocks base method.
func (m *MockRepository) DeleteByTestWorkflow(arg0 context.Context, arg1 string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteByTestWorkflow", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteByTestWorkflow indicates an expected call of DeleteByTestWorkflow.
func (mr *MockRepositoryMockRecorder) DeleteByTestWorkflow(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteByTestWorkflow", reflect.TypeOf((*MockRepository)(nil).DeleteByTestWorkflow), arg0, arg1)
}

// DeleteByTestWorkflows mocks base method.
func (m *MockRepository) DeleteByTestWorkflows(arg0 context.Context, arg1 []string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteByTestWorkflows", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteByTestWorkflows indicates an expected call of DeleteByTestWorkflows.
func (mr *MockRepositoryMockRecorder) DeleteByTestWorkflows(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteByTestWorkflows", reflect.TypeOf((*MockRepository)(nil).DeleteByTestWorkflows), arg0, arg1)
}

// Get mocks base method.
func (m *MockRepository) Get(arg0 context.Context, arg1 string) (testkube.TestWorkflowExecution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Get", arg0, arg1)
	ret0, _ := ret[0].(testkube.TestWorkflowExecution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Get indicates an expected call of Get.
func (mr *MockRepositoryMockRecorder) Get(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Get", reflect.TypeOf((*MockRepository)(nil).Get), arg0, arg1)
}

// GetByNameAndTestWorkflow mocks base method.
func (m *MockRepository) GetByNameAndTestWorkflow(arg0 context.Context, arg1, arg2 string) (testkube.TestWorkflowExecution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetByNameAndTestWorkflow", arg0, arg1, arg2)
	ret0, _ := ret[0].(testkube.TestWorkflowExecution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetByNameAndTestWorkflow indicates an expected call of GetByNameAndTestWorkflow.
func (mr *MockRepositoryMockRecorder) GetByNameAndTestWorkflow(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetByNameAndTestWorkflow", reflect.TypeOf((*MockRepository)(nil).GetByNameAndTestWorkflow), arg0, arg1, arg2)
}

// GetExecutionTags mocks base method.
func (m *MockRepository) GetExecutionTags(arg0 context.Context, arg1 string) (map[string][]string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetExecutionTags", arg0, arg1)
	ret0, _ := ret[0].(map[string][]string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExecutionTags indicates an expected call of GetExecutionTags.
func (mr *MockRepositoryMockRecorder) GetExecutionTags(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExecutionTags", reflect.TypeOf((*MockRepository)(nil).GetExecutionTags), arg0, arg1)
}

// GetExecutions mocks base method.
func (m *MockRepository) GetExecutions(arg0 context.Context, arg1 Filter) ([]testkube.TestWorkflowExecution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetExecutions", arg0, arg1)
	ret0, _ := ret[0].([]testkube.TestWorkflowExecution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExecutions indicates an expected call of GetExecutions.
func (mr *MockRepositoryMockRecorder) GetExecutions(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExecutions", reflect.TypeOf((*MockRepository)(nil).GetExecutions), arg0, arg1)
}

// GetExecutionsSummary mocks base method.
func (m *MockRepository) GetExecutionsSummary(arg0 context.Context, arg1 Filter) ([]testkube.TestWorkflowExecutionSummary, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetExecutionsSummary", arg0, arg1)
	ret0, _ := ret[0].([]testkube.TestWorkflowExecutionSummary)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExecutionsSummary indicates an expected call of GetExecutionsSummary.
func (mr *MockRepositoryMockRecorder) GetExecutionsSummary(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExecutionsSummary", reflect.TypeOf((*MockRepository)(nil).GetExecutionsSummary), arg0, arg1)
}

// GetExecutionsTotals mocks base method.
func (m *MockRepository) GetExecutionsTotals(arg0 context.Context, arg1 ...Filter) (testkube.ExecutionsTotals, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0}
	for _, a := range arg1 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetExecutionsTotals", varargs...)
	ret0, _ := ret[0].(testkube.ExecutionsTotals)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetExecutionsTotals indicates an expected call of GetExecutionsTotals.
func (mr *MockRepositoryMockRecorder) GetExecutionsTotals(arg0 interface{}, arg1 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0}, arg1...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetExecutionsTotals", reflect.TypeOf((*MockRepository)(nil).GetExecutionsTotals), varargs...)
}

// GetLatestByTestWorkflow mocks base method.
func (m *MockRepository) GetLatestByTestWorkflow(arg0 context.Context, arg1 string) (*testkube.TestWorkflowExecution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetLatestByTestWorkflow", arg0, arg1)
	ret0, _ := ret[0].(*testkube.TestWorkflowExecution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetLatestByTestWorkflow indicates an expected call of GetLatestByTestWorkflow.
func (mr *MockRepositoryMockRecorder) GetLatestByTestWorkflow(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetLatestByTestWorkflow", reflect.TypeOf((*MockRepository)(nil).GetLatestByTestWorkflow), arg0, arg1)
}

// GetLatestByTestWorkflows mocks base method.
func (m *MockRepository) GetLatestByTestWorkflows(arg0 context.Context, arg1 []string) ([]testkube.TestWorkflowExecutionSummary, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetLatestByTestWorkflows", arg0, arg1)
	ret0, _ := ret[0].([]testkube.TestWorkflowExecutionSummary)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetLatestByTestWorkflows indicates an expected call of GetLatestByTestWorkflows.
func (mr *MockRepositoryMockRecorder) GetLatestByTestWorkflows(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetLatestByTestWorkflows", reflect.TypeOf((*MockRepository)(nil).GetLatestByTestWorkflows), arg0, arg1)
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

// GetPreviousFinishedState mocks base method.
func (m *MockRepository) GetPreviousFinishedState(arg0 context.Context, arg1 string, arg2 time.Time) (testkube.TestWorkflowStatus, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetPreviousFinishedState", arg0, arg1, arg2)
	ret0, _ := ret[0].(testkube.TestWorkflowStatus)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetPreviousFinishedState indicates an expected call of GetPreviousFinishedState.
func (mr *MockRepositoryMockRecorder) GetPreviousFinishedState(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetPreviousFinishedState", reflect.TypeOf((*MockRepository)(nil).GetPreviousFinishedState), arg0, arg1, arg2)
}

// GetUnassigned mocks base method.
func (m *MockRepository) GetUnassigned(arg0 context.Context) ([]testkube.TestWorkflowExecution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetUnassigned", arg0)
	ret0, _ := ret[0].([]testkube.TestWorkflowExecution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetUnassigned indicates an expected call of GetUnassigned.
func (mr *MockRepositoryMockRecorder) GetUnassigned(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetUnassigned", reflect.TypeOf((*MockRepository)(nil).GetUnassigned), arg0)
}

// GetRunning mocks base method.
func (m *MockRepository) GetRunning(arg0 context.Context) ([]testkube.TestWorkflowExecution, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetRunning", arg0)
	ret0, _ := ret[0].([]testkube.TestWorkflowExecution)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetRunning indicates an expected call of GetRunning.
func (mr *MockRepositoryMockRecorder) GetRunning(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetRunning", reflect.TypeOf((*MockRepository)(nil).GetRunning), arg0)
}

// GetTestWorkflowMetrics mocks base method.
func (m *MockRepository) GetTestWorkflowMetrics(arg0 context.Context, arg1 string, arg2, arg3 int) (testkube.ExecutionsMetrics, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetTestWorkflowMetrics", arg0, arg1, arg2, arg3)
	ret0, _ := ret[0].(testkube.ExecutionsMetrics)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetTestWorkflowMetrics indicates an expected call of GetTestWorkflowMetrics.
func (mr *MockRepositoryMockRecorder) GetTestWorkflowMetrics(arg0, arg1, arg2, arg3 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetTestWorkflowMetrics", reflect.TypeOf((*MockRepository)(nil).GetTestWorkflowMetrics), arg0, arg1, arg2, arg3)
}

// Init mocks base method.
func (m *MockRepository) Init(arg0 context.Context, arg1 string, arg2 InitData) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Init", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// Init indicates an expected call of Init.
func (mr *MockRepositoryMockRecorder) Init(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Init", reflect.TypeOf((*MockRepository)(nil).Init), arg0, arg1, arg2)
}

// Insert mocks base method.
func (m *MockRepository) Insert(arg0 context.Context, arg1 testkube.TestWorkflowExecution) error {
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

// Update mocks base method.
func (m *MockRepository) Update(arg0 context.Context, arg1 testkube.TestWorkflowExecution) error {
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

// UpdateOutput mocks base method.
func (m *MockRepository) UpdateOutput(arg0 context.Context, arg1 string, arg2 []testkube.TestWorkflowOutput) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateOutput", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateOutput indicates an expected call of UpdateOutput.
func (mr *MockRepositoryMockRecorder) UpdateOutput(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateOutput", reflect.TypeOf((*MockRepository)(nil).UpdateOutput), arg0, arg1, arg2)
}

// UpdateReport mocks base method.
func (m *MockRepository) UpdateReport(arg0 context.Context, arg1 string, arg2 *testkube.TestWorkflowReport) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateReport", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateReport indicates an expected call of UpdateReport.
func (mr *MockRepositoryMockRecorder) UpdateReport(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateReport", reflect.TypeOf((*MockRepository)(nil).UpdateReport), arg0, arg1, arg2)
}

// UpdateResult mocks base method.
func (m *MockRepository) UpdateResult(arg0 context.Context, arg1 string, arg2 *testkube.TestWorkflowResult) error {
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
