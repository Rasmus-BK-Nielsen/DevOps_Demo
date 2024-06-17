#!/bin/bash

# Pull the latest changes from the repository
cd /usr/share/nginx/html
git pull origin main

# Start Nginx and keep it running in the foreground
nginx -g 'daemon off;'