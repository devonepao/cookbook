# 🚀 Quick Reference - Adding Recipes

## 3-Step Process

### 1️⃣ Create JSON File
```bash
cp recipes/recipe-template.json recipes/desserts/my-recipe.json
```

### 2️⃣ Edit Recipe
```json
{
    "id": "my-recipe",
    "title": "My Recipe",
    "category": "desserts",
    "description": "Delicious!",
    "prepTime": "10 mins",
    "cookTime": "20 mins",
    "servings": "4",
    "featured": false,
    "images": ["URL"],
    "ingredients": ["list"],
    "instructions": ["steps"]
}
```

### 3️⃣ Register in config.js
```javascript
recipeFiles: [
    'desserts/my-recipe',  ← Add this
    // ... other recipes
]
```

**Done!** Refresh browser to see your recipe! ✨

---

## Categories

- `desserts` 🍰
- `beverages` 🥤
- `gravy` 🍛
- `rice` 🍚
- `breads` 🥖
- `sauces` 🥫

---

## Required Fields

```json
{
    "id": "...",
    "title": "...",
    "category": "...",
    "description": "...",
    "prepTime": "...",
    "cookTime": "...",
    "servings": "...",
    "ingredients": [...],
    "instructions": [...]
}
```

## Optional Fields

```json
{
    "featured": true,
    "images": [...],
    "notes": "..."
}
```

---

## Common Errors

❌ Trailing comma: `"title": "Test",}`  
✅ No trailing comma: `"title": "Test"}`

❌ Unquoted keys: `{title: "Test"}`  
✅ Quoted keys: `{"title": "Test"}`

---

## Validation

Use [JSONLint](https://jsonlint.com/)

---

## File Locations

- Recipes: `recipes/[category]/[id].json`
- Template: `recipes/recipe-template.json`
- Registry: `scripts/config.js`

---

## Help

- NEW_STRUCTURE.md - Complete guide
- QUICKSTART.md - Tutorial
- RECIPE_TEMPLATE.html - Visual guide

**Happy Cooking! 🍳**
