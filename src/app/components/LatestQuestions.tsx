import QuestionCard from '@/components/QuestionCard';
import {
  answerCollection,
  db,
  questionCollection,
  voteCollection,
} from '@/models/name';
import { databases, users } from '@/models/server/config';
import { UserPrefs } from '@/store/Auth';
import { Query } from 'node-appwrite';
import React from 'react';

const LatestQuestions = async () => {
  const questions = await databases.listDocuments(db, questionCollection, [
    Query.limit(5),
    // Query.orderDesc("$createdAt"),
  ]);

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

  return (
    <div className="flex flex-col justify-center items-start ml-10">
      <h3 className="text-2xl md:text-3xl lg:text-7xl font-bold text-center bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-transparent mb-4 ml-6">
        Latest Questions
      </h3>
      <div className="mb-4 max-w-3xl space-y-6">
        {questions.documents.map(question => (
          <QuestionCard key={question.$id} ques={question} />
        ))}
      </div>
    </div>
  );
};

export default LatestQuestions;
