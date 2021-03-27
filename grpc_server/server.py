import grpc
import concurrent
from concurrent import futures
import calculator_service_pb2
import calculator_service_pb2_grpc
from handlers import calculator
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler()
    ]
)

logging.info("Starting server...")


class CalculatorServicer(calculator_service_pb2_grpc.RouteGuideServicer):
    def GetGreeting(self, request, context):
        logging.info("called GetGreeting")
        # print ("request:", request)
        # print ("context:", context)
        response = calculator_service_pb2.greetingResponse()
        response.greeting_message = "Hello from grpc!"
        return response

    def GetAnswer(self, request, context):
        logging.info("called grpc")
        op1 = request.op1
        op2 = request.op2
        operand = request.operand

        try:
            answer = calculator(op1, op2, operand)
        except Exception as e:
            logging.info("Server exception: " + str(e))
            context.set_details("Unsupported Operand")
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            return calculator_service_pb2.answerResponse()

        response = calculator_service_pb2.answerResponse()

        print ("got response.")
        response.calculator_answer = answer
        print ("set value.", answer)

        return response


if __name__ == "__main__":
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=5))
    calculator_service_pb2_grpc.add_RouteGuideServicer_to_server(CalculatorServicer(), server)
    print ("Server Working!")
    server.add_insecure_port("[::]:5000")
    server.start()
    server.wait_for_termination()
