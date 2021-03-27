FROM node:14
RUN npm install grpc google-protobuf @grpc/proto-loader 
RUN npm install request -g
RUN npm config set unsafe-perm true
RUN npm install protoc-gen-grpc -g
COPY ./ /
RUN protoc-gen-grpc --js_out=import_style=commonjs,binary:./ --grpc_out=./ --proto_path=./ ./calculator_service.proto
CMD ["node", "client"]
