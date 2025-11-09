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
    // Check if already authenticated
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
    
    // Store in session
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
      <main className="min-h-screen flex items-center justify-center p-4 bg-mm-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8"
        >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[--fg] mb-2">Admin Portal</h1>
                <p className="text-[--fg]">Client Galleries Management</p>
              </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="input w-full"
              required
            />
            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          </form>
        </motion.div>
      </main>
    );
  }

  // Portal view
  return (
    <main className="min-h-screen p-4 md:p-10 bg-mm-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[--fg] mb-2">Admin Portal</h1>
                <p className="text-[--fg]">Manage client galleries</p>
              </div>
              <button onClick={handleLogout} className="text-sm underline text-[--fg] hover:text-mm-peach">
                Logout
              </button>
        </div>

        <div className="mb-8">
          <Link href="/portal/new" className="btn-primary inline-block">
            + Create New Gallery
          </Link>
        </div>

            {loading ? (
              <div className="text-center py-20">
                <p className="text-xl text-[--fg]">Loading galleries...</p>
              </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            {error}
          </div>
        ) : galleries.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-xl text-[--fg] mb-4">No galleries yet</p>
                <Link href="/portal/new" className="text-mm-peach underline hover:text-mm-slate">
                  Create your first gallery
                </Link>
              </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-mm-sky">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[--fg] uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[--fg] uppercase tracking-wider">
                        Slug
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[--fg] uppercase tracking-wider">
                        Access Code
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[--fg] uppercase tracking-wider">
                        Folder
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[--fg] uppercase tracking-wider">
                        ZIP
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[--fg] uppercase tracking-wider">
                        Created
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[--fg] uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {galleries.map((gallery) => (
                      <tr key={gallery.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-[--fg]">{gallery.client_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[--muted]">
                          <Link
                            href={`/galleries/${gallery.slug}`}
                            className="text-mm-slate hover:underline"
                            target="_blank"
                          >
                            {gallery.slug}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-mm-cream rounded text-sm font-mono">
                            {gallery.access_code}
                          </code>
                        </td>
                        <td className="px-6 py-4 text-sm text-[--muted]">
                          {gallery.cloudinary_folder}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {gallery.allow_zip ? '✅' : '❌'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[--muted]">
                          {new Date(gallery.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Link
                            href={`/portal/${gallery.slug}/upload`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-[var(--mm-peach)] text-white rounded hover:opacity-90 transition-opacity"
                          >
                            📸 Upload
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
              {galleries.map((gallery) => (
                <div key={gallery.id} className="bg-white rounded-lg shadow p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-[--fg]">{gallery.client_name}</h3>
                      <p className="text-sm text-[--muted]">
                        {new Date(gallery.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Link
                      href={`/portal/${gallery.slug}/upload`}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-[var(--mm-peach)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                    >
                      📸 Upload
                    </Link>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-[--muted]">Access Code:</span>
                      <code className="ml-2 px-2 py-1 bg-mm-cream rounded font-mono">
                        {gallery.access_code}
                      </code>
                    </div>
                    <div>
                      <span className="text-[--muted]">Slug:</span>
                      <Link
                        href={`/galleries/${gallery.slug}`}
                        className="ml-2 text-mm-slate hover:underline"
                        target="_blank"
                      >
                        {gallery.slug}
                      </Link>
                    </div>
                    <div className="text-xs text-[--muted] truncate">
                      <span>Folder:</span> {gallery.cloudinary_folder}
                    </div>
                    <div>
                      <span className="text-[--muted]">ZIP Download:</span>
                      <span className="ml-2">{gallery.allow_zip ? '✅ Enabled' : '❌ Disabled'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

