#!/bin/bash

sleep 15

while true; do
    if pgrep -x "nsurlsessiond" >/dev/null; then
        echo "nsurlsessiond is running. Killing the process..."
        pkill nsurlsessiond
    else
        echo "nsurlsessiond is not running."
    fi
    sleep 15
done