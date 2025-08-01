'use client';

import Link from 'next/link';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-999/50 backdrop-blur-sm">
      <div className="wrapper py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Tom Eagle. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="https://twitter.com/tomeagle" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Icon icon="twitter-logo" size="1.5em" />
            </Link>
            
            <Link 
              href="https://github.com/tomeagle" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon icon="github-logo" size="1.5em" />
            </Link>
            
            <Link 
              href="https://linkedin.com/in/tomeagle" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon icon="linkedin-logo" size="1.5em" />
            </Link>
          </div>
        </div>
        
        <div className="mt-4 text-center text-gray-500 text-xs">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
} 