'use client';

import CallToAction from './CallToAction';
import Icon from './Icon';

export default function ContactCTA() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Ready to work together?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and bring your ideas to life.
          </p>
          <div className="flex flex-col gap-4 items-center md:flex-row md:justify-center">
            <CallToAction 
              href="mailto:hello@tomeagle.co.uk" 
              className="bg-gray-100 text-gray-900 hover:bg-gray-200"
              external
            >
              <Icon icon="mailbox" size="1.25em" />
              Get in touch
            </CallToAction>
            <CallToAction 
              href="/work" 
              className="bg-transparent text-gray-300 border border-gray-700 hover:bg-gray-800 hover:text-gray-100"
            >
              View my work
            </CallToAction>
          </div>
        </div>
      </div>
    </section>
  );
} 