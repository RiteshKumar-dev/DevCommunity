import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';
import { BackgroundBeamsWithCollisionCom } from '@/components/BackgroundBeamsWithCollision';
import { CompareDemo } from '@/components/CompareDemo';
import { HeroParallaxDemo } from '@/components/HeroParallaxCom';
import { HeroSection } from '@/components/HeroSection';
import type { Metadata } from 'next';
import TopContributers from './components/TopContributers';
import LatestQuestions from './components/LatestQuestions';
import { Suspense } from 'react';
import { Spinner } from '@/components/AnimatedCircularProgressBar';
export const metadata: Metadata = {
  title: 'Developer Community',
  description:
    'A vibrant hub where developers can ask questions, share knowledge, collaborate, and enhance their coding skills. Join our community to grow together and stay ahead in the tech world.',
};

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-primary bg-grid-white[0.02]">
      <Suspense
        fallback={
          <>
            <Spinner />
          </>
        }
      >
        <HeroSection />
        <BackgroundBeamsWithCollisionCom />
        <CompareDemo />
        <AnimatedTestimonialsDemo />
        <HeroParallaxDemo />
        <TopContributers />
        <LatestQuestions />
      </Suspense>
    </main>
  );
}
