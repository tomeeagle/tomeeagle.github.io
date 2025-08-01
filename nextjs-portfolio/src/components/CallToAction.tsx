'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface CallToActionProps {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

export default function CallToAction({ children, href, className = '', external = false }: CallToActionProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-decoration-none transition-all';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (external) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
} 