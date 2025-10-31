#!/usr/bin/env python3
"""
Static Site Builder
Builds the cookbook static site with updated index and optimizations
"""

import os
import json
import shutil
from pathlib import Path

def build_site():
    """Build the static site"""
    print("🏗️ Building Cookbook Static Site")
    print("=" * 60)
    
    # Create dist directory
    dist_dir = Path('dist')
    if dist_dir.exists():
        print("🗑️  Cleaning old build...")
        shutil.rmtree(dist_dir)
    
    dist_dir.mkdir()
    print(f"📁 Created {dist_dir}")
    
    # Copy HTML files
    print("\n📄 Copying HTML files...")
    html_files = ['index.html', 'category.html', 'recipe.html']
    for html_file in html_files:
        if Path(html_file).exists():
            shutil.copy2(html_file, dist_dir / html_file)
            print(f"   ✅ {html_file}")
    
    # Copy styles directory
    print("\n🎨 Copying styles...")
    if Path('styles').exists():
        shutil.copytree('styles', dist_dir / 'styles')
        print(f"   ✅ styles/")
    
    # Copy scripts directory
    print("\n⚙️ Copying scripts...")
    if Path('scripts').exists():
        # Only copy necessary JS files, not Python build scripts
        scripts_dist = dist_dir / 'scripts'
        scripts_dist.mkdir()
        
        js_files = ['config.js', 'main.js', 'category.js', 'recipe.js']
        for js_file in js_files:
            src = Path('scripts') / js_file
            if src.exists():
                shutil.copy2(src, scripts_dist / js_file)
                print(f"   ✅ scripts/{js_file}")
    
    # Copy recipes directory
    print("\n🍳 Copying recipes...")
    if Path('recipes').exists():
        shutil.copytree('recipes', dist_dir / 'recipes')
        print(f"   ✅ recipes/")
    
    # Copy manifest and other assets
    print("\n📦 Copying assets...")
    asset_files = ['manifest.json', '.nojekyll']
    for asset_file in asset_files:
        if Path(asset_file).exists():
            shutil.copy2(asset_file, dist_dir / asset_file)
            print(f"   ✅ {asset_file}")
    
    # Create .nojekyll if it doesn't exist
    nojekyll = dist_dir / '.nojekyll'
    if not nojekyll.exists():
        nojekyll.touch()
        print(f"   ✅ .nojekyll (created)")
    
    # Copy README for GitHub Pages
    if Path('README.md').exists():
        shutil.copy2('README.md', dist_dir / 'README.md')
        print(f"   ✅ README.md")
    
    # Generate build info
    print("\n📊 Generating build info...")
    build_info = {
        'built_at': None,  # Will be set by GitHub Actions
        'recipes_count': count_recipes(),
        'version': '1.0.0'
    }
    
    with open(dist_dir / 'build-info.json', 'w') as f:
        json.dump(build_info, f, indent=2)
    print(f"   ✅ build-info.json")
    
    print("\n" + "=" * 60)
    print(f"✅ Build complete! Output in {dist_dir}/")
    print(f"📊 Total recipes: {build_info['recipes_count']}")
    
    # Show directory size
    total_size = sum(f.stat().st_size for f in dist_dir.rglob('*') if f.is_file())
    print(f"📦 Build size: {total_size / 1024:.1f} KB")

def count_recipes():
    """Count total recipes"""
    count = 0
    recipes_dir = Path('recipes')
    if recipes_dir.exists():
        for category_dir in recipes_dir.iterdir():
            if category_dir.is_dir():
                for recipe_file in category_dir.glob('*.json'):
                    if recipe_file.name != 'recipe-template.json':
                        count += 1
    return count

if __name__ == '__main__':
    # Change to repository root
    repo_root = Path(__file__).parent.parent
    os.chdir(repo_root)
    
    build_site()
