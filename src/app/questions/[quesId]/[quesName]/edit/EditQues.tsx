'use client';

import QuestionForm from '@/components/QuestionForm';
import { useAuthStore } from '@/store/Auth';
import slugify from '@/utils/slugify';
import { Models } from 'appwrite';
import { useRouter } from 'next/navigation';
import React from 'react';

const EditQues = ({ question }: { question: Models.Document }) => {
  const { user } = useAuthStore();
  const router = useRouter();

  React.useEffect(() => {
    if (question.authorId !== user?.$id) {
      router.push(`/questions/${question.$id}/${slugify(question.title)}`);
    }
  }, [question.$id, question.authorId, question.title, router, user?.$id]);

  if (user?.$id !== question.authorId) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-primary">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center font-sans tracking-tight bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-10">
          Edit your public question
        </h1>

        <div className="flex flex-col justify-center items-center">
          <div className="w-full md:w-2/3">
            <QuestionForm question={question} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQues;
