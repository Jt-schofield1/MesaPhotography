'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

type UploadStatus = {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
  url?: string;
};

export default function UploadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [gallery, setGallery] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    fetchGallery();
  }, [slug]);

  async function fetchGallery() {
    try {
      const authToken = sessionStorage.getItem('admin_auth');
      if (!authToken) {
        alert('Please log in to the portal first');
        router.push('/portal');
        return;
      }

      const response = await fetch('/api/admin/galleries', {
        headers: {
          'Authorization': `Basic ${btoa(`:${authToken}`)}`,
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          alert('Session expired. Please log in again.');
          router.push('/portal');
          return;
        }
        throw new Error('Failed to fetch galleries');
      }
      
      const galleries = await response.json();
      
      if (!Array.isArray(galleries)) {
        console.error('Unexpected response format:', galleries);
        throw new Error('Invalid response from API');
      }
      
      const found = galleries.find((g: any) => g.slug === slug);
      
      if (!found) {
        alert('Gallery not found');
        router.push('/portal');
        return;
      }
      
      setGallery(found);
    } catch (error) {
      console.error('Error fetching gallery:', error);
      alert('Failed to load gallery. Please try again.');
      router.push('/portal');
    } finally {
      setLoading(false);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      handleFiles(files);
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      handleFiles(files);
    }
  }

  function handleFiles(files: File[]) {
    const newUploads: UploadStatus[] = files.map(file => ({
      file,
      progress: 0,
      status: 'pending',
    }));
    
    setUploads(prev => [...prev, ...newUploads]);
    
    newUploads.forEach((upload, index) => {
      uploadFile(upload.file, uploads.length + index);
    });
  }

  async function uploadFile(file: File, index: number) {
    try {
      setUploads(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], status: 'uploading' };
        return updated;
      });

      const sigResponse = await fetch('/api/cloudinary/signature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder: gallery.cloudinary_folder }),
      });

      if (!sigResponse.ok) {
        const errorData = await sigResponse.json();
        console.error('Signature error:', errorData);
        throw new Error(errorData.details || errorData.error || 'Failed to get upload signature');
      }

      const { signature, timestamp, cloudname, apikey, folder } = await sigResponse.json();

      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp.toString());
      formData.append('api_key', apikey);
      formData.append('folder', folder);

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploads(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], progress };
            return updated;
          });
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setUploads(prev => {
            const updated = [...prev];
            updated[index] = { 
              ...updated[index], 
              status: 'success',
              progress: 100,
              url: response.secure_url 
            };
            return updated;
          });
        } else {
          throw new Error('Upload failed');
        }
      });

      xhr.addEventListener('error', () => {
        setUploads(prev => {
          const updated = [...prev];
          updated[index] = { 
            ...updated[index], 
            status: 'error',
            error: 'Upload failed' 
          };
          return updated;
        });
      });

      xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`);
      xhr.send(formData);

    } catch (error) {
      console.error('Upload error:', error);
      setUploads(prev => {
        const updated = [...prev];
        updated[index] = { 
          ...updated[index], 
          status: 'error',
          error: error instanceof Error ? error.message : 'Upload failed' 
        };
        return updated;
      });
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <p style={{ color: 'var(--fg-muted)' }}>Loading gallery...</p>
      </main>
    );
  }

  if (!gallery) {
    return null;
  }

  const successCount = uploads.filter(u => u.status === 'success').length;
  const errorCount = uploads.filter(u => u.status === 'error').length;
  const uploadingCount = uploads.filter(u => u.status === 'uploading').length;

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link 
            href="/portal" 
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors hover:opacity-70"
            style={{ color: 'var(--accent)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portal
          </Link>
          <h1 
            className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-2"
            style={{ color: 'var(--fg)' }}
          >
            Upload Photos
          </h1>
          <p style={{ color: 'var(--fg-muted)' }}>
            Gallery: <span className="font-medium">{gallery.client_name}</span> ({slug})
          </p>
          <p className="text-sm truncate" style={{ color: 'var(--fg-muted)' }}>
            Folder: {gallery.cloudinary_folder}
          </p>
        </div>

        {/* Upload stats */}
        {uploads.length > 0 && (
          <div 
            className="mb-8 p-4 rounded-sm flex flex-wrap gap-6 text-sm"
            style={{ backgroundColor: 'var(--mm-cream)' }}
          >
            <div>
              <span className="font-medium" style={{ color: 'var(--fg)' }}>Total:</span>{' '}
              <span style={{ color: 'var(--fg-muted)' }}>{uploads.length}</span>
            </div>
            {uploadingCount > 0 && (
              <div style={{ color: 'var(--accent)' }}>
                <span className="font-medium">Uploading:</span> {uploadingCount}
              </div>
            )}
            {successCount > 0 && (
              <div className="text-green-600">
                <span className="font-medium">Success:</span> {successCount}
              </div>
            )}
            {errorCount > 0 && (
              <div className="text-red-600">
                <span className="font-medium">Failed:</span> {errorCount}
              </div>
            )}
          </div>
        )}

        {/* Drag & Drop Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-sm p-12 text-center transition-all duration-300
            ${isDragging 
              ? 'border-[var(--accent)] bg-[var(--accent)]/5' 
              : 'border-gray-200 hover:border-[var(--accent)]'
            }
          `}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--mm-cream)' }}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-light tracking-wide uppercase mb-2" style={{ color: 'var(--fg)' }}>
            Drag & Drop Photos Here
          </h2>
          <p className="mb-6" style={{ color: 'var(--fg-muted)' }}>or</p>
          <label 
            className="inline-block px-8 py-3 text-sm uppercase tracking-widest text-white cursor-pointer transition-all duration-500 hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            Choose Files
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>
          <p className="text-xs mt-6" style={{ color: 'var(--fg-muted)' }}>
            Supports: JPG, PNG, WEBP, GIF
          </p>
        </div>

        {/* Upload Progress List */}
        {uploads.length > 0 && (
          <div className="mt-10 space-y-3">
            <h3 className="font-medium mb-4" style={{ color: 'var(--fg)' }}>Upload Progress</h3>
            {uploads.map((upload, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-gray-100 rounded-sm p-4"
              >
                <div className="flex items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="text-lg flex-shrink-0">
                      {upload.status === 'success' && <span className="text-green-600">✓</span>}
                      {upload.status === 'error' && <span className="text-red-600">✗</span>}
                      {upload.status === 'uploading' && <span style={{ color: 'var(--accent)' }}>↑</span>}
                      {upload.status === 'pending' && <span style={{ color: 'var(--fg-muted)' }}>○</span>}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm truncate" style={{ color: 'var(--fg)' }}>{upload.file.name}</p>
                      <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>
                        {(upload.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-medium flex-shrink-0">
                    {upload.status === 'uploading' && <span style={{ color: 'var(--accent)' }}>{upload.progress}%</span>}
                    {upload.status === 'success' && <span className="text-green-600">Done</span>}
                    {upload.status === 'error' && <span className="text-red-600">Failed</span>}
                  </div>
                </div>
                
                {upload.status === 'uploading' && (
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${upload.progress}%`, backgroundColor: 'var(--accent)' }}
                    />
                  </div>
                )}

                {upload.status === 'error' && upload.error && (
                  <p className="text-xs text-red-600 mt-2">{upload.error}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Done button */}
        {successCount > 0 && uploadingCount === 0 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => router.push('/portal')}
              className="px-10 py-4 text-sm uppercase tracking-widest text-white transition-all duration-500 hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Done - Back to Portal
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
