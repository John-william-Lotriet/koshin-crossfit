import React from 'react';
import { SponsorsSectionBlock } from '@/lib/sanity/types';

interface SponsorsBlockProps {
  block: SponsorsSectionBlock;
}

export const SponsorsBlock: React.FC<SponsorsBlockProps> = ({ block }) => {
  return (
    <section className="bg-[#050508] border-y border-white/5 py-5 mb-12">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center">
        <span className="font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-text-muted uppercase w-full">
          {block.label || 'Official Training Partners & Nutrition:'}
        </span>
        <div className="font-display text-xl sm:text-2xl tracking-wider text-koshin-pink-500">
          BIOGEN <span className="font-sans text-xs text-koshin-text-muted">FOR RESULTS YOU WANT</span>
        </div>
        <div className="font-display text-xl sm:text-2xl tracking-wider text-white opacity-80">
          adidas
        </div>
        <div className="font-display text-xl sm:text-2xl tracking-wider text-koshin-cyan-500">
          Red Bull <span className="text-xs text-koshin-accent-green">THE GREEN EDITION</span>
        </div>
        <div className="font-display text-xl sm:text-2xl tracking-wider text-koshin-text-muted">
          HYROX AFFILIATE
        </div>
      </div>
    </section>
  );
};
