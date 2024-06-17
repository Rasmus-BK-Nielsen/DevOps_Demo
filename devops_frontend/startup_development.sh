#!/bin/bash

# Navigate to the app directory
cd /app/devops_frontend

# Stash any local changes
git stash

# Pull the latest changes from the repository
git pull origin frontend_dev

# Apply the stashed changes
git stash pop || echo "No local changes to apply"

# Install any new dependencies
npm install

# Start the development server
npm start
