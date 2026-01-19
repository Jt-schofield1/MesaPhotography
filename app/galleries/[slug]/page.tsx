'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';

type GalleryImage = {
  url: string;
  width: number;
  height: number;
  format: string;
  public_id: string;
};

export default function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Check if already verified via cookie
  useEffect(() => {
    if (document.cookie.includes(`mmg_${slug}=true`)) {
      setVerified(true);
      loadImages();
    }
  }, [slug]);

  async function loadImages() {
    setLoadingImages(true);
    try {
      const response = await fetch(`/api/cloudinary/list?slug=${slug}`);
      const data = await response.json();

      if (response.ok && data.images) {
        setImages(data.images);
      } else {
        setError(data.error || 'Failed to load images');
      }
    } catch (err) {
      setError('Failed to load gallery images');
    } finally {
      setLoadingImages(false);
    }
  }

  async function handleVerify() {
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/access/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, password }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setVerified(true);
        loadImages();
      } else {
        setError(data.error || 'Incorrect password');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDownloadAll() {
    try {
      const response = await fetch(`/api/cloudinary/zip?slug=${slug}`);
      const data = await response.json();

      if (response.ok && data.zipUrl) {
        window.open(data.zipUrl, '_blank');
      } else {
        alert(data.error || 'Download is not available');
      }
    } catch (err) {
      alert('Failed to generate download link');
    }
  }

  function openLightbox(index: number) {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function nextImage() {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  // Password gate
  if (!verified) {
    return (
      <>
        <Header />
        <main id="main-content" className="min-h-screen pt-24 pb-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg mx-auto text-center pt-12 md:pt-20"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--mm-cream)' }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 
                className="text-3xl sm:text-4xl font-light tracking-wide uppercase mb-4"
                style={{ color: 'var(--fg)' }}
              >
                Password Protected
              </h1>
              <p 
                className="text-lg mb-10"
                style={{ color: 'var(--fg-muted)' }}
              >
                This gallery is private. Please enter your password to view.
              </p>

              <div className="space-y-5">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                  placeholder="Enter Password"
                  className="w-full px-6 py-4 text-center border border-gray-200 rounded-sm bg-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-300"
                  style={{ color: 'var(--fg)' }}
                  disabled={loading}
                />

                <button
                  onClick={handleVerify}
                  disabled={loading || !password}
                  className="w-full py-4 text-sm uppercase tracking-widest text-white transition-all duration-500 disabled:opacity-50"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  {loading ? 'Verifying...' : 'View Gallery'}
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm"
                    role="alert"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <p className="mt-10 text-sm" style={{ color: 'var(--fg-muted)' }}>
                Password was provided in your gallery delivery email
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Gallery view
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16 pt-8">
              <p 
                className="font-halimum text-2xl md:text-3xl mb-4"
                style={{ color: 'var(--accent)' }}
              >
                your memories
              </p>
              <h1 
                className="text-4xl sm:text-5xl font-light tracking-wide uppercase mb-4"
                style={{ color: 'var(--fg)' }}
              >
                Your Gallery
              </h1>
              <p style={{ color: 'var(--fg-muted)' }}>
                {images.length} {images.length === 1 ? 'photo' : 'photos'}
              </p>
            </div>

            {loadingImages ? (
              <div className="text-center py-20">
                <div className="animate-pulse-subtle">
                  <p className="text-xl" style={{ color: 'var(--fg-muted)' }}>Loading your photos...</p>
                </div>
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl" style={{ color: 'var(--fg-muted)' }}>No photos found in this gallery</p>
              </div>
            ) : (
              <>
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {images.map((image, index) => (
                    <motion.div
                      key={image.public_id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.5 }}
                      className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-50 cursor-pointer group img-hover"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image.url}
                        alt={`Gallery photo ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Button */}
                <div className="text-center mt-16">
                  <button
                    onClick={handleDownloadAll}
                    className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest text-white transition-all duration-500 hover:opacity-90"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download All Photos
                  </button>
                  <p className="text-sm mt-4" style={{ color: 'var(--fg-muted)' }}>
                    High-resolution images will be downloaded
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {lightboxOpen && images[selectedImageIndex] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 w-12 h-12 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white/80 hover:text-white z-10 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white/80 hover:text-white z-10 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center px-16" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImageIndex].url}
              alt={`Gallery photo ${selectedImageIndex + 1}`}
              width={images[selectedImageIndex].width}
              height={images[selectedImageIndex].height}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              quality={100}
            />
          </div>

          {/* Image counter & download */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-white space-y-3">
            <p className="text-sm tracking-widest">
              {selectedImageIndex + 1} / {images.length}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const downloadUrl = images[selectedImageIndex].url.replace('/upload/', '/upload/fl_attachment/');
                window.open(downloadUrl, '_blank');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-sm hover:bg-gray-100 transition-colors text-sm uppercase tracking-widest"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
