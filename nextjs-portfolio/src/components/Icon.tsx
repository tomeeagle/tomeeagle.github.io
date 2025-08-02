'use client';

import { iconPaths } from './IconPaths';

interface IconProps {
  icon: keyof typeof iconPaths;
  size?: string;
  className?: string;
  color?: string;
  gradient?: boolean;
}

export default function Icon({ icon, size = '1em', className = '', color, gradient }: IconProps) {
  const path = iconPaths[icon];
  
  if (!path) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  const fill = gradient ? 'url(#gradient)' : color || 'currentColor';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill={fill}
      className={className}
    >
      {gradient && (
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-light)" />
            <stop offset="50%" stopColor="var(--accent-regular)" />
            <stop offset="100%" stopColor="var(--accent-dark)" />
          </linearGradient>
        </defs>
      )}
      <g dangerouslySetInnerHTML={{ __html: path }} />
    </svg>
  );
} 