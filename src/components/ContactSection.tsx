import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, ArrowUpRight, ShieldCheck, Printer } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profileData';
import { spring, silk } from '../engine/motion';

interface ContactSectionProps {
  onPrintDossier: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onPrintDossier }) => {
  const { personal } = profileData;

  return (
    <section data-slot="contact-section" id="contact" className="py-16 md:py-24 bg-paper dark:bg-paper border-t border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-none bg-paper dark:bg-paper border-x border-b border-t-4 border-ink/15 border-t-specimen shadow-md">
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-specimen mb-2">
              <span>§ 04</span>
              <span>·</span>
              <span>INSTITUTIONAL INQUIRIES & ADMISSIONS DISPATCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-[-0.01em] leading-snug">
              Direct Inquiries & Complete Dossier
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink/70 leading-relaxed font-body">
              Available for admissions interviews, faculty discussions in computational chemistry or reaction engineering, and academic credential verification.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Direct Email Card */}
            <motion.a
              {...silk.hover}
              {...spring.press}
              href={`mailto:${personal.email}`}
              className="p-5 rounded-none bg-data-bg dark:bg-data-bg border-x border-t border-b-2 border-ink/15 border-b-specimen/20 hover:border-specimen transition-all flex flex-col items-center text-center group focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
            >
              <div className="size-10 rounded-xl bg-specimen/10 text-specimen flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-specimen/20">
                <Mail className="size-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral">
                Direct Applicant Email
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-ink mt-1 break-all">
                {personal.email}
              </span>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              {...silk.hover}
              {...spring.press}
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-none bg-data-bg dark:bg-data-bg border-x border-t border-b-2 border-ink/15 border-b-specimen/20 hover:border-specimen transition-all flex flex-col items-center text-center group focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
            >
              <div className="size-10 rounded-xl bg-ink/15 text-ink flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <GithubIcon className="size-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral">
                Source Code & Builds
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-ink mt-1 flex items-center gap-1">
                GitHub Repositories <ArrowUpRight className="size-3.5 text-ink/40" />
              </span>
            </motion.a>

            {/* Location & School */}
            <motion.div
              {...silk.hover}
              className="p-5 rounded-none bg-data-bg dark:bg-data-bg border-x border-t border-b-2 border-ink/15 border-b-specimen/20 flex flex-col items-center text-center"
            >
              <div className="size-10 rounded-xl bg-ink/15 text-ink flex items-center justify-center mb-3">
                <MapPin className="size-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral">
                Location & Timezone
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-ink mt-1">
                Addis Ababa, Ethiopia (UTC+3)
              </span>
            </motion.div>

          </div>

          {/* Bottom Action: Print Official Admissions Dossier */}
          <div className="mt-8 pt-8 border-t border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral text-center sm:text-left flex items-center gap-2">
              <ShieldCheck className="size-4 text-reagent shrink-0" />
              <span>Secondary school counselor materials and official transcripts verified via school dispatch.</span>
            </div>

            <motion.button
              {...spring.press}
              {...silk.hover}
              onClick={onPrintDossier}
              className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-sm text-xs font-mono font-bold bg-[#080812] text-white hover:bg-[#0d0d1a] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-specimen focus-visible:outline-none"
            >
              <Printer className="size-4 text-specimen" />
              <span>Print Verified Admissions Dossier (PDF)</span>
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
};
