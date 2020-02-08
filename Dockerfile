# Base image
FROM node:13-alpine

# Sets the working directory
WORKDIR /usr/src/app

# Adds the `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm ci
RUN npm install react-scripts@latest --global --silent

CMD ["npm", "start"]
