import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ContactPageClient from '@/components/contact-page-client';

export const metadata: Metadata = generatePageMetadata(
  'Contact',
  'Get in touch with Mesa Marie Photography to book your photography session. Serving Lake Erie, Pymatuning Lake, and Northwestern Pennsylvania for senior portraits, couples, and family sessions.',
  '/og-image.jpg',
  '/contact'
);

export default function ContactPage() {
  return <ContactPageClient />;
}
