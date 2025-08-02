import Layout from '@/components/Layout';
import Grid from '@/components/Grid';
import PortfolioPreview from '@/components/PortfolioPreview';
import { getWorkProjects } from '@/lib/content';

export default function WorkPage() {
  const projects = getWorkProjects();

  return (
    <Layout 
      title="My Work - Tom Eagle"
      description="View my portfolio of web development and Shopify projects. From custom e-commerce solutions to modern web applications."
    >
      <section className="work-page">
        <div className="wrapper">
          <h1 className="page-title">My Work</h1>
          <p className="page-description">
            A selection of projects I&apos;ve worked on, showcasing my skills in web development, 
            Shopify customization, and modern frontend technologies.
          </p>
          
          <Grid variant="offset">
            {projects.map((project) => (
              <li key={project.slug}>
                <PortfolioPreview project={project} />
              </li>
            ))}
          </Grid>
        </div>
      </section>
    </Layout>
  );
} 