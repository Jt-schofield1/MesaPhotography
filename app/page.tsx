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
        {/* Hero - Bold & Dynamic */}
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/portfolio/couples/Copy of T&J - 9_7-115.jpg"
              alt="Mesa Marie Photography"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-mm-cream/70 via-white/50 to-white/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Bold Statement Words */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  authentically
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  honestly
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  joyfully
                </h1>
              </div>

              <p className="font-halimum text-4xl sm:text-5xl md:text-6xl text-mm-slate">
                Created to create.
              </p>

              <div className="space-y-4 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  capture your story
                </h2>
                <p className="text-lg md:text-xl text-[--muted] italic">
                  NWPA Photographer — typically found on Lake Erie, Pymatuning Lake, and
                  everywhere in between.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button href="/portfolio" variant="primary" className="text-lg px-8 py-4">
                  let's get started!
                </Button>
                <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
                  book a session
                </Button>
              </div>
            </motion.div>
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

        {/* Your Story Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto text-center space-y-12"
            >
              <div className="space-y-8">
                <div className="text-6xl">𓇼</div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[--fg]">
                  YOUR MOMENTS
                  <br />
                  ARE NOT
                  <br />
                  'ONE-SIZE FITS ALL'
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium">
                  Life's beautiful, messy, authentic moments deserve to be captured YOUR way
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[--fg]">Authentic</h3>
                  <p className="text-lg text-gray-700">Real moments, real emotions, real you</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[--fg]">Warm</h3>
                  <p className="text-lg text-gray-700">Sunny, light, and full of life</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[--fg]">Personal</h3>
                  <p className="text-lg text-gray-700">Your story, your style, your day</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Collections - Dynamic Layout */}
        <section className="py-20 md:py-32 bg-mm-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-6">
              <div className="text-6xl">𓆟 𓅰 𓇼</div>
              <p className="font-halimum text-3xl md:text-4xl text-mm-slate">
                what does your dream session look like?
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[--fg]">
                EXPLORE THE PORTFOLIO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <Link
                    href={`/portfolio/${collection.id}`}
                    className="group block relative overflow-hidden rounded-lg aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={collection.cover}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                        {collection.title}
                      </h3>
                      <p className="text-lg opacity-90 mb-4">{collection.description}</p>
                      <span className="text-sm font-medium uppercase tracking-wider">
                        View Gallery →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
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
                    <p className="text-lg text-gray-700 font-medium">
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
                    <p className="text-lg text-gray-700 font-medium">
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
                    <p className="text-lg text-gray-700 font-medium">
                      Relax, be yourself, and let's create something beautiful together. Your
                      photos will be delivered within 2-3 weeks in a stunning online gallery.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Bold */}
        <section className="py-20 md:py-32 bg-mm-slate text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-6xl mb-6">𓆟</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                READY TO CREATE
                <br />
                SOMETHING BEAUTIFUL?
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-95 font-medium">
                Let's capture your story in the warm, authentic, beautiful way you deserve
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  href="/contact"
                  className="bg-mm-peach text-[--fg] hover:bg-white text-lg px-8 py-4 min-h-[56px]"
                >
                  let's do this!
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-mm-slate text-lg px-8 py-4"
                >
                  view pricing
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

