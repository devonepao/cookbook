#!/bin/bash

# Local Build Script for Cookbook
# Simulates GitHub Actions build process locally

set -e  # Exit on error

echo "🍳 Cookbook Local Build"
echo "══════════════════════════════════════════════════════════"
echo ""

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 is required"
    exit 1
fi

# Step 1: Validate recipes
echo "📝 Step 1: Validating recipes..."
python3 scripts/validate-recipes.py
echo ""

# Step 2: Update index
echo "📝 Step 2: Updating recipe index..."
python3 scripts/update-index.py
echo ""

# Step 3: Build site
echo "📝 Step 3: Building static site..."
python3 scripts/build.py
echo ""

# Step 4: Test built site
echo "📝 Step 4: Testing built site..."
if [ -f dist/index.html ] && [ -f dist/scripts/config.js ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed - missing files"
    exit 1
fi

echo ""
echo "══════════════════════════════════════════════════════════"
echo "✅ Local build complete!"
echo ""
echo "📂 Output directory: dist/"
echo "🌐 To test: cd dist && python3 -m http.server 8000"
echo ""
