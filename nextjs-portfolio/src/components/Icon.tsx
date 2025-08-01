'use client';

import { iconPaths } from './IconPaths';

interface IconProps {
  icon: keyof typeof iconPaths;
  size?: string;
  className?: string;
}

export default function Icon({ icon, size = '1em', className = '' }: IconProps) {
  const path = iconPaths[icon];
  
  if (!path) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
} 