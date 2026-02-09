'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';
import Lightbox from '@/components/lightbox';

// Categories for filtering
type Category = 'all' | 'couples' | 'seniors' | 'families';

// Featured "best work" images - Mesa marked these as her favorites
const featuredImages = [
  { src: '/portfolio/families/Copy of savoiafamiy-20.png', alt: 'Savoia family father and daughter tender moment', category: 'families' as Category },
  { src: '/portfolio/Photos for Website and Portfolio/also one of my best!!!.png', alt: 'Mother and daughter joyful moment - black and white', category: 'families' as Category },
  { src: '/portfolio/seniors/ElisaGrad-117 (1).jpg', alt: 'Senior graduation outdoor portrait session', category: 'seniors' as Category },
  { src: '/portfolio/Photos for Website and Portfolio/one of my better ones, use it in high visibility .jpg', alt: 'Couple walking together on the beach at golden hour', category: 'couples' as Category },
];

// All portfolio images organized by category
const portfolioImages: { src: string; alt: string; category: Category }[] = [
  // Couples
  { src: '/portfolio/couples/Copy of T&J - 9_7-115.jpg', alt: 'Romantic beach couples session at sunset', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-129.jpg', alt: 'Couples portrait on the sandy shore', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-162.jpg', alt: 'Intimate couples moment by the water', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-172.jpg', alt: 'Engagement session at Lake Erie', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-173.jpg', alt: 'Couples laughing together outdoors', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-177.jpg', alt: 'Romantic couples portrait at golden hour', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-61.jpg', alt: 'Couples session beginning at the beach', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-73.jpg', alt: 'Natural couples moment captured', category: 'couples' },
  { src: '/portfolio/couples/Copy of T&J - 9_7-90.jpg', alt: 'Couples embracing by the lake', category: 'couples' },
  
  // Seniors - Elisa Grad
  { src: '/portfolio/seniors/ElisaGrad-046.jpg', alt: 'Senior graduation portrait - black dress', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-051.jpg', alt: 'Senior portrait with graduation cap', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-055 (1).jpg', alt: 'Senior outdoor portrait session', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-057 (2).jpg', alt: 'Senior graduation celebration', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-058.jpg', alt: 'Senior portrait in natural light', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-061 (2).jpg', alt: 'Senior graduation photography', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-112.jpg', alt: 'Senior portrait with blue backdrop', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-117 (1).jpg', alt: 'Senior graduation outdoor session', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-120 (2).jpg', alt: 'Senior portrait at park', category: 'seniors' },
  { src: '/portfolio/seniors/ElisaGrad-124 (2).jpg', alt: 'Senior celebration portrait', category: 'seniors' },
  
  // Seniors - Leila
  { src: '/portfolio/seniors/Copy of leilasenior-12.png', alt: 'Senior portrait in autumn colors', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-19.png', alt: 'Senior outdoor fall session', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-30.png', alt: 'Senior portrait with golden light', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-36.png', alt: 'Senior lifestyle photography', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-43.png', alt: 'Senior portrait in nature', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-46.png', alt: 'Senior fall photography session', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-69.png', alt: 'Senior portrait with autumn backdrop', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-78.png', alt: 'Senior natural light portrait', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-79.png', alt: 'Senior session finale', category: 'seniors' },
  
  // Families - Baby/Infant portraits (corajofall)
  { src: '/portfolio/seniors/Copy of corajofall-21.png', alt: 'Adorable baby with knit hat in fall leaves', category: 'families' },
  { src: '/portfolio/seniors/Copy of corajofall-26.png', alt: 'Precious baby portrait in autumn setting', category: 'families' },
  { src: '/portfolio/seniors/Copy of corajofall-26(1).png', alt: 'Sweet baby with blue eyes and knit hat', category: 'families' },
  
  // Families - M&D Session
  { src: '/portfolio/families/Copy of M&D-39.png', alt: 'Mother and daughter joyful moment', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-59.png', alt: 'Family portrait in golden light', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-60.png', alt: 'Family lifestyle photography', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-61.png', alt: 'Family outdoor session', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-62.png', alt: 'Family portrait at sunset', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-63.png', alt: 'Family candid moment', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-64.png', alt: 'Family connection portrait', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-65.png', alt: 'Family love captured', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-66.png', alt: 'Family natural poses', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-67.png', alt: 'Family togetherness', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-68.png', alt: 'Family genuine smiles', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-69.png', alt: 'Family outdoor photography', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-70.png', alt: 'Family session highlights', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-80.png', alt: 'Family portrait session', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-95.png', alt: 'Family final portrait', category: 'families' },
  { src: '/portfolio/families/Copy of fremers-42.png', alt: 'Two brothers smiling together outdoors', category: 'families' },
  { src: '/portfolio/families/for minis or family sessions(1).png', alt: 'Happy baby with knit hat holding autumn leaf', category: 'families' },
  
  // Seniors - Leila (new)
  { src: '/portfolio/seniors/Copy of leilasenior-37.png', alt: 'Senior portrait in warm autumn tones', category: 'seniors' },
  { src: '/portfolio/seniors/Copy of leilasenior-51.png', alt: 'Senior portrait with natural backdrop', category: 'seniors' },
  
  // Families - M&D (new)
  { src: '/portfolio/families/Copy of M&D-25.png', alt: 'Family moment captured in golden light', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-81.png', alt: 'Family candid outdoor portrait', category: 'families' },
  { src: '/portfolio/families/Copy of M&D-84.png', alt: 'Family joyful moment together', category: 'families' },
  
  // Families - Savoia Family (new)
  { src: '/portfolio/families/Copy of savoiafamiy-07.png', alt: 'Savoia family portrait session', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-12.png', alt: 'Savoia family candid moment', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-19.png', alt: 'Savoia family outdoor photography', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-20.png', alt: 'Savoia family father and daughter', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-21.png', alt: 'Savoia family together', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-24.png', alt: 'Savoia family autumn session', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-28.png', alt: 'Savoia family love captured', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-31.png', alt: 'Savoia family natural light portrait', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-33.png', alt: 'Savoia family genuine smiles', category: 'families' },
  { src: '/portfolio/families/Copy of savoiafamiy-39.png', alt: 'Savoia family session highlight', category: 'families' },
  
  // Families - Additional (new)
  { src: '/portfolio/Photos for Website and Portfolio/corajo.png', alt: 'Adorable baby portrait in autumn leaves', category: 'families' },
  { src: '/portfolio/Photos for Website and Portfolio/madianddallas.png', alt: 'Madi and Dallas family portrait', category: 'families' },
];

// Combine featured and regular images, removing duplicates
const allImages = [...featuredImages, ...portfolioImages];

export default function PortfolioPageClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [showAll, setShowAll] = useState(false);

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  // Show limited images initially, then all on "Show More"
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 18);

  const categories: { key: Category; label: string; count: number }[] = [
    { key: 'all', label: 'All Work', count: allImages.length },
    { key: 'couples', label: 'Couples', count: allImages.filter(i => i.category === 'couples').length },
    { key: 'seniors', label: 'Seniors', count: allImages.filter(i => i.category === 'seniors').length },
    { key: 'families', label: 'Families', count: allImages.filter(i => i.category === 'families').length },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero Section - With personality */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <p 
                className="font-halimum text-2xl sm:text-3xl md:text-4xl mb-3"
                style={{ color: 'var(--accent)' }}
              >
                welcome to my
              </p>
              <h1 
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-light tracking-wide uppercase mb-6"
                style={{ color: 'var(--fg)' }}
              >
                Portfolio
              </h1>
              <p 
                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                style={{ color: 'var(--fg-muted)' }}
              >
                Every session is a story. These are the laughs, the quiet moments, 
                the in-between magic that makes my heart so full. Take a look around — 
                I hope you find something that speaks to you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Section - Mesa's Best Work */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <p 
                className="font-halimum text-xl sm:text-2xl mb-2"
                style={{ color: 'var(--accent)' }}
              >
                some of my favorites
              </p>
              <h2 
                className="text-2xl sm:text-3xl font-light tracking-wide uppercase"
                style={{ color: 'var(--fg)' }}
              >
                Featured Work
              </h2>
            </motion.div>

            {/* Featured Images - Larger display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
              {featuredImages.map((image, index) => (
                <motion.button
                  key={`featured-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setLightboxIndex(index)}
                  className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lg img-hover touch-feedback focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 md:py-12 bg-white sticky top-[60px] md:top-[72px] z-30 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setShowAll(false);
                  }}
                  className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base tracking-wider uppercase transition-all duration-300 rounded-sm touch-feedback ${
                    activeCategory === cat.key
                      ? 'bg-[var(--accent)] text-white'
                      : 'bg-transparent text-[var(--fg)] hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                  <span className="ml-2 text-xs opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Quote / Personality Section */}
        <section className="py-10 md:py-14 bg-[var(--mm-cream)]">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <p 
                className="font-halimum text-2xl sm:text-3xl md:text-4xl mb-4"
                style={{ color: 'var(--accent)' }}
              >
                "I want every photo to feel like you — not posed or forced, but authentic and timeless."
              </p>
              <cite 
                className="text-sm uppercase tracking-widest not-italic"
                style={{ color: 'var(--fg-muted)' }}
              >
                — Mesa Marie
              </cite>
            </motion.blockquote>
          </div>
        </section>

        {/* Main Gallery Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Category Title */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mb-10"
            >
              <h3 
                className="text-xl sm:text-2xl font-light tracking-wide uppercase"
                style={{ color: 'var(--fg)' }}
              >
                {activeCategory === 'all' ? 'All Sessions' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Sessions`}
              </h3>
              <p className="text-sm mt-2" style={{ color: 'var(--fg-muted)' }}>
                {filteredImages.length} photos
              </p>
            </motion.div>

            {/* Masonry Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 max-w-7xl mx-auto"
              >
                {displayedImages.map((image, index) => {
                  // Find the actual index in allImages for lightbox
                  const actualIndex = allImages.findIndex(img => img.src === image.src);
                  
                  return (
                    <motion.button
                      key={image.src}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: Math.min(index * 0.03, 0.3),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      onClick={() => setLightboxIndex(actualIndex)}
                      className="block w-full mb-3 sm:mb-4 overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 img-hover touch-feedback group"
                      aria-label={`View ${image.alt}`}
                    >
                      <div className="relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={800}
                          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 300px"
                          className="w-full h-auto object-cover"
                          loading={index < 8 ? 'eager' : 'lazy'}
                        />
                        {/* Hover overlay with category tag */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-start p-3 opacity-0 group-hover:opacity-100">
                          <span className="text-white text-xs uppercase tracking-wider bg-black/50 px-2 py-1 rounded-sm">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Show More Button */}
            {!showAll && filteredImages.length > 18 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-12"
              >
                <button
                  onClick={() => setShowAll(true)}
                  className="px-8 py-3 border border-[var(--fg)] text-[var(--fg)] text-sm uppercase tracking-widest hover:bg-[var(--fg)] hover:text-white transition-all duration-300 rounded-sm touch-feedback"
                >
                  Show More ({filteredImages.length - 18} more)
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Session Types - Visual Guide */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p 
                className="font-halimum text-xl sm:text-2xl mb-2"
                style={{ color: 'var(--accent)' }}
              >
                what I capture
              </p>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide uppercase"
                style={{ color: 'var(--fg)' }}
              >
                Session Types
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Couples',
                  subtitle: 'love stories',
                  description: 'Engagements, anniversaries, or just because. Let\'s capture the way you look at each other.',
                  image: '/portfolio/couples/Copy of T&J - 9_7-115.jpg',
                  href: '/portfolio/couples'
                },
                {
                  title: 'Seniors',
                  subtitle: 'milestone moments',
                  description: 'This chapter is huge — let\'s celebrate it with photos that feel like you.',
                  image: '/portfolio/seniors/ElisaGrad-046.jpg',
                  href: '/portfolio/seniors'
                },
                {
                  title: 'Families',
                  subtitle: 'your people',
                  description: 'The chaos, the cuddles, the real moments. These are the ones you\'ll treasure forever.',
                  image: '/portfolio/families/Copy of M&D-39.png',
                  href: '/portfolio/families'
                },
              ].map((session, index) => (
                <motion.div
                  key={session.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <button
                    onClick={() => {
                      setActiveCategory(session.title.toLowerCase() as Category);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left touch-feedback"
                  >
                    <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg mb-4 img-hover">
                      <Image
                        src={session.image}
                        alt={session.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <p 
                      className="font-halimum text-lg sm:text-xl mb-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      {session.subtitle}
                    </p>
                    <h3 
                      className="text-xl sm:text-2xl font-light tracking-wide uppercase mb-2"
                      style={{ color: 'var(--fg)' }}
                    >
                      {session.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {session.description}
                    </p>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                see yourself here?
              </p>
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-light text-white tracking-wide uppercase mb-4">
                Let's Create Together
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-8 max-w-lg mx-auto">
                I'd love to hear your story and capture something beautiful for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="secondary"
                  className="bg-white text-[var(--fg)] border-white hover:bg-transparent hover:text-white"
                >
                  Get In Touch
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[var(--fg)]"
                >
                  View Pricing
                </Button>
              </div>
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
