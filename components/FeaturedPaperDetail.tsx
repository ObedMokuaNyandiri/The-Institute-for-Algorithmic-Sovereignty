
import React, { useEffect, useState } from 'react';
import { Paper, ContentBlock } from '../types';

interface FeaturedPaperDetailProps {
  paper: Paper;
  onBack: () => void;
}

const FeaturedPaperDetail: React.FC<FeaturedPaperDetailProps> = ({ paper, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine Hero Image based on ID or fallback
  const heroImage = paper.contentBlocks?.find(b => b.type === 'image')?.content || 
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop';

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'text':
        return (
          <div 
            key={index} 
            className="mb-8 text-xl leading-relaxed text-slate-800 font-serif prose prose-lg max-w-none prose-a:text-ias-action prose-a:font-bold prose-a:no-underline hover:prose-a:underline transition-all"
            dangerouslySetInnerHTML={{ __html: block.content }} 
          />
        );
      case 'quote':
        return (
          <div key={index} className="my-16 relative">
            <div className="absolute -top-10 -left-10 text-9xl text-ias-primary/10 font-serif leading-none select-none">“</div>
            <blockquote className="relative z-10 text-3xl md:text-4xl font-serif font-bold text-ias-primary leading-tight text-center px-4 md:px-12">
              {block.content}
            </blockquote>
             <div className="w-24 h-1 bg-ias-action mx-auto mt-8"></div>
          </div>
        );
      case 'heading':
        return (
           <h3 key={index} className="text-2xl font-bold uppercase tracking-widest text-ias-ink mt-16 mb-6 border-l-4 border-ias-action pl-4 font-sans">
             {block.content}
           </h3>
        );
      case 'image':
        // Skip the hero image if it appears in blocks
        if (index === 0) return null;
        return (
          <figure key={index} className="my-12 -mx-4 md:-mx-12">
            <img 
                src={block.content} 
                alt={block.caption || 'Analysis visualization'} 
                className="w-full h-auto object-cover shadow-2xl rounded-sm" 
            />
            {block.caption && (
                <figcaption className="mt-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
                    FIG {index}. {block.caption}
                </figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-ias-ink selection:bg-ias-primary selection:text-white">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-ias-action z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Hero Section - Cinematic */}
      <header className="relative h-[85vh] min-h-[600px] flex items-end justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            <img 
                src={heroImage} 
                alt="Background" 
                className="w-full h-full object-cover opacity-60 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-slate-900 opacity-80"></div>
        </div>

        {/* Navigation - Moved down to avoid header overlap */}
        <div className="absolute top-32 left-0 right-0 p-8 flex justify-between items-center z-50 pointer-events-none">
             <button 
                onClick={onBack}
                className="pointer-events-auto group flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 shadow-lg"
            >
                <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-ias-primary group-hover:scale-110 transition-transform">
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" /></svg>
                </span>
                Return to Intelligence Grid
            </button>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24 text-center">
            <div className="inline-flex items-center gap-2 mb-8 animate-fadeInUp">
                <span className="px-3 py-1 bg-ias-action text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm shadow-lg shadow-blue-500/20">
                    {paper.type}
                </span>
                <span className="h-px w-8 bg-white/40"></span>
                <span className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase">{paper.date}</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[0.95] mb-8 drop-shadow-2xl animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                {paper.title}
            </h1>

            <div className="flex flex-col items-center gap-4 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <p className="text-slate-300 font-serif italic text-xl md:text-2xl">
                    Analysis by <span className="text-white font-semibold not-italic">{paper.author}</span>
                </p>
            </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Sticky Sidebar (Meta) */}
        <aside className="lg:col-span-3 lg:col-start-1 relative hidden lg:block">
            <div className="sticky top-32 space-y-12 border-l border-slate-100 pl-8">
                
                <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Source</span>
                    <div className="font-serif text-lg text-ias-primary font-bold leading-tight">
                        {paper.author.includes('(') ? paper.author.split('(')[1].replace(')', '') : 'External Body'}
                    </div>
                </div>

                <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Intelligence Tags</span>
                    <div className="flex flex-wrap gap-2">
                        {paper.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Estimated Read</span>
                    <div className="font-mono text-sm text-slate-600">
                        12-15 Minutes
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                     <p className="text-xs text-slate-400 leading-relaxed italic">
                        This analysis is hosted externally. IAS provides this synthesis as part of our cognitive monitoring initiative.
                     </p>
                </div>

            </div>
        </aside>

        {/* Article Body */}
        <article className="lg:col-span-8 lg:col-start-4">
            
            {/* Executive Summary (Lead) */}
            <div className="mb-16">
                 <p className="text-2xl md:text-3xl leading-relaxed font-serif text-ias-ink font-medium drop-cap first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-bold first-letter:text-ias-primary first-letter:leading-[0.8]">
                    {paper.summary}
                 </p>
            </div>

            <div className="w-full h-px bg-slate-200 mb-16"></div>

            {/* Dynamic Content */}
            <div className="mb-20">
                 {paper.contentBlocks?.map((block, idx) => renderContentBlock(block, idx))}
            </div>

            {/* External Action Block */}
            <div className="bg-slate-50 border border-slate-200 p-10 md:p-16 text-center rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ias-primary to-ias-action"></div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-ias-action/5 rounded-full blur-3xl group-hover:bg-ias-action/10 transition-colors"></div>

                <h3 className="font-serif text-3xl text-ias-primary mb-6 font-bold">Access Full Intelligence</h3>
                <p className="text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
                    This report resides on an external node. By proceeding, you are navigating to the official repository of the source institution.
                </p>
                
                <a 
                    href={paper.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-ias-primary text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-ias-action transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-sm"
                >
                    Navigate to Source
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>

        </article>

      </main>

    </div>
  );
};

export default FeaturedPaperDetail;
