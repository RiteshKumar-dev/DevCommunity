import QuestionForm from '@/components/QuestionForm';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen px-4 sm:px-6 lg:px-8 pt-4">
      <h1 className="text-2xl relative z-20 md:text-4xl lg:text-6xl font-bold text-center font-sans tracking-tight bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
        Ask a public question
      </h1>
      <div className="w-full md:w-2/3 shadow-md rounded-lg p-6 sm:p-8">
        <QuestionForm />
      </div>
    </div>
  );
};

export default Page;
