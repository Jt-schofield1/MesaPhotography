# Mesa Marie Photography

A modern, beautiful photography portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🌟 Features

### 📱 Mobile-First Design (Priority #1)
- **Optimized for Touch**: 44px+ touch targets, perfect tap areas
- **Beautiful on Phones**: Stunning layouts on all mobile devices
- **Fast Loading**: Optimized images and performance for mobile connections
- **Swipe Gestures**: Native-feeling gallery navigation
- **No Zoom Issues**: Properly sized inputs prevent iOS zoom
- **Mobile-Tested**: Thoroughly tested on iPhone and Android

### ⚡ Performance & Technology
- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS
- **Optimized Images**: Next.js Image with automatic WebP/AVIF conversion
- **Lightning Fast**: Lazy loading, code splitting, optimized fonts
- **Smooth Animations**: Framer Motion with reduced-motion support

### ♿ Accessibility & UX
- **WCAG AA Compliant**: Semantic HTML, keyboard navigation, screen reader friendly
- **SEO Optimized**: Meta tags, Open Graph, structured data, sitemap
- **User-Friendly**: Intuitive navigation, clear CTAs, easy contact form
- **Responsive**: Perfect on any device (320px → 1920px+)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mesa-marie
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
mesa-marie/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── portfolio/           # Portfolio pages
│   ├── pricing/             # Pricing page
│   ├── contact/             # Contact page
│   └── not-found.tsx        # 404 page
├── components/              # Reusable React components
│   ├── header.tsx           # Site header with navigation
│   ├── footer.tsx           # Site footer
│   ├── hero.tsx             # Hero section component
│   ├── gallery-grid.tsx     # Image gallery grid
│   ├── lightbox.tsx         # Image lightbox
│   ├── contact-form.tsx     # Formspree contact form
│   └── ...                  # Other components
├── lib/                     # Utility functions and data
│   ├── collections.ts       # Portfolio collections data
│   ├── seo.ts              # SEO metadata helpers
│   └── utils.ts            # Utility functions
├── public/                  # Static assets
│   ├── portfolio/          # Portfolio images by collection
│   ├── icons/              # SVG icons
│   ├── fonts/              # Custom fonts
│   └── favicon.ico         # Site favicon
├── styles/                  # Global styles
│   ├── globals.css         # Global CSS with Tailwind
│   └── tokens.css          # Design tokens (colors, etc.)
├── content/                 # Content data files
│   └── pricing.json        # Pricing information
└── ...                      # Config files
```

## 🎨 Design System

### Brand Colors

- **Sky**: `#DFF3FF` - Light, airy blue
- **Slate**: `#7993AC` - Muted blue-gray
- **Peach**: `#FFBF7D` - Warm accent
- **Cream**: `#FFF0C8` - Soft background
- **Warm**: `#D7CCC3` - Neutral warm tone

### Typography

- **Primary Font**: Crimson Pro (Google Fonts)
- **Accent Font**: Halimum (custom script font)

### Motion

- Animations use `cubic-bezier(0.22, 1, 0.36, 1)` easing
- Duration: 0.6-0.8s for most animations
- Respects `prefers-reduced-motion`

## 📝 Content Management

### Adding Portfolio Images

1. Place images in the appropriate collection folder:
   - `public/portfolio/seniors/`
   - `public/portfolio/couples/`
   - `public/portfolio/families/`
   - `public/portfolio/minis/`

2. Update the collection in `lib/collections.ts`:
```typescript
seniors: {
  id: 'seniors',
  title: 'Seniors',
  images: [
    'image1.jpg',
    'image2.jpg',
    // Add new images here
  ],
}
```

### Updating Pricing

Edit `content/pricing.json` to update pricing information:

```json
{
  "seniors": [
    {
      "name": "Session Name",
      "price": 100,
      "duration": "60 minutes",
      "images": "Description"
    }
  ]
}
```

### Customizing Content

- **Hero Section**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Footer Links**: Edit `components/footer.tsx`

## 📧 Contact Form Setup

The contact form uses Formspree. The endpoint is already configured in `components/contact-form.tsx`:

```typescript
const endpoint = 'https://formspree.io/f/mnngbrpv';
```

Form fields map to:
- `name`: Contact name
- `email`: Contact email
- `phone`: Phone number (optional)
- `sessionType`: Session type dropdown
- `date`: Preferred date
- `location`: Location preference
- `message`: Message text
- `_gotcha`: Honeypot field (spam prevention)
- `_subject`: Email subject line

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and import your repository

3. Configure environment variables in Vercel:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain

4. Deploy! Vercel will automatically build and deploy your site

### Custom Domain

1. In Vercel, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## ⚡ Performance Optimization

### Images

- All images use Next.js Image component
- Automatic WebP/AVIF conversion
- Lazy loading by default
- Responsive sizes attribute

### Code Splitting

- Automatic route-based code splitting
- Dynamic imports for heavy components

### Fonts

- Self-hosted custom fonts with `next/font`
- Font display swap for better performance

## 🎯 Lighthouse Goals

Target scores (all should pass):
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

Run Lighthouse in Chrome DevTools or use:
```bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🐛 Troubleshooting

### Images not loading

- Ensure images are in the correct `public/portfolio/` subdirectories
- Check that filenames in `lib/collections.ts` match exactly (case-sensitive)
- Restart the dev server after adding new images

### Form not submitting

- Check that the Formspree endpoint is correct
- Verify network requests in browser DevTools
- Ensure CORS is not blocking requests

### Build errors

- Run `npm run typecheck` to find TypeScript errors
- Check that all imports are correct
- Ensure all required dependencies are installed

## 📄 License

© 2025 Mesa Marie Photography. All rights reserved.

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Forms by [Formspree](https://formspree.io/)
- Icons from [Lucide](https://lucide.dev/)

---

**Need help?** Contact mesa@mesamariephotography.com

