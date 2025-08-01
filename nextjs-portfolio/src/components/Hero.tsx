'use client';

import { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
  className?: string;
}

export default function Hero({ children, className = '' }: HeroProps) {
  return (
    <section className={`hero ${className}`}>
      <div className="wrapper">
        <div className="hero-content">
          {children}
        </div>
      </div>
    </section>
  );
} 