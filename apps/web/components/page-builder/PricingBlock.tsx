'use client';

import React from 'react';
import { Tag } from 'lucide-react';
import { Button, PricingFeatureItem } from '@koshin/ui';
import { PricingSectionBlock } from '@/lib/sanity/types';

interface PricingBlockProps {
  block: PricingSectionBlock;
  onOpenTrialModal: (plan?: string) => void;
}

export const PricingBlock: React.FC<PricingBlockProps> = ({ block, onOpenTrialModal }) => {
  const tiers = block.tiers || [];

  return (
    <section id="pricing" className="w-full bg-[#0d0d15]/50 py-12 sm:py-16">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-cyan-500 uppercase mb-2">
            <Tag className="w-4 h-4" /> {block.eyebrow || 'TRANSPARENT PRICING'}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-2 leading-tight">
            {block.title || 'JOIN THE KOSHIN FAMILY'}
          </h2>
          <p className="text-sm sm:text-base text-koshin-text-muted max-w-xl mx-auto">
            {block.subtitle ||
              'No lock-in contracts. World-class coaching included in every single membership.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier._id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#1d1d30]/75 to-[#0d0d15]/95 border transition-all duration-300 ${
                tier.isFeatured
                  ? 'border-2 border-koshin-pink-500 shadow-neon-pink mt-3 md:mt-0'
                  : 'border-koshin-border'
              }`}
            >
              {/* Featured Ribbon */}
              {tier.isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-koshin-pink-500 to-koshin-purple-500 text-white font-athletic text-xs font-extrabold tracking-[0.18em] px-3.5 py-1 rounded-full uppercase shadow-neon-pink whitespace-nowrap">
                  {tier.ribbonText || '⭐ MOST POPULAR'}
                </div>
              )}

              <div>
                <h3 className={`font-display text-2xl sm:text-3xl mb-1 ${tier.isFeatured ? 'text-koshin-pink-500' : 'text-white'}`}>
                  {tier.name}
                </h3>
                {tier.subtitle && (
                  <p className="text-xs text-koshin-text-muted mb-4">{tier.subtitle}</p>
                )}

                {/* Price Display */}
                <div className="my-4 flex items-baseline gap-1">
                  <span className="font-bold text-lg text-koshin-cyan-500">{tier.currency || 'R'}</span>
                  <span className="font-display text-4xl sm:text-5xl text-white leading-none">
                    {tier.price}
                  </span>
                  <span className="text-xs sm:text-sm text-koshin-text-muted">{tier.period || '/ month'}</span>
                </div>

                {/* Feature List */}
                <ul className="flex flex-col gap-2.5 my-6 list-none p-0 m-0">
                  {(tier.features || []).map((feat, fIdx) => (
                    <PricingFeatureItem key={fIdx} highlight={tier.isFeatured}>
                      {feat}
                    </PricingFeatureItem>
                  ))}
                </ul>
              </div>

              <Button
                variant={tier.isFeatured ? 'primary' : 'secondary'}
                size="md"
                fullWidth
                onClick={() => onOpenTrialModal(tier.name)}
              >
                {tier.ctaLabel || 'GET STARTED'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
