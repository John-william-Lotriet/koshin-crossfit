import { groq } from 'next-sanity';

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo,
    pageBuilder[] {
      ...,
      _type == "programsSection" => {
        programs[]->
      },
      _type == "timetableSection" => {
        slots[]-> | order(order asc)
      },
      _type == "coachesSection" => {
        coaches[]-> | order(order asc)
      },
      _type == "pricingSection" => {
        tiers[]-> | order(order asc)
      }
    }
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    tagline,
    boxHoursText,
    navLinks,
    socialLinks
  }
`;

export const allPagesSlugQuery = groq`
  *[_type == "page" && defined(slug.current)] {
    "slug": slug.current
  }
`;
