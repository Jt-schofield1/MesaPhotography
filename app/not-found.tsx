'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[100svh] flex items-center justify-center px-6 pt-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p 
            className="font-halimum text-3xl md:text-4xl mb-4"
            style={{ color: 'var(--accent)' }}
          >
            oops!
          </p>
          <div 
            className="text-8xl md:text-9xl font-light mb-8"
            style={{ color: 'var(--fg)' }}
          >
            404
          </div>
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide uppercase mb-6"
            style={{ color: 'var(--fg)' }}
          >
            Page Not Found
          </h1>
          <p 
            className="text-lg md:text-xl mb-10"
            style={{ color: 'var(--fg-muted)' }}
          >
            Looks like this page wandered off somewhere between Lake Erie and Pymatuning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Go Home
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Portfolio
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-4 mt-16">
            <span style={{ color: 'var(--accent)' }}>✶</span>
            <span style={{ color: 'var(--accent)' }}>✶</span>
            <span style={{ color: 'var(--accent)' }}>✶</span>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
