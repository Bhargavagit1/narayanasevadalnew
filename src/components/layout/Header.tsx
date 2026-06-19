'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { MobileNav } from './MobileNav';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileNav = useCallback(() => {
    setIsMobileNavOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Narayana Seva Dal — Home"
            >
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse shrink-0" />
              <span className="text-xl md:text-2xl font-heading font-extrabold tracking-tight flex items-center">
                <span className="text-primary">Narayana</span>
                <span
                  className={`ml-1.5 transition-colors duration-300 ${
                    isScrolled ? 'text-accent' : 'text-white'
                  }`}
                >
                  Seva Dal
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-7"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-semibold tracking-wide py-2 transition-colors duration-300 hover:text-primary ${
                      isActive
                        ? 'text-primary'
                        : isScrolled
                        ? 'text-text-primary'
                        : 'text-white/90'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Donate CTA */}
              <Link
                href="/donate"
                className="ml-2 relative inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Donate Now</span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-200 ${
                isScrolled
                  ? 'text-text-primary hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open navigation menu"
              aria-expanded={isMobileNavOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={closeMobileNav}
        links={[
          ...navLinks,
          { href: '/donate', label: 'Donate Now 💛' }
        ]}
        currentPath={pathname}
      />
    </>
  );
}
