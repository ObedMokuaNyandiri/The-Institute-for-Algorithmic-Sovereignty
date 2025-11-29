
import React, { useState, useEffect } from 'react';
import { PAPERS } from '../constants';
import { Paper } from '../types';

interface ArchiveProps {
  onBack: () => void;
  initialSearchTerm?: string;
}

const Archive: React.FC<ArchiveProps> = ({ onBack, initialSearchTerm = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [selectedType, setSelectedType] = useState<string>('All');

  useEffect(() => {
    if (initialSearchTerm) {
      setSearchTerm(initialSearchTerm);
    }
  }, [initialSearchTerm]);

  const paperTypes = ['All', ...Array.from(new Set(PAPERS.map(p => p.type)))];

  const filteredPapers = PAPERS.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          paper.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'All' || paper.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleDownload = (paper: Paper) => {
    // Generate a formatted "document" to simulate a PDF download
    const content = `
INSTITUTE FOR ALGORITHMIC SOVEREIGNTY (IAS)
OFFICIAL POLICY DOCUMENT
================================================================

TITLE:          ${paper.title}
PUBLICATION:    ${paper.type}
DATE:           ${paper.date}
ID REF:         IAS-DOC-${paper.id.padStart(4, '0')}

================================================================

EXECUTIVE SUMMARY:
${paper.summary}

KEYWORDS:
${paper.tags.join(' | ')}

================================================================
© ${new Date().getFullYear()} Institute for Algorithmic Sovereignty.
This document is a digital representation for demonstration purposes.
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    const safeTitle = paper.title.replace(/[^a-z0-9]/gi, '_').toLowerCase().substring(0, 30);
    const filename = `IAS_Research_${paper.date.replace(' ', '')}_${safeTitle}.txt`;
    
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative overflow-hidden">
        
      {/* --- Background Architecture --- */}
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white via-white/80 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center justify-between">
            <button 
                onClick={onBack}
                className="group flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase text-ias-slate hover:text-ias-primary transition-colors"
            >
                <span className="w-8 h-8 border border-ias-line flex items-center justify-center bg-white group-hover:border-ias-primary transition-colors shadow-sm">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7 7-7" /></svg>
                </span>
                Return to Command
            </button>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-ias-slate/50">
                <span>SYSTEM_ID: IAS-REPO-V4</span>
                <span>•</span>
                <span className="text-green-600 font-bold">SECURE CONNECTION</span>
            </div>
        </div>

        {/* Header Block */}
        <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ias-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-md">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                Restricted Access Archive
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-ias-primary font-medium tracking-tight mb-6">
                Institutional Repository
            </h1>
            <p className="text-xl text-ias-slate max-w-3xl font-serif font-light leading-relaxed">
                Centralized access to high-fidelity risk analyses, policy briefs, and foresight papers. 
                All intelligence is verified for public dissemination.
            </p>
        </div>

        {/* System Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-y border-ias-line/60 py-6">
            <div className="px-4 border-r border-ias-line/60">
                <span className="block text-[10px] uppercase tracking-widest text-ias-slate/60 mb-1">Total Records</span>
                <span className="block text-2xl font-serif text-ias-ink">{PAPERS.length}</span>
            </div>
            <div className="px-4 border-r border-ias-line/60">
                <span className="block text-[10px] uppercase tracking-widest text-ias-slate/60 mb-1">Last Update</span>
                <span className="block text-2xl font-serif text-ias-ink">T-Minus 4h</span>
            </div>
            <div className="px-4 border-r border-ias-line/60">
                <span className="block text-[10px] uppercase tracking-widest text-ias-slate/60 mb-1">Clearance</span>
                <span className="block text-2xl font-serif text-ias-ink">Public</span>
            </div>
            <div className="px-4">
                <span className="block text-[10px] uppercase tracking-widest text-ias-slate/60 mb-1">Server Node</span>
                <span className="block text-2xl font-serif text-ias-ink">US-EAST-4</span>
            </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-6 shadow-lg border border-ias-line mb-10 flex flex-col lg:flex-row gap-6 items-center sticky top-24 z-30">
          
          {/* Search Input */}
          <div className="w-full lg:flex-1 relative group">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-ias-primary/40 group-focus-within:text-ias-action transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input 
              type="text"
              placeholder="SEARCH DATABASE :: KEYWORDS, TITLES, TAGS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 w-full p-4 border border-ias-line bg-slate-50 focus:bg-white text-sm font-bold tracking-wide text-ias-ink focus:outline-none focus:border-ias-primary focus:ring-1 focus:ring-ias-primary transition-all placeholder:text-ias-slate/40 placeholder:font-medium"
            />
          </div>
          
          {/* Filter Dropdown */}
          <div className="w-full lg:w-auto flex items-center gap-4">
            <span className="text-[10px] font-bold text-ias-slate uppercase tracking-widest whitespace-nowrap hidden md:block">Filter Protocol:</span>
            <div className="relative w-full md:w-64">
                <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full appearance-none p-4 pr-10 border border-ias-line bg-white text-sm font-bold text-ias-primary focus:outline-none focus:border-ias-primary cursor-pointer hover:bg-slate-50 transition-colors uppercase tracking-wide"
                >
                {paperTypes.map(type => (
                    <option key={type} value={type}>{type.toUpperCase()}</option>
                ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-ias-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </div>
          </div>
        </div>

        {/* Data Grid / Results */}
        <div className="space-y-4">
            {/* Header Row (Desktop) */}
            <div className="hidden md:grid grid-cols-12 gap-6 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-ias-slate/60 border-b border-ias-line">
                <div className="col-span-2">Date / ID</div>
                <div className="col-span-6">Intelligence Brief</div>
                <div className="col-span-2">Classification</div>
                <div className="col-span-2 text-right">Action</div>
            </div>

            {filteredPapers.length > 0 ? (
                filteredPapers.map((paper) => (
                    <article 
                        key={paper.id} 
                        className="group relative bg-white border border-ias-line hover:border-ias-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
                    >
                        {/* Hover Accent Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-ias-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 items-center">
                            
                            {/* Col 1: Meta */}
                            <div className="md:col-span-2 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-2">
                                <span className="text-xs font-bold text-ias-ink font-mono">{paper.date}</span>
                                <span className="text-[10px] text-ias-slate/50 font-mono tracking-wider">REF-{paper.id.padStart(4, '0')}</span>
                            </div>

                            {/* Col 2: Content */}
                            <div className="md:col-span-6">
                                <h3 
                                    onClick={() => handleDownload(paper)}
                                    className="font-serif text-xl md:text-2xl text-ias-primary font-bold mb-2 cursor-pointer group-hover:text-ias-action transition-colors leading-tight"
                                >
                                    {paper.title}
                                </h3>
                                <p className="text-sm text-ias-slate leading-relaxed line-clamp-2 font-light">
                                    {paper.summary}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {paper.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[9px] uppercase tracking-wider font-bold text-ias-slate/70 border border-ias-line px-1.5 py-0.5 bg-slate-50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Col 3: Type Badge */}
                            <div className="md:col-span-2 flex items-center">
                                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${
                                    paper.type === 'Policy Brief' ? 'border-blue-200 bg-blue-50 text-ias-primary' : 
                                    paper.type === 'Foresight Paper' ? 'border-teal-200 bg-teal-50 text-teal-800' :
                                    'border-gray-200 bg-gray-50 text-gray-700'
                                }`}>
                                    {paper.type}
                                </span>
                            </div>

                            {/* Col 4: Action */}
                            <div className="md:col-span-2 flex justify-end">
                                <button 
                                    onClick={() => handleDownload(paper)}
                                    className="px-6 py-3 bg-white border border-ias-primary text-ias-primary hover:bg-ias-primary hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-sm group-hover:shadow-md"
                                >
                                    <span>Access File</span>
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </button>
                            </div>

                        </div>
                    </article>
                ))
            ) : (
                <div className="p-20 text-center border border-dashed border-ias-line bg-white/50">
                    <svg className="w-12 h-12 text-ias-line mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-ias-primary font-serif text-xl mb-2">Query Returned No Intelligence</p>
                    <p className="text-ias-slate text-sm">Adjust filters or refine search parameters.</p>
                </div>
            )}
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 text-center">
             <p className="text-[10px] uppercase tracking-widest text-ias-slate/40">
                End of Classified Stream • IAS Secure Archive V4.2
             </p>
        </div>

      </div>
    </div>
  );
};

export default Archive;
