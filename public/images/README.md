# Image Assets

This directory contains placeholder images for the portfolio. Replace these with your actual images.

## Required Images

### Profile Image
- **Path**: `public/images/profile.jpg`
- **Size**: 400x400px (or square aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Usage**: Hero section profile picture and About section

### Project Images
Place project images in `public/images/`:
- `yaksport.jpg` - YAKSPORT project thumbnail
- `evarto.jpg` - Evarto project thumbnail  
- `jurii.jpg` - JURII project thumbnail
- `tututor.jpg` - Tututor.ai project thumbnail

**Recommended sizes**: 600x400px or 1200x800px
**Format**: JPG, PNG, or WebP

## Current Setup

The application uses placeholder images with fallback URLs. You can:
1. Add your actual images to `public/images/`
2. Or update image paths in `src/data/projects.ts`

## Image Optimization

For best performance:
- Use WebP format when possible
- Compress images before adding
- Use appropriate sizes (don't use oversized images)
- Consider lazy loading for below-the-fold images

