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
  const [zipUrl, setZipUrl] = useState('');
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
        <main id="main-content" className="min-h-screen pt-24 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="text-6xl mb-6">🔒</div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[--fg]">
                Password Protected
              </h1>
                  <p className="text-lg text-[--fg] mb-8">
                    This gallery is private. Please enter your password to view.
                  </p>

              <div className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                  placeholder="Enter Password"
                  className="input w-full text-center"
                  disabled={loading}
                />

                <button
                  onClick={handleVerify}
                  disabled={loading || !password}
                  className="btn-primary w-full"
                >
                  {loading ? 'Verifying...' : 'View Gallery'}
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-sm"
                    role="alert"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

                  <div className="mt-8 text-sm text-[--fg]">
                    <p>Password was provided in your gallery delivery email</p>
                  </div>
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
      <main id="main-content" className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[--fg]">Your Gallery</h1>
                  <p className="text-lg text-[--fg]">
                    {images.length} {images.length === 1 ? 'photo' : 'photos'}
                  </p>
            </div>

            {loadingImages ? (
                  <div className="text-center py-20">
                    <p className="text-xl text-[--fg]">Loading your photos...</p>
                  </div>
                ) : images.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-xl text-[--fg]">No photos found in this gallery</p>
                  </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {images.map((image, index) => (
                    <motion.div
                      key={image.public_id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 shadow-mm hover:shadow-xl transition-all cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image.url}
                        alt={`Gallery photo ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                          🔍
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={handleDownloadAll}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Download All Photos (ZIP)
                  </button>
                      <p className="text-sm text-[--fg] mt-4">
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
          {/* Close button - Touch friendly */}
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-4xl sm:text-5xl hover:text-gray-300 z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous button - Touch friendly */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-4 text-white text-4xl sm:text-5xl hover:text-gray-300 z-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-black/30 rounded-full"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next button - Touch friendly */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-4 text-white text-4xl sm:text-5xl hover:text-gray-300 z-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-black/30 rounded-full"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image */}
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center px-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImageIndex].url}
              alt={`Gallery photo ${selectedImageIndex + 1}`}
              width={images[selectedImageIndex].width}
              height={images[selectedImageIndex].height}
              className="max-w-full max-h-[75vh] sm:max-h-[85vh] w-auto h-auto object-contain"
              quality={100}
            />
          </div>

          {/* Image counter & download - Mobile optimized */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center text-white space-y-2 px-4">
            <p className="text-base sm:text-lg font-medium">
              {selectedImageIndex + 1} / {images.length}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Use Cloudinary's fl_attachment flag to force download
                const downloadUrl = images[selectedImageIndex].url.replace('/upload/', '/upload/fl_attachment/');
                window.open(downloadUrl, '_blank');
              }}
              className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium touch-manipulation"
            >
              📥 Download Photo
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

