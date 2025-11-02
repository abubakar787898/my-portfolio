# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Pre-Deployment Checklist

- [ ] Update all personal information in `src/data/`
- [ ] Add your profile image to `public/images/profile.jpg`
- [ ] Add project images to `public/images/`
- [ ] Update social media links
- [ ] Test locally with `npm run build` and `npm run preview`
- [ ] Check all links work correctly
- [ ] Verify responsive design on mobile devices

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest option for React applications.

#### Steps:

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Push to GitHub**:
   - Create a GitHub repository
   - Push your code

3. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

4. **Configure Domain** (optional):
   - Go to Project Settings → Domains
   - Add your custom domain

#### Environment Variables:
If you need any environment variables, add them in Project Settings → Environment Variables.

---

### 2. Netlify

Netlify is another excellent option with similar features.

#### Steps:

1. **Install Netlify CLI** (optional):
```bash
npm install -g netlify-cli
```

2. **Push to GitHub**:
   - Create a GitHub repository
   - Push your code

3. **Deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Configure Domain**:
   - Go to Site settings → Domain management
   - Add custom domain

---

### 3. GitHub Pages

For a free static hosting solution.

#### Steps:

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

3. **Update vite.config.ts**:
```typescript
export default defineConfig({
  base: '/portfolio/', // Your repo name
  // ... rest of config
})
```

4. **Deploy**:
```bash
npm run deploy
```

---

### 4. Custom Server

For deployment on your own server (VPS, AWS, etc.)

#### Steps:

1. **Build the project**:
```bash
npm run build
```

2. **Upload dist folder**:
   - Upload the `dist` folder contents to your server
   - Configure your web server (Nginx, Apache, etc.)

3. **Nginx Configuration Example**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Post-Deployment

### SEO Optimization

1. **Verify Meta Tags**:
   - Check `index.html` has proper meta tags
   - Test with [Google Rich Results Test](https://search.google.com/test/rich-results)

2. **Submit to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools

3. **Create sitemap.xml** (optional):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Analytics

Add Google Analytics (optional):

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Performance Monitoring

- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) to check performance
- Monitor with [WebPageTest](https://www.webpagetest.org/)
- Set up [Vercel Analytics](https://vercel.com/analytics) or similar

---

## Troubleshooting

### Build Errors

- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Routing Issues

- Ensure your hosting provider supports SPA routing
- Configure redirect rules to serve `index.html` for all routes

### Image Loading Issues

- Check image paths are correct
- Ensure images are in `public/images/`
- Use relative paths starting with `/`

---

## Continuous Deployment

For automatic deployments:

1. **GitHub Actions** (for Vercel/Netlify):
   - Automatic on push to main branch
   - Configured automatically when connecting GitHub repo

2. **Custom CI/CD**:
   - Set up GitHub Actions workflow
   - Build and deploy on push

---

## Need Help?

- Check the [Vite documentation](https://vitejs.dev/guide/static-deploy.html)
- Review deployment platform documentation
- Check GitHub Issues for common problems

