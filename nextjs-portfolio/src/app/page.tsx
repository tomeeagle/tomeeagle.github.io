import Image from 'next/image';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Pill from '@/components/Pill';
import CallToAction from '@/components/CallToAction';
import Grid from '@/components/Grid';
import PortfolioPreview from '@/components/PortfolioPreview';
import Skills from '@/components/Skills';
import ContactCTA from '@/components/ContactCTA';
import { getWorkProjects } from '@/lib/content';

export default function HomePage() {
  const projects = getWorkProjects().slice(0, 3);

  return (
    <Layout>
      <Hero>
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="hero-name">Tom Eagle</span>
          </h1>
          <p className="hero-subtitle">
            Web developer and Shopify specialist based in Bakewell, Derbyshire.
          </p>
          <div className="hero-tags">
            <Pill>Frontend Development</Pill>
            <Pill>Shopify</Pill>
            <Pill>React</Pill>
            <Pill>TypeScript</Pill>
          </div>
          <div className="hero-actions">
            <CallToAction href="/work" className="hero-cta primary">
              View my work
            </CallToAction>
            <CallToAction href="/about" className="hero-cta secondary">
              Learn more about me
            </CallToAction>
          </div>
        </div>
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

      <section className="featured-work">
        <div className="wrapper">
          <h2 className="section-title">Featured Work</h2>
          <Grid className="portfolio-grid">
            {projects.map((project) => (
              <PortfolioPreview key={project.slug} project={project} />
            ))}
          </Grid>
          <div className="section-actions">
            <CallToAction href="/work" className="section-cta">
              View all projects
            </CallToAction>
          </div>
        </div>
      </section>

      <Skills />
      <ContactCTA />
    </Layout>
  );
}
