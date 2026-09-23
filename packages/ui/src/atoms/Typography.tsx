import React from 'react';
import { cn } from '../utils/cn';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  glow?: 'pink' | 'cyan' | 'none';
}

export const DisplayTitle: React.FC<TypographyProps> = ({
  as: Component = 'h1',
  glow = 'none',
  className,
  children,
  ...props
}) => {
  const glowStyles = {
    pink: 'text-koshin-pink-500 drop-shadow-[0_0_20px_rgba(255,0,127,0.8)]',
    cyan: 'text-koshin-cyan-500 drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]',
    none: 'text-white',
  };

  return (
    <Component
      className={cn(
        'font-display uppercase tracking-[0.04em] leading-[0.9] text-white',
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const AthleticSub: React.FC<TypographyProps> = ({
  as: Component = 'span',
  glow = 'none',
  className,
  children,
  ...props
}) => {
  const glowStyles = {
    pink: 'text-koshin-pink-500 drop-shadow-[0_0_12px_rgba(255,0,127,0.6)]',
    cyan: 'text-koshin-cyan-500 drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]',
    none: 'text-koshin-text-body',
  };

  return (
    <Component
      className={cn(
        'font-athletic font-bold uppercase tracking-[0.25em]',
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const BrushScript: React.FC<TypographyProps> = ({
  as: Component = 'div',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'font-brush text-koshin-pink-500 -rotate-2 drop-shadow-[0_0_12px_rgba(255,0,127,0.5)]',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const ChalkQuote: React.FC<TypographyProps> = ({
  as: Component = 'div',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn('font-chalk text-koshin-text-chalk leading-tight', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
