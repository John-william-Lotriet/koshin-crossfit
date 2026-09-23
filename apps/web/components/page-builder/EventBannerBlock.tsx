'use client';

import React from 'react';
import { Button } from '@koshin/ui';
import { EventSectionBlock } from '@/lib/sanity/types';

interface EventBannerBlockProps {
  block: EventSectionBlock;
  onOpenTrialModal: () => void;
}

export const EventBannerBlock: React.FC<EventBannerBlockProps> = ({ block, onOpenTrialModal }) => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
      <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden border-1.5 border-koshin-pink-500 shadow-neon-pink bg-gradient-to-r from-koshin-canvas via-[#141422]/95 to-koshin-canvas">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <span className="inline-block font-athletic text-xs font-bold uppercase tracking-[0.2em] text-koshin-pink-500 border border-koshin-pink-500/40 px-3 py-1 rounded-full mb-3">
              {block.eyebrow || '🔥 MONTHLY COMMUNITY GATHERING'}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-3 leading-tight">
              {block.title || 'FIRST FRIDAY — SPRING EDITION'}
            </h2>
            <p className="text-sm sm:text-base text-koshin-text-muted leading-relaxed mb-6 max-w-xl">
              {block.description ||
                'Bring your drinks, bring the family, and gather around the beach bonfire with your Koshin crew after the Friday workout.'}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {(block.pills || ['⏰ 5:30 PM START', '🔥 BONFIRE', '🥤 BRING DRINKS']).map((pill, idx) => (
                <span
                  key={idx}
                  className="font-athletic text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-koshin-surface border border-koshin-cyan-500/50 text-white shadow-neon-cyan"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-koshin-canvas/90 border border-dashed border-koshin-cyan-500 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
            <span className="font-athletic text-xs font-bold tracking-[0.2em] text-koshin-cyan-500 uppercase">
              BUILT IN KOSHIN
            </span>
            <div className="font-display text-4xl sm:text-5xl text-white my-2">
              {block.priceTag || 'FREE FOR ALL'}
            </div>
            <p className="text-xs text-koshin-text-muted mb-4">Members, friends, and newcomers welcome.</p>
            <Button variant="primary" size="md" fullWidth onClick={onOpenTrialModal}>
              RSVP / BRING A FRIEND
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
