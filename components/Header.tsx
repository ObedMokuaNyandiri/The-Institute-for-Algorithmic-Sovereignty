

import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { SectionId, ViewState } from '../types';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Handle Background Blur transparency logic
      setScrolled(currentScrollY > 20);

      // 2. Handle Hiding Logic for Aegis Section (ONLY if we are on landing page)
      // Since Aegis is now a separate page, we don't need to hide the header when scrolling near it on landing.
      // However, if there are other triggers, we can keep them.
      // For now, we always show the header on other pages.
      
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    onNavigate(targetId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-ias-surface/90 backdrop-blur-md border-b border-ias-line py-3 shadow-md' : 'bg-transparent py-6'
      } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo - Routes to About */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('about')}
            title="About the Institute"
          >
             <svg className="h-14 w-auto" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield Icon - Solid Fill */}
                <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="#1E3A8A"/>
                
                {/* Person / Node Icon inside Shield - White Negative Space */}
                <circle cx="40" cy="32" r="9" fill="white"/>
                <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                
                {/* Text: IAS */}
                <text x="95" y="58" fontFamily="serif" fontSize="52" fontWeight="bold" fill="#1E3A8A" letterSpacing="0.05em">IAS</text>
                
                {/* Text: Full Name */}
                <text x="200" y="32" fontFamily="serif" fontSize="15" fontWeight="bold" fill="#0F172A">Institute for</text>
                <text x="200" y="49" fontFamily="serif" fontSize="15" fontWeight="bold" fill="#0F172A">Algorithmic</text>
                <text x="200" y="66" fontFamily="serif" fontSize="15" fontWeight="bold" fill="#0F172A">Sovereignty</text>
             </svg>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-bold tracking-[0.15em] uppercase text-ias-slate hover:text-ias-action transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-ias-action transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ias-ink hover:text-ias-action focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-ias-surface border-b border-ias-line absolute top-full left-0 right-0 shadow-xl">
          <div className="px-6 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-sm font-bold tracking-widest text-ias-ink hover:text-ias-action uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
