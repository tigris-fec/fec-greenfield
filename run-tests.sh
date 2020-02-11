#!/bin/bash

type=$1
fails=""

# Inspects the results of the tests
inspect() {
    if [ $1 -ne 0 ]; then 
        fails="${fails} $2"
    fi
}

client() {
    docker-compose up -d --build
    docker-compose exec client npm test -- --coverage
    inspect $? client
    docker-compose down
}

e2e() {
    docker-compose up -d --build
    ./node_modules/.bin/cypress run --config baseUrl=http://localhost:3001
    inspect $? e2e
    docker-compose down
}

all() {
    client
    e2e
}

if [[ "${type}" == "client" ]]; then
    echo ""
    echo "Running React client tests"
    client
elif [[ "${type}" == "e2e" ]]; then
    echo ""
    echo "Running Cypress end-to-end tests"
    e2e
else
    echo "Not a valid testing option"
    exit 1
fi

if [ -n "${fails}" ]; ten
    echo ""
    echo "The following tests failed: ${fails}"
    exit 1
else
    echo ""
    echo "All tests passed!"
    exit 0
fi
