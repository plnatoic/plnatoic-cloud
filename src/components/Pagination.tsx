'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const generatePagination = () => {
    if (totalPages <= 1) return [];

    const pages = [];
    // Always show the first page
    pages.push(1);

    // Show ellipsis if needed
    if (currentPage > 3) {
      pages.push('...');
    }

    // Show pages around the current page
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Always show the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const paginationItems = generatePagination();

  return (
    <div className="flex items-center justify-center space-x-1 py-4">
      <Button asChild variant="ghost" size="icon" disabled={currentPage <= 1}>
        <Link href={createPageURL(currentPage - 1)}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </Link>
      </Button>

      {paginationItems.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-1 text-gray-500">...</span>
          ) : (
            <Button asChild variant={currentPage === page ? 'default' : 'ghost'} className="rounded-full" size="icon">
              <Link href={createPageURL(page)}>{page}</Link>
            </Button>
          )}
        </React.Fragment>
      ))}

      <Button asChild variant="ghost" size="icon" disabled={currentPage >= totalPages}>
        <Link href={createPageURL(currentPage + 1)}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </Link>
      </Button>
    </div>
  );
};

export default Pagination;
