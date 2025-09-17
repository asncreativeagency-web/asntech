# Deployment Guide

## 📦 Production Build

### Build the Application
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Preview Production Build
```bash
npm run preview
```

### Serve with Custom Host
```bash
npm run serve
```

## 🚀 Deployment Options

### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or deploy from GitHub
# 1. Push to GitHub
# 2. Connect repository to Vercel
# 3. Auto-deploy on push
```

### 2. **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### 3. **GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Deploy: `npm run deploy`

### 4. **Traditional Web Server**
1. Build: `npm run build`
2. Upload `dist/` contents to web server
3. Configure server for SPA routing

## 🔧 Server Configuration

### Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        root /path/to/your/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache (.htaccess)
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive on
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

## 🌍 Environment Variables

Create `.env.production` for production-specific variables:
```env
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 📊 Performance Optimization

### Build Analysis
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true
    })
  ]
});
```

### Optimization Checklist
- ✅ Minified CSS and JavaScript
- ✅ Optimized images
- ✅ Tree-shaking enabled
- ✅ Code splitting
- ✅ Gzip compression
- ✅ CDN integration for static assets

## 🔍 SEO Optimization

### Meta Tags
Add to `index.html`:
```html
<meta name="description" content="Your app description">
<meta name="keywords" content="react, modern, responsive">
<meta property="og:title" content="Your App Title">
<meta property="og:description" content="Your app description">
<meta property="og:image" content="/og-image.jpg">
```

### Sitemap
Generate `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📈 Monitoring

### Analytics Integration
```typescript
// Add to App.tsx
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Google Analytics
    if (import.meta.env.PROD) {
      // Initialize analytics
    }
  }, []);
  
  // ... rest of component
};
```

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user behavior

## 🔒 Security Headers

Add to server configuration:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
```

## 🚨 Pre-deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Verify all links work correctly
- [ ] Check responsive design on different devices
- [ ] Test form submissions
- [ ] Verify font loading
- [ ] Check performance with Lighthouse
- [ ] Test accessibility
- [ ] Verify SEO meta tags
- [ ] Test in different browsers
- [ ] Check console for errors

## 📞 Support

For deployment issues:
1. Check build logs for errors
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility
4. Check server configuration
5. Review environment variables