import React from 'react';
import { profileData } from '../data/profileData';

export const DossierPrintView: React.FC = () => {
  const { personal, education, projects, activities } = profileData;

  return (
    <div data-slot="dossier-print-view" className="print-only p-8 text-black bg-white max-w-4xl mx-auto font-body text-xs">
      
      {/* Print Header */}
      <div className="border-b-2 border-black pb-4 mb-4 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold font-display uppercase tracking-tight text-black">
            {personal.fullName} ({personal.preferredName})
          </h1>
          <p className="text-sm font-semibold text-gray-800 mt-0.5">
            Intended Major: {personal.intendedMajor}
          </p>
          <p className="italic text-xs text-gray-600 mt-1">
            "{personal.motto}"
          </p>
        </div>
        <div className="text-right text-[11px] text-gray-600 space-y-0.5">
          <p>{personal.email}</p>
          <p>{personal.location}</p>
          <p>{personal.github}</p>
          <p className="font-bold text-black mt-1">Common Application Supplement · Fall 2026 / 2027</p>
        </div>
      </div>

      {/* Academic Highlights Strip */}
      <div className="mb-4 bg-gray-100 p-2.5 rounded border border-gray-300 grid grid-cols-4 gap-2 text-center text-[11px]">
        <div>
          <span className="font-semibold block text-gray-600">Institution:</span>
          <span className="font-bold text-black">{education.institution}</span>
        </div>
        <div>
          <span className="font-semibold block text-gray-600">Unweighted GPA:</span>
          <span className="font-bold text-black">{education.gpa} / {education.gpaScale}</span>
        </div>
        <div>
          <span className="font-semibold block text-gray-600">Class Standing:</span>
          <span className="font-bold text-black">{education.rank} / {education.rankTotal} (Top 2.0%)</span>
        </div>
        <div>
          <span className="font-semibold block text-gray-600">National Exam:</span>
          <span className="font-bold text-black">558 / 600</span>
        </div>
      </div>

      {/* Academic Honors */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
          Academic Honors & Distinctions
        </h2>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          {education.honors.map((h, idx) => (
            <div key={idx} className="border-l-2 border-black ps-2">
              <span className="font-bold">{h.title}</span> ({h.scope}, {h.grade})
              {h.score && <span className="text-gray-700"> — {h.score}</span>}
              <p className="text-gray-600 text-[10px]">{h.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research & Selected Projects */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
          Scientific Research & Computational Projects
        </h2>
        <div className="space-y-2 text-[11px]">
          {projects.map((p) => (
            <div key={p.id}>
              <div className="flex justify-between font-bold">
                <span>{p.title} · <span className="font-normal italic text-gray-700">{p.role}</span></span>
                <span className="text-gray-600 font-mono text-[10px]">{p.timeline}</span>
              </div>
              {p.advisor && (
                <div className="text-[10px] font-semibold text-gray-800">
                  Technical Advisory: {p.advisor}
                </div>
              )}
              <p className="text-gray-800 text-[10.5px] mt-0.5">
                <span className="font-semibold">Core:</span> {p.subtitle}
              </p>
              <p className="text-gray-600 text-[10px] mt-0.5">
                <span className="font-semibold">Computational/ML Stack:</span> {p.computationalAngle} ({p.techStack.join(', ')})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Extracurricular Activities & Leadership */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
          Extracurricular Leadership & Fellowships
        </h2>
        <div className="space-y-2 text-[11px]">
          {activities.map((a) => (
            <div key={a.id}>
              <div className="flex justify-between font-bold">
                <span>{a.title} ({a.role}) — <span className="font-normal text-gray-700">{a.organization}</span></span>
                <span className="text-gray-600 font-mono text-[10px]">{a.timeline}</span>
              </div>
              <p className="text-gray-700 text-[10px] mt-0.5">
                {a.description}
              </p>
              <p className="text-gray-600 text-[9.5px]">
                <span className="font-semibold">Key Highlights:</span> {a.keyAchievements.join(' | ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer verification note */}
      <div className="border-t border-gray-300 pt-2 text-[9px] text-gray-500 flex justify-between">
        <span>Verified Common Application Supplement for Ezekiyas Tsegaye</span>
        <span>Generated from Candidate Portfolio · {new Date().toLocaleDateString()}</span>
      </div>

    </div>
  );
};
