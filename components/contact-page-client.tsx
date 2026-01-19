'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function ContactPageClient() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-light tracking-wide uppercase mb-4 sm:mb-6"
                style={{ color: 'var(--fg)' }}
              >
                Let's Chat
              </h1>
              <p 
                className="text-base sm:text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                Ready to capture your special moments? I'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-8 sm:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6 sm:space-y-8"
              >
                {/* Info Block */}
                <div>
                  <h2 
                    className="text-xl sm:text-2xl font-light tracking-wide uppercase mb-4 sm:mb-6"
                    style={{ color: 'var(--fg)' }}
                  >
                    Get In Touch
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--mm-cream)' }}
                      >
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: 'var(--accent)' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--fg)' }}>Email</p>
                        <a 
                          href="mailto:wentlingmm@gmail.com"
                          className="text-xs sm:text-sm transition-colors hover:underline touch-link"
                          style={{ color: 'var(--accent)' }}
                        >
                          wentlingmm@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--mm-cream)' }}
                      >
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: 'var(--accent)' }}
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--fg)' }}>Instagram</p>
                        <a 
                          href="https://www.instagram.com/mesamariephotography"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm transition-colors hover:underline touch-link"
                          style={{ color: 'var(--accent)' }}
                        >
                          @mesamariephotography
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div 
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--mm-cream)' }}
                      >
                        <svg 
                          className="w-4 h-4 sm:w-5 sm:h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: 'var(--accent)' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base" style={{ color: 'var(--fg)' }}>Location</p>
                        <p className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                          Lake Erie • Pymatuning<br />
                          & Everywhere In Between
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div 
                  className="p-4 sm:p-6 rounded-sm"
                  style={{ backgroundColor: 'var(--mm-cream)' }}
                >
                  <h3 
                    className="text-base sm:text-lg font-medium mb-3 sm:mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    What to Expect
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: 'var(--accent)' }}>✓</span>
                      <span>Response within 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: 'var(--accent)' }}>✓</span>
                      <span>We'll discuss your vision and session details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: 'var(--accent)' }}>✓</span>
                      <span>Custom quote based on your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: 'var(--accent)' }}>✓</span>
                      <span>Outfit & location guidance included</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
