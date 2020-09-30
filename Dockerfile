FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@latest -g --silent
RUN npm install -g serve
CMD ["serve", "-s", "build"]
