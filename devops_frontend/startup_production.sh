#!/bin/bash

# Pull the latest changes from the repository
cd /usr/share/nginx/html
git pull origin main

<<<<<<< HEAD
# Start Nginx
=======
# Start Nginx and keep it running in the foreground
>>>>>>> ec742093b4ca9296af55ef36b7a7811fc5b607a2
nginx -g 'daemon off;'