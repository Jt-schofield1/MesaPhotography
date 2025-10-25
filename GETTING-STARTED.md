# Getting Started - Quick Setup Guide

Welcome! This guide will help you get your photography website up and running quickly.

## 🎯 Before You Start

You'll need:
- [ ] Computer with internet connection
- [ ] GitHub account (free)
- [ ] Vercel account (free)
- [ ] Halimum font file (or alternative font)
- [ ] Your photography portfolio images

## 📋 Step-by-Step Setup

### Step 1: Install Required Software (5 minutes)

#### Install Node.js
1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS version (recommended)
3. Run the installer
4. Verify installation:
```bash
node --version
npm --version
```

#### Install Git
1. Go to [git-scm.com](https://git-scm.com)
2. Download and install
3. Verify:
```bash
git --version
```

### Step 2: Set Up the Project (10 minutes)

1. **Download the code**
   - If you received a ZIP file, extract it
   - Or clone from GitHub:
   ```bash
   git clone <repository-url>
   cd mesa-marie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will take 2-3 minutes.

3. **Add your font**
   - Place `halimum.woff2` in `public/fonts/`
   - Or follow instructions in `public/fonts/FONT-README.txt` to use a different font

4. **Add your photos** (see detailed instructions below)

### Step 3: Add Your Portfolio Photos (15 minutes)

1. **Prepare your images**
   - Export as JPEG, 2000-3000px wide
   - High quality (80-90%)
   - Keep under 2MB per image

2. **Organize into folders**
   ```
   public/portfolio/
   ├── seniors/     (senior session photos)
   ├── couples/     (engagement/couple photos)
   ├── families/    (family session photos)
   └── minis/       (mini session photos)
   ```

3. **Update the collections file**
   
   Open `lib/collections.ts` and update the image filenames:

   ```typescript
   seniors: {
     id: 'seniors',
     title: 'Seniors',
     description: 'Celebrating your milestone with timeless portraits',
     cover: '/portfolio/seniors/your-cover-image.jpg',
     images: [
       'image1.jpg',
       'image2.jpg',
       'image3.jpg',
       // Add all your image filenames here
     ],
   },
   ```

   Repeat for `couples`, `families`, and `minis`.

### Step 4: Customize Your Content (10 minutes)

1. **Update pricing**
   
   Edit `content/pricing.json` with your actual pricing.

2. **Replace headshot**
   
   Replace `public/me for now.jpeg` with your professional headshot.

3. **Update email addresses**
   
   Search for `mesa@mesamariephotography.com` and replace with your email.

4. **Update social links**
   
   In `components/footer.tsx`, update your Instagram handle.

### Step 5: Test Locally (5 minutes)

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open in browser**
   
   Go to [http://localhost:3000](http://localhost:3000)

3. **Test everything**
   - [ ] All pages load
   - [ ] Images display correctly
   - [ ] Navigation works
   - [ ] Contact form appears (don't submit yet)
   - [ ] Mobile responsive (resize browser)

### Step 6: Deploy to Production (20 minutes)

Follow the detailed guide in `DEPLOYMENT.md`, but here's the quick version:

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Wait 2-3 minutes ☕

3. **Your site is live!** 🎉

## ✅ Post-Launch Checklist

- [ ] Test contact form (send yourself a test message)
- [ ] Share site on social media
- [ ] Update Instagram bio with website link
- [ ] Submit to Google Search Console
- [ ] Set up domain (if purchased)
- [ ] Send launch announcement to clients

## 🎓 Learning the Basics

### Making Updates

Every time you want to update your site:

1. Make changes to files
2. Test locally (`npm run dev`)
3. Commit and push:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```
4. Vercel automatically deploys

### File Structure

Key files you'll edit:
```
mesa-marie/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   └── contact/page.tsx      # Contact page
├── components/
│   ├── header.tsx            # Navigation
│   └── footer.tsx            # Footer
├── content/
│   └── pricing.json          # Pricing info
├── lib/
│   └── collections.ts        # Portfolio images
└── public/
    └── portfolio/            # Your photos
```

## 🆘 Troubleshooting

### "npm: command not found"
Install Node.js (see Step 1)

### Images not loading
- Check filenames match exactly (case-sensitive!)
- Ensure images are in correct folders
- Restart dev server (`Ctrl+C`, then `npm run dev`)

### Port already in use
Someone's using port 3000. Try:
```bash
npm run dev -- --port 3001
```

### Can't push to GitHub
1. Check you've added the remote:
   ```bash
   git remote -v
   ```
2. Ensure you're logged in to GitHub
3. Check repository permissions

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Maintenance**: See `MAINTENANCE.md`
- **Next.js Tutorial**: [nextjs.org/learn](https://nextjs.org/learn)
- **Git Tutorial**: [git-scm.com/book](https://git-scm.com/book)

## 💬 Getting Help

Stuck? Here's what to do:

1. **Check the error message** - Often tells you exactly what's wrong
2. **Google the error** - Someone's probably solved it
3. **Check documentation** - README.md has detailed instructions
4. **Ask your developer** - They're here to help!

## 🎉 You're Ready!

Take your time with each step. It's okay if things don't work perfectly the first time. Every developer encounters issues - it's part of the process.

Most importantly: **Have fun!** This is your portfolio, make it yours.

---

**Next Steps:**
1. Complete the setup above
2. Read `DEPLOYMENT.md` for deployment details
3. Bookmark `MAINTENANCE.md` for future updates

**Questions?** Don't hesitate to ask for help!

