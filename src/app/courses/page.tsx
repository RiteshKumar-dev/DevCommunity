'use client';
import { AuroraText } from '@/components/ui/AuroraText';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-primary text-white px-4">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:mb-8 mt-6">
        <AuroraText>What would you like to learn?</AuroraText>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-12">
        In the future, we will be adding amazing courses to help you grow. Stay
        tuned!
      </p>

      {/* Suspense Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center animate-pulse"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-600 rounded-full mb-4"></div>
              <div className="h-4 w-3/4 bg-gray-600 rounded mb-2"></div>
              <div className="h-3 w-1/2 bg-gray-600 rounded"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
