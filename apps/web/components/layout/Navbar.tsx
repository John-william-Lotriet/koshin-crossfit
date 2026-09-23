'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Flame } from 'lucide-react';
import { Button, StatusBadge } from '@koshin/ui';
import { MobileDrawer } from './MobileDrawer';
import { SiteSettingsDocument } from '@/lib/sanity/types';

interface NavbarProps {
  settings?: SiteSettingsDocument;
  onOpenTrialModal: (plan?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ settings, onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = settings?.navLinks || [
    { label: 'Home', href: '#home' },
    { label: 'The Box', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Timetable', href: '#schedule' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[68px] sm:h-[76px] bg-koshin-canvas/95 backdrop-blur-xl border-b border-koshin-pink-500/35 shadow-card-glow z-40 flex items-center">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
              <Image
                src="/assets/koshin-gorilla-mascot-pink.png"
                alt="Koshin CrossFit Gorilla Mascot"
                fill
                sizes="44px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display text-xl sm:text-2xl text-white leading-none tracking-wide text-shadow">
                KOSHIN
              </span>
              <span className="font-athletic font-extrabold text-[0.62rem] sm:text-[0.72rem] tracking-[0.32em] text-koshin-cyan-500 uppercase leading-none mt-0.5">
                C R O S S F I T
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-athletic font-bold uppercase tracking-[0.14em] text-sm text-koshin-text-muted hover:text-koshin-pink-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="hidden xl:block">
              <StatusBadge hoursText={settings?.boxHoursText || '05:00 - 19:30'} />
            </div>

            {/* Trial CTA button (hidden on very small screens, visible on tablet/desktop) */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Flame className="w-4 h-4 text-white" />}
                onClick={() => onOpenTrialModal()}
              >
                2 FREE SESSIONS
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-koshin-pink-500 hover:border-koshin-pink-500 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        onOpenTrialModal={onOpenTrialModal}
      />
    </>
  );
};
