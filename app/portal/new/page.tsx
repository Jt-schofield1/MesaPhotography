'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewGalleryPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    slug: '',
    client_name: '',
    access_code: '',
    password: '',
    folder: '',
    allow_zip: true,
  });

  function updateField(field: string, value: any) {
    setForm({ ...form, [field]: value });
  }

  function generateSlug(clientName: string) {
    return clientName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  function generateAccessCode(clientName: string) {
    const year = new Date().getFullYear();
    const code = clientName
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, 10);
    return `${code}${year}`;
  }

  function handleClientNameChange(name: string) {
    setForm(prev => {
      const newSlug = prev.slug === '' || prev.slug === generateSlug(prev.client_name) 
        ? generateSlug(name) 
        : prev.slug;
      
      const newAccessCode = prev.access_code === '' || prev.access_code === generateAccessCode(prev.client_name)
        ? generateAccessCode(name)
        : prev.access_code;
      
      const newFolder = prev.folder === '' || prev.folder === `Mesa-Marie/clients/${generateSlug(prev.client_name)}`
        ? `Mesa-Marie/clients/${generateSlug(name)}`
        : prev.folder;

      return {
        ...prev,
        client_name: name,
        slug: newSlug,
        access_code: newAccessCode,
        folder: newFolder,
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const authToken = sessionStorage.getItem('admin_auth');
      if (!authToken) {
        router.push('/portal');
        return;
      }

      const response = await fetch('/api/admin/galleries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`:${authToken}`)}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('success');
        setTimeout(() => {
          router.push('/portal');
        }, 1500);
      } else {
        setMessage(`error:${data.error || 'Failed to create gallery'}`);
      }
    } catch (err) {
      setMessage('error:Error creating gallery. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const inputClasses = "w-full px-4 py-3 border border-gray-200 rounded-sm bg-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-300";

  return (
    <main className="min-h-screen p-6 md:p-10 bg-white">
      <div className="max-w-2xl mx-auto">
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
            Create New Gallery
          </h1>
          <p style={{ color: 'var(--fg-muted)' }}>Set up a new client gallery</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-sm border border-gray-100 p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                Client Name <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <input
                type="text"
                value={form.client_name}
                onChange={(e) => handleClientNameChange(e.target.value)}
                placeholder="e.g., Smith Wedding"
                className={inputClasses}
                style={{ color: 'var(--fg)' }}
                required
              />
              <p className="text-xs mt-1" style={{ color: 'var(--fg-muted)' }}>
                The client's name (will auto-generate slug and access code)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                Slug <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => updateField('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                placeholder="e.g., smith-wedding"
                className={inputClasses}
                style={{ color: 'var(--fg)' }}
                required
                pattern="[a-z0-9-]+"
              />
              <p className="text-xs mt-1" style={{ color: 'var(--fg-muted)' }}>
                URL-friendly identifier (lowercase, hyphens only)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                Access Code <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <input
                type="text"
                value={form.access_code}
                onChange={(e) => updateField('access_code', e.target.value.toUpperCase())}
                placeholder="e.g., SMITH2025"
                className={`${inputClasses} uppercase tracking-widest`}
                style={{ color: 'var(--fg)' }}
                required
                maxLength={20}
              />
              <p className="text-xs mt-1" style={{ color: 'var(--fg-muted)' }}>
                Unique code clients enter to find their gallery
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                Password <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <input
                type="text"
                value={form.password}
                onChange={(e) => updateField('password', e.target.value)}
                placeholder="e.g., smith-2025"
                className={inputClasses}
                style={{ color: 'var(--fg)' }}
                required
                minLength={6}
              />
              <p className="text-xs mt-1" style={{ color: 'var(--fg-muted)' }}>
                Password to unlock the gallery (min 6 characters)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--fg)' }}>
                Cloudinary Folder <span style={{ color: 'var(--accent)' }}>*</span>
              </label>
              <input
                type="text"
                value={form.folder}
                onChange={(e) => updateField('folder', e.target.value)}
                placeholder="e.g., Mesa-Marie/clients/smith-wedding"
                className={inputClasses}
                style={{ color: 'var(--fg)' }}
                required
              />
              <p className="text-xs mt-1" style={{ color: 'var(--fg-muted)' }}>
                Path to images in Cloudinary (upload photos here first!)
              </p>
            </div>

            <div 
              className="flex items-center gap-3 p-4 rounded-sm"
              style={{ backgroundColor: 'var(--mm-cream)' }}
            >
              <input
                type="checkbox"
                id="allow_zip"
                checked={form.allow_zip}
                onChange={(e) => updateField('allow_zip', e.target.checked)}
                className="w-5 h-5 rounded-sm accent-[var(--accent)]"
              />
              <label htmlFor="allow_zip" className="text-sm font-medium" style={{ color: 'var(--fg)' }}>
                Allow ZIP download (Download All button)
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type="submit" 
                disabled={loading} 
                className="flex-1 py-4 text-sm uppercase tracking-widest text-white transition-all duration-500 disabled:opacity-50"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {loading ? 'Creating...' : 'Create Gallery'}
              </button>
              <Link 
                href="/portal" 
                className="flex-1 py-4 text-sm uppercase tracking-widest text-center border transition-all duration-500"
                style={{ color: 'var(--fg)', borderColor: 'var(--fg)' }}
              >
                Cancel
              </Link>
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-sm text-center ${
                  message === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {message === 'success' ? '✓ Gallery created successfully!' : message.replace('error:', '')}
              </motion.div>
            )}
          </form>

          {/* Quick Guide */}
          <div 
            className="mt-8 p-5 rounded-sm"
            style={{ backgroundColor: 'var(--mm-cream)' }}
          >
            <h3 className="font-medium text-sm mb-3" style={{ color: 'var(--fg)' }}>Quick Guide</h3>
            <ol className="text-xs space-y-2 list-decimal list-inside" style={{ color: 'var(--fg-muted)' }}>
              <li>Upload photos to Cloudinary first</li>
              <li>Enter client name (auto-fills other fields)</li>
              <li>Verify the auto-generated values</li>
              <li>Set a memorable password</li>
              <li>Click Create Gallery</li>
              <li>Share the Access Code and Password with your client</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
