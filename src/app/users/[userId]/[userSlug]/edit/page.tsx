'use client';
import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/Auth';
import { account } from '@/models/client/config';
import { toast } from 'react-toastify';

const Page: React.FC = () => {
  const { user, verfiySession } = useAuthStore();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [initialName, setInitialName] = useState(user?.name || '');
  const [initialEmail, setInitialEmail] = useState(user?.email || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch the latest user details on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await account.get();
        setName(currentUser.name);
        setEmail(currentUser.email);
        setInitialName(currentUser.name);
        setInitialEmail(currentUser.email);
      } catch (error) {
        if (error) toast.error('Failed to load user data. Please try again.');
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Update name
      if (name !== user?.name) {
        await account.updateName(name);
      }

      // Update email
      if (email !== user?.email) {
        const password = prompt(
          'Please enter your password to update the email:'
        );
        if (password) {
          await account.updateEmail(email, password);
        } else {
          throw new Error('Password is required to update the email.');
        }
      }

      // Refresh session data after update
      await verfiySession();
      setInitialName(name);
      setInitialEmail(email);
      toast.success('Profile updated successfully!');
    } catch (error) {
      if (error) toast.error('Failed to update profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if any input has changed
  const isChanged = name !== initialName || email !== initialEmail;

  return (
    <div className="container mx-auto space-y-4 px-4 pb-20 pt-32 md:w-1/2">
      <h1 className="text-4xl font-bold">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="block w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="block w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className={`inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md ${
            !isChanged || isSubmitting
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-700'
          }`}
          disabled={!isChanged || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default Page;
