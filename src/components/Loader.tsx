'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Loader Icon Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="flex items-center justify-center mb-8"
      >
        <Atom
          color="#00FF7F"
          size={96}
          className="drop-shadow-[0_0_30px_rgba(0,255,127,0.8)]"
        />
      </motion.div>

      {/* Main Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="text-4xl font-extrabold text-white tracking-wide"
      >
        Welcome to Developer Community
      </motion.h1>

      {/* Subtext Animation */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="mt-4 text-lg text-green-400"
      >
        Empowering developers worldwide
      </motion.p>

      {/* Button Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 10px rgba(0, 255, 127, 0.5)',
            '0 0 20px rgba(0, 255, 127, 0.8)',
            '0 0 10px rgba(0, 255, 127, 0.5)',
          ],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="mt-6 px-6 py-3 bg-green-600 text-black font-bold text-sm uppercase rounded-full shadow-lg hover:shadow-green-400 cursor-pointer"
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Loader;
