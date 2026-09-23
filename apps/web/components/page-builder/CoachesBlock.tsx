import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { CoachTraitItem, PolaroidCard } from '@koshin/ui';
import { CoachesSectionBlock } from '@/lib/sanity/types';

interface CoachesBlockProps {
  block: CoachesSectionBlock;
}

export const CoachesBlock: React.FC<CoachesBlockProps> = ({ block }) => {
  const coaches = block.coaches || [];

  return (
    <section id="coaches" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-pink-500 uppercase mb-2">
          <Users className="w-4 h-4" /> {block.eyebrow || 'PASSIONATE LEADERSHIP'}
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-2 leading-tight">
          {block.title || 'MEET THE COACHES'}
        </h2>
        <p className="text-sm sm:text-base text-koshin-text-muted max-w-xl mx-auto">
          {block.subtitle || 'The people that drive you, teach you, celebrate your PRs, and make you laugh.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {coaches.map((c) => {
          const photoSrc =
            typeof c.photo === 'string'
              ? c.photo
              : c.photo?.asset?._ref || '/assets/coach-strech.jpg';

          return (
            <div
              key={c._id}
              className="bg-gradient-to-b from-[#1d1d30]/70 to-[#0d0d15]/95 border border-koshin-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-koshin-pink-500 hover:shadow-neon-pink"
            >
              {/* Photo Box */}
              <div className="relative w-full h-[240px] sm:h-[260px] bg-[#11111d]">
                <Image
                  src={photoSrc}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d15] via-transparent to-transparent flex items-end p-5">
                  <div>
                    <h3 className="font-brush text-2xl sm:text-3xl text-koshin-pink-500 drop-shadow-[0_0_10px_rgba(255,0,127,0.7)] leading-none">
                      {c.name}
                    </h3>
                    <p className="font-athletic text-xs font-bold tracking-[0.18em] text-koshin-cyan-500 uppercase mt-1">
                      {c.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio & Traits */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow gap-4">
                <p className="text-xs sm:text-sm text-koshin-text-muted leading-relaxed">{c.bio}</p>

                {c.traits && c.traits.length > 0 && (
                  <ul className="flex flex-col gap-2 list-none p-0 m-0">
                    {c.traits.map((trait, tIdx) => (
                      <CoachTraitItem
                        key={tIdx}
                        emoji={trait.emoji}
                        text={trait.text}
                        accentColor={tIdx % 2 === 0 ? 'pink' : 'cyan'}
                      />
                    ))}
                  </ul>
                )}

                {c.polaroidQuote && (
                  <div className="mt-auto pt-2">
                    <PolaroidCard quote={c.polaroidQuote} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
