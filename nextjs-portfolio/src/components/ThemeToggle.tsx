'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    document.documentElement.classList.toggle('theme-dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('theme-dark', newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Dark theme</span>
      <span className="icon light">
        <Icon icon="sun" />
      </span>
      <span className="icon dark">
        <Icon icon="moon-stars" />
      </span>

      <style jsx>{`
        button {
          display: flex;
          border: 0;
          border-radius: 999rem;
          padding: 0;
          background-color: var(--gray-999);
          box-shadow: inset 0 0 0 1px var(--accent-overlay);
          cursor: pointer;
        }

        .icon {
          z-index: 1;
          position: relative;
          display: flex;
          padding: 0.5rem;
          width: 2rem;
          height: 2rem;
          font-size: 1rem;
          color: var(--accent-overlay);
        }

        .icon.light::before {
          content: '';
          z-index: -1;
          position: absolute;
          inset: 0;
          background-color: var(--accent-regular);
          border-radius: 999rem;
        }

        :global(.theme-dark) .icon.light::before {
          transform: translateX(100%);
        }

        :global(.theme-dark) .icon.dark,
        :global(html:not(.theme-dark)) .icon.light,
        button[aria-pressed='false'] .icon.light {
          color: var(--accent-text-over);
        }

        @media (prefers-reduced-motion: no-preference) {
          .icon,
          .icon.light::before {
            transition:
              transform var(--theme-transition),
              color var(--theme-transition);
          }
        }
      `}</style>
    </button>
  );
} 