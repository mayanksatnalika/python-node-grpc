const grpc = require('grpc');
const messages = require('./calculator_service_pb')
const services = require('./calculator_service_grpc_pb')

function main() {

    const client = new services.RouteGuideClient(
        "pyserver:5000", grpc.credentials.createInsecure()
    );

    let CalculatorRequest = new messages.argumentsRequest();

    CalculatorRequest.setOp1(10);
    CalculatorRequest.setOp2(3);
    CalculatorRequest.setOperand("-");
    client.getAnswer(CalculatorRequest, function (err, response) {
        if (err) {
            console.log("err", err);
        } else {
            console.log('response:', response.getCalculatorAnswer());
        }
    });

    CalculatorRequest.setOp1(10);
    CalculatorRequest.setOp2(3);
    CalculatorRequest.setOperand(";");
    client.getAnswer(CalculatorRequest, function (err, response) {
        if (err) {
            console.log("err", err.details);
        } else {
            console.log('response:', response.getCalculatorAnswer());
        }
    });


    CalculatorRequest = new messages.argumentsRequest();
    client.getAnswer(CalculatorRequest, function (err, response) {
        if (err) {
            console.log("err", err.details);
        } else {
            console.log('response:', response.getCalculatorAnswer());
        }
    });

}


main();