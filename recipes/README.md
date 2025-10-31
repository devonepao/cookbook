# Adding Your Own Recipe Images

This folder is organized by recipe categories. To add images for your recipes:

## Folder Structure

```
recipes/
├── desserts/
│   ├── chocolate-cake/
│   │   ├── image1.jpg
│   │   └── image2.jpg
│   └── vanilla-ice-cream/
│       └── image1.jpg
├── beverages/
├── gravy/
├── rice/
├── breads/
└── sauces/
```

## Steps to Add Images

1. Create a folder with your recipe ID (same as in config.js)
2. Add one or more images to that folder
3. Update the recipe in `scripts/config.js` with image paths:

```javascript
images: [
    'recipes/desserts/chocolate-cake/image1.jpg',
    'recipes/desserts/chocolate-cake/image2.jpg'
]
```

## Image Guidelines

- **Format**: JPG or PNG
- **Size**: 1200x900px recommended (4:3 ratio)
- **File Size**: Compress to ~200KB for fast loading
- **Quality**: High quality, well-lit food photography
- **Naming**: Use descriptive names (image1.jpg, image2.jpg, etc.)

## Free Image Resources

If you don't have your own photos, use these royalty-free sources:
- [Unsplash](https://unsplash.com/s/photos/food)
- [Pexels](https://www.pexels.com/search/food/)
- [Pixabay](https://pixabay.com/images/search/food/)

## Image Optimization Tools

- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Image compression and conversion
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization

## Example

For a recipe with ID `chocolate-cake`:

1. Create folder: `recipes/desserts/chocolate-cake/`
2. Add images: `image1.jpg`, `image2.jpg`
3. Update config.js:
```javascript
'chocolate-cake': {
    // ... other properties
    images: [
        'recipes/desserts/chocolate-cake/image1.jpg',
        'recipes/desserts/chocolate-cake/image2.jpg'
    ]
}
```
