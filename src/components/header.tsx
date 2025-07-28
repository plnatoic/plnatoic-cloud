'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';
import MobileMenu from './MobileMenu';

const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About me' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/sanctuary', label: 'Sanctuary' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 dark:border-slate-800/60 dark:bg-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 dark:hover:bg-black/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="group flex items-center gap-2 outline-none" aria-label="Home">
            <div className="relative">
              <Logo />
              <span className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></span>
            </div>
           
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 ml-auto">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  } group`}
                >
                  {link.label}
                  <span 
                    className={`absolute left-1/2 -bottom-1 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 ${
                      isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
                    }`}
                  />
                  <span className="absolute inset-0 bg-blue-500/5 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden h-10 w-10 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default SiteHeader;
