# 🎨 How to Add Your Halimum Font

## Current Status

✅ **Temporary Font**: Great Vibes (Google Font - similar script style)  
⚠️ **Your Font**: Halimum (not yet added)

## Why Use Your Font?

The Halimum font is part of your brand kit and makes your site uniquely yours! It's used for:
- Your tagline: "Created to create."
- Logo text: "Mesa Marie Photography"
- Special accents throughout the site

## How to Add Halimum (2 Minutes)

### Step 1: Get Your Font File

You need the Halimum font in **WOFF2 format**. You should have this from your brand kit.

**If you have Halimum in a different format** (.ttf, .otf, .woff):
1. Go to [CloudConvert](https://cloudconvert.com/woff2-converter)
2. Upload your Halimum font file
3. Convert to WOFF2
4. Download the converted file

### Step 2: Place the Font File

Put `halimum.woff2` in this location:

```
C:\Users\Owner\Documents\Mesa\app\halimum.woff2
```

**Important**: The file must be named exactly `halimum.woff2` (lowercase)

### Step 3: Update the Code

Open `app/layout.tsx` and find these lines (around line 7-17):

```tsx
// Temporary: Using Great Vibes (similar script font) until Halimum is added
// To use Halimum: Place halimum.woff2 in the app/ directory, then uncomment below
// import localFont from 'next/font/local';
// const halimum = localFont({
//   src: './halimum.woff2',
//   variable: '--font-halimum',
//   display: 'swap',
// });

const halimum = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-halimum',
  display: 'swap',
});
```

**Replace with**:

```tsx
import localFont from 'next/font/local';

const halimum = localFont({
  src: './halimum.woff2',
  variable: '--font-halimum',
  display: 'swap',
});
```

**And remove the Great_Vibes import at the top**:

Change this line:
```tsx
import { Crimson_Pro, Great_Vibes } from 'next/font/google';
```

To:
```tsx
import { Crimson_Pro } from 'next/font/google';
```

### Step 4: Restart Dev Server

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 5: Verify

Visit your site and check:
- [ ] Logo uses your Halimum font
- [ ] "Created to create." uses Halimum
- [ ] No font errors in console

## Alternative: Use a Different Script Font

If you don't have Halimum or prefer a different font, you can use any of these Google Fonts:

### Option 1: Dancing Script (Playful)
```tsx
import { Crimson_Pro, Dancing_Script } from 'next/font/google';

const halimum = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-halimum',
  display: 'swap',
});
```

### Option 2: Pacifico (Bold & Friendly)
```tsx
import { Crimson_Pro, Pacifico } from 'next/font/google';

const halimum = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-halimum',
  display: 'swap',
});
```

### Option 3: Allura (Elegant Script)
```tsx
import { Crimson_Pro, Allura } from 'next/font/google';

const halimum = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-halimum',
  display: 'swap',
});
```

## Troubleshooting

### Font file not found error
- Check the file is at: `app/halimum.woff2`
- Check the filename is exactly: `halimum.woff2` (lowercase, correct extension)
- Restart the dev server

### Font looks different
- Make sure you're using the correct Halimum file
- Check if it's the regular/normal weight (not bold/italic)

### Font not loading
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors
- Verify the font file isn't corrupted

## Quick Copy-Paste Code

**When you have halimum.woff2 in the app/ folder**, use this complete code for `app/layout.tsx`:

```tsx
import type { Metadata } from 'next';
import { Crimson_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { defaultMetadata } from '@/lib/seo';

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-crimson',
  display: 'swap',
});

const halimum = localFont({
  src: './halimum.woff2',
  variable: '--font-halimum',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimson.variable} ${halimum.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mesa Marie',
              jobTitle: 'Photographer',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Pennsylvania',
                addressCountry: 'US',
              },
              description:
                'NWPA Photographer typically found on Lake Erie, Pymatuning Lake, and everywhere in between.',
              image: '/og-image.jpg',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mesa-marie.vercel.app',
            }),
          }}
        />
      </body>
    </html>
  );
}
```

---

## Summary

**Current**: Using Great Vibes (temporary Google Font)  
**Your Brand Font**: Halimum  
**To Add**: Place `halimum.woff2` in `app/` folder and update `app/layout.tsx`  
**Time**: 2 minutes

The site works perfectly now with the temporary font, but adding Halimum will make it truly yours! 🎨

