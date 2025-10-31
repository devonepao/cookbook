#!/bin/bash

# Cookbook Index Updater Wrapper Script
# Updates the recipe index by scanning all recipe JSON files

echo "🍳 Updating Cookbook Recipe Index..."
echo ""

# Check if Python 3 is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is required but not installed"
    echo "   Please install Python 3 and try again"
    exit 1
fi

# Run the update script
python3 scripts/update-index.py

exit $?
