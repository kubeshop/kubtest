// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.19.4
// source: pkg/logs/pb/logs.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type StreamResponseStatus int32

const (
	StreamResponseStatus_Completed StreamResponseStatus = 0
	StreamResponseStatus_Failed    StreamResponseStatus = 1
)

// Enum value maps for StreamResponseStatus.
var (
	StreamResponseStatus_name = map[int32]string{
		0: "Completed",
		1: "Failed",
	}
	StreamResponseStatus_value = map[string]int32{
		"Completed": 0,
		"Failed":    1,
	}
)

func (x StreamResponseStatus) Enum() *StreamResponseStatus {
	p := new(StreamResponseStatus)
	*p = x
	return p
}

func (x StreamResponseStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (StreamResponseStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_pkg_logs_pb_logs_proto_enumTypes[0].Descriptor()
}

func (StreamResponseStatus) Type() protoreflect.EnumType {
	return &file_pkg_logs_pb_logs_proto_enumTypes[0]
}

func (x StreamResponseStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use StreamResponseStatus.Descriptor instead.
func (StreamResponseStatus) EnumDescriptor() ([]byte, []int) {
	return file_pkg_logs_pb_logs_proto_rawDescGZIP(), []int{0}
}

type LogRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ExecutionId string `protobuf:"bytes,2,opt,name=execution_id,json=executionId,proto3" json:"execution_id,omitempty"`
}

func (x *LogRequest) Reset() {
	*x = LogRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_logs_pb_logs_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LogRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LogRequest) ProtoMessage() {}

func (x *LogRequest) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_logs_pb_logs_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LogRequest.ProtoReflect.Descriptor instead.
func (*LogRequest) Descriptor() ([]byte, []int) {
	return file_pkg_logs_pb_logs_proto_rawDescGZIP(), []int{0}
}

func (x *LogRequest) GetExecutionId() string {
	if x != nil {
		return x.ExecutionId
	}
	return ""
}

type Log struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Time     *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=time,proto3" json:"time,omitempty"`
	Content  string                 `protobuf:"bytes,2,opt,name=content,proto3" json:"content,omitempty"`
	Error    bool                   `protobuf:"varint,3,opt,name=error,proto3" json:"error,omitempty"`
	Type     string                 `protobuf:"bytes,4,opt,name=type,proto3" json:"type,omitempty"`
	Source   string                 `protobuf:"bytes,5,opt,name=source,proto3" json:"source,omitempty"`
	Version  string                 `protobuf:"bytes,6,opt,name=version,proto3" json:"version,omitempty"`
	Metadata map[string]string      `protobuf:"bytes,7,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Log) Reset() {
	*x = Log{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_logs_pb_logs_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Log) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Log) ProtoMessage() {}

func (x *Log) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_logs_pb_logs_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Log.ProtoReflect.Descriptor instead.
func (*Log) Descriptor() ([]byte, []int) {
	return file_pkg_logs_pb_logs_proto_rawDescGZIP(), []int{1}
}

func (x *Log) GetTime() *timestamppb.Timestamp {
	if x != nil {
		return x.Time
	}
	return nil
}

func (x *Log) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

func (x *Log) GetError() bool {
	if x != nil {
		return x.Error
	}
	return false
}

func (x *Log) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Log) GetSource() string {
	if x != nil {
		return x.Source
	}
	return ""
}

func (x *Log) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *Log) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type StreamResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Message string               `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	Status  StreamResponseStatus `protobuf:"varint,2,opt,name=status,proto3,enum=logs.StreamResponseStatus" json:"status,omitempty"`
}

func (x *StreamResponse) Reset() {
	*x = StreamResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pkg_logs_pb_logs_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreamResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreamResponse) ProtoMessage() {}

func (x *StreamResponse) ProtoReflect() protoreflect.Message {
	mi := &file_pkg_logs_pb_logs_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreamResponse.ProtoReflect.Descriptor instead.
func (*StreamResponse) Descriptor() ([]byte, []int) {
	return file_pkg_logs_pb_logs_proto_rawDescGZIP(), []int{2}
}

func (x *StreamResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *StreamResponse) GetStatus() StreamResponseStatus {
	if x != nil {
		return x.Status
	}
	return StreamResponseStatus_Completed
}

var File_pkg_logs_pb_logs_proto protoreflect.FileDescriptor

var file_pkg_logs_pb_logs_proto_rawDesc = []byte{
	0x0a, 0x16, 0x70, 0x6b, 0x67, 0x2f, 0x6c, 0x6f, 0x67, 0x73, 0x2f, 0x70, 0x62, 0x2f, 0x6c, 0x6f,
	0x67, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x6c, 0x6f, 0x67, 0x73, 0x1a, 0x1f,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x2f, 0x0a, 0x0a, 0x4c, 0x6f, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x21, 0x0a,
	0x0c, 0x65, 0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x65, 0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64,
	0x22, 0x9d, 0x02, 0x0a, 0x03, 0x4c, 0x6f, 0x67, 0x12, 0x2e, 0x0a, 0x04, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74,
	0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65,
	0x6e, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06,
	0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x33,
	0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x4c, 0x6f, 0x67, 0x2e, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x1a, 0x3b, 0x0a, 0x0d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x22, 0x5e, 0x0a, 0x0e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x32, 0x0a, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e, 0x6c,
	0x6f, 0x67, 0x73, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x2a, 0x31, 0x0a, 0x14, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0d, 0x0a, 0x09, 0x43, 0x6f, 0x6d, 0x70,
	0x6c, 0x65, 0x74, 0x65, 0x64, 0x10, 0x00, 0x12, 0x0a, 0x0a, 0x06, 0x46, 0x61, 0x69, 0x6c, 0x65,
	0x64, 0x10, 0x01, 0x32, 0x34, 0x0a, 0x0b, 0x4c, 0x6f, 0x67, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x25, 0x0a, 0x04, 0x4c, 0x6f, 0x67, 0x73, 0x12, 0x10, 0x2e, 0x6c, 0x6f, 0x67,
	0x73, 0x2e, 0x4c, 0x6f, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x09, 0x2e, 0x6c,
	0x6f, 0x67, 0x73, 0x2e, 0x4c, 0x6f, 0x67, 0x30, 0x01, 0x32, 0x66, 0x0a, 0x10, 0x43, 0x6c, 0x6f,
	0x75, 0x64, 0x4c, 0x6f, 0x67, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x2b, 0x0a,
	0x06, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x09, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x4c,
	0x6f, 0x67, 0x1a, 0x14, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x28, 0x01, 0x12, 0x25, 0x0a, 0x04, 0x4c, 0x6f,
	0x67, 0x73, 0x12, 0x10, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x4c, 0x6f, 0x67, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x09, 0x2e, 0x6c, 0x6f, 0x67, 0x73, 0x2e, 0x4c, 0x6f, 0x67, 0x30,
	0x01, 0x42, 0x0d, 0x5a, 0x0b, 0x70, 0x6b, 0x67, 0x2f, 0x6c, 0x6f, 0x67, 0x73, 0x2f, 0x70, 0x62,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pkg_logs_pb_logs_proto_rawDescOnce sync.Once
	file_pkg_logs_pb_logs_proto_rawDescData = file_pkg_logs_pb_logs_proto_rawDesc
)

func file_pkg_logs_pb_logs_proto_rawDescGZIP() []byte {
	file_pkg_logs_pb_logs_proto_rawDescOnce.Do(func() {
		file_pkg_logs_pb_logs_proto_rawDescData = protoimpl.X.CompressGZIP(file_pkg_logs_pb_logs_proto_rawDescData)
	})
	return file_pkg_logs_pb_logs_proto_rawDescData
}

var file_pkg_logs_pb_logs_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_pkg_logs_pb_logs_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_pkg_logs_pb_logs_proto_goTypes = []interface{}{
	(StreamResponseStatus)(0),     // 0: logs.StreamResponseStatus
	(*LogRequest)(nil),            // 1: logs.LogRequest
	(*Log)(nil),                   // 2: logs.Log
	(*StreamResponse)(nil),        // 3: logs.StreamResponse
	nil,                           // 4: logs.Log.MetadataEntry
	(*timestamppb.Timestamp)(nil), // 5: google.protobuf.Timestamp
}
var file_pkg_logs_pb_logs_proto_depIdxs = []int32{
	5, // 0: logs.Log.time:type_name -> google.protobuf.Timestamp
	4, // 1: logs.Log.metadata:type_name -> logs.Log.MetadataEntry
	0, // 2: logs.StreamResponse.status:type_name -> logs.StreamResponseStatus
	1, // 3: logs.LogsService.Logs:input_type -> logs.LogRequest
	2, // 4: logs.CloudLogsService.Stream:input_type -> logs.Log
	1, // 5: logs.CloudLogsService.Logs:input_type -> logs.LogRequest
	2, // 6: logs.LogsService.Logs:output_type -> logs.Log
	3, // 7: logs.CloudLogsService.Stream:output_type -> logs.StreamResponse
	2, // 8: logs.CloudLogsService.Logs:output_type -> logs.Log
	6, // [6:9] is the sub-list for method output_type
	3, // [3:6] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_pkg_logs_pb_logs_proto_init() }
func file_pkg_logs_pb_logs_proto_init() {
	if File_pkg_logs_pb_logs_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pkg_logs_pb_logs_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LogRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_logs_pb_logs_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Log); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pkg_logs_pb_logs_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreamResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pkg_logs_pb_logs_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   2,
		},
		GoTypes:           file_pkg_logs_pb_logs_proto_goTypes,
		DependencyIndexes: file_pkg_logs_pb_logs_proto_depIdxs,
		EnumInfos:         file_pkg_logs_pb_logs_proto_enumTypes,
		MessageInfos:      file_pkg_logs_pb_logs_proto_msgTypes,
	}.Build()
	File_pkg_logs_pb_logs_proto = out.File
	file_pkg_logs_pb_logs_proto_rawDesc = nil
	file_pkg_logs_pb_logs_proto_goTypes = nil
	file_pkg_logs_pb_logs_proto_depIdxs = nil
}
