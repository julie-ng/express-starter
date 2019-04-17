FROM node:10-alpine
MAINTAINER Julie Ng <me@julie.io>

WORKDIR /workspace

# required for health checks
RUN apk --no-cache add curl bash

# cache dependencies as layer
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

COPY ["src/", "/workspace/src/"]

EXPOSE ${PORT:-80}
CMD ["npm", "start"]
