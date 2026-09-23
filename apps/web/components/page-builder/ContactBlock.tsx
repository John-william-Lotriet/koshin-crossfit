'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button, Input } from '@koshin/ui';
import { ContactSectionBlock } from '@/lib/sanity/types';

interface ContactBlockProps {
  block: ContactSectionBlock;
}

export const ContactBlock: React.FC<ContactBlockProps> = ({ block }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goals, setGoals] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setGoals('');
    }, 4000);
  };

  return (
    <section id="contact" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Contact Info */}
        <div>
          <div className="inline-flex items-center gap-2 font-athletic text-xs sm:text-sm font-bold tracking-[0.2em] text-koshin-cyan-500 uppercase mb-2">
            <MapPin className="w-4 h-4" /> {block.eyebrow || 'DURBAN NORTH HEADQUARTERS'}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-3 leading-tight">
            {block.title || 'COME VISIT THE BOX'}
          </h2>
          <p className="text-sm sm:text-base text-koshin-text-muted mb-6 leading-relaxed">
            Pop in before any class for a free tour, grab a coffee in the lounge, or chat with Coach Strech & Nats about your personal fitness goals.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-koshin-cyan-500/10 border border-koshin-cyan-500 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-koshin-cyan-500" />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base">
                  {block.address || '2 Sunfield Place'}
                </div>
                <div className="text-xs sm:text-sm text-koshin-text-muted">Durban North, 4051, South Africa</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-koshin-pink-500/10 border border-koshin-pink-500 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-koshin-pink-500" />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base">
                  {block.phone || '083 277 7554 / 083 789 9524'}
                </div>
                <div className="text-xs sm:text-sm text-koshin-text-muted">Box Manager (Megan): 083 300 0698</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-koshin-purple-500/15 border border-koshin-purple-500 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-koshin-purple-400" />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base">{block.email || 'meakernat@gmail.com'}</div>
                <div className="text-xs sm:text-sm text-koshin-text-muted">Direct coach enquiries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form Card */}
        <div className="bg-gradient-to-br from-[#1d1d30]/75 to-[#0d0d15]/95 border-1.5 border-koshin-cyan-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
          {submitted ? (
            <div className="py-8 flex flex-col items-center text-center gap-3 animate-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-14 h-14 text-koshin-accent-green drop-shadow-[0_0_15px_rgba(0,255,135,0.7)]" />
              <h3 className="font-display text-3xl text-white">MESSAGE SENT!</h3>
              <p className="text-sm text-koshin-text-muted">
                The Koshin team will reach out via WhatsApp within 2 hours.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-1">DROP US A MESSAGE</h3>
              <p className="text-xs sm:text-sm text-koshin-text-muted mb-5">
                We will contact you within 2 hours to confirm your free intro session.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <Input
                  label="Your Full Name"
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
                <Input
                  label="Fitness Experience / Goals"
                  placeholder="Complete beginner / Want to get stronger"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
                <Button type="submit" variant="primary" size="md" fullWidth className="mt-2">
                  SEND MESSAGE & CLAIM FREE SESSIONS
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
