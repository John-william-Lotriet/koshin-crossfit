import React from 'react';
import { cn } from '../utils/cn';

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'pink' | 'cyan' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
}

export const Glow: React.FC<GlowProps> = ({
  className,
  color = 'pink',
  size = 'md',
  opacity = 0.16,
  style,
  ...props
}) => {
  const sizeMap = {
    sm: 'w-[200px] h-[200px] blur-[40px]',
    md: 'w-[320px] h-[320px] blur-[60px]',
    lg: 'w-[480px] h-[480px] blur-[80px]',
    xl: 'w-[640px] h-[640px] blur-[100px]',
  };

  const gradientMap = {
    pink: `radial-gradient(circle, rgba(255, 0, 127, ${opacity}) 0%, rgba(8, 8, 13, 0) 70%)`,
    cyan: `radial-gradient(circle, rgba(0, 240, 255, ${opacity}) 0%, rgba(8, 8, 13, 0) 70%)`,
    purple: `radial-gradient(circle, rgba(123, 44, 191, ${opacity}) 0%, rgba(8, 8, 13, 0) 70%)`,
  };

  return (
    <div
      aria-hidden="true"
      className={cn('absolute rounded-full pointer-events-none z-0', sizeMap[size], className)}
      style={{
        background: gradientMap[color],
        ...style,
      }}
      {...props}
    />
  );
};
