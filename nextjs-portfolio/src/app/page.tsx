import Image from 'next/image';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Pill from '@/components/Pill';
import CallToAction from '@/components/CallToAction';
import Grid from '@/components/Grid';
import PortfolioPreview from '@/components/PortfolioPreview';
import Skills from '@/components/Skills';
import ContactCTA from '@/components/ContactCTA';
import Icon from '@/components/Icon';
import { getWorkProjects } from '@/lib/content';

export default function HomePage() {
  const projects = getWorkProjects().slice(0, 4);

  return (
    <Layout 
      title="Tom Eagle: Web Developer & Shopify Specialist | Bakewell, Derbyshire"
      description="Web developer and Shopify specialist based in Bakewell, Derbyshire. Specializing in frontend development, React, and custom Shopify solutions. View my portfolio of work."
      image="/assets/portrait.jpg"
    >
      <div className="stack gap-20 lg:gap-48">
        <div className="wrapper stack gap-8 lg:gap-20">
          <header className="hero">
            <Hero
              title="Hello, my name is Tom Eagle"
              tagline="I am a Web Developer who is currently based in Bakewell, Derbyshire."
              align="start"
            >
              <div className="roles">
                <Pill><Icon icon="code" size="1.33em" /> Frontend</Pill>
                <Pill><Icon icon="storefront" size="1.33em" /> Shopify</Pill>
                <Pill><Icon icon="atom" size="1.33em" /> React</Pill>
              </div>
            </Hero>

            <div className="image-wrapper">
              <Image
                alt="Professional portrait of Tom Eagle"
                width={480}
                height={620}
                src="/assets/portrait.jpg"
                priority
              />
            </div>
          </header>

          <Skills />
        </div>

        <main className="wrapper stack gap-20 lg:gap-48">
          <section className="section with-background with-cta">
            <header className="section-header stack gap-2 lg:gap-4">
              <h3>Selected Work</h3>
              <p className="flex"><CallToAction href="mailto:tomeagleweb@gmail.com">Email me now <Icon icon="mailbox" /></CallToAction></p>
            </header>

            <div className="gallery">
              <Grid variant="offset">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <PortfolioPreview project={project} />
                  </li>
                ))}
              </Grid>
            </div>
          </section>
        </main>

        <ContactCTA />
      </div>
    </Layout>
  );
}
