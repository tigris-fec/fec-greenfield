FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm ci
RUN npm install react-scripts@2.1.8 -g --silent

CMD ["npm", "start"]
