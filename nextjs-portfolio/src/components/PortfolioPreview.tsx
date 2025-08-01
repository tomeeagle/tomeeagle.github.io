'use client';

import Link from 'next/link';
import Image from 'next/image';
import { WorkProject } from '@/lib/content';

interface PortfolioPreviewProps {
  project: WorkProject;
}

export default function PortfolioPreview({ project }: PortfolioPreviewProps) {
  return (
    <article className="portfolio-preview">
      <Link href={`/work/${project.slug}`} className="portfolio-preview-link">
        <div className="portfolio-preview-image">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="portfolio-preview-img"
          />
        </div>
        <div className="portfolio-preview-content">
          <h3 className="portfolio-preview-title">{project.title}</h3>
          <p className="portfolio-preview-description">{project.description}</p>
          <div className="portfolio-preview-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="portfolio-preview-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
} 