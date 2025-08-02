'use client';

import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Layout({ 
  children, 
  title = "Tom Eagle: Web Developer & Shopify Specialist | Bakewell, Derbyshire",
  description = "Web developer and Shopify specialist based in Bakewell, Derbyshire. Specializing in frontend development, React, and custom Shopify solutions. View my portfolio of work.",
  image = "/assets/portrait.jpg",
  url
}: LayoutProps) {
  useEffect(() => {
    const handleLoad = () => {
      document.documentElement.classList.add('loaded');
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        {url && <meta property="og:url" content={url} />}
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZHE6J1G38"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NZHE6J1G38');
            `,
          }}
        />
        <meta name="google-site-verification" content="L-6gG7xzlfvR57zzJZyZWS-X5MN47YI4VpJeWtmkRg0" />
      </Head>
      
      <div className="stack backgrounds">
        <Nav />
        {children}
        <Footer />
      </div>

      <style jsx global>{`
        :root {
          --_placeholder-bg: linear-gradient(transparent, transparent);
          --bg-image-main: url('/assets/backgrounds/bg-main-light-800w.jpg');
          --bg-image-main-curves: url('/assets/backgrounds/bg-main-light.svg');
          --bg-image-subtle-1: var(--_placeholder-bg);
          --bg-image-subtle-2: var(--_placeholder-bg);
          --bg-image-footer: var(--_placeholder-bg);
          --bg-svg-blend-mode: overlay;
          --bg-blend-mode: darken;
          --bg-image-aspect-ratio: 2.25;
          --bg-scale: 1.68;
          --bg-aspect-ratio: calc(var(--bg-image-aspect-ratio) / var(--bg-scale));
          --bg-gradient-size: calc(var(--bg-scale) * 100%);
        }

        :root.theme-dark {
          --bg-image-main: url('/assets/backgrounds/bg-main-dark-800w.jpg');
          --bg-image-main-curves: url('/assets/backgrounds/bg-main-dark.svg');
          --bg-svg-blend-mode: darken;
          --bg-blend-mode: lighten;
        }

        :root.loaded {
          --bg-image-subtle-1: url('/assets/backgrounds/bg-subtle-1-light-800w.jpg');
          --bg-image-subtle-2: url('/assets/backgrounds/bg-subtle-2-light-800w.jpg');
          --bg-image-footer: url('/assets/backgrounds/bg-footer-light-800w.jpg');
        }
        :root.loaded.theme-dark {
          --bg-image-subtle-1: url('/assets/backgrounds/bg-subtle-1-dark-800w.jpg');
          --bg-image-subtle-2: url('/assets/backgrounds/bg-subtle-2-dark-800w.jpg');
          --bg-image-footer: url('/assets/backgrounds/bg-footer-dark-800w.jpg');
        }

        @media (min-width: 50em) {
          :root {
            --bg-scale: 1;
            --bg-image-main: url('/assets/backgrounds/bg-main-light-1440w.jpg');
          }
          :root.theme-dark {
            --bg-image-main: url('/assets/backgrounds/bg-main-dark-1440w.jpg');
          }

          :root.loaded {
            --bg-image-subtle-1: url('/assets/backgrounds/bg-subtle-1-light-1440w.jpg');
            --bg-image-subtle-2: url('/assets/backgrounds/bg-subtle-2-light-1440w.jpg');
            --bg-image-footer: url('/assets/backgrounds/bg-footer-light-1440w.jpg');
          }
          :root.loaded.theme-dark {
            --bg-image-subtle-1: url('/assets/backgrounds/bg-subtle-1-dark-1440w.jpg');
            --bg-image-subtle-2: url('/assets/backgrounds/bg-subtle-2-dark-1440w.jpg');
            --bg-image-footer: url('/assets/backgrounds/bg-footer-dark-1440w.jpg');
          }
        }

        .stack.backgrounds {
          min-height: 100vh;
          isolation: isolate;
          background:
            url('/assets/backgrounds/noise.png') top center/220px repeat,
            var(--bg-image-footer) bottom center/var(--bg-gradient-size) no-repeat,
            var(--bg-image-main-curves) top center/var(--bg-gradient-size) no-repeat,
            var(--bg-image-main) top center/var(--bg-gradient-size) no-repeat,
            var(--gray-999);
          background-blend-mode: overlay, var(--bg-blend-mode), var(--bg-svg-blend-mode), normal, normal;
        }
        @media (forced-colors: active) {
          .stack.backgrounds {
            background: none;
            background-blend-mode: none;
            --bg-gradient-size: none;
          }
        }
      `}</style>
    </>
  );
} 