import React from 'react';
import { Mail, MapPin, Send, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profileData';

interface ContactSectionProps {
  onPrintDossier: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onPrintDossier }) => {
  const { personal, education } = profileData;

  return (
    <section id="contact" className="py-16 md:py-24 bg-academic-100/50 dark:bg-academic-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-academic-900 border border-academic-200 dark:border-academic-800 shadow-md">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Admissions & Institutional Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academic-950 dark:text-white mt-1">
              Connect & Request Complete Records
            </h2>
            <p className="mt-3 text-sm sm:text-base text-academic-600 dark:text-academic-300 leading-relaxed">
              Available for admissions interviews, faculty consultations, and discussions regarding computational chemistry and undergraduate research opportunities.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Direct Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="p-5 rounded-2xl bg-academic-50 dark:bg-academic-800/60 border border-academic-200 dark:border-academic-700/70 hover:border-amber-400 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-academic-500 dark:text-academic-400">
                Direct Applicant Email
              </span>
              <span className="text-sm font-bold text-academic-900 dark:text-white mt-1 break-all">
                {personal.email}
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-academic-50 dark:bg-academic-800/60 border border-academic-200 dark:border-academic-700/70 hover:border-amber-400 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-academic-200 dark:bg-academic-700 text-academic-800 dark:text-white flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-academic-500 dark:text-academic-400">
                Code & Repositories
              </span>
              <span className="text-sm font-bold text-academic-900 dark:text-white mt-1 flex items-center gap-1">
                GitHub Profile <ArrowUpRight className="w-3.5 h-3.5 text-academic-400" />
              </span>
            </a>

            {/* Location & School */}
            <div className="p-5 rounded-2xl bg-academic-50 dark:bg-academic-800/60 border border-academic-200 dark:border-academic-700/70 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-academic-500 dark:text-academic-400">
                Origin & School
              </span>
              <span className="text-sm font-bold text-academic-900 dark:text-white mt-1">
                {personal.location}
              </span>
            </div>

          </div>

          {/* Bottom Action: Print Official Admissions Dossier */}
          <div className="mt-8 pt-8 border-t border-academic-200 dark:border-academic-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-academic-500 dark:text-academic-400 text-center sm:text-left">
              Official Common App ID verification and counselor materials sent through secondary school dispatch.
            </div>

            <button
              onClick={onPrintDossier}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-academic-900 dark:bg-white text-white dark:text-academic-950 hover:bg-academic-800 dark:hover:bg-academic-100 transition-all shadow-sm"
            >
              <FileText className="w-4 h-4 text-amber-500 dark:text-amber-600" />
              <span>Print Official Candidate Dossier (PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
