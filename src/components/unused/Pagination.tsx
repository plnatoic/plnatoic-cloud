'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

    const pages: (number | string)[] = [];
    const delta = 1; // pages to show around current page
    const left = currentPage - delta;
    const right = currentPage + delta;

    // Generate page numbers with ellipses
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      } else if (i === left - 1 || i === right + 1) {
        pages.push('...');
      }
    }
    // Remove duplicate ellipses
    return pages.filter((v, i, a) => a.indexOf(v) === i);
  };

  const paginationItems = generatePagination();

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-2 rounded-full bg-white/80 dark:bg-black/50 border border-slate-200/60 dark:border-slate-800/60 p-2 shadow-sm backdrop-blur-lg">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
          disabled={currentPage <= 1}
        >
          <Link href={createPageURL(currentPage - 1)} aria-label="Go to previous page">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>

        {paginationItems.map((page, index) => (
          <React.Fragment key={`${page}-${index}`}>
            {page === '...' ? (
              <span className="flex h-10 w-10 items-center justify-center text-slate-500">...</span>
            ) : (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className={cn(
                  'rounded-full',
                  currentPage === page
                    ? 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                )}
              >
                <Link href={createPageURL(page as number)}>{page}</Link>
              </Button>
            )}
          </React.Fragment>
        ))}

        <Button
          asChild
          variant="ghost"
          size="icon"
          className="rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
          disabled={currentPage >= totalPages}
        >
          <Link href={createPageURL(currentPage + 1)} aria-label="Go to next page">
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Pagination;
