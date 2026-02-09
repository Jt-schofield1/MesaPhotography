'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';

// Portfolio images for the scrolling columns
const portfolioImages = [
  '/portfolio/Photos for Website and Portfolio/this is one of my best, use it where everyone will see.png',
  '/portfolio/seniors/ElisaGrad-046.jpg',
  '/portfolio/couples/Copy of T&J - 9_7-115.jpg',
  '/portfolio/families/Copy of M&D-39.png',
  '/portfolio/seniors/ElisaGrad-051.jpg',
  '/portfolio/couples/Copy of T&J - 9_7-129.jpg',
  '/portfolio/families/Copy of M&D-59.png',
  '/portfolio/seniors/ElisaGrad-055 (1).jpg',
];

const portfolioImages2 = [
  '/portfolio/couples/Copy of T&J - 9_7-162.jpg',
  '/portfolio/families/Copy of M&D-60.png',
  '/portfolio/seniors/ElisaGrad-057 (2).jpg',
  '/portfolio/couples/Copy of T&J - 9_7-172.jpg',
  '/portfolio/families/Copy of M&D-61.png',
  '/portfolio/seniors/ElisaGrad-058.jpg',
  '/portfolio/couples/Copy of T&J - 9_7-173.jpg',
  '/portfolio/families/Copy of M&D-62.png',
];

// Infinite scrolling column component
function ScrollingColumn({ images, direction = 'up', speed = 25 }: { images: string[], direction?: 'up' | 'down', speed?: number }) {
  const [offset, setOffset] = useState(0);
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + (direction === 'up' ? 1 : -1);
        return newOffset;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [direction, speed]);

  return (
    <div className="relative h-[500px] xs:h-[550px] sm:h-[600px] md:h-[700px] overflow-hidden" ref={columnRef}>
      <motion.div
        className="flex flex-col gap-3 sm:gap-4"
        style={{
          y: direction === 'up' ? -offset % 2000 : offset % 2000,
        }}
      >
        {[...images, ...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[5/7] rounded-lg overflow-hidden shadow-md img-hover"
          >
            <Image
              src={src}
              alt={`Portfolio ${index + 1}`}
              fill
              sizes="(max-width: 480px) 40vw, (max-width: 768px) 45vw, 300px"
              className="object-cover"
              loading={index < 3 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HomePageClient() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section - Mobile: Featured image with text overlay, Desktop: Scrolling columns */}
        <section className="min-h-screen flex items-center justify-center bg-white pt-20 pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6">
            
            {/* Mobile Hero - Featured Image with Text */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-8"
              >
                <p 
                  className="font-halimum text-3xl sm:text-4xl mb-2"
                  style={{ color: 'var(--accent)' }}
                >
                  mesa marie
                </p>
                <h1 
                  className="text-4xl sm:text-5xl font-light tracking-wide mb-4 uppercase"
                  style={{ color: 'var(--fg)' }}
                >
                  Photography
                </h1>
                <p 
                  className="text-base sm:text-lg mb-6 max-w-md mx-auto"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Capturing authentic, warm, and timeless moments throughout Northwestern Pennsylvania.
                </p>
                <Button href="/portfolio" variant="secondary">
                  View Portfolio
                </Button>
              </motion.div>

              {/* Mobile Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/portfolio/Photos for Website and Portfolio/this is one of my best, use it where everyone will see.png"
                  alt="Mesa Marie Photography - Featured Work"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Mobile: Horizontal scroll preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 -mx-4 px-4"
              >
                <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                  {[...portfolioImages.slice(1, 5), ...portfolioImages2.slice(0, 3)].map((src, index) => (
                    <div
                      key={index}
                      className="relative w-28 sm:w-32 aspect-[4/5] rounded-lg overflow-hidden shadow-md flex-shrink-0 snap-start"
                    >
                      <Image
                        src={src}
                        alt={`Portfolio preview ${index + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop Hero - Original scrolling columns layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
              {/* Left - Two scrolling photo columns */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex gap-4 justify-center"
              >
                <div className="w-[180px]">
                  <ScrollingColumn images={portfolioImages} direction="up" speed={30} />
                </div>
                <div className="w-[180px] mt-20">
                  <ScrollingColumn images={portfolioImages2} direction="down" speed={35} />
                </div>
              </motion.div>

              {/* Right - Text content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-left"
              >
                <p 
                  className="font-halimum text-4xl mb-2"
                  style={{ color: 'var(--accent)' }}
                >
                  a glimpse of my work
                </p>
                <h1 
                  className="text-5xl lg:text-6xl font-light tracking-wide mb-6 uppercase"
                  style={{ color: 'var(--fg)' }}
                >
                  Some Recent Favorites
                </h1>
                <p 
                  className="text-lg mb-8 max-w-lg"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Capturing authentic, warm, and timeless moments throughout Northwestern Pennsylvania.
                </p>
                <Button href="/portfolio" variant="secondary">
                  View Full Portfolio
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Starfish Divider */}
        <div className="py-6 sm:py-8 flex justify-center items-center gap-4 sm:gap-6" aria-hidden="true">
          <span style={{ color: 'var(--accent-gold)', fontSize: '1.5rem' }}>&#10038;</span>
          <span style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>&#10038;</span>
          <span style={{ color: 'var(--accent-gold)', fontSize: '1.5rem' }}>&#10038;</span>
        </div>

        {/* Hi Friends Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg img-hover order-2 md:order-1"
              >
                <Image
                  src="/new headshot! plz use this on homepage or something.png"
                  alt="Mesa Marie - Northwestern Pennsylvania Photographer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl xs:text-4xl md:text-5xl font-light mb-2" style={{ color: 'var(--fg)' }}>
                  hi friends!
                </h2>
                <p 
                  className="font-halimum text-3xl xs:text-4xl md:text-5xl mb-4 sm:mb-6"
                  style={{ color: 'var(--accent)' }}
                >
                  i'm mesa
                </p>
                <p className="text-base sm:text-lg mb-3 sm:mb-4" style={{ color: 'var(--fg-muted)' }}>
                  I believe I was created to create. There's something about capturing a real laugh, 
                  a quiet moment, or the way light hits someone's face that makes me feel completely alive.
                </p>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8" style={{ color: 'var(--fg-muted)' }}>
                  My photography style is simple, natural, and full of heart. I love the messy, 
                  in-between moments that feel real...
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-base sm:text-lg tracking-wide group" style={{ color: 'var(--fg)' }}>
                  More About Me
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fish Divider */}
        <div className="py-6 sm:py-8 flex justify-center items-center gap-6 sm:gap-8" aria-hidden="true">
          <svg width="32" height="16" viewBox="0 0 40 20" style={{ color: 'var(--accent)' }} className="sm:w-10 sm:h-5">
            <path d="M30 10c-8 6-20 6-28 0 8-6 20-6 28 0zm5-3c3 2 5 3 5 3s-2 1-5 3c2-2 2-4 0-6z" fill="currentColor"/>
          </svg>
          <svg width="32" height="16" viewBox="0 0 40 20" style={{ color: 'var(--accent-gold)' }} className="sm:w-10 sm:h-5">
            <path d="M30 10c-8 6-20 6-28 0 8-6 20-6 28 0zm5-3c3 2 5 3 5 3s-2 1-5 3c2-2 2-4 0-6z" fill="currentColor"/>
          </svg>
          <svg width="32" height="16" viewBox="0 0 40 20" style={{ color: 'var(--accent)' }} className="sm:w-10 sm:h-5">
            <path d="M30 10c-8 6-20 6-28 0 8-6 20-6 28 0zm5-3c3 2 5 3 5 3s-2 1-5 3c2-2 2-4 0-6z" fill="currentColor"/>
          </svg>
        </div>

        {/* Based in Western PA */}
        <section className="section-sm bg-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p 
                className="font-halimum text-3xl xs:text-4xl md:text-5xl mb-2"
                style={{ color: 'var(--accent)' }}
              >
                based in western pa -
              </p>
              <p 
                className="text-lg xs:text-xl md:text-2xl font-light italic"
                style={{ color: 'var(--fg-muted)' }}
              >
                but usually found on lake erie, pymatuning lake, and everywhere in between
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capturing Your... Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 
                className="text-2xl xs:text-3xl md:text-4xl font-light italic"
                style={{ color: 'var(--fg)' }}
              >
                capturing your...
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: 'love', 
                  image: '/portfolio/couples/Copy of T&J - 9_7-115.jpg',
                  href: '/portfolio/couples'
                },
                { 
                  title: 'milestone moments', 
                  image: '/portfolio/seniors/ElisaGrad-046.jpg',
                  href: '/portfolio/seniors'
                },
                { 
                  title: 'family', 
                  image: '/portfolio/Photos for Website and Portfolio/madianddallas.png',
                  href: '/portfolio/families'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Link href={item.href} className="group block touch-feedback">
                    <p 
                      className="font-halimum text-xl xs:text-2xl md:text-3xl text-center mb-3 sm:mb-4"
                      style={{ color: 'var(--accent)' }}
                    >
                      {item.title}
                    </p>
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg img-hover">
                      <Image
                        src={item.image}
                        alt={`${item.title} photography by Mesa Marie`}
                        fill
                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Get In Touch CTA */}
        <section className="py-16 sm:py-24 md:py-32" style={{ backgroundColor: 'var(--accent)' }}>
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white/80 text-base sm:text-lg mb-3 sm:mb-4 italic">
                ready to capture your story?
              </p>
              <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide uppercase mb-6 sm:mb-8">
                Get In Touch
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
      <Footer />
    </>
  );
}
