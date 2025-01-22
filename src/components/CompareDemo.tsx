'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Compare } from '@/components/ui/compare';

export function CompareDemo() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="p-4 overflow-hidden">
      <motion.h2
        initial={{ x: '-100%' }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1 }}
        ref={sectionRef}
        className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
      >
        Explore technical topics and other disciplines across{' '}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div
            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-teal-400 via-cyan-500 to-blue-500
 [text-shadow:0_0_rgba(0,0,0,0.1)]"
          >
            <span className="">170+ Q&A communities.</span>
          </div>
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500
 py-4"
          >
            <span className="">170+ Q&A communities.</span>
          </div>
        </div>
      </motion.h2>
      {/* Wrapper Container */}
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
        {/* First Compare */}
        <div className="w-full md:w-1/2 p-2 mt-4">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="w-full h-[250px] md:h-[500px] rounded-lg"
            slideMode="hover"
          />
        </div>

        {/* Second Compare */}
        <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
          <div
            style={{
              transform: 'rotateX(15deg) translateZ(80px)',
            }}
            className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 w-full h-[250px] md:h-[500px]"
          >
            <Compare
              firstImage="https://assets.aceternity.com/notes-dark.png"
              secondImage="https://assets.aceternity.com/linear-dark.png"
              firstImageClassName="object-cover object-left-top w-full"
              secondImageClassname="object-cover object-left-top w-full"
              className="w-full h-full rounded-lg"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
