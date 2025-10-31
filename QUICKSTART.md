# 🚀 5-Minute Quickstart

Get your cookbook up and running in 5 minutes!

---

## Option 1: Deploy to GitHub Pages (Recommended - 3 minutes)

### Step 1: Push to GitHub

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/cookbook.git
cd cookbook

# Push to main
git add .
git commit -m "Initial setup"
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: Select **GitHub Actions**
4. Save

### Step 3: Wait for Deployment

- Check **Actions** tab for build progress
- Site live at: `https://YOUR_USERNAME.github.io/cookbook/`
- **Total time: ~3 minutes!**

---

## Option 2: Local Development (1 minute)

### Quick Start:

**Mac/Linux:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

**Manual:**
```bash
python3 -m http.server 8000
# Visit: http://localhost:8000
```

---

## Add Your First Recipe (2 minutes)

### Step 1: Create Recipe File

```bash
cp recipes/recipe-template.json recipes/desserts/my-first-recipe.json
```

### Step 2: Edit Recipe

```json
{
  "id": "my-first-recipe",
  "title": "My First Recipe",
  "category": "desserts",
  "description": "A delicious dessert",
  "prepTime": "10 mins",
  "cookTime": "20 mins",
  "servings": "4",
  "featured": true,
  "images": [
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800"
  ],
  "ingredients": [
    "1 cup flour",
    "2 eggs",
    "1 cup milk"
  ],
  "instructions": [
    "Preheat oven to 350°F",
    "Mix ingredients",
    "Bake for 20 minutes"
  ]
}
```

### Step 3: Deploy

```bash
git add recipes/desserts/my-first-recipe.json
git commit -m "Add my first recipe"
git push
```

**Done!** Your recipe is live in 40 seconds! 🎉

**Note:** Index updates automatically - no manual steps needed!

---

## Test Search

1. Open your cookbook
2. Type "chocolate" in search box
3. See filtered results instantly
4. Click X or press ESC to clear

---

## Next Steps

- ✅ Add more recipes
- ✅ Customize categories (edit `scripts/config.js`)
- ✅ Add your own images
- ✅ Share your cookbook URL!

---

## Need Help?

- **Documentation**: See [README.md](README.md)
- **Automation**: See [AGENTS.md](AGENTS.md)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Troubleshooting**: Check GitHub Actions logs

---

**Happy Cooking!** 🍳
