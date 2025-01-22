'use client';
import React, { useState } from 'react';
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AuroraText } from './ui/AuroraText';
import { FloatingNav } from './ui/floating-navbar';
import { User2 } from 'lucide-react';
import { IconHome, IconMessage, IconWorldQuestion } from '@tabler/icons-react';
import { useAuthStore } from '@/store/Auth';
import slugify from '@/utils/slugify';
export function StaticNavbar() {
  const { user } = useAuthStore();
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Questions',
      link: '/questions',
      icon: (
        <IconWorldQuestion className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  if (user)
    navItems.push({
      name: 'Profile',
      link: `/users/${user.$id}/${slugify(user.name)}`,
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    });

  return (
    <div className="relative w-full flex items-center justify-center bg-primary">
      <FloatingNav navItems={navItems} />
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { user } = useAuthStore();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn('w-full mx-auto z-50', className)}>
      <Menu setActive={setActive}>
        {/* Wrapper for logo, menu, and user details */}
        <div className="flex items-center justify-between w-full md:px-10">
          {/* Logo Section */}
          <div>
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-semibold tracking-tighter">
                dev
                <span className="text-4xl ml-1">
                  <AuroraText>Community</AuroraText>
                </span>
              </h1>
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="/reactjs.png"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="/js.png"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="/Node.js_logo.svg.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="/heroRightImg.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>

          {/* User Details */}
          {user && (
            <div className="hidden md:block">
              <MenuItem setActive={setActive} active={active} item="User">
                <div className="flex flex-col space-y-2 text-sm">
                  <HoveredLink href="/">{user?.name || ''}</HoveredLink>
                  <HoveredLink href="/">{user?.email || ''}</HoveredLink>
                </div>
              </MenuItem>
            </div>
          )}
          <div className="md:hidden">
            <User2 />
          </div>
        </div>
      </Menu>
    </div>
  );
}
