import { defineType } from 'sanity';

export const pageBuilder = defineType({
  name: 'pageBuilder',
  title: 'Page Builder Sections',
  type: 'array',
  of: [
    { type: 'heroSection' },
    { type: 'mascotSection' },
    { type: 'sponsorsSection' },
    { type: 'marqueeSection' },
    { type: 'wodSection' },
    { type: 'facilitySection' },
    { type: 'programsSection' },
    { type: 'timetableSection' },
    { type: 'eventSection' },
    { type: 'coachesSection' },
    { type: 'pricingSection' },
    { type: 'contactSection' },
  ],
});
