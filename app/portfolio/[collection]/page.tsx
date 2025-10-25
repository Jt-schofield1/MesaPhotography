'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GalleryGrid from '@/components/gallery-grid';
import Button from '@/components/button';
import { getCollection, getAllCollections } from '@/lib/collections';
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
      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-mm-cream to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <p className="font-halimun text-3xl md:text-4xl text-mm-slate capitalize">
                {collection.title} sessions
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase">
                {collection.title}
              </h1>
              <p className="text-xl md:text-2xl text-[--muted]">{collection.description}</p>
              <div className="flex items-center justify-center gap-2 text-mm-slate">
                <span className="text-lg font-medium">{collection.images.length} photos</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <GalleryGrid images={images} columns={3} />
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
                READY FOR YOUR
                <br />
                {collection.title.toUpperCase()} SESSION?
              </h2>
              <p className="text-xl md:text-2xl opacity-90">
                Let's create something beautiful together. I can't wait to capture your story!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  href={`/contact?session=${collectionId}`}
                  className="bg-mm-peach text-[--fg] hover:bg-white text-lg px-8 py-4"
                >
                  let's do this!
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-mm-slate text-lg px-8 py-4"
                >
                  view pricing
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

