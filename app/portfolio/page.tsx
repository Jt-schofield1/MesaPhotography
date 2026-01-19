import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import PortfolioPageClient from '@/components/portfolio-page-client';

export const metadata: Metadata = generatePageMetadata(
  'Portfolio',
  'Browse the photography portfolio of Mesa Marie Photography. View stunning senior portraits, couples sessions, family photography, and more from Northwestern Pennsylvania.',
  '/portfolio/couples/Copy of T&J - 9_7-115.jpg',
  '/portfolio'
);

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
