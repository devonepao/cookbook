# 🚀 Quick Start Guide

Get your cookbook running in 5 minutes!

## Step 1: View the Site Locally

**Important:** You need a local web server to view the cookbook!

**Quick Start:**

Mac/Linux:
```bash
./start.sh
```

Windows:
```bash
start.bat
```

**Or manually:**
```bash
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

**Why?** The cookbook loads recipes from JSON files, which requires a web server due to browser security (CORS). Once deployed to GitHub Pages, this isn't an issue!

2. Browse the pre-loaded sample recipes

## Step 2: Add Your First Recipe

**NEW: Each recipe is now a separate JSON file!**

1. **Copy the template:**
   ```bash
   cp recipes/recipe-template.json recipes/desserts/my-first-recipe.json
   ```

2. **Edit your JSON file** (`recipes/desserts/my-first-recipe.json`):

```json
{
    "id": "my-first-recipe",
    "title": "My Amazing Recipe",
    "category": "desserts",
    "description": "This is my first recipe",
    "prepTime": "10 mins",
    "cookTime": "20 mins",
    "servings": "4",
    "featured": true,
    "images": [
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
    ],
    "ingredients": [
        "1 cup flour",
        "2 eggs",
        "1/2 cup sugar"
    ],
    "instructions": [
        "Mix all ingredients",
        "Bake at 350°F",
        "Serve and enjoy!"
    ]
}
```

3. **Register your recipe** with the auto-updater:

```bash
./update-index.sh
```

This automatically scans and registers your new recipe!

**Or manually** in `scripts/config.js`:
```javascript
recipeFiles: [
    'desserts/chocolate-cake',
    'desserts/my-first-recipe',  // ← Add this line
    'beverages/mango-lassi',
    // ...
]
```

4. **Refresh your browser** - Your recipe appears! ✨

## Step 3: Add Your Own Images

### Using Unsplash (Easy)
- Go to [Unsplash](https://unsplash.com/)
- Search for your recipe
- Copy the image URL
- Use it in the `images` array

### Using Your Own Photos
1. Create folder: `recipes/desserts/my-first-recipe/`
2. Add image: `image1.jpg`
3. Update config: `images: ['recipes/desserts/my-first-recipe/image1.jpg']`

## Step 4: Deploy to GitHub Pages

1. Create a GitHub account if you don't have one

2. In terminal (or Git Bash on Windows):

```bash
cd /path/to/cookbook
git init
git add .
git commit -m "My cookbook"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cookbook.git
git push -u origin main
```

3. Go to repository Settings → Pages → Enable Pages

4. Visit: `https://YOUR_USERNAME.github.io/cookbook/`

## Step 5: Customize

### Change Colors
Edit `styles/main.css`:
```css
:root {
    --apple-blue: #007AFF;  /* Change this */
}
```

### Add Categories
Edit `scripts/config.js`:
```javascript
categories: {
    'salads': {
        name: 'Salads',
        icon: '🥗',
        description: 'Fresh and healthy salads'
    }
}
```

### Add More Recipes
Just copy the recipe template in `config.js` and fill in your details!

## Testing on Mobile

### iOS
1. Deploy to GitHub Pages
2. Open Safari on your iPhone
3. Visit your site
4. Tap Share → Add to Home Screen
5. Enjoy native app experience!

### Android
1. Deploy to GitHub Pages
2. Open Chrome
3. Visit your site
4. Tap menu → Install App

## Troubleshooting

### Images not showing?
- Check the image URL is correct
- Ensure image files are in the right folder
- Verify paths are relative, not absolute

### Recipe not appearing?
- Check for syntax errors in config.js
- Ensure comma after each recipe (except last)
- Refresh browser with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Site not on GitHub Pages?
- Wait 2-3 minutes after enabling
- Check Settings → Pages is set to main branch
- Verify files are committed and pushed

## Next Steps

📖 Read the full [README.md](README.md) for detailed information

🚀 See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment details

👨‍🍳 Check [RECIPE_TEMPLATE.html](RECIPE_TEMPLATE.html) for recipe format

🎨 Browse sample recipes in `scripts/config.js`

## Need Help?

- All recipes are in one file: `scripts/config.js`
- All styles are in one file: `styles/main.css`
- Three HTML pages: `index.html`, `category.html`, `recipe.html`
- No build process, no dependencies, just pure HTML/CSS/JS!

---

Happy Cooking! 🍳✨
