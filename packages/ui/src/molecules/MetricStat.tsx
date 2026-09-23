import React from 'react';
import { cn } from '../utils/cn';

export interface MetricStatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  glow?: 'pink' | 'cyan' | 'none';
}

export const MetricStat: React.FC<MetricStatProps> = ({
  value,
  label,
  glow = 'none',
  className,
  ...props
}) => {
  const glowMap = {
    pink: 'text-koshin-pink-500 drop-shadow-[0_0_15px_rgba(255,0,127,0.7)]',
    cyan: 'text-koshin-cyan-500 drop-shadow-[0_0_15px_rgba(0,240,255,0.7)]',
    none: 'text-white',
  };

  return (
    <div className={cn('flex flex-col', className)} {...props}>
      <span className={cn('font-display text-3xl sm:text-4xl md:text-5xl leading-none', glowMap[glow])}>
        {value}
      </span>
      <span className="font-athletic text-[0.72rem] sm:text-xs md:text-sm font-bold tracking-[0.12em] text-koshin-text-muted uppercase mt-1">
        {label}
      </span>
    </div>
  );
};
