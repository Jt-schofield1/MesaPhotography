'use client';

import { motion } from 'framer-motion';
import Button from './button';

interface HeroProps {
  title: string;
  subtitle?: string;
  slogan?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  imageSrc?: string;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  slogan,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  overlay = true,
}: HeroProps) {
  return (
    <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          {overlay && (
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 240, 200, 0.6), transparent 60%)',
              }}
            />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {slogan && (
            <p className="font-halimum text-3xl md:text-4xl lg:text-5xl mb-4 text-[--fg]">
              {slogan}
            </p>
          )}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[--fg] text-balance">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-[--muted] max-w-3xl mx-auto mb-12 italic text-balance">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Button href={primaryCTA.href} variant="primary">
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
      >
        <svg
          className="w-6 h-6 text-[--fg]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
}

