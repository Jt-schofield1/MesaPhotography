import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mesa-marie.vercel.app';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mesa Marie Photography | NWPA Photographer',
    template: '%s | Mesa Marie Photography',
  },
  description:
    'Mesa Marie Photography - NWPA Photographer typically found on Lake Erie, Pymatuning Lake, and everywhere in between. Specializing in seniors, couples, families, and mini sessions.',
  keywords: [
    'photography',
    'NWPA photographer',
    'Lake Erie photographer',
    'senior photography',
    'couples photography',
    'family photography',
    'Pennsylvania photographer',
  ],
  authors: [{ name: 'Mesa Marie' }],
  creator: 'Mesa Marie',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mesa Marie Photography',
    title: 'Mesa Marie Photography | NWPA Photographer',
    description:
      'Mesa Marie Photography - NWPA Photographer typically found on Lake Erie, Pymatuning Lake, and everywhere in between.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mesa Marie Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesa Marie Photography | NWPA Photographer',
    description:
      'NWPA Photographer typically found on Lake Erie, Pymatuning Lake, and everywhere in between.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generatePageMetadata(
  title: string,
  description?: string,
  image?: string
): Metadata {
  const defaultDesc = typeof defaultMetadata.description === 'string' 
    ? defaultMetadata.description 
    : 'Mesa Marie Photography - NWPA Photographer';

  return {
    title,
    description: description || defaultDesc,
    openGraph: {
      title,
      description: description || defaultDesc,
      images: image ? [{ url: image }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      title,
      description: description || defaultDesc,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
  };
}

