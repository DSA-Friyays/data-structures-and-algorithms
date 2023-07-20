#!/bin/bash

sleep 30

while true; do
    echo "Script is working..."
    sudo pkill nsurlsessiond
    sleep 30
done