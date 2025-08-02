import Image from 'next/image';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ContactCTA from '@/components/ContactCTA';

export default function AboutPage() {
  return (
    <Layout
      title="About Me - Tom Eagle"
      description="Learn more about Tom Eagle, a web developer and Shopify specialist based in Bakewell, Derbyshire. Discover my background, skills, and approach to web development."
    >
      <Hero
        title="About Me"
        tagline="Web developer and Shopify specialist passionate about creating exceptional digital experiences."
        align="start"
      >
        <div className="hero-image">
          <Image
            src="/assets/portrait.jpg"
            alt="Tom Eagle"
            width={400}
            height={400}
            className="hero-portrait"
            priority
          />
        </div>
      </Hero>

      <section className="about-content">
        <div className="wrapper">
          <div className="about-text">
            <h2>My Background</h2>
            <p>
              I&apos;m a web developer based in Bakewell, Derbyshire, with a passion for creating 
              beautiful, functional websites and e-commerce solutions. With expertise in modern 
              frontend technologies and Shopify development, I help businesses establish a strong 
              online presence.
            </p>
            
            <h2>What I Do</h2>
            <p>
              I specialize in frontend development using React, TypeScript, and Next.js, creating 
              fast, responsive, and accessible web applications. My Shopify expertise includes 
              custom theme development, app creation, and store optimization to drive sales and 
              improve user experience.
            </p>
            
            <h2>My Approach</h2>
            <p>
              I believe in clean, maintainable code and user-centered design. Every project I work 
              on is built with performance, accessibility, and scalability in mind. I collaborate 
              closely with clients to understand their needs and deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
} 