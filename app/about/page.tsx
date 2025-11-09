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
        <section className="py-20 md:py-32 bg-mm-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <p className="text-3xl md:text-4xl text-[--fg] font-light italic">
                Created to create
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide text-[--fg]">
                HEY, I'M MESA!
              </h1>
              <p className="text-lg md:text-xl text-[--fg] max-w-3xl mx-auto">
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
                  src="/for about me page.png"
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
                <h2 className="text-3xl md:text-4xl font-bold text-[--fg] mb-6">hi, i'm mesa.</h2>
                <div className="space-y-5 text-lg text-[--fg]">
                  <p>
                    I believe I was created to create. There's something about capturing a real laugh, a quiet moment, or the way light hits someone's face that makes me feel completely alive. Photography has always been my way of slowing down and holding onto the little bits of beauty.
                  </p>

                  <h3 className="text-2xl font-semibold text-[--fg] pt-4">my style</h3>
                  <p>
                    My photography style is simple, natural, and full of heart. I love the messy, in-between moments that feel real. The soft smiles, the big laughs, the quiet looks that say everything without words. I want every photo to feel like you, not posed or forced, but authentic and timeless.
                  </p>

                  <h3 className="text-2xl font-semibold text-[--fg] pt-4">how my photos feel</h3>
                  <p>
                    My photos are sunny, warm, and light—like the feeling of summer evenings that never seem to end. I love soft, natural light and colors that feel calm and genuine. Each photo should feel easy, honest, and full of life, like a memory you can step right back into.
                  </p>

                  <h3 className="text-2xl font-semibold text-[--fg] pt-4">what i hope to create with you</h3>
                  <p>
                    I want to help you create moments that last forever. The kind you'll look back on and instantly feel again. I want to help you create smiles, laughs, love, and giggles—the kind that make your cheeks hurt and your heart full. Whether it's a big life milestone or just a normal day you never want to forget, I'm here to capture it all.
                  </p>

                  <h3 className="text-2xl font-semibold text-[--fg] pt-4">a little more about me</h3>
                  <p>
                    When I'm not behind the camera, you'll probably find me on a manufacturing plant floor (my day job, boo), spending time with loved ones, or somewhere on a lake.
                  </p>
                  <p>
                    I'm constantly inspired by people and the stories they carry. Every shoot reminds me how grateful I am to be invited into someone's life, even for a moment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Second Mesa Photo */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="/%232%2C%20for%20about%20me%20page%20or%20something.png"
                  alt="Mesa Marie Photography"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                />
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
                  <div className="w-16 h-16 bg-mm-peach rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[--fg]">Authentic Moments</h3>
                  <p className="text-lg text-[--fg]">
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
                  <div className="w-16 h-16 bg-mm-slate rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[--fg]">Life's Adventures</h3>
                  <p className="text-lg text-[--fg]">
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
                  <div className="w-16 h-16 bg-mm-sky rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-[--fg]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[--fg]">Love For All</h3>
                  <p className="text-lg text-[--fg]">
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
                <p className="text-xl md:text-2xl text-[--fg] font-medium">
                  NWPA Photographer — typically found on Lake Erie, Pymatuning Lake, and everywhere
                  in between.
                </p>
                <p className="text-lg text-[--fg]">
                  Whether you're dreaming of a beach session, a forest adventure, or something
                  completely unique, I know all the best spots. Let's find the perfect backdrop for
                  your story.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="p-6 bg-mm-sky rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Lake Erie</h3>
                  <p className="text-sm text-[--fg]">Beaches, sunsets, & water views</p>
                </div>
                <div className="p-6 bg-mm-cream rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Pymatuning</h3>
                  <p className="text-sm text-[--fg]">Lakes, forests, & nature</p>
                </div>
                <div className="p-6 bg-mm-peach/20 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Hidden Gems</h3>
                  <p className="text-sm text-[--fg]">Off-the-beaten-path spots</p>
                </div>
                <div className="p-6 bg-mm-warm rounded-lg">
                  <h3 className="font-semibold text-xl mb-2 text-[--fg]">Anywhere!</h3>
                  <p className="text-sm text-[--fg]">Your special place</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-mm-sky">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-8 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[--fg]">
                LET'S CREATE TOGETHER
              </h2>
              <p className="text-xl md:text-2xl text-[--fg]">
                Ready to capture your story? I can't wait to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  href="/contact"
                  className="text-base px-10 py-4"
                >
                  CONTACT ME
                </Button>
                <Button
                  href="/portfolio"
                  variant="secondary"
                  className="text-base px-10 py-4"
                >
                  VIEW PORTFOLIO
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

