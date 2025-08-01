'use client';

import Link from 'next/link';
import Image from 'next/image';
import { WorkProject } from '@/lib/content';

interface PortfolioPreviewProps {
  project: WorkProject;
}

export default function PortfolioPreview({ project }: PortfolioPreviewProps) {
  return (
    <article className="bg-gray-800 rounded-2xl overflow-hidden transition-transform hover:-translate-y-1">
      <Link href={`/work/${project.slug}`} className="text-decoration-none text-inherit">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
} 