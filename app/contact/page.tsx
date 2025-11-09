'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-mm-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <p className="text-3xl md:text-4xl text-[--fg] font-light italic">
                let's create together
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                GET IN TOUCH
              </h1>
              <p className="text-xl md:text-2xl text-[--fg] max-w-2xl mx-auto">
                Ready to book your session? I can't wait to hear from you and learn about your
                vision!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Me a Message</h2>
                  <p className="text-lg text-[--fg]">
                    Fill out the form below and I'll get back to you within 24-48 hours. Let's make
                    something beautiful!
                  </p>
                </div>

                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 md:py-32 bg-mm-sky">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-3"
              >
                  <div className="w-16 h-16 bg-gradient-to-br from-mm-peach to-[#FFD4A3] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[--fg]">Email Me</h3>
                  <a
                    href="mailto:wentlingmm@gmail.com"
                    className="text-mm-slate hover:text-mm-peach transition-colors text-lg block"
                  >
                    wentlingmm@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="space-y-3"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-mm-slate to-mm-slate/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[--fg]">Follow Along</h3>
                  <a
                    href="https://www.instagram.com/mesamariephotography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mm-slate hover:text-mm-peach transition-colors text-lg inline-flex items-center gap-2 justify-center"
                  >
                    @mesamariephotography
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="space-y-3"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-mm-sky to-mm-slate/30 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[--fg]">Location</h3>
                  <p className="text-gray-700 text-lg">
                    NWPA
                    <br />
                    Lake Erie • Pymatuning
                    <br />& Everywhere In Between
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-16 text-center"
              >
                <h3 className="text-2xl font-bold mb-4 text-[--fg]">RESPONSE TIME</h3>
                <p className="text-lg text-gray-700">
                  I typically respond within <span className="font-bold text-[--fg]">24-48 hours</span>.
                  <br />
                  If you don't hear from me, check your spam folder!
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[--fg]">GOT QUESTIONS?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-mm-slate flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-[--fg]">Where do you shoot?</h3>
                  </div>
                  <p className="text-gray-700 pl-9">
                    Primarily around Lake Erie, Pymatuning, and NWPA, but I'm always up for an
                    adventure!
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-mm-slate flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-[--fg]">What's the turnaround time?</h3>
                  </div>
                  <p className="text-gray-700 pl-9">
                    Your edited photos will be delivered in a beautiful online gallery within 2-3
                    weeks.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-mm-slate flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-[--fg]">What's the payment process?</h3>
                  </div>
                  <p className="text-gray-700 pl-9">
                    A deposit secures your date, with the remaining balance due on the day of your
                    session.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-mm-slate flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <h3 className="text-xl font-bold text-[--fg]">Can I customize my session?</h3>
                  </div>
                  <p className="text-gray-700 pl-9">
                    Absolutely! Every session is tailored to YOU. Let's chat about your vision!
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
