'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button, Input } from '@koshin/ui';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  defaultPlan,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sessionTime, setSessionTime] = useState('Morning (05:00 - 06:00)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      onClose();
    }, 2800);
  };

  return (
    <div
      className="fixed inset-0 bg-koshin-canvas/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#11111d] border-1.5 border-koshin-pink-500 shadow-neon-pink-lg rounded-2xl w-full max-w-[500px] p-5 sm:p-7 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white hover:bg-koshin-pink-500 hover:border-koshin-pink-500 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center gap-3 animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-16 h-16 text-koshin-accent-green drop-shadow-[0_0_15px_rgba(0,255,135,0.7)]" />
            <h3 className="font-display text-3xl text-white">BOOM! YOU&apos;RE IN!</h3>
            <p className="text-sm text-koshin-text-muted max-w-sm">
              Coach Strech & Nats will WhatsApp you within 2 hours to confirm your 2 Free Intro Sessions.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 font-athletic text-xs font-bold tracking-[0.2em] text-koshin-pink-500 uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" /> ZERO OBLIGATION • 100% FREE
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-2 leading-none">
              CLAIM 2 FREE INTRO SESSIONS
            </h3>
            {defaultPlan && (
              <div className="inline-block bg-koshin-pink-500/15 border border-koshin-pink-500/40 text-koshin-pink-400 font-athletic text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3">
                Selected Plan: {defaultPlan}
              </div>
            )}
            <p className="text-xs sm:text-sm text-koshin-text-muted mb-5 leading-relaxed">
              Come meet the coaches, experience our supportive community, and get a workout scaled to your capability.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <Input
                label="Full Name"
                placeholder="e.g. Emma Johnson"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="WhatsApp / Phone Number"
                type="tel"
                placeholder="e.g. 083 123 4567"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="w-full flex flex-col gap-1.5">
                <label className="font-athletic text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-white select-none">
                  Preferred Session Time
                </label>
                <select
                  value={sessionTime}
                  onChange={(e) => setSessionTime(e.target.value)}
                  className="w-full min-h-[46px] bg-koshin-canvas text-white border border-koshin-border rounded-lg px-3.5 py-2.5 font-body text-sm sm:text-base focus:outline-none focus:border-koshin-pink-500 focus:ring-1 focus:ring-koshin-pink-500/50"
                >
                  <option>Morning (05:00 - 06:00)</option>
                  <option>Morning (06:00 - 07:00)</option>
                  <option>Morning (07:00 - 08:00)</option>
                  <option>Afternoon (16:30 - 17:30)</option>
                  <option>Afternoon (17:30 - 18:30)</option>
                  <option>Life-Lift Beginner (Mon/Wed 18:30)</option>
                  <option>Saturday Slaughter (07:00)</option>
                </select>
              </div>

              <Button type="submit" variant="primary" size="md" fullWidth className="mt-2">
                CONFIRM MY 2 FREE SESSIONS
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
