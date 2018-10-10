FROM node:10
MAINTAINER Julie Ng

WORKDIR /workspace

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY ["src/", "/workspace/src/"]
