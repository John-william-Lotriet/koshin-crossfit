import { client } from '@/lib/sanity/client';
import { pageBySlugQuery, siteSettingsQuery } from '@/lib/sanity/queries';
import { fallbackHomePage, fallbackSiteSettings } from '@/lib/sanity/mockData';
import { PageDocument, SiteSettingsDocument } from '@/lib/sanity/types';
import { SiteLayout } from '@/components/layout/SiteLayout';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Fetch fresh CMS data on every request

export default async function HomePage() {
  let page: PageDocument = fallbackHomePage;
  let settings: SiteSettingsDocument = fallbackSiteSettings;

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      const [fetchedPage, fetchedSettings] = await Promise.all([
        client.fetch<PageDocument>(pageBySlugQuery, { slug: 'home' }),
        client.fetch<SiteSettingsDocument>(siteSettingsQuery),
      ]);

      if (fetchedPage) {
        page = fetchedPage;
      }
      if (fetchedSettings) {
        settings = fetchedSettings;
      }
    }
  } catch {
    // Graceful fallback to rich mock data
    page = fallbackHomePage;
    settings = fallbackSiteSettings;
  }

  return <SiteLayout page={page} settings={settings} />;
}
