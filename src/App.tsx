import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdmissionsOverview } from './components/AdmissionsOverview';
import { AcademicsSection } from './components/AcademicsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DossierPrintView } from './components/DossierPrintView';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handlePrintDossier = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
      
      {/* Screen Interactive Portfolio */}
      <div className="no-print flex-1 flex flex-col">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onPrintDossier={handlePrintDossier}
        />
        
        <main className="flex-1">
          <Hero />
          <AdmissionsOverview />
          <AcademicsSection />
          <ProjectsSection />
          <ActivitiesSection />
          <ContactSection onPrintDossier={handlePrintDossier} />
        </main>

        <Footer />
      </div>

      {/* Admissions Dossier Print View (Optimized for 1-Click PDF Output) */}
      <DossierPrintView />

    </div>
  );
}
