'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { Grid } from './Grid';
import { AuroraText } from './ui/AuroraText';

export function BackgroundBeamsWithCollisionCom() {
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
    <BackgroundBeamsWithCollision>
      <div className="">
        <motion.h2
          initial={{ x: '-100%' }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1 }}
          ref={sectionRef}
          className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
        >
          Explore cutting-edge tech like{' '}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Exploding Beams and more.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span>Exploding Beams and more.</span>
            </div>
          </div>
        </motion.h2>
        <p className="flex justify-end md:mr-20 text underline">
          <AuroraText>Click on the problem images.</AuroraText>
        </p>
        <br className="md:my-8" />
        <Grid />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
