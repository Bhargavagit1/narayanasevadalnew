import Link from 'next/link';
import { Heart } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact Us' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-12 md:py-16 lg:grid-cols-3 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block" aria-label="Narayana Seva Dal — Home">
              <span className="text-2xl font-heading font-bold text-white">
                Narayana Seva Dal
              </span>
            </Link>
            <p className="mt-2 text-sm font-medium text-primary">
              Serving Humanity, One Meal at a Time
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              A volunteer-driven nonprofit dedicated to feeding the hungry,
              supporting communities, and spreading kindness across Guntur,
              Andhra Pradesh. Together, we make a difference.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-5">
              Contact
            </h3>
            <address className="not-italic space-y-3">
              <p className="text-sm text-white/70 leading-relaxed">
                Guntur, Andhra Pradesh
                <br />
                India — 522001
              </p>
              <p>
                <a
                  href="mailto:narayanasevadal2019@gmail.com"
                  className="text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  narayanasevadal2019@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+919848032919"
                  className="text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  +91 98480 32919
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/50 flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Narayana Seva Dal. Made with
            <Heart className="inline h-3 w-3 text-primary fill-primary" aria-hidden="true" />
            for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
