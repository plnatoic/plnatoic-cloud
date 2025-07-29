import React from 'react';

const FancyButtons = () => {
  return (
    <div className="p-8 flex flex-wrap justify-center items-center gap-6 bg-white dark:bg-gray-900">
      {/* Button 1: Work with us */}
      <button className="px-6 py-3 text-white font-semibold rounded-xl bg-indigo-700 hover:bg-indigo-800 transition-colors duration-300">
        Work with us
      </button>

      {/* Button 2: Zoooooom */}
      <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full">
        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-full group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white">Zooooooooooom 🚀</span>
        </span>
      </button>

      {/* Button 3: Get access */}
      <button className="px-8 py-3 text-white font-bold rounded-lg bg-red-500 hover:bg-red-600 transition-colors duration-300 transform hover:scale-105">
        Get access
      </button>

      {/* Button 4: Pixel Art */}
      <button className="px-8 py-4 text-white font-bold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
        Pixel Art
      </button>

      {/* Button 5: Download with NEW tag */}
      <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-violet-500 rounded-full">NEW</span>
        Download
      </button>

      {/* Button 6: Contact me */}
      <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10">
          <span>Contact me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>

      {/* Button 7: Add to cart */}
      <button className="px-8 py-3 text-white font-bold rounded-lg bg-teal-500 hover:bg-teal-600 transition-colors duration-300">
        Add to cart
      </button>
    </div>
  );
};

export default FancyButtons;
