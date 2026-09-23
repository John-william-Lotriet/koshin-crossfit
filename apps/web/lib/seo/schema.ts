export function generateGymJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: 'Koshin CrossFit',
    alternateName: 'Koshin CrossFit Durban North',
    url: 'https://koshin-crossfit.vercel.app',
    logo: 'https://koshin-crossfit.vercel.app/assets/koshin-gorilla-mascot-pink.png',
    image: 'https://koshin-crossfit.vercel.app/assets/coach-strech.jpg',
    description:
      'High performance CrossFit and functional fitness box in Durban North. 40+ weekly coach-guided classes capped at 16 athletes. CrossFit, HYROX, Life-Lift, Cycle Club, and Ocean Swims.',
    telephone: '+27832777554',
    email: 'meakernat@gmail.com',
    priceRange: 'R950 - R1450 / month',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2 Sunfield Place',
      addressLocality: 'Durban North',
      addressRegion: 'KwaZulu-Natal',
      postalCode: '4051',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -29.7833,
      longitude: 31.0333,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '05:00',
        closes: '19:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '07:00',
        closes: '09:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/koshin.crossfit/',
      'https://www.facebook.com/Koshin.CrossFit/',
    ],
  };
}
