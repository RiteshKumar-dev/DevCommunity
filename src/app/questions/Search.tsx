'use client';

import { Input } from '@/components/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSearch(() => searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate search input
    if (!search.trim()) {
      toast.error('Please enter a search term.');
      return;
    }

    setIsLoading(true);

    // Construct new URL with updated search param
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('search', search);

    // Push updated search query to the router
    router.push(`${pathname}?${newSearchParams.toString()}`);

    setIsLoading(false);
  };

  const clearSearch = () => {
    setSearch('');
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('search');
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <form className="flex w-full flex-row gap-4" onSubmit={handleSearch}>
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search questions"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-full pr-10 text-white" // Rounded input
        />
        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
          >
            ✕
          </button>
        )}
      </div>
      <button
        type="submit"
        className="shrink-0 rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <div className="loader border-t-transparent border-2 border-white rounded-full w-4 h-4 animate-spin"></div>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};

export default Search;
