'use client';

import { motion } from 'framer-motion';
import Button from './button';

interface CTABannerProps {
  title: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  background?: 'sky' | 'cream' | 'warm';
}

export default function CTABanner({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  background = 'cream',
}: CTABannerProps) {
  const bgColors = {
    sky: 'bg-mm-sky',
    cream: 'bg-mm-cream',
    warm: 'bg-mm-warm',
  };

  return (
    <section className={`${bgColors[background]} py-16 md:py-24`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-[--fg]">{title}</h2>

          {description && (
            <p className="text-lg md:text-xl text-[--muted] max-w-2xl mx-auto mb-8">
              {description}
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
    </section>
  );
}

