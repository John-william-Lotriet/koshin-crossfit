import React from 'react';
import { Shield, Dumbbell, Activity, Coffee, Sparkles } from 'lucide-react';
import { FacilitySectionBlock } from '@/lib/sanity/types';

interface FacilityBlockProps {
  block: FacilitySectionBlock;
}

export const FacilityBlock: React.FC<FacilityBlockProps> = ({ block }) => {
  const facilityCards = [
    {
      title: 'Heavy Iron & Rigs',
      desc: 'Featuring 22 Olympic barbells, 5 squat racks, competition rig, climbing ropes, Assault Bikes, and Concept 2 Rowers.',
      icon: <Dumbbell className="w-6 h-6 text-koshin-pink-500" />,
      tags: ['ROGUE & CONCEPT 2', 'OLYMPIC PLATES'],
      border: 'border-koshin-pink-500/40',
      bgIcon: 'bg-koshin-pink-500/15 border-koshin-pink-500',
    },
    {
      title: 'Mobility & Bulletproofing',
      desc: 'Dedicated mobility zone integrating Knees Over Toes protocols to keep your joints healthy and injury-free.',
      icon: <Activity className="w-6 h-6 text-koshin-cyan-500" />,
      tags: ['KNEES OVER TOES', 'RECOVERY'],
      border: 'border-koshin-cyan-500/40',
      bgIcon: 'bg-koshin-cyan-500/15 border-koshin-cyan-500',
    },
    {
      title: 'MealFit & Athlete Lounge',
      desc: 'Pre and post-workout lounge with free Wi-Fi, premium coffee, and custom MealFit healthy meal prep ready for pickup.',
      icon: <Coffee className="w-6 h-6 text-koshin-purple-400" />,
      tags: ['MEAL PREP PICKUP', 'FREE ESPRESSO'],
      border: 'border-koshin-purple-500/40',
      bgIcon: 'bg-koshin-purple-500/20 border-koshin-purple-500',
    },
    {
      title: 'Modern Change Rooms',
      desc: 'Spotless modern shower facilities and change rooms so you can freshen up and head straight to work after morning sessions.',
      icon: <Sparkles className="w-6 h-6 text-koshin-accent-green" />,
      tags: ['PRIVATE SHOWERS', 'LOCKERS'],
      border: 'border-koshin-accent-green/40',
      bgIcon: 'bg-koshin-accent-green/15 border-koshin-accent-green',
    },
  ];

  return (
    <section id="about" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-cyan-500 uppercase mb-2">
          <Shield className="w-4 h-4" /> {block.eyebrow || '2 SUNFIELD PLACE, DURBAN NORTH'}
        </div>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-2 leading-tight">
          {block.title || 'OUR WORLD CLASS FACILITY'}
        </h2>
        <p className="text-sm sm:text-base text-koshin-text-muted max-w-xl mx-auto">
          {block.subtitle || 'Engineered for high performance, recovery, and lifelong friendships.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {facilityCards.map((card, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-b from-[#1d1d30]/75 to-[#0d0d15]/95 border ${card.border} rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-glow`}
          >
            <div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${card.bgIcon}`}>
                {card.icon}
              </div>
              <h3 className="font-display text-2xl text-white mb-2 leading-none">{card.title}</h3>
              <p className="text-xs sm:text-sm text-koshin-text-muted leading-relaxed mb-4">{card.desc}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {card.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-athletic text-[0.68rem] font-bold tracking-wider text-koshin-text-muted px-2 py-0.5 rounded border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
