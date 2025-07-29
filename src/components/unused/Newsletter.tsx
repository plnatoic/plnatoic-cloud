import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <form className="flex flex-col sm:flex-row items-center gap-3">
        <input 
          type="email" 
          placeholder="Your email address..." 
          aria-label="Email address for newsletter subscription"
          className="flex-grow w-full px-4 py-3 rounded-full border border-slate-200/60 bg-white/80 dark:border-slate-800/60 dark:bg-black/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black focus:outline-none transition-shadow duration-300 shadow-sm backdrop-blur-lg"
        />
        <button 
          type="submit"
          aria-label="Subscribe to newsletter"
          className="w-full sm:w-auto flex-shrink-0 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black focus:outline-none transition-colors duration-300 shadow-sm"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center">
        Get the latest updates and articles delivered to your inbox.
      </p>
    </div>
  );
};

export default Newsletter;
