import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Section from '@/components/section';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata('Privacy Policy');

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        <Section>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Privacy Policy</h1>
            <p className="text-[--muted] mb-8">Last updated: October 25, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="text-[--muted]">
              When you contact us through our contact form, we collect your name, email address,
              phone number (optional), and any information you provide in your message. This
              information is used solely to respond to your inquiry and provide photography
              services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-[--muted]">
              We use the information you provide to communicate with you about photography sessions,
              schedule appointments, and deliver your photos. We never share your personal
              information with third parties without your explicit consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Photo Usage</h2>
            <p className="text-[--muted]">
              With your permission, photos from your session may be used for portfolio purposes,
              social media, and marketing materials. You can opt out at any time by contacting us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-[--muted]">
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href="mailto:mesa@mesamariephotography.com" className="text-mm-slate underline">
                mesa@mesamariephotography.com
              </a>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

