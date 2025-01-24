'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProgressBarLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide text-center"
      >
        Welcome to Developer Community
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="mt-2 sm:mt-4 text-base sm:text-lg text-green-400 text-center"
      >
        Empowering developers worldwide
      </motion.p>

      {/* Progress Bar */}
      <div className="w-full max-w-md mt-8">
        <div className="w-full h-4 sm:h-6 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600"
          ></motion.div>
        </div>
        <p className="mt-2 text-sm sm:text-base text-green-400 text-center">
          Loading... Please wait
        </p>
      </div>
    </div>
  );
};

export default ProgressBarLoader;
