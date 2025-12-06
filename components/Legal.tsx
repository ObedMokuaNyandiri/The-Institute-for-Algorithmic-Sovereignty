
import React, { useEffect, useState } from 'react';

interface LegalProps {
  onNavigate: (sectionId: string) => void;
  initialTab?: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ onNavigate, initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo(0, 0);
  }, [initialTab]);

  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-ias-ink pt-24 pb-20 relative">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-12 border-b border-ias-line/60 pb-6">
                 <button 
                    onClick={() => onNavigate('landing')}
                    className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-ias-slate hover:text-ias-primary transition-colors"
                >
                    <span className="w-6 h-6 border border-ias-line flex items-center justify-center bg-white group-hover:border-ias-primary transition-colors shadow-sm">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7 7-7" /></svg>
                    </span>
                    Return to Command
                </button>
                <div className="hidden md:flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-ias-slate uppercase tracking-widest font-mono">Secure Connection</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Sidebar Navigation */}
                <div className="lg:col-span-3">
                    <div className="sticky top-32">
                        <h1 className="font-serif text-3xl text-ias-primary font-medium leading-tight mb-2">
                            Legal<br/>Framework
                        </h1>
                        <p className="text-sm text-ias-slate font-serif italic leading-relaxed mb-8 border-b border-ias-line/60 pb-8">
                            Governing the interaction between the individual and the Institute.
                        </p>

                        <nav className="flex flex-col space-y-2 mb-12">
                            <button 
                                onClick={() => setActiveTab('privacy')}
                                className={`w-full text-left px-5 py-4 text-xs font-bold uppercase tracking-widest border-l-2 transition-all duration-300 flex justify-between items-center group ${
                                    activeTab === 'privacy' 
                                    ? 'border-ias-primary text-ias-primary bg-white shadow-md' 
                                    : 'border-transparent text-ias-slate/60 hover:text-ias-ink hover:border-ias-line hover:bg-white/50'
                                }`}
                            >
                                <span>Privacy Policy</span>
                                {activeTab === 'privacy' && <span className="w-1.5 h-1.5 bg-ias-primary rounded-full"></span>}
                            </button>
                            <button 
                                onClick={() => setActiveTab('terms')}
                                className={`w-full text-left px-5 py-4 text-xs font-bold uppercase tracking-widest border-l-2 transition-all duration-300 flex justify-between items-center group ${
                                    activeTab === 'terms' 
                                    ? 'border-ias-primary text-ias-primary bg-white shadow-md' 
                                    : 'border-transparent text-ias-slate/60 hover:text-ias-ink hover:border-ias-line hover:bg-white/50'
                                }`}
                            >
                                <span>Terms of Engagement</span>
                                {activeTab === 'terms' && <span className="w-1.5 h-1.5 bg-ias-primary rounded-full"></span>}
                            </button>
                        </nav>

                        <div className="pt-6 border-t border-ias-line/60">
                             <span className="block text-[10px] font-bold uppercase tracking-widest text-ias-slate/40 mb-2">Effective Date</span>
                             <span className="font-mono text-xs text-ias-ink">{currentDate}</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-9">
                    <div className="bg-white border border-ias-line shadow-xl p-10 md:p-16 min-h-[600px] relative rounded-sm">
                        
                        {/* Top Decoration */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ias-primary via-blue-400 to-ias-primary"></div>
                        
                        {activeTab === 'privacy' && (
                            <div className="animate-fadeInUp">
                                <div className="mb-10 pb-6 border-b border-ias-line">
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="font-serif text-3xl md:text-4xl text-ias-ink font-medium">Privacy Policy</h2>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-ias-slate/40 font-mono hidden sm:block">REF: PRIV-01</span>
                                    </div>
                                    <p className="text-ias-slate font-serif italic text-lg">Data governance and security protocols.</p>
                                </div>

                                <div className="space-y-10 text-ias-slate">
                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">1. Overview</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                            This Privacy Policy describes how the Institute for Algorithmic Sovereignty (IAS) collects, uses, and safeguards information when you interact with our website and digital services.
                                        </p>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS is committed to the principles of data minimization, transparency, user autonomy, and responsible information governance. No personal data is collected beyond what is strictly necessary for secure and ethical site operation.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">2. Information We Collect</h3>
                                        <div className="pl-4 border-l-2 border-ias-line/50">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-ias-ink mb-2">A. Automatically Collected Information</h4>
                                            <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                                When you visit our website, standard technical data may be collected automatically. This includes browser type and version, device type and operating system, referring website, pages visited, engagement time, and approximate geolocation derived from IP addresses.
                                            </p>
                                            <p className="text-base leading-relaxed font-serif text-ias-ink mb-6">
                                                IAS does not use invasive tracking technologies, behavioral advertising scripts, or surveillance-based analytics.
                                            </p>

                                            <h4 className="text-xs font-bold uppercase tracking-wider text-ias-ink mb-2">B. Information You Provide Voluntarily</h4>
                                            <p className="text-base leading-relaxed font-serif text-ias-ink">
                                                If you contact IAS via email or submit information through provided channels, we may receive your name, email address, institutional affiliation, and the contents of your message or inquiry. We do not request or require sensitive personal information.
                                            </p>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">3. Data Usage Protocol</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                            IAS may use collected data to improve website security, stability, and performance; evaluate site engagement for research dissemination; respond to legitimate research or policy inquiries; and maintain audit logs for cybersecurity purposes.
                                        </p>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS strictly does not sell user data, profile individual visitors, share data with advertisers, or use personal information for automated decision-making.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">4. Security Infrastructure</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS employs industry-standard security measures to protect data, including HTTPS encryption, secure server configurations, access controls for administrative systems, and regular integrity checks. However, no digital system is fully immune to risk. IAS cannot guarantee absolute security of transmitted information.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">5. Retention Policy</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS retains user communications and technical logs only for as long as necessary to address inquiries, ensure system security, and conduct internal research analytics. Retention periods are minimized and reviewed regularly.
                                        </p>
                                    </section>
                                    
                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">6. Third-Party Systems</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS may use privacy-respecting third-party infrastructure providers for hosting, content delivery, and basic analytics. All such partners are required to uphold strong privacy and data-governance standards.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">7. Contact</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            For privacy, governance, or policy inquiries, please use the secure contact form available on our main communication channels.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        )}

                        {activeTab === 'terms' && (
                            <div className="animate-fadeInUp">
                                <div className="mb-10 pb-6 border-b border-ias-line">
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="font-serif text-3xl md:text-4xl text-ias-ink font-medium">Terms of Engagement</h2>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-ias-slate/40 font-mono hidden sm:block">REF: TERM-02</span>
                                    </div>
                                    <p className="text-ias-slate font-serif italic text-lg">Conditions of access and intellectual property rights.</p>
                                </div>

                                <div className="space-y-10 text-ias-slate">
                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">1. Purpose and Scope</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                            These Terms of Engagement govern all interactions with the Institute for Algorithmic Sovereignty (IAS) through this website, associated digital platforms, and any communication systems operated by the Institute. By accessing or using this site, you agree to comply with these terms.
                                        </p>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS is a non-governmental, independent research institution focused on the study of digital sovereignty, computational governance, autonomous systems, and the protection of human agency. This website is intended solely for informational, educational, analytical, and policy research purposes.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">2. Use of Content</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                            All content including articles, reports, briefs, analytical tools, graphics, datasets, and any AI-generated material is provided for informational and non-commercial use only.
                                        </p>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                            You may read, cite, and reference IAS materials; share links to pages or publications; and use excerpts for research, education, or policy work with proper attribution.
                                        </p>
                                        <div className="bg-slate-50 p-6 border border-ias-line">
                                            <p className="text-sm font-bold uppercase tracking-wide text-ias-slate mb-2">Prohibited Actions:</p>
                                            <ul className="list-disc pl-4 space-y-2 text-base font-serif text-ias-ink">
                                                <li>Republishing full IAS content without written authorization.</li>
                                                <li>Misrepresenting IAS authorship, analysis, or institutional positions.</li>
                                                <li>Using IAS materials for commercial advertising or product promotion.</li>
                                                <li>Creating derivative works that imply endorsement by the Institute.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">3. Institutional Disclaimer</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                            IAS provides research, analysis, and commentary on issues of technological governance. All content reflects the Institute's scholarly viewpoints at the time of publication.
                                        </p>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS does not provide legal, financial, or military advice; make operational recommendations for weapon systems; endorse specific vendors, governments, or political actors; or guarantee factual completeness of third-party sources. All material is provided "as is" for academic and policy purposes.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">4. User Responsibilities</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink mb-4">
                                            Users must engage with the site in a lawful, constructive, and respectful manner. You agree not to attempt unauthorized access to internal systems; upload malicious code, exploit scripts, or automated scraping tools; conduct surveillance, reconnaissance, or fingerprinting of infrastructure; or interfere with site integrity.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">5. Limitation of Liability</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            To the fullest extent permitted by law, IAS shall not be liable for any direct, indirect, incidental, or consequential damages; loss of data, revenue, or professional opportunities; or reliance on research or analysis published on this platform.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-ias-primary mb-4">6. Amendments</h3>
                                        <p className="text-base leading-relaxed font-serif text-ias-ink">
                                            IAS reserves the right to amend or update these Terms of Engagement at any time. Continued use of the website constitutes acceptance of revised terms.
                                        </p>
                                    </section>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Legal;
