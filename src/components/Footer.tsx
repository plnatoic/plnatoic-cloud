'use client';
import React from 'react';
import Logo from './logo';
import Link from 'next/link';

// Social Icons (simple SVG placeholders, no changes needed)
const TwitterIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.523 3.379 4.75 3.422a9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>;
const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"></path></svg>;
const LinkedinIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>;
const YoutubeIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>;

const Footer = () => {
  const handleSubscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('footer-email') as HTMLInputElement;
    const email = input.value.trim();
    const msgElem = form.querySelector('.footer-email-msg') as HTMLDivElement;

    const setMsg = (msg: string, isError: boolean) => {
      if (msgElem) {
        msgElem.textContent = msg;
        msgElem.className = `text-xs mt-2 min-h-[1.25em] transition-colors ${isError ? 'text-red-400' : 'text-green-400'}`;
      }
    };

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsg('Please enter a valid email address.', true);
      return;
    }

    // Simulate API call
    setMsg('Subscribing...', false);
    setTimeout(() => {
      setMsg('✓ Successfully subscribed!', false);
      input.value = '';
      setTimeout(() => setMsg('', false), 3000);
    }, 1000);
  };

  return (
    <footer className="relative bg-white/80 dark:bg-black/80 text-gray-800 dark:text-gray-300 backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Logo & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <div className="mt-4">
              <h4 className="font-semibold text-black dark:text-white mb-2">Stay Updated</h4>
              <p className="text-sm mb-4">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
              <form className="space-y-3" onSubmit={handleSubscription}>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    name="footer-email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 rounded-full px-4 py-2 bg-white/50 dark:bg-black/20 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    className="bg-black dark:bg-white text-white dark:text-black rounded-full px-5 py-2 hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white dark:focus:ring-black transition-all font-medium text-sm"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="footer-email-msg text-xs mt-2 min-h-[1.25em]"></div>
              </form>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Column 3: Follow us */}
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4">Follow us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><TwitterIcon /></a>
              <a href="https://www.facebook.com/plnatoic/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><FacebookIcon /></a>
              <a href="https://www.linkedin.com/in/plnatoic/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><LinkedinIcon /></a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><YoutubeIcon /></a>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">Ha Noi, Viet Nam</li>
              <li className="flex items-center gap-2">nhat.uet04@gmail.com</li>
              <li className="flex items-center gap-2">0899853981</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">&copy; 2025 Plnatonic, Inc. All rights reserved.</p>
          <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
