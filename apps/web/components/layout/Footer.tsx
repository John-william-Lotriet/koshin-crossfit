import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiteSettingsDocument } from '@/lib/sanity/types';
import { MatrixSignature } from './MatrixSignature';

interface FooterProps {
  settings?: SiteSettingsDocument;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  return (
    <footer className="bg-[#050508] border-t border-koshin-border pt-12 sm:pt-16 pb-8 text-koshin-text-muted">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3">
            <Link href="#home" className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]">
                <Image
                  src="/assets/koshin-gorilla-mascot-pink.png"
                  alt="Gorilla Mascot"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-white leading-none">KOSHIN</span>
                <span className="font-athletic font-extrabold text-[0.7rem] tracking-[0.3em] text-koshin-cyan-500 uppercase leading-none mt-0.5">
                  C R O S S F I T
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-koshin-text-muted leading-relaxed mt-2">
              World-class functional CrossFit box in Durban North. People first, fitness follows.
            </p>
            <div className="font-brush text-koshin-pink-500 text-base sm:text-lg mt-1">
              # Built Different • Koshin Family
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-athletic text-base font-extrabold tracking-[0.15em] text-white uppercase mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm list-none p-0 m-0">
              <li>
                <Link href="#about" className="hover:text-koshin-pink-500 transition-colors">
                  The Facility
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-koshin-pink-500 transition-colors">
                  Programs & Disciplines
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-koshin-pink-500 transition-colors">
                  Class Timetable
                </Link>
              </li>
              <li>
                <Link href="#coaches" className="hover:text-koshin-pink-500 transition-colors">
                  Meet The Coaches
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-koshin-pink-500 transition-colors">
                  Membership Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div>
            <h4 className="font-athletic text-base font-extrabold tracking-[0.15em] text-white uppercase mb-4">
              Disciplines
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm list-none p-0 m-0">
              <li>
                <Link href="#programs" className="hover:text-koshin-cyan-500 transition-colors">
                  CrossFit Daily WOD
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-koshin-cyan-500 transition-colors">
                  Life-Lift™ Beginners
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-koshin-cyan-500 transition-colors">
                  HYROX Racing
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-koshin-cyan-500 transition-colors">
                  Cycle Club (20-30km)
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-koshin-cyan-500 transition-colors">
                  Sunrise Ocean Swims
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="font-athletic text-base font-extrabold tracking-[0.15em] text-white uppercase mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm list-none p-0 m-0">
              <li>
                <a
                  href={settings?.socialLinks?.facebook || 'https://www.facebook.com/Koshin.CrossFit/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-koshin-pink-500 transition-colors"
                >
                  Facebook Page
                </a>
              </li>
              <li>
                <a
                  href={settings?.socialLinks?.instagram || 'https://www.instagram.com/koshin.crossfit/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-koshin-pink-500 transition-colors"
                >
                  Instagram (@koshin.crossfit)
                </a>
              </li>
              <li>
                <a
                  href={settings?.socialLinks?.whatsapp || 'https://wa.me/27832777554'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-koshin-accent-green hover:brightness-125 transition-colors font-semibold"
                >
                  WhatsApp Direct Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-koshin-text-muted text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Koshin CrossFit. All Rights Reserved. 2 Sunfield Place, Durban North.
          </div>
          <div className="flex items-center">
            <MatrixSignature />
          </div>
        </div>
      </div>
    </footer>
  );
};
