# 🍳 Cookbook - Apple Design System

A beautiful, mobile-first static cookbook website with automated CI/CD, following Apple's Human Interface Guidelines.

[![Deploy](https://github.com/yourusername/cookbook/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/cookbook/actions/workflows/deploy.yml)

---

## ✨ Features

- **🤖 Fully Automated** - CI/CD with GitHub Actions (validate → build → deploy)
- **🎨 Apple Design** - San Francisco fonts, glassmorphism, safe areas
- **📱 Mobile-First** - Touch-optimized, responsive, PWA-ready
- **🔍 Smart Search** - Real-time filtering across recipes
- **📝 JSON-Based** - Each recipe in its own file
- **🚀 Fast Deploy** - Push to GitHub → Live in 40 seconds
- **🎯 Zero Config** - No build tools, no dependencies

---

## 🚀 Quick Start

### 1. Deploy to GitHub Pages (Recommended)

```bash
# Clone and push
git clone https://github.com/YOUR_USERNAME/cookbook.git
cd cookbook
git push -u origin main

# Enable GitHub Pages
# Go to: Settings → Pages → Source: GitHub Actions
```

**That's it!** Your site will be live at `https://YOUR_USERNAME.github.io/cookbook/` in ~1 minute.

### 2. Local Development

```bash
# Quick development (source files)
./start.sh              # Mac/Linux
start.bat               # Windows

# Full build (simulates CI/CD)
./build.sh              # Mac/Linux
build.bat               # Windows
cd dist && python3 -m http.server 8000
```

---

## 📝 Adding Recipes

### Super Simple Workflow:

```bash
# 1. Create recipe from template
cp recipes/recipe-template.json recipes/desserts/my-recipe.json

# 2. Edit your recipe
{
  "id": "my-recipe",
  "title": "My Amazing Recipe",
  "category": "desserts",
  "description": "Delicious dessert",
  "prepTime": "15 mins",
  "cookTime": "30 mins",
  "servings": "4",
  "featured": false,
  "images": ["https://images.unsplash.com/photo-xxxxx?w=800"],
  "ingredients": ["1 cup flour", "2 eggs"],
  "instructions": ["Mix ingredients", "Bake at 350°F"]
}

# 3. Push to GitHub
git add recipes/desserts/my-recipe.json
git commit -m "Add my recipe"
git push

# 4. Done! Live in 40 seconds (index updates automatically!)
```

### Recipe Structure:

**Required Fields:**
- `id` - Unique identifier (matches filename)
- `title` - Recipe name
- `category` - One of: desserts, beverages, gravy, rice, breads, sauces
- `description` - Brief description
- `prepTime`, `cookTime`, `servings` - Metadata
- `ingredients` - Array of ingredients
- `instructions` - Array of steps

**Optional Fields:**
- `featured` - Show on home page (boolean)
- `images` - Array of image URLs
- `notes` - Cooking tips

See `recipes/recipe-template.json` for full template.

---

## 🤖 Automation & CI/CD

### What Happens Automatically:

Every push to `main` triggers:
1. ✅ **Validate** - All recipes checked for errors
2. ✅ **Update Index** - Recipe registry auto-updated
3. ✅ **Build** - Static site built to `dist/`
4. ✅ **Deploy** - Published to GitHub Pages
5. ⏱️ **Total Time**: ~40 seconds

### Build Process:

```bash
# Local build (simulates CI/CD)
./build.sh

# What it does:
# 1. Validates all recipe JSON files
# 2. Auto-updates scripts/config.js
# 3. Builds production site to dist/
# 4. Verifies build integrity
```

### Validation Checks:

- ✅ Valid JSON syntax
- ✅ Required fields present
- ✅ Correct data types
- ✅ ID matches filename
- ✅ Category matches folder
- ✅ Non-empty ingredient/instruction lists

**If validation fails → Build stops, bad recipes don't get deployed!**

See [AGENTS.md](AGENTS.md) for complete automation documentation.

---

## 🔍 Search Functionality

**Features:**
- Real-time filtering as you type
- Searches: title, description, ingredients
- Clear button (X) to reset
- Result count display
- ESC key support
- Mobile-optimized
- Works offline (in built site)

---

## 📁 Project Structure

```
cookbook/
├── index.html                      # Home page
├── category.html                   # Category listing
├── recipe.html                     # Recipe detail page
├── styles/main.css                 # All styles (Apple Design)
├── scripts/
│   ├── config.js                   # Recipe registry (auto-updated!)
│   ├── main.js                     # Home page logic
│   ├── category.js                 # Category page logic
│   ├── recipe.js                   # Recipe page logic
│   ├── validate-recipes.py         # JSON validator
│   ├── update-index.py             # Index updater
│   └── build.py                    # Build script
├── recipes/
│   ├── recipe-template.json        # Copy this for new recipes
│   ├── desserts/*.json             # Dessert recipes
│   ├── beverages/*.json            # Beverage recipes
│   ├── gravy/*.json                # Gravy recipes
│   ├── rice/*.json                 # Rice recipes
│   ├── breads/*.json               # Bread recipes
│   └── sauces/*.json               # Sauce recipes
├── .github/workflows/
│   ├── deploy.yml                  # Main CI/CD workflow
│   └── test.yml                    # PR testing
├── README.md                       # This file
├── QUICKSTART.md                   # 5-minute tutorial
├── CONTRIBUTING.md                 # Contributing guide
└── AGENTS.md                       # AI automation docs
```

---

## 🎨 Design Philosophy

### Apple Human Interface Guidelines:

- **San Francisco Font** - Native Apple typography
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Safe Areas** - Respects iOS notch and home indicator
- **Touch-First** - Large touch targets, haptic feedback
- **Minimalism** - Clean, uncluttered interface
- **White Space** - Generous padding and breathing room
- **Smooth Animations** - Transitions and interactions

### Responsive Breakpoints:

- **Mobile**: 320px+ (primary focus)
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large**: 1440px+

Works perfectly on all devices!

---

## 🛠️ Advanced Usage

### Adding Categories:

Edit `scripts/config.js`:

```javascript
categories: {
  'new-category': {
    name: 'New Category',
    icon: '🍕',
    description: 'Category description'
  }
}
```

Then create folder: `recipes/new-category/`

### Custom Domain:

1. Add `CNAME` file with your domain
2. Configure DNS with your registrar
3. Enable HTTPS in GitHub Pages settings

### Image Guidelines:

**Recommended:**
- Size: 1200x900px (4:3 ratio)
- Format: JPG (compressed to ~200KB)
- CDN: Unsplash, Cloudinary, etc.

**Local Images:**
```
recipes/desserts/chocolate-cake/
  ├── image1.jpg
  └── image2.jpg
```

Update recipe: `"images": ["recipes/desserts/chocolate-cake/image1.jpg"]`

---

## 📊 Performance

- **Load Time**: < 1 second
- **Build Time**: ~40 seconds (CI/CD)
- **Site Size**: ~65 KB (8 recipes)
- **Dependencies**: 0 (pure HTML/CSS/JS)
- **Browser Support**: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+

---

## 🔐 Security

- ✅ No server-side code
- ✅ Static files only
- ✅ Input validation (JSON schema)
- ✅ XSS protection
- ✅ HTTPS by default (GitHub Pages)
- ✅ No cookies, no tracking

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Code of conduct
- Development workflow
- Pull request process
- Testing guidelines

Quick contribution:
```bash
# Fork repo, create branch
git checkout -b feature/new-recipe

# Add recipe
cp recipes/recipe-template.json recipes/desserts/tiramisu.json
# Edit tiramisu.json

# Test locally
./build.sh

# Submit PR
git add .
git commit -m "Add tiramisu recipe"
git push origin feature/new-recipe
```

---

## 📚 Documentation

### Essential Guides:
- **README.md** (this file) - Complete overview
- **QUICKSTART.md** - 5-minute getting started
- **CONTRIBUTING.md** - How to contribute
- **AGENTS.md** - AI automation explained

### Reference:
- `recipes/recipe-template.json` - Recipe template
- `.github/workflows/deploy.yml` - CI/CD config
- `scripts/*.py` - Build scripts (documented inline)

---

## 🐛 Troubleshooting

### Common Issues:

**Recipes not showing?**
```bash
# Check if using web server (not file://)
python3 -m http.server 8000

# Or deploy to GitHub Pages
```

**Build failing?**
```bash
# Validate recipes locally
python3 scripts/validate-recipes.py

# Check error messages in GitHub Actions tab
```

**Search not working?**
- Ensure JavaScript is enabled
- Check browser console (F12)
- Verify config.js is loaded

**Images not loading?**
- Check image URLs are valid
- Verify paths are relative
- Ensure images are committed to git

For more help, see GitHub Issues or Actions logs.

---

## 📈 Scaling

**Current**: 8 sample recipes  
**Tested**: Up to 100 recipes  
**Maximum**: 1000+ recipes (client-side filtering)

**Performance tips:**
- Compress images to ~200KB
- Use CDN for images
- Keep JSON files < 10KB each
- Consider pagination after 500+ recipes

---

## 📄 License

MIT License - Free for personal and commercial use!

---

## 🎉 Quick Commands

```bash
# Development
./start.sh                    # Start dev server
./build.sh                    # Build production site
./update-index.sh             # Update recipe index

# Validation
python3 scripts/validate-recipes.py

# Deployment
git push origin main          # Auto-deploys via GitHub Actions
```

---

## 🌟 Credits

**Built with:**
- Pure HTML5, CSS3, JavaScript (ES6+)
- Apple Human Interface Guidelines
- GitHub Actions for CI/CD
- Love for good food and great design ❤️

---

**Made with 🍳 following Apple's Design Philosophy**

**Start cooking:** [Add your first recipe](#-adding-recipes) | [View demo](https://yourusername.github.io/cookbook)
