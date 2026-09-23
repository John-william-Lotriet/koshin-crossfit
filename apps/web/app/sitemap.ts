import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity/client';
import { allPagesSlugQuery } from '@/lib/sanity/queries';

const baseUrl = 'https://koshin-crossfit.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const pages = await client.fetch<Array<{ slug: string }>>(allPagesSlugQuery);

      pages.forEach((p) => {
        if (p.slug !== 'home') {
          routes.push({
            url: `${baseUrl}/${p.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
          });
        }
      });
    }
  } catch {
    // Return base route
  }

  return routes;
}
