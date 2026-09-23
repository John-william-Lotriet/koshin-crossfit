import { defineType, defineField } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrowBadge',
      title: 'Eyebrow Badge Text',
      type: 'string',
      initialValue: '2 Sunfield Place, Durban North',
    }),
    defineField({
      name: 'titlePrimary',
      title: 'Main Brand Title (e.g. KOSHIN)',
      type: 'string',
      initialValue: 'KOSHIN',
    }),
    defineField({
      name: 'titleSecondary',
      title: 'Subtitle / Tracked Title (e.g. C R O S S F I T)',
      type: 'string',
      initialValue: 'C R O S S F I T',
    }),
    defineField({
      name: 'brushSlogan',
      title: 'Street Brush Slogan',
      type: 'string',
      initialValue: '# Built Different • Made Koshin',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'You don’t have to be fit to join our family! Experience world-class coaching, capped class sizes, and an electric community engineered to take your everyday lifestyle to the next level.',
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Call-to-Action Buttons',
      type: 'array',
      of: [{ type: 'button' }],
    }),
    defineField({
      name: 'stats',
      title: 'Metric Stats Row',
      type: 'array',
      of: [{ type: 'statItem' }],
    }),
    defineField({
      name: 'visualImage',
      title: 'Right Visual Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'visualBrushQuote',
      title: 'Visual Card Brush Slogan',
      type: 'string',
      initialValue: 'WE DON’T DO AVERAGE.',
    }),
    defineField({
      name: 'visualDisplayQuote',
      title: 'Visual Card Display Text',
      type: 'string',
      initialValue: 'WE DO AWESOME.',
    }),
  ],
});

export const wodSection = defineType({
  name: 'wodSection',
  title: 'Daily WOD Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Eyebrow',
      type: 'string',
      initialValue: 'DAILY PROGRAMMING',
    }),
    defineField({
      name: 'title',
      title: 'Workout Title',
      type: 'string',
      initialValue: '"SATURDAY SLAUGHTER" — TEAM WORKOUT',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue:
        'Every workout at Koshin is fully scalable to your personal capability. Whether it’s your Day 1 or Year 5, our expert coaches guide every single rep.',
    }),
    defineField({
      name: 'exercises',
      title: 'Workout Exercises',
      type: 'array',
      of: [{ type: 'wodExercise' }],
    }),
    defineField({
      name: 'chalkQuote',
      title: 'Chalkboard Polaroid Quote',
      type: 'string',
      initialValue: '“Strategy in the mind. Strength in the body. Heart in the game.” ♡',
    }),
    defineField({
      name: 'scalingNotes',
      title: 'Scaling Level Notes',
      type: 'string',
      initialValue:
        'Class scaling available: Beginner (Level 1), Intermediate (Level 2), and Rx/Elite (Level 3).',
    }),
  ],
});

export const programsSection = defineType({
  name: 'programsSection',
  title: 'Programs Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Eyebrow',
      type: 'string',
      initialValue: 'TAILORED FITNESS DISCIPLINES',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'PROGRAMS FOR EVERY GOAL',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'From beginner fundamentals to elite functional race conditioning.',
    }),
    defineField({
      name: 'programs',
      title: 'Programs List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'program' }] }],
    }),
  ],
});

export const facilitySection = defineType({
  name: 'facilitySection',
  title: 'Facility Showcase Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Eyebrow',
      type: 'string',
      initialValue: '2 SUNFIELD PLACE, DURBAN NORTH',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'OUR WORLD CLASS FACILITY',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Engineered for high performance, recovery, and lifelong friendships.',
    }),
  ],
});

export const timetableSection = defineType({
  name: 'timetableSection',
  title: 'Timetable Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Eyebrow',
      type: 'string',
      initialValue: '40+ SESSIONS WEEKLY',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'BOX TIMETABLE',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue:
        'Classes structured to fit your busy workday. Tap a filter to view specific sessions.',
    }),
    defineField({
      name: 'slots',
      title: 'Schedule Slots',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'scheduleSlot' }] }],
    }),
  ],
});

export const coachesSection = defineType({
  name: 'coachesSection',
  title: 'Coaches Spotlight Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Eyebrow',
      type: 'string',
      initialValue: 'PASSIONATE LEADERSHIP',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'MEET THE COACHES',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'The people that drive you, teach you, celebrate your PRs, and make you laugh.',
    }),
    defineField({
      name: 'coaches',
      title: 'Coaches List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'coach' }] }],
    }),
  ],
});

export const eventSection = defineType({
  name: 'eventSection',
  title: 'Community Event Banner Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'MONTHLY COMMUNITY GATHERING',
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      initialValue: 'FIRST FRIDAY — SPRING EDITION',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue:
        'Bring your drinks, bring the family, and gather around the beach bonfire with your Koshin crew after the Friday workout.',
    }),
    defineField({
      name: 'pills',
      title: 'Event Badges (e.g. 5:30 PM START, BONFIRE, BRING DRINKS)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'priceTag',
      title: 'Price Tag Display (e.g. FREE FOR ALL)',
      type: 'string',
      initialValue: 'FREE FOR ALL',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Banner Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});

export const pricingSection = defineType({
  name: 'pricingSection',
  title: 'Pricing & Membership Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Section Eyebrow',
      type: 'string',
      initialValue: 'TRANSPARENT PRICING',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'JOIN THE KOSHIN FAMILY',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'No lock-in contracts. World-class coaching included in every single membership.',
    }),
    defineField({
      name: 'tiers',
      title: 'Pricing Tiers List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pricingTier' }] }],
    }),
  ],
});

export const mascotSection = defineType({
  name: 'mascotSection',
  title: 'Gorilla Mascot & Brand Showcase Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'THE SPIRIT OF THE BOX',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'UNLEASH YOUR INNER GORILLA',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'The Koshin Gorilla represents raw athletic strength, fierce loyalty to the pack, and an unbreakable work ethic. Whether you’re lifting your first barbell or racing HYROX, we carry each other every step of the way.',
    }),
    defineField({
      name: 'pills',
      title: 'Brand Pillars',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});

export const sponsorsSection = defineType({
  name: 'sponsorsSection',
  title: 'Sponsors & Training Partners Strip',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Strip Label',
      type: 'string',
      initialValue: 'Official Training Partners & Nutrition:',
    }),
  ],
});

export const marqueeSection = defineType({
  name: 'marqueeSection',
  title: 'Marquee Ticker Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'tickerItems',
      title: 'Ticker Phrases',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact & Headquarters Section',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'DURBAN NORTH HEADQUARTERS',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'COME VISIT THE BOX',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'string',
      initialValue: '2 Sunfield Place, Durban North, 4051, South Africa',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Numbers',
      type: 'string',
      initialValue: '083 277 7554 / 083 789 9524 (Manager Megan: 083 300 0698)',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'meakernat@gmail.com',
    }),
  ],
});
