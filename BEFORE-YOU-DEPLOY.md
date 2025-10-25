# ⚠️ BEFORE YOU DEPLOY - Critical Checklist

Please complete ALL items below before deploying to production.

## 🔴 CRITICAL (Must Complete)

### 1. Add the Halimum Font
**Status**: ⬜ Not Done

**Location**: `public/fonts/halimum.woff2`

**What to do**:
- Get the Halimum font file (should be in your brand kit)
- Place it in the `public/fonts/` directory
- Name it exactly: `halimum.woff2`

**Alternative** (if you don't have the font):
- Edit `app/layout.tsx`
- Replace Halimum with a Google Font like "Dancing Script"
- See instructions in `public/fonts/FONT-README.txt`

### 2. Update Portfolio Images
**Status**: ⬜ Not Done

**What to do**:
1. Review images in these folders:
   - `public/portfolio/seniors/`
   - `public/portfolio/couples/`
   - `public/portfolio/families/`
   - `public/portfolio/minis/`

2. Update `lib/collections.ts` with correct filenames
3. Make sure cover images exist and paths are correct

**Test**: Run `npm run dev` and check all gallery pages load

### 3. Replace Email Addresses
**Status**: ⬜ Not Done

**Current**: `mesa@mesamariephotography.com`  
**Replace with**: Your actual email

**Files to update**:
- `components/contact-form.tsx` (line ~92)
- `components/footer.tsx`
- `app/contact/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

**Quick find**: Search project for "mesa@mesamariephotography.com"

### 4. Update Social Links
**Status**: ⬜ Not Done

**File**: `components/footer.tsx`

**Update**:
```tsx
href="https://instagram.com/your_actual_handle"
```

Also update:
- `app/contact/page.tsx` (Instagram link)

### 5. Test Contact Form
**Status**: ⬜ Not Done

**What to do**:
1. Run `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check your email for Formspree confirmation
5. Verify you receive the test submission

**If form doesn't work**:
- Check Formspree dashboard
- Verify endpoint: `https://formspree.io/f/mnngbrpv`
- Check browser console for errors

## 🟡 IMPORTANT (Strongly Recommended)

### 6. Create Open Graph Image
**Status**: ⬜ Not Done

**Location**: `public/og-image.jpg`

**Requirements**:
- Size: 1200 x 630 pixels
- Format: JPG
- Content: Your best photo or brand graphic
- Text: "Mesa Marie Photography" visible

**Why**: This image appears when sharing your site on social media

**Tool**: Use Canva.com (free) to create this

### 7. Review All Text Content
**Status**: ⬜ Not Done

**Pages to review**:
- [ ] Home: `app/page.tsx`
- [ ] About: `app/about/page.tsx`
- [ ] Contact: `app/contact/page.tsx`
- [ ] Pricing: `content/pricing.json`
- [ ] Privacy: `app/privacy/page.tsx`
- [ ] Terms: `app/terms/page.tsx`

Make sure all text is accurate and represents you.

### 8. Verify Pricing
**Status**: ⬜ Not Done

**File**: `content/pricing.json`

**Check**:
- All prices are correct
- Durations are accurate
- Package details are complete
- No placeholder text remains

### 9. Replace Headshot
**Status**: ⬜ Not Done

**Current**: `public/me for now.jpeg`

**What to do**:
- Replace with your professional headshot
- Keep the filename or update in `app/about/page.tsx`
- Recommended size: 1000x1000 pixels minimum

### 10. Test on Mobile
**Status**: ⬜ Not Done

**How to test**:
1. Run `npm run dev`
2. Open http://localhost:3000 on your phone
3. Or use Chrome DevTools (F12 → Device Toolbar)

**Check**:
- [ ] Navigation menu works
- [ ] Images load and look good
- [ ] Text is readable
- [ ] Buttons are tap-able
- [ ] Contact form works

## 🟢 NICE TO HAVE (Optional)

### 11. Add More Photos
Consider adding 20-30 photos per collection for a fuller portfolio.

### 12. Customize 404 Page
Edit `app/not-found.tsx` if you want different text.

### 13. Update Favicon
Replace `public/favicon.ico` with your custom icon.

### 14. Write Testimonials
Add a testimonials section to the home page (requires code).

### 15. Set Up Domain
Purchase and configure your custom domain (covered in DEPLOYMENT.md).

## ✅ Pre-Deployment Test

Run this test before deploying:

```bash
# 1. Type check
npm run typecheck

# 2. Lint check  
npm run lint

# 3. Build test
npm run build

# 4. Start production server
npm start

# 5. Test in browser
# Open http://localhost:3000
# Click every link
# Test contact form
# Check mobile view
```

**All tests pass?** ✅ You're ready to deploy!

## 📝 Deployment Readiness Score

Count your checkmarks:

- **10-11 items**: ✅ Ready to deploy!
- **7-9 items**: 🟡 Almost there, complete critical items
- **0-6 items**: 🔴 Not ready yet, work through the list

## 🚀 Ready to Deploy?

Once all CRITICAL and IMPORTANT items are complete:

1. Read `DEPLOYMENT.md`
2. Push to GitHub
3. Deploy on Vercel
4. Celebrate! 🎉

## 🆘 Need Help?

- **Setup issues**: See `GETTING-STARTED.md`
- **Deployment help**: See `DEPLOYMENT.md`
- **General questions**: See `README.md`

## ⏱️ Estimated Time

- Critical items: 1-2 hours
- Important items: 2-3 hours
- Testing: 30 minutes
- **Total**: 3-5 hours

Take your time and do it right. Your website will be worth it!

---

**Pro Tip**: Work through this list methodically. Test after each change. You've got this! 💪

