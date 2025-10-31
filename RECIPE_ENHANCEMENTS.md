# 📹 Recipe Enhancements: Videos & References

## Overview

Each recipe now supports **video tutorials** and **reference links** to provide comprehensive cooking guidance and additional resources.

---

## 🎥 Video Embeds

### Supported Platforms

1. **YouTube** - Full video embeds
2. **Instagram** - Post embeds (Reels, Videos, Photos)

### YouTube Videos

Add YouTube videos to your recipe:

```json
"videos": [
    {
        "type": "youtube",
        "id": "VIDEO_ID_HERE",
        "title": "How to Make This Recipe"
    }
]
```

**How to get YouTube Video ID:**
- From URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

**Features:**
- ✅ Full video player embed
- ✅ Responsive 16:9 aspect ratio
- ✅ Lazy loading for performance
- ✅ Native YouTube controls
- ✅ Fullscreen support

### Instagram Videos

Add Instagram posts to your recipe:

```json
"videos": [
    {
        "type": "instagram",
        "url": "https://www.instagram.com/p/POST_ID/",
        "title": "Quick Recipe Demo"
    }
]
```

**How to get Instagram URL:**
- Open post in browser
- Copy full URL (e.g., `https://www.instagram.com/p/CXyZ123AbCd/`)

**Features:**
- ✅ Native Instagram embed
- ✅ Preserves likes, comments
- ✅ Responsive layout
- ✅ Auto-loads Instagram script

### Multiple Videos

You can add multiple videos per recipe:

```json
"videos": [
    {
        "type": "youtube",
        "id": "VIDEO_1",
        "title": "Full Recipe Tutorial"
    },
    {
        "type": "youtube",
        "id": "VIDEO_2",
        "title": "Quick Tips"
    },
    {
        "type": "instagram",
        "url": "https://www.instagram.com/p/POST_ID/",
        "title": "60-Second Version"
    }
]
```

---

## 🔗 Reference Links

### Purpose

Reference links provide:
- Recipe sources and inspirations
- Technique guides
- Ingredient information
- Cultural background
- Scientific explanations

### Format

```json
"references": [
    {
        "title": "Recipe Source or Inspiration",
        "url": "https://example.com/recipe-source"
    },
    {
        "title": "Cooking Technique Guide",
        "url": "https://example.com/technique-guide"
    }
]
```

### Best Practices

**Good Reference Titles:**
- ✅ "The Science of Chocolate Baking"
- ✅ "Traditional Lassi Recipe Guide"
- ✅ "History of Butter Chicken"
- ✅ "Best Cocoa Powder for Baking"

**Avoid:**
- ❌ "Click here"
- ❌ "Link"
- ❌ URLs as titles

### Multiple References

Add as many references as needed:

```json
"references": [
    {
        "title": "Original Recipe Source",
        "url": "https://example.com/original"
    },
    {
        "title": "Ingredient Guide",
        "url": "https://example.com/ingredients"
    },
    {
        "title": "Cooking Techniques",
        "url": "https://example.com/techniques"
    },
    {
        "title": "Cultural History",
        "url": "https://example.com/history"
    }
]
```

---

## 📋 Complete Recipe Example

Here's a complete recipe with all features:

```json
{
    "id": "chocolate-cake",
    "title": "Rich Chocolate Cake",
    "category": "desserts",
    "description": "A moist and decadent chocolate cake",
    "prepTime": "20 mins",
    "cookTime": "35 mins",
    "servings": "8",
    "featured": true,
    "images": [
        "https://images.unsplash.com/photo-1578985545062.jpg"
    ],
    "ingredients": [
        "2 cups all-purpose flour",
        "2 cups sugar",
        "3/4 cup cocoa powder"
    ],
    "instructions": [
        "Preheat oven to 350°F",
        "Mix dry ingredients",
        "Add wet ingredients and mix"
    ],
    "notes": "The coffee enhances chocolate flavor",
    "references": [
        {
            "title": "The Science of Chocolate Baking",
            "url": "https://www.seriouseats.com/chocolate-cake"
        },
        {
            "title": "Best Cocoa Powder Guide",
            "url": "https://www.kingarthurbaking.com/cocoa"
        }
    ],
    "videos": [
        {
            "type": "youtube",
            "id": "dQw4w9WgXcQ",
            "title": "How to Make Perfect Chocolate Cake"
        },
        {
            "type": "instagram",
            "url": "https://www.instagram.com/p/ABC123/",
            "title": "Quick Chocolate Cake Demo"
        }
    ]
}
```

---

## 🎨 Visual Design

### Videos Section

The videos section features:
- **Glass-morphism card** design
- **Video title** at the top
- **16:9 responsive embed** for YouTube
- **Auto-height** for Instagram
- **Grid layout** (stacked on mobile)

### References Section

The references section features:
- **Link icon** with blue background
- **Title** in bold
- **Domain name** shown below
- **Arrow indicator** on the right
- **Hover effect** - slides right
- **Active state** - scales down
- **Touch-friendly** tap targets

---

## 📱 Mobile Optimization

### Videos
- ✅ Responsive sizing
- ✅ Touch controls
- ✅ Lazy loading
- ✅ Reduced padding on small screens

### References
- ✅ Full-width tap targets
- ✅ Readable font sizes
- ✅ Proper spacing
- ✅ External link indicator

---

## 🔧 Technical Implementation

### HTML Structure

Videos and references are added to `recipe.html`:

```html
<!-- Videos Section -->
<section class="recipe-section" id="videosSection">
    <h2 class="section-title">Video Tutorials</h2>
    <div class="videos-grid" id="videosGrid">
        <!-- Loaded dynamically -->
    </div>
</section>

<!-- References Section -->
<section class="recipe-section" id="referencesSection">
    <h2 class="section-title">References & Links</h2>
    <div class="references-list" id="referencesList">
        <!-- Loaded dynamically -->
    </div>
</section>
```

### JavaScript Functions

**Video Loading:**
```javascript
function loadVideos(videos) {
    // Creates YouTube iframes
    // Loads Instagram embeds
    // Injects Instagram script if needed
}
```

**Reference Loading:**
```javascript
function loadReferences(references) {
    // Creates clickable link cards
    // Formats URLs to show domain
    // Adds external link icons
}
```

---

## ✅ Validation

The validation script checks:

### Videos
- ✅ `videos` is an array (if present)
- ✅ Each video has a `type` field
- ✅ YouTube videos have an `id` field
- ✅ Instagram videos have a `url` field
- ✅ Optional `title` field

### References
- ✅ `references` is an array (if present)
- ✅ Each reference has `title` and `url`
- ✅ URLs are properly formatted

**Run validation:**
```bash
python3 scripts/validate-recipes.py
```

---

## 🎯 Best Practices

### Videos

**Do:**
- ✅ Add 1-3 videos max (avoid overwhelming)
- ✅ Mix formats (full tutorial + quick tip)
- ✅ Use descriptive titles
- ✅ Test embeds before committing

**Don't:**
- ❌ Add too many videos (performance)
- ❌ Use private/unlisted videos
- ❌ Forget to test on mobile

### References

**Do:**
- ✅ Link to authoritative sources
- ✅ Include technique guides
- ✅ Add cultural context
- ✅ Link to ingredient information

**Don't:**
- ❌ Link to broken pages
- ❌ Use affiliate links
- ❌ Add duplicate references
- ❌ Link to paywalled content

---

## 📊 Performance

### Optimization

**Videos:**
- Lazy loading enabled
- Embeds load on scroll
- Instagram script loads once
- YouTube uses native player

**References:**
- Simple HTML links
- No external dependencies
- Fast rendering
- Minimal CSS

### Impact

- **Load time:** +0.5s with videos
- **Bundle size:** No change (external embeds)
- **Mobile data:** Videos load on demand

---

## 🚀 Adding to Your Recipe

### Step 1: Find Your Resources

**YouTube:**
1. Find recipe video
2. Copy video ID from URL
3. Add to recipe JSON

**Instagram:**
1. Find post URL
2. Copy full URL
3. Add to recipe JSON

**References:**
1. Find helpful articles
2. Copy URLs
3. Choose descriptive titles

### Step 2: Update Recipe JSON

Add to your recipe file:

```json
{
    "id": "your-recipe",
    "title": "Your Recipe",
    // ... other fields ...
    "references": [
        {
            "title": "Helpful Guide",
            "url": "https://example.com/guide"
        }
    ],
    "videos": [
        {
            "type": "youtube",
            "id": "VIDEO_ID",
            "title": "Tutorial Video"
        }
    ]
}
```

### Step 3: Validate

```bash
python3 scripts/validate-recipes.py
```

### Step 4: Test Locally

```bash
./start.sh
# Visit recipe page
# Check videos load
# Test reference links
```

### Step 5: Deploy

```bash
git add recipes/category/your-recipe.json
git commit -m "Add videos and references to recipe"
git push
```

---

## 🎓 Examples from Cookbook

### Chocolate Cake
- YouTube tutorial
- Science of baking reference
- Cocoa powder guide

### Butter Chicken
- YouTube cooking demo
- History of the dish
- Curry techniques guide

### Mango Lassi
- YouTube recipe video
- Traditional lassi guide
- Health benefits reference

---

## 🔍 Troubleshooting

### Videos Not Loading

**Issue:** YouTube video not appearing

**Solution:**
- Check video ID is correct
- Ensure video is public
- Verify JSON syntax

**Issue:** Instagram post not embedding

**Solution:**
- Check URL format
- Ensure post is public
- Wait for Instagram script to load

### References Not Clickable

**Issue:** Links not working

**Solution:**
- Check URL format (include `https://`)
- Verify JSON structure
- Clear browser cache

---

## 📚 Related Documentation

- [QUICKSTART.md](QUICKSTART.md) - Getting started
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [README.md](README.md) - Full documentation
- [Recipe Template](recipes/recipe-template.json) - JSON template

---

## 🎉 Summary

**Videos & References Provide:**
- ✅ Visual learning (videos)
- ✅ Additional context (references)
- ✅ Better user experience
- ✅ Comprehensive guidance
- ✅ Multiple learning formats
- ✅ Authoritative sources

**Supported:**
- 🎥 YouTube embeds
- 📸 Instagram embeds
- 🔗 External reference links
- 📱 Mobile-optimized
- 🚀 Performance-optimized
- ✅ Fully validated

**Make your recipes more comprehensive and engaging!** 📹🔗

---

*Last updated: 2024*
