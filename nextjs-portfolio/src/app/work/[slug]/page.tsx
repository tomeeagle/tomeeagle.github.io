import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Icon from '@/components/Icon';
import CallToAction from '@/components/CallToAction';
import { getWorkProject, getWorkProjects } from '@/lib/content';
import { markdownToHtml } from '@/lib/content';

interface WorkProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getWorkProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function WorkProjectPage({ params }: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    notFound();
  }

  const contentHtml = await markdownToHtml(project.content);

  return (
    <Layout
      title={`${project.title} - Tom Eagle`}
      description={project.description}
      image={project.image}
      url={`https://tomeagle.github.io/work/${project.slug}`}
    >
      <article className="project-page">
        <div className="wrapper">
          <header className="project-header">
            <Link href="/work" className="back-link">
              <Icon icon="arrow-left" size="1.25em" />
              Back to work
            </Link>
            
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="project-image">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="project-img"
              priority
            />
          </div>

          <div className="project-content">
            <div 
              className="project-markdown"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>

          <footer className="project-footer">
            <CallToAction href="/work" className="project-cta">
              View all projects
            </CallToAction>
          </footer>
        </div>
      </article>
    </Layout>
  );
} 