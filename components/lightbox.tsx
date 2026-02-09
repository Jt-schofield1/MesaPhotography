'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [goNext, goPrev, onClose]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current !== null && touchEndX.current !== null
      ? Math.abs((touchStartY.current || 0) - (touchEndX.current || 0))
      : 0;
    const minSwipeDistance = 50;

    // Only trigger if horizontal swipe is dominant
    if (Math.abs(diffX) > minSwipeDistance && Math.abs(diffX) > diffY) {
      if (diffX > 0) {
        goNext(); // Swipe left = next
      } else {
        goPrev(); // Swipe right = prev
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
  };

  const current = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      style={{
        padding: 'max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left))',
      }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button - safe area aware */}
      <button
        onClick={onClose}
        className="absolute z-10 text-white hover:text-mm-peach transition-colors p-3 focus:outline-none focus:ring-2 focus:ring-white rounded"
        style={{
          top: 'max(0.75rem, env(safe-area-inset-top))',
          right: 'max(0.75rem, env(safe-area-inset-right))',
        }}
        aria-label="Close lightbox"
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button - smaller on mobile */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-mm-peach transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white rounded hidden sm:block"
          aria-label="Previous image"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button - smaller on mobile */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-mm-peach transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white rounded hidden sm:block"
          aria-label="Next image"
        >
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-7xl max-h-[85vh] sm:max-h-[90vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Counter - safe area aware */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm"
        style={{
          bottom: 'max(0.75rem, calc(env(safe-area-inset-bottom) + 0.5rem))',
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Mobile swipe hint - only shown briefly */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs sm:hidden pointer-events-none">
        Swipe to navigate
      </div>
    </motion.div>
  );
}
