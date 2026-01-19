import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import AboutPageClient from '@/components/about-page-client';

export const metadata: Metadata = generatePageMetadata(
  'About Mesa Marie',
  'Meet Mesa Marie, a Northwestern Pennsylvania photographer specializing in authentic, natural light photography. Learn about her style, approach, and passion for capturing genuine moments.',
  '/for about me page.png',
  '/about'
);

export default function AboutPage() {
  return <AboutPageClient />;
}
