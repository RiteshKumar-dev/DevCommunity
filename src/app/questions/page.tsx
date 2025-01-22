import { databases, users } from '@/models/server/config';
import {
  answerCollection,
  db,
  voteCollection,
  questionCollection,
} from '@/models/name';
import { Query } from 'node-appwrite';
import React from 'react';
import Link from 'next/link';
import { UserPrefs } from '@/store/Auth';
import Pagination from '@/components/Pagination';
import Search from './Search';
import QuestionCard from '@/components/QuestionCard';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const Page = async (
  props: {
    searchParams: Promise<{ page?: string; tag?: string; search?: string }>;
  }
) => {
  const searchParams = await props.searchParams;
  // Await the `searchParams` object if necessary
  const page = (await searchParams.page) || '1';
  const tag = await searchParams.tag;
  const search = await searchParams.search;
  const queries = [
    Query.orderDesc('$createdAt'),
    Query.offset((+page - 1) * 25),
    Query.limit(25),
  ];

  if (tag) queries.push(Query.equal('tags', tag));
  if (search) {
    queries.push(
      Query.or([Query.search('title', search), Query.search('content', search)])
    );
  }

  const questions = await databases.listDocuments(db, questionCollection);

  questions.documents = await Promise.all(
    questions.documents.map(async ques => {
      const [author, answers, votes] = await Promise.all([
        users.get<UserPrefs>(ques.authorId),
        databases.listDocuments(db, answerCollection, [
          Query.equal('questionId', ques.$id),
          Query.limit(1), // for optimization
        ]),
        databases.listDocuments(db, voteCollection, [
          Query.equal('type', 'question'),
          Query.equal('typeId', ques.$id),
          Query.limit(1), // for optimization
        ]),
      ]);

      return {
        ...ques,
        totalAnswers: answers.total,
        totalVotes: votes.total,
        author: {
          $id: author.$id,
          reputation: author.prefs.reputation,
          name: author.name,
        },
      };
    })
  );
  type Question = {
    $id: string;
    title: string;
    content: string;
    tags?: string[];
    authorId: string;
    $collectionId: string;
    $databaseId: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    totalAnswers?: number;
    totalVotes?: number;
    author?: {
      $id: string;
      reputation: number;
      name: string;
    };
  };

  const filterQuestionsByTags = (
    questions: Question[],
    search: string | undefined
  ): Question[] => {
    if (!search) return questions; // If no search term, return all questions
    const lowerCaseSearch = search.toLowerCase();

    return questions.filter(question =>
      (question.tags || []).some(tag =>
        tag.toLowerCase().includes(lowerCaseSearch)
      )
    );
  };

  // Example usage of the filter function
  const filteredQuestions = filterQuestionsByTags(
    questions.documents as unknown as Question[],
    search
  );

  return (
    <div className="w-full bg-primary">
      <div className="w-full md:w-2/4 mx-auto px-4 pb-20 pt-36 bg-primary">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold">All Questions</h1>
          <Link href="/questions/ask">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Ask a question
              </span>
            </ShimmerButton>
          </Link>
        </div>
        <div className="mb-4">
          <Search />
        </div>
        <div className="mb-4">
          <p>{filteredQuestions.length} questions</p>
        </div>
        <div className="mb-4 max-w-3xl space-y-6">
          {filteredQuestions.map(ques => (
            <QuestionCard key={ques.$id} ques={ques} />
          ))}
        </div>
        <Pagination total={questions.total} limit={25} />
      </div>
    </div>
  );
};

export default Page;
