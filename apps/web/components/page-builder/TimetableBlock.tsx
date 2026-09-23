'use client';

import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { TimeSlotCard } from '@koshin/ui';
import { TimetableSectionBlock, ScheduleSlotDocument } from '@/lib/sanity/types';

interface TimetableBlockProps {
  block: TimetableSectionBlock;
}

export const TimetableBlock: React.FC<TimetableBlockProps> = ({ block }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'morning' | 'afternoon' | 'hyrox' | 'outdoor'>('all');

  const slots = block.slots || [];

  const filteredSlots =
    activeFilter === 'all'
      ? slots
      : slots.filter((s) => s.category === activeFilter);

  const filters = [
    { key: 'all', label: 'ALL SESSIONS' },
    { key: 'morning', label: 'MORNINGS (05:00 - 09:00)' },
    { key: 'afternoon', label: 'AFTERNOONS (16:30 - 19:30)' },
    { key: 'hyrox', label: 'HYROX RACING' },
    { key: 'outdoor', label: 'OUTDOOR & WEEKEND' },
  ] as const;

  return (
    <section id="schedule" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-cyan-500 uppercase mb-2">
          <Clock className="w-4 h-4" /> {block.eyebrow || '40+ SESSIONS WEEKLY'}
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-2 leading-tight">
          {block.title || 'BOX TIMETABLE'}
        </h2>
        <p className="text-sm sm:text-base text-koshin-text-muted max-w-xl mx-auto">
          {block.subtitle ||
            'Classes structured to fit your busy workday. Tap a filter to view specific sessions.'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#1d1d30]/60 to-[#0d0d15]/95 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 shadow-2xl">
        {/* Horizontal scrollable tab filters on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-koshin-border scrollbar-none">
          {filters.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key)}
              className={`font-athletic text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-koshin-pink-500 text-white shadow-neon-pink border border-koshin-pink-400'
                  : 'bg-white/5 text-koshin-text-muted hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Slots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredSlots.map((slot) => (
            <TimeSlotCard
              key={slot._id}
              time={slot.time}
              title={slot.title}
              coach={slot.coachName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
