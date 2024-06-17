#!/bin/bash

# Pull the latest changes from the repository
cd /app/devops_frontend
git stash
git pull origin frontend_dev
git stash pop

# Install any new dependencies
npm install

# Start the development server
npm start