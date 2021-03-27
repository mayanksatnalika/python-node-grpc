cd "grpc_server" && docker build . -t server:v0
cd "../grpc_client" && docker build . -t client:v0
docker network create  grpc_demo 
docker run --network=grpc_demo --name pyserver  server:v0 && docker run --network=grpc_demo --name nodeclient client:v0
