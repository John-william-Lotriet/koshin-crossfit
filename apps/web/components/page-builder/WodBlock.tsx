'use client';

import React from 'react';
import { Dumbbell } from 'lucide-react';
import { Button, WodExerciseItem, PolaroidCard } from '@koshin/ui';
import { WodSectionBlock } from '@/lib/sanity/types';

interface WodBlockProps {
  block: WodSectionBlock;
  onOpenTrialModal: () => void;
}

export const WodBlock: React.FC<WodBlockProps> = ({ block, onOpenTrialModal }) => {
  const exercises = block.exercises || [
    { exercise: '🔥 500m Concept 2 Row', tag: 'CARDIO ENGINE', tagColor: 'cyan' },
    { exercise: '🏋️ 21 DB Thrusters (20kg / 15kg)', tag: 'POWER', tagColor: 'pink' },
    { exercise: '🧗 3 Rope Climbs / Scaled Pull-ups', tag: 'GYMNASTICS', tagColor: 'white' },
    { exercise: '⚡ 400m Sandbag Carry', tag: 'GRIT', tagColor: 'cyan' },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 bg-gradient-to-br from-[#1d1d30]/85 to-[#0d0d15]/95 border-1.5 border-koshin-pink-500 shadow-neon-pink">
        {/* Stamp Badge */}
        <div className="inline-block md:absolute md:top-5 md:right-6 border-2 border-dashed border-koshin-pink-500 text-koshin-pink-500 font-brush px-3 py-1 text-sm sm:text-base rounded-md md:rotate-6 mb-3 md:mb-0 drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
          WOD OF THE DAY
        </div>

        <div className="inline-flex items-center gap-2 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-pink-500 uppercase mb-2">
          <Dumbbell className="w-4 h-4" /> {block.eyebrow || 'DAILY PROGRAMMING'}
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6">
          {block.title || '"SATURDAY SLAUGHTER" — TEAM WORKOUT'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Exercises */}
          <div>
            <p className="text-xs sm:text-sm text-koshin-text-muted mb-4 leading-relaxed">
              {block.description ||
                'Every workout at Koshin is fully scalable to your personal capability. Whether it’s your Day 1 or Year 5, our expert coaches guide every single rep.'}
            </p>
            <div className="flex flex-col gap-2.5">
              {exercises.map((ex, idx) => (
                <WodExerciseItem
                  key={idx}
                  exercise={ex.exercise}
                  categoryTag={ex.tag}
                  tagColor={(ex.tagColor as 'cyan' | 'pink' | 'white' | 'lime') || 'cyan'}
                />
              ))}
            </div>
          </div>

          {/* Chalkboard Box */}
          <div className="flex flex-col justify-between bg-koshin-canvas/80 p-4 sm:p-6 rounded-xl border border-dashed border-koshin-pink-500/40 gap-4">
            <div>
              <PolaroidCard
                quote={block.chalkQuote || '“Strategy in the mind. Strength in the body. Heart in the game.” ♡'}
                className="mb-3"
              />
              <p className="text-xs text-koshin-text-muted">
                {block.scalingNotes ||
                  'Class scaling available: Beginner (Level 1), Intermediate (Level 2), and Rx/Elite (Level 3).'}
              </p>
            </div>
            <Button variant="secondary" size="md" fullWidth onClick={onOpenTrialModal}>
              TRY THIS WOD IN YOUR FREE SESSION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
