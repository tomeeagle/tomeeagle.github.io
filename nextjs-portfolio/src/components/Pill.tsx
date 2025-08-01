'use client';

import { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
  className?: string;
}

export default function Pill({ children, className = '' }: PillProps) {
  return (
    <span className={`inline-block px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium ${className}`}>
      {children}
    </span>
  );
} 