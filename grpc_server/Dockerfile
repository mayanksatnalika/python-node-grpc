FROM python:3.7-stretch
RUN apt-get update 
RUN  apt-get install -y python-pip python-dev  build-essential
RUN apt-get -y install git wget nano curl 
COPY requirements.txt /
RUN pip install --trusted-host pypi.python.org -r requirements.txt
COPY ./ /
RUN python -m grpc_tools.protoc -I=./ --python_out=. --grpc_python_out=. ./calculator_service.proto
CMD ["python", "server.py"]