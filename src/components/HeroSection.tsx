'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { InteractiveGridPattern } from './ui/InteractiveGridPattern';
import { Spotlight } from './ui/Spotlight';
import IconCloud from './magicui/icon-cloud';
import { AuroraText } from './ui/AuroraText';
import { ShimmerButton } from './magicui/shimmer-button';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import UserProfiles from './ui/UserProfiles';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
  'webpack',
  'babel',
  'graphql',
  'redux',
  'storybook',
  'tailwindcss',
  'materialui',
  'apollo',
];

const words =
  'Ask questions, share knowledge, and collaborate with developers worldwide. Join our community and enhance your coding skills!';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row h-auto md:h-[600px] w-full items-center justify-center overflow-hidden p-6 md:p-12">
      {/* Left Side - Text Content */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-6 px-4 md:px-6 text-center md:text-left">
        <h1 className="text-4xl mt-12 relative md:text-5xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Hi! I&#39;m <AuroraText>Ritesh</AuroraText>
          <span
            className="inline-block animate-wave origin-bottom text-4xl md:text-7xl ml-2"
            style={{
              display: 'inline-block',
              transformOrigin: '70% 80%',
            }}
          >
            &#x1F44B;
          </span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          Every coder has a <span className="font-bold">bookmark</span> for this
          community. Share knowledge and grow together.
        </p>
        <p className="text-md md:text-lg text-neutral-300">
          <TextGenerateEffect words={words} />
        </p>
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm md:text-lg font-medium leading-none tracking-tight text-white">
            Build, Collaborate, Succeed{' '}
          </span>
        </ShimmerButton>
        <div className="container mx-auto">
          <div className="flex items-between">
            <UserProfiles />
            {/* <p className="text-2xl font-semibold ml-16 mt-6">Meet Our Team</p> */}
          </div>
        </div>
      </div>
      {/* Right Side - Icon Cloud */}
      <div className="flex justify-center items-center w-full md:w-1/2 h-[300px] md:h-auto">
        <div className="relative max-w-[28rem] md:max-w-[32rem] overflow-hidden">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>

      {/* Patterns */}
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-10"
        fill="white"
      />
      <InteractiveGridPattern
        className={cn(
          '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
          'absolute inset-0 h-full skew-y-12'
        )}
      />
    </div>
  );
};
