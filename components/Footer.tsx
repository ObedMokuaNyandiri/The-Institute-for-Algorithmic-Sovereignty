
import React from 'react';
import { SectionId } from '../types';

interface FooterProps {
  onNavigate: (target: string) => void;
  variant?: 'default' | 'compact' | 'aegis';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, variant = 'default' }) => {
  // Navigation helper to cleaner onClick handlers
  const nav = (target: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(target);
  };

  if (variant === 'aegis') {
    return (
      <footer className="bg-[#020617] text-white py-6 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-4">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
               System Status: Online
             </span>
          </div>

          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
             <div className="flex items-center gap-2" title="Generates deep analytical reports">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Synthesis
             </div>
             <div className="flex items-center gap-2" title="Simulates adversarial scenarios">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Red Teaming
             </div>
             <div className="flex items-center gap-2" title="Creates executive summaries">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Briefings
             </div>
             <div className="flex items-center gap-2" title="Finds verified sources">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Source Integrity
             </div>
          </div>

          <div className="text-[10px] text-slate-600 uppercase tracking-widest">
            IAS Secure Node V2.5
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="footer" className={`bg-[#020617] text-white relative overflow-hidden border-t border-slate-900 ${variant === 'compact' ? 'py-12' : 'pt-32 pb-16'}`}>
      
      {/* --- Ambient Effects --- */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
      
      {variant === 'default' && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      )}

      {/* Radial Spotlights */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {variant === 'default' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            
            {/* Column 1: Identity (5 Cols) */}
            <div className="md:col-span-5 space-y-8">
               <div className="cursor-pointer group inline-block" onClick={nav('home')}>
                  <svg className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="white"/>
                      <circle cx="40" cy="32" r="9" fill="#1E3A8A"/>
                      <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round"/>
                      <text x="95" y="58" fontFamily="serif" fontSize="52" fontWeight="bold" fill="white" letterSpacing="0.05em">IAS</text>
                  </svg>
               </div>
               <p className="text-slate-400 text-sm leading-relaxed font-light max-w-sm">
                 The Institute for Algorithmic Sovereignty is a research body dedicated to safeguarding the fundamental structures of the state and the mind against the asymmetrical risks of advanced computation.
               </p>
               <div className="flex items-center gap-3">
                  <div className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-500">
                    Est. 2023
                  </div>
                  <div className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-500">
                    Non-Aligned
                  </div>
               </div>
            </div>

            {/* Spacer (1 Col) - Hidden on mobile */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Column 2: Institute (3 Cols) */}
            <div className="md:col-span-3">
               <h4 className="font-serif text-lg text-white mb-6 border-b border-white/10 pb-2 inline-block">Institute</h4>
               <ul className="space-y-4 text-sm font-sans">
                   <li>
                       <button onClick={nav('home')} className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center gap-2 group">
                           <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                           Home
                       </button>
                   </li>
                   <li>
                       <button onClick={nav('about')} className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center gap-2 group">
                           <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                           About Us
                       </button>
                   </li>
                   <li>
                       <button onClick={nav(SectionId.MISSION)} className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center gap-2 group">
                           <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                           Mission
                       </button>
                   </li>
                   <li>
                       <button onClick={nav('internal-research')} className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center gap-2 group">
                           <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                           Research
                       </button>
                   </li>
                   <li>
                       <button onClick={nav('contact')} className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center gap-2 group">
                           <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                           Contact Us
                       </button>
                   </li>
               </ul>
            </div>

            {/* Column 3: System (3 Cols) */}
            <div className="md:col-span-3">
               <h4 className="font-serif text-lg text-white mb-6 border-b border-white/10 pb-2 inline-block">System</h4>
               <ul className="space-y-4 text-sm font-sans">
                   <li>
                       <button onClick={nav('aegis')} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 text-left group">
                           <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                           Aegis Analyst
                       </button>
                   </li>
                   <li><button onClick={nav('legal-privacy')} className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>Privacy Policy</button></li>
                   <li><button onClick={nav('legal-terms')} className="text-slate-400 hover:text-blue-400 transition-colors text-left flex items-center gap-2 group"><span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>Terms of Engagement</button></li>
                   <li>
                       <div className="flex items-center gap-2 text-slate-600 cursor-not-allowed opacity-50">
                           <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                           Admin Access (Locked)
                       </div>
                   </li>
               </ul>
            </div>

          </div>
        ) : (
            // Compact Mode Content
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                 <div className="flex items-center gap-4 cursor-pointer group" onClick={nav('home')}>
                      <svg className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="white"/>
                        <circle cx="40" cy="32" r="9" fill="#1E3A8A"/>
                        <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                      <div className="flex flex-col">
                        <span className="font-serif font-bold text-lg tracking-wide text-white leading-none">IAS</span>
                        <span className="text-[9px] uppercase tracking-widest text-slate-500">Official Secure Channel</span>
                      </div>
                 </div>
                 <div className="flex gap-8 mt-6 md:mt-0 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <button onClick={nav('home')} className="hover:text-white transition-colors">Home</button>
                    <button onClick={nav('about')} className="hover:text-white transition-colors">About Us</button>
                    <button onClick={nav('contact')} className="hover:text-white transition-colors">Contact Us</button>
                 </div>
            </div>
        )}

        {/* Bottom Bar */}
        <div className={`border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-600 font-medium`}>
          <p>&copy; {new Date().getFullYear()} Institute for Algorithmic Sovereignty. All Rights Reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
                System Status: <span className="text-green-500 font-bold shadow-[0_0_10px_rgba(34,197,94,0.4)]">Operational</span>
            </span>
            <span className="hidden md:inline text-slate-800">|</span>
            <span>Node: US-EAST-4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
