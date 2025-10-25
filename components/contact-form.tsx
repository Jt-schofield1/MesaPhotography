'use client';

import { useState, FormEvent } from 'react';
import Button from './button';

const endpoint = 'https://formspree.io/f/mnngbrpv';

interface ContactFormProps {
  prefillSession?: string;
}

export default function ContactForm({ prefillSession }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    // Add helpful metadata
    data.append('_subject', 'New Mesa Marie Photography inquiry');
    data.append('source', window.location.href);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      // Reset error status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action={endpoint}
      method="POST"
      acceptCharset="UTF-8"
      className="space-y-6"
    >
      {/* Honeypot field */}
      <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-[--fg]">
            Name <span className="text-red-500">*</span>
          </span>
          <input
            required
            name="name"
            className="input"
            placeholder="Your full name"
            disabled={status === 'submitting'}
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-[--fg]">
            Email <span className="text-red-500">*</span>
          </span>
          <input
            required
            type="email"
            name="email"
            className="input"
            placeholder="you@example.com"
            disabled={status === 'submitting'}
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-[--fg]">Phone</span>
          <input
            name="phone"
            type="tel"
            className="input"
            placeholder="(optional)"
            disabled={status === 'submitting'}
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-[--fg]">
            Session Type <span className="text-red-500">*</span>
          </span>
          <select
            required
            name="sessionType"
            defaultValue={prefillSession || ''}
            className="input"
            disabled={status === 'submitting'}
          >
            <option value="">Select…</option>
            <option>Seniors</option>
            <option>Couples</option>
            <option>Families</option>
            <option>Minis</option>
          </select>
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-[--fg]">Preferred Date</span>
          <input
            type="date"
            name="date"
            className="input"
            disabled={status === 'submitting'}
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium text-[--fg]">Location Preference</span>
          <input
            name="location"
            className="input"
            placeholder="Lake Erie / Pymatuning / other"
            disabled={status === 'submitting'}
          />
        </label>
      </div>

      <label className="flex flex-col">
        <span className="mb-2 text-sm font-medium text-[--fg]">Message</span>
        <textarea
          name="message"
          rows={5}
          className="input resize-y"
          placeholder="Tell me about your shoot… What's your vision? Any special requests?"
          disabled={status === 'submitting'}
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
        </Button>

        {status === 'success' && (
          <p role="status" className="text-green-700 font-medium">
            ✓ Thanks! I'll get back to you soon.
          </p>
        )}

        {status === 'error' && (
          <p role="alert" className="text-red-700 font-medium">
            Something went wrong. Please email me directly at{' '}
            <a
              href="mailto:wentlingmm@gmail.com"
              className="underline hover:text-mm-slate"
            >
              wentlingmm@gmail.com
            </a>
          </p>
        )}
      </div>

      <p className="text-sm text-[--muted]">
        By submitting this form, you consent to being contacted via email or phone regarding your
        photography inquiry.
      </p>
    </form>
  );
}

