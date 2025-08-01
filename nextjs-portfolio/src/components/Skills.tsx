'use client';

import Icon from './Icon';

export default function Skills() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-700 p-8 rounded-2xl">
            <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-100 mb-6">
              <Icon icon="code" size="1.5em" />
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">React</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">TypeScript</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Next.js</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Tailwind CSS</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">HTML/CSS</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">JavaScript</span>
            </div>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-2xl">
            <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-100 mb-6">
              <Icon icon="storefront" size="1.5em" />
              E-commerce
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Shopify</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Liquid</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Shopify API</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Theme Development</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">App Development</span>
            </div>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-2xl">
            <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-100 mb-6">
              <Icon icon="atom" size="1.5em" />
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Git</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">VS Code</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Figma</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Vercel</span>
              <span className="bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 