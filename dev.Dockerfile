FROM node:19-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY ./ ./

RUN npm install --legacy-peer-deps

CMD npm run serve
