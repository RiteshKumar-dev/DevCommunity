'use client';
import React from 'react';
import { HeroParallax } from './ui/hero-parallax';
import { products } from '@/data/idx';

export function HeroParallaxDemo() {
  return (
    <div className="rounded-3xl">
      <HeroParallax products={products} />
    </div>
  );
}
