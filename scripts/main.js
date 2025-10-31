// Main page functionality
document.addEventListener('DOMContentLoaded', async () => {
    // Show loading state
    showLoading();
    
    try {
        // Load all recipes from JSON files
        await loadAllRecipes();
        
        // Check if any recipes loaded
        const recipeCount = Object.keys(RECIPES_CONFIG.recipes).length;
        if (recipeCount === 0) {
            showError();
            return;
        }
        
        // Hide loading and show content
        hideLoading();
        
        loadCategories();
        loadFeaturedRecipes();
        displayAllRecipes();
        setupSearch();
    } catch (error) {
        console.error('Error loading recipes:', error);
        showError();
    }
});

// Show loading indicator
function showLoading() {
    const sections = ['categoriesGrid', 'featuredRecipes', 'allRecipes'];
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = '<div class="loading">Loading recipes...</div>';
        }
    });
}

// Hide loading indicator
function hideLoading() {
    // Loading is hidden by replacing content in load functions
}

// Show error message
function showError() {
    const message = `
        <div class="empty-state" style="padding: 60px 20px;">
            <div class="empty-state-icon" style="font-size: 64px;">⚠️</div>
            <h2 style="margin: 20px 0;">Unable to Load Recipes</h2>
            <div class="empty-state-text" style="max-width: 600px; margin: 0 auto; line-height: 1.6;">
                <p>Recipes need to be loaded via a web server.</p>
                <p style="margin-top: 20px;"><strong>To view the cookbook:</strong></p>
                <ol style="text-align: left; display: inline-block; margin-top: 10px;">
                    <li>Open terminal/command prompt</li>
                    <li>Navigate to the cookbook folder</li>
                    <li>Run: <code style="background: #f0f0f0; padding: 2px 8px; border-radius: 3px;">python3 -m http.server 8000</code></li>
                    <li>Visit: <a href="http://localhost:8000" style="color: #007AFF;">http://localhost:8000</a></li>
                </ol>
                <p style="margin-top: 20px; font-size: 14px; color: #666;">Or deploy to GitHub Pages for permanent hosting!</p>
            </div>
        </div>
    `;
    
    document.getElementById('categoriesGrid').innerHTML = message;
    document.getElementById('featuredRecipes').innerHTML = '';
    document.getElementById('allRecipes').innerHTML = '';
}

// Load categories
function loadCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    const categories = getCategoriesWithCounts();
    
    categoriesGrid.innerHTML = categories.map(category => `
        <a href="category.html?id=${category.id}" class="category-card haptic">
            <div class="category-icon">${category.icon}</div>
            <div class="category-name">${category.name}</div>
            <div class="category-count">${category.count} recipe${category.count !== 1 ? 's' : ''}</div>
        </a>
    `).join('');
}

// Load featured recipes
function loadFeaturedRecipes() {
    const featuredRecipes = getFeaturedRecipes();
    const featuredGrid = document.getElementById('featuredRecipes');
    
    if (featuredRecipes.length === 0) {
        featuredGrid.innerHTML = '<div class="empty-state"><div class="empty-state-text">No featured recipes yet</div></div>';
        return;
    }
    
    featuredGrid.innerHTML = featuredRecipes.map(recipe => createRecipeCard(recipe)).join('');
}

// Display all recipes
function displayAllRecipes() {
    const allRecipes = getAllRecipes();
    const allRecipesGrid = document.getElementById('allRecipes');
    
    if (allRecipes.length === 0) {
        allRecipesGrid.innerHTML = '<div class="empty-state"><div class="empty-state-text">No recipes yet</div></div>';
        return;
    }
    
    allRecipesGrid.innerHTML = allRecipes.map(recipe => createRecipeCard(recipe)).join('');
}

// Create recipe card HTML
function createRecipeCard(recipe) {
    const categoryInfo = getCategoryInfo(recipe.category);
    const image = recipe.images && recipe.images.length > 0 ? recipe.images[0] : '';
    
    return `
        <a href="recipe.html?id=${recipe.id}" class="recipe-card haptic">
            ${image ? `<img src="${image}" alt="${recipe.title}" class="recipe-image" loading="lazy">` : '<div class="recipe-image"></div>'}
            <div class="recipe-info">
                <div class="recipe-card-category">${categoryInfo.name}</div>
                <div class="recipe-card-title">${recipe.title}</div>
                <div class="recipe-card-description">${recipe.description}</div>
                <div class="recipe-card-meta">
                    <span>⏱️ ${recipe.prepTime}</span>
                    <span>👥 ${recipe.servings}</span>
                </div>
            </div>
        </a>
    `;
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.trim();
            
            if (query.length === 0) {
                displayAllRecipes();
                return;
            }
            
            const results = searchRecipes(query);
            const allRecipesGrid = document.getElementById('allRecipes');
            
            if (results.length === 0) {
                allRecipesGrid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">🔍</div>
                        <div class="empty-state-text">No recipes found for "${query}"</div>
                    </div>
                `;
                return;
            }
            
            allRecipesGrid.innerHTML = results.map(recipe => createRecipeCard(recipe)).join('');
        }, 300);
    });
}

// Add haptic feedback (visual only for web)
document.addEventListener('touchstart', (e) => {
    if (e.target.classList.contains('haptic')) {
        e.target.style.opacity = '0.6';
    }
});

document.addEventListener('touchend', (e) => {
    if (e.target.classList.contains('haptic')) {
        e.target.style.opacity = '1';
    }
});
