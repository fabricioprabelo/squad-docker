#!/bin/sh
echo "Running initial scripts"

APP="/home/node/app"
APP_NODE_DIR="/home/node/app/node_modules"
APP_BUILD_DIR="/home/node/app/build"
WWW="/www"
WWW_NODE_DIR="/www/node_modules"
WWW_BUILD_DIR="/www/build"

cd $WWW
### CHECK IF THE WWW_NODE_DIR DIR IS EXISTS
if [ -d "$WWW_NODE_DIR" ]; then
  ### CHECK IF THE WWW_BUILD_DIR DIR IS BUILT
  if [ -d "$WWW_BUILD_DIR" ]; then
  else
    ###  Control will jump here if $WWW_BUILD_DIR does NOT exists ###
    echo "Building node app..."
    yarn build
  fi
else
  ###  Control will jump here if $WWW_NODE_DIR does NOT exists ###
  echo "Installing node app dependencies in ${WWW}..."
  yarn install
  yarn build
fi

cd $APP
### CHECK IF THE APP_NODE_DIR DIR IS EXISTS
if [ -d "$APP_NODE_DIR" ]; then
  ### CHECK IF THE APP_NODE_DIR DIR IS EXISTS
  if [ -d "$APP_BUILD_DIR" ]; then
    yarn seed:prod
    yarn start
  else
    ###  Control will jump here if $APP_NODE_DIR does NOT exists ###
    echo "Building node server..."
    yarn build
    yarn seed:prod
    yarn start
  fi
else
  ###  Control will jump here if $APP_NODE_DIR does NOT exists ###
  echo "Installing node server dependencies in ${APP}..."
  yarn install
  yarn build
  yarn seed:prod
  yarn start
fi

