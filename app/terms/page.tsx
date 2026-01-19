'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 bg-white">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide uppercase"
                style={{ color: 'var(--fg)' }}
              >
                Terms of Service
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <p 
                className="text-sm mb-12"
                style={{ color: 'var(--fg-muted)' }}
              >
                Last updated: January 2026
              </p>

              <div className="space-y-10">
                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Booking & Payment
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    A non-refundable deposit is required to secure your session date. The remaining
                    balance is due on or before the day of your session. Accepted payment methods include
                    Venmo, PayPal, and cash.
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Cancellations & Rescheduling
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    If you need to reschedule, please provide at least 48 hours notice. Cancellations
                    made less than 48 hours before the session will forfeit the deposit. Weather-related
                    cancellations can be rescheduled at no additional cost.
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Photo Delivery
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    Photos will be delivered via an online gallery within 2-3 weeks of your session. You
                    will have full download access to all edited images included in your package.
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Copyright
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    Mesa Marie Photography retains copyright to all images. You are granted a
                    non-exclusive license to use the images for personal use, including printing and
                    sharing on social media with proper credit.
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Social Media Credit
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    When sharing photos on social media, we kindly ask that you tag or credit 
                    @mesamariephotography. This helps support the business and is greatly appreciated!
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Contact
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    Questions about these terms? Contact us at{' '}
                    <a 
                      href="mailto:wentlingmm@gmail.com" 
                      className="underline transition-colors"
                      style={{ color: 'var(--accent)' }}
                    >
                      wentlingmm@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
