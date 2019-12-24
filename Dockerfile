FROM node:10.18.0-stretch-slim

COPY . /code
WORKDIR /code

RUN npm install