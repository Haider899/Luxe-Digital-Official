# Luxe Digital - Deployment Guide

Complete guide to deploy your Luxe Digital website to production.

## 🚀 Quick Start (Recommended: Vercel)

Vercel is the easiest and recommended way to deploy Next.js applications.

### Step 1: Prepare Your Code
```bash
# Make sure everything is committed to git
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**That's it!** Your site is live.

### Step 3: Custom Domain
1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as shown in Vercel

---

## 🔧 Alternative Deployments

### Netlify Deployment

1. **Build the project locally**:
```bash
npm run build
npm run export
```

2. **Deploy the `out/` folder**:
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `out/` folder
- Or connect your GitHub repo for automatic deployments

### Self-Hosted (Linux/VPS)

1. **Install Node.js**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Clone your repository**:
```bash
git clone <your-repo-url>
cd luxe-digital
```

3. **Install dependencies**:
```bash
npm install --production
```

4. **Build the application**:
```bash
npm run build
```

5. **Start with PM2** (process manager):
```bash
npm install -g pm2
pm2 start npm --name "luxe-digital" -- start
pm2 startup
pm2 save
```

6. **Setup Nginx Reverse Proxy**:
```nginx
server {
    listen 80;
    server_name luxedigital.com www.luxedigital.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Enable SSL with Let's Encrypt**:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d luxedigital.com -d www.luxedigital.com
```

### Docker Deployment

1. **Create Dockerfile** (already have a template):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]
```

2. **Build Docker image**:
```bash
docker build -t luxe-digital:latest .
```

3. **Run container**:
```bash
docker run -d -p 3000:80 --name luxe-digital luxe-digital:latest
```

4. **Push to Docker Hub** (for cloud deployment):
```bash
docker tag luxe-digital:latest yourusername/luxe-digital:latest
docker push yourusername/luxe-digital:latest
```

---

## 🔐 Environment Variables

Before deployment, ensure these are set:

**In Vercel**:
1. Project Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_SITE_NAME=Luxe Digital`
   - `NEXT_PUBLIC_CONTACT_EMAIL=hello@luxedigital.com`
   - Any other variables from `.env.local`

---

## ✅ Pre-Deployment Checklist

- [ ] All code committed to git
- [ ] Environment variables configured
- [ ] Contact information updated in `.env.local`
- [ ] Social media links updated in `Footer.jsx`
- [ ] Brand colors customized if needed
- [ ] All component text reviewed
- [ ] Links and URLs verified
- [ ] Mobile responsiveness tested
- [ ] Performance tested with Lighthouse
- [ ] SEO meta tags reviewed

---

## 📊 Performance Tips

### Lighthouse Score Optimization

1. **Images**: Ensure proper sizing and formats
2. **Bundle Size**: Remove unused dependencies
3. **Caching**: Enable browser caching in `next.config.js`
4. **Compression**: Gzip enabled automatically
5. **Fonts**: Already optimized with Google Fonts

### Test Your Site

```bash
# Generate Lighthouse report
npm install -g lighthouse
lighthouse https://yourdomain.com
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Free CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: vercel/action@master
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 📱 Post-Deployment

### Monitor Your Site

- [Google Analytics](https://analytics.google.com/)
- [Vercel Analytics](https://vercel.com/analytics)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Domain Setup (if using custom domain)

1. Update DNS records:
   - Point domain to Vercel nameservers
   - Or add CNAME/A records as shown in Vercel

2. Enable HTTPS:
   - Automatic with Vercel/Netlify
   - Manual setup for self-hosted

---

## 🚨 Troubleshooting

### Site Not Loading

```bash
# Check build logs
npm run build

# Test locally
npm run dev

# Check Node version compatibility
node --version  # Should be 16+
```

### Performance Issues

```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
```

### 404 Errors

- Check that `pages/` directory exists
- Verify component imports are correct
- Clear `.next/` directory and rebuild

---

## 📞 Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Netlify Docs: https://docs.netlify.com

---

**Questions? Contact: hello@luxedigital.com**
