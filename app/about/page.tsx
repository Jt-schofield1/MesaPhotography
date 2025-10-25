'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-mm-cream to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <p className="font-halimum text-4xl md:text-5xl text-mm-slate">
                Created to create.
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                HEY, I'M MESA!
              </h1>
              <p className="text-xl md:text-2xl text-[--muted] italic max-w-3xl mx-auto">
                I partner with authentic, fun-loving people by capturing the warmth, joy, and
                uniqueness of their most beautiful moments
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section with Image */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="/me for now.jpeg"
                  alt="Mesa Marie"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">My Story</h2>
                <div className="space-y-4 text-lg text-[--muted]">
                  <p>
                    Photography isn't just what I do—it's who I am. I was{' '}
                    <span className="font-semibold text-[--fg]">created to create</span>, and I
                    believe every person, every couple, and every family has a unique story worth
                    capturing.
                  </p>

                  <p>
                    My style? <span className="font-semibold text-[--fg]">Warm, authentic, and editorial.</span> I
                    love shooting in natural light, capturing genuine moments, and creating images
                    that feel both timeless and true to who you are.
                  </p>

                  <p>
                    You'll typically find me at{' '}
                    <span className="font-semibold text-[--fg]">Lake Erie or Pymatuning Lake</span>, but I'm
                    always up for an adventure anywhere in between. I'm here to create something
                    beautiful with you—something that's authentically, joyfully, honestly{' '}
                    <span className="italic">you</span>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I'm Here For */}
        <section className="py-20 md:py-32 bg-mm-peach/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">WHAT I'M HERE FOR</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg"
                >
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-2xl font-bold">Authentic Moments</h3>
                  <p className="text-[--muted]">
                    Real laughs, genuine tears, and everything in between. No fake smiles, just you
                    being beautifully you.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg"
                >
                  <div className="text-5xl mb-4">🌅</div>
                  <h3 className="text-2xl font-bold">Life's Adventures</h3>
                  <p className="text-[--muted]">
                    From sunrise at the lake to golden hour in the fields, let's make your session
                    an adventure to remember.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg"
                >
                  <div className="text-5xl mb-4">❤️</div>
                  <h3 className="text-2xl font-bold">Love For All</h3>
                  <p className="text-[--muted]">
                    Every love story is beautiful and deserves to be celebrated. All are welcome
                    here.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                NWPA IS MY PLAYGROUND
              </h2>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-[--muted]">
                  NWPA Photographer — typically found on Lake Erie, Pymatuning Lake, and everywhere
                  in between.
                </p>
                <p className="text-lg text-[--muted]">
                  Whether you're dreaming of a beach session, a forest adventure, or something
                  completely unique, I know all the best spots. Let's find the perfect backdrop for
                  your story.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="p-6 bg-mm-sky rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Lake Erie</h3>
                  <p className="text-sm text-[--muted]">Beaches, sunsets, & water views</p>
                </div>
                <div className="p-6 bg-mm-cream rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Pymatuning</h3>
                  <p className="text-sm text-[--muted]">Lakes, forests, & nature</p>
                </div>
                <div className="p-6 bg-mm-peach/20 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Hidden Gems</h3>
                  <p className="text-sm text-[--muted]">Off-the-beaten-path spots</p>
                </div>
                <div className="p-6 bg-mm-warm rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">Anywhere!</h3>
                  <p className="text-sm text-[--muted]">Your special place</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-mm-slate text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-8 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                LET'S CREATE TOGETHER
              </h2>
              <p className="text-xl md:text-2xl opacity-90">
                Ready to capture your story? I can't wait to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  href="/contact"
                  className="bg-mm-peach text-[--fg] hover:bg-white text-lg px-8 py-4"
                >
                  contact me
                </Button>
                <Button
                  href="/portfolio"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-mm-slate text-lg px-8 py-4"
                >
                  view portfolio
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

