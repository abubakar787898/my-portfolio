# Quick Start Guide

Get your portfolio website up and running in minutes!

## 🚀 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📝 Customization

### 1. Update Personal Information

Edit `src/data/personalInfo.ts`:
- Name, title, tagline
- Email, location
- Social media links
- Education details
- Languages

### 2. Add Your Profile Image

Place your profile image at:
- `public/images/profile.jpg` (400x400px recommended)

### 3. Update Experience

Edit `src/data/experience.ts` to add/modify work experience.

### 4. Update Projects

Edit `src/data/projects.ts`:
- Add project details
- Update image paths
- Add live URLs and GitHub links

### 5. Update Skills

Edit `src/data/skills.ts` to reflect your technical skills.

### 6. Add Project Images

Place project images in `public/images/`:
- `yaksport.jpg`
- `evarto.jpg`
- `jurii.jpg`
- `tututor.jpg`

## 🎨 Customize Colors

Edit `tailwind.config.js` to change the color scheme:
- Primary: `#0A192F`
- Secondary: `#64FFDA`
- Accent: `#8892B0`

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## 📦 Deploy

See `DEPLOYMENT.md` for detailed deployment instructions.

### Quick Deploy to Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3000
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Image not loading:**
- Check image path starts with `/`
- Ensure image is in `public/images/`
- Check file name matches exactly

## 📚 Need Help?

- Check `README.md` for detailed documentation
- Review `DEPLOYMENT.md` for deployment help
- See `REACT_BITS_SETUP.md` for component integration

## ✅ Next Steps

1. ✅ Install dependencies
2. ✅ Customize personal information
3. ✅ Add your profile image
4. ✅ Update projects and experience
5. ✅ Test locally
6. ✅ Deploy!

Happy coding! 🎉

