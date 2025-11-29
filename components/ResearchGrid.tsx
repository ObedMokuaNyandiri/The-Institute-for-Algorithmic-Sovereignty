
import React, { useState } from 'react';
import { PAPERS, FEATURED_PAPERS } from '../constants';
import { SectionId } from '../types';

interface ResearchGridProps {
  onViewArchive: () => void;
  onPaperClick: (paperId: string) => void;
  onTagClick: (tag: string) => void;
}

const ResearchGrid: React.FC<ResearchGridProps> = ({ onViewArchive, onPaperClick, onTagClick }) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredPapers = FEATURED_PAPERS;

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredPapers.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredPapers.length) % featuredPapers.length);
  };

  const currentFeatured = featuredPapers[featuredIndex];

  return (
    <section id={SectionId.RESEARCH} className="bg-ias-paper"> 
      
      {/* Featured Section - Full Width Banner */}
      <div className="w-full bg-gradient-to-r from-ias-primary to-ias-ink text-white shadow-2xl overflow-hidden relative border-b border-ias-action/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 relative z-10">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-white/20 pb-6 relative z-10">
                <div>
                    <span className="text-ias-action font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">
                        Intelligence
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-0">Featured Analysis</h2>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <button onClick={prevFeatured} className="p-2 border border-white/20 hover:bg-white hover:text-ias-primary rounded-full transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg></button>
                    <button onClick={nextFeatured} className="p-2 border border-white/20 hover:bg-white hover:text-ias-primary rounded-full transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg></button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left: Compact Book Cover */}
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                    <div 
                        onClick={() => onPaperClick(currentFeatured.id)}
                        className="aspect-[3/4] w-48 md:w-60 bg-ias-slate relative shadow-2xl cursor-pointer group overflow-hidden border border-white/10 rounded-sm transform hover:scale-105 transition-transform duration-500"
                    >
                        {/* Dynamic Abstract Cover Art */}
                        <div className="absolute inset-0 opacity-40">
                            {featuredIndex === 0 && <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-ias-action to-transparent"></div>}
                            {featuredIndex === 1 && <div className="w-full h-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-ias-accent to-transparent"></div>}
                            {featuredIndex === 2 && <div className="w-full h-full border-[20px] border-white/10"></div>}
                        </div>
                        
                        <div className="absolute inset-0 p-5 flex flex-col justify-between">
                            <div className="w-8 h-8 flex items-center justify-center opacity-80">
                                {/* Small Shield Logo for Cover - Solid White */}
                                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="white"/>
                                    <circle cx="40" cy="32" r="9" fill="#1E3A8A"/>
                                    <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-serif text-lg leading-tight mb-1 drop-shadow-md line-clamp-3">{currentFeatured.title}</h3>
                                <p className="text-white/80 text-[10px] tracking-widest uppercase truncate">{currentFeatured.author}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white rounded-full backdrop-blur-sm">{currentFeatured.type}</span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">{currentFeatured.date}</span>
                    </div>
                    
                    <h3 
                        className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 cursor-pointer hover:text-ias-action transition-colors"
                        onClick={() => onPaperClick(currentFeatured.id)}
                    >
                        {currentFeatured.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-serif border-l-2 border-ias-action pl-6 line-clamp-3 max-w-3xl">
                        {currentFeatured.summary}
                    </p>
                    
                    <button 
                        onClick={() => onPaperClick(currentFeatured.id)}
                        className="bg-ias-action hover:bg-white hover:text-ias-primary text-white font-bold text-xs tracking-[0.15em] uppercase transition-all px-8 py-4 rounded-sm shadow-lg flex items-center gap-2 group"
                    >
                        Read Analysis
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ias-action/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ias-accent/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
     </div>

      {/* Latest Publications - High Fidelity Intel Dashboard - LIGHT SLATE THEME */}
      <div className="w-full bg-slate-100 py-32 relative overflow-hidden border-t border-ias-line">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div id="internal-research" className="scroll-mt-32">
                
                {/* Section Header */}
                <div className="flex justify-between items-baseline mb-16 border-b border-ias-line pb-6">
                    <div className="flex flex-col">
                    <span className="text-ias-action font-bold tracking-[0.2em] uppercase text-[10px] mb-2 pl-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-ias-primary animate-pulse"></span>
                        Institutional Repository
                    </span>
                    <h4 className="font-serif text-4xl text-ias-primary font-medium">Latest Publications</h4>
                    </div>
                    <button onClick={onViewArchive} className="text-xs font-bold tracking-widest uppercase bg-transparent border border-ias-primary text-ias-primary px-6 py-3 rounded-sm hover:bg-ias-primary hover:text-white transition-all duration-300 flex items-center gap-2">
                        View Archive <span>&rarr;</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PAPERS.slice(0, 6).map((paper) => (
                        <article 
                            key={paper.id} 
                            className="group cursor-pointer relative rounded-none overflow-hidden hover:-translate-y-2 transition-transform duration-500 shadow-xl hover:shadow-2xl bg-white border border-ias-line"
                            onClick={() => onPaperClick(paper.id)}
                        >
                            {/* Tech Accents - Top Gradient Line */}
                             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ias-primary to-ias-action opacity-80 group-hover:opacity-100 transition-opacity"></div>
                             
                            {/* Tech Accents - Corners - Sharp */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-ias-primary/10 rounded-none group-hover:border-ias-action transition-colors duration-300 z-20"></div>

                            <div className="relative z-10 p-8 flex flex-col h-full">
                                
                                {/* Meta Header */}
                                <div className="mb-6 flex items-center justify-between">
                                    <span className={`px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm border ${
                                    paper.type === 'Policy Brief' ? 'border-blue-100 text-ias-primary bg-blue-50' : 'border-teal-100 text-ias-accent bg-teal-50'
                                    }`}>
                                        {paper.type}
                                    </span>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ias-slate/60 group-hover:text-ias-primary transition-colors">
                                        {paper.date}
                                    </span>
                                </div>
                                
                                {/* Title - Deep Navy for Max Visibility on White */}
                                <h3 className="font-serif text-2xl text-ias-ink leading-tight mb-4 group-hover:text-ias-action transition-colors font-medium">
                                    {paper.title}
                                </h3>
                                
                                {/* Summary - Slate for Readability */}
                                <p className="text-ias-slate text-sm leading-relaxed mb-8 line-clamp-3 flex-grow font-sans font-light">
                                    {paper.summary}
                                </p>
                                
                                {/* Footer Tags */}
                                <div className="mt-auto pt-6 border-t border-ias-line flex flex-wrap gap-2 relative z-30">
                                    {paper.tags.map(tag => (
                                        <button 
                                            key={tag} 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onTagClick(tag);
                                            }}
                                            className="text-[10px] uppercase tracking-wider text-ias-slate font-bold bg-ias-paper px-2 py-1 rounded-sm border border-ias-line hover:text-white hover:bg-ias-action hover:border-ias-action transition-colors cursor-pointer"
                                        >
                                            #{tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchGrid;
