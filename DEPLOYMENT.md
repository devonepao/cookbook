# Deploying to GitHub Pages

This guide will help you deploy your cookbook to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your cookbook ready with recipes

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `cookbook` (or any name you prefer)
4. Make it public
5. Don't initialize with README (you already have one)
6. Click "Create repository"

### 2. Push Your Code to GitHub

Open terminal in your cookbook directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Apple Design System Cookbook"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cookbook.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Leave folder as "/ (root)"
6. Click "Save"

### 4. Wait for Deployment

- GitHub will take 1-2 minutes to deploy
- Your site will be available at: `https://YOUR_USERNAME.github.io/cookbook/`
- You'll see a green success message with your URL

## Updating Your Site

After making changes to recipes or adding new ones:

```bash
# Add changes
git add .

# Commit with a message
git commit -m "Added new recipes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your changes within a few minutes.

## Custom Domain (Optional)

To use your own domain:

1. Buy a domain from any registrar
2. In GitHub Pages settings, add your custom domain
3. Configure DNS settings with your registrar:
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record pointing to `YOUR_USERNAME.github.io`
4. Enable HTTPS in GitHub Pages settings

## Testing Locally

Before pushing, test locally:

1. Simply open `index.html` in your browser
2. Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx serve

# Then visit http://localhost:8000
```

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling Pages
- Check that you selected the correct branch
- Ensure `index.html` is in the root directory

### Images not showing?
- Check image paths are relative (not absolute)
- Verify images are committed to git
- Check file names match exactly (case-sensitive)

### 404 on recipe pages?
- GitHub Pages works with these HTML files
- Make sure all HTML files are in the root directory

## Performance Tips

1. **Optimize Images**: Compress before uploading
2. **Use CDN for external images**: Unsplash URLs work great
3. **Enable HTTPS**: Automatic with GitHub Pages
4. **Add favicon**: Create `favicon.ico` in root

## SEO Optimization

Add to `index.html` `<head>`:

```html
<meta name="description" content="Beautiful cookbook with delicious recipes">
<meta name="keywords" content="recipes, cooking, food, cookbook">
<meta property="og:title" content="My Cookbook">
<meta property="og:description" content="Delicious recipes, beautifully crafted">
<meta property="og:image" content="https://your-site.com/preview-image.jpg">
```

## Adding Google Analytics (Optional)

1. Get Google Analytics tracking ID
2. Add to all HTML files before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- Open an issue on GitHub if you encounter problems

---

Happy Cooking! 🍳
