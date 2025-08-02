'use client';

import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  variant?: 'offset' | 'small';
}

export default function Grid({ children, variant }: GridProps) {
  const variantClass = variant === 'offset' ? 'grid-offset' : variant === 'small' ? 'grid-small' : '';
  
  return (
    <ul className={`grid ${variantClass}`}>
      {children}
    </ul>
  );
} 