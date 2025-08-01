'use client';

import { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
  className?: string;
}

export default function Hero({ children, className = '' }: HeroProps) {
  return (
    <section className={`py-16 md:py-24 text-center md:text-left ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {children}
        </div>
      </div>
    </section>
  );
} 