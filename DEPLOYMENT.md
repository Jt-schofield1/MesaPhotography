# Deployment Guide for Mesa Marie Photography

This guide will walk you through deploying your photography portfolio to Vercel.

## Pre-Deployment Checklist

### 1. Add the Halimum Font
- [ ] Place `halimum.woff2` in `public/fonts/`
- [ ] Or update `app/layout.tsx` to use an alternative font

### 2. Create an Open Graph Image
- [ ] Create a 1200x630px image showcasing your best work
- [ ] Save it as `public/og-image.jpg`
- [ ] This will be used when sharing your site on social media

### 3. Test Locally
```bash
npm run build
npm start
```
- [ ] Visit http://localhost:3000 and test all pages
- [ ] Test the contact form
- [ ] Check responsive design on mobile
- [ ] Verify all images load correctly

### 4. Run Quality Checks
```bash
npm run lint
npm run typecheck
```
- [ ] Fix any errors that appear

## Deploy to Vercel

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `mesa-marie-photography`
3. Make it private if you prefer

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Mesa Marie Photography website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (use GitHub login for easier integration)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings

### Step 4: Configure Environment Variables

In the Vercel project settings:

1. Go to "Settings" → "Environment Variables"
2. Add these variables:

```
Name: NEXT_PUBLIC_SITE_URL
Value: https://your-domain.com (or your vercel URL)
```

### Step 5: Deploy!

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site is live! 🎉

## Custom Domain Setup

### Option 1: Buy Domain Through Vercel
1. In your Vercel project, go to "Settings" → "Domains"
2. Click "Buy Domain"
3. Search for available domains
4. Complete purchase
5. Vercel automatically configures DNS

### Option 2: Use Existing Domain
1. Go to "Settings" → "Domains" in Vercel
2. Enter your domain name
3. Follow Vercel's DNS configuration instructions
4. Add the provided DNS records to your domain registrar:
   - Usually an A record pointing to Vercel's IP
   - Or a CNAME record pointing to your Vercel domain

Popular domain registrars:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### DNS Configuration Example

For a domain like `mesamariephotography.com`:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

*Note: Actual values will be provided by Vercel*

### SSL Certificate
Vercel automatically provides and renews SSL certificates for all domains. No configuration needed!

## Post-Deployment

### 1. Verify Everything Works
- [ ] Visit your live site
- [ ] Test the contact form (send a real test inquiry)
- [ ] Check all pages load correctly
- [ ] Test on mobile devices
- [ ] Share a link on social media to verify Open Graph image

### 2. Set Up Analytics (Optional)

#### Vercel Analytics
1. In Vercel project settings, enable "Analytics"
2. Free tier includes basic metrics
3. View analytics in the Vercel dashboard

#### Google Analytics (Optional)
1. Create a Google Analytics property
2. Get your measurement ID (G-XXXXXXXXXX)
3. Add it to your site by creating `app/analytics.tsx`:

```tsx
// app/analytics.tsx
import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  )
}
```

4. Import in `app/layout.tsx`

### 3. Submit to Search Engines

#### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (use the HTML tag method)
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

#### Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 4. Set Up Social Media
- [ ] Update Instagram bio with website link
- [ ] Share launch post on Instagram
- [ ] Create a Facebook page (optional)
- [ ] Add website to business listings

## Automatic Deployments

Good news! Every time you push to your `main` branch on GitHub, Vercel will automatically:
1. Build your site
2. Run tests
3. Deploy to production

This means updating your site is as easy as:
```bash
git add .
git commit -m "Update pricing"
git push
```

## Rollbacks

If something goes wrong:
1. Go to your Vercel project dashboard
2. Click on "Deployments"
3. Find a previous working deployment
4. Click "..." → "Promote to Production"

## Performance Monitoring

### Vercel Speed Insights
1. Enable in project settings
2. View Core Web Vitals
3. Monitor real user metrics

### Lighthouse CI
Run locally to check performance:
```bash
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Troubleshooting

### Build Fails
- Check the build logs in Vercel
- Run `npm run build` locally to reproduce
- Common issues:
  - TypeScript errors
  - Missing images
  - Missing environment variables

### Images Not Loading
- Ensure images are committed to Git
- Check file paths are correct (case-sensitive)
- Verify images are in the `public/` directory

### Form Not Working
- Check Formspree dashboard for submissions
- Verify endpoint URL is correct
- Check browser console for errors
- Test with curl:
```bash
curl -X POST https://formspree.io/f/mnngbrpv \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","name":"Test","message":"Test"}'
```

### Domain Not Working
- DNS changes can take up to 48 hours
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Verify DNS records match Vercel's instructions

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Formspree Support**: [help.formspree.io](https://help.formspree.io)

## Costs

- **Vercel**: Free tier is perfect for this site
- **Domain**: $10-15/year (if purchasing separately)
- **Formspree**: Free tier (50 submissions/month)

Total monthly cost: **$0** (using free tiers)

---

**Need help?** Contact your developer or reach out to Vercel support.

