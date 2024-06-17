#!/bin/bash

# Pull the latest changes from the repository
cd /app
git pull origin frontend_dev

# Install any new dependencies
npm install

# Start the development server
npm start
