'use client';

import Icon from './Icon';

export default function Skills() {
  return (
    <section className="box skills">
      <div className="stack gap-2 lg:gap-4">
        <Icon icon="storefront" color="var(--accent-regular)" size="2.5rem" gradient />
        <h2>Shopify</h2>
        <p>Shopify frontend development, theme customisations, app integrations</p>
      </div>
      <div className="stack gap-2 lg:gap-4">
        <Icon icon="terminal-window" color="var(--accent-regular)" size="2.5rem" gradient />
        <h2>WordPress</h2>
        <p>Custom themes in WordPress</p>
      </div>
      <div className="stack gap-2 lg:gap-4">
        <Icon icon="code" color="var(--accent-regular)" size="2.5rem" gradient />
        <h2>Frontend development</h2>
        <p>Custom frontends for your app</p>
      </div>
    </section>
  );
} 