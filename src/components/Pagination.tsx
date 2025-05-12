'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface PaginationProps {
  className?: string;
  total: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ className, total, limit }) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.max(1, Math.ceil(total / limit)); // Ensure totalPages is at least 1
  const router = useRouter();
  const pathname = usePathname(); // Fix variable name typo

  const handleNavigation = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString() || '');
    newSearchParams.set('page', `${newPage}`);
    router.push(`${pathname}?${newSearchParams?.toString()}`);
  };

  const prev = () => {
    if (page > 1) handleNavigation(page - 1);
  };

  const next = () => {
    if (page < totalPages) handleNavigation(page + 1);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className={`${className} rounded-lg bg-white/10 px-2 py-0.5 duration-200 hover:bg-white/20`}
        onClick={prev}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        Previous
      </button>
      <span>
        {page} of {totalPages} {/* Show totalPages as 1 if total is 0 */}
      </span>
      <button
        className={`${className} rounded-lg bg-white/10 px-2 py-0.5 duration-200 hover:bg-white/20`}
        onClick={next}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
