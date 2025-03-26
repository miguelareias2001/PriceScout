#!/bin/bash

# Make sure we're in the project directory
cd "$(dirname "$0")"

# Initialize Git if it's not already initialized
if [ ! -d .git ]; then
  echo "Initializing Git repository..."
  git init
fi

# Check if files are tracked
UNTRACKED=$(git ls-files --others --exclude-standard | wc -l)
if [ $UNTRACKED -gt 0 ]; then
  echo "Adding untracked files to Git..."
  git add .
fi

# Make initial commit if needed
COMMITS=$(git rev-list --all --count 2>/dev/null || echo "0")
if [ "$COMMITS" -eq "0" ]; then
  echo "Creating initial commit..."
  git commit -m "Initial commit: PriceScout project setup with Bootstrap UI"
fi

# Prompt for remote repository
read -p "Would you like to add a remote repository? (y/n): " ADD_REMOTE
if [ "$ADD_REMOTE" = "y" ]; then
  read -p "Enter remote repository URL: " REMOTE_URL
  git remote add origin $REMOTE_URL
  git push -u origin $(git branch --show-current)
  echo "Repository pushed to remote."
fi

echo "Git setup complete!"
chmod +x git-setup.sh
