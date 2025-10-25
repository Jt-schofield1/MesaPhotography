'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[100svh] flex items-center justify-center px-4 pt-24 bg-gradient-to-b from-mm-sky to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-8xl md:text-9xl font-bold mb-6 text-mm-slate">404</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            OOPS!
            <br />
            LOST IN THE LAKES
          </h1>
          <p className="text-xl md:text-2xl text-[--muted] mb-8">
            Looks like this page wandered off somewhere between Lake Erie and Pymatuning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" className="text-lg px-8 py-4">
              go home
            </Button>
            <Button href="/portfolio" variant="secondary" className="text-lg px-8 py-4">
              view portfolio
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

