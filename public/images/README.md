# Image Assets

This directory contains images for the portfolio. Add your project screenshots here.

## 📸 How to Add Project Screenshots

### Step 1: Prepare Your Screenshots
Take screenshots of your projects showing:
- Main dashboard/homepage
- Key features or functionality
- Clean, professional appearance

### Step 2: Save Screenshots
Save your screenshots in `public/images/` with these exact filenames:

| Project | Required Filename | Alternative Formats |
|---------|------------------|-------------------|
| **YAKSPORT** | `yaksport.jpg` | `yaksport.png`, `yaksport.webp` |
| **Evarto** | `evarto.jpg` | `evarto.png`, `evarto.webp` |
| **JURII** | `jurii.jpg` | `jurii.png`, `jurii.webp` |
| **Tututor.ai** | `tututor.jpg` | `tututor.png`, `tututor.webp` |
| **Minder** | `minder.jpg` | `minder.png`, `minder.webp` |
| **Quickbite** | `quickbite.jpg` | `quickbite.png`, `quickbite.webp` |
| **Naim.dk** | `naim.jpg` | `naim.png`, `naim.webp` |

### Step 3: Image Specifications
- **Recommended size**: 1200x800px (16:9 aspect ratio) or 800x600px
- **Format**: JPG (recommended), PNG, or WebP
- **File size**: Keep under 500KB per image for best performance
- **Quality**: High quality but optimized (use tools like TinyPNG or Squoosh)

### Step 4: Verify
After adding images, restart your dev server and check the Projects section.

## 🖼️ Profile Image

### Profile Image
- **Path**: `public/images/profile.png` (or `profile.jpg`)
- **Size**: 400x400px (square aspect ratio recommended)
- **Format**: PNG, JPG, or WebP
- **Usage**: Hero section profile picture and About section

## 📝 Current Project Images

Your portfolio expects these project screenshots:

```
public/images/
├── yaksport.jpg    ← YAKSPORT screenshot
├── evarto.jpg      ← Evarto screenshot
├── jurii.jpg       ← JURII screenshot
├── tututor.jpg     ← Tututor.ai screenshot
├── minder.jpg      ← Minder screenshot
├── quickbite.jpg   ← Quickbite screenshot
├── naim.jpg        ← Naim.dk screenshot
└── profile.png     ← Your profile photo
```

## ⚙️ Image Path Configuration

If you need to use different filenames or paths, update `src/data/projects.ts`:

```typescript
{
  image: '/images/your-custom-filename.jpg',
  // ...
}
```

## 🚀 Image Optimization Tips

For best performance and user experience:

1. **Compress images** before adding:
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Aim for 70-85% quality

2. **Use WebP format** when possible (better compression, same quality)

3. **Avoid oversized images**:
   - Max width: 1200px is usually enough
   - Max file size: 500KB per image

4. **Consistent aspect ratios**:
   - Use 16:9 (landscape) for project screenshots
   - Use 1:1 (square) for profile images

## 🔄 Fallback Behavior

If an image is missing, the portfolio will show a placeholder. Always ensure your images are properly named and placed in the correct directory.

