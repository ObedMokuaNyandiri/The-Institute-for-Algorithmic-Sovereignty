
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import ResearchGrid from './components/ResearchGrid';
import GovernanceAssistant from './components/GovernanceAssistant';
import Footer from './components/Footer';
import Archive from './components/Archive';
import PaperDetail from './components/PaperDetail';
import FeaturedPaperDetail from './components/FeaturedPaperDetail';
import About from './components/About';
import Contact from './components/Contact';
import Legal from './components/Legal';
import { SectionId, ViewState } from './types';
import { PAPERS, FEATURED_PAPERS } from './constants';

function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
  const [archiveSearchTerm, setArchiveSearchTerm] = useState<string>('');

  // Robust scrolling mechanism that handles view transition delays
  const scrollToSection = (sectionId: string) => {
    // 1. If target is 'home' (top), just scroll window
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 2. Try finding element immediately
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // 3. If view is changing, element might not exist yet. Poll for it.
    let attempts = 0;
    const maxAttempts = 10; // 1 second total
    const interval = setInterval(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        clearInterval(interval);
      } else {
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
          // Fallback: scroll to top if section not found
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const handleNavigation = (target: string) => {
    // Direct View Routes
    if (target === 'about') {
        setView('about');
        window.scrollTo(0, 0);
        return;
    }

    if (target === 'contact') {
        setView('contact');
        window.scrollTo(0, 0);
        return;
    }
    
    if (target === 'legal') {
        setView('legal');
        window.scrollTo(0, 0);
        return;
    }
    
    if (target === 'aegis') {
        setView('aegis');
        window.scrollTo(0, 0);
        return;
    }

    // Landing Page Sections
    if (view !== 'landing') {
      setView('landing');
      // We pass the target to scrollToSection which will poll until landing renders
      scrollToSection(target);
    } else {
      scrollToSection(target);
    }
  };

  const handleViewArchive = () => {
    setArchiveSearchTerm(''); // Clear previous searches
    setView('archive');
    window.scrollTo(0, 0);
  };

  const handlePaperClick = (paperId: string) => {
    setSelectedPaperId(paperId);
    setView('paper');
    window.scrollTo(0, 0);
  };

  const handleTagClick = (tag: string) => {
    setArchiveSearchTerm(tag);
    setView('archive');
    window.scrollTo(0, 0);
  };

  // Search in both internal and featured papers for the detail view
  const allPapers = [...PAPERS, ...FEATURED_PAPERS];
  const selectedPaper = allPapers.find(p => p.id === selectedPaperId);
  const isFeatured = FEATURED_PAPERS.some(p => p.id === selectedPaperId);

  // Determine Footer Variant
  let footerVariant: 'default' | 'compact' | 'aegis' = 'default';
  if (view === 'paper' || view === 'contact' || view === 'legal') {
    footerVariant = 'compact';
  } else if (view === 'aegis') {
    footerVariant = 'aegis';
  } else if (view === 'about') {
    footerVariant = 'default';
  }

  return (
    <div className="min-h-screen bg-ias-paper font-sans text-ias-ink selection:bg-ias-action selection:text-white">
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      
      {/* Hide standard Header on Contact & Legal pages as they have their own minimal headers */}
      {view !== 'contact' && view !== 'legal' && <Header onNavigate={handleNavigation} currentView={view} />}
      
      <main className="relative z-10">
        {view === 'landing' && (
          <>
            <Hero onNavigate={handleNavigation} />
            <Mission />
            <ResearchGrid 
              onViewArchive={handleViewArchive} 
              onPaperClick={handlePaperClick}
              onTagClick={handleTagClick}
            />
          </>
        )}
        
        {view === 'archive' && (
          <Archive 
            onBack={() => {
              setView('landing');
              scrollToSection(SectionId.RESEARCH);
            }} 
            initialSearchTerm={archiveSearchTerm}
          />
        )}

        {view === 'paper' && selectedPaper && (
          isFeatured ? (
            <FeaturedPaperDetail 
              paper={selectedPaper}
              onBack={() => {
                setView('landing');
                scrollToSection(SectionId.RESEARCH);
              }}
            />
          ) : (
            <PaperDetail 
              paper={selectedPaper}
              onBack={() => {
                setView('landing');
                scrollToSection(SectionId.RESEARCH);
              }}
            />
          )
        )}

        {view === 'about' && (
            <About onNavigate={handleNavigation} />
        )}

        {view === 'contact' && (
            <Contact onNavigate={handleNavigation} />
        )}
        
        {view === 'legal' && (
            <Legal onNavigate={handleNavigation} />
        )}
        
        {view === 'aegis' && (
            <GovernanceAssistant onNavigate={handleNavigation} />
        )}
      </main>
      
      {/* Dynamic Footer based on view */}
      {view !== 'about' && <Footer onNavigate={handleNavigation} variant={footerVariant} />}
    </div>
  );
}

export default App;
