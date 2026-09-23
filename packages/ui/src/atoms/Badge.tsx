import React from 'react';
import { cn } from '../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'pink' | 'purple' | 'green' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'cyan',
  size = 'md',
  icon,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-athletic font-bold uppercase tracking-[0.15em] rounded-full border whitespace-nowrap transition-colors';

  const variants = {
    cyan: 'bg-koshin-cyan-500/10 text-koshin-cyan-500 border-koshin-cyan-500/50 shadow-[0_0_12px_rgba(0,240,255,0.25)]',
    pink: 'bg-koshin-pink-500/10 text-koshin-pink-500 border-koshin-pink-500/50 shadow-[0_0_12px_rgba(255,0,127,0.25)]',
    purple: 'bg-koshin-purple-500/15 text-koshin-purple-400 border-koshin-purple-500/40',
    green: 'bg-koshin-accent-green/10 text-koshin-accent-green border-koshin-accent-green/40 shadow-[0_0_10px_rgba(0,255,135,0.2)]',
    outline: 'bg-transparent text-koshin-text-muted border-koshin-border',
    subtle: 'bg-white/5 text-koshin-text-body border-white/10',
  };

  const sizes = {
    sm: 'text-[0.7rem] px-2.5 py-0.5 gap-1',
    md: 'text-[0.82rem] px-3.5 py-1 gap-1.5',
    lg: 'text-sm px-4 py-1.5 gap-2',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
