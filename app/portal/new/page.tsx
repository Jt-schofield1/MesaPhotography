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
      // Only auto-generate if fields are empty or match the auto-generated pattern
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
        setMessage('✅ Gallery created successfully!');
        setTimeout(() => {
          router.push('/portal');
        }, 1500);
      } else {
        setMessage(`❌ Error: ${data.error || 'Failed to create gallery'}`);
      }
    } catch (err) {
      setMessage('❌ Error creating gallery. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-4 md:p-10 bg-mm-cream">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/portal" className="text-mm-slate hover:underline mb-4 inline-block">
            ← Back to Portal
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[--fg] mb-2">Create New Gallery</h1>
          <p className="text-[--muted]">Set up a new client gallery</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[--fg] mb-2">
                Client Name *
              </label>
              <input
                type="text"
                value={form.client_name}
                onChange={(e) => handleClientNameChange(e.target.value)}
                placeholder="e.g., Smith Wedding"
                className="input w-full"
                required
              />
              <p className="text-xs text-[--muted] mt-1">
                The client's name (will auto-generate slug and access code)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[--fg] mb-2">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) =>
                  updateField('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))
                }
                placeholder="e.g., smith-wedding"
                className="input w-full"
                required
                pattern="[a-z0-9-]+"
              />
              <p className="text-xs text-[--muted] mt-1">
                URL-friendly identifier (lowercase, hyphens only)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[--fg] mb-2">
                Access Code *
              </label>
              <input
                type="text"
                value={form.access_code}
                onChange={(e) => updateField('access_code', e.target.value.toUpperCase())}
                placeholder="e.g., SMITH2025"
                className="input w-full uppercase"
                required
                maxLength={20}
              />
              <p className="text-xs text-[--muted] mt-1">
                Unique code clients enter to find their gallery
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[--fg] mb-2">Password *</label>
              <input
                type="text"
                value={form.password}
                onChange={(e) => updateField('password', e.target.value)}
                placeholder="e.g., smith-2025"
                className="input w-full"
                required
                minLength={6}
              />
              <p className="text-xs text-[--muted] mt-1">
                Password to unlock the gallery (min 6 characters)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[--fg] mb-2">
                Cloudinary Folder *
              </label>
              <input
                type="text"
                value={form.folder}
                onChange={(e) => updateField('folder', e.target.value)}
                placeholder="e.g., Mesa-Marie/clients/smith-wedding"
                className="input w-full"
                required
              />
              <p className="text-xs text-[--muted] mt-1">
                Path to images in Cloudinary (upload photos here first!)
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-mm-sky rounded-lg">
              <input
                type="checkbox"
                id="allow_zip"
                checked={form.allow_zip}
                onChange={(e) => updateField('allow_zip', e.target.checked)}
                className="w-5 h-5"
              />
              <label htmlFor="allow_zip" className="text-sm font-medium text-[--fg]">
                Allow ZIP download (Download All button)
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" disabled={loading} className="btn-primary flex-1">
                {loading ? 'Creating...' : 'Create Gallery'}
              </button>
              <Link href="/portal" className="btn-secondary flex-1 text-center">
                Cancel
              </Link>
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-lg text-center ${
                  message.startsWith('✅')
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {message}
              </motion.div>
            )}
          </form>

          <div className="mt-8 p-4 bg-mm-cream rounded-lg">
            <h3 className="font-semibold text-sm text-[--fg] mb-2">📝 Quick Guide:</h3>
            <ol className="text-xs text-[--muted] space-y-1 list-decimal list-inside">
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

