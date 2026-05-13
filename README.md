# Luxe Digital - Professional Creative Agency Website

A modern, fully responsive website for Luxe Digital built with Next.js, React, and Tailwind CSS. Features professional design, smooth animations, and interactive components.

## 🚀 Features

- **Modern Design**: Sleek, professional interface with mint and cyan color palette
- **Responsive**: Fully responsive design that works on all devices
- **3D Animations**: Smooth 3D transitions and parallax effects
- **Interactive Components**: Team member profiles with service details modals
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and structured data
- **Custom Styling**: Tailwind CSS with custom animations and utilities
- **Particle Background**: Animated particle effects in the background
- **Mobile Menu**: Responsive navigation with mobile hamburger menu

## 📋 Project Structure

```
luxe-digital/
├── pages/
│   ├── _app.jsx              # App wrapper
│   ├── _document.jsx         # HTML document setup
│   └── index.jsx             # Home page
├── components/
│   ├── Navigation.jsx        # Top navigation bar
│   ├── Hero.jsx              # Hero section with 3D effects
│   ├── Services.jsx          # Services grid
│   ├── ServiceCard.jsx       # Individual service card
│   ├── Team.jsx              # Team members section
│   ├── TeamMemberCard.jsx    # Team member card
│   ├── TeamMemberModal.jsx   # Service details modal
│   ├── WhyUs.jsx             # Why choose us section
│   ├── CTA.jsx               # Call to action section
│   ├── Footer.jsx            # Footer
│   ├── CustomCursor.jsx      # Custom cursor animation
│   └── ParticleBackground.jsx # Particle animation
├── styles/
│   └── globals.css           # Global styles and animations
├── data/
│   └── services.jsx          # Services data
├── public/                   # Static files
├── package.json              # Dependencies
├── next.config.js            # Next.js config
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS config
├── jsconfig.json             # Path aliases
├── .env.local                # Environment variables
├── .eslintrc.json            # ESLint config
└── .gitignore               # Git ignore rules
```

## 🛠️ Installation

1. **Clone or Download** the project files

2. **Install Dependencies**:
```bash
npm install
```

3. **Set Environment Variables**:
Edit `.env.local` with your information:
```
NEXT_PUBLIC_SITE_NAME=Luxe Digital
NEXT_PUBLIC_CONTACT_EMAIL=hello@luxedigital.com
```

4. **Run Development Server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📦 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push

```bash
vercel deploy
```

### Netlify
1. Build: `npm run build`
2. Export: `next export`
3. Deploy the `out/` folder to Netlify

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  mint: { /* your colors */ }
}
```

### Content
Edit files in `components/` and `data/services.jsx`

### Fonts
Update font import in `styles/globals.css`

### Animations
Modify keyframes in `tailwind.config.js` and `styles/globals.css`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- Image lazy loading (enabled by default)
- Code splitting (automatic with Next.js)
- CSS optimization with PurgeCSS
- Minified production builds
- Fast refresh during development

## 🔒 Security

- Helmet headers configured in `next.config.js`
- XSS protection
- CSRF protection ready
- Secure by default

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For support and customization:
- Email: hello@luxedigital.com
- Website: https://luxedigital.com

---

**Built with ❤️ by Haider**
