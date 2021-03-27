const grpc = require('grpc');
const messages = require('./calculator_service_pb')
const services = require('./calculator_service_grpc_pb')

async function main() {

    const client = new services.RouteGuideClient(
        "pyserver:5000", grpc.credentials.createInsecure()
    );

    const CalculatorRequest = new messages.argumentsRequest();
    /*
    CalculatorRequest.setOp1(10);
    CalculatorRequest.setOp2(3);
    CalculatorRequest.setOperand("-");
    client.getAnswer(CalculatorRequest, function (err, response) {
        if (err) {
            console.log("err", err);
        } else {
            console.log('response:', response.getCalculatorAnswer());
        }
    });*/

    CalculatorRequest.setOp1(10);
    CalculatorRequest.setOp2(3);
    CalculatorRequest.setOperand("-");
    console.log("set values");
    try{
        myresp = await client.getAnswer(CalculatorRequest, somefun);
        console.log("found ans");
        console.log(myresp);
    } catch (e) {
        console.log("inside err", e);
    }


    /*
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


    CalculatorRequest.setOp1(10);
    CalculatorRequest.setOp2(3);
    CalculatorRequest.setOperand("+");
    client.getAnswer(CalculatorRequest, function (err, response) {
        if (err) {
            console.log("err", err);
        } else {
            console.log('response:', response.getCalculatorAnswer());
        }
    });*/

}



try {
    main();
    console.log("outside main.")
} catch (e) {
    console.log("inside err main.")
    console.error(e);
}