import { db } from '../name';
import createAnswerCollection from './answer.collection';
import createCommentCollection from './comment.collection';
import createQuestionCollection from './question.collection';
import createVoteCollection from './vote.collection';

import { databases } from './config';

export default async function getOrCreateDB() {
  try {
    // Try to retrieve the database
    await databases.get(db);
  } catch (error) {
    console.error(
      `Database "${db}" not found. Attempting to create...${error}`
    );

    try {
      // Create the database if it doesn't exist
      await databases.create(db, db);

      console.log(`Database "${db}" created successfully.`);

      // Create collections
      await Promise.all([
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createVoteCollection(),
      ]);

      console.log('All collections created successfully.');
    } catch (creationError) {
      console.error('Error creating database or collections:', creationError);
      throw new Error('Failed to create the database or collections.');
    }
  }

  return databases;
}
