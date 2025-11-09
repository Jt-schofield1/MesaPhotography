'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
      // Get auth token from sessionStorage
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
      
      // Check if galleries is an array
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
    
    // Start uploading each file
    newUploads.forEach((upload, index) => {
      uploadFile(upload.file, uploads.length + index);
    });
  }

  async function uploadFile(file: File, index: number) {
    try {
      // Update status to uploading
      setUploads(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], status: 'uploading' };
        return updated;
      });

      // Get signature from our API
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

      // Upload to Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp.toString());
      formData.append('api_key', apikey);
      formData.append('folder', folder);

      const xhr = new XMLHttpRequest();

      // Track upload progress
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

      // Handle completion
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

      // Handle errors
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

      // Send request
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
      <main className="p-10">
        <p>Loading gallery...</p>
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
    <main className="p-4 sm:p-6 md:p-10 max-w-5xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <button 
              onClick={() => router.push('/portal')}
              className="text-[var(--mm-peach)] hover:underline mb-4 text-sm sm:text-base"
            >
              ← Back to Portal
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Upload Photos</h1>
            <p className="text-sm sm:text-base text-[--fg]">
              Gallery: <span className="font-semibold">{gallery.client_name}</span> ({slug})
            </p>
            <p className="text-xs sm:text-sm text-[--fg] truncate">
              Folder: {gallery.cloudinary_folder}
            </p>
      </div>

      {/* Upload stats */}
      {uploads.length > 0 && (
        <div className="mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
          <div>
            <span className="font-semibold">Total:</span> {uploads.length}
          </div>
          {uploadingCount > 0 && (
            <div className="text-blue-600">
              <span className="font-semibold">Uploading:</span> {uploadingCount}
            </div>
          )}
          {successCount > 0 && (
            <div className="text-green-600">
              <span className="font-semibold">Success:</span> {successCount}
            </div>
          )}
          {errorCount > 0 && (
            <div className="text-red-600">
              <span className="font-semibold">Failed:</span> {errorCount}
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
          border-2 border-dashed rounded-xl p-6 sm:p-12 text-center transition-all touch-manipulation
          ${isDragging 
            ? 'border-[var(--mm-peach)] bg-[var(--mm-peach)]/10' 
            : 'border-gray-300 hover:border-[var(--mm-peach)]'
          }
        `}
      >
        <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📸</div>
            <h2 className="text-lg sm:text-2xl font-semibold mb-2">Drag & Drop Photos Here</h2>
            <p className="text-sm sm:text-base text-[--fg] mb-4 sm:mb-6">or</p>
        <label className="btn-primary cursor-pointer inline-block text-sm sm:text-base px-6 py-3">
          Choose Files
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </label>
            <p className="text-xs sm:text-sm text-[--fg] mt-3 sm:mt-4">
              Supports: JPG, PNG, WEBP, GIF
            </p>
      </div>

      {/* Upload Progress List */}
      {uploads.length > 0 && (
        <div className="mt-6 sm:mt-8 space-y-3">
          <h3 className="font-semibold text-base sm:text-lg mb-4">Upload Progress</h3>
          {uploads.map((upload, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border rounded-lg p-3 sm:p-4 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between mb-2 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div className="text-xl sm:text-2xl flex-shrink-0">
                    {upload.status === 'success' && '✅'}
                    {upload.status === 'error' && '❌'}
                    {upload.status === 'uploading' && '⏳'}
                    {upload.status === 'pending' && '⏸️'}
                  </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-xs sm:text-sm truncate">{upload.file.name}</p>
                        <p className="text-xs text-[--fg]">
                          {(upload.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold flex-shrink-0">
                  {upload.status === 'uploading' && `${upload.progress}%`}
                  {upload.status === 'success' && 'Done'}
                  {upload.status === 'error' && 'Failed'}
                </div>
              </div>
              
              {/* Progress bar */}
              {upload.status === 'uploading' && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[var(--mm-peach)] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${upload.progress}%` }}
                  />
                </div>
              )}

              {/* Error message */}
              {upload.status === 'error' && upload.error && (
                <p className="text-xs sm:text-sm text-red-600 mt-2">{upload.error}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Done button */}
      {successCount > 0 && uploadingCount === 0 && (
        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={() => router.push('/portal')}
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 touch-manipulation"
          >
            Done - Back to Portal
          </button>
        </div>
      )}
    </main>
  );
}

