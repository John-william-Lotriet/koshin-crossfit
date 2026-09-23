import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { client } from '@/lib/sanity/client';
import { pageBySlugQuery, siteSettingsQuery, allPagesSlugQuery } from '@/lib/sanity/queries';
import { fallbackSiteSettings } from '@/lib/sanity/mockData';
import { PageDocument, SiteSettingsDocument } from '@/lib/sanity/types';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { urlForImage } from '@/lib/sanity/image';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const pages = await client.fetch<Array<{ slug: string }>>(allPagesSlugQuery);
      return pages
        .filter((p) => p.slug !== 'home')
        .map((p) => ({
          slug: p.slug.split('/'),
        }));
    }
  } catch {
    return [];
  }
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join('/');

  try {
    const page = await client.fetch<PageDocument>(pageBySlugQuery, { slug: slugPath });
    if (!page) return {};

    const ogImgUrl = page.seo?.ogImage ? urlForImage(page.seo.ogImage) : undefined;

    return {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription,
      keywords: page.seo?.keywords,
      openGraph: {
        title: page.seo?.metaTitle || page.title,
        description: page.seo?.metaDescription,
        images: ogImgUrl ? [{ url: ogImgUrl }] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug.join('/');

  let page: PageDocument | null = null;
  let settings: SiteSettingsDocument = fallbackSiteSettings;

  try {
    const [fetchedPage, fetchedSettings] = await Promise.all([
      client.fetch<PageDocument>(pageBySlugQuery, { slug: slugPath }),
      client.fetch<SiteSettingsDocument>(siteSettingsQuery),
    ]);

    page = fetchedPage;
    if (fetchedSettings) settings = fetchedSettings;
  } catch {
    page = null;
  }

  if (!page) {
    notFound();
  }

  return <SiteLayout page={page} settings={settings} />;
}
