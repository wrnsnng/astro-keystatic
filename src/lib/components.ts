import { getCollection } from 'astro:content';

export interface ComponentEntry {
  id: string;
  slug: string;
  data: {
    name: string;
    title: string;
    shortDescription: string;
    status: 'stable' | 'beta' | 'alpha' | 'deprecated';
  };
  body: string;
  render: () => Promise<{
    Content: any;
    headings: any[];
    remarkPluginFrontmatter: Record<string, any>;
  }>;
}

export async function getComponents() {
  const components = await getCollection('components');
  return components.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function getComponentBySlug(slug: string) {
  const components = await getComponents();
  return components.find((component) => component.slug === slug);
} 