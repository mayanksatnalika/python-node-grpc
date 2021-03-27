import grpc

import calculator_service_pb2
import calculator_service_pb2_grpc


def run():
    channel = grpc.insecure_channel(("localhost:5000"))

    stub = calculator_service_pb2_grpc.RouteGuideStub(channel)

    response = stub.GetGreeting(calculator_service_pb2.emptyMessageReuqest())
    print(response.greeting_message, type(response.greeting_message))

    response = stub.GetAnswer(calculator_service_pb2.argumentsRequest(op1=9, op2=12.2, operand="*"))
    print(response.calculator_answer, type(response.calculator_answer))

    try:
        response = stub.GetAnswer(calculator_service_pb2.argumentsRequest())
        print(response.calculator_answer, type(response.calculator_answer))

    except Exception as e:
        print ("failed with exception: {}".format(e.details()))
        # print(response)


"""
    try:
        response = stub.SayHelloStrict(hello_pb2.HelloReq(
            Name='Leonhard Euler'))
    except grpc.RpcError as e:
        # ouch!
        # lets print the gRPC error message
        # which is "Length of `Name` cannot be more than 10 characters"
        print(e.details())
        # lets access the error code, which is `INVALID_ARGUMENT`
        # `type` of `status_code` is `grpc.StatusCode`
        status_code = e.code()
        # should print `INVALID_ARGUMENT`
        print(status_code.name)
        # should print `(3, 'invalid argument')`
        print(status_code.value)
        # want to do some specific action based on the error?
        if grpc.StatusCode.INVALID_ARGUMENT == status_code:
            # do your stuff here
            pass
    else:
        print(response.Result)"""


if __name__ == '__main__':
    run()
