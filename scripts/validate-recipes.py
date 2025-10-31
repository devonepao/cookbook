#!/usr/bin/env python3
"""
Recipe Validator
Validates all recipe JSON files before building
"""

import json
import sys
from pathlib import Path
from typing import List, Tuple

def validate_recipe(recipe_path: Path) -> Tuple[bool, List[str]]:
    """Validate a single recipe file"""
    errors = []
    
    try:
        with open(recipe_path, 'r', encoding='utf-8') as f:
            recipe = json.load(f)
    except json.JSONDecodeError as e:
        return False, [f"Invalid JSON: {e}"]
    except Exception as e:
        return False, [f"Error reading file: {e}"]
    
    # Check required fields
    required_fields = {
        'id': str,
        'title': str,
        'category': str,
        'description': str,
        'prepTime': str,
        'cookTime': str,
        'servings': str,
        'ingredients': list,
        'instructions': list
    }
    
    for field, field_type in required_fields.items():
        if field not in recipe:
            errors.append(f"Missing required field: {field}")
        elif not isinstance(recipe[field], field_type):
            errors.append(f"Field '{field}' should be {field_type.__name__}")
    
    # Validate ingredients and instructions are not empty
    if 'ingredients' in recipe and len(recipe['ingredients']) == 0:
        errors.append("Ingredients list is empty")
    
    if 'instructions' in recipe and len(recipe['instructions']) == 0:
        errors.append("Instructions list is empty")
    
    # Validate ID matches filename
    expected_id = recipe_path.stem
    if 'id' in recipe and recipe['id'] != expected_id:
        errors.append(f"ID '{recipe['id']}' doesn't match filename '{expected_id}'")
    
    # Validate category matches folder
    expected_category = recipe_path.parent.name
    if 'category' in recipe and recipe['category'] != expected_category:
        errors.append(f"Category '{recipe['category']}' doesn't match folder '{expected_category}'")
    
    return len(errors) == 0, errors

def main():
    print("🔍 Validating Recipe JSON Files")
    print("=" * 60)
    
    recipes_dir = Path('recipes')
    if not recipes_dir.exists():
        print("❌ Error: recipes directory not found!")
        sys.exit(1)
    
    all_valid = True
    total_recipes = 0
    
    # Find all recipe JSON files
    for category_dir in sorted(recipes_dir.iterdir()):
        if not category_dir.is_dir():
            continue
        
        for recipe_file in sorted(category_dir.glob('*.json')):
            # Skip template
            if recipe_file.name == 'recipe-template.json':
                continue
            
            total_recipes += 1
            is_valid, errors = validate_recipe(recipe_file)
            
            if is_valid:
                print(f"✅ {recipe_file.relative_to(recipes_dir)}")
            else:
                print(f"❌ {recipe_file.relative_to(recipes_dir)}")
                for error in errors:
                    print(f"   - {error}")
                all_valid = False
    
    print("=" * 60)
    print(f"📊 Validated {total_recipes} recipes")
    
    if all_valid:
        print("✅ All recipes are valid!")
        sys.exit(0)
    else:
        print("❌ Some recipes have errors!")
        sys.exit(1)

if __name__ == '__main__':
    main()
