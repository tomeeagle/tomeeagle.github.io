'use client';

import Link from 'next/link';
import Image from 'next/image';
import { WorkProject } from '@/lib/content';

interface PortfolioPreviewProps {
  project: WorkProject;
}

export default function PortfolioPreview({ project }: PortfolioPreviewProps) {
  return (
    <Link className="card" href={`/work/${project.slug}`}>
      <span className="title">{project.title}</span>
      <Image 
        src={project.image} 
        alt={project.title} 
        width={400}
        height={300}
        loading="lazy" 
        decoding="async" 
      />
    </Link>
  );
} 