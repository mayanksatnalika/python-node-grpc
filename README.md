Example python-nodejs rpc call using GRPC over protobuf.

run `bash build.sh` to build necessary containers. 

Then in one terminal start the python-server using command:

`docker run --network=grpc_demo --name pyserver  --rm server:v0` 

In another terminal, run the client by running command:

`docker run --network=grpc_demo --name nodeclient --rm client:v0` 
