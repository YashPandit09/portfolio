import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
