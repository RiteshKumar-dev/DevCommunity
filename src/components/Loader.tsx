'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-neutral-950 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="flex items-center justify-center mb-6"
      >
        <Atom
          color="#32cd32"
          size={72}
          className="drop-shadow-[0_0_15px_rgba(50,205,50,0.7)]"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="text-3xl font-extrabold text-white tracking-wider"
      >
        Developer Community
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="mt-4 text-lg text-green-500"
      >
        Ritesh Kumar Sah
      </motion.p>
      {/* <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="mt-6 p-2 px-4 bg-green-600 text-black font-semibold text-sm uppercase rounded-full shadow-lg hover:shadow-green-400"
      >
        Loading...
      </motion.div> */}
    </div>
  );
};

export default Loader;
