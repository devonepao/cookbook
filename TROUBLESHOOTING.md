# 🔧 Troubleshooting Guide

## Recipes Not Showing Up?

### Problem: Opening index.html directly shows "Unable to Load Recipes"

**Cause:** Browser security (CORS) prevents loading JSON files via file:// protocol

**Solution:** Use a local web server!

#### Option 1: Quick Start Scripts
```bash
# Mac/Linux
./start.sh

# Windows
start.bat
```

#### Option 2: Python Server
```bash
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

#### Option 3: Other Servers
```bash
# Node.js
npx serve

# PHP
php -S localhost:8000

# Ruby
ruby -run -e httpd . -p 8000
```

---

## Images Not Showing?

### External Images (Unsplash)
- ✅ Should work immediately
- Check internet connection
- Verify image URLs are valid

### Local Images
- Create folder: `recipes/[category]/[recipe-id]/`
- Add images: `image1.jpg`, `image2.jpg`
- Update JSON: `"images": ["recipes/category/recipe-id/image1.jpg"]`
- Path must be relative from root

---

## Recipe Not Appearing?

### Checklist:
1. ✅ Created JSON file in correct category folder?
2. ✅ Valid JSON syntax? (Check with [JSONLint](https://jsonlint.com/))
3. ✅ Added to `recipeFiles` array in `scripts/config.js`?
4. ✅ Recipe ID matches filename?
5. ✅ Using a web server (not file://)?
6. ✅ Hard refreshed browser (Ctrl+Shift+R or Cmd+Shift+R)?

### Check Browser Console
Press F12 → Console tab → Look for errors

Common errors:
- `Failed to fetch` - Not using web server
- `SyntaxError: JSON` - Invalid JSON syntax
- `404 Not Found` - Wrong file path

---

## Common JSON Errors

### Trailing Comma
```json
❌ Wrong:
{
    "id": "test",
    "title": "Test",
}

✅ Correct:
{
    "id": "test",
    "title": "Test"
}
```

### Missing Quotes
```json
❌ Wrong:
{
    id: "test",
    title: "Test"
}

✅ Correct:
{
    "id": "test",
    "title": "Test"
}
```

### Missing Commas
```json
❌ Wrong:
{
    "id": "test"
    "title": "Test"
}

✅ Correct:
{
    "id": "test",
    "title": "Test"
}
```

---

## Validation Tools

### Validate JSON
- [JSONLint](https://jsonlint.com/) - Online validator
- VS Code - Shows errors automatically
- Browser Console - Shows parsing errors

### Command Line Validation
```bash
# Validate all recipes
for file in recipes/*/*.json; do
    python3 -m json.tool "$file" > /dev/null && echo "✅ $file" || echo "❌ $file"
done
```

---

## GitHub Pages Issues

### Site Not Loading After Deploy
1. Wait 2-3 minutes for deployment
2. Check Settings → Pages is enabled
3. Verify branch is set to `main`
4. Ensure files are pushed to GitHub

### 404 Errors on GitHub Pages
- All paths should be relative
- No absolute paths like `/recipes/...`
- Use `recipes/...` instead

### Images Not Loading on GitHub Pages
- Check image paths are correct
- Verify images are committed to Git
- Case-sensitive filenames

---

## Performance Issues

### Slow Loading
- Optimize images (compress to ~200KB)
- Use WebP format for smaller sizes
- Reduce number of images per recipe

### Recipe Takes Long to Load
- Check network speed
- Verify all JSON files are valid
- Look for large image files

---

## Development Tips

### Live Reload (Optional)
```bash
# Install live-server
npm install -g live-server

# Run with auto-reload
live-server --port=8000
```

### VS Code Setup
1. Install "Live Server" extension
2. Right-click index.html → "Open with Live Server"
3. Auto-reloads on file changes

---

## Browser Compatibility

### Required Features
- ES6+ JavaScript (async/await)
- Fetch API
- Promises
- CSS Grid/Flexbox

### Supported Browsers
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+

### Not Supported
- ❌ Internet Explorer
- ❌ Very old browsers

---

## Still Having Issues?

### Debug Checklist
1. Open browser console (F12)
2. Check for red error messages
3. Verify web server is running
4. Test recipe JSON files individually
5. Clear browser cache
6. Try different browser

### Get Help
1. Read NEW_STRUCTURE.md
2. Check QUICK_REFERENCE.md
3. Review sample recipe files
4. Validate JSON at jsonlint.com
5. Check file paths are correct

---

## Quick Fixes

### "Unable to Load Recipes"
→ Start a web server!

### "Recipe not found"
→ Check filename and registration in config.js

### "Failed to fetch"
→ Use http:// not file://

### "JSON Parse Error"
→ Validate JSON syntax

### "No recipes showing"
→ Check browser console for errors

---

## Contact & Support

For more help:
- Check documentation files
- Review example recipes
- Validate your JSON files
- Use browser developer tools

**Remember:** Most issues are due to:
1. Not using a web server
2. Invalid JSON syntax
3. Wrong file paths

---

✅ **Quick Test:**
```bash
# 1. Start server
python3 -m http.server 8000

# 2. Open browser
http://localhost:8000

# 3. Open console (F12)
# 4. Check for errors
```

If you see recipes, it's working! 🎉
