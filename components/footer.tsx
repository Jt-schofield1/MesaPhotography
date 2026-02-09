import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span 
                className="font-halimum text-3xl block"
                style={{ color: 'var(--accent)' }}
              >
                mesa marie
              </span>
              <span 
                className="text-xs tracking-[0.3em] uppercase -mt-1 block"
                style={{ color: 'var(--fg)' }}
              >
                photography
              </span>
            </Link>
            <p className="text-sm mt-4" style={{ color: 'var(--fg-muted)' }}>
              NWPA Photographer capturing authentic moments on Lake Erie, Pymatuning Lake, and everywhere in between.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-sm tracking-widest uppercase mb-6 font-medium"
              style={{ color: 'var(--fg)' }}
            >
              Explore
            </h4>
            <nav className="flex flex-col gap-1">
              {[
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm py-2 transition-colors duration-300 hover:text-[var(--accent)]"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 
              className="text-sm tracking-widest uppercase mb-6 font-medium"
              style={{ color: 'var(--fg)' }}
            >
              Connect
            </h4>
            <div className="flex flex-col gap-1">
              <a
                href="https://www.instagram.com/mesamariephotography"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm py-2 transition-colors duration-300 hover:text-[var(--accent)]"
                style={{ color: 'var(--fg-muted)' }}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @mesamariephotography
              </a>
              <a
                href="mailto:wentlingmm@gmail.com"
                className="text-sm py-2 transition-colors duration-300 hover:text-[var(--accent)]"
                style={{ color: 'var(--fg-muted)' }}
              >
                wentlingmm@gmail.com
              </a>
              <p className="text-sm pt-1" style={{ color: 'var(--fg-muted)' }}>
                Lake Erie • Pymatuning<br />
                & Everywhere In Between
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm" style={{ color: 'var(--fg-muted)' }}>
          <p>
            &copy; {currentYear} Mesa Marie Photography. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="py-2 px-1 hover:text-[var(--accent)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="py-2 px-1 hover:text-[var(--accent)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
