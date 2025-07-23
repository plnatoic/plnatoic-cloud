import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import { Button } from './ui/button';

const HeaderV2 = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Logo />
            </Link>
          </div>
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
        </div>
      </div>
    </header>
  );
};

export default HeaderV2;
