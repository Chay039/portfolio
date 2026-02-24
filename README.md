# Chaitanya Sai Juturi — Personal Portfolio

A production-ready, visually stunning personal portfolio website for a Full Stack Developer with 4+ years of experience. Built with React, TypeScript, Vite, and Tailwind CSS with premium dark editorial design.

## 🎨 Design System

**Theme:** Dark Luxury Editorial — High-end tech magazine meets Silicon Valley unicorn

**Colors:**
- Primary Background: `#04060f`
- Secondary Background: `#080d1a`
- Accent Cyan: `#00e5ff` (primary accent, glow effects)
- Accent Gold: `#f0b429` (secondary accent, highlights)
- Text Primary: `#f0f4ff`
- Text Muted: `#7a8aa0`

**Typography:**
- Display: Syne (bold, geometric, modern)
- Body: DM Sans (clean, readable)
- Mono: JetBrains Mono (code/tech labels)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd chaitanya-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will open at `http://localhost:3000`

## 📁 Project Structure

```
chaitanya-portfolio/
├── index.html              # Entry HTML with Google Fonts
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS theme config
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main app component
    ├── index.css           # Global styles, scrollbar, utilities
    ├── data/
    │   └── portfolio.ts    # All content as typed constants
    ├── components/
    │   ├── Navbar.tsx      # Sticky navigation
    │   ├── Hero.tsx        # Hero section with typewriter
    │   ├── About.tsx       # About section with stats
    │   ├── Skills.tsx      # Skills with category chips
    │   ├── Experience.tsx  # Vertical timeline
    │   ├── Education.tsx   # Education cards
    │   ├── Projects.tsx    # Bento grid projects
    │   ├── Contact.tsx     # Contact form
    │   └── Footer.tsx      # Footer with social links
    └── hooks/
        └── useScrollAnimation.ts  # Scroll trigger hook
```

## ✨ Key Features

### Visual Effects
- 🌈 Glassmorphism cards with backdrop blur
- ✨ Shimmer sweep animation on hover
- 🌟 Glow text effect on name (cyan text-shadow)
- 🎯 Scroll-triggered reveal animations
- 📍 Floating neon underline on nav hover
- 🔆 Pulsing availability badge
- 🎨 Animated gradient mesh backgrounds
- 📜 Custom scrollbar in cyan accent
- 🎪 Subtle grain texture overlay

### Animations
- Framer Motion for component animations
- Scroll-based reveal triggers with IntersectionObserver
- Typewriter effect in hero (cycling roles)
- Floating elements and smooth transitions
- Respects `prefers-reduced-motion` setting

### Responsive Design
- Mobile-first approach
- Fully responsive 320px → 4K
- Hamburger menu on mobile
- Touch-friendly interactions
- Optimized for all screen sizes

### Accessibility
- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- High contrast ratios
- Focus states on interactive elements
- Lighthouse target: 95+ Performance, 100 Accessibility

## 🔧 Customization

### Update Content
All portfolio content is centralized in `src/data/portfolio.ts`:

```typescript
// Edit personal info
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  // ... more fields
}

// Update experiences, projects, skills, education
export const experiences: Experience[] = [...]
export const projects: Project[] = [...]
export const skills: Skill[] = [...]
export const education: EducationEntry[] = [...]
```

### Customize Colors
Edit `tailwind.config.ts` to change the theme:

```typescript
colors: {
  dark: { primary: '#04060f', secondary: '#080d1a' },
  accent: { cyan: '#00e5ff', gold: '#f0b429' },
  // ...
}
```

### Modify Components
Each component in `src/components/` is self-contained and can be modified independently.

## 📦 Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Fast build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Advanced animations
- **Lucide React** — Icon library
- **tsParticles** — Particle background effects

## 🎯 Performance

- Optimized bundle size (~100KB gzipped)
- Code splitting by route
- Image optimization (use WebP where possible)
- CSS tree-shaking via Tailwind
- TypeScript strict mode for safety

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

```bash
# Build
npm run build

# Deploy dist/ to GitHub Pages
```

### Netlify

```bash
# Connect your GitHub repo to Netlify
# Auto-deploys on push to main
```

## 📊 Lighthouse Score

Target metrics:
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 95+
- **SEO:** 95+

## 🐛 Troubleshooting

### Build fails with TypeScript errors
```bash
npm run lint  # Check for type errors
```

### Components not rendering
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Styles not applying
- Ensure Tailwind classes are spelled correctly
- Check `tailwind.config.ts` for color definitions
- Verify PostCSS is running: `npm run dev`

## 📝 License

This portfolio is built as a personal project. Feel free to fork, modify, and use as a template.

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome! Create an issue or reach out directly.

---

**Built with ☕ + late nights 🌙**
