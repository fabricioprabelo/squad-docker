#!/bin/sh
echo "Running initial scripts"
cd /home/node/app
yarn install
yarn seed:prod
yarn start