'use client';

import Icon from './Icon';

export default function Skills() {
  return (
    <section className="skills">
      <div className="wrapper">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">
              <Icon icon="code" size="1.5em" />
              Frontend Development
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="skill-category-title">
              <Icon icon="storefront" size="1.5em" />
              E-commerce
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">Shopify</span>
              <span className="skill-tag">Liquid</span>
              <span className="skill-tag">Shopify API</span>
              <span className="skill-tag">Theme Development</span>
              <span className="skill-tag">App Development</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="skill-category-title">
              <Icon icon="atom" size="1.5em" />
              Tools & Platforms
            </h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Netlify</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 