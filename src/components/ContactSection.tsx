import React from 'react';
import { Mail, MapPin, FileText, ArrowUpRight, ShieldCheck, Printer } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profileData';

interface ContactSectionProps {
  onPrintDossier: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onPrintDossier }) => {
  const { personal } = profileData;

  return (
    <section data-slot="contact-section" id="contact" className="py-16 md:py-24 bg-academic-100/50 dark:bg-academic-900/30 border-b border-academic-200 dark:border-academic-800 archival-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-md">
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
              <span>§ 04</span>
              <span>·</span>
              <span>INSTITUTIONAL INQUIRIES & ADMISSIONS DISPATCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academic-950 dark:text-white tracking-[-0.01em] leading-snug">
              Direct Inquiries & Complete Dossier
            </h2>
            <p className="mt-3 text-sm sm:text-base text-academic-700 dark:text-academic-300 leading-relaxed font-sans">
              Available for admissions interviews, faculty discussions in computational chemistry or reaction engineering, and academic credential verification.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Direct Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="p-5 rounded-xl bg-academic-50 dark:bg-academic-950 border border-academic-200 dark:border-academic-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all flex flex-col items-center text-center group focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <div className="size-10 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-amber-500/20">
                <Mail className="size-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-academic-500">
                Direct Applicant Email
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-academic-900 dark:text-white mt-1 break-all">
                {personal.email}
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-academic-50 dark:bg-academic-950 border border-academic-200 dark:border-academic-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all flex flex-col items-center text-center group focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <div className="size-10 rounded-xl bg-academic-200 dark:bg-academic-800 text-academic-800 dark:text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <GithubIcon className="size-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-academic-500">
                Source Code & Builds
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-academic-900 dark:text-white mt-1 flex items-center gap-1">
                GitHub Repositories <ArrowUpRight className="size-3.5 text-academic-400" />
              </span>
            </a>

            {/* Location & School */}
            <div className="p-5 rounded-xl bg-academic-50 dark:bg-academic-950 border border-academic-200 dark:border-academic-800 flex flex-col items-center text-center">
              <div className="size-10 rounded-xl bg-academic-200 dark:bg-academic-800 text-academic-700 dark:text-academic-300 flex items-center justify-center mb-3">
                <MapPin className="size-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-academic-500">
                Location & Timezone
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-academic-900 dark:text-white mt-1">
                Addis Ababa, Ethiopia (UTC+3)
              </span>
            </div>

          </div>

          {/* Bottom Action: Print Official Admissions Dossier */}
          <div className="mt-8 pt-8 border-t border-academic-200 dark:border-academic-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-academic-500 text-center sm:text-left flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
              <span>Secondary school counselor materials and official transcripts verified via school dispatch.</span>
            </div>

            <button
              onClick={onPrintDossier}
              className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-academic-950 dark:bg-white text-white dark:text-academic-950 hover:bg-academic-800 dark:hover:bg-academic-100 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              <Printer className="size-4 text-amber-400 dark:text-amber-600" />
              <span>Print Verified Admissions Dossier (PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
