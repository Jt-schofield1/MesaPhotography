'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';

export default function AboutPageClient() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero Section - Clean and minimal */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <p 
                className="font-halimum text-2xl xs:text-3xl md:text-4xl mb-3 sm:mb-4"
                style={{ color: 'var(--accent)' }}
              >
                created to create
              </p>
              <h1 
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-light tracking-wide uppercase"
                style={{ color: 'var(--fg)' }}
              >
                Hey, I'm Mesa
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg img-hover md:sticky md:top-32"
              >
                <Image
                  src="/for about me page.png"
                  alt="Mesa Marie - Northwestern Pennsylvania Photographer"
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
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h2 
                    className="text-xl xs:text-2xl md:text-3xl font-light mb-3 sm:mb-4"
                    style={{ color: 'var(--fg)' }}
                  >
                    hi, i'm mesa.
                  </h2>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--fg-muted)' }}>
                    I believe I was created to create. There's something about capturing a real laugh, 
                    a quiet moment, or the way light hits someone's face that makes me feel completely alive. 
                    Photography has always been my way of slowing down and holding onto the little bits of beauty.
                  </p>
                </div>

                <div>
                  <h3 
                    className="text-lg sm:text-xl font-medium mb-2 sm:mb-3"
                    style={{ color: 'var(--fg)' }}
                  >
                    my style
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--fg-muted)' }}>
                    My photography style is simple, natural, and full of heart. I love the messy, in-between 
                    moments that feel real. The soft smiles, the big laughs, the quiet looks that say everything 
                    without words. I want every photo to feel like you, not posed or forced, but authentic and timeless.
                  </p>
                </div>

                <div>
                  <h3 
                    className="text-lg sm:text-xl font-medium mb-2 sm:mb-3"
                    style={{ color: 'var(--fg)' }}
                  >
                    how my photos feel
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--fg-muted)' }}>
                    My photos are sunny, warm, and light—like the feeling of summer evenings that never seem to end. 
                    I love soft, natural light and colors that feel calm and genuine. Each photo should feel easy, 
                    honest, and full of life, like a memory you can step right back into.
                  </p>
                </div>

                <div>
                  <h3 
                    className="text-lg sm:text-xl font-medium mb-2 sm:mb-3"
                    style={{ color: 'var(--fg)' }}
                  >
                    what i hope to create with you
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--fg-muted)' }}>
                    I want to help you create moments that last forever. The kind you'll look back on and instantly 
                    feel again. I want to help you create smiles, laughs, love, and giggles—the kind that make your 
                    cheeks hurt and your heart full. Whether it's a big life milestone or just a normal day you never 
                    want to forget, I'm here to capture it all.
                  </p>
                </div>

                <div>
                  <h3 
                    className="text-lg sm:text-xl font-medium mb-2 sm:mb-3"
                    style={{ color: 'var(--fg)' }}
                  >
                    a little more about me
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--fg-muted)' }}>
                    When I'm not behind the camera, you'll probably find me on a manufacturing plant floor 
                    (my day job, boo), spending time with loved ones, or somewhere on a lake.
                  </p>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base" style={{ color: 'var(--fg-muted)' }}>
                    I'm constantly inspired by people and the stories they carry. Every shoot reminds me how 
                    grateful I am to be invited into someone's life, even for a moment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I'm Here For - Clean cards */}
        <section className="py-16 sm:py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10 sm:mb-16"
              >
                <h2 
                  className="text-2xl xs:text-3xl md:text-4xl font-light tracking-wide uppercase"
                  style={{ color: 'var(--fg)' }}
                >
                  What I'm Here For
                </h2>
                <div className="divider"></div>
              </motion.div>

              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: 'Authentic Moments',
                    desc: 'Real laughs, genuine tears, and everything in between. No fake smiles, just you being beautifully you.',
                  },
                  {
                    title: 'Effortless & Efficient',
                    desc: 'Life is busy — your photos shouldn\'t add to the chaos. I keep sessions smooth, quick, and stress-free.',
                  },
                  {
                    title: 'Milestones That Matter',
                    desc: 'From brand-new beginnings to the moments that mark every chapter, I\'m here to capture the memories that matter most.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`text-center p-4 sm:p-6 ${index === 2 ? 'xs:col-span-2 md:col-span-1' : ''}`}
                  >
                    <h3 
                      className="text-base sm:text-lg font-medium mb-2 sm:mb-3"
                      style={{ color: 'var(--fg)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 sm:py-20 md:py-28 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-lg img-hover"
              >
                <Image
                  src="/new headshot! plz use this on homepage or something.png"
                  alt="Mesa Marie - Northwestern Pennsylvania Photographer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 
                  className="text-2xl xs:text-3xl md:text-4xl font-light tracking-wide uppercase mb-4 sm:mb-6"
                  style={{ color: 'var(--fg)' }}
                >
                  NWPA Is My Playground
                </h2>
                <p className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: 'var(--fg-muted)' }}>
                  NWPA Photographer — typically found on Lake Erie, Pymatuning Lake, and everywhere in between.
                </p>
                <p className="text-sm sm:text-base" style={{ color: 'var(--fg-muted)' }}>
                  Whether you're dreaming of a beach session, a forest adventure, or something completely unique, 
                  I know all the best spots. Let's find the perfect backdrop for your story.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
                  {[
                    { name: 'Lake Erie', desc: 'Beaches, sunsets, & water' },
                    { name: 'Pymatuning', desc: 'Lakes, forests, & nature' },
                    { name: 'Hidden Gems', desc: 'Off-the-beaten-path spots' },
                    { name: 'Anywhere!', desc: 'Your special place' },
                  ].map((loc) => (
                    <div key={loc.name} className="p-3 sm:p-4 border border-gray-100 rounded-sm">
                      <h4 className="font-medium text-xs sm:text-sm" style={{ color: 'var(--fg)' }}>{loc.name}</h4>
                      <p className="text-xs mt-1" style={{ color: 'var(--fg-muted)' }}>{loc.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 md:py-28" style={{ backgroundColor: 'var(--accent)' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-light text-white tracking-wide uppercase mb-3 sm:mb-4">
                Let's Create Together
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
                Ready to capture your story? I can't wait to hear from you!
              </p>
              <Button 
                href="/contact" 
                variant="secondary"
                className="bg-white text-[var(--fg)] border-white hover:bg-transparent hover:text-white"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
