#!/bin/bash

# Pull the latest changes from the repository
cd /app
git pull origin backend_dev


# Restore dependencies and run the development server
dotnet restore
dotnet run
