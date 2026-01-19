'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';
import Lightbox from '@/components/lightbox';

// All portfolio images in a mixed masonry layout
const allImages = [
  { src: '/portfolio/couples/Copy of T&J - 9_7-115.jpg', alt: 'Couples photography session - romantic outdoor portrait' },
  { src: '/portfolio/seniors/ElisaGrad-046.jpg', alt: 'Senior portrait photography - graduation photos' },
  { src: '/portfolio/families/Copy of M&D-39.png', alt: 'Family photography session - outdoor portrait' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-129.jpg', alt: 'Engagement photography - couples portrait' },
  { src: '/portfolio/seniors/ElisaGrad-051.jpg', alt: 'Senior portrait - high school graduation' },
  { src: '/portfolio/families/Copy of M&D-59.png', alt: 'Family portrait - outdoor session' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-162.jpg', alt: 'Couples photography - romantic session' },
  { src: '/portfolio/seniors/ElisaGrad-055 (1).jpg', alt: 'Senior photography - graduation portraits' },
  { src: '/portfolio/families/Copy of M&D-60.png', alt: 'Family photography - lifestyle portrait' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-172.jpg', alt: 'Couples portrait - engagement session' },
  { src: '/portfolio/seniors/ElisaGrad-057 (2).jpg', alt: 'Senior portrait session' },
  { src: '/portfolio/families/Copy of M&D-61.png', alt: 'Family portrait photography' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-173.jpg', alt: 'Couples photography session' },
  { src: '/portfolio/seniors/ElisaGrad-058.jpg', alt: 'Senior graduation photography' },
  { src: '/portfolio/families/Copy of M&D-62.png', alt: 'Family outdoor session' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-177.jpg', alt: 'Romantic couples portrait' },
  { src: '/portfolio/seniors/ElisaGrad-061 (2).jpg', alt: 'Senior portrait photography' },
  { src: '/portfolio/families/Copy of M&D-63.png', alt: 'Family photography portrait' },
  { src: '/portfolio/seniors/ElisaGrad-112.jpg', alt: 'High school senior photos' },
  { src: '/portfolio/families/Copy of M&D-64.png', alt: 'Family session photography' },
  { src: '/portfolio/seniors/ElisaGrad-117 (1).jpg', alt: 'Senior graduation session' },
  { src: '/portfolio/families/Copy of M&D-65.png', alt: 'Family outdoor photography' },
  { src: '/portfolio/seniors/ElisaGrad-120 (2).jpg', alt: 'Senior portrait outdoor' },
  { src: '/portfolio/families/Copy of M&D-66.png', alt: 'Family lifestyle photography' },
];

export default function PortfolioPageClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero - Clean, minimal */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-light tracking-wide uppercase"
                style={{ color: 'var(--fg)' }}
              >
                The Portfolio
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Masonry Gallery Grid */}
        <section className="pb-16 sm:pb-20 md:pb-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="columns-2 md:columns-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
              {allImages.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: Math.min(index * 0.05, 0.5),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onClick={() => setLightboxIndex(index)}
                  className="block w-full mb-3 sm:mb-4 overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 img-hover touch-feedback"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={800}
                    sizes="(max-width: 480px) 50vw, (max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                    className="w-full h-auto object-cover"
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Simple and elegant */}
        <section className="py-16 sm:py-20 md:py-28" style={{ backgroundColor: 'var(--accent)' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-white/80 text-base sm:text-lg mb-3 italic">
                i like this
              </p>
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-light text-white tracking-wide uppercase mb-6 sm:mb-8">
                Love What You See?
              </h2>
              <Button 
                href="/contact" 
                variant="secondary"
                className="bg-white text-[var(--fg)] border-white hover:bg-transparent hover:text-white"
              >
                Let's Get Started
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={allImages}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
