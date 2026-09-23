import React from 'react';
import { cn } from '../utils/cn';
import { ChalkQuote } from '../atoms/Typography';

export interface PolaroidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  quote,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-koshin-canvas border border-dashed border-white/20 rounded-lg p-3 sm:p-4 shadow-inner',
        className
      )}
      {...props}
    >
      <ChalkQuote className="text-base sm:text-lg text-koshin-text-chalk">
        {quote}
      </ChalkQuote>
    </div>
  );
};
