import { defineType, defineField } from 'sanity';

export const button = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link / URL or Anchor (#schedule, /pricing)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary Neon Pink', value: 'primary' },
          { title: 'Secondary Miami Cyan', value: 'secondary' },
          { title: 'Outline Subtle', value: 'outline' },
          { title: 'Neon Glow', value: 'glow' },
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'isModalTrigger',
      title: 'Opens Free Trial Booking Modal?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});

export const statItem = defineType({
  name: 'statItem',
  title: 'Metric Stat Item',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Stat Value (e.g. 40+, 16 MAX, 100%)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Stat Label (e.g. Classes Weekly, Capped Sizes)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'glow',
      title: 'Neon Glow Color',
      type: 'string',
      options: {
        list: [
          { title: 'Neon Pink', value: 'pink' },
          { title: 'Miami Cyan', value: 'cyan' },
          { title: 'White / None', value: 'none' },
        ],
      },
      initialValue: 'none',
    }),
  ],
});

export const traitItem = defineType({
  name: 'traitItem',
  title: 'Coach Trait Item',
  type: 'object',
  fields: [
    defineField({
      name: 'emoji',
      title: 'Emoji (e.g. 🧠, 🏋️, 💖, 📺, ⚡)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Trait Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const wodExercise = defineType({
  name: 'wodExercise',
  title: 'WOD Exercise Item',
  type: 'object',
  fields: [
    defineField({
      name: 'exercise',
      title: 'Exercise (e.g. 500m Concept 2 Row, 21 DB Thrusters)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Category Tag (e.g. CARDIO ENGINE, POWER, GRIT)',
      type: 'string',
    }),
    defineField({
      name: 'tagColor',
      title: 'Tag Color',
      type: 'string',
      options: {
        list: [
          { title: 'Miami Cyan', value: 'cyan' },
          { title: 'Neon Pink', value: 'pink' },
          { title: 'White', value: 'white' },
          { title: 'Lime Green', value: 'lime' },
        ],
      },
      initialValue: 'cyan',
    }),
  ],
});
