import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaXing } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <p className="flex items-center text-center sm:text-left text-md space-x-2">
          <span>
            @ Copyright {currentYear}, All Rights Reserved by{' '}
            <span className="inline-block text-sky-400 font-semibold underline">
              Ritesh Kumar Sah
            </span>
          </span>
        </p>

        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/riteshkumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xl cursor-pointer hover:text-sky-400 transition">
              <FaLinkedin />
            </div>
          </Link>
          <Link
            href="https://twitter.com/riteshkumar_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xl cursor-pointer hover:text-sky-400 transition">
              <FaTwitter />
            </div>
          </Link>
          <Link
            href="https://x.com/riteshkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xl cursor-pointer hover:text-sky-400 transition">
              <FaXing />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
