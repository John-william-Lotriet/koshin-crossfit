import React from 'react';
import { cn } from '../utils/cn';

export interface TimeSlotCardProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string;
  title: string;
  coach: string;
}

export const TimeSlotCard: React.FC<TimeSlotCardProps> = ({
  time,
  title,
  coach,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-koshin-canvas/80 border border-koshin-border rounded-xl p-3.5 sm:p-4 flex flex-col gap-1.5 transition-all duration-200 hover:border-koshin-cyan-500 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]',
        className
      )}
      {...props}
    >
      <div className="font-athletic text-base sm:text-lg font-extrabold text-koshin-cyan-500 tracking-wide flex items-center gap-1.5">
        <span>⏰</span> <span>{time}</span>
      </div>
      <div className="font-bold text-white text-sm sm:text-base leading-snug">
        {title}
      </div>
      <div className="text-xs sm:text-sm text-koshin-text-muted flex items-center gap-1">
        <span>👤</span> <span>{coach}</span>
      </div>
    </div>
  );
};
