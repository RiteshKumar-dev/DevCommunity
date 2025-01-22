'use client';
import React from 'react';
import { LayoutGrid } from './ui/layout-grid';

export function Grid() {
  return (
    <div className="h-[150vh] w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="relative p-4 bg-black bg-opacity-50 rounded-md">
      <h1 className="font-bold md:text-2xl text-xl text-white">
        Algorithm Optimization
      </h1>
      <p className="font-normal text-sm text-gray-200 mt-2">
        How can you optimize an algorithm to handle large datasets efficiently?
      </p>
      <p className="font-normal text-xs text-neutral-400 mt-2">
        Answer in short: Use divide and conquer, efficient data structures, and
        reduce time complexity.
      </p>
      <button className="absolute top-4 right-4  bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full">
        Contribute
      </button>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="relative p-4 bg-black bg-opacity-50 rounded-md">
      <h1 className="font-bold md:text-2xl text-xl text-white">
        Memory Management
      </h1>
      <p className="font-normal text-sm text-gray-200 mt-2">
        What are the best practices for managing memory in a program?
      </p>
      <p className="font-normal text-xs text-neutral-400 mt-2">
        Answer in short: Avoid memory leaks, use garbage collection, and prefer
        stack allocation where possible.
      </p>
      <button className="absolute top-4 right-4  bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full">
        Contribute
      </button>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="relative p-4 bg-black bg-opacity-50 rounded-md">
      <h1 className="font-bold md:text-2xl text-xl text-white">
        Multi-threading Challenges
      </h1>
      <p className="font-normal text-sm text-gray-200 mt-2">
        How do you avoid race conditions in multi-threaded programming?
      </p>
      <p className="font-normal text-xs text-neutral-400 mt-2">
        Answer in short: Use locks, semaphores, and thread-safe data structures.
      </p>
      <button className="absolute top-4 right-4  bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full">
        Contribute
      </button>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="relative p-4 bg-black bg-opacity-50 rounded-md">
      <h1 className="font-bold md:text-2xl text-xl text-white">
        Debugging Techniques
      </h1>
      <p className="font-normal text-sm text-gray-200 mt-2">
        What are the effective techniques for debugging a complex program?
      </p>
      <p className="font-normal text-xs text-neutral-400 mt-2">
        Answer in short: Use breakpoints, logging, and isolate issues with test
        cases.
      </p>
      <button className="absolute top-4 right-4  bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full">
        Contribute
      </button>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="relative p-4 bg-black bg-opacity-50 rounded-md">
      <h1 className="font-bold md:text-2xl text-xl text-white">
        Security in Coding
      </h1>
      <p className="font-normal text-sm text-gray-200 mt-2">
        How can you ensure secure coding practices in web applications?
      </p>
      <p className="font-normal text-xs text-neutral-400 mt-2">
        Answer in short: Validate inputs, use HTTPS, and implement proper
        authentication and authorization.
      </p>
      <button className="absolute top-4 right-4  bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full">
        Contribute
      </button>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className="relative p-4 bg-black bg-opacity-50 rounded-md">
      <h1 className="font-bold md:text-2xl text-xl text-white">
        Data Structures
      </h1>
      <p className="font-normal text-sm text-gray-200 mt-2">
        Why are data structures important in programming?
      </p>
      <p className="font-normal text-xs text-neutral-400 mt-2">
        Answer in short: They provide efficient ways to store, organize, and
        manipulate data.
      </p>
      <button className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full">
        Contribute
      </button>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail: '/code1.png',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/code2.jpg',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/code3.webp',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail: '/heroRightImg.png',
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: 'md:col-span-2',
    thumbnail: '/code5.png',
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: 'col-span-1',
    thumbnail: '/code4.webp',
  },
];
