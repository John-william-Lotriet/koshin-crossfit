'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Flame, MessageCircle } from 'lucide-react';
import { Button } from '@koshin/ui';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
  onOpenTrialModal: (plan?: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  links,
  onOpenTrialModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-[68px] sm:top-[76px] bg-koshin-canvas/98 border-b border-koshin-pink-500/50 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl z-30 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
      <ul className="flex flex-col gap-2 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] font-athletic font-bold uppercase tracking-wider text-sm sm:text-base text-koshin-text-body hover:bg-koshin-pink-500/15 hover:border-koshin-pink-500 hover:text-koshin-pink-500 transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-koshin-text-muted" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="pt-2 flex flex-col gap-2.5">
        <Button
          variant="primary"
          fullWidth
          size="md"
          leftIcon={<Flame className="w-4 h-4 text-white" />}
          onClick={() => {
            onClose();
            onOpenTrialModal();
          }}
        >
          CLAIM 2 FREE SESSIONS
        </Button>
        <a
          href="https://wa.me/27832777554"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center font-athletic font-bold uppercase tracking-[0.14em] min-h-[46px] rounded-lg bg-koshin-cyan-500/10 text-koshin-cyan-500 border border-koshin-cyan-500 shadow-neon-cyan hover:bg-koshin-cyan-500 hover:text-koshin-canvas transition-colors text-sm sm:text-base gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          CHAT ON WHATSAPP
        </a>
      </div>
    </div>
  );
};
