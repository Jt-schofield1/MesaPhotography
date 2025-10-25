'use client';

import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/button';
import { formatPrice } from '@/lib/utils';
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

export default function PricingPage() {
  const sections: Array<{ id: string; title: string; subtitle: string; icon: string; data: PricingItem[] }> = [
    { 
      id: 'seniors', 
      title: 'Seniors | Grads', 
      subtitle: 'Can be customizable - inquire for additional options',
      icon: '𓅰',
      data: pricingData.seniors 
    },
    { 
      id: 'couples', 
      title: 'Couples Sessions', 
      subtitle: 'Celebrate your love story',
      icon: '𓆟',
      data: pricingData.couples 
    },
    { 
      id: 'families', 
      title: 'Family Sessions', 
      subtitle: 'Capturing your crew',
      icon: '𓇼',
      data: pricingData.families 
    },
    { 
      id: 'minis', 
      title: 'Mini Sessions', 
      subtitle: 'Quick & sweet',
      icon: '𓆟',
      data: pricingData.minis 
    },
  ];

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-mm-peach/20 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <div className="text-6xl mb-4">𓆟 𓅰 𓇼</div>
              <p className="font-halimum text-4xl md:text-5xl text-mm-slate">
                transparent & affordable
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[--fg]">
                PRICING
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium">
                Beautiful photography that won't break the bank. All sessions include professional
                editing, online gallery, and my signature warm, airy style.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Sections */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-20">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + sectionIndex * 0.2, duration: 0.6 }}
                >
                  {/* Section Header with Icon */}
                  <div className="text-center mb-16">
                    <div className="text-7xl mb-6">{section.icon}</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase text-[--fg]">
                      {section.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 italic font-medium">{section.subtitle}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    {section.data.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + sectionIndex * 0.2 + index * 0.1, duration: 0.6 }}
                        className="relative bg-gradient-to-br from-white via-mm-cream/20 to-mm-sky/10 rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-4 border-mm-peach/30"
                      >
                        {/* Price Badge */}
                        <div className="absolute -top-8 -right-8 bg-gradient-to-br from-mm-peach via-[#FFD4A3] to-mm-peach text-[--fg] rounded-full w-28 h-28 flex items-center justify-center shadow-2xl transform rotate-12 border-4 border-white">
                          <div className="transform -rotate-12 text-center">
                            <div className="text-3xl font-black leading-tight">
                              {typeof item.price === 'number' ? `$${item.price}` : item.price}
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[--fg] pr-24">{item.name}</h3>
                          {item.customizable && (
                            <p className="text-base text-mm-slate font-bold italic bg-mm-sky/30 inline-block px-3 py-1 rounded-full">
                              ✨ Customizable
                            </p>
                          )}
                        </div>

                        <ul className="space-y-4 mb-10">
                          <li className="flex items-start gap-4">
                            <span className="text-3xl flex-shrink-0">⏱️</span>
                            <span className="text-lg text-gray-800 font-semibold pt-1">{item.duration}</span>
                          </li>
                          
                          {item.locations && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">📍</span>
                              <span className="text-lg text-gray-800 pt-1">{item.locations} location{item.locations > 1 ? 's' : ''}</span>
                            </li>
                          )}
                          
                          {item.outfits && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">👗</span>
                              <span className="text-lg text-gray-800 pt-1">{item.outfits}</span>
                            </li>
                          )}
                          
                          {item.images && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">📸</span>
                              <span className="text-lg text-gray-800 font-semibold pt-1">{item.images}</span>
                            </li>
                          )}
                          
                          {item.delivery && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">💫</span>
                              <span className="text-lg text-gray-800 pt-1">{item.delivery}</span>
                            </li>
                          )}
                          
                          {item.guidance && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">✨</span>
                              <span className="text-lg text-gray-800 pt-1">{item.guidance}</span>
                            </li>
                          )}
                          
                          {item.people && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">👨‍👩‍👧‍👦</span>
                              <span className="text-lg text-gray-800 pt-1">{item.people}</span>
                            </li>
                          )}
                          
                          {item.notes && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">💙</span>
                              <span className="text-lg text-gray-800 font-semibold pt-1">{item.notes}</span>
                            </li>
                          )}
                          
                          {item.perfect && (
                            <li className="flex items-start gap-4">
                              <span className="text-3xl flex-shrink-0">⭐</span>
                              <span className="text-lg text-gray-800 italic pt-1">{item.perfect}</span>
                            </li>
                          )}
                          
                          {item.inquire && (
                            <li className="flex items-start gap-4 bg-mm-slate/10 p-4 rounded-xl -mx-2">
                              <span className="text-3xl flex-shrink-0">💬</span>
                              <span className="text-lg text-mm-slate font-bold pt-1">{item.inquire}</span>
                            </li>
                          )}
                        </ul>

                        <Button
                          href={`/contact?session=${section.id}`}
                          variant="primary"
                          className="w-full text-xl"
                        >
                          Book This Session
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-mm-sky/40 via-mm-cream/20 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-6xl mb-4">𓆟 𓅰 𓇼</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[--fg]">
                  WHAT'S INCLUDED
                </h2>
                <p className="text-xl text-gray-600 italic">Every session comes with these beautiful extras</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-mm-peach/20"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-mm-peach to-[#FFD4A3] rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[--fg]">Professional Editing</h3>
                    <p className="text-lg text-gray-700">
                      Color correction, retouching, and my signature warm, airy style
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-mm-slate/20"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-mm-slate to-mm-slate/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">📸</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[--fg]">Online Gallery</h3>
                    <p className="text-lg text-gray-700">
                      Easy sharing, digital downloads, and mobile-friendly viewing
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-mm-sky/40"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-mm-sky to-mm-slate/30 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🗺️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[--fg]">Session Planning</h3>
                    <p className="text-lg text-gray-700">
                      Help with location, outfit ideas, and perfect timing
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-mm-peach/20"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-mm-peach to-mm-cream rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-[--fg]">Fast Delivery</h3>
                    <p className="text-lg text-gray-700">
                      Photos delivered within 2-3 weeks in stunning quality
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-mm-slate text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center space-y-8 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                READY TO BOOK?
              </h2>
              <p className="text-xl md:text-2xl opacity-90">
                Let's create beautiful memories together. Every session is customizable to fit YOUR
                vision!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  href="/contact"
                  className="bg-mm-peach text-[--fg] hover:bg-white text-lg px-8 py-4"
                >
                  let's do this!
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
