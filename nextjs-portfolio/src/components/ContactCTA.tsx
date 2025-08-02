'use client';

import CallToAction from './CallToAction';
import Icon from './Icon';

export default function ContactCTA() {
  return (
    <aside>
      <h2>Interested in working together?</h2>
      <CallToAction href="mailto:tomeagleweb@gmail.com">
        Send Me a Message
        <Icon icon="paper-plane-tilt" size="1.2em" />
      </CallToAction>
    </aside>
  );
} 