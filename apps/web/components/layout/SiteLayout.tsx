'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { TrialModal } from './TrialModal';
import { PageBuilder } from '../page-builder/PageBuilder';
import { PageDocument, SiteSettingsDocument } from '@/lib/sanity/types';

interface SiteLayoutProps {
  page: PageDocument;
  settings: SiteSettingsDocument;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ page, settings }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenModal = (plan?: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <>
      <Navbar settings={settings} onOpenTrialModal={handleOpenModal} />
      <PageBuilder blocks={page.pageBuilder} onOpenTrialModal={handleOpenModal} />
      <Footer settings={settings} />
      <TrialModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultPlan={selectedPlan}
      />
    </>
  );
};
