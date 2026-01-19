import type { Metadata, Viewport } from 'next';
import { Crimson_Pro, Great_Vibes } from 'next/font/google';
import '@/styles/globals.css';
import { defaultMetadata, localBusinessSchema, photographerSchema, websiteSchema, faqSchema } from '@/lib/seo';

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-crimson',
  display: 'swap',
});

// Using Great Vibes (similar script font) - can replace with Halimum
const halimum = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-halimum',
  display: 'swap',
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
  colorScheme: 'light',
};

export const metadata: Metadata = {
  ...defaultMetadata,
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Mesa Marie Photography',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimson.variable} ${halimum.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://mesamariephotography.com'} />
      </head>
      <body className="antialiased min-h-screen">
        {children}
        
        {/* Structured Data for SEO & AI Search Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              localBusinessSchema,
              photographerSchema,
              websiteSchema,
              faqSchema,
            ]),
          }}
        />
      </body>
    </html>
  );
}
