FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

EXPOSE 3070

CMD [ "node", "index.js" ]