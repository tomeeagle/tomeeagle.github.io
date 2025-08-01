import Image from 'next/image';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Pill from '@/components/Pill';
import CallToAction from '@/components/CallToAction';
import PortfolioPreview from '@/components/PortfolioPreview';
import Skills from '@/components/Skills';
import ContactCTA from '@/components/ContactCTA';
import { getWorkProjects } from '@/lib/content';

export default function HomePage() {
  const projects = getWorkProjects().slice(0, 3);

  return (
    <Layout>
      <Hero>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Hi, I&apos;m <span className="text-gray-300">Tom Eagle</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Web developer and Shopify specialist based in Bakewell, Derbyshire.
          </p>
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            <Pill>Frontend Development</Pill>
            <Pill>Shopify</Pill>
            <Pill>React</Pill>
            <Pill>TypeScript</Pill>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start md:flex-row">
            <CallToAction href="/work" className="hero-cta primary">
              View my work
            </CallToAction>
            <CallToAction href="/about" className="hero-cta secondary">
              Learn more about me
            </CallToAction>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/portrait.jpg"
            alt="Tom Eagle"
            width={400}
            height={400}
            className="rounded-2xl w-full max-w-md h-auto"
            priority
          />
        </div>
      </Hero>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-4 text-center">Featured Work</h2>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <PortfolioPreview key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <CallToAction href="/work" className="bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700">
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
