# Luxe Digital - Complete Project Structure

## 📂 Full Directory Structure

```
luxe-digital/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── jsconfig.json             # Path aliases (@ = root)
│   ├── .eslintrc.json            # Code quality rules
│   ├── .env.local                # Environment variables
│   ├── .gitignore                # Git ignore rules
│   │
│
├── 📖 Documentation
│   ├── README.md                 # Project overview & setup
│   ├── DEPLOYMENT.md             # Deployment guide
│   └── FILE_STRUCTURE.md         # This file
│   │
│
├── 🎨 Styling
│   └── styles/
│       └── globals.css           # Global styles, animations, utilities
│   │
│
├── 📄 Pages (Next.js Routes)
│   └── pages/
│       ├── _app.jsx              # App wrapper, global setup
│       ├── _document.jsx         # HTML document structure
│       └── index.jsx             # Home page (/)
│   │
│
├── 🧩 Components (Reusable Parts)
│   └── components/
│       ├── Navigation.jsx        # Top navbar with mobile menu
│       ├── CustomCursor.jsx      # Custom cursor animation
│       ├── ParticleBackground.jsx # Animated particle effects
│       │
│       ├── Hero.jsx              # Hero section with 3D cards
│       │
│       ├── Services.jsx          # Services grid container
│       ├── ServiceCard.jsx       # Individual service card
│       │
│       ├── Team.jsx              # Team members section
│       ├── TeamMemberCard.jsx    # Team member card with hover
│       ├── TeamMemberModal.jsx   # Service details modal
│       │
│       ├── WhyUs.jsx             # Why choose us section
│       ├── CTA.jsx               # Call-to-action section
│       └── Footer.jsx            # Footer with links
│   │
│
├── 📊 Data
│   └── data/
│       └── services.jsx          # Services data (icons, descriptions)
│   │
│
├── 🌐 Public Files (Static Assets)
│   └── public/
│       ├── robots.txt            # Search engine optimization
│       └── sitemap.xml           # XML sitemap for SEO
│   │
│
└── .gitignore                    # Git ignore configuration
```

## 📋 File Count Summary

| Category | Count | Files |
|----------|-------|-------|
| Configuration | 8 | package.json, next.config.js, tailwind.config.js, postcss.config.js, jsconfig.json, .eslintrc.json, .env.local, .gitignore |
| Documentation | 3 | README.md, DEPLOYMENT.md, FILE_STRUCTURE.md |
| Pages | 3 | _app.jsx, _document.jsx, index.jsx |
| Components | 14 | Navigation, CustomCursor, ParticleBackground, Hero, Services, ServiceCard, Team, TeamMemberCard, TeamMemberModal, WhyUs, CTA, Footer |
| Data | 1 | services.jsx |
| Styling | 1 | globals.css |
| Public | 2 | robots.txt, sitemap.xml |
| **TOTAL** | **32** | **Production-ready files** |

---

## 🎯 Component Hierarchy

```
📄 index.jsx (Home Page)
│
├── Navigation
│
├── Hero
│   └── ParticleBackground
│
├── Services
│   └── ServiceCard (x6)
│
├── Team
│   ├── TeamMemberCard (x6)
│   └── TeamMemberModal
│       └── (Service details)
│
├── WhyUs
│
├── CTA
│
└── Footer
```

---

## 🔄 Data Flow

```
data/services.jsx
        ↓
    Services (Component)
        ├── ServiceCard
        │   └── Display service info
        │
        └── TeamMemberModal
            └── Show full service details when team member clicked
```

---

## 💾 Installation & Setup

### 1️⃣ Install Dependencies
```bash
npm install
```
**Creates**: `node_modules/` folder with all packages

### 2️⃣ Start Development
```bash
npm run dev
```
**Creates**: `.next/` folder (build cache)

### 3️⃣ Production Build
```bash
npm run build
npm start
```
**Creates**: `.next/` production build

---

## 🗂️ Important Directories

### `/pages`
- **Purpose**: Next.js automatically converts files here to routes
- **index.jsx** → Main homepage (/)
- **_app.jsx** → Wraps every page
- **_document.jsx** → HTML structure for all pages

### `/components`
- **Purpose**: Reusable React components
- **Structure**: One component = one file
- **Naming**: PascalCase (e.g., Navigation.jsx)

### `/styles`
- **Purpose**: Global CSS and custom utilities
- **globals.css**: Imported in _app.jsx

### `/data`
- **Purpose**: Centralized data management
- **services.jsx**: All services data in one place
- **Benefits**: Easy to update, no hard-coded content

### `/public`
- **Purpose**: Static files (robots.txt, sitemap.xml)
- **Accessible**: From root URL (e.g., /robots.txt)

---

## 🎨 Styling System

### CSS Architecture
```
globals.css (Global Styles)
    ↓
tailwind.config.js (Colors, Animation)
    ↓
Component-level CSS (Tailwind classes)
```

### Custom Colors
```javascript
// In tailwind.config.js
colors: {
  mint: { 400: '#4cafc0', 500: '#2db0a3' }
}

// Usage in component
className="text-mint-400 bg-mint-500"
```

### Custom Animations
```javascript
// In tailwind.config.js
animation: {
  'float': 'float 3s ease-in-out infinite'
}

// Usage in component
className="animate-float"
```

---

## 🚀 Deployment Files

| File | Purpose | When Used |
|------|---------|-----------|
| **next.config.js** | Build configuration | npm run build |
| **package.json** | Dependencies list | npm install |
| **tailwind.config.js** | CSS build settings | npm run build |
| **.env.local** | Secrets & config | Both dev & production |
| **robots.txt** | SEO settings | Production |
| **sitemap.xml** | SEO sitemap | Production |

---

## 📝 Customization Guide

### Change Colors
**File**: `tailwind.config.js`
```javascript
colors: {
  mint: { /* your colors */ },
  cyan: { /* your colors */ }
}
```

### Change Fonts
**File**: `styles/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
body {
  font-family: 'YourFont', sans-serif;
}
```

### Change Content
**File**: `data/services.jsx`
```javascript
export const services = [
  { title: 'Your Service', name: 'Your Name', ... }
]
```

### Change Team
**File**: `components/Team.jsx`
```javascript
const teamMembers = [
  { name: 'Your Name', role: 'Your Role', ... }
]
```

### Change Navigation Links
**File**: `components/Navigation.jsx`
```javascript
const menuItems = [
  { label: 'Your Link', href: '#your-section' }
]
```

---

## 🔧 Build Process

```
Source Code (JSX, CSS)
        ↓
    Next.js Compiler
        ↓
    Tailwind CSS Processor
        ↓
    Minification & Optimization
        ↓
    Production Build (.next/)
        ↓
    Deployed to Server
```

---

## 📊 File Purposes at a Glance

| File | Purpose | Modify When |
|------|---------|-----------|
| package.json | List dependencies | Adding npm packages |
| index.jsx | Home page content | Changing page layout |
| Navigation.jsx | Top menu | Changing menu items |
| Hero.jsx | Hero section | Changing main message |
| Services.jsx | Services grid | Changing service display |
| Team.jsx | Team members | Changing team section |
| services.jsx | Service data | Updating service info |
| globals.css | Styling & animations | Changing styles |
| tailwind.config.js | Colors & themes | Changing color scheme |
| next.config.js | Build settings | Advanced configuration |

---

## ✅ Production Checklist

Before deploying, verify:

- [ ] All content updated in components
- [ ] Colors customized in tailwind.config.js
- [ ] Services updated in data/services.jsx
- [ ] Team members updated in components/Team.jsx
- [ ] Contact info updated in .env.local
- [ ] Social links updated in Footer.jsx
- [ ] Meta tags updated in pages/_document.jsx
- [ ] robots.txt updated with your domain
- [ ] sitemap.xml updated
- [ ] Images optimized (if added)
- [ ] Links verified (internal & external)
- [ ] Mobile responsiveness tested
- [ ] Performance tested with Lighthouse
- [ ] Deployed to production

---

## 🎓 Learning Resources

### Next.js
- Official Docs: https://nextjs.org/docs
- Tutorial: https://nextjs.org/learn

### React
- Official Docs: https://react.dev
- Hooks Guide: https://react.dev/reference/react

### Tailwind CSS
- Official Docs: https://tailwindcss.com/docs
- Config Reference: https://tailwindcss.com/docs/configuration

### Lucide Icons
- Icon Library: https://lucide.dev
- React Usage: https://lucide.dev/guide/packages/lucide-react

---

**Total Project Size**: ~32 files, production-ready
**Estimated Build Time**: 30-60 seconds
**Node Modules Size**: ~500MB
**Production Bundle Size**: ~200KB (gzipped)

---

Created by: Luxe Digital
Last Updated: 2024
