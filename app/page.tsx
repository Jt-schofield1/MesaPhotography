'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';
import { getAllCollections } from '@/lib/collections';

export default function HomePage() {
  const collections = getAllCollections();

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero - Clean & Centered with Mesa's Photo */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-mm-cream/30">
          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              {/* Mesa's Headshot */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-2xl order-2 md:order-1"
              >
                <Image
                  src="/new headshot! plz use this on homepage or something.png"
                  alt="Mesa Marie"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-center md:text-left space-y-8 order-1 md:order-2"
              >
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif tracking-wide text-[--fg]">
                  MESA MARIE PHOTOGRAPHY
                </h1>

                <p className="text-xl sm:text-2xl text-[--fg] font-light">
                  NWPA Photographer
                </p>

                <p className="text-base md:text-lg text-[--fg]">
                  Capturing authentic, warm, and timeless moments on Lake Erie, Pymatuning Lake, and everywhere in between.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4">
                  <Button href="/portfolio" variant="primary" className="text-base px-10 py-4">
                    VIEW PORTFOLIO
                  </Button>
                  <Button href="/contact" variant="secondary" className="text-base px-10 py-4">
                    BOOK A SESSION
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              className="w-6 h-6 text-[--fg]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* Mesa Behind the Camera - Side by Side */}
        <section className="py-20 md:py-32 bg-mm-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-[--fg] mb-4">
                MEET MESA
              </h2>
              <p className="text-lg md:text-xl text-[--fg] max-w-2xl mx-auto">
                Your photographer, storyteller, and fellow adventurer
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/extra.png"
                  alt="Mesa Marie Photography"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/extra2.png"
                  alt="Mesa Marie Photography"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Sneak Peek */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-2xl md:text-3xl text-[--fg] font-light italic mb-4">
                a glimpse of my work
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-[--fg] mb-6">
                RECENT FAVORITES
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl mb-8"
              >
                <Image
                  src="/portfolio/Photos for Website and Portfolio/this is one of my best, use it where everyone will see.png"
                  alt="Featured Work by Mesa Marie Photography"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              <div className="text-center">
                <Link
                  href="/portfolio"
                  className="inline-block text-lg text-[--fg] font-medium hover:text-mm-peach transition-colors underline"
                >
                  View Full Portfolio →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20 space-y-4">
                <div className="text-6xl">𓅰</div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[--fg]">
                  how it works
                </h2>
              </div>

              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="md:w-1/3 text-center md:text-left">
                    <span className="inline-block text-7xl md:text-8xl font-bold text-mm-peach">
                      1
                    </span>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-[--fg]">GET IN TOUCH</h3>
                    <p className="text-lg text-[--fg] font-medium">
                      Fill out the contact form and let's chat about your vision! We'll hop on a
                      call to get to know each other and talk about what makes your session
                      uniquely YOU.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col md:flex-row-reverse gap-8 items-center"
                >
                  <div className="md:w-1/3 text-center md:text-right">
                    <span className="inline-block text-7xl md:text-8xl font-bold text-mm-slate">
                      2
                    </span>
                  </div>
                  <div className="md:w-2/3 space-y-3 md:text-right">
                    <h3 className="text-2xl md:text-3xl font-bold text-[--fg]">PLAN YOUR SESSION</h3>
                    <p className="text-lg text-[--fg] font-medium">
                      We'll work together to find the perfect location and timing. Whether it's
                      Lake Erie at sunset or Pymatuning in the morning light, we'll make it
                      magical.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="md:w-1/3 text-center md:text-left">
                    <span className="inline-block text-7xl md:text-8xl font-bold text-mm-peach">
                      3
                    </span>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-[--fg]">
                      CREATE BEAUTIFUL MEMORIES
                    </h3>
                    <p className="text-lg text-[--fg] font-medium">
                      Relax, be yourself, and let's create something beautiful together. Your
                      photos will be delivered within 2-3 weeks in a stunning online gallery.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-mm-cream">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide leading-tight text-[--fg]">
                READY TO CREATE SOMETHING BEAUTIFUL?
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-[--fg]">
                Let's capture your story in the warm, authentic, beautiful way you deserve
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  href="/contact"
                  className="text-base px-10 py-4"
                >
                  LET'S DO THIS
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  className="text-base px-10 py-4"
                >
                  VIEW PRICING
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

