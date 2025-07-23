import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button variant="ghost" size="icon" disabled>
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </Button>
      <Button variant="ghost" className="rounded-full" size="icon">1</Button>
      <Button variant="default" className="rounded-full" size="icon">2</Button>
      <Button variant="ghost" className="rounded-full" size="icon">3</Button>
      <Button variant="ghost" className="rounded-full" size="icon">4</Button>
      <span className="text-gray-500">...</span>
      <Button variant="ghost" className="rounded-full" size="icon">10</Button>
      <Button variant="ghost" className="rounded-full" size="icon">11</Button>
      <Button variant="ghost" size="icon">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </Button>
    </div>
  );
};

export default Pagination;
