import React from 'react';
import { cn } from '../utils/cn';

export interface WodExerciseItemProps extends React.HTMLAttributes<HTMLDivElement> {
  exercise: string;
  categoryTag?: string;
  tagColor?: 'cyan' | 'pink' | 'white' | 'lime';
}

export const WodExerciseItem: React.FC<WodExerciseItemProps> = ({
  exercise,
  categoryTag,
  tagColor = 'cyan',
  className,
  ...props
}) => {
  const tagColorMap = {
    cyan: 'text-koshin-cyan-500 drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]',
    pink: 'text-koshin-pink-500 drop-shadow-[0_0_8px_rgba(255,0,127,0.6)]',
    white: 'text-white',
    lime: 'text-koshin-accent-green',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between flex-wrap gap-2 bg-koshin-canvas/70 border border-koshin-border rounded-lg px-3.5 py-2.5 font-athletic text-sm sm:text-base font-bold tracking-wide',
        className
      )}
      {...props}
    >
      <span className="text-white">{exercise}</span>
      {categoryTag && (
        <span className={cn('text-xs uppercase tracking-[0.15em] shrink-0', tagColorMap[tagColor])}>
          {categoryTag}
        </span>
      )}
    </div>
  );
};
