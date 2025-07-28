'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About me' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/sanctuary', label: 'Sanctuary' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Close menu when clicking outside or route changes
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname, isOpen, onClose]);

  return (
    <div 
      className={`fixed inset-0 z-[999] ${!isOpen ? 'pointer-events-none' : ''}`}
      style={{
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 300ms ease-in-out',
        visibility: isOpen ? 'visible' : 'hidden',
      }}
    >
      {/* Blurred dark overlay with fade in */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 300ms ease-in-out'
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu container with slide-up animation */}
      <div 
        ref={menuRef}
        className="fixed bottom-0 left-0 right-0 z-[1000] rounded-t-3xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800"
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        {/* Menu handle */}
        <div className="flex justify-center py-3">
          <div className="h-1 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        <div className="px-6 pb-8 pt-2">
          {/* Menu items */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-slate-700 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-gray-800/70'
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                  {isActive && (
                    <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* App info */}
          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
