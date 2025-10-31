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
    
    // Load videos if available
    if (recipe.videos && recipe.videos.length > 0) {
        loadVideos(recipe.videos);
    }
    
    // Load references if available
    if (recipe.references && recipe.references.length > 0) {
        loadReferences(recipe.references);
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

function loadVideos(videos) {
    const videosSection = document.getElementById('videosSection');
    const videosGrid = document.getElementById('videosGrid');
    
    if (!videos || videos.length === 0) {
        return;
    }
    
    videosSection.style.display = 'block';
    
    videosGrid.innerHTML = videos.map(video => {
        if (video.type === 'youtube') {
            // YouTube embed
            return `
                <div class="video-container glass">
                    <div class="video-title">${video.title || 'Video Tutorial'}</div>
                    <div class="video-embed">
                        <iframe 
                            src="https://www.youtube.com/embed/${video.id}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            `;
        } else if (video.type === 'instagram') {
            // Instagram embed
            const postId = extractInstagramPostId(video.url);
            return `
                <div class="video-container glass">
                    <div class="video-title">${video.title || 'Instagram Post'}</div>
                    <div class="video-embed instagram-embed">
                        <blockquote class="instagram-media" 
                            data-instgrm-permalink="${video.url}" 
                            data-instgrm-version="14"
                            style="background:#FFF; border:0; border-radius:12px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                            <a href="${video.url}" target="_blank" rel="noopener">View this post on Instagram</a>
                        </blockquote>
                    </div>
                </div>
            `;
        }
        return '';
    }).join('');
    
    // Load Instagram embed script if needed
    if (videos.some(v => v.type === 'instagram')) {
        loadInstagramScript();
    }
}

function extractInstagramPostId(url) {
    // Extract post ID from Instagram URL
    const match = url.match(/\/p\/([^\/]+)/);
    return match ? match[1] : '';
}

function loadInstagramScript() {
    // Check if Instagram embed script is already loaded
    if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//www.instagram.com/embed.js';
        document.body.appendChild(script);
    } else {
        // If script already exists, just process embeds
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }
}

function loadReferences(references) {
    const referencesSection = document.getElementById('referencesSection');
    const referencesList = document.getElementById('referencesList');
    
    if (!references || references.length === 0) {
        return;
    }
    
    referencesSection.style.display = 'block';
    
    referencesList.innerHTML = references.map((ref, index) => `
        <a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="reference-item glass haptic">
            <div class="reference-content">
                <div class="reference-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </div>
                <div class="reference-text">
                    <div class="reference-title">${ref.title}</div>
                    <div class="reference-url">${formatUrl(ref.url)}</div>
                </div>
            </div>
            <div class="reference-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        </a>
    `).join('');
}

function formatUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch (e) {
        return url;
    }
}
