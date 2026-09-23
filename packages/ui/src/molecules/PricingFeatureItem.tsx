import React from 'react';
import { cn } from '../utils/cn';

export interface PricingFeatureItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  highlight?: boolean;
}

export const PricingFeatureItem: React.FC<PricingFeatureItemProps> = ({
  children,
  highlight = false,
  className,
  ...props
}) => {
  return (
    <li
      className={cn(
        'flex items-center gap-2.5 text-xs sm:text-sm text-koshin-text-body',
        highlight && 'text-white font-semibold',
        className
      )}
      {...props}
    >
      <svg
        className={cn(
          'w-4 h-4 shrink-0',
          highlight ? 'text-koshin-pink-500' : 'text-koshin-cyan-500'
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{children}</span>
    </li>
  );
};
