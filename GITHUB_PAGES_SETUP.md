# 🚀 Quick Setup Guide - GitHub Actions CI/CD

## One-Time Setup (5 Minutes)

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit with CI/CD"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/cookbook.git

# Push to main
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under "Build and deployment"
5. Source: Select **GitHub Actions** (NOT "Deploy from a branch")
6. Click **Save**

### Step 3: Wait for Deployment

- GitHub Actions will run automatically (check **Actions** tab)
- Wait ~1 minute for build and deployment
- Your site will be live at: `https://YOUR_USERNAME.github.io/cookbook/`

## ✅ That's It!

You're done! From now on:

### Adding New Recipes:

```bash
# 1. Create recipe
cp recipes/recipe-template.json recipes/desserts/my-recipe.json
vim recipes/desserts/my-recipe.json

# 2. Push to GitHub
git add recipes/desserts/my-recipe.json
git commit -m "Add my recipe"
git push

# 3. Done! (Auto-deployed in 40 seconds)
```

**The index updates automatically! No manual steps needed!**

---

## Local Development

### Test Before Pushing:

```bash
# Build locally
./build.sh

# Test the build
cd dist
python3 -m http.server 8000
# Visit: http://localhost:8000
```

### Quick Development:

```bash
# Skip build, just test changes
./start.sh
```

---

## Verification

### Check Build Status:

1. Go to **Actions** tab on GitHub
2. See green checkmark ✅ = Success
3. Click on workflow to see details
4. View deployment URL at bottom

### View Your Site:

- Main URL: `https://YOUR_USERNAME.github.io/cookbook/`
- Check **Settings → Pages** for exact URL

---

## Troubleshooting

### Build Failing?

```bash
# Test locally first
python3 scripts/validate-recipes.py
python3 scripts/update-index.py
./build.sh
```

### Page Not Loading?

1. Wait 1-2 minutes after first push
2. Check GitHub Pages is set to "GitHub Actions"
3. Check Actions tab for errors
4. Hard refresh browser (Cmd+Shift+R)

---

## Features You Get

- ✅ **Auto-build** on every push
- ✅ **Auto-index** update (never manual!)
- ✅ **Recipe validation** before deploy
- ✅ **Fast deployment** (~40 seconds)
- ✅ **Free hosting** on GitHub Pages
- ✅ **HTTPS** included
- ✅ **Global CDN** for speed

---

## Next Steps

1. ✅ Setup complete (you're here!)
2. ⬜ Add your first recipe
3. ⬜ Customize categories
4. ⬜ Share your cookbook URL!

---

**Full documentation:** See [CI_CD_GUIDE.md](CI_CD_GUIDE.md)

**Happy Cooking!** 🍳
