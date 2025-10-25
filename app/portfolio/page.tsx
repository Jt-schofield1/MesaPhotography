'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';
import { getAllCollections } from '@/lib/collections';

export default function PortfolioPage() {
  const collections = getAllCollections();

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-mm-sky to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <p className="font-halimum text-3xl md:text-4xl text-mm-slate">
                joyful, intentional, adventurous
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                THE PORTFOLIO
              </h1>
              <p className="text-xl md:text-2xl text-[--muted] max-w-2xl mx-auto">
                Browse my recent work and get inspired for your own session. Each collection tells
                a unique story.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                >
                  <Link
                    href={`/portfolio/${collection.id}`}
                    className="group block space-y-4"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
                      <Image
                        src={collection.cover}
                        alt={collection.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-lg font-medium uppercase tracking-wider">
                          View Gallery →
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="space-y-2">
                      <h2 className="text-3xl md:text-4xl font-bold group-hover:text-mm-slate transition-colors">
                        {collection.title}
                      </h2>
                      <p className="text-lg text-[--muted]">{collection.description}</p>
                      <p className="text-sm text-mm-slate font-medium">
                        {collection.images.length} photos
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-mm-peach/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-8 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                LOVE WHAT YOU SEE?
              </h2>
              <p className="text-xl md:text-2xl text-[--muted]">
                Let's create beautiful images together. Your story is waiting to be told.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
                  book a session
                </Button>
                <Button href="/pricing" variant="secondary" className="text-lg px-8 py-4">
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

