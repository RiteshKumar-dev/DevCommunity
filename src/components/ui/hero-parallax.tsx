'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { InteractiveGridPattern } from './InteractiveGridPattern';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from './TextGenerateEffect';
import { ShimmerButton } from '../magicui/shimmer-button';
import UserProfiles from './UserProfiles';

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map(product => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map(product => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map(product => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
const words =
  ' Dive into a world of coding challenges, solutions, and innovations. Join our vibrant developer community to share knowledge, enhance skills, andcollaborate on impactful projects using the latest technologies.';

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-20 px-6 w-full left-0 top-0 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-5xl lg:text-7xl font-extrabold text-black dark:text-white tracking-tight">
        Empowering Coders{' '}
        <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
          To Build the Future
        </span>
      </h1>
      <p className="max-w-2xl text-3xl md:text-xl mt-4 text-left text-gray-700 dark:text-neutral-200 leading-relaxed">
        <TextGenerateEffect words={words} />
      </p>
      <ShimmerButton className="mt-4 md:mt-8">
        <span className="text-sm md:text-lg font-medium text-white">
          Build, Collaborate, Succeed
        </span>
      </ShimmerButton>
      <div className="mt-8 mr-16">
        <div className="">
          <UserProfiles />
          {/* <p className="text-2xl font-semibold ml-16 mt-6">Meet Our Team</p> */}
        </div>
      </div>
      <InteractiveGridPattern
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'absolute inset-0 h-[500px] skew-y-12 top-4'
        )}
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
