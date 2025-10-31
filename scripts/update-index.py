#!/usr/bin/env python3
"""
Cookbook Index Updater
Automatically scans the recipes folder and updates the recipe registry in config.js
Run this whenever you add new recipe JSON files.
"""

import os
import json
import sys
from pathlib import Path

def find_recipe_files():
    """Scan recipes folder and find all JSON files (excluding template)"""
    recipe_files = []
    recipes_dir = Path('recipes')
    
    if not recipes_dir.exists():
        print("❌ Error: 'recipes' folder not found!")
        print("   Make sure you're running this script from the cookbook directory.")
        sys.exit(1)
    
    # Scan all category folders
    for category_dir in sorted(recipes_dir.iterdir()):
        if category_dir.is_dir():
            category_name = category_dir.name
            
            # Find all JSON files in this category
            for recipe_file in sorted(category_dir.glob('*.json')):
                # Skip template
                if recipe_file.name == 'recipe-template.json':
                    continue
                
                # Get recipe ID (filename without .json)
                recipe_id = recipe_file.stem
                
                # Validate it's a proper JSON file
                try:
                    with open(recipe_file, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        
                    # Verify required fields
                    required_fields = ['id', 'title', 'category']
                    missing_fields = [field for field in required_fields if field not in data]
                    
                    if missing_fields:
                        print(f"⚠️  Warning: {recipe_file} missing fields: {missing_fields}")
                        continue
                    
                    # Verify ID matches filename
                    if data['id'] != recipe_id:
                        print(f"⚠️  Warning: {recipe_file} has ID '{data['id']}' but filename is '{recipe_id}.json'")
                        print(f"   Using filename: {recipe_id}")
                    
                    # Verify category matches folder
                    if data['category'] != category_name:
                        print(f"⚠️  Warning: {recipe_file} has category '{data['category']}' but is in '{category_name}' folder")
                    
                    recipe_files.append(f"{category_name}/{recipe_id}")
                    
                except json.JSONDecodeError as e:
                    print(f"❌ Error: {recipe_file} is not valid JSON: {e}")
                    continue
                except Exception as e:
                    print(f"❌ Error reading {recipe_file}: {e}")
                    continue
    
    return recipe_files

def update_config_js(recipe_files):
    """Update the recipeFiles array in config.js"""
    config_path = Path('scripts/config.js')
    
    if not config_path.exists():
        print("❌ Error: 'scripts/config.js' not found!")
        sys.exit(1)
    
    # Read current config
    with open(config_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the recipeFiles array
    start_marker = 'recipeFiles: ['
    end_marker = '],'
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print("❌ Error: Could not find 'recipeFiles' array in config.js")
        sys.exit(1)
    
    # Find the end of the array
    end_idx = content.find(end_marker, start_idx)
    if end_idx == -1:
        print("❌ Error: Could not find end of 'recipeFiles' array")
        sys.exit(1)
    
    # Build new array content
    new_array_content = "recipeFiles: [\n"
    for recipe_file in recipe_files:
        new_array_content += f"        '{recipe_file}',\n"
    new_array_content += "    ],"
    
    # Replace the array in content
    new_content = content[:start_idx] + new_array_content + content[end_idx + len(end_marker):]
    
    # Write back to file
    with open(config_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def show_categories_summary(recipe_files):
    """Show summary by category"""
    from collections import defaultdict
    
    categories = defaultdict(list)
    for recipe in recipe_files:
        category, recipe_id = recipe.split('/')
        categories[category].append(recipe_id)
    
    print("\n📊 Recipe Summary by Category:")
    print("=" * 60)
    
    total = 0
    for category in sorted(categories.keys()):
        recipes = categories[category]
        print(f"  {category:20s} {len(recipes):3d} recipe{'s' if len(recipes) != 1 else ' '}")
        total += len(recipes)
    
    print("=" * 60)
    print(f"  {'TOTAL':20s} {total:3d} recipes")
    print()

def main():
    print("🍳 Cookbook Index Updater")
    print("=" * 60)
    print()
    
    # Find the cookbook root directory
    script_dir = Path(__file__).parent.parent  # Go up from scripts/ to cookbook/
    os.chdir(script_dir)
    
    print("📁 Scanning recipes folder...")
    recipe_files = find_recipe_files()
    
    if not recipe_files:
        print("⚠️  No recipe files found!")
        print("   Add some recipes to the recipes/[category]/ folders first.")
        sys.exit(0)
    
    print(f"✅ Found {len(recipe_files)} recipe files")
    
    # Show summary
    show_categories_summary(recipe_files)
    
    print("📝 Updating scripts/config.js...")
    update_config_js(recipe_files)
    
    print("✅ Recipe index updated successfully!")
    print()
    print("💡 Next steps:")
    print("   1. Review the changes in scripts/config.js")
    print("   2. Test in browser: python3 -m http.server 8000")
    print("   3. Commit changes to git")
    print()
    print("🎉 Done!")

if __name__ == '__main__':
    main()
