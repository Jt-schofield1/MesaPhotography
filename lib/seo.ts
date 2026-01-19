import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mesamariephotography.com';
const siteName = 'Mesa Marie Photography';
const defaultDescription = 'Professional photography services in Northwestern Pennsylvania. Mesa Marie Photography specializes in senior portraits, couples sessions, family photography, and mini sessions near Lake Erie, Pymatuning Lake, and surrounding areas.';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mesa Marie Photography | Professional NWPA Photographer',
    template: '%s | Mesa Marie Photography',
  },
  description: defaultDescription,
  keywords: [
    // Location keywords
    'NWPA photographer',
    'Northwestern Pennsylvania photographer',
    'Lake Erie photographer',
    'Pymatuning Lake photographer',
    'Erie PA photographer',
    'Meadville PA photographer',
    // Service keywords
    'senior portrait photographer',
    'couples photographer',
    'family photographer',
    'mini session photographer',
    'graduation photography',
    'engagement photography',
    // Style keywords
    'natural light photography',
    'outdoor photography',
    'lifestyle photography',
    'professional portraits',
  ],
  authors: [{ name: 'Mesa Marie', url: siteUrl }],
  creator: 'Mesa Marie Photography',
  publisher: 'Mesa Marie Photography',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: 'Mesa Marie Photography | Professional NWPA Photographer',
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Mesa Marie Photography - Professional portraits in Northwestern Pennsylvania',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mesa Marie Photography | Professional NWPA Photographer',
    description: defaultDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@mesamariephoto',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Photography',
  classification: 'Business',
};

// Page-specific metadata generator
export function generatePageMetadata(
  title: string,
  description?: string,
  image?: string,
  path?: string
): Metadata {
  const pageDescription = description || defaultDescription;
  const pageUrl = path ? `${siteUrl}${path}` : siteUrl;

  return {
    title,
    description: pageDescription,
    openGraph: {
      title: `${title} | Mesa Marie Photography`,
      description: pageDescription,
      url: pageUrl,
      images: image 
        ? [{ url: image.startsWith('http') ? image : `${siteUrl}${image}`, width: 1200, height: 630, alt: title }] 
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      title: `${title} | Mesa Marie Photography`,
      description: pageDescription,
      images: image ? [image.startsWith('http') ? image : `${siteUrl}${image}`] : defaultMetadata.twitter?.images,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// Structured Data for Local Business (Photography Studio)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'Mesa Marie Photography',
  alternateName: 'Mesa Marie',
  description: defaultDescription,
  url: siteUrl,
  telephone: '',
  email: 'wentlingmm@gmail.com',
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/og-image.jpg`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Pennsylvania',
    addressCountry: 'US',
    areaServed: [
      { '@type': 'State', name: 'Pennsylvania' },
      { '@type': 'City', name: 'Erie' },
      { '@type': 'City', name: 'Meadville' },
    ],
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.88,
    longitude: -80.08,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 41.88,
      longitude: -80.08,
    },
    geoRadius: '50 mi',
  },
  sameAs: [
    'https://www.instagram.com/mesamariephotography',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '20:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Photography Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Senior Portrait Photography',
          description: 'Professional senior portrait sessions for high school graduates',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Couples Photography',
          description: 'Engagement and couples photography sessions',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Family Photography',
          description: 'Family portrait sessions for all ages',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mini Sessions',
          description: 'Quick and affordable mini photo sessions',
        },
      },
    ],
  },
};

// Photographer schema
export const photographerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Mesa Marie',
  jobTitle: 'Professional Photographer',
  description: 'Professional photographer specializing in senior portraits, couples, families, and mini sessions in Northwestern Pennsylvania.',
  image: `${siteUrl}/me for now.jpeg`,
  url: siteUrl,
  email: 'wentlingmm@gmail.com',
  sameAs: [
    'https://www.instagram.com/mesamariephotography',
  ],
  worksFor: {
    '@id': `${siteUrl}/#business`,
  },
  knowsAbout: [
    'Portrait Photography',
    'Natural Light Photography',
    'Outdoor Photography',
    'Senior Portraits',
    'Couples Photography',
    'Family Photography',
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Pennsylvania',
    addressCountry: 'US',
  },
};

// Website schema for AI/search engines
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: defaultDescription,
  publisher: {
    '@id': `${siteUrl}/#person`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/portfolio?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
};

// Image Gallery schema for portfolio pages
export function generateGallerySchema(
  name: string, 
  description: string, 
  images: string[],
  path: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name,
    description,
    url: `${siteUrl}${path}`,
    image: images.map((img, index) => ({
      '@type': 'ImageObject',
      url: img.startsWith('http') ? img : `${siteUrl}${img}`,
      name: `${name} - Photo ${index + 1}`,
      contentUrl: img.startsWith('http') ? img : `${siteUrl}${img}`,
    })),
    author: {
      '@id': `${siteUrl}/#person`,
    },
    provider: {
      '@id': `${siteUrl}/#business`,
    },
  };
}

// FAQ Schema for common questions
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where does Mesa Marie Photography offer services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mesa Marie Photography serves Northwestern Pennsylvania, including areas around Lake Erie, Pymatuning Lake, Erie, Meadville, and everywhere in between.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of photography sessions are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mesa Marie Photography offers senior portrait sessions, couples/engagement photography, family sessions, and mini sessions. Each session is customized to capture your unique story.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a photography session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book a session by visiting the Contact page and filling out the inquiry form, or by emailing wentlingmm@gmail.com directly. A deposit is required to secure your session date.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to receive photos after a session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photos are typically delivered within 2-3 weeks after your session via a private online gallery where you can view and download your images.',
      },
    },
  ],
};

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}