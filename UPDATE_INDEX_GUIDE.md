# 🔄 Recipe Index Updater

## What It Does

The `update-index` script automatically scans your `recipes/` folder and updates the recipe registry in `scripts/config.js`. Run this whenever you add new recipe JSON files.

---

## When to Use

Run this script when:
- ✅ You add a new recipe JSON file
- ✅ You rename a recipe file
- ✅ You move recipes between categories
- ✅ You delete a recipe
- ✅ You want to verify all recipes are registered

---

## How to Run

### Mac/Linux:
```bash
./update-index.sh
```

### Windows:
```bash
update-index.bat
```

### Direct Python:
```bash
python3 scripts/update-index.py
```

---

## What It Does

1. **Scans** all recipe JSON files in `recipes/` folders
2. **Validates** each JSON file
3. **Checks** for required fields (id, title, category)
4. **Updates** the `recipeFiles` array in `scripts/config.js`
5. **Shows** a summary of recipes by category

---

## Example Output

```
🍳 Cookbook Index Updater
============================================================

📁 Scanning recipes folder...
✅ Found 8 recipe files

📊 Recipe Summary by Category:
============================================================
  beverages              2 recipes
  breads                 1 recipe 
  desserts               2 recipes
  gravy                  1 recipe 
  rice                   1 recipe 
  sauces                 1 recipe 
============================================================
  TOTAL                  8 recipes

📝 Updating scripts/config.js...
✅ Recipe index updated successfully!

💡 Next steps:
   1. Review the changes in scripts/config.js
   2. Test in browser: python3 -m http.server 8000
   3. Commit changes to git

🎉 Done!
```

---

## What It Checks

### File Validation:
- ✅ Valid JSON syntax
- ✅ Required fields present (id, title, category)
- ✅ ID matches filename
- ✅ Category matches folder

### Warnings:
- ⚠️  Missing required fields
- ⚠️  ID doesn't match filename
- ⚠️  Category doesn't match folder
- ⚠️  Invalid JSON syntax

---

## Example Workflow

### Adding a New Recipe:

```bash
# 1. Create recipe file
cp recipes/recipe-template.json recipes/desserts/tiramisu.json

# 2. Edit the recipe
vim recipes/desserts/tiramisu.json

# 3. Run update script
./update-index.sh

# 4. Test in browser
./start.sh

# 5. Commit changes
git add recipes/desserts/tiramisu.json scripts/config.js
git commit -m "Add tiramisu recipe"
```

---

## Automatic vs Manual

### Automatic (Recommended):
```bash
./update-index.sh
```
✅ Scans all recipes  
✅ Validates JSON  
✅ Updates config.js  
✅ Shows summary  

### Manual:
Edit `scripts/config.js` directly:
```javascript
recipeFiles: [
    'desserts/chocolate-cake',
    'desserts/tiramisu',  // ← Add this manually
    // ...
]
```
❌ Error-prone  
❌ Easy to forget  
❌ No validation  

---

## Troubleshooting

### "recipes folder not found"
- Run from cookbook root directory
- Or use the wrapper scripts

### "Invalid JSON"
- Fix JSON syntax errors
- Use [JSONLint](https://jsonlint.com/) to validate
- Check for trailing commas, missing quotes

### "Missing required fields"
- Add `id`, `title`, and `category` to recipe
- Check recipe-template.json for reference

### Script doesn't run
- Ensure Python 3 is installed
- Make script executable: `chmod +x update-index.sh`

---

## Integration with Git

### Pre-commit Hook (Optional):

Create `.git/hooks/pre-commit`:
```bash
#!/bin/bash
# Auto-update recipe index before commit

if git diff --cached --name-only | grep -q "recipes/.*\.json"; then
    echo "📝 Updating recipe index..."
    python3 scripts/update-index.py
    git add scripts/config.js
fi
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

Now the index updates automatically when you commit recipe changes!

---

## CI/CD Integration

### GitHub Actions (Optional):

Create `.github/workflows/update-index.yml`:
```yaml
name: Update Recipe Index

on:
  push:
    paths:
      - 'recipes/**/*.json'

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Update index
        run: python3 scripts/update-index.py
      - name: Commit changes
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add scripts/config.js
          git commit -m "Auto-update recipe index" || echo "No changes"
          git push
```

---

## Advanced Usage

### Validate Only (No Update):
```python
# Modify update-index.py to skip update
# Comment out: update_config_js(recipe_files)
```

### Generate Recipe List:
```bash
python3 scripts/update-index.py | grep "recipes"
```

### Check for Issues:
```bash
python3 scripts/update-index.py 2>&1 | grep "Warning\|Error"
```

---

## Files Modified

The script modifies:
- `scripts/config.js` - Updates the `recipeFiles` array

The script reads:
- `recipes/*/*.json` - All recipe files

---

## Best Practices

1. **Run after every recipe change**
2. **Review changes** before committing
3. **Test in browser** after updating
4. **Commit config.js** with recipe changes
5. **Use version control** to track changes

---

## Summary

The update script makes managing recipes easy:
- No manual config editing
- Automatic validation
- Clear error messages
- Summary reports

**Run it whenever you modify recipe files!**

---

## Quick Reference

```bash
# Add new recipe
cp recipes/recipe-template.json recipes/category/name.json
vim recipes/category/name.json
./update-index.sh

# Delete recipe
rm recipes/category/name.json
./update-index.sh

# Move recipe
mv recipes/old-category/name.json recipes/new-category/
./update-index.sh

# Check status
python3 scripts/update-index.py
```

---

**Happy Cooking! 🍳**
