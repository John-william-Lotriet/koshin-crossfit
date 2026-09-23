import React from 'react';
import Image from 'next/image';
import { Crown } from 'lucide-react';
import { MascotSectionBlock } from '@/lib/sanity/types';

interface MascotShowcaseBlockProps {
  block: MascotSectionBlock;
}

export const MascotShowcaseBlock: React.FC<MascotShowcaseBlockProps> = ({ block }) => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
      <div className="bg-gradient-to-br from-[#141422]/90 to-[#08080d]/95 border-1.5 border-koshin-cyan-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_0_30px_rgba(0,240,255,0.18)] grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-8 items-center text-center md:text-left">
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto drop-shadow-[0_0_25px_rgba(255,0,127,0.8)]">
          <Image
            src="/assets/koshin-gorilla-mascot-pink.png"
            alt="Koshin Gorilla Mascot"
            fill
            sizes="160px"
            className="object-contain"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-1.5 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-pink-500 uppercase mb-2">
            <Crown className="w-4 h-4" /> {block.eyebrow || 'THE SPIRIT OF THE BOX'}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3">
            {block.title || 'UNLEASH YOUR INNER GORILLA'}
          </h2>
          <p className="text-sm sm:text-base text-koshin-text-muted leading-relaxed mb-5 max-w-2xl">
            {block.description ||
              'The Koshin Gorilla represents raw athletic strength, fierce loyalty to the pack, and an unbreakable work ethic. Whether you’re lifting your first barbell or racing HYROX, we carry each other every step of the way.'}
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            {(block.pills || ['🦍 RELENTLESS GRIT', '💖 ZERO EGO • 100% FAMILY']).map((pill, idx) => (
              <span
                key={idx}
                className="font-athletic text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-koshin-surface border border-koshin-cyan-500/60 text-white shadow-neon-cyan"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
