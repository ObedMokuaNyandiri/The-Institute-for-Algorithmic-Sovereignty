
import React from 'react';
import { SectionId } from '../types';

const Mission: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.MISSION} className="py-32 bg-slate-50 border-t border-ias-line relative z-10 overflow-hidden">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      {/* Gradient Transition: Stronger Blue Tint via-blue-50 to Slate */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50 to-slate-200 z-0"></div>
      
      {/* Radial Command Glow - Top Center - Increased Opacity for Visibility */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ias-action/15 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* Blueprint Grid: Tinted with Theme Navy (ias-primary) for branding alignment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0"></div>
      
      {/* Side Data Rails: Visible Framing */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-ias-primary/40 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-ias-primary/40 to-transparent"></div>


      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-ias-primary"></div>
                <span className="text-ias-primary font-bold tracking-[0.25em] uppercase text-xs">
                    Institutional Doctrine
                </span>
            </div>
            {/* Steel Gradient Text - Adjusted leading to fix descenders */}
            <h2 className="font-serif text-6xl md:text-8xl leading-tight pb-2 font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-ias-primary to-slate-800 drop-shadow-sm">
              Total<br />Sovereignty.
            </h2>
          </div>
          <div className="lg:col-span-6 pb-2">
            <div className="bg-white/80 backdrop-blur-sm p-8 border-l-4 border-ias-primary shadow-xl rounded-sm relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-ias-primary"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-ias-primary"></div>
                <p className="text-xl text-ias-ink leading-relaxed font-serif">
                 "We operate on the indivisibility premise: A nation is not sovereign if its borders are secure but its revenue is extracted by offshore algorithms, or if its economy is stable but its citizens' cognition is engineered by foreign code."
                </p>
            </div>
          </div>
        </div>

        {/* System Logic Connection Lines - The "Circuit" connecting Header to Domains */}
        <div className="hidden lg:flex justify-between items-start mb-8 px-[10%] opacity-40">
             <div className="w-[1px] h-12 bg-ias-primary"></div>
             <div className="w-[1px] h-12 bg-ias-primary"></div>
             <div className="w-[1px] h-12 bg-ias-primary"></div>
        </div>
        <div className="hidden lg:block w-full h-[1px] bg-ias-primary/20 mb-8 relative">
             <div className="absolute left-[16.66%] -top-1 w-2 h-2 bg-ias-primary rounded-full ring-4 ring-slate-50"></div>
             <div className="absolute left-[50%] -top-1 w-2 h-2 bg-ias-primary rounded-full ring-4 ring-slate-50"></div>
             <div className="absolute left-[83.33%] -top-1 w-2 h-2 bg-ias-primary rounded-full ring-4 ring-slate-50"></div>
        </div>


        {/* The Grid - Monoliths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Domain 1: Fiscal - Deep Navy Monolith */}
          <div className="group relative h-full bg-slate-900 overflow-hidden hover:-translate-y-3 transition-transform duration-500 shadow-2xl hover:shadow-ias-primary/50">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-ias-primary/90 to-slate-950 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Active Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-500 z-0"></div>

            {/* Scan Line Animation */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out z-20"></div>

            <div className="relative z-10 p-10 flex flex-col h-full">
                <div className="mb-auto">
                    <div className="flex justify-between items-start mb-8">
                        <div className="h-16 w-16 flex items-center justify-center bg-white/10 border border-white/10 backdrop-blur-md rounded-sm group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <span className="text-[10px] font-bold text-blue-200/60 uppercase tracking-widest border border-blue-200/20 px-2 py-1">System 01</span>
                    </div>
                    
                    <h3 className="font-serif text-4xl text-white mb-2">Fiscal</h3>
                    <div className="h-1 w-12 bg-blue-500 mb-6 group-hover:w-full transition-all duration-700"></div>
                    
                    <p className="text-blue-100/80 text-sm leading-relaxed font-light">
                    Defending national revenue against automated extraction and asymmetric computational arbitrage.
                    </p>
                </div>
                
                <div className="mt-10 pt-6 border-t border-white/10">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                             <span className="w-1.5 h-1.5 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
                             Algorithmic Taxation
                        </li>
                        <li className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 delay-75">
                             <span className="w-1.5 h-1.5 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
                             Sovereign Wealth Code
                        </li>
                    </ul>
                </div>
            </div>
          </div>

          {/* Domain 2: Territorial - Carbon/Obsidian Monolith */}
          <div className="group relative h-full bg-black overflow-hidden hover:-translate-y-3 transition-transform duration-500 shadow-2xl hover:shadow-gray-500/30">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-black z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-500 z-0"></div>

            {/* Scan Line Animation */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out z-20"></div>

            <div className="relative z-10 p-10 flex flex-col h-full">
                <div className="mb-auto">
                    <div className="flex justify-between items-start mb-8">
                        <div className="h-16 w-16 flex items-center justify-center bg-white/10 border border-white/10 backdrop-blur-md rounded-sm group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-lg">
                             <svg className="w-8 h-8 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-400/20 px-2 py-1">System 02</span>
                    </div>
                    
                    <h3 className="font-serif text-4xl text-white mb-2">Territorial</h3>
                    <div className="h-1 w-12 bg-white mb-6 group-hover:w-full transition-all duration-700"></div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Securing borders and escalation chains in an era of machine-speed conflict and autonomous systems.
                    </p>
                </div>
                
                <div className="mt-10 pt-6 border-t border-white/10">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                             <span className="w-1.5 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                             Non-Human Kill Chains
                        </li>
                        <li className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 delay-75">
                             <span className="w-1.5 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
                             Border Automation
                        </li>
                    </ul>
                </div>
            </div>
          </div>

          {/* Domain 3: Cognitive - Deep Teal Monolith */}
          <div className="group relative h-full bg-slate-900 overflow-hidden hover:-translate-y-3 transition-transform duration-500 shadow-2xl hover:shadow-teal-500/50">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-ias-accent/80 to-slate-950 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-400/20 to-transparent z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-500 z-0"></div>

            {/* Scan Line Animation */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-teal-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out z-20"></div>

            <div className="relative z-10 p-10 flex flex-col h-full">
                <div className="mb-auto">
                    <div className="flex justify-between items-start mb-8">
                        <div className="h-16 w-16 flex items-center justify-center bg-white/10 border border-white/10 backdrop-blur-md rounded-sm group-hover:bg-teal-500 group-hover:border-teal-400 transition-all duration-500 shadow-lg">
                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        </div>
                        <span className="text-[10px] font-bold text-teal-200/60 uppercase tracking-widest border border-teal-200/20 px-2 py-1">System 03</span>
                    </div>
                    
                    <h3 className="font-serif text-4xl text-white mb-2">Cognitive</h3>
                    <div className="h-1 w-12 bg-teal-500 mb-6 group-hover:w-full transition-all duration-700"></div>
                    
                    <p className="text-teal-100/80 text-sm leading-relaxed font-light">
                    Protecting human decision-making from targeted persuasion, synthetic media, and narrative warfare.
                    </p>
                </div>
                
                <div className="mt-10 pt-6 border-t border-white/10">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                             <span className="w-1.5 h-1.5 bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
                             Counter-Persuasion
                        </li>
                        <li className="flex items-center gap-3 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 delay-75">
                             <span className="w-1.5 h-1.5 bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
                             Mental Integrity
                        </li>
                    </ul>
                </div>
            </div>
          </div>

        </div>

        {/* Unified Frameworks CTA - Floating Interface */}
        <div className="mt-24 text-center">
            <a 
              href="#internal-research"
              onClick={(e) => handleNavClick(e, 'internal-research')}
              className="group relative inline-flex items-center gap-4 bg-white border border-ias-line px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-ias-primary overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 w-0 bg-ias-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative z-10">Access Unified Frameworks</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Mission;
