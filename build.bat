@echo off
REM Local Build Script for Cookbook - Windows

echo Building Cookbook...
echo.

REM Step 1: Validate
echo Step 1: Validating recipes...
python scripts\validate-recipes.py
if errorlevel 1 goto error
echo.

REM Step 2: Update index
echo Step 2: Updating recipe index...
python scripts\update-index.py
if errorlevel 1 goto error
echo.

REM Step 3: Build
echo Step 3: Building static site...
python scripts\build.py
if errorlevel 1 goto error
echo.

echo Build complete!
echo Output directory: dist\
echo To test: cd dist ^&^& python -m http.server 8000
pause
exit /b 0

:error
echo Build failed!
pause
exit /b 1
