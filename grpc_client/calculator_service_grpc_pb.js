// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var calculator_service_pb = require('./calculator_service_pb.js');

function serialize_answerResponse(arg) {
  if (!(arg instanceof calculator_service_pb.answerResponse)) {
    throw new Error('Expected argument of type answerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_answerResponse(buffer_arg) {
  return calculator_service_pb.answerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_argumentsRequest(arg) {
  if (!(arg instanceof calculator_service_pb.argumentsRequest)) {
    throw new Error('Expected argument of type argumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_argumentsRequest(buffer_arg) {
  return calculator_service_pb.argumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_emptyMessageReuqest(arg) {
  if (!(arg instanceof calculator_service_pb.emptyMessageReuqest)) {
    throw new Error('Expected argument of type emptyMessageReuqest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_emptyMessageReuqest(buffer_arg) {
  return calculator_service_pb.emptyMessageReuqest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greetingResponse(arg) {
  if (!(arg instanceof calculator_service_pb.greetingResponse)) {
    throw new Error('Expected argument of type greetingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greetingResponse(buffer_arg) {
  return calculator_service_pb.greetingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RouteGuideService = exports.RouteGuideService = {
  getGreeting: {
    path: '/RouteGuide/GetGreeting',
    requestStream: false,
    responseStream: false,
    requestType: calculator_service_pb.emptyMessageReuqest,
    responseType: calculator_service_pb.greetingResponse,
    requestSerialize: serialize_emptyMessageReuqest,
    requestDeserialize: deserialize_emptyMessageReuqest,
    responseSerialize: serialize_greetingResponse,
    responseDeserialize: deserialize_greetingResponse,
  },
  getAnswer: {
    path: '/RouteGuide/GetAnswer',
    requestStream: false,
    responseStream: false,
    requestType: calculator_service_pb.argumentsRequest,
    responseType: calculator_service_pb.answerResponse,
    requestSerialize: serialize_argumentsRequest,
    requestDeserialize: deserialize_argumentsRequest,
    responseSerialize: serialize_answerResponse,
    responseDeserialize: deserialize_answerResponse,
  },
};

exports.RouteGuideClient = grpc.makeGenericClientConstructor(RouteGuideService);
