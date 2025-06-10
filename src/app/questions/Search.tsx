'use client';

import { Input } from '@/components/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams?.get('search') || '');
  const [isLoading, setIsLoading] = useState(false);

  // Update the search input value when the query param changes
  useEffect(() => {
    setSearch(() => searchParams?.get('search') || '');
  }, [searchParams]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) {
      toast.error('Please enter a search term.');
      return;
    }

    setIsLoading(true);

    try {
      const currentParams = new URLSearchParams(searchParams?.toString() || '');
      currentParams.set('search', search);

      const newUrl = `${pathname}?${currentParams?.toString()}`;
      router.push(newUrl);
    } catch (error) {
      console.error('Search update error:', error);
      toast.error('An error occurred while updating the search query.');
    } finally {
      setIsLoading(false);
    }
  };
  const clearSearch = () => {
    setSearch('');
    const newSearchParams = new URLSearchParams(searchParams?.toString() || '');
    newSearchParams.delete('search');
    router.push(`${pathname}?${newSearchParams?.toString()}`);
  };

  return (
    <form className="flex w-full flex-row gap-4" onSubmit={handleSearch}>
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search questions"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-full pr-10 text-white"
          disabled={isLoading}
          aria-label="Search questions"
        />
        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      <button
        type="submit"
        className="shrink-0 rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600 flex items-center justify-center gap-2"
        disabled={isLoading}
        aria-label="Submit search"
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
