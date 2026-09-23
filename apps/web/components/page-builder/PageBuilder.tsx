'use client';

import React from 'react';
import { PageBuilderBlock } from '@/lib/sanity/types';
import { HeroBlock } from './HeroBlock';
import { MascotShowcaseBlock } from './MascotShowcaseBlock';
import { SponsorsBlock } from './SponsorsBlock';
import { MarqueeBlock } from './MarqueeBlock';
import { WodBlock } from './WodBlock';
import { FacilityBlock } from './FacilityBlock';
import { ProgramsBlock } from './ProgramsBlock';
import { TimetableBlock } from './TimetableBlock';
import { EventBannerBlock } from './EventBannerBlock';
import { CoachesBlock } from './CoachesBlock';
import { PricingBlock } from './PricingBlock';
import { ContactBlock } from './ContactBlock';

interface PageBuilderProps {
  blocks?: PageBuilderBlock[];
  onOpenTrialModal: (plan?: string) => void;
}

export const PageBuilder: React.FC<PageBuilderProps> = ({ blocks, onOpenTrialModal }) => {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col">
      {blocks.map((block, idx) => {
        const key = block._key || `${block._type}-${idx}`;

        switch (block._type) {
          case 'heroSection':
            return (
              <HeroBlock
                key={key}
                block={block}
                onOpenTrialModal={() => onOpenTrialModal()}
              />
            );
          case 'mascotSection':
            return <MascotShowcaseBlock key={key} block={block} />;
          case 'sponsorsSection':
            return <SponsorsBlock key={key} block={block} />;
          case 'marqueeSection':
            return <MarqueeBlock key={key} block={block} />;
          case 'wodSection':
            return (
              <WodBlock
                key={key}
                block={block}
                onOpenTrialModal={() => onOpenTrialModal()}
              />
            );
          case 'facilitySection':
            return <FacilityBlock key={key} block={block} />;
          case 'programsSection':
            return <ProgramsBlock key={key} block={block} />;
          case 'timetableSection':
            return <TimetableBlock key={key} block={block} />;
          case 'eventSection':
            return (
              <EventBannerBlock
                key={key}
                block={block}
                onOpenTrialModal={() => onOpenTrialModal()}
              />
            );
          case 'coachesSection':
            return <CoachesBlock key={key} block={block} />;
          case 'pricingSection':
            return (
              <PricingBlock
                key={key}
                block={block}
                onOpenTrialModal={(plan) => onOpenTrialModal(plan)}
              />
            );
          case 'contactSection':
            return <ContactBlock key={key} block={block} />;
          default:
            return null;
        }
      })}
    </main>
  );
};
