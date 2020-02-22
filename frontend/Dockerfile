FROM node:13

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV HTTPS true

COPY package.json /usr/src/app/
RUN yarn install && yarn cache clean --force
RUN cd /usr/src/app/node_modules/swagger-client && \
  yarn install && yarn run build

COPY . /usr/src/app
