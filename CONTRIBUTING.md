# 🤝 Contributing to Cookbook

Thank you for your interest in contributing! This guide will help you get started.

---

## 🎯 Quick Contribution

### Adding a Recipe (Easiest!)

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/cookbook.git
cd cookbook

# 3. Create a branch
git checkout -b add-recipe-tiramisu

# 4. Add your recipe
cp recipes/recipe-template.json recipes/desserts/tiramisu.json
# Edit tiramisu.json with your recipe

# 5. Test locally
./build.sh

# 6. Commit and push
git add recipes/desserts/tiramisu.json
git commit -m "Add tiramisu recipe"
git push origin add-recipe-tiramisu

# 7. Create Pull Request on GitHub
```

---

## 📋 Contribution Types

### 1. Recipe Contributions

**What we accept:**
- ✅ Original recipes
- ✅ Traditional recipes (with source)
- ✅ Family recipes
- ✅ Recipes with good photos
- ✅ Well-tested recipes

**Requirements:**
- All required fields filled
- Clear, step-by-step instructions
- Accurate measurements
- Tested and verified
- Proper category
- High-quality images (optional but recommended)

### 2. Bug Fixes

- Report bugs via GitHub Issues
- Include steps to reproduce
- Provide screenshots if applicable
- Submit PR with fix

### 3. Feature Enhancements

- Discuss in GitHub Issues first
- Keep changes focused and small
- Follow existing code style
- Add documentation
- Test thoroughly

### 4. Documentation

- Fix typos or unclear sections
- Add examples
- Improve explanations
- Translate to other languages (future)

---

## 🔧 Development Setup

### Prerequisites:

- Git
- Python 3.11+
- Modern web browser
- Text editor

### Setup:

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/cookbook.git
cd cookbook

# Test that everything works
./build.sh

# Start development server
./start.sh
```

---

## 📝 Recipe Guidelines

### File Structure:

```json
{
  "id": "recipe-id",              // Matches filename (kebab-case)
  "title": "Recipe Title",         // Clear, descriptive
  "category": "desserts",          // Valid category
  "description": "Brief description (1-2 sentences)",
  "prepTime": "15 mins",          // Be specific
  "cookTime": "30 mins",          // Actual cooking time
  "servings": "4",                // Number of servings
  "featured": false,              // Only for exceptional recipes
  "images": [                     // High-quality images
    "https://images.unsplash.com/photo-xxxxx?w=800"
  ],
  "ingredients": [                // Precise measurements
    "1 cup all-purpose flour",
    "2 large eggs",
    "1/2 tsp salt"
  ],
  "instructions": [               // Clear, numbered steps
    "Preheat oven to 350°F (175°C)",
    "Mix dry ingredients in a bowl",
    "Add wet ingredients and stir until combined"
  ],
  "notes": "Optional tips"        // Storage, variations, etc.
}
```

### Best Practices:

**DO:**
- ✅ Use clear, concise language
- ✅ Include exact measurements
- ✅ Test your recipe first
- ✅ Add helpful notes
- ✅ Use descriptive titles
- ✅ Compress images (< 200KB)

**DON'T:**
- ❌ Copy recipes without permission
- ❌ Use vague measurements ("a pinch")
- ❌ Skip important steps
- ❌ Add untested recipes
- ❌ Use low-quality images
- ❌ Duplicate existing recipes

---

## 🧪 Testing

### Before Submitting:

```bash
# 1. Validate your recipe
python3 scripts/validate-recipes.py

# 2. Update index (automatic in CI, but test locally)
python3 scripts/update-index.py

# 3. Build the site
./build.sh

# 4. Test in browser
cd dist && python3 -m http.server 8000
```

### What to Test:

- ✅ Recipe displays correctly
- ✅ Images load
- ✅ Search finds your recipe
- ✅ Category listing shows recipe
- ✅ No console errors
- ✅ Mobile view works

---

## 🎨 Code Style

### JavaScript:

```javascript
// Use ES6+ features
const myFunction = async () => {
  // Clear variable names
  const recipeData = await fetchRecipe();
  
  // Comments for complex logic
  // Filter recipes by category
  return recipes.filter(r => r.category === category);
};
```

### Python:

```python
#!/usr/bin/env python3
"""
Module docstring
"""

def function_name():
    """Function docstring"""
    # Follow PEP 8
    # Use meaningful variable names
    # Add type hints when helpful
    pass
```

### JSON:

```json
{
  "useDoubleQuotes": true,
  "indent": 2,
  "noTrailingCommas": true,
  "sortKeys": false
}
```

---

## 🔄 Pull Request Process

### 1. Before Submitting:

- ✅ Test locally with `./build.sh`
- ✅ Validate recipes pass
- ✅ No console errors
- ✅ Follows contribution guidelines
- ✅ One feature/recipe per PR

### 2. PR Description:

Include:
- What changed
- Why it's needed
- How to test
- Screenshots (if applicable)

### 3. After Submission:

- Respond to review comments
- Make requested changes
- Keep PR updated with main branch
- Be patient and respectful

### 4. Approval:

- Automated tests must pass
- At least one maintainer approval
- No merge conflicts
- Follows guidelines

---

## 🐛 Bug Reports

### Good Bug Report Includes:

```markdown
**Description:**
Clear description of the bug

**Steps to Reproduce:**
1. Go to...
2. Click on...
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Screenshots:**
If applicable

**Environment:**
- Browser: Chrome 120
- OS: macOS 14
- Device: iPhone 14

**Additional Context:**
Any other relevant information
```

---

## 💡 Feature Requests

### Before Requesting:

- Check if already requested
- Ensure it fits project scope
- Consider alternatives

### Good Feature Request:

```markdown
**Feature:**
Clear feature name

**Problem:**
What problem does this solve?

**Proposed Solution:**
How should it work?

**Alternatives:**
What other solutions did you consider?

**Additional Context:**
Mockups, examples, etc.
```

---

## 📚 Documentation

### When to Update Docs:

- Adding new features
- Changing existing behavior
- Adding configuration options
- Fixing bugs that affect users

### Documentation Files:

- `README.md` - Main documentation
- `QUICKSTART.md` - Getting started guide
- `CONTRIBUTING.md` - This file
- `AGENTS.md` - Automation documentation
- Inline code comments

---

## 🎓 Learning Resources

### Technologies Used:

- **HTML5/CSS3** - Structure and styling
- **JavaScript ES6+** - Interactivity
- **Python 3** - Build scripts
- **GitHub Actions** - CI/CD
- **JSON** - Data storage

### Helpful Links:

- [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [JSON Validator](https://jsonlint.com/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 🏆 Recognition

Contributors will be:
- Listed in a CONTRIBUTORS file
- Mentioned in release notes
- Credited in the footer (optional)

---

## ⚖️ Code of Conduct

### Our Pledge:

We are committed to providing a welcoming and inclusive environment for all contributors.

### Standards:

**Expected behavior:**
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the project
- Show empathy

**Unacceptable behavior:**
- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing private information
- Unprofessional conduct

### Enforcement:

Violations should be reported to project maintainers. All complaints will be reviewed and investigated promptly and fairly.

---

## 📞 Questions?

- **General questions**: Open a GitHub Discussion
- **Bug reports**: Create a GitHub Issue
- **Security issues**: Email maintainers directly
- **Recipe questions**: Comment on related PR

---

## 🙏 Thank You!

Every contribution, no matter how small, makes this project better!

**Contributors make this cookbook amazing!** ❤️

---

**Happy Contributing!** 🍳
