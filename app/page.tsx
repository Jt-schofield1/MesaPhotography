import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import HomePageClient from '@/components/home-page-client';

export const metadata: Metadata = generatePageMetadata(
  'Home',
  'Mesa Marie Photography - Professional photography services in Northwestern Pennsylvania. Specializing in senior portraits, couples sessions, family photography, and mini sessions near Lake Erie and Pymatuning Lake.',
  '/og-image.jpg',
  '/'
);

export default function HomePage() {
  return <HomePageClient />;
}
