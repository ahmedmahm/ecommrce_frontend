# base image
FROM node:12.2.0-alpine

# set working directory

# install and cache app dependenci
RUN npm install
RUN npm install @vue/cli@3.7.0 -g

COPY ./dist .
EXPOSE 8080
RUN npm run build

