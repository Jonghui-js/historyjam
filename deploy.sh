#!/bin/bash

source $HOME/.bash_profile
export WILLSON=$HOME/deploy/koreanhistoryjam

echo "delete koreanhistoryjam project"
pm2 delete koreanhistoryjam

echo "make bundle file"
cd $HOME/deploy/koreanhistoryjam
npm run build

echo "start willson project"
pm2 start server