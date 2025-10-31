// Recipe page functionality
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (!recipeId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Load recipes first
    await loadAllRecipes();
    
    // Then load the specific recipe
    loadRecipe(recipeId);
});

function loadRecipe(recipeId) {
    const recipe = getRecipeById(recipeId);
    
    if (!recipe) {
        window.location.href = 'index.html';
        return;
    }
    
    const categoryInfo = getCategoryInfo(recipe.category);
    
    // Update page title
    document.title = `${recipe.title} - Cookbook`;
    
    // Load images
    loadGallery(recipe.images || []);
    
    // Update recipe details
    document.getElementById('recipeCategory').textContent = categoryInfo.name;
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.getElementById('recipeDescription').textContent = recipe.description;
    
    // Update meta information
    document.getElementById('prepTime').textContent = recipe.prepTime;
    document.getElementById('cookTime').textContent = recipe.cookTime;
    document.getElementById('servings').textContent = recipe.servings;
    
    // Load ingredients
    loadIngredients(recipe.ingredients);
    
    // Load instructions
    loadInstructions(recipe.instructions);
    
    // Load notes if available
    if (recipe.notes) {
        document.getElementById('notesSection').style.display = 'block';
        document.getElementById('recipeNotes').textContent = recipe.notes;
    }
}

function loadGallery(images) {
    const galleryMain = document.getElementById('galleryMain');
    const galleryThumbnails = document.getElementById('galleryThumbnails');
    
    if (!images || images.length === 0) {
        galleryMain.innerHTML = '<div style="height: 100%; display: flex; align-items: center; justify-content: center; color: var(--apple-gray);">No image available</div>';
        return;
    }
    
    // Set main image
    galleryMain.innerHTML = `<img src="${images[0]}" alt="Recipe image" loading="lazy">`;
    
    // Set thumbnails if multiple images
    if (images.length > 1) {
        galleryThumbnails.innerHTML = images.map((img, index) => `
            <div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${img}" alt="Recipe image ${index + 1}" loading="lazy">
            </div>
        `).join('');
        
        // Add click handlers
        document.querySelectorAll('.gallery-thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                const index = parseInt(thumb.dataset.index);
                galleryMain.innerHTML = `<img src="${images[index]}" alt="Recipe image" loading="lazy">`;
                
                // Update active state
                document.querySelectorAll('.gallery-thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }
}

function loadIngredients(ingredients) {
    const ingredientsList = document.getElementById('ingredientsList');
    
    if (!ingredients || ingredients.length === 0) {
        ingredientsList.innerHTML = '<div>No ingredients listed</div>';
        return;
    }
    
    ingredientsList.innerHTML = ingredients.map((ingredient, index) => `
        <div class="ingredient-item" data-index="${index}">
            <div class="ingredient-checkbox"></div>
            <div class="ingredient-text">${ingredient}</div>
        </div>
    `).join('');
    
    // Add click handlers for checkbox functionality
    document.querySelectorAll('.ingredient-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
        });
    });
}

function loadInstructions(instructions) {
    const instructionsList = document.getElementById('instructionsList');
    
    if (!instructions || instructions.length === 0) {
        instructionsList.innerHTML = '<div>No instructions listed</div>';
        return;
    }
    
    instructionsList.innerHTML = instructions.map((instruction, index) => `
        <div class="instruction-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <div class="step-text">${instruction}</div>
            </div>
        </div>
    `).join('');
}
