import React from 'react';
import { cn } from '../utils/cn';

export interface CoachTraitItemProps extends React.HTMLAttributes<HTMLLIElement> {
  emoji: string;
  text: string;
  accentColor?: 'pink' | 'cyan';
}

export const CoachTraitItem: React.FC<CoachTraitItemProps> = ({
  emoji,
  text,
  accentColor = 'pink',
  className,
  ...props
}) => {
  return (
    <li
      className={cn(
        'flex items-center gap-2 font-athletic font-bold text-xs sm:text-sm tracking-wide text-white uppercase',
        className
      )}
      {...props}
    >
      <span className={accentColor === 'pink' ? 'text-koshin-pink-500' : 'text-koshin-cyan-500'}>
        {emoji}
      </span>
      <span>{text}</span>
    </li>
  );
};
