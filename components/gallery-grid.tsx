'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './lightbox';

interface GalleryGridProps {
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.05,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setLightboxIndex(index)}
            className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 shadow-mm hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-mm-slate focus:ring-offset-2"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={`(max-width: 640px) 100vw, (max-width: 1024px) ${100 / Math.min(columns, 2)}vw, ${100 / columns}vw`}
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}

