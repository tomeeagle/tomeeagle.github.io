'use client';

import { useEffect } from 'react';
import Layout from '@/components/Layout';

export default function PrivacyPage() {
  useEffect(() => {
    // Email obfuscation
    const emailElement = document.getElementById('email') as HTMLAnchorElement;
    if (emailElement) {
      const email = 'hello@tomeagle.co.uk';
      emailElement.textContent = email;
      emailElement.href = `mailto:${email}`;
    }
  }, []);

  return (
    <Layout
      title="Privacy Policy - Tom Eagle"
      description="Privacy policy for Tom Eagle's website. Learn how we collect, use, and protect your information."
    >
      <section className="privacy-page">
        <div className="wrapper">
          <h1 className="page-title">Privacy Policy</h1>
          
          <div className="privacy-content">
            <p>Last updated: January 2024</p>
            
            <h2>Information We Collect</h2>
            <p>
              This website collects minimal personal information. We may collect information you 
              provide directly to us, such as when you contact us via email.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries and provide our services. 
              We do not sell, trade, or otherwise transfer your personal information to third parties.
            </p>
            
            <h2>Cookies and Analytics</h2>
            <p>
              This website uses Google Analytics to understand how visitors interact with our site. 
              Google Analytics uses cookies to collect information about your use of the website. 
              You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:{' '}
              <a id="email" href="mailto:hello@tomeagle.co.uk" className="email-link">
                hello@tomeagle.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 