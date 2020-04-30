#!/bin/bash

source $HOME/.bash_profile
export WILLSON=$HOME/deploy/koreanhistoryjam


echo "make bundle file"
cd $HOME/deploy/koreanhistoryjam
npm run build

echo "start historyjam-ci project"
pm2 restart

echo "update env historyjam-ci project"
pm2 start ecosystem.config.js --env production