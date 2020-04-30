#!/bin/bash

source $HOME/.bash_profile
export WILLSON=$HOME/deploy/koreanhistoryjam

echo "delete koreanhistoryjam project"
pm2 delete historyjam-ci

echo "start historyjam-ci project"
pm2 start historyjam-ci