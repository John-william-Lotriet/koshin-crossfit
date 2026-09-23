import type { Metadata, Viewport } from 'next';
import {
  Bebas_Neue,
  Barlow_Condensed,
  Permanent_Marker,
  Caveat,
  Plus_Jakarta_Sans,
} from 'next/font/google';
import './globals.css';
import { generateGymJsonLd } from '@/lib/seo/schema';
import { Glow } from '@koshin/ui';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-brush',
  display: 'swap',
});

const caveat = Caveat({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#08080D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://koshin-crossfit.vercel.app'),
  title: {
    default: 'Koshin CrossFit — Forging Elite Fitness | Durban North',
    template: '%s | Koshin CrossFit',
  },
  description:
    'High performance CrossFit box in Durban North. 40+ coach-guided classes weekly capped at 16 athletes. Claim 2 Free Intro Sessions today!',
  keywords: [
    'CrossFit Durban North',
    'Koshin CrossFit',
    'HYROX Durban',
    'Functional Fitness South Africa',
    'Gym Durban North',
    'Olympic Weightlifting Durban',
  ],
  authors: [{ name: 'Koshin CrossFit' }],
  creator: 'Koshin CrossFit',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://koshin-crossfit.vercel.app',
    siteName: 'Koshin CrossFit',
    title: 'Koshin CrossFit — Forging Elite Fitness | Durban North',
    description:
      'High-octane CrossFit box in Durban North. Experience world-class coaching, capped class sizes, and an electric community. 2 Free Intro Sessions.',
    images: [
      {
        url: '/assets/coach-strech.jpg',
        width: 1200,
        height: 630,
        alt: 'Koshin CrossFit Durban North',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koshin CrossFit — Forging Elite Fitness',
    description: 'High performance CrossFit box in Durban North. Claim 2 Free Intro Sessions today!',
    images: ['/assets/coach-strech.jpg'],
  },
  icons: {
    icon: '/assets/koshin-gorilla-mascot-pink.png',
    apple: '/assets/koshin-gorilla-mascot-pink.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateGymJsonLd();

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${permanentMarker.variable} ${caveat.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-koshin-canvas text-koshin-text-body antialiased relative min-h-screen selection:bg-koshin-pink-500 selection:text-white">
        {/* Ambient background glows */}
        <Glow color="pink" size="lg" className="top-20 -left-28 opacity-15" />
        <Glow color="cyan" size="lg" className="top-96 -right-28 opacity-12" />
        <Glow color="purple" size="xl" className="top-[1800px] left-1/2 -translate-x-1/2 opacity-10" />

        {children}
      </body>
    </html>
  );
}
