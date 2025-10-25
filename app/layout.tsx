import type { Metadata } from 'next';
import { Crimson_Pro, Great_Vibes } from 'next/font/google';
import '@/styles/globals.css';
import { defaultMetadata } from '@/lib/seo';

const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-crimson',
  display: 'swap',
});

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

