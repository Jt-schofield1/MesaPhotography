'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function GalleriesAccess() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/access/resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode: code }),
      });

      const data = await response.json();

      if (response.ok && data.slug) {
        router.push(`/galleries/${data.slug}`);
      } else {
        setError(data.error || 'Invalid access code');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pt-24 pb-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-lg mx-auto pt-12 md:pt-20"
          >
            <p 
              className="font-halimum text-2xl md:text-3xl mb-4"
              style={{ color: 'var(--accent)' }}
            >
              welcome back
            </p>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide uppercase mb-6"
              style={{ color: 'var(--fg)' }}
            >
              Client Galleries
            </h1>
            <p 
              className="text-lg mb-12"
              style={{ color: 'var(--fg-muted)' }}
            >
              Enter your unique access code to view your photos
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Enter Access Code"
                className="w-full px-6 py-4 text-center text-lg uppercase tracking-widest border border-gray-200 rounded-sm bg-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-300"
                style={{ color: 'var(--fg)' }}
                required
                disabled={loading}
                maxLength={20}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-sm uppercase tracking-widest text-white transition-all duration-500 disabled:opacity-50"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {loading ? 'Checking...' : 'View Gallery'}
              </button>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm mt-2"
                  role="alert"
                >
                  {error}
                </motion.p>
              )}
            </form>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-16 p-6 rounded-sm text-left"
              style={{ backgroundColor: 'var(--mm-cream)' }}
            >
              <h3 
                className="font-medium mb-3"
                style={{ color: 'var(--fg)' }}
              >
                Don't have an access code?
              </h3>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                Your access code was provided in your gallery delivery email. If you can't find
                it, please contact Mesa Marie Photography at{' '}
                <a 
                  href="mailto:wentlingmm@gmail.com" 
                  className="underline"
                  style={{ color: 'var(--accent)' }}
                >
                  wentlingmm@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
