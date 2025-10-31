# 🎉 Updated: Recipe Files Are Now Separate!

## What Changed?

Each recipe is now stored in its own JSON file instead of being embedded in `config.js`. This makes it much easier to add, edit, and manage recipes!

---

## 📁 New File Structure

```
cookbook/
├── recipes/
│   ├── recipe-template.json          ← Copy this to create new recipes
│   ├── desserts/
│   │   ├── chocolate-cake.json       ← Individual recipe files
│   │   └── vanilla-ice-cream.json
│   ├── beverages/
│   │   ├── mango-lassi.json
│   │   └── masala-chai.json
│   ├── gravy/
│   │   └── butter-chicken.json
│   ├── rice/
│   │   └── vegetable-biryani.json
│   ├── breads/
│   │   └── garlic-naan.json
│   └── sauces/
│       └── tomato-sauce.json
└── scripts/
    └── config.js                      ← Recipe registry (just lists files)
```

---

## ✨ Benefits

### Before (Old System)
❌ One huge config.js file with all recipes  
❌ Hard to manage many recipes  
❌ Risk of syntax errors affecting all recipes  
❌ Difficult to collaborate  

### After (New System)
✅ Each recipe in its own file  
✅ Easy to add/edit/delete recipes  
✅ Syntax errors isolated to one recipe  
✅ Perfect for collaboration & version control  
✅ Can validate JSON individually  

---

## 🚀 How to Add a Recipe (3 Steps)

### 1. Create Recipe File

Copy template to your category:
```bash
cp recipes/recipe-template.json recipes/desserts/my-recipe.json
```

### 2. Edit Recipe

Open `recipes/desserts/my-recipe.json`:
```json
{
    "id": "my-recipe",
    "title": "My Amazing Recipe",
    "category": "desserts",
    "description": "A delicious dessert",
    "prepTime": "15 mins",
    "cookTime": "30 mins",
    "servings": "6",
    "featured": false,
    "images": [
        "https://images.unsplash.com/photo-xxxxx?w=800&q=80"
    ],
    "ingredients": [
        "1 cup flour",
        "2 eggs"
    ],
    "instructions": [
        "Mix ingredients",
        "Bake at 350°F"
    ]
}
```

### 3. Register Recipe

Open `scripts/config.js` and add to `recipeFiles` array:
```javascript
recipeFiles: [
    'desserts/my-recipe',     ← Add this
    'desserts/chocolate-cake',
    // ... other recipes
]
```

**That's it!** Refresh browser and your recipe appears! 🎉

---

## 📋 Recipe File Format

### Required Fields
```json
{
    "id": "unique-recipe-id",
    "title": "Recipe Title",
    "category": "desserts",
    "description": "Short description",
    "prepTime": "10 mins",
    "cookTime": "20 mins",
    "servings": "4",
    "ingredients": ["ingredient 1", "ingredient 2"],
    "instructions": ["step 1", "step 2"]
}
```

### Optional Fields
```json
{
    "featured": true,
    "images": ["path/to/image.jpg"],
    "notes": "Additional tips"
}
```

---

## 🔧 Technical Details

### How It Works

1. **Recipe Registry**: `config.js` contains a list of recipe file paths
2. **Dynamic Loading**: Recipes are loaded asynchronously when page loads
3. **Caching**: Recipes are cached in memory after first load
4. **Error Handling**: Individual recipe errors don't break the whole site

### Loading Process

```javascript
// 1. Page loads
// 2. loadAllRecipes() fetches each JSON file
// 3. Recipes stored in RECIPES_CONFIG.recipes
// 4. Page displays recipes
```

### Recipe Validation

Each JSON file should validate against this schema:
- Valid JSON syntax
- Required fields present
- Correct category name
- Arrays for ingredients and instructions

Use [JSONLint](https://jsonlint.com/) to validate!

---

## 🎯 Best Practices

### File Naming
✅ `chocolate-chip-cookies.json`  
✅ `mango-smoothie.json`  
❌ `Recipe1.json`  
❌ `my recipe.json` (no spaces!)  

### Recipe IDs
✅ Match filename: `"id": "chocolate-chip-cookies"`  
✅ Lowercase with hyphens (kebab-case)  
❌ Don't use spaces or special characters  

### Images
✅ Use Unsplash URLs for quick start  
✅ Or store locally in `recipes/[category]/[recipe-id]/`  
✅ Optimize images (~200KB)  

### Organization
✅ One recipe per file  
✅ Store in correct category folder  
✅ Keep images with their recipe  

---

## 🐛 Troubleshooting

### Recipe Not Showing?

1. **Check JSON syntax**
   - Use [JSONLint](https://jsonlint.com/)
   - Common: missing commas, trailing commas, unquoted strings

2. **Verify file location**
   - File in correct category folder?
   - Filename matches what's in config.js?

3. **Check registration**
   - Added to `recipeFiles` array in config.js?
   - No typos in path?

4. **Browser console**
   - Press F12 to open dev tools
   - Check Console tab for errors

### Common Errors

**JSON Parse Error**
```json
// ❌ Wrong - trailing comma
{
    "id": "test",
    "title": "Test Recipe",
}

// ✅ Correct
{
    "id": "test",
    "title": "Test Recipe"
}
```

**File Not Found**
```javascript
// Make sure path matches file location
// File: recipes/desserts/my-cake.json
recipeFiles: [
    'desserts/my-cake'  // ✅ Correct
    'desserts/mycake'   // ❌ Wrong filename
]
```

---

## 📚 Migration from Old System

If you have recipes in old format (embedded in config.js):

### Quick Script to Extract

```javascript
// Run in browser console on old site
Object.entries(RECIPES_CONFIG.recipes).forEach(([id, recipe]) => {
    console.log(`File: recipes/${recipe.category}/${id}.json`);
    console.log(JSON.stringify(recipe, null, 4));
    console.log('\n---\n');
});
```

Then copy each output to a new file!

---

## 🎓 Advanced Tips

### Auto-Generate Recipe List

You can auto-discover recipes instead of manual registry:

```javascript
// This would require a build step or server-side code
// For pure static site, manual registry is simpler
```

### Recipe Versioning

Track recipe changes with Git:
```bash
git log recipes/desserts/chocolate-cake.json
```

### Collaborative Editing

Perfect for teams:
- Each person works on different recipe files
- No merge conflicts
- Easy to review changes

### Export/Import

Easy to share single recipes:
```bash
# Share one recipe
curl https://your-site.com/recipes/desserts/my-cake.json

# Import
curl https://other-site.com/recipe.json > recipes/desserts/new-recipe.json
```

---

## 📊 Current Recipe Count

- **Desserts**: 2 recipes
- **Beverages**: 2 recipes
- **Gravy**: 1 recipe
- **Rice**: 1 recipe
- **Breads**: 1 recipe
- **Sauces**: 1 recipe

**Total**: 8 sample recipes included!

---

## 🎯 Next Steps

1. ✅ Understand new structure
2. ⬜ Try adding your first recipe
3. ⬜ Customize existing recipes
4. ⬜ Add your own images
5. ⬜ Deploy to GitHub Pages

---

## 📖 Documentation

- `README.md` - Full documentation
- `QUICKSTART.md` - 5-minute tutorial
- `RECIPE_TEMPLATE.html` - Visual guide
- `recipes/recipe-template.json` - Template file

---

**Happy Cooking!** 🍳✨

The new structure makes it super easy to manage your cookbook!
