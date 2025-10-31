// Recipe Configuration
// This file now loads recipes from individual JSON files

const RECIPES_CONFIG = {
    categories: {
        desserts: {
            name: 'Desserts',
            icon: '🍰',
            description: 'Sweet treats and delights'
        },
        beverages: {
            name: 'Beverages',
            icon: '🥤',
            description: 'Refreshing drinks'
        },
        gravy: {
            name: 'Gravy',
            icon: '🍛',
            description: 'Rich and flavorful gravies'
        },
        rice: {
            name: 'Rice',
            icon: '🍚',
            description: 'Rice-based dishes'
        },
        breads: {
            name: 'Breads',
            icon: '🥖',
            description: 'Fresh baked breads'
        },
        sauces: {
            name: 'Sauces',
            icon: '🥫',
            description: 'Delicious sauces and condiments'
        }
    },
    
    // Recipe Registry - List all recipe files here
    // Format: 'category/recipe-id'
    recipeFiles: [
        'beverages/mango-lassi',
        'beverages/masala-chai',
        'breads/garlic-naan',
        'desserts/chocolate-cake',
        'desserts/vanilla-ice-cream',
        'gravy/butter-chicken',
        'rice/vegetable-biryani',
        'sauces/tomato-sauce',
    ],
    
    // Loaded recipes will be stored here
    recipes: {}
};

// Recipe Loader - Loads all recipes from JSON files
let recipesLoaded = false;
let loadingPromise = null;

async function loadAllRecipes() {
    if (recipesLoaded) {
        return RECIPES_CONFIG.recipes;
    }
    
    if (loadingPromise) {
        return loadingPromise;
    }
    
    loadingPromise = (async () => {
        const loadPromises = RECIPES_CONFIG.recipeFiles.map(async (recipePath) => {
            try {
                const response = await fetch(`recipes/${recipePath}.json`);
                if (!response.ok) {
                    console.error(`Failed to load recipe: ${recipePath}`);
                    return null;
                }
                const recipe = await response.json();
                RECIPES_CONFIG.recipes[recipe.id] = recipe;
                return recipe;
            } catch (error) {
                console.error(`Error loading recipe ${recipePath}:`, error);
                console.error('If opening directly (file://), please use a local server instead.');
                console.error('Run: python3 -m http.server 8000');
                return null;
            }
        });
        
        await Promise.all(loadPromises);
        recipesLoaded = true;
        console.log(`✅ Loaded ${Object.keys(RECIPES_CONFIG.recipes).length} recipes`);
        return RECIPES_CONFIG.recipes;
    })();
    
    return loadingPromise;
}

// Helper function to get recipes by category
function getRecipesByCategory(category) {
    return Object.values(RECIPES_CONFIG.recipes).filter(
        recipe => recipe.category === category
    );
}

// Helper function to get featured recipes
function getFeaturedRecipes() {
    return Object.values(RECIPES_CONFIG.recipes).filter(
        recipe => recipe.featured === true
    );
}

// Helper function to get all recipes
function getAllRecipes() {
    return Object.values(RECIPES_CONFIG.recipes);
}

// Helper function to get recipe by id
function getRecipeById(id) {
    return RECIPES_CONFIG.recipes[id];
}

// Helper function to search recipes
function searchRecipes(query) {
    const lowercaseQuery = query.toLowerCase();
    return Object.values(RECIPES_CONFIG.recipes).filter(recipe => 
        recipe.title.toLowerCase().includes(lowercaseQuery) ||
        recipe.description.toLowerCase().includes(lowercaseQuery) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(lowercaseQuery))
    );
}

// Helper function to get category info
function getCategoryInfo(categoryId) {
    return RECIPES_CONFIG.categories[categoryId];
}

// Helper function to get all categories with recipe counts
function getCategoriesWithCounts() {
    const categories = [];
    for (const [id, info] of Object.entries(RECIPES_CONFIG.categories)) {
        const recipes = getRecipesByCategory(id);
        categories.push({
            id,
            ...info,
            count: recipes.length
        });
    }
    return categories;
}
