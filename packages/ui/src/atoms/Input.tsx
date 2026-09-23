import React from 'react';
import { cn } from '../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-athletic text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-white select-none"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full min-h-[46px] bg-koshin-canvas text-white border border-koshin-border rounded-lg px-3.5 py-2.5 font-body text-sm sm:text-base transition-all duration-200 placeholder:text-koshin-text-muted focus:outline-none focus:border-koshin-pink-500 focus:ring-1 focus:ring-koshin-pink-500/50',
            error && 'border-koshin-accent-crimson focus:border-koshin-accent-crimson focus:ring-koshin-accent-crimson/50',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-koshin-accent-crimson font-athletic">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
