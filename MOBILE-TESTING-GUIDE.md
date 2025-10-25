# 📱 Mobile Testing Guide - Step by Step

## Quick Mobile Test (5 Minutes)

Use this for a fast mobile check:

### Using Chrome DevTools

1. **Open your site**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000

2. **Open DevTools**
   - Press `F12` (Windows/Linux)
   - Press `Cmd+Option+I` (Mac)

3. **Enable Device Toolbar**
   - Click the device icon (top-left of DevTools)
   - Or press `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac)

4. **Test These Devices**

   **iPhone SE (Small Phone)**
   - Select "iPhone SE" from dropdown
   - Check: Text is readable, buttons are tap-able
   - Test: Navigation menu, gallery, contact form

   **iPhone 14 Pro (Standard Phone)**
   - Select "iPhone 14 Pro"
   - Check: Layout looks balanced
   - Test: All features work smoothly

   **iPad (Tablet)**
   - Select "iPad"
   - Check: Uses 2-column layouts appropriately
   - Test: Gallery grid shows multiple columns

   **Responsive Mode**
   - Drag the width handle
   - Test from 320px → 1920px
   - Watch for layout breaks

### Quick Checklist

Go through each page and check:

#### Home Page
- [ ] Hero image fills screen nicely
- [ ] Logo and menu button visible
- [ ] "Created to create" readable
- [ ] CTAs ("View Portfolio", "Book Session") easy to tap
- [ ] Collection cards stack nicely
- [ ] No text overflow
- [ ] No horizontal scrolling

#### Portfolio Page
- [ ] Collections show as single column on phone
- [ ] Images are sharp
- [ ] Cards are easy to tap
- [ ] Loading is fast

#### Gallery Pages
- [ ] Images load progressively
- [ ] Tap image → lightbox opens
- [ ] Swipe left/right works
- [ ] Tap outside → closes
- [ ] No lag when swiping

#### About Page
- [ ] Headshot loads
- [ ] Text is readable
- [ ] Layout is balanced
- [ ] CTAs are visible

#### Pricing Page
- [ ] Price cards stack nicely
- [ ] Text is readable
- [ ] "Book This Session" buttons easy to tap
- [ ] Tables/lists format correctly

#### Contact Page
- [ ] Form inputs are large enough
- [ ] Tap input → no screen zoom
- [ ] Dropdown works
- [ ] Submit button is prominent
- [ ] Success message shows

## Full Mobile Test (20 Minutes)

### Test on Real Device (Recommended)

#### Setup (One Time)

1. **Find your computer's IP address**

   **Windows**:
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" (looks like 192.168.1.xxx)

   **Mac/Linux**:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```

2. **Make sure dev server is running**
   ```bash
   npm run dev
   ```

3. **Connect your phone to same WiFi** as your computer

4. **Visit on phone**
   - Open Safari (iPhone) or Chrome (Android)
   - Go to: `http://YOUR_IP:3000`
   - Example: `http://192.168.1.100:3000`

#### Testing Steps

**1. First Impression (30 seconds)**
   - [ ] Site loads quickly (< 3 seconds)
   - [ ] Hero looks beautiful
   - [ ] Text is sharp and readable
   - [ ] No weird layout issues

**2. Navigation (2 minutes)**
   - [ ] Tap menu icon → opens
   - [ ] Tap each link → goes to correct page
   - [ ] Tap menu icon → closes
   - [ ] Tap logo → goes home
   - [ ] Scroll down → header gets background
   - [ ] All links are easy to tap (no mis-taps)

**3. Home Page (3 minutes)**
   - [ ] Scroll through entire page smoothly
   - [ ] Hero image is beautiful
   - [ ] Slogan is visible and pretty
   - [ ] Location text is readable
   - [ ] Collection cards look good
   - [ ] Tap each card → goes to gallery
   - [ ] CTAs are easy to tap
   - [ ] Everything loads fast

**4. Portfolio Browsing (5 minutes)**
   - [ ] Visit Portfolio page
   - [ ] All collections visible
   - [ ] Images are sharp (pinch to verify)
   - [ ] Tap a collection → opens gallery
   - [ ] Gallery loads quickly
   - [ ] Images in grid look good
   - [ ] Tap image → lightbox opens
   - [ ] Swipe left → next image
   - [ ] Swipe right → previous image
   - [ ] Tap outside → closes
   - [ ] Pinch to zoom works
   - [ ] No lag or stuttering
   - [ ] Try all 4 collections

**5. About Page (2 minutes)**
   - [ ] Headshot loads and looks good
   - [ ] All text is readable
   - [ ] Approach section is clear
   - [ ] Location section visible
   - [ ] CTAs work

**6. Pricing Page (3 minutes)**
   - [ ] All price cards visible
   - [ ] Prices are clear
   - [ ] Details are readable
   - [ ] "Book This Session" buttons work
   - [ ] Scroll through all sections
   - [ ] "What's Included" section clear

**7. Contact Form (5 minutes)**
   - [ ] Form is visible
   - [ ] Tap name input → keyboard appears
   - [ ] Screen doesn't zoom when tapping inputs
   - [ ] Type in each field
   - [ ] Email field → email keyboard
   - [ ] Phone field → number keyboard
   - [ ] Date field → date picker
   - [ ] Session type dropdown works
   - [ ] Message field allows multiline
   - [ ] Try submitting empty → shows errors
   - [ ] Fill correctly → submits
   - [ ] Success message appears
   - [ ] Check your email for submission

**8. Rotate to Landscape (1 minute)**
   - [ ] Rotate phone sideways
   - [ ] Layout still looks good
   - [ ] Nothing is cut off
   - [ ] Forms still work
   - [ ] Gallery still navigates

**9. Different Speeds (2 minutes)**
   - [ ] Turn off WiFi → use cellular
   - [ ] Visit site → still loads (slower but works)
   - [ ] Images load progressively
   - [ ] No broken images
   - [ ] Turn WiFi back on

**10. Back Button (1 minute)**
   - [ ] Navigate deep: Home → Portfolio → Gallery
   - [ ] Press back button → goes to previous page
   - [ ] Press again → goes back again
   - [ ] Works as expected throughout site

### Common Issues to Look For

❌ **Text too small** → Let me know, we'll increase font size  
❌ **Buttons hard to tap** → We'll make them bigger  
❌ **Inputs cause zoom** → We'll adjust input font size  
❌ **Images blurry** → We'll check image quality  
❌ **Slow loading** → We'll optimize images  
❌ **Horizontal scroll** → We'll fix width issues  
❌ **Menu doesn't work** → We'll debug JavaScript  
❌ **Form won't submit** → We'll check Formspree  

## Browser-Specific Testing

### iPhone (Safari) - Critical
- [ ] Test on Safari (primary browser for iPhone)
- [ ] Test on latest iOS version
- [ ] Check if older iOS version needed

### Android (Chrome) - Critical
- [ ] Test on Chrome (primary browser for Android)
- [ ] Test on latest Android version
- [ ] Check Samsung Internet (if available)

### Tablet Testing
- [ ] iPad (Safari)
- [ ] Android Tablet (Chrome)
- [ ] Check both portrait and landscape

## Performance Testing

### Using Lighthouse (Mobile)

1. **Open Chrome DevTools**
2. **Go to Lighthouse tab**
3. **Select**:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
   - ✅ Mobile
4. **Click "Analyze page load"**
5. **Wait for results**

### Target Scores (Mobile)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### If Scores Are Low

**Performance < 90**:
- Check image sizes (should be optimized)
- Check JavaScript (should be minimal)
- Run `npm run build` for production test

**Accessibility < 95**:
- Check color contrast
- Check image alt text
- Check heading hierarchy

**Best Practices < 95**:
- Check console for errors
- Check HTTPS (production only)
- Check external links

**SEO < 95**:
- Check meta descriptions
- Check page titles
- Check heading structure

## Network Speed Testing

### Simulate Slow Connection

1. **Open DevTools** (F12)
2. **Go to Network tab**
3. **Throttling dropdown** (top of Network tab)
4. **Select "Slow 3G"**
5. **Reload page**
6. **Check**:
   - [ ] Page still loads
   - [ ] Images load progressively
   - [ ] No errors
   - [ ] Usable while loading

### Test Various Speeds
- **Fast 3G**: Typical mobile
- **Slow 3G**: Poor connection
- **Offline**: Airplane mode (should show error gracefully)

## Screen Size Testing

### Minimum Width: 320px (iPhone SE)
- [ ] Everything fits
- [ ] No horizontal scroll
- [ ] Text is readable
- [ ] Buttons are tap-able

### Common Phone Sizes
- [ ] 375px (iPhone X/11/12/13)
- [ ] 390px (iPhone 14)
- [ ] 393px (Pixel 5)
- [ ] 414px (iPhone Plus models)
- [ ] 428px (iPhone Pro Max)

### Tablet Sizes
- [ ] 768px (iPad portrait)
- [ ] 810px (iPad Air portrait)
- [ ] 1024px (iPad landscape)

## Accessibility Testing

### Using Keyboard on Mobile

**External keyboard test** (if available):
- [ ] Tab through all links
- [ ] Tab through form fields
- [ ] Enter submits forms
- [ ] Escape closes lightbox

### Using Screen Reader

**iPhone VoiceOver**:
1. Settings → Accessibility → VoiceOver → On
2. Test: Can navigate entire site
3. Test: All images have alt text
4. Test: Forms have proper labels

**Android TalkBack**:
1. Settings → Accessibility → TalkBack → On
2. Same tests as iPhone

## Recording Issues

When you find a problem, document it:

### Screenshot
- Take a screenshot
- Note device name
- Note what's wrong

### Screen Recording
- Record the issue
- Show steps to reproduce
- Include audio description if helpful

### Details to Include
- Device: iPhone 14 Pro
- OS: iOS 17.1
- Browser: Safari
- Issue: Button too small to tap
- Page: Contact page
- Screenshot: [attach]

## After Testing

### Green Light ✅
If everything above passes, you're ready to deploy!

### Red Light ❌
If you found issues:
1. Document each problem
2. Let me know
3. We'll fix them
4. Re-test

### Yellow Light 🟡
Minor issues only:
- Document them
- Decide if blocking launch
- Can fix after launch if minor

## Regular Testing Schedule

After launch, test monthly:

### Quick Test (Monthly)
- [ ] Test on your phone
- [ ] Check all pages load
- [ ] Test contact form
- [ ] Verify images load

### Full Test (Quarterly)
- [ ] Run full test above
- [ ] Check performance scores
- [ ] Test on new devices
- [ ] Update if needed

---

## 🎯 Summary

**Minimum Before Launch**:
1. ✅ DevTools test on multiple device sizes
2. ✅ Real device test on your phone
3. ✅ Contact form submission test
4. ✅ Gallery/lightbox test
5. ✅ Lighthouse performance > 90

**Nice to Have**:
- Test on multiple real devices
- Test on different browsers
- Test on slow network
- Test with screen reader
- Get friends to test

**Remember**: Your site is built mobile-first, so it should work great out of the box. This testing helps catch any issues before your clients see them!

---

**Questions?** Refer to MOBILE-OPTIMIZATION.md for detailed mobile features.

