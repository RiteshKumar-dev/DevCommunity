'use client';

import React, { useState } from 'react';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { FloatingNav } from './ui/floating-navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { AuroraText } from './ui/AuroraText';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMouseEnterDropdown = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeaveDropdown = () => {
    setIsDropdownOpen(false);
  };
  const handleMouseEnterUserPopup = () => {
    setIsUserPopupOpen(true);
  };
  const handleMouseLeaveUserPopup = () => {
    setIsUserPopupOpen(false);
  };

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' },
    { href: '/articles', label: 'Articles' },
    { href: '/tutorials', label: 'Tutorials' },
  ];

  const dropdownItems = [
    {
      href: '/',
      title: 'DevChallenges',
      description: 'Complete your challenges and upscale your skills.',
      image:
        'https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png',
    },
    {
      href: '/community',
      title: 'Community Hub',
      description:
        'Join a vibrant community of developers and share knowledge.',
      image: 'https://cdn-icons-png.flaticon.com/512/1040/1040250.png',
    },
    {
      href: '/projects',
      title: 'Project Showcase',
      description: 'Discover and showcase exciting developer projects.',
      image: 'https://cdn-icons-png.flaticon.com/512/3063/3063820.png',
    },
    {
      href: '/resources',
      title: 'Developer Resources',
      description: 'Access a curated list of resources to boost your skills.',
      image: 'https://cdn-icons-png.flaticon.com/512/4213/4213691.png',
    },
    {
      href: '/support',
      title: 'Get Support',
      description:
        'Need help? Connect with us and get your questions answered.',
      image: 'https://cdn-icons-png.flaticon.com/512/1040/1040250.png',
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <nav className="bg-neutral-900 text-white py-4 px-4 md:px-16 flex lg:justify-between items-center border-b border-purple-400 shadow-xl shadow-gray-500/50">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl font-semibold tracking-tighter">
              dev
              <span className="text-4xl ml-1">
                <AuroraText>Community</AuroraText>
              </span>
            </h1>
          </Link>
        </div>
        {/* Hamburger Menu for sm and md screens */}
        <div className="lg:hidden absolute top-4 right-4 flex justify-end items-center">
          <button onClick={toggleMenu} className="p-2 rounded-md">
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        {/* Navigation Links */}
        <div className="relative">
          {/* Overlay for Collapsed Menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          {/* Collapsible Menu */}
          <div
            className={`absolute lg:static top-16 right-0 lg:bg-neutral-900 bg-gray-800 w-full lg:w-auto z-50 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden lg:block'}`}
          >
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 px-6 lg:px-0">
              {menuItems.map(item => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`hover:text-white block ${currentPath === item.href ? 'text-blue-500 font-semibold' : 'text-white'}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button className="hover:text-white flex items-center">
                  Explore <FaChevronDown className="ml-1 mt-1" />
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute bg-gray-800 text-white mt-2 py-2 w-72 rounded-lg z-50"
                    style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                  >
                    {dropdownItems.map(item => (
                      <Link key={item.href} href={item.href}>
                        <div className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
                          <Image
                            src={item.image}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div>
                            <div className="font-bold">{item.title}</div>
                            <div className="text-sm">{item.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4 relative">
          <div
            className="relative w-8 h-8 cursor-pointer"
            onMouseEnter={handleMouseEnterUserPopup}
            onMouseLeave={handleMouseLeaveUserPopup}
            onClick={handleMouseEnterUserPopup}
          >
            <Image
              src="/user.jpg"
              alt="profileImg"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-2 border-gray-500"
            />
            {isUserPopupOpen && (
              <div className="absolute right-0 top-12 mt-2 w-48 bg-gray-800 text-white py-2 rounded-lg shadow-lg z-50">
                <div className="px-2 py-2">
                  <p className="text-sm">devCommunity@gmail.com</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
