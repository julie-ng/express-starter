FROM node:10
MAINTAINER Julie Ng <me@julie.io>

WORKDIR /workspace

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY ["src/", "/workspace/src/"]
