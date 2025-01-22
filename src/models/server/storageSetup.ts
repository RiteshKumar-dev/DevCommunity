import { Permission } from 'node-appwrite';
import { questionAttachmentBucket } from '../name';
import { storage } from './config';

export default async function getOrCreateStorage() {
  try {
    // Try to get the storage bucket
    await storage.getBucket(questionAttachmentBucket);
  } catch (error) {
    console.error(
      `Bucket "${questionAttachmentBucket}" not found. Attempting to create...${error}`
    );

    try {
      // Create the storage bucket if it doesn't exist
      await storage.createBucket(
        questionAttachmentBucket,
        questionAttachmentBucket,
        [
          Permission.create('users'),
          Permission.read('any'),
          Permission.read('users'),
          Permission.update('users'),
          Permission.delete('users'),
        ],
        false, // file security
        undefined, // maximum file size (optional)
        undefined, // allowed mime types (optional)
        ['jpg', 'png', 'gif', 'jpeg', 'webp', 'heic'] // allowed file extensions
      );
    } catch (creationError) {
      console.error('Error creating storage bucket:', creationError);
      throw new Error(`Failed to create bucket "${questionAttachmentBucket}".`);
    }
  }
}
