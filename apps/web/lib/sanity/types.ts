export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface ButtonData {
  _type: 'button';
  _key?: string;
  label: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  isModalTrigger?: boolean;
}

export interface StatItemData {
  _type: 'statItem';
  _key?: string;
  value: string;
  label: string;
  glow?: 'pink' | 'cyan' | 'none';
}

export interface TraitItemData {
  _type: 'traitItem';
  _key?: string;
  emoji: string;
  text: string;
}

export interface WodExerciseData {
  _type: 'wodExercise';
  _key?: string;
  exercise: string;
  tag?: string;
  tagColor?: 'cyan' | 'pink' | 'white' | 'lime';
}

// Section Block Interfaces
export interface HeroSectionBlock {
  _type: 'heroSection';
  _key?: string;
  eyebrowBadge?: string;
  titlePrimary?: string;
  titleSecondary?: string;
  brushSlogan?: string;
  description?: string;
  ctaButtons?: ButtonData[];
  stats?: StatItemData[];
  visualImage?: SanityImage | string;
  visualBrushQuote?: string;
  visualDisplayQuote?: string;
}

export interface MascotSectionBlock {
  _type: 'mascotSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  pills?: string[];
}

export interface SponsorsSectionBlock {
  _type: 'sponsorsSection';
  _key?: string;
  label?: string;
}

export interface MarqueeSectionBlock {
  _type: 'marqueeSection';
  _key?: string;
  tickerItems?: string[];
}

export interface WodSectionBlock {
  _type: 'wodSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  exercises?: WodExerciseData[];
  chalkQuote?: string;
  scalingNotes?: string;
}

export interface FacilitySectionBlock {
  _type: 'facilitySection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export interface ProgramDocument {
  _id: string;
  title: string;
  categoryBadge?: string;
  accentColor?: 'cyan' | 'pink' | 'orange' | 'green' | 'purple';
  description: string;
  scheduleInfo?: string;
  tags?: string[];
  order?: number;
}

export interface ProgramsSectionBlock {
  _type: 'programsSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  programs?: ProgramDocument[];
}

export interface ScheduleSlotDocument {
  _id: string;
  time: string;
  title: string;
  coachName: string;
  category: 'morning' | 'afternoon' | 'hyrox' | 'outdoor';
  order?: number;
}

export interface TimetableSectionBlock {
  _type: 'timetableSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  slots?: ScheduleSlotDocument[];
}

export interface CoachDocument {
  _id: string;
  name: string;
  role: string;
  photo?: SanityImage | string;
  bio: string;
  traits: TraitItemData[];
  polaroidQuote: string;
  order?: number;
}

export interface CoachesSectionBlock {
  _type: 'coachesSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  coaches?: CoachDocument[];
}

export interface EventSectionBlock {
  _type: 'eventSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  pills?: string[];
  priceTag?: string;
  backgroundImage?: SanityImage | string;
}

export interface PricingTierDocument {
  _id: string;
  name: string;
  subtitle?: string;
  price: string;
  currency?: string;
  period?: string;
  isFeatured?: boolean;
  ribbonText?: string;
  features?: string[];
  ctaLabel?: string;
  order?: number;
}

export interface PricingSectionBlock {
  _type: 'pricingSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tiers?: PricingTierDocument[];
}

export interface ContactSectionBlock {
  _type: 'contactSection';
  _key?: string;
  eyebrow?: string;
  title?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export type PageBuilderBlock =
  | HeroSectionBlock
  | MascotSectionBlock
  | SponsorsSectionBlock
  | MarqueeSectionBlock
  | WodSectionBlock
  | FacilitySectionBlock
  | ProgramsSectionBlock
  | TimetableSectionBlock
  | EventSectionBlock
  | CoachesSectionBlock
  | PricingSectionBlock
  | ContactSectionBlock;

export interface PageDocument {
  _id: string;
  title: string;
  slug: { current: string };
  pageBuilder?: PageBuilderBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
    keywords?: string[];
  };
}

export interface SiteSettingsDocument {
  siteTitle?: string;
  tagline?: string;
  boxHoursText?: string;
  navLinks?: Array<{ label: string; href: string }>;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}
