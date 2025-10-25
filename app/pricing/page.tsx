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
                            <p className="text-sm text-mm-slate font-bold bg-mm-sky/30 inline-block px-3 py-1.5 rounded-full uppercase tracking-wide">
                              Customizable
                            </p>
                          )}
                        </div>

                        <ul className="space-y-4 mb-10">
                          <li className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-lg text-gray-800 font-semibold">{item.duration}</span>
                          </li>
                          
                          {item.locations && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-lg text-gray-800">{item.locations} location{item.locations > 1 ? 's' : ''}</span>
                            </li>
                          )}
                          
                          {item.outfits && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                              </svg>
                              <span className="text-lg text-gray-800">{item.outfits}</span>
                            </li>
                          )}
                          
                          {item.images && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-lg text-gray-800 font-semibold">{item.images}</span>
                            </li>
                          )}
                          
                          {item.delivery && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <span className="text-lg text-gray-800">{item.delivery}</span>
                            </li>
                          )}
                          
                          {item.guidance && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                              <span className="text-lg text-gray-800">{item.guidance}</span>
                            </li>
                          )}
                          
                          {item.people && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span className="text-lg text-gray-800">{item.people}</span>
                            </li>
                          )}
                          
                          {item.notes && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-peach flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              <span className="text-lg text-gray-800 font-semibold">{item.notes}</span>
                            </li>
                          )}
                          
                          {item.perfect && (
                            <li className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-lg text-gray-800 italic">{item.perfect}</span>
                            </li>
                          )}
                          
                          {item.inquire && (
                            <li className="flex items-start gap-3 bg-mm-slate/10 p-4 rounded-xl -mx-2">
                              <svg className="w-5 h-5 text-mm-slate flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                              <span className="text-lg text-mm-slate font-bold">{item.inquire}</span>
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mm-peach to-[#FFD4A3] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mm-slate to-mm-slate/80 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mm-sky to-mm-slate/30 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mm-peach to-mm-cream rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
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
