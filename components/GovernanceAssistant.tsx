

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, AnalystTool } from '../types';
import { sendMessageToInstituteAI } from '../services/geminiService';
import { AEGIS_TOOLS } from '../constants';

interface GovernanceAssistantProps {
  onNavigate?: (section: string) => void;
}

const GovernanceAssistant: React.FC<GovernanceAssistantProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'secure' | 'processing'>('idle');
  const [activeTool, setActiveTool] = useState<AnalystTool>('synthesis');
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent, textInput: string = input) => {
    if (e) e.preventDefault();
    if (!textInput.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textInput };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setConnectionStatus('processing');

    try {
      const responseText = await sendMessageToInstituteAI(textInput, messages, activeTool);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setConnectionStatus('secure');
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. The Aegis System is attempting to re-establish the secure link." }]);
      setConnectionStatus('idle');
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleRefresh = () => {
    setMessages([]);
    setInput('');
    setConnectionStatus('idle');
    if (inputRef.current) {
        inputRef.current.focus();
    }
  };

  const formatInlineMarkdown = (text: string) => {
    let processed = text;
    processed = processed.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g, 
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-ias-action font-bold underline decoration-2 decoration-ias-action/30 hover:decoration-ias-action transition-all" title="Open Source Material">$1</a>'
    );
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ias-primary font-bold">$1</strong>');
    processed = processed.replace(/(?<!<[^>]*)\*(?![^<]*>)/g, '');
    return processed;
  };

  const renderMessageContent = (text: string) => {
    let cleanedText = text
      .replace(/MEMORANDUM[\s\S]*?(?:RE:|SUBJECT:)[\s\S]*?\n/i, '')
      .replace(/TO:.*?\nFROM:.*?\n/i, '')
      .replace(/^-{3,}$/gm, '') 
      .replace(/_{3,}/g, '')    
      .replace(/—/g, ' - ')     
      .replace(/#{1,6}\s?/g, '') 
      .replace(/Conclusion:?/gi, '')
      .replace(/Reference:\s*/gi, '') 
      .replace(/Source:\s*/gi, '')
      .replace(/Provenance Audit/gi, '')
      .replace(/Authority Level/gi, '')
      .replace(/Retrieval Intelligence/gi, '')
      .replace(/Bias Check/gi, '')
      .replace(/Search Operators/gi, '')
      .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F200}-\u{1F2FF}\u{2600}-\u{26FF}\u{2300}-\u{23FF}]/gu, '')
      .replace(/\n{3,}/g, '\n\n'); 
    
    cleanedText = cleanedText.trim();
    const parts = cleanedText.split('SUGGESTIONS:');
    const mainContent = parts[0];
    const suggestionsRaw = parts[1];

    const formattedText = mainContent
      .split('\n')
      .map((line, i) => {
        const animationStyle = { animationDelay: `${i * 40}ms`, opacity: 0, animationFillMode: 'forwards' };
        const animationClass = "animate-fadeInUp";

        if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
          const content = line.trim().substring(2);
          const formattedContent = formatInlineMarkdown(content);
          return (
            <li 
              key={i} 
              className={`ml-5 mb-3 list-disc pl-2 text-ias-ink font-serif text-lg leading-relaxed ${animationClass} marker:text-ias-action`} 
              style={animationStyle}
              dangerouslySetInnerHTML={{ __html: formattedContent }} 
            />
          );
        }
        
        if (line.trim() !== '') {
          const formattedContent = formatInlineMarkdown(line);
          return (
            <p 
              key={i} 
              className={`mb-5 leading-relaxed text-ias-ink font-serif text-lg ${animationClass}`} 
              style={animationStyle}
              dangerouslySetInnerHTML={{ __html: formattedContent }} 
            />
          );
        }
        return null;
      });

    let suggestionChips = null;
    if (suggestionsRaw) {
      const qs = suggestionsRaw
        .split('\n')
        .map(s => s.trim().replace(/^\[|\]$/g, ''))
        .filter(s => s.length > 5);

      if (qs.length > 0) {
        suggestionChips = (
          <div 
            className="mt-10 pt-6 border-t border-ias-line/50 animate-fadeInUp font-sans"
            style={{ animationDelay: `${(formattedText.length + 1) * 30}ms`, opacity: 0, animationFillMode: 'forwards' }}
          >
            <span className="text-[10px] font-bold text-ias-primary/60 mb-4 block flex items-center gap-2">
                <span className="w-1 h-1 bg-ias-action rounded-full"></span>
                Recommendations
            </span>
            <div className="flex flex-col gap-2">
              {qs.map((q, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleSend(undefined, q)}
                  className="text-left text-sm text-ias-action hover:text-ias-primary font-bold transition-all duration-200 py-3 px-5 border border-ias-line/50 rounded-md hover:bg-blue-50/50 hover:border-blue-200 flex items-center justify-between group bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md"
                >
                  <span>{q}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">&rarr;</span>
                </button>
              ))}
            </div>
          </div>
        );
      }
    }

    return (
      <div className="max-w-none">
        <div className="text-lg leading-8 font-serif text-ias-ink">
          {formattedText}
        </div>
        {suggestionChips}
      </div>
    );
  };

  const currentTool = AEGIS_TOOLS.find(t => t.id === activeTool) || AEGIS_TOOLS[0];

  return (
    <div className="min-h-screen bg-slate-50 relative flex flex-col pt-24 pb-0">
      
      {/* --- Ambient Lighting & Texture --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>
      
      {/* Dynamic Aurora Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full max-h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent blur-3xl z-0 pointer-events-none"></div>

      {/* Main Container - Full Height Layout */}
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-10 mb-8">
        
        {/* Return to Home Link */}
        {onNavigate && (
          <button 
            onClick={() => onNavigate('landing')}
            className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-ias-slate hover:text-ias-primary transition-colors mb-6 self-start"
          >
            <span className="w-6 h-6 border border-ias-line flex items-center justify-center bg-white group-hover:border-ias-primary transition-colors shadow-sm">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7 7-7" /></svg>
            </span>
            Return to Command
          </button>
        )}

        {/* --- Section Header --- */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-6">
             <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ias-primary/10 bg-white/80 backdrop-blur-md mb-4 shadow-sm">
                    <span className={`w-2 h-2 rounded-full ${connectionStatus === 'processing' ? 'bg-amber-400 animate-ping' : 'bg-green-500 animate-pulse'}`}></span>
                    <span className="text-[10px] font-bold text-ias-primary uppercase tracking-[0.25em]">Secure Environment</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl text-ias-primary font-medium tracking-tight">Interactive Intelligence</h1>
                <p className="text-ias-slate mt-2 max-w-xl text-sm font-medium">
                  A dedicated environment for high-fidelity policy synthesis, adversarial red-teaming, and verified intelligence retrieval.
                </p>
             </div>
             
             {/* Quick Feature Legend */}
             <div className="hidden lg:flex gap-4">
                 {AEGIS_TOOLS.map(tool => (
                    <div key={tool.id} className={`flex flex-col items-center p-3 rounded-md border transition-all ${activeTool === tool.id ? 'bg-white border-ias-primary shadow-md scale-105' : 'bg-white/50 border-transparent opacity-70'}`}>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-ias-slate mb-1">{tool.label}</span>
                        <span className="text-[9px] text-ias-slate/60 text-center max-w-[80px] leading-tight">{tool.desc.split(' ')[0]} {tool.desc.split(' ')[1]}</span>
                    </div>
                 ))}
             </div>
        </div>

        {/* --- Main Command Terminal --- */}
        <div className={`flex-1 min-h-[600px] flex flex-col relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-lg border border-ias-line transition-all duration-500 overflow-hidden ${isFocused ? 'ring-2 ring-ias-action/10' : ''}`}>
            
            <div className="flex-1 flex flex-row relative overflow-hidden">
                
                <div className="flex-1 flex flex-col relative bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden">
                    {/* Terminal Header */}
                    <div className="h-16 flex-none bg-white/90 backdrop-blur-md border-b border-ias-line/80 z-20 flex items-center justify-between px-6 md:px-10 shadow-sm">
                        <div className="flex items-center gap-5">
                            <div className="w-9 h-9 bg-ias-primary flex items-center justify-center rounded-lg shadow-lg shadow-blue-900/20">
                                <svg className="w-5 h-5" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="#1E3A8A"/>
                                    <circle cx="40" cy="32" r="9" fill="white"/>
                                    <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-ias-primary uppercase tracking-widest flex items-center gap-2">
                                    Aegis Command Node
                                    <span className={`px-1.5 py-0.5 rounded text-[8px] ${activeTool === 'red-team' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                        {activeTool === 'synthesis' ? 'ONLINE' : `PROTOCOL: ${currentTool.label.toUpperCase()}`}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={handleRefresh}
                                className="text-[9px] font-bold text-ias-slate hover:text-white bg-slate-100 hover:bg-ias-primary uppercase tracking-[0.15em] border border-ias-line px-4 py-2 rounded-md transition-all duration-300 shadow-sm"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Chat Stream */}
                    <div 
                        ref={scrollContainerRef}
                        className="flex-1 overflow-y-auto px-6 md:px-20 lg:px-40 pt-10 space-y-10 scroll-smooth"
                    >
                        {messages.length === 0 ? (
                            /* Empty State */
                            <div className="h-full flex flex-col items-center justify-center text-center animate-fadeInUp pb-12">
                                <div className="relative mb-10 group cursor-default">
                                    <div className="w-24 h-24 bg-white flex items-center justify-center rounded-2xl shadow-[0_0_40px_-5px_rgba(30,58,138,0.15)] border border-ias-line relative z-10">
                                        <svg className="w-14 h-14" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="#1E3A8A"/>
                                            <circle cx="40" cy="32" r="9" fill="white"/>
                                            <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-serif text-ias-primary mb-4 font-medium tracking-tight">
                                    Aegis is online. What shall we explore?
                                </h3>
                                <p className="text-ias-slate text-sm mb-8 font-medium max-w-md mx-auto leading-relaxed">
                                    I am designed to help you navigate the complex future of technology and power. 
                                    Select a tool below or pick a question to see what I can do.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
                                    {[
                                        "How is AI changing who holds power in the world?",
                                        "What happens when machines make decisions instead of humans?",
                                        "Why is 'data sovereignty' so important right now?",
                                        "Draft a simple strategy to protect against deepfakes."
                                    ].map((q, i) => (
                                        <button 
                                            key={i} 
                                            onClick={(e) => handleSend(e, q)} 
                                            className="p-4 bg-white/60 backdrop-blur-sm border border-ias-line hover:border-ias-action/50 hover:bg-white hover:shadow-md text-left transition-all duration-300 rounded-lg group"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-ias-ink font-bold group-hover:text-ias-primary transition-colors pr-2">{q}</span>
                                                <svg className="w-3 h-3 text-ias-action opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <>
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex gap-6 md:gap-8 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className="flex-shrink-0 mt-2">
                                        {msg.role === 'user' ? (
                                            <div className="w-8 h-8 bg-slate-200 border border-slate-300 flex items-center justify-center rounded-lg">
                                                <span className="text-[10px] font-bold text-ias-slate">USR</span>
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 bg-ias-primary flex items-center justify-center shadow-md rounded-lg border border-white/20 relative z-10">
                                                <svg className="w-6 h-6" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="white"/>
                                                    <circle cx="40" cy="32" r="9" fill="white"/>
                                                    <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round"/>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`flex-1 max-w-4xl ${msg.role === 'user' ? 'text-right' : ''}`}>
                                        {msg.role === 'user' ? (
                                            <div className="inline-block bg-white px-6 py-4 rounded-2xl rounded-tr-none text-md text-ias-ink font-sans leading-relaxed border border-ias-line shadow-sm">
                                                {msg.text}
                                            </div>
                                        ) : (
                                            <div className="bg-transparent pl-2 pt-1">
                                                <div className="flex items-center gap-3 mb-4 opacity-60">
                                                    <span className="text-[9px] font-bold text-ias-primary uppercase tracking-[0.2em]">Aegis Analyst</span>
                                                    <div className="h-[1px] w-12 bg-ias-line"></div>
                                                </div>
                                                {renderMessageContent(msg.text)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-8">
                                    <div className="w-10 h-10 bg-white border border-ias-line flex items-center justify-center rounded-lg">
                                        <div className="w-4 h-4 border-2 border-ias-action border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                    <div className="flex items-center gap-3 mt-3 px-4 py-2 bg-white/50 rounded-lg border border-ias-line/50">
                                        <span className="text-[10px] font-bold text-ias-slate uppercase tracking-widest animate-pulse">Synthesizing...</span>
                                    </div>
                                </div>
                            )}
                            </>
                        )}
                    </div>

                    {/* Input Area with Research Tools Toolbar */}
                    <div className="flex-none p-6 z-30 mt-auto bg-gradient-to-t from-white via-white/95 to-transparent border-t border-ias-line/30">
                        
                        {/* Research Protocol Toolbar */}
                        <div className="max-w-4xl mx-auto mb-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                             {AEGIS_TOOLS.map(tool => (
                                 <button
                                    key={tool.id}
                                    onClick={() => setActiveTool(tool.id)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                                        activeTool === tool.id 
                                        ? 'bg-ias-primary text-white border-ias-primary shadow-md' 
                                        : 'bg-white text-ias-slate border-ias-line hover:border-ias-action hover:text-ias-action'
                                    }`}
                                    title={tool.desc}
                                 >
                                     <span className={`w-1.5 h-1.5 rounded-full ${activeTool === tool.id ? 'bg-white animate-pulse' : 'bg-ias-slate/30'}`}></span>
                                     {tool.label}
                                 </button>
                             ))}
                        </div>

                        <form 
                            onSubmit={(e) => handleSend(e)}
                            className={`max-w-4xl mx-auto relative group transition-all duration-300`}
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r from-ias-action/20 to-ias-primary/20 rounded-xl blur opacity-0 pointer-events-none transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'group-hover:opacity-50'}`}></div>
                            
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                disabled={isLoading}
                                enterKeyHint="send"
                                placeholder={currentTool.placeholder}
                                className="w-full bg-white border border-ias-line/80 focus:border-ias-action focus:ring-0 p-4 pr-16 text-ias-ink placeholder-ias-slate/40 focus:outline-none transition-all duration-300 rounded-lg font-medium text-base shadow-lg disabled:opacity-70 disabled:bg-slate-50 relative z-10"
                            />
                            
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 z-20">
                                {isLoading ? (
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-ias-slate/30 border-t-ias-primary rounded-full animate-spin"></div>
                                    </div>
                                ) : (
                                    <button 
                                        type="submit"
                                        disabled={!input.trim()}
                                        className="w-9 h-9 bg-ias-primary text-white hover:bg-ias-action disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 rounded-md shadow-md flex items-center justify-center"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </form>
                        <div className="text-center mt-2 flex justify-center gap-4">
                            <span className="text-[9px] font-bold text-ias-slate/30 uppercase tracking-[0.2em] font-mono">End-to-End Encryption</span>
                        </div>
                    </div>
                </div>

                {/* Right Status Rail - Fixed Width */}
                <div className="hidden lg:flex w-16 border-l border-ias-line/80 bg-slate-50/50 flex-col items-center py-6 gap-6 flex-none">
                    <div className="flex flex-col gap-1 items-center">
                        <div className={`w-1.5 h-1.5 rounded-full ${connectionStatus === 'secure' ? 'bg-green-500' : 'bg-amber-400'}`}></div>
                    </div>
                    <div className="h-[1px] w-6 bg-ias-line"></div>
                    <div className="flex flex-col gap-1.5 flex-1 justify-center">
                        {[1,2,3,4,5,6].map(i => (
                            <div key={i} className={`w-0.5 h-6 rounded-full bg-ias-line/50 transition-all duration-500 ${isLoading ? 'animate-pulse bg-ias-action/50' : ''}`} style={{ animationDelay: `${i * 100}ms` }}></div>
                        ))}
                    </div>
                    <div className="h-[1px] w-6 bg-ias-line"></div>
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-[8px] font-bold text-ias-slate/50 uppercase writing-mode-vertical rotate-180">CPU</span>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceAssistant;
