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
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[--fg]">
                HEY, I'M MESA!
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto font-medium">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[--fg]">My Story</h2>
                        <div className="space-y-4 text-lg text-gray-700">
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[--fg]">WHAT I'M HERE FOR</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center space-y-4 p-8 bg-white rounded-lg shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-mm-peach to-[#FFD4A3] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[--fg]">Authentic Moments</h3>
                  <p className="text-lg text-gray-700">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-mm-slate to-mm-slate/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[--fg]">Life's Adventures</h3>
                  <p className="text-lg text-gray-700">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-mm-peach to-mm-cream rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[--fg]">Love For All</h3>
                  <p className="text-lg text-gray-700">
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--fg]">
                NWPA IS MY PLAYGROUND
              </h2>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-700 font-medium">
                  NWPA Photographer — typically found on Lake Erie, Pymatuning Lake, and everywhere
                  in between.
                </p>
                <p className="text-lg text-gray-700">
                  Whether you're dreaming of a beach session, a forest adventure, or something
                  completely unique, I know all the best spots. Let's find the perfect backdrop for
                  your story.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="p-6 bg-mm-sky rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Lake Erie</h3>
                  <p className="text-sm text-gray-700">Beaches, sunsets, & water views</p>
                </div>
                <div className="p-6 bg-mm-cream rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Pymatuning</h3>
                  <p className="text-sm text-gray-700">Lakes, forests, & nature</p>
                </div>
                <div className="p-6 bg-mm-peach/20 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Hidden Gems</h3>
                  <p className="text-sm text-gray-700">Off-the-beaten-path spots</p>
                </div>
                <div className="p-6 bg-mm-warm rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Anywhere!</h3>
                  <p className="text-sm text-gray-700">Your special place</p>
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

