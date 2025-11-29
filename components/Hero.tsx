

import React from 'react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    onNavigate(target);
  };

  return (
    <section id={SectionId.HOME} className="relative pt-40 pb-32 min-h-screen flex items-center overflow-hidden bg-slate-50">
      
      {/* --- LAYER 1: Base & Horizon Glow --- */}
      <div className="absolute inset-0 bg-white z-0"></div>
      {/* Bottom Horizon Glow - Strengthened for visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-transparent opacity-100 z-0 pointer-events-none"></div>
      
      {/* --- LAYER 2: Digital Topography (The Territory) --- */}
      {/* Increased opacity from 0.03 to 0.07 for visibility */}
      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             maskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)' 
           }}>
      </div>

      {/* --- LAYER 3: The Grid (Perspective) --- */}
      {/* Darkened lines slightly for contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0 transform perspective-[2000px] rotate-x-12 scale-110 origin-top"></div>

      {/* --- LAYER 4: Active Nodes (Animation) --- */}
      {/* Strengthened colors to make them visible against the white background */}
      <div className="absolute top-20 right-0 -mr-20 w-[600px] h-[600px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 w-[500px] h-[500px] bg-teal-200/30 rounded-full mix-blend-multiply filter blur-[60px] opacity-70 animate-blob pointer-events-none"></div>


      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ias-primary/20 bg-white/80 backdrop-blur-md mb-10 animate-fadeInUp shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ias-action opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ias-primary"></span>
            </span>
            <span className="text-[11px] font-bold text-ias-primary tracking-[0.2em] uppercase">Global Defense Initiative</span>
          </div>

          {/* Headline - Removed underline SVG */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-ias-ink leading-tight mb-8 tracking-tight text-balance animate-fadeInUp drop-shadow-sm" style={{ animationDelay: '100ms' }}>
             Securing the <span className="text-transparent bg-clip-text bg-gradient-to-br from-ias-primary to-blue-600 relative inline-block pb-3">
               Sovereignty
             </span> of Nations.
          </h1>

          {/* Subheadline Fragment */}
          <div className="mb-10 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
             <p className="text-xl md:text-3xl font-serif italic text-ias-slate font-medium">
                "And the agency of individuals against the destabilizing forces of artificial intelligence."
             </p>
          </div>

          {/* Psychological Hook Text - High Contrast */}
          <div className="text-lg md:text-xl text-ias-slate/90 max-w-3xl mx-auto leading-relaxed mb-16 text-balance font-sans font-normal animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <p>
              Power has migrated from physical borders to bandwidth. The invisible architecture of control is being built around us right now, determining the future of defense, economics, and human cognition.
            </p>
            <br/>
            <span className="text-ias-primary font-semibold relative">
              Will you govern the machine, or be governed by it?
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <a 
              href="#internal-research"
              onClick={(e) => handleNavClick(e, 'internal-research')}
              className="px-10 py-5 bg-ias-primary text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-ias-action transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-sm border-t border-white/10 relative overflow-hidden group"
            >
              <span className="relative z-10">Access Repository</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
            <a 
              href="#aegis"
              onClick={(e) => handleNavClick(e, 'aegis')}
              className="px-10 py-5 bg-white/80 backdrop-blur-sm border border-ias-line text-ias-primary text-xs font-bold tracking-[0.15em] uppercase hover:border-ias-primary hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl rounded-sm"
            >
              Engage Aegis System
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;