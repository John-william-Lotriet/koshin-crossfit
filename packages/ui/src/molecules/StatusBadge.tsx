import React from 'react';
import { cn } from '../utils/cn';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  hoursText?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  isOpen = true,
  hoursText = '05:00 - 19:30',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 bg-koshin-canvas/90 border border-koshin-pink-500/40 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(255,0,127,0.25)] backdrop-blur-md select-none',
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-koshin-accent-green opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-koshin-accent-green" />
      </span>
      <span className="font-athletic text-[0.72rem] sm:text-xs font-bold tracking-[0.14em] text-white uppercase whitespace-nowrap">
        {isOpen ? `BOX OPEN • ${hoursText}` : `BOX CLOSED`}
      </span>
    </div>
  );
};
