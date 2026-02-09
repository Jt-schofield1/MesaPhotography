'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';
import pricingData from '@/content/pricing.json';

type PricingItem = {
  name: string;
  price: number | string;
  duration: string;
  locations?: number;
  outfits?: string;
  images?: string;
  delivery?: string;
  guidance?: string;
  people?: string;
  notes?: string;
  perfect?: string;
  inquire?: string;
  customizable?: boolean;
};

export default function PricingPageClient() {
  const sections = [
    { 
      id: 'couples', 
      title: 'Couples',
      image: '/portfolio/couples/Copy of T&J - 9_7-115.jpg',
      data: pricingData.couples 
    },
    { 
      id: 'seniors', 
      title: 'Seniors | Grads',
      image: '/portfolio/seniors/Copy of leilasenior-43.png',
      data: pricingData.seniors 
    },
  ];

  const secondRow = [
    { 
      id: 'minis', 
      title: 'Mini Sessions',
      image: '/portfolio/Photos for Website and Portfolio/corajo.png',
      data: pricingData.minis 
    },
    { 
      id: 'families', 
      title: 'Families',
      image: '/portfolio/families/Copy of savoiafamiy-24.png',
      data: pricingData.families 
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero - Clean and minimal */}
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
                Services
              </h1>
            </motion.div>
          </div>
        </section>

        {/* First Row - Couples & Seniors with Images */}
        <section className="py-8 sm:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.15, duration: 0.6 }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg img-hover mb-6 sm:mb-8">
                    <Image
                      src={section.image}
                      alt={`${section.title} photography by Mesa Marie`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h2 
                    className="text-xl xs:text-2xl md:text-3xl font-light tracking-wide uppercase text-center mb-4 sm:mb-6"
                    style={{ color: 'var(--fg)' }}
                  >
                    {section.title}
                  </h2>

                  {/* Pricing Details */}
                  <div className="space-y-4 sm:space-y-6">
                    {section.data.map((item: PricingItem, index: number) => (
                      <div key={index} className="text-center">
                        <p className="text-base sm:text-lg mb-1 sm:mb-2" style={{ color: 'var(--fg)' }}>
                          {item.duration}
                        </p>
                        {item.locations && (
                          <p className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                            {item.locations} location{item.locations > 1 ? 's' : ''}
                          </p>
                        )}
                        {item.outfits && (
                          <p className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                            {item.outfits}
                          </p>
                        )}
                        {item.guidance && (
                          <p className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                            {item.guidance}
                          </p>
                        )}
                        {item.images && (
                          <p className="text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
                            {item.images}
                          </p>
                        )}
                        {index < section.data.length - 1 && (
                          <div className="w-8 h-px mx-auto my-3 sm:my-4" style={{ backgroundColor: 'var(--accent)' }}></div>
                        )}
                      </div>
                    ))}
                    {/* Inquire for pricing */}
                    <div className="text-center pt-2">
                      <Button href="/contact" variant="ghost" className="text-sm">
                        Inquire for Pricing
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Second Row - Families & Minis with Side Images */}
        <section className="py-8 sm:py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
              {secondRow.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className={`relative aspect-square rounded-sm overflow-hidden shadow-lg img-hover ${sectionIndex % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={section.image}
                      alt={`${section.title} photography by Mesa Marie`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`text-center ${sectionIndex % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h2 
                      className="text-xl xs:text-2xl md:text-3xl font-light tracking-wide uppercase mb-4 sm:mb-6"
                      style={{ color: 'var(--fg)' }}
                    >
                      {section.title}
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                      {section.data.map((item: PricingItem, index: number) => (
                        <div key={index}>
                          <h3 className="font-medium mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: 'var(--fg)' }}>
                            {item.name}
                          </h3>
                          <p className="text-xl sm:text-2xl font-light mb-1 sm:mb-2" style={{ color: 'var(--accent)' }}>
                            {typeof item.price === 'number' ? `$${item.price}` : item.price}
                          </p>
                          <ul className="text-xs sm:text-sm space-y-1" style={{ color: 'var(--fg-muted)' }}>
                            <li>{item.duration}</li>
                            {item.locations && <li>{item.locations} location</li>}
                            {item.images && <li>{item.images}</li>}
                            {item.people && <li>{item.people}</li>}
                            {item.notes && <li>{item.notes}</li>}
                            {item.perfect && <li className="italic">{item.perfect}</li>}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Arrow/Direction indicator */}
        <section className="py-8 sm:py-12 bg-white" aria-hidden="true">
          <div className="flex justify-center">
            <svg 
              width="32" 
              height="64" 
              viewBox="0 0 40 80" 
              fill="none"
              style={{ color: 'var(--accent)' }}
              className="sm:w-10 sm:h-20"
            >
              <path d="M20 0V70M20 70L5 55M20 70L35 55" stroke="currentColor" strokeWidth="2"/>
            </svg>
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
                Ready to Book?
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
                Let's create beautiful memories together. Every session is customizable to fit your vision!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="secondary"
                  className="bg-white text-[var(--fg)] border-white hover:bg-transparent hover:text-white"
                >
                  Let's Do This!
                </Button>
                <Button 
                  href="/portfolio" 
                  variant="secondary"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-[var(--fg)]"
                >
                  View Portfolio
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
