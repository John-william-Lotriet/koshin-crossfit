'use client';

import React, { useState, useEffect, useRef } from 'react';

interface MatrixSignatureProps {
  redirectUrl?: string;
  startText?: string;
  className?: string;
}

export const MatrixSignature: React.FC<MatrixSignatureProps> = ({
  redirectUrl = 'https://www.jwlotriet.co.za/',
  startText = 'Follow the white rabbit',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const toggleMatrix = () => {
    setIsOpen((prev) => !prev);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Matrix Rain animation logic
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#20ff4d';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isOpen]);

  return (
    <>
      {/* The White Rabbit Footer Trigger */}
      <button
        onClick={toggleMatrix}
        className={`inline-flex items-center justify-center p-1.5 rounded-md text-white/50 hover:text-[#20ff4d] hover:bg-white/5 hover:scale-110 transition-all duration-300 cursor-pointer ${className}`}
        title={startText}
        aria-label="Follow the white rabbit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-transform"
        >
          <path d="M13 16a3 3 0 0 1 2.24 5" />
          <path d="M18 12h.01" />
          <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 13" />
        </svg>
      </button>

      {/* The Matrix Rain Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 text-green-500 font-mono flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Canvas for Rain Effect */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

          {/* Center Card */}
          <div className="relative z-10 text-center p-8 bg-black/90 border border-[#20ff4d] rounded-xl shadow-[0_0_30px_rgba(32,255,77,0.35)] max-w-md w-full mx-auto animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-green-600 hover:text-[#20ff4d] hover:bg-green-950/40 rounded-full transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Terminal Subtitle */}
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-green-500/70 mb-4">
              [ SYSTEM_OVERRIDE // KOSHIN_TERMINAL ]
            </div>

            <p className="mb-6 text-base sm:text-lg leading-relaxed text-[#20ff4d]">
              This website was created by{' '}
              <span className="text-white font-bold tracking-wide">
                John-William Lotriet
              </span>
              , follow the white rabbit...
            </p>

            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-4 rounded-full bg-green-950/30 border border-green-500/40 text-white hover:text-[#20ff4d] hover:border-[#20ff4d] hover:shadow-[0_0_20px_rgba(32,255,77,0.5)] transition-all duration-300 hover:scale-110 transform cursor-pointer"
              title="Follow the white rabbit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M13 16a3 3 0 0 1 2.24 5" />
                <path d="M18 12h.01" />
                <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 13" />
              </svg>
            </a>

            <div className="mt-4 text-xs text-green-600/80">
              Click rabbit to enter {redirectUrl.replace('https://', '').replace('/', '')}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MatrixSignature;
