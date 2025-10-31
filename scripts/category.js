// Category page functionality
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('id');
    
    if (!categoryId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Show loading
    document.getElementById('categoryRecipes').innerHTML = '<div class="loading">Loading recipes...</div>';
    
    // Load recipes
    await loadAllRecipes();
    
    loadCategoryRecipes(categoryId);
});

function loadCategoryRecipes(categoryId) {
    const categoryInfo = getCategoryInfo(categoryId);
    
    if (!categoryInfo) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update header
    document.getElementById('categoryTitle').textContent = categoryInfo.name;
    document.getElementById('categorySubtitle').textContent = categoryInfo.description;
    
    // Load recipes
    const recipes = getRecipesByCategory(categoryId);
    const recipesGrid = document.getElementById('categoryRecipes');
    
    if (recipes.length === 0) {
        recipesGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">${categoryInfo.icon}</div>
                <div class="empty-state-text">No recipes in this category yet</div>
            </div>
        `;
        return;
    }
    
    recipesGrid.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
}

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
