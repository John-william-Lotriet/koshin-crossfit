// Documents
import {
  page,
  siteSettings,
  coach,
  program,
  scheduleSlot,
  wod,
  pricingTier,
  event,
} from './documents';

// Objects
import { button, statItem, traitItem, wodExercise } from './objects/common';
import {
  heroSection,
  wodSection,
  programsSection,
  facilitySection,
  timetableSection,
  coachesSection,
  eventSection,
  pricingSection,
  mascotSection,
  sponsorsSection,
  marqueeSection,
  contactSection,
} from './objects/sections';
import { pageBuilder } from './objects/pageBuilder';

export const schemaTypes = [
  // Documents
  page,
  siteSettings,
  coach,
  program,
  scheduleSlot,
  wod,
  pricingTier,
  event,

  // Objects
  button,
  statItem,
  traitItem,
  wodExercise,
  pageBuilder,

  // Section Blocks
  heroSection,
  wodSection,
  programsSection,
  facilitySection,
  timetableSection,
  coachesSection,
  eventSection,
  pricingSection,
  mascotSection,
  sponsorsSection,
  marqueeSection,
  contactSection,
];
