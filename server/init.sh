#!/bin/sh
echo "Running initial scripts"
cd /www
yarn install
yarn build
cd /home/node/app
yarn install
yarn build
yarn seed:prod
yarn start
