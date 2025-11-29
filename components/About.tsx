
import React from 'react';
import { SectionId } from '../types';
import { FOUNDER_PROFILE } from '../constants';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-ias-paper pt-28 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
                <div className="h-[2px] w-12 bg-ias-primary"></div>
                <span className="text-ias-primary font-bold tracking-[0.25em] uppercase text-xs">
                    Institutional Identity
                </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-ias-ink leading-tight mb-8 font-medium animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              The Defense of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ias-primary to-blue-600">Human Agency.</span>
            </h1>
            <p className="text-xl md:text-2xl text-ias-slate leading-relaxed font-serif animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              The Institute for Algorithmic Sovereignty (IAS) is an independent research body dedicated to securing the foundations of national and human sovereignty in an era where artificial intelligence operates across borders, markets, information systems, and the human mind itself.
            </p>
        </div>
      </section>

      {/* The Unified Thesis */}
      <section className="bg-slate-900 py-24 mb-24 text-white relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-ias-primary/40 to-transparent pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

         <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                     <span className="text-blue-300 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Our Unifying Thesis
                     </span>
                     <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                        “Sovereignty<br/>Is Total.”
                     </h2>
                     <div className="w-24 h-1 bg-white mb-8"></div>
                     <p className="text-blue-100/80 text-lg leading-relaxed mb-8 font-light">
                        Most institutions study AI in fragments (ethics, safety, warfare, economics) while AI itself advances horizontally. Artificial intelligence does not respect categories. It affects defense, finance, identity, and cognition simultaneously.
                     </p>
                     <p className="text-white text-xl font-serif italic">
                        "If one domain falls, the others collapse."
                     </p>
                </div>
                <div>
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">A Nation Cannot Claim Sovereignty If:</h3>
                        <ul className="space-y-6">
                            {[
                                "Its borders are defended by foreign or unregulated autonomous systems.",
                                "Its economy is shaped by offshore algorithms that extract value.",
                                "Its citizens’ minds are influenced by synthetic persuasion systems.",
                                "Its infrastructure runs on code it does not control.",
                                "Its data is stored in jurisdictions it cannot reach."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="w-1.5 h-1.5 bg-red-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.8)]"></span>
                                    <span className="text-gray-300 font-light leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Founder's Vision - Balanced Text Only - Removed Image/Card Container */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 mb-32 relative z-10">
          <div className="text-center flex flex-col items-center">
             
             <svg className="w-10 h-10 text-ias-primary/40 mb-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703C7.91246 16 7.01703 16.8954 7.01703 18V21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16.017C14.9125 16 14.017 16.8954 14.017 18V21H21.017ZM24.017 12C24.017 5.37258 18.6444 0 12.017 0C5.38961 0 0.0170288 5.37258 0.0170288 12H24.017ZM8.01703 12H0.0170288C0.0170288 16.4183 3.59875 20 8.01703 20V12ZM16.017 12H24.017C24.017 16.4183 20.4353 20 16.017 20V12Z"></path>
             </svg>
             
             <blockquote className="font-serif text-3xl md:text-5xl text-ias-ink font-medium leading-tight mb-12 max-w-4xl">
                "{FOUNDER_PROFILE.quote}"
             </blockquote>
             
             <div className="flex flex-col items-center gap-3 animate-fadeInUp">
                <div className="w-12 h-[2px] bg-ias-action mb-4"></div>
                <cite className="text-sm font-bold uppercase tracking-[0.2em] text-ias-primary not-italic">
                   {FOUNDER_PROFILE.name}
                </cite>
                <span className="text-xs font-mono text-ias-slate uppercase tracking-wider">
                   {FOUNDER_PROFILE.role}
                </span>
             </div>
          </div>
      </section>

      {/* Directorates */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
         <div className="text-center mb-16">
            <span className="text-ias-action font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
               Structure & Operations
            </span>
            <h2 className="font-serif text-4xl text-ias-ink">Divisions & Directorates</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                {
                    title: "The Fiscal Stability Directorate",
                    focus: "Algorithmic economics, compute taxation, post-labor revenue models",
                    dossier: "The Automated Dividend: Taxing Compute to Fund the Post-Labor State",
                    color: "border-l-blue-600"
                },
                {
                    title: "The Defense Initiative",
                    focus: "Autonomous weapons, escalation risks, AI in geopolitics",
                    dossier: "Autonomous Escalation: A Treaty Framework for Non-Human Kill Chains",
                    color: "border-l-ias-primary"
                },
                {
                    title: "The Cognitive Security Lab",
                    focus: "Human-AI coexistence, hyper-persuasion, psychological sovereignty",
                    dossier: "The Erosion of Agency: Protecting Human Decision-Making in Synthetic Environments",
                    color: "border-l-teal-500"
                },
                {
                    title: "The Global South Autonomy Desk",
                    focus: "Digital sovereignty for emerging nations",
                    dossier: "Digital Decolonization: Why Emerging Nations Need Sovereign Cloud Infrastructure",
                    color: "border-l-indigo-500"
                }
            ].map((dept, i) => (
                <div key={i} className={`bg-white p-8 border border-ias-line shadow-sm hover:shadow-lg transition-shadow rounded-sm ${dept.color} border-l-4`}>
                    <h3 className="font-serif text-2xl text-ias-ink mb-2 font-medium">{dept.title}</h3>
                    <p className="text-ias-slate text-sm mb-6 font-medium">{dept.focus}</p>
                    <div className="bg-ias-paper p-4 border border-ias-line rounded-sm">
                        <span className="text-[10px] font-bold text-ias-action uppercase tracking-widest block mb-1">Flagship Dossier</span>
                        <span className="text-ias-ink font-serif italic font-medium">{dept.dossier}</span>
                    </div>
                </div>
            ))}
         </div>
      </section>

      {/* Mandate & Why We Exist */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
         <div className="bg-white p-12 border border-ias-line shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ias-primary via-ias-action to-ias-accent"></div>
            
            <h2 className="font-serif text-4xl text-ias-ink mb-8">Why IAS Exists</h2>
            <p className="text-lg text-ias-slate leading-relaxed mb-8 max-w-3xl mx-auto">
                AI is rapidly becoming the primary architecture of global power. Nations that fail to secure their algorithmic base will lose control over their defense decisions, economic destiny, and democratic processes.
            </p>
            <p className="text-2xl font-serif text-ias-primary font-bold mb-12">
                "IAS exists to ensure that human agency remains sovereign: over states, over systems, and over themselves."
            </p>
            
            <button 
                onClick={() => onNavigate('internal-research')}
                className="px-8 py-4 bg-ias-primary text-white font-bold text-xs tracking-[0.15em] uppercase hover:bg-ias-action transition-all shadow-lg"
            >
                Access Intelligence
            </button>
         </div>
      </section>

    </div>
  );
};

export default About;