'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Zap, Flame, Calendar } from 'lucide-react';
import { Button, MetricStat } from '@koshin/ui';
import { HeroSectionBlock } from '@/lib/sanity/types';

interface HeroBlockProps {
  block: HeroSectionBlock;
  onOpenTrialModal: () => void;
}

export const HeroBlock: React.FC<HeroBlockProps> = ({ block, onOpenTrialModal }) => {
  return (
    <section
      id="home"
      className="relative pt-[calc(68px+20px)] sm:pt-[calc(76px+36px)] pb-12 sm:pb-20 bg-[radial-gradient(circle_at_50%_20%,rgba(123,44,191,0.18)_0%,rgba(8,8,13,0)_65%)]"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center">
          {/* Left Text */}
          <div>
            {/* Desktop-only location & contract badges (hidden on mobile) */}
            <div className="hidden md:flex flex-wrap gap-2.5 mb-4">
              <div className="inline-flex items-center gap-2 font-athletic text-xs font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full bg-koshin-cyan-500/10 border border-koshin-cyan-500 text-koshin-cyan-500 shadow-neon-cyan">
                <MapPin className="w-3.5 h-3.5" />
                {block.eyebrowBadge || '2 Sunfield Place, Durban North'}
              </div>
              <div className="inline-flex items-center gap-2 font-athletic text-xs font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full bg-koshin-pink-500/10 border border-koshin-pink-500 text-koshin-pink-500 shadow-neon-pink">
                <Zap className="w-3.5 h-3.5" />
                No Lock-In Contracts
              </div>
            </div>

            {/* Main Headlines */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-white uppercase leading-[0.88] mb-1">
              <span className="text-koshin-pink-500 drop-shadow-[0_0_20px_rgba(255,0,127,0.8)]">
                {block.titlePrimary || 'KOSHIN'}
              </span>
            </h1>
            <span className="font-athletic font-black text-xl sm:text-3xl md:text-4xl tracking-[0.32em] text-koshin-cyan-500 drop-shadow-[0_0_15px_rgba(0,240,255,0.7)] uppercase block mb-3 sm:mb-4">
              {block.titleSecondary || 'C R O S S F I T'}
            </span>

            {/* Brush Script */}
            <div className="font-brush text-xl sm:text-2xl md:text-3xl text-koshin-pink-500 -rotate-2 drop-shadow-[0_0_15px_rgba(255,0,127,0.5)] mb-4 inline-block">
              {block.brushSlogan || '# Built Different • Made Koshin'}
            </div>

            <p className="text-sm sm:text-base md:text-lg text-koshin-text-muted max-w-xl mb-7 leading-relaxed">
              {block.description ||
                'You don’t have to be fit to join our family! Experience world-class coaching, capped class sizes, and an electric community engineered to take your everyday lifestyle to the next level.'}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-9">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Flame className="w-5 h-5 text-white" />}
                onClick={onOpenTrialModal}
              >
                CLAIM 2 FREE SESSIONS
              </Button>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center font-athletic font-bold uppercase tracking-[0.14em] min-h-[48px] sm:min-h-[52px] px-7 py-3.5 rounded-lg bg-koshin-cyan-500/10 text-koshin-cyan-500 border-1.5 border-koshin-cyan-500 shadow-neon-cyan hover:bg-koshin-cyan-500 hover:text-koshin-canvas transition-colors gap-2 text-base sm:text-lg"
              >
                <Calendar className="w-5 h-5" />
                VIEW TIMETABLE
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-koshin-border text-center sm:text-left">
              {(block.stats || [
                { value: '40+', label: 'Classes Weekly', glow: 'pink' },
                { value: '16 MAX', label: 'Capped Sizes', glow: 'cyan' },
                { value: '100%', label: 'Coach Guided', glow: 'none' },
              ]).map((stat, idx) => (
                <MetricStat
                  key={idx}
                  value={stat.value}
                  label={stat.label}
                  glow={(stat.glow as 'pink' | 'cyan' | 'none') || 'none'}
                />
              ))}
            </div>
          </div>

          {/* Right Visual Hero Card */}
          <div className="w-full">
            <div className="relative rounded-2xl p-2.5 sm:p-3.5 bg-gradient-to-b from-[#1d1d30]/60 to-[#0d0d15]/95 border-1.5 border-koshin-pink-500/45 shadow-[0_0_35px_rgba(255,0,127,0.3),0_20px_50px_rgba(0,0,0,0.85)]">
              <div className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] rounded-xl overflow-hidden bg-[#11111d]">
                <Image
                  src={
                    typeof block.visualImage === 'string'
                      ? block.visualImage
                      : '/assets/coach-strech.jpg'
                  }
                  alt="Koshin CrossFit Athlete Training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />

                {/* Floating Responsive Badges Bar */}
                <div className="absolute top-2.5 sm:top-3.5 inset-x-2.5 sm:inset-x-3.5 flex items-center justify-between gap-1.5 sm:gap-2 z-10 pointer-events-none">
                  {/* Mascot Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-koshin-canvas/92 border border-koshin-pink-500 rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 shadow-neon-pink backdrop-blur-md pointer-events-auto">
                    <div className="relative w-6 h-6 sm:w-8 sm:h-8 shrink-0 drop-shadow-[0_0_6px_rgba(255,0,127,0.8)]">
                      <Image
                        src="/assets/koshin-gorilla-mascot-pink.png"
                        alt="Gorilla Mascot"
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-white text-xs sm:text-base leading-none">
                        KOSHIN
                      </span>
                      <span className="font-athletic text-[0.55rem] sm:text-[0.68rem] tracking-[0.12em] text-koshin-cyan-500 uppercase leading-none mt-0.5">
                        OFFICIAL MASCOT
                      </span>
                    </div>
                  </div>

                  {/* Miami Vibes Tag */}
                  <div className="inline-flex flex-col items-center bg-koshin-canvas/92 border border-koshin-cyan-500 rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 shadow-neon-cyan backdrop-blur-md pointer-events-auto">
                    <span className="font-brush text-koshin-cyan-500 text-xs sm:text-base leading-none">
                      🌴 MIAMI VIBES
                    </span>
                    <span className="font-athletic text-[0.55rem] sm:text-[0.65rem] tracking-[0.15em] text-white uppercase leading-none mt-0.5">
                      EST. DURBAN NORTH
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080d]/95 via-[#08080d]/20 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="font-brush text-lg sm:text-2xl text-koshin-pink-500 drop-shadow-[0_0_10px_rgba(255,0,127,0.7)]">
                    {block.visualBrushQuote || 'WE DON’T DO AVERAGE.'}
                  </span>
                  <span className="font-display text-xl sm:text-3xl text-white">
                    {block.visualDisplayQuote || 'WE DO AWESOME.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
