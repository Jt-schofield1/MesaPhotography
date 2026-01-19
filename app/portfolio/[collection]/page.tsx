'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GalleryGrid from '@/components/gallery-grid';
import Button from '@/components/button';
import { getCollection } from '@/lib/collections';
import { use } from 'react';

type Props = {
  params: Promise<{ collection: string }>;
};

export default function CollectionPage({ params }: Props) {
  const { collection: collectionId } = use(params);
  const collection = getCollection(collectionId);

  if (!collection) {
    notFound();
  }

  const images = collection.images.map((img) => ({
    src: `/portfolio/${collectionId}/${img}`,
    alt: `${collection.title} photo - ${img}`,
  }));

  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 bg-white">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
              <p 
                className="font-halimum text-2xl md:text-3xl mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {collection.title.toLowerCase()} sessions
              </p>
              <h1 
                className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide uppercase mb-6"
                style={{ color: 'var(--fg)' }}
              >
                {collection.title}
              </h1>
              <p 
                className="text-lg md:text-xl leading-relaxed mb-6"
                style={{ color: 'var(--fg-muted)' }}
              >
                {collection.description}
              </p>
              <p style={{ color: 'var(--accent)' }}>
                {collection.images.length} photos
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center gap-4 py-8">
          <span style={{ color: 'var(--accent)' }}>✶</span>
          <span style={{ color: 'var(--accent)' }}>✶</span>
          <span style={{ color: 'var(--accent)' }}>✶</span>
        </div>

        {/* Gallery */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <GalleryGrid images={images} columns={3} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--accent)' }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="font-halimum text-2xl text-white/80 mb-4">
                ready for your session?
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide uppercase mb-6">
                Book Your {collection.title} Session
              </h2>
              <p className="text-lg text-white/80 mb-10">
                Let's create something beautiful together. I can't wait to capture your story!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={`/contact?session=${collectionId}`}
                  className="bg-white text-[var(--fg)] hover:bg-transparent hover:text-white border-2 border-white"
                >
                  Let's Do This!
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-[var(--fg)]"
                >
                  View Pricing
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
