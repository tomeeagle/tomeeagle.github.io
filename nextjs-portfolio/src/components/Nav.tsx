'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';

const textLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

const iconLinks = [
  { label: 'GitHub', href: 'https://github.com/tomeeagle', icon: 'github-logo' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tom-eagle/', icon: 'linkedin-logo' as const },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrentPage, setIsCurrentPage] = useState('');

  useEffect(() => {
    setIsCurrentPage(window.location.pathname);
  }, []);

  const isCurrent = (href: string) => {
    if (href === '/') return isCurrentPage === '/';
    return isCurrentPage.startsWith(href);
  };

  return (
    <nav>
      <div className="menu-header">
        <Link href="/" className="site-title">
          <Icon icon="terminal-window" color="var(--accent-regular)" size="1.6em" gradient />
          Tom Eagle
        </Link>
        <button
          className="menu-button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <Icon icon="list" />
        </button>
      </div>

      <div className={`menu-content ${isMenuOpen ? '' : 'hidden'}`}>
        <ul className="nav-items">
          {textLinks.map(({ label, href }) => (
            <li key={href}>
              <Link 
                aria-current={isCurrent(href) ? 'page' : undefined} 
                className="link" 
                href={href}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-footer">
          <div className="socials">
            {iconLinks.map(({ href, icon, label }) => (
              <a key={href} href={href} className="social" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{label}</span>
                <Icon icon={icon} />
              </a>
            ))}
          </div>
          <div className="theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <style jsx>{`
        nav {
          z-index: 9999;
          position: relative;
          font-family: var(--font-brand);
          font-weight: 500;
          margin-bottom: 3.5rem;
        }

        .menu-header {
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
          padding: 1.5rem;
        }

        .site-title {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          line-height: 1.1;
          color: var(--gray-0);
          text-decoration: none;
        }

        .menu-button {
          position: relative;
          display: flex;
          border: 0;
          border-radius: 999rem;
          padding: 0.5rem;
          font-size: 1.5rem;
          color: var(--gray-300);
          background: radial-gradient(var(--gray-900), var(--gray-800) 150%);
          box-shadow: var(--shadow-md);
          cursor: pointer;
        }

        .menu-button[aria-expanded='true'] {
          color: var(--gray-0);
          background: linear-gradient(180deg, var(--gray-600), transparent),
            radial-gradient(var(--gray-900), var(--gray-800) 150%);
        }

        .menu-button::before {
          position: absolute;
          inset: -1px;
          content: '';
          background: var(--gradient-stroke);
          border-radius: 999rem;
          z-index: -1;
        }

        .menu-content {
          position: absolute;
          left: 0;
          right: 0;
        }

        .menu-content.hidden {
          display: none;
        }

        .nav-items {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          font-size: var(--text-md);
          line-height: 1.2;
          list-style: none;
          padding: 2rem;
          background-color: var(--gray-999);
          border-bottom: 1px solid var(--gray-800);
        }

        .link {
          display: inline-block;
          color: var(--gray-300);
          text-decoration: none;
        }

        .link[aria-current] {
          color: var(--gray-0);
        }

        .menu-footer {
          --icon-size: var(--text-xl);
          --icon-padding: 0.5rem;

          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 1.5rem 2rem 1.5rem 1.5rem;
          background-color: var(--gray-999);
          border-radius: 0 0 0.75rem 0.75rem;
          box-shadow: var(--shadow-lg);
        }

        .socials {
          display: flex;
          flex-wrap: wrap;
          gap: 0.625rem;
          font-size: var(--icon-size);
        }

        .social {
          display: flex;
          padding: var(--icon-padding);
          text-decoration: none;
          color: var(--accent-dark);
          transition: color var(--theme-transition);
        }

        .social:hover,
        .social:focus {
          color: var(--accent-text-over);
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          height: calc(var(--icon-size) + 2 * var(--icon-padding));
        }

        @media (min-width: 50em) {
          nav {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: 2.5rem 5rem;
            gap: 1rem;
          }

          .menu-header {
            padding: 0;
          }

          .site-title {
            font-size: var(--text-lg);
          }

          .menu-content {
            display: contents;
          }

          .menu-content.hidden {
            display: contents;
          }

          .nav-items {
            position: relative;
            flex-direction: row;
            font-size: var(--text-sm);
            border-radius: 999rem;
            border: 0;
            padding: 0.5rem 0.5625rem;
            background: radial-gradient(var(--gray-900), var(--gray-800) 150%);
            box-shadow: var(--shadow-md);
          }

          .nav-items::before {
            position: absolute;
            inset: -1px;
            content: '';
            background: var(--gradient-stroke);
            border-radius: 999rem;
            z-index: -1;
          }

          .link {
            padding: 0.5rem 1rem;
            border-radius: 999rem;
            transition:
              color var(--theme-transition),
              background-color var(--theme-transition);
          }

          .link:hover,
          .link:focus {
            color: var(--gray-100);
            background-color: var(--accent-subtle-overlay);
          }

          .link[aria-current='page'] {
            color: var(--accent-text-over);
            background-color: var(--accent-regular);
          }

          .menu-footer {
            --icon-padding: 0.375rem;

            justify-self: flex-end;
            align-items: center;
            padding: 0;
            background-color: transparent;
            box-shadow: none;
          }

          .socials {
            display: flex;
            justify-content: flex-end;
            gap: 0;
          }
        }

        @media (min-width: 60em) {
          .socials {
            display: flex;
            justify-content: flex-end;
            gap: 0;
          }
        }
        @media (forced-colors: active) {
          .link[aria-current='page'] {
            color: SelectedItem;
          }
        }
      `}</style>
    </nav>
  );
} 