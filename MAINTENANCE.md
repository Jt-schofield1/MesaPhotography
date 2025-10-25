# Site Maintenance Guide

Quick reference for common updates and maintenance tasks.

## 📸 Adding New Photos

### Step 1: Prepare Images
- Export at high quality (JPEG, 2000-3000px wide)
- Name files descriptively: `senior-emma-2024.jpg`
- Keep file sizes under 2MB each

### Step 2: Add to Collection
1. Place images in the appropriate folder:
   - `public/portfolio/seniors/`
   - `public/portfolio/couples/`
   - `public/portfolio/families/`
   - `public/portfolio/minis/`

2. Update `lib/collections.ts`:
```typescript
seniors: {
  // ...
  images: [
    'existing-image.jpg',
    'new-image.jpg',  // Add here
  ],
}
```

### Step 3: Deploy
```bash
git add .
git commit -m "Add new senior session photos"
git push
```

## 💰 Updating Pricing

Edit `content/pricing.json`:

```json
{
  "seniors": [
    {
      "name": "Session Name",
      "price": 150,
      "duration": "90 minutes",
      "locations": 2,
      "outfits": 2,
      "images": "50+ edited photos",
      "delivery": "Online gallery within 2 weeks"
    }
  ]
}
```

Push changes:
```bash
git add content/pricing.json
git commit -m "Update pricing"
git push
```

## ✏️ Updating Text Content

### Home Page
File: `app/page.tsx`
- Update hero text, tagline, or CTAs

### About Page
File: `app/about/page.tsx`
- Update bio, story, or approach

### Contact Info
File: `components/footer.tsx`
- Update social links or location text

## 📱 Social Media Links

Update in `components/footer.tsx`:

```tsx
<a
  href="https://instagram.com/your_handle"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram
</a>
```

## 🎨 Changing Colors

Edit `styles/tokens.css`:

```css
:root {
  --mm-sky: #DFF3FF;     /* Light blue */
  --mm-slate: #7993AC;   /* Blue-gray */
  --mm-peach: #FFBF7D;   /* Warm orange */
  --mm-cream: #FFF0C8;   /* Soft yellow */
  --mm-warm: #D7CCC3;    /* Warm gray */
}
```

## 📧 Updating Email Address

1. Update in `components/contact-form.tsx` (fallback email)
2. Update in `components/footer.tsx`
3. Update in `app/contact/page.tsx`

Search and replace: `mesa@mesamariephotography.com`

## 🔍 SEO Updates

### Page Titles & Descriptions
Each page has metadata at the top:

```typescript
export const metadata: Metadata = generatePageMetadata(
  'Page Title',
  'Page description for search engines and social media.'
);
```

### Sitemap
Automatically generated on build. No manual updates needed.

## 🐛 Common Issues

### Images Not Showing
1. Check filename matches exactly (case-sensitive)
2. Ensure image is in correct folder
3. Clear browser cache (Ctrl+Shift+R)
4. Check Vercel build logs

### Form Not Working
1. Check Formspree dashboard
2. Verify email settings in Formspree
3. Check spam folder for notifications

### Site Not Updating
1. Check Vercel deployment status
2. Wait 1-2 minutes for deployment
3. Hard refresh browser (Ctrl+Shift+R)

## 📊 Monitoring

### Check Site Performance
```bash
npm run build
npm start
```
Then run Lighthouse in Chrome DevTools.

### View Formspree Submissions
1. Log in to [formspree.io](https://formspree.io)
2. View form submissions
3. Set up email notifications

### Analytics
- Vercel Analytics: View in Vercel dashboard
- Google Analytics: View at [analytics.google.com](https://analytics.google.com)

## 🔄 Regular Maintenance

### Weekly
- [ ] Check form submissions
- [ ] Respond to inquiries
- [ ] Post new work on social media

### Monthly
- [ ] Review site analytics
- [ ] Update portfolio with recent sessions
- [ ] Check for broken links

### Quarterly
- [ ] Review and update pricing
- [ ] Refresh about page content
- [ ] Update testimonials

### Yearly
- [ ] Renew domain registration
- [ ] Review color scheme/branding
- [ ] Major portfolio refresh

## 🆘 Getting Help

### Development Issues
- Check [Next.js Docs](https://nextjs.org/docs)
- Search [Stack Overflow](https://stackoverflow.com)
- Contact your developer

### Deployment Issues
- Check [Vercel Docs](https://vercel.com/docs)
- Contact Vercel support

### Content Updates
- Refer to this guide
- Make small changes and test
- Use Git to revert if needed

## 🔐 Backup

Your site is backed up automatically:
- **Git**: Full version history on GitHub
- **Vercel**: All deployments saved
- **Images**: Keep original files separately

To download full backup:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git backup-folder
```

## 💡 Quick Commands

```bash
# Start local development
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint
npm run typecheck

# View Git history
git log --oneline

# Revert to previous version
git revert HEAD
git push
```

---

**Questions?** Keep this guide handy and don't hesitate to reach out for help!

