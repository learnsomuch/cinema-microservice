#!/usr/bin/env bash

eval `docker-machine env manager1`

docker rm -f payment-service

docker rmi payment-service

docker image prune

docker volume prune

docker build -t payment-service .

docker run --name payment-service -l=apiRoute='/payment' -p 3003:3000 --env-file env --env-file env2 -d payment-service
