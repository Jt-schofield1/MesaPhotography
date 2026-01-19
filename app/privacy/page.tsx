'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PrivacyPage() {
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
                Privacy Policy
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
                    Information We Collect
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    When you contact us through our contact form, we collect your name, email address,
                    phone number (optional), and any information you provide in your message. This
                    information is used solely to respond to your inquiry and provide photography
                    services.
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    How We Use Your Information
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    We use the information you provide to communicate with you about photography sessions,
                    schedule appointments, and deliver your photos. We never share your personal
                    information with third parties without your explicit consent.
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Photo Usage
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    With your permission, photos from your session may be used for portfolio purposes,
                    social media, and marketing materials. You can opt out at any time by contacting us.
                  </p>
                </div>

                <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--accent)' }}></div>

                <div>
                  <h2 
                    className="text-xl font-medium tracking-wide uppercase mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    Client Galleries
                  </h2>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    Your client gallery is password-protected. Access codes and passwords are shared 
                    only with you via email. We do not share gallery access with unauthorized parties.
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
                    If you have any questions about this privacy policy, please contact us at{' '}
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
