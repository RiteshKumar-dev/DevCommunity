'use client';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { useAuthStore } from '@/store/Auth';
import { useRouter } from 'next/navigation';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthStore();
  const router = useRouter();
  React.useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-center bg-primary">
      <BackgroundBeamsWithCollision>
        <div className="absolute px-4">{children}</div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Layout;
