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
      <main id="main-content" className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="text-6xl mb-6">𓆟</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[--fg]">
              Client Galleries
            </h1>
            <p className="text-xl text-[--fg] mb-12">
              Enter your unique access code to view your photos
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Enter Access Code"
                className="input w-full text-center text-lg uppercase tracking-wider"
                required
                disabled={loading}
                maxLength={20}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-lg"
              >
                {loading ? 'Checking...' : 'View Gallery'}
              </button>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-sm mt-2"
                  role="alert"
                >
                  {error}
                </motion.p>
              )}
            </form>

            <div className="mt-12 p-6 bg-mm-sky rounded-lg text-left">
              <h3 className="font-semibold mb-2 text-[--fg]">Don't have an access code?</h3>
              <p className="text-sm text-[--fg]">
                Your access code was provided in your gallery delivery email. If you can't find
                it, please contact Mesa Marie Photography.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

