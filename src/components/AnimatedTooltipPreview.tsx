'use client';
import React from 'react';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: '/user1.jpg',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image: '/user2.jpg',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image: '/user3.jpg',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image: '/user4.jpg',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image: '/user5.avif',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image: '/user1.jpg',
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
