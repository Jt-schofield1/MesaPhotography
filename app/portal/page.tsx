'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Gallery = {
  id: string;
  slug: string;
  client_name: string;
  access_code: string;
  cloudinary_folder: string;
  allow_zip: boolean;
  expires_at: string | null;
  created_at: string;
};

export default function PortalPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authToken = sessionStorage.getItem('admin_auth');
    if (authToken) {
      setAuthenticated(true);
      loadGalleries();
    } else {
      setLoading(false);
    }
  }, []);

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    sessionStorage.setItem('admin_auth', password);
    setAuthenticated(true);
    loadGalleries();
  }

  async function loadGalleries() {
    setLoading(true);
    try {
      const authToken = sessionStorage.getItem('admin_auth');
      const response = await fetch('/api/admin/galleries', {
        headers: {
          'Authorization': `Basic ${btoa(`:${authToken}`)}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          sessionStorage.removeItem('admin_auth');
          setAuthenticated(false);
          setError('Invalid password');
          return;
        }
        throw new Error('Failed to load galleries');
      }

      const data = await response.json();
      setGalleries(data);
    } catch (err) {
      setError('Failed to load galleries');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem('admin_auth');
    setAuthenticated(false);
    setGalleries([]);
  }

  // Auth gate
  if (!authenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-10">
            <p 
              className="font-halimum text-2xl mb-2"
              style={{ color: 'var(--accent)' }}
            >
              mesa marie
            </p>
            <h1 
              className="text-3xl font-light tracking-wide uppercase"
              style={{ color: 'var(--fg)' }}
            >
              Admin Portal
            </h1>
            <p className="mt-2" style={{ color: 'var(--fg-muted)' }}>
              Client Galleries Management
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-5">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full px-4 py-4 border border-gray-200 rounded-sm bg-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-300"
              style={{ color: 'var(--fg)' }}
              required
            />
            <button 
              type="submit" 
              className="w-full py-4 text-sm uppercase tracking-widest text-white transition-all duration-500"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Sign In
            </button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </form>
        </motion.div>
      </main>
    );
  }

  // Portal view
  return (
    <main className="min-h-screen p-6 md:p-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <p 
              className="font-halimum text-xl mb-1"
              style={{ color: 'var(--accent)' }}
            >
              mesa marie
            </p>
            <h1 
              className="text-2xl md:text-3xl font-light tracking-wide uppercase"
              style={{ color: 'var(--fg)' }}
            >
              Admin Portal
            </h1>
          </div>
          <button 
            onClick={handleLogout} 
            className="text-sm underline transition-colors"
            style={{ color: 'var(--fg-muted)' }}
          >
            Logout
          </button>
        </div>

        {/* Action Button */}
        <div className="mb-8">
          <Link 
            href="/portal/new" 
            className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest text-white transition-all duration-500 hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            Create New Gallery
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: 'var(--fg-muted)' }}>Loading galleries...</p>
          </div>
        ) : error ? (
          <div className="p-6 rounded-sm border border-red-200 bg-red-50 text-red-700">
            {error}
          </div>
        ) : galleries.length === 0 ? (
          <div className="p-12 rounded-sm text-center" style={{ backgroundColor: 'var(--mm-cream)' }}>
            <p className="text-lg mb-4" style={{ color: 'var(--fg)' }}>No galleries yet</p>
            <Link 
              href="/portal/new" 
              className="underline transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              Create your first gallery
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-hidden rounded-sm border border-gray-100">
              <table className="w-full">
                <thead style={{ backgroundColor: 'var(--mm-cream)' }}>
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg)' }}>Client</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg)' }}>Slug</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg)' }}>Access Code</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg)' }}>Folder</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg)' }}>ZIP</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg)' }}>Created</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg)' }}>Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {galleries.map((gallery) => (
                    <tr key={gallery.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium" style={{ color: 'var(--fg)' }}>{gallery.client_name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/galleries/${gallery.slug}`}
                          className="underline transition-colors"
                          style={{ color: 'var(--accent)' }}
                          target="_blank"
                        >
                          {gallery.slug}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <code className="px-2 py-1 rounded-sm text-xs font-mono" style={{ backgroundColor: 'var(--mm-cream)' }}>
                          {gallery.access_code}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: 'var(--fg-muted)' }}>
                        {gallery.cloudinary_folder}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {gallery.allow_zip ? '✓' : '✗'}
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ color: 'var(--fg-muted)' }}>
                        {new Date(gallery.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/portal/${gallery.slug}/upload`}
                          className="inline-flex items-center gap-1 px-4 py-2 text-xs uppercase tracking-wider text-white rounded-sm transition-all hover:opacity-90"
                          style={{ backgroundColor: 'var(--accent)' }}
                        >
                          Upload
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
              {galleries.map((gallery) => (
                <motion.div 
                  key={gallery.id} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-sm border border-gray-100 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg" style={{ color: 'var(--fg)' }}>{gallery.client_name}</h3>
                      <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                        {new Date(gallery.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Link
                      href={`/portal/${gallery.slug}/upload`}
                      className="px-4 py-2 text-xs uppercase tracking-wider text-white rounded-sm"
                      style={{ backgroundColor: 'var(--accent)' }}
                    >
                      Upload
                    </Link>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span style={{ color: 'var(--fg-muted)' }}>Code:</span>
                      <code className="px-2 py-1 rounded-sm text-xs font-mono" style={{ backgroundColor: 'var(--mm-cream)' }}>
                        {gallery.access_code}
                      </code>
                    </div>
                    <div>
                      <span style={{ color: 'var(--fg-muted)' }}>Slug: </span>
                      <Link
                        href={`/galleries/${gallery.slug}`}
                        className="underline"
                        style={{ color: 'var(--accent)' }}
                        target="_blank"
                      >
                        {gallery.slug}
                      </Link>
                    </div>
                    <div className="text-xs truncate" style={{ color: 'var(--fg-muted)' }}>
                      Folder: {gallery.cloudinary_folder}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
