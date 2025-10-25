'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Badge from './badge';

interface CollectionCardProps {
  id: string;
  title: string;
  description: string;
  cover: string;
  imageCount: number;
  index: number;
}

export default function CollectionCard({
  id,
  title,
  description,
  cover,
  imageCount,
  index,
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
    >
      <Link
        href={`/portfolio/${id}`}
        className="group block overflow-hidden rounded-lg shadow-mm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mm-slate focus:ring-offset-2"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-[--fg] group-hover:text-mm-slate transition-colors">
              {title}
            </h3>
            <Badge>{imageCount} photos</Badge>
          </div>
          <p className="text-[--muted]">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

