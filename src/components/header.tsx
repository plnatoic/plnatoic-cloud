'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';

const HeaderV2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Logo />
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium text-sm">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium text-sm">
              About me
            </Link>
            <Link href="/faqs" className="text-gray-600 hover:text-blue-600 font-medium text-sm">
              FAQs
            </Link>
            <Link href="/sanctuary" className="text-gray-600 hover:text-blue-600 font-medium text-sm">
              Sanctuary
            </Link>
          </div>
          <div className="hidden md:block">
            <Button asChild className="rounded-full px-6">
              <Link href="/login">Log in</Link>
            </Button>
          </div>
          {/* Mobile menu button */}
          <button
            className="flex md:hidden items-center justify-center p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect y="6" x="4" width="16" height="1" rx="0.5" fill="#555" />
              <rect y="11" x="4" width="16" height="1" rx="0.5" fill="#555" />
              <rect y="16" x="4" width="16" height="1" rx="0.5" fill="#555" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-end md:hidden">
          <div className="w-2/3 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col space-y-6 animate-slide-in">
            <button
              className="self-end mb-4 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium text-base" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-base" onClick={() => setMobileMenuOpen(false)}>
              About me
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-blue-600 font-medium text-base" onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </Link>
            <Link href="/sanctuary" className="text-gray-700 hover:text-blue-600 font-medium text-base" onClick={() => setMobileMenuOpen(false)}>
              Sanctuary
            </Link>
            <Button asChild className="rounded-full px-6 w-full mt-4">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderV2;
