import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import PricingPageClient from '@/components/pricing-page-client';

export const metadata: Metadata = generatePageMetadata(
  'Services & Pricing',
  'View photography session pricing and packages from Mesa Marie Photography. Senior portraits, couples sessions, family photography, and mini sessions in Northwestern Pennsylvania.',
  '/portfolio/seniors/ElisaGrad-046.jpg',
  '/pricing'
);

export default function PricingPage() {
  return <PricingPageClient />;
}
