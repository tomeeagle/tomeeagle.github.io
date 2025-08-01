import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface WorkProject {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content: string;
  date: string;
}

const workDirectory = path.join(process.cwd(), 'src/content/work');

export function getWorkProjects(): WorkProject[] {
  const fileNames = fs.readdirSync(workDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(workDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        description: matterResult.data.description,
        image: matterResult.data.img || matterResult.data.image,
        tags: matterResult.data.tags || [],
        content: matterResult.content,
        date: matterResult.data.publishDate || matterResult.data.date || new Date().toISOString(),
      } as WorkProject;
    });

  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWorkProject(slug: string): WorkProject | null {
  try {
    const fullPath = path.join(workDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      description: matterResult.data.description,
      image: matterResult.data.img || matterResult.data.image,
      tags: matterResult.data.tags || [],
      content: matterResult.content,
      date: matterResult.data.publishDate || matterResult.data.date || new Date().toISOString(),
    } as WorkProject;
  } catch {
    return null;
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
} 