# 🚀 CI/CD with GitHub Actions

## Overview

This cookbook now uses **GitHub Actions** for automated builds and deployments. Every time you push to the `main` branch, the site is automatically built and deployed to GitHub Pages.

---

## 🔄 Automated Workflow

### What Happens on Every Push:

1. **Validate** - All recipe JSON files are validated
2. **Update Index** - Recipe index is automatically updated
3. **Build** - Static site is built to `dist/` folder
4. **Deploy** - Site is deployed to GitHub Pages

**You never need to manually update the index or build the site!**

---

## 📋 GitHub Actions Workflow

The workflow file: `.github/workflows/deploy.yml`

### Triggers:
- ✅ Push to `main` branch
- ✅ Pull requests to `main`
- ✅ Manual trigger (workflow_dispatch)

### Steps:

```yaml
1. Checkout code
2. Setup Python 3.11
3. Validate all recipes
4. Auto-update recipe index
5. Build static site
6. Deploy to GitHub Pages
```

---

## 🎯 Setup GitHub Pages

### First Time Setup:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit with CI/CD"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Build and deployment"
   - Source: **GitHub Actions** (not branch)
   - Save

3. **Wait for deployment:**
   - GitHub Actions will run automatically
   - Check the "Actions" tab to see progress
   - Site will be live at: `https://yourusername.github.io/cookbook`

---

## 🔧 Local Development

### Testing Locally Before Push:

**Build locally:**
```bash
# Mac/Linux
./build.sh

# Windows
build.bat
```

**Test the build:**
```bash
cd dist
python3 -m http.server 8000
# Visit: http://localhost:8000
```

**Development without build:**
```bash
# Just test the source files
./start.sh
```

---

## 📝 Adding Recipes (Automated Flow)

### Simple Workflow:

1. **Create recipe file:**
   ```bash
   cp recipes/recipe-template.json recipes/desserts/my-recipe.json
   vim recipes/desserts/my-recipe.json
   ```

2. **Commit and push:**
   ```bash
   git add recipes/desserts/my-recipe.json
   git commit -m "Add my-recipe"
   git push
   ```

3. **That's it!** GitHub Actions will:
   - Validate your recipe
   - Update the index automatically
   - Build the site
   - Deploy to GitHub Pages

**No manual index update needed!**

---

## 🔍 Validation

### Automatic Validation Checks:

The CI/CD pipeline validates:
- ✅ JSON syntax is valid
- ✅ Required fields present (id, title, category, etc.)
- ✅ Recipe ID matches filename
- ✅ Category matches folder
- ✅ Ingredients list not empty
- ✅ Instructions list not empty

### If Validation Fails:

1. Check the Actions tab in GitHub
2. Click on the failed workflow run
3. Read the error messages
4. Fix the issues locally
5. Push again

---

## 📦 Build Output

### What Gets Built:

```
dist/
├── index.html
├── category.html
├── recipe.html
├── styles/
│   └── main.css
├── scripts/
│   ├── config.js      ← Auto-updated!
│   ├── main.js
│   ├── category.js
│   └── recipe.js
├── recipes/
│   ├── desserts/
│   ├── beverages/
│   └── ...
├── manifest.json
├── .nojekyll
├── README.md
└── build-info.json
```

### What Gets Excluded:

- ❌ Python build scripts
- ❌ Development tools
- ❌ Build scripts
- ❌ GitHub Actions configs
- ❌ Documentation (except README)

---

## 🎛️ Configuration

### Modify Build Process:

Edit `.github/workflows/deploy.yml` to:
- Change Python version
- Add additional build steps
- Modify deployment settings
- Add tests or linters

### Modify Build Script:

Edit `scripts/build.py` to:
- Change output directory
- Add file processing
- Optimize assets
- Generate additional files

---

## 🔒 Permissions

The workflow needs these permissions:
- `contents: read` - Read repository files
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Authentication

These are set in the workflow file.

---

## 📊 Monitoring

### View Build Status:

1. **Actions Tab:**
   - See all workflow runs
   - View logs and errors
   - Re-run failed builds

2. **Status Badge:**
   Add to README.md:
   ```markdown
   ![Deploy](https://github.com/yourusername/cookbook/actions/workflows/deploy.yml/badge.svg)
   ```

3. **GitHub Pages Settings:**
   - See deployment status
   - View site URL
   - Check deployment history

---

## 🐛 Troubleshooting

### Build Failing?

**Check validation errors:**
```bash
# Run locally to see errors
python3 scripts/validate-recipes.py
```

**Check index update:**
```bash
# Run locally
python3 scripts/update-index.py
```

**Test full build:**
```bash
# Run complete build
./build.sh
```

### Common Issues:

1. **Invalid JSON:**
   - Use [JSONLint](https://jsonlint.com/)
   - Check for trailing commas
   - Verify quotes

2. **Missing fields:**
   - Check recipe template
   - Ensure all required fields

3. **Wrong category:**
   - Verify folder matches category field
   - Check spelling

4. **Deployment fails:**
   - Check GitHub Pages is enabled
   - Verify permissions
   - Check Actions logs

---

## 🔄 Manual Deployment

### Trigger Manual Build:

1. Go to Actions tab
2. Select "Build and Deploy Cookbook"
3. Click "Run workflow"
4. Select branch: `main`
5. Click "Run workflow"

---

## 🎯 Best Practices

### For Development:

1. **Test locally first:**
   ```bash
   ./build.sh
   cd dist && python3 -m http.server 8000
   ```

2. **Validate before commit:**
   ```bash
   python3 scripts/validate-recipes.py
   ```

3. **Use descriptive commits:**
   ```bash
   git commit -m "Add chocolate chip cookie recipe"
   ```

### For Production:

1. **Always push to main** - Triggers deployment
2. **Check Actions tab** - Verify builds succeed
3. **Test deployed site** - Visit GitHub Pages URL
4. **Monitor build times** - Should be < 2 minutes

---

## 📈 Workflow Optimization

### Current Build Time:

- Validation: ~5 seconds
- Index Update: ~2 seconds
- Build: ~3 seconds
- Deploy: ~30 seconds
- **Total: ~40 seconds**

### Tips to Speed Up:

- Keep recipes < 100KB
- Optimize images
- Use CDN for large assets
- Cache dependencies (if added)

---

## 🔐 Security

### Protected Branches (Optional):

1. Go to Settings → Branches
2. Add branch protection rule for `main`
3. Require status checks
4. Require pull request reviews

### Secrets (If Needed):

If you add external services:
1. Go to Settings → Secrets
2. Add repository secrets
3. Reference in workflow: `${{ secrets.SECRET_NAME }}`

---

## 📝 Workflow File Explained

```yaml
name: Build and Deploy Cookbook

# When to run
on:
  push:
    branches: [ main ]        # On push to main
  pull_request:
    branches: [ main ]        # On PRs to main
  workflow_dispatch:          # Manual trigger

# Permissions for GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Jobs
jobs:
  build:                      # Build job
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Python
      - Validate recipes
      - Update index
      - Build site
      - Upload artifact
  
  deploy:                     # Deploy job
    needs: build              # Run after build
    runs-on: ubuntu-latest
    steps:
      - Deploy to Pages
```

---

## 🎉 Summary

### What You Get:

- ✅ **Automated builds** on every push
- ✅ **Auto-updated index** (never manual!)
- ✅ **Validated recipes** before deployment
- ✅ **Fast deployment** (~40 seconds)
- ✅ **Free hosting** on GitHub Pages
- ✅ **HTTPS included** automatically
- ✅ **Global CDN** for fast loading

### What You Do:

1. Add recipe JSON file
2. Push to GitHub
3. Wait 40 seconds
4. Recipe is live!

**That's it!** 🎉

---

## 📚 Related Documentation

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

---

**Automated, validated, and deployed!** 🚀
