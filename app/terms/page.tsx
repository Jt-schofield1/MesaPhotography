import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Section from '@/components/section';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata('Terms of Service');

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        <Section>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Terms of Service</h1>
            <p className="text-[--muted] mb-8">Last updated: October 25, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Booking & Payment</h2>
            <p className="text-[--muted]">
              A non-refundable deposit is required to secure your session date. The remaining
              balance is due on or before the day of your session. Accepted payment methods include
              Venmo, PayPal, and cash.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Cancellations & Rescheduling</h2>
            <p className="text-[--muted]">
              If you need to reschedule, please provide at least 48 hours notice. Cancellations
              made less than 48 hours before the session will forfeit the deposit. Weather-related
              cancellations can be rescheduled at no additional cost.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Photo Delivery</h2>
            <p className="text-[--muted]">
              Photos will be delivered via an online gallery within 2-3 weeks of your session. You
              will have full download access to all edited images included in your package.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Copyright</h2>
            <p className="text-[--muted]">
              Mesa Marie Photography retains copyright to all images. You are granted a
              non-exclusive license to use the images for personal use, including printing and
              sharing on social media with proper credit.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-[--muted]">
              Questions about these terms? Contact us at{' '}
              <a href="mailto:wentlingmm@gmail.com" className="text-mm-slate underline">
                wentlingmm@gmail.com
              </a>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

