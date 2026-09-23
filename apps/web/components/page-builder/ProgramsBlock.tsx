import React from 'react';
import { Layers } from 'lucide-react';
import { ProgramsSectionBlock } from '@/lib/sanity/types';

interface ProgramsBlockProps {
  block: ProgramsSectionBlock;
}

export const ProgramsBlock: React.FC<ProgramsBlockProps> = ({ block }) => {
  const accentBorderMap = {
    cyan: 'border-l-4 border-l-koshin-cyan-500',
    pink: 'border-l-4 border-l-koshin-pink-500',
    orange: 'border-l-4 border-l-[#FF8800]',
    green: 'border-l-4 border-l-koshin-accent-green',
    purple: 'border-l-4 border-l-koshin-purple-400',
  };

  const accentBadgeMap = {
    cyan: 'text-koshin-cyan-500 border-koshin-cyan-500/40',
    pink: 'text-koshin-pink-500 border-koshin-pink-500/40',
    orange: 'text-[#FF8800] border-[#FF8800]/40',
    green: 'text-koshin-accent-green border-koshin-accent-green/40',
    purple: 'text-koshin-purple-400 border-koshin-purple-400/40',
  };

  const accentTextMap = {
    cyan: 'text-koshin-cyan-500',
    pink: 'text-koshin-pink-500',
    orange: 'text-[#FF8800]',
    green: 'text-koshin-accent-green',
    purple: 'text-koshin-purple-400',
  };

  const programs = block.programs || [];

  return (
    <section id="programs" className="w-full bg-[#0d0d15]/60 py-12 sm:py-16">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-cyan-500 uppercase mb-2">
            <Layers className="w-4 h-4" /> {block.eyebrow || 'TAILORED FITNESS DISCIPLINES'}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-2 leading-tight">
            {block.title || 'PROGRAMS FOR EVERY GOAL'}
          </h2>
          <p className="text-sm sm:text-base text-koshin-text-muted max-w-xl mx-auto">
            {block.subtitle || 'From beginner fundamentals to elite functional race conditioning.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {programs.map((prog) => {
            const colorKey = prog.accentColor || 'cyan';
            return (
              <div
                key={prog._id}
                className={`bg-gradient-to-br from-[#1d1d30]/70 to-[#0d0d15]/95 border border-koshin-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between ${accentBorderMap[colorKey]}`}
              >
                <div>
                  {prog.categoryBadge && (
                    <span
                      className={`inline-block font-athletic text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${accentBadgeMap[colorKey]}`}
                    >
                      {prog.categoryBadge}
                    </span>
                  )}
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-2 leading-tight">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-koshin-text-muted leading-relaxed mb-4">
                    {prog.description}
                  </p>
                </div>
                {prog.scheduleInfo && (
                  <div className={`font-athletic font-bold text-xs sm:text-sm tracking-wider uppercase pt-3 border-t border-white/5 ${accentTextMap[colorKey]}`}>
                    {prog.scheduleInfo}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
