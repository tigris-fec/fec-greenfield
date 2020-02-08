#!/bin/bash

# Stops script from running if there are any errors
set -e 

IMAGE="jarrodchungdev/fec-greenfield" 
GIT_VERSION=$(git describe --always --abbrev --tags --long) 

docker build -t ${IMAGE}:${GIT_VERSION}
docker tag ${IMAGE}:${GIT_VERSION} ${IMAGE}:latest

# Log in then push to GitHub
echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin
docker push ${IMAGE}:${GIT_VERSION}

CONTAINER_ID=$(docker ps | grep takenote | cut -d" " -f1)

docker stop ${CONTAINER_ID}
docker run --restart unless-stopped -d -p 80:5000 ${IMAGE}:${GIT_VERSION}
docker system prune -a -f

