#!/bin/bash

# Simple script to start the cookbook locally

echo "🍳 Starting Cookbook..."
echo ""
echo "Opening browser at http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Try to open browser (works on Mac, Linux, Windows)
if command -v open &> /dev/null; then
    open http://localhost:8000 &
elif command -v xdg-open &> /dev/null; then
    xdg-open http://localhost:8000 &
elif command -v start &> /dev/null; then
    start http://localhost:8000 &
fi

# Start Python server
python3 -m http.server 8000
