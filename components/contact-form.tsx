'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
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

  const inputClasses = `
    w-full px-4 py-3 
    border border-gray-200 
    rounded-sm 
    bg-white
    text-[var(--fg)]
    placeholder:text-gray-400
    focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  `.trim();

  return (
    <motion.form
      onSubmit={handleSubmit}
      action={endpoint}
      method="POST"
      acceptCharset="UTF-8"
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Honeypot field */}
      <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium" style={{ color: 'var(--fg)' }}>
            Name <span style={{ color: 'var(--accent)' }}>*</span>
          </span>
          <input
            required
            name="name"
            className={inputClasses}
            placeholder="Your full name"
            disabled={status === 'submitting'}
            autoComplete="name"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium" style={{ color: 'var(--fg)' }}>
            Email <span style={{ color: 'var(--accent)' }}>*</span>
          </span>
          <input
            required
            type="email"
            name="email"
            className={inputClasses}
            placeholder="you@example.com"
            disabled={status === 'submitting'}
            autoComplete="email"
            inputMode="email"
          />
        </label>
      </div>

      {/* Phone & Session Type Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium" style={{ color: 'var(--fg)' }}>Phone</span>
          <input
            name="phone"
            type="tel"
            className={inputClasses}
            placeholder="(optional)"
            disabled={status === 'submitting'}
            autoComplete="tel"
            inputMode="tel"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium" style={{ color: 'var(--fg)' }}>
            Session Type <span style={{ color: 'var(--accent)' }}>*</span>
          </span>
          <select
            required
            name="sessionType"
            defaultValue={prefillSession || ''}
            className={inputClasses}
            disabled={status === 'submitting'}
          >
            <option value="">Select…</option>
            <option>Seniors</option>
            <option>Couples</option>
            <option>Families</option>
            <option>Minis</option>
          </select>
        </label>
      </div>

      {/* Date & Location Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium" style={{ color: 'var(--fg)' }}>Preferred Date</span>
          <input
            type="date"
            name="date"
            className={inputClasses}
            disabled={status === 'submitting'}
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-2 text-sm font-medium" style={{ color: 'var(--fg)' }}>Location Preference</span>
          <input
            name="location"
            className={inputClasses}
            placeholder="Lake Erie / Pymatuning / other"
            disabled={status === 'submitting'}
          />
        </label>
      </div>

      {/* Message */}
      <label className="flex flex-col">
        <span className="mb-2 text-sm font-medium" style={{ color: 'var(--fg)' }}>Message</span>
        <textarea
          name="message"
          rows={5}
          className={`${inputClasses} resize-y`}
          placeholder="Tell me about your shoot… What's your vision? Any special requests?"
          disabled={status === 'submitting'}
          style={{ minHeight: '140px' }}
        />
      </label>

      {/* Submit */}
      <div className="flex flex-col gap-4">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </Button>

        {status === 'success' && (
          <motion.p 
            role="status" 
            className="text-sm font-medium"
            style={{ color: 'var(--accent)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✓ Thanks! I'll get back to you within 24-48 hours.
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p 
            role="alert" 
            className="text-sm font-medium text-red-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Something went wrong. Please email me directly at{' '}
            <a
              href="mailto:wentlingmm@gmail.com"
              className="underline"
              style={{ color: 'var(--accent)' }}
            >
              wentlingmm@gmail.com
            </a>
          </motion.p>
        )}
      </div>

      <p className="text-xs" style={{ color: 'var(--fg-muted)' }}>
        By submitting this form, you consent to being contacted via email or phone regarding your
        photography inquiry.
      </p>
    </motion.form>
  );
}
