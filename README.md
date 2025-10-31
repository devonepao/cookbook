# 🍳 Cookbook - Apple Design System

A beautiful, mobile-first static cookbook website following Apple's Human Interface Guidelines. Perfect for hosting on GitHub Pages.

## ✨ Features

- **Apple Design System**: Clean, minimalist design following Apple's Human Interface Guidelines
- **San Francisco Font**: Native system fonts for optimal readability
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Mobile-First**: Touch-optimized with haptic feedback
- **Responsive**: Works beautifully on all devices
- **Static & Fast**: Pure HTML/CSS/JS - no build process needed
- **Easy to Extend**: Simple configuration for adding recipes and categories

## 🎨 Design Principles

- **Minimalism**: Clean, uncluttered interface
- **White Space**: Generous padding and breathing room
- **Safe Areas**: Respects iOS notch and home indicator regions
- **Touch Priority**: Optimized for touch interactions
- **Horizontal Support**: Works great in landscape mode

## 📁 Project Structure

```
cookbook/
├── index.html              # Home page
├── category.html           # Category listing page
├── recipe.html             # Individual recipe page
├── styles/
│   └── main.css           # All styles (Apple Design System)
├── scripts/
│   ├── config.js          # Recipe configuration
│   ├── main.js            # Home page logic
│   ├── category.js        # Category page logic
│   └── recipe.js          # Recipe page logic
└── recipes/               # Organized by category
    ├── desserts/
    ├── beverages/
    ├── gravy/
    ├── rice/
    ├── breads/
    └── sauces/
```

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone <your-repo-url>
cd cookbook
```

### 2. Start Local Server

**Important:** This cookbook uses JSON files that require a web server to load properly.

**Option 1: Use the start script (Easiest)**

On Mac/Linux:
```bash
./start.sh
```

On Windows:
```bash
start.bat
```

**Option 2: Manual start**

```bash
# Python 3
python3 -m http.server 8000

# Then open: http://localhost:8000
```

**Option 3: Use any web server**

```bash
# Node.js
npx serve

# PHP
php -S localhost:8000
```

**Note:** Do NOT open `index.html` directly (file:// protocol won't work). You must use a web server!

### 3. Deploy to GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select main branch
4. Your site will be live at `https://yourusername.github.io/cookbook`

Once deployed to GitHub Pages, it works perfectly without a local server!

# 📝 Adding New Recipes

Each recipe is now stored in its own JSON file for easy management!

## Quick Start

### Step 1: Create Your Recipe File

1. Copy the template: `recipes/recipe-template.json`
2. Save it in the appropriate category folder:
   - `recipes/desserts/your-recipe-id.json`
   - `recipes/beverages/your-recipe-id.json`
   - `recipes/gravy/your-recipe-id.json`
   - `recipes/rice/your-recipe-id.json`
   - `recipes/breads/your-recipe-id.json`
   - `recipes/sauces/your-recipe-id.json`

### Step 2: Fill in Your Recipe Details

Edit your JSON file:

```json
{
    "id": "chocolate-chip-cookies",
    "title": "Chocolate Chip Cookies",
    "category": "desserts",
    "description": "Classic chewy chocolate chip cookies",
    "prepTime": "15 mins",
    "cookTime": "12 mins",
    "servings": "24 cookies",
    "featured": false,
    "images": [
        "recipes/desserts/chocolate-chip-cookies/image1.jpg"
    ],
    "ingredients": [
        "2 1/4 cups all-purpose flour",
        "1 cup butter, softened",
        "3/4 cup sugar",
        "2 eggs",
        "2 cups chocolate chips"
    ],
    "instructions": [
        "Preheat oven to 375°F",
        "Mix butter and sugars until creamy",
        "Beat in eggs",
        "Gradually blend in flour",
        "Stir in chocolate chips",
        "Drop by rounded tablespoon onto baking sheets",
        "Bake 9-11 minutes"
    ],
    "notes": "Store in airtight container for up to a week"
}
```

### Step 3: Register Your Recipe

Open `scripts/config.js` and add your recipe to the `recipeFiles` array:

```javascript
recipeFiles: [
    'desserts/chocolate-cake',
    'desserts/vanilla-ice-cream',
    'desserts/chocolate-chip-cookies',  // ← Add your recipe here
    'beverages/mango-lassi',
    // ... other recipes
]
```

### Step 4: Add Images (Optional)

1. Create folder: `recipes/desserts/chocolate-chip-cookies/`
2. Add images: `image1.jpg`, `image2.jpg`
3. Update the `images` array in your JSON file

### Step 5: Test!

Open `index.html` in your browser and your recipe should appear!

---

## Recipe File Format

### Required Fields

- **id**: Unique identifier (lowercase, use hyphens)
- **title**: Recipe name
- **category**: One of: desserts, beverages, gravy, rice, breads, sauces
- **description**: Short description (1-2 sentences)
- **prepTime**: Preparation time
- **cookTime**: Cooking time
- **servings**: Number of servings
- **ingredients**: Array of ingredient strings
- **instructions**: Array of step-by-step instructions

### Optional Fields

- **featured**: Set to `true` to show on home page (default: false)
- **images**: Array of image URLs or paths
- **notes**: Cooking tips, storage instructions, etc.

---

## Image Guidelines

### Using External Images (Easy)
Use Unsplash or other CDN:
```json
"images": [
    "https://images.unsplash.com/photo-xxxxx?w=800&q=80"
]
```

### Using Local Images
1. Create folder: `recipes/[category]/[recipe-id]/`
2. Add images: `image1.jpg`, `image2.jpg`
3. Reference in JSON:
```json
"images": [
    "recipes/desserts/my-recipe/image1.jpg",
    "recipes/desserts/my-recipe/image2.jpg"
]
```

---

## Tips

✅ **Use descriptive IDs**: `chocolate-chip-cookies` not `recipe1`
✅ **Write clear steps**: One action per instruction
✅ **Include measurements**: Always specify amounts
✅ **Test your JSON**: Use a JSON validator if unsure
✅ **Optimize images**: Compress to ~200KB for fast loading

❌ **Don't forget commas**: JSON requires commas between array items
❌ **Don't use trailing commas**: No comma after last item
❌ **Don't forget quotes**: All strings need quotes

---

## Troubleshooting

**Recipe not showing?**
- Check JSON syntax (use jsonlint.com)
- Verify file is in correct category folder
- Ensure recipe is added to `config.js` recipeFiles array
- Check browser console for errors

**Images not loading?**
- Verify image paths are correct
- Check image files exist in specified location
- Ensure images are web-optimized (JPG/PNG)

---

## Example: Complete Recipe File

See `recipes/desserts/chocolate-cake.json` for a complete example!

---

Happy Cooking! 🍳

## 🗂️ Adding New Categories

1. Add category in `scripts/config.js`:

```javascript
categories: {
    'category-id': {
        name: 'Category Name',
        icon: '🍕', // Emoji icon
        description: 'Category description'
    }
}
```

2. Add recipes with `category: 'category-id'`

## 🖼️ Image Guidelines

### Recommended Image Sizes:
- **Recipe Cards**: 800x600px (4:3 ratio)
- **Recipe Gallery**: 1200x900px minimum
- **Thumbnails**: Auto-generated from images

### Image Sources:
- Use your own photos
- Use royalty-free from Unsplash, Pexels
- Optimize images for web (compress to ~200KB)

### Image Storage:
Store images in organized folders:
```
recipes/
  desserts/
    chocolate-cake/
      image1.jpg
      image2.jpg
  beverages/
    mango-lassi/
      image1.jpg
```

Update paths in config:
```javascript
images: [
    'recipes/desserts/chocolate-cake/image1.jpg',
    'recipes/desserts/chocolate-cake/image2.jpg'
]
```

## 🎯 Features in Detail

### Search
- Real-time search across recipes
- Searches title, description, and ingredients
- Debounced for performance

### Categories
- Visual category cards with icons
- Recipe counts
- Easy navigation

### Recipe Pages
- Image gallery with thumbnails
- Interactive ingredient checklist
- Step-by-step instructions
- Cooking metadata (time, servings)
- Optional notes section

### Touch Optimization
- Large touch targets
- Haptic feedback (visual)
- Smooth transitions
- Pull-to-refresh friendly

## 🔧 Customization

### Colors
Edit CSS variables in `styles/main.css`:
```css
:root {
    --apple-blue: #007AFF;
    --apple-gray: #8E8E93;
    /* ... */
}
```

### Fonts
Currently uses Apple system fonts. To change:
```css
body {
    font-family: 'Your Font', -apple-system, sans-serif;
}
```

## 📱 Mobile App Feel

The site includes:
- `viewport-fit=cover` for edge-to-edge display
- Safe area insets for notches
- Apple web app meta tags
- Status bar styling
- Home screen icon support (add icon files)

## 🌐 Browser Support

- Safari (iOS/macOS)
- Chrome (Android/Desktop)
- Firefox
- Edge

## 📄 License

MIT License - feel free to use for personal or commercial projects!

## 🤝 Contributing

1. Fork the repository
2. Add your recipes or improvements
3. Submit a pull request

## 💡 Tips

- Keep recipe images consistent in size and style
- Use high-quality photos for better presentation
- Test on mobile devices for best experience
- Compress images before adding
- Use semantic versioning for updates

## 🎓 Learning Resources

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [SF Symbols](https://developer.apple.com/sf-symbols/)
- [iOS Design Themes](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)

---

Made with ❤️ following Apple's Design Philosophy
