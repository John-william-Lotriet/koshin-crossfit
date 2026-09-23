import React from 'react';
import { MarqueeSectionBlock } from '@/lib/sanity/types';

interface MarqueeBlockProps {
  block: MarqueeSectionBlock;
}

export const MarqueeBlock: React.FC<MarqueeBlockProps> = ({ block }) => {
  const items = block.tickerItems || [
    'DISCIPLINE BUILDS FREEDOM',
    'BUILT DIFFERENT',
    'FORGING ELITE FITNESS',
    'KOSHIN FAMILY',
    'COMMUNITY. CULTURE. CARRY EACH OTHER.',
    'STRONG BODY. STRONG MIND. STRONGER TOGETHER.',
  ];

  return (
    <div className="bg-black border-y border-koshin-pink-500/50 py-3.5 overflow-hidden whitespace-nowrap mb-12 sm:mb-16 select-none">
      <div className="inline-block animate-[marquee_25s_linear_infinite]">
        {[...items, ...items].map((phrase, idx) => (
          <span key={idx} className="font-athletic font-extrabold text-base sm:text-xl tracking-[0.18em] text-white mx-4">
            {phrase} <span className="text-koshin-cyan-500 font-normal mx-2">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};
