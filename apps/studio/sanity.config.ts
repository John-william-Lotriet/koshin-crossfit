import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Koshin CrossFit Studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'koshin-preview',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings & Global Navigation')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Core Page Builder pages
            S.documentTypeListItem('page').title('Pages (Page Builder)'),
            S.divider(),
            // Standalone collections
            S.documentTypeListItem('coach').title('Coaches'),
            S.documentTypeListItem('wod').title('Daily WODs'),
            S.documentTypeListItem('program').title('Programs & Disciplines'),
            S.documentTypeListItem('scheduleSlot').title('Timetable Slots'),
            S.documentTypeListItem('pricingTier').title('Membership Pricing Tiers'),
            S.documentTypeListItem('event').title('Community Events'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
