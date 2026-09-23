import { defineType, defineField } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder Sections',
      type: 'pageBuilder',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'ogImage',
          title: 'OpenGraph Share Image',
          type: 'image',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
});

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Koshin CrossFit',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Forging Elite Fitness | Durban North',
    }),
    defineField({
      name: 'boxHoursText',
      title: 'Live Box Hours Pill',
      type: 'string',
      initialValue: '05:00 - 19:30',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navbar Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'href', type: 'string', title: 'URL / Hash' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', type: 'url', title: 'Instagram URL' }),
        defineField({ name: 'facebook', type: 'url', title: 'Facebook URL' }),
        defineField({ name: 'whatsapp', type: 'string', title: 'WhatsApp Number / Link' }),
      ],
    }),
  ],
});

export const coach = defineType({
  name: 'coach',
  title: 'Coach',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Coach Name (e.g. Ryan "Strech" Brennan)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role (e.g. Head Coach & Co-Founder)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Coach Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Biography / Coaching Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'traits',
      title: 'Signature Traits (3 items)',
      type: 'array',
      of: [{ type: 'traitItem' }],
    }),
    defineField({
      name: 'polaroidQuote',
      title: 'Chalkboard Polaroid Quote',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
});

export const program = defineType({
  name: 'program',
  title: 'Program / Discipline',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title (e.g. CrossFit Daily Classes, HYROX Racing)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryBadge',
      title: 'Category Badge (e.g. BEGINNER ON-RAMP, CORE DISCIPLINE)',
      type: 'string',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Border Color',
      type: 'string',
      options: {
        list: [
          { title: 'Miami Cyan', value: 'cyan' },
          { title: 'Neon Pink', value: 'pink' },
          { title: 'Orange / HYROX', value: 'orange' },
          { title: 'Lime Green', value: 'green' },
          { title: 'Purple', value: 'purple' },
        ],
      },
      initialValue: 'cyan',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'scheduleInfo',
      title: 'Schedule Timing Badge (e.g. ⏰ MONDAYS & WEDNESDAYS @ 18:30)',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Feature Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
});

export const scheduleSlot = defineType({
  name: 'scheduleSlot',
  title: 'Timetable Slot',
  type: 'document',
  fields: [
    defineField({
      name: 'time',
      title: 'Time Range (e.g. 05:00 - 06:00)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Session Title (e.g. Morning CrossFit WOD)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coachName',
      title: 'Coach / Group (e.g. Coach Strech, Coach Nats, Coach Curtis)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category Filter',
      type: 'string',
      options: {
        list: [
          { title: 'Morning (05:00 - 09:00)', value: 'morning' },
          { title: 'Afternoon (16:30 - 19:30)', value: 'afternoon' },
          { title: 'HYROX Racing', value: 'hyrox' },
          { title: 'Outdoor & Weekend', value: 'outdoor' },
        ],
      },
      initialValue: 'morning',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
});

export const wod = defineType({
  name: 'wod',
  title: 'Daily WOD',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'WOD Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'WOD Title',
      type: 'string',
      initialValue: '"SATURDAY SLAUGHTER" — TEAM WORKOUT',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'exercises',
      title: 'Exercises List',
      type: 'array',
      of: [{ type: 'wodExercise' }],
    }),
    defineField({
      name: 'chalkQuote',
      title: 'Chalkboard Quote',
      type: 'string',
    }),
    defineField({
      name: 'scalingNotes',
      title: 'Scaling Notes',
      type: 'string',
    }),
  ],
});

export const pricingTier = defineType({
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Plan Name (e.g. FULL KOSHIN, KOSHIN HALF, KOSHIN HYROX)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Short Subtitle (e.g. Unlimited complete athlete access)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price (e.g. 1450)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'currency',
      title: 'Currency Symbol',
      type: 'string',
      initialValue: 'R',
    }),
    defineField({
      name: 'period',
      title: 'Billing Period',
      type: 'string',
      initialValue: '/ month',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured (Neon Highlight & Ribbon)?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ribbonText',
      title: 'Ribbon Text (e.g. ⭐ MOST POPULAR)',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'Included Features List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Button Label',
      type: 'string',
      initialValue: 'CLAIM FREE TRIAL & JOIN',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
});

export const event = defineType({
  name: 'event',
  title: 'Community Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title (e.g. FIRST FRIDAY — SPRING EDITION)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pills',
      title: 'Badges (e.g. ⏰ 5:30 PM START, 🔥 BONFIRE, 🥤 BRING DRINKS)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'priceTag',
      title: 'Price Display',
      type: 'string',
      initialValue: 'FREE FOR ALL',
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
