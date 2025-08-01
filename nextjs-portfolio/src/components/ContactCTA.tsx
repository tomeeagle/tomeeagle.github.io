'use client';

import CallToAction from './CallToAction';
import Icon from './Icon';

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="wrapper">
        <div className="contact-cta-content">
          <h2 className="contact-cta-title">Ready to work together?</h2>
          <p className="contact-cta-description">
            Let&apos;s discuss your project and bring your ideas to life.
          </p>
          <div className="contact-cta-actions">
            <CallToAction 
              href="mailto:hello@tomeagle.co.uk" 
              className="contact-cta-button primary"
              external
            >
              <Icon icon="mailbox" size="1.25em" />
              Get in touch
            </CallToAction>
            <CallToAction 
              href="/work" 
              className="contact-cta-button secondary"
            >
              View my work
            </CallToAction>
          </div>
        </div>
      </div>
    </section>
  );
} 