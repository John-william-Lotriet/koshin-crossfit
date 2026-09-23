import React from 'react';
import { cn } from '../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-athletic font-bold uppercase tracking-[0.14em] transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-lg select-none';

    const variants = {
      primary:
        'bg-gradient-to-r from-koshin-pink-500 to-koshin-purple-500 text-white shadow-neon-pink hover:brightness-110 hover:shadow-neon-pink-lg border border-koshin-pink-400',
      secondary:
        'bg-koshin-cyan-500/10 text-koshin-cyan-500 border-1.5 border-koshin-cyan-500 shadow-neon-cyan hover:bg-koshin-cyan-500 hover:text-koshin-canvas hover:shadow-neon-cyan-lg',
      outline:
        'bg-transparent text-koshin-text-body border border-koshin-border hover:border-koshin-pink-500 hover:text-koshin-pink-500',
      ghost:
        'bg-transparent text-koshin-text-muted hover:text-white hover:bg-white/5',
      glow:
        'bg-koshin-pink-500 text-white shadow-neon-pink-lg hover:bg-koshin-pink-400',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 min-h-[36px] gap-1.5',
      md: 'text-sm sm:text-base px-5 py-2.5 min-h-[46px] gap-2',
      lg: 'text-base sm:text-lg px-7 py-3.5 min-h-[52px] gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
