import { PageDocument, SiteSettingsDocument } from './types';

export const fallbackSiteSettings: SiteSettingsDocument = {
  siteTitle: 'Koshin CrossFit',
  tagline: 'Forging Elite Fitness | Durban North',
  boxHoursText: '05:00 - 19:30',
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'The Box', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Timetable', href: '#schedule' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: {
    instagram: 'https://www.instagram.com/koshin.crossfit/',
    facebook: 'https://www.facebook.com/Koshin.CrossFit/',
    whatsapp: 'https://wa.me/27832777554',
  },
};

export const fallbackHomePage: PageDocument = {
  _id: 'home-page-fallback',
  title: 'Home',
  slug: { current: 'home' },
  seo: {
    metaTitle: 'Koshin CrossFit — Forging Elite Fitness | Durban North',
    metaDescription:
      'High-octane CrossFit box in Durban North. Expert coaching, capped class sizes, and an electric Miami Synthwave community. Claim 2 Free Intro Sessions today!',
    keywords: [
      'CrossFit Durban North',
      'Koshin CrossFit',
      'HYROX training Durban',
      'Fitness gym Durban',
      'Strength and conditioning',
    ],
  },
  pageBuilder: [
    {
      _type: 'heroSection',
      eyebrowBadge: '2 Sunfield Place, Durban North',
      titlePrimary: 'KOSHIN',
      titleSecondary: 'C R O S S F I T',
      brushSlogan: '# Built Different • Made Koshin',
      description:
        'You don’t have to be fit to join our family! Experience world-class coaching, capped class sizes, and an electric community engineered to take your everyday lifestyle to the next level.',
      ctaButtons: [
        {
          _type: 'button',
          label: 'CLAIM 2 FREE SESSIONS',
          link: '#trial',
          variant: 'primary',
          isModalTrigger: true,
        },
        {
          _type: 'button',
          label: 'VIEW TIMETABLE',
          link: '#schedule',
          variant: 'secondary',
          isModalTrigger: false,
        },
      ],
      stats: [
        { _type: 'statItem', value: '40+', label: 'Classes Weekly', glow: 'pink' },
        { _type: 'statItem', value: '16 MAX', label: 'Capped Sizes', glow: 'cyan' },
        { _type: 'statItem', value: '100%', label: 'Coach Guided', glow: 'none' },
      ],
      visualImage:
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      visualBrushQuote: 'WE DON’T DO AVERAGE.',
      visualDisplayQuote: 'WE DO AWESOME.',
    },
    {
      _type: 'mascotSection',
      eyebrow: 'THE SPIRIT OF THE BOX',
      title: 'UNLEASH YOUR INNER GORILLA',
      description:
        'The Koshin Gorilla represents raw athletic strength, fierce loyalty to the pack, and an unbreakable work ethic. Whether you’re lifting your first barbell or racing HYROX, we carry each other every step of the way.',
      pills: ['🦍 RELENTLESS GRIT', '💖 ZERO EGO • 100% FAMILY'],
    },
    {
      _type: 'sponsorsSection',
      label: 'Official Training Partners & Nutrition:',
    },
    {
      _type: 'marqueeSection',
      tickerItems: [
        'DISCIPLINE BUILDS FREEDOM',
        'BUILT DIFFERENT',
        'FORGING ELITE FITNESS',
        'KOSHIN FAMILY',
        'COMMUNITY. CULTURE. CARRY EACH OTHER.',
        'STRONG BODY. STRONG MIND. STRONGER TOGETHER.',
      ],
    },
    {
      _type: 'wodSection',
      eyebrow: 'DAILY PROGRAMMING',
      title: '"SATURDAY SLAUGHTER" — TEAM WORKOUT',
      description:
        'Every workout at Koshin is fully scalable to your personal capability. Whether it’s your Day 1 or Year 5, our expert coaches guide every single rep.',
      exercises: [
        { _type: 'wodExercise', exercise: '🔥 500m Concept 2 Row', tag: 'CARDIO ENGINE', tagColor: 'cyan' },
        { _type: 'wodExercise', exercise: '🏋️ 21 DB Thrusters (20kg / 15kg)', tag: 'POWER', tagColor: 'pink' },
        { _type: 'wodExercise', exercise: '🧗 3 Rope Climbs / Scaled Pull-ups', tag: 'GYMNASTICS', tagColor: 'white' },
        { _type: 'wodExercise', exercise: '⚡ 400m Sandbag Carry', tag: 'GRIT', tagColor: 'cyan' },
      ],
      chalkQuote: '“Strategy in the mind. Strength in the body. Heart in the game.” ♡',
      scalingNotes:
        'Class scaling available: Beginner (Level 1), Intermediate (Level 2), and Rx/Elite (Level 3).',
    },
    {
      _type: 'facilitySection',
      eyebrow: '2 SUNFIELD PLACE, DURBAN NORTH',
      title: 'OUR WORLD CLASS FACILITY',
      subtitle: 'Engineered for high performance, recovery, and lifelong friendships.',
    },
    {
      _type: 'programsSection',
      eyebrow: 'TAILORED FITNESS DISCIPLINES',
      title: 'PROGRAMS FOR EVERY GOAL',
      subtitle: 'From beginner fundamentals to elite functional race conditioning.',
      programs: [
        {
          _id: 'prog-1',
          title: 'LIFE-LIFT™ FUNDAMENTALS',
          categoryBadge: 'BEGINNER ON-RAMP',
          accentColor: 'cyan',
          description:
            'New to CrossFit? Our Life-Lift classes teach you barbell mechanics, gymnastics body positioning, and breathing under load in a supportive zero-judgement setting.',
          scheduleInfo: '⏰ MONDAYS & WEDNESDAYS @ 18:30',
        },
        {
          _id: 'prog-2',
          title: 'CROSSFIT DAILY CLASSES',
          categoryBadge: 'CORE DISCIPLINE',
          accentColor: 'pink',
          description:
            'High intensity functional movements combining Olympic lifting, kettlebells, gymnastics, rowing, and cardio engine work. Capped at 16 athletes per coach.',
          scheduleInfo: '⏰ 4 MORNING & 3 AFTERNOON SESSIONS DAILY',
        },
        {
          _id: 'prog-3',
          title: 'HYROX FUNCTIONAL ENDURANCE',
          categoryBadge: 'HYBRID RACE PREP',
          accentColor: 'orange',
          description:
            'Targeted training for the global fitness race: sled pushes, wall balls, skiergs, burpee broad jumps, and running efficiency.',
          scheduleInfo: '⏰ MONDAYS & FRIDAYS (05:15 & 06:30)',
        },
        {
          _id: 'prog-4',
          title: 'CYCLE CLUB & OCEAN SWIMS',
          categoryBadge: 'COMMUNITY SOCIAL',
          accentColor: 'green',
          description:
            'Take fitness beyond the gym walls! 20-30km Tuesday/Thursday dawn rides, Wednesday sunrise ocean swims in summer, and Thursday sports evenings.',
          scheduleInfo: '⏰ TUES, WED & THURS @ 05:00',
        },
      ],
    },
    {
      _type: 'timetableSection',
      eyebrow: '40+ SESSIONS WEEKLY',
      title: 'BOX TIMETABLE',
      subtitle: 'Classes structured to fit your busy workday. Tap a filter to view specific sessions.',
      slots: [
        { _id: 'slot-1', time: '05:00 - 06:00', title: 'Morning CrossFit WOD', coachName: 'Coach Strech', category: 'morning' },
        { _id: 'slot-2', time: '05:00 - 06:30', title: 'Cycle Club (20-30km)', coachName: 'Tues & Thurs Group', category: 'outdoor' },
        { _id: 'slot-3', time: '05:00 - 06:00', title: 'Sunrise Ocean Swim', coachName: 'Wednesdays (Summer)', category: 'outdoor' },
        { _id: 'slot-4', time: '05:15 - 06:15', title: 'HYROX Race Conditioning', coachName: 'Mondays & Fridays', category: 'hyrox' },
        { _id: 'slot-5', time: '06:00 - 07:00', title: 'Morning CrossFit WOD', coachName: 'Coach Nats', category: 'morning' },
        { _id: 'slot-6', time: '06:30 - 07:30', title: 'HYROX Endurance', coachName: 'Mondays & Fridays', category: 'hyrox' },
        { _id: 'slot-7', time: '07:00 - 08:00', title: 'CrossFit Functional WOD', coachName: 'Coach Strech', category: 'morning' },
        { _id: 'slot-8', time: '08:00 - 09:00', title: 'Mid-Morning CrossFit', coachName: 'Coach Curtis', category: 'morning' },
        { _id: 'slot-9', time: '16:30 - 17:30', title: 'Afternoon WOD (Session 1)', coachName: 'Coach Strech', category: 'afternoon' },
        { _id: 'slot-10', time: '17:30 - 18:30', title: 'Afternoon WOD (Session 2)', coachName: 'Coach Nats', category: 'afternoon' },
        { _id: 'slot-11', time: '18:30 - 19:30', title: 'Life-Lift™ Beginner Fundamentals', coachName: 'Mon & Wed Evening', category: 'afternoon' },
        { _id: 'slot-12', time: '15:30 - 17:30', title: 'Thursday Sports & Social', coachName: 'Thursday Special', category: 'outdoor' },
        { _id: 'slot-13', time: '07:00 - 08:30', title: 'Saturday Slaughter Team WOD', coachName: 'All Coaches & Family', category: 'outdoor' },
      ],
    },
    {
      _type: 'eventSection',
      eyebrow: 'MONTHLY COMMUNITY GATHERING',
      title: 'FIRST FRIDAY — SPRING EDITION',
      description:
        'Bring your drinks, bring the family, and gather around the beach bonfire with your Koshin crew after the Friday workout.',
      pills: ['⏰ 5:30 PM START', '🔥 BONFIRE', '🥤 BRING DRINKS'],
      priceTag: 'FREE FOR ALL',
      backgroundImage:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      _type: 'coachesSection',
      eyebrow: 'PASSIONATE LEADERSHIP',
      title: 'MEET THE COACHES',
      subtitle: 'The people that drive you, teach you, celebrate your PRs, and make you laugh.',
      coaches: [
        {
          _id: 'coach-strech',
          name: 'Ryan "Strech" Brennan',
          role: 'Head Coach & Co-Founder',
          photo: '/assets/coach-strech.jpg',
          bio: '5+ years coaching elite athletes and first-timers. Strech brings childlike joy and unyielding enthusiasm to every single session.',
          traits: [
            { _type: 'traitItem', emoji: '🧠', text: 'STRATEGY IN THE MIND' },
            { _type: 'traitItem', emoji: '🏋️', text: 'STRENGTH IN THE BODY' },
            { _type: 'traitItem', emoji: '💖', text: 'HEART IN THE GAME' },
          ],
          polaroidQuote: '“Discipline builds freedom. We don’t do average!” ♡',
        },
        {
          _id: 'coach-nats',
          name: 'Natalie "Nats" Brennan',
          role: 'Head Coach & Co-Founder',
          photo: '/assets/coach-nats.jpg',
          bio: 'Loved and feared by all! Razor-sharp eye for lifting form, endless energy, and occasional spontaneous dance-offs on the lifting floor.',
          traits: [
            { _type: 'traitItem', emoji: '👑', text: 'SAME GIRL... HIGHER STANDARDS' },
            { _type: 'traitItem', emoji: '🏋️', text: 'ZERO EMPTY BARBELL DROPS' },
            { _type: 'traitItem', emoji: '💖', text: '100% PASSION & FORM' },
          ],
          polaroidQuote: '“Teach. Lift. Inspire. Repeat. ♡”',
        },
        {
          _id: 'coach-curtis',
          name: 'Curtis Stangroom',
          role: 'CrossFit & Performance Coach',
          photo: '/assets/coach-curtis.jpg',
          bio: 'Just your average Bro with a "Hint" of TV static. Bringing relentless hype, heavy barbell energy, and infectious good vibes to every session on the lifting floor.',
          traits: [
            { _type: 'traitItem', emoji: '📺', text: 'AVERAGE BRO • HINT OF TV STATIC' },
            { _type: 'traitItem', emoji: '⚡', text: 'HIGH-OCTANE SYNTHWAVE ENERGY' },
            { _type: 'traitItem', emoji: '💖', text: '100% COMMUNITY • ZERO FLUFF' },
          ],
          polaroidQuote: '“Tune into the frequency. Lift heavy, laugh harder! ♡”',
        },
      ],
    },
    {
      _type: 'pricingSection',
      eyebrow: 'TRANSPARENT PRICING',
      title: 'JOIN THE KOSHIN FAMILY',
      subtitle: 'No lock-in contracts. World-class coaching included in every single membership.',
      tiers: [
        {
          _id: 'tier-half',
          name: 'KOSHIN HALF',
          subtitle: 'Ideal for supplemental cross-training',
          price: '1,150',
          currency: 'R',
          period: '/ month',
          isFeatured: false,
          features: [
            '3 Days a Week CrossFit',
            '1x Knees-Over-Toes Mobility',
            'Saturday Slaughter CF',
            'Sports Thursdays Access',
            'No Lock-In Contracts',
          ],
          ctaLabel: 'GET STARTED',
        },
        {
          _id: 'tier-full',
          name: 'FULL KOSHIN',
          subtitle: 'Unlimited complete athlete access',
          price: '1,450',
          currency: 'R',
          period: '/ month',
          isFeatured: true,
          ribbonText: '⭐ MOST POPULAR',
          features: [
            '5 Days a Week CrossFit',
            '2x HYROX Sessions Weekly',
            '1x Knees-Over-Toes Mobility',
            'Cycle Club (Tues/Thurs)',
            'Sunrise Ocean Swims (Wed)',
            'Partner Brand Discounts (Biogen/adidas)',
            'No Lock-In Contracts',
          ],
          ctaLabel: 'CLAIM FREE TRIAL & JOIN',
        },
        {
          _id: 'tier-hyrox',
          name: 'KOSHIN HYROX',
          subtitle: 'For functional racing & endurance',
          price: '950',
          currency: 'R',
          period: '/ month',
          isFeatured: false,
          features: [
            '2x HYROX (Mon & Fri)',
            '1x Mobility Protocol',
            'Saturday Team Workout',
            'Race Preparation Strategy',
            'No Lock-In Contracts',
          ],
          ctaLabel: 'GET STARTED',
        },
      ],
    },
    {
      _type: 'contactSection',
      eyebrow: 'DURBAN NORTH HEADQUARTERS',
      title: 'COME VISIT THE BOX',
      address: '2 Sunfield Place, Durban North, 4051, South Africa',
      phone: '083 277 7554 / 083 789 9524 (Box Manager Megan: 083 300 0698)',
      email: 'meakernat@gmail.com',
    },
  ],
};
