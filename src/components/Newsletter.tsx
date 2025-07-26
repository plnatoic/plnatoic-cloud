import React from 'react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const Newsletter = () => {
  return (
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="address@email.com" 
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9370DB] focus:border-transparent transition bg-white text-black"
            />
            <button className="bg-[#9370DB] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#825fca] transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
            Nhấn vào nút này để nhận thông báo mới nhất.
          </p>
        </div>
  );
};

export default Newsletter;
