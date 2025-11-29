
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  onNavigate: (sectionId: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSending(true);

    // Hardcoded credentials
    emailjs.sendForm(
      'service_t0i4op9',
      'template_iktkfw5',
      formRef.current,
      'EtzUYKnW_mUWa0xYQ'
    )
    .then((result) => {
        setIsSending(false);
        setIsSuccess(true);
        if (formRef.current) formRef.current.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
        setIsSending(false);
        alert('Message failed to send. Please check your internet connection.');
        console.error('EmailJS Error:', error);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden font-sans text-ias-ink">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      {/* Simplified Header */}
      <div className="relative z-50 px-6 sm:px-8 py-8 flex justify-between items-center max-w-7xl mx-auto w-full">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('landing')}
          >
             <svg className="h-10 w-auto" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="#1E3A8A"/>
                <circle cx="40" cy="32" r="9" fill="white"/>
                <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                <text x="95" y="58" fontFamily="serif" fontSize="52" fontWeight="bold" fill="#1E3A8A" letterSpacing="0.05em">IAS</text>
             </svg>
          </div>
          
          <button 
            onClick={() => onNavigate('landing')}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-ias-line rounded-sm hover:border-ias-primary transition-colors text-xs font-bold uppercase tracking-widest text-ias-slate hover:text-ias-primary shadow-sm"
          >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" /></svg>
             Back to Main Page
          </button>
      </div>

      <main className="flex-grow flex items-center justify-center relative z-10 px-6 py-12">
         <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-5 order-2 lg:order-1">
               <div className="mb-10">
                   <h1 className="font-serif text-5xl md:text-6xl text-ias-primary mb-6 leading-tight">
                       Connect with<br/>the Institute.
                   </h1>
                   <div className="w-16 h-1 bg-ias-action mb-8"></div>
                   <p className="text-lg text-ias-slate leading-relaxed font-light">
                       We are here to answer your questions. Whether you are interested in our research, looking for partnership opportunities, or just want to say hello, fill out the form and we will get back to you.
                   </p>
               </div>

               <div className="space-y-6">
                   <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-ias-primary">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       </div>
                       <div>
                           <span className="block text-xs font-bold uppercase tracking-widest text-ias-slate/60 mb-1">Response Time</span>
                           <span className="block text-base font-medium text-ias-ink">Typically within 2-3 business days</span>
                       </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-ias-primary">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                       </div>
                       <div>
                           <span className="block text-xs font-bold uppercase tracking-widest text-ias-slate/60 mb-1">Location</span>
                           <span className="block text-base font-medium text-ias-ink">Global Operations / Nairobi HQ</span>
                       </div>
                   </div>

                   <div className="pt-8">
                       <button 
                            onClick={() => onNavigate('landing')}
                            className="md:hidden w-full py-3 bg-white border border-ias-line rounded-sm text-xs font-bold uppercase tracking-widest text-ias-slate hover:text-ias-primary hover:border-ias-primary shadow-sm flex items-center justify-center gap-2"
                       >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" /></svg>
                            Back to Main Page
                       </button>
                   </div>
               </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7 w-full order-1 lg:order-2">
                <div className="bg-white p-8 md:p-12 border border-ias-line shadow-xl rounded-sm relative overflow-hidden">
                    {/* Top Decor Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ias-primary via-ias-action to-ias-primary"></div>
                    
                    <h2 className="font-serif text-2xl text-ias-ink mb-8 font-medium">Send a Message</h2>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-ias-slate mb-2">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    required 
                                    placeholder="e.g. David Hawkins" 
                                    className="w-full bg-slate-50 border border-ias-line p-4 text-ias-ink placeholder-ias-slate/40 focus:outline-none focus:border-ias-primary focus:ring-1 focus:ring-ias-primary transition-all rounded-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-xs font-bold uppercase tracking-widest text-ias-slate mb-2">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    name="user_email"
                                    id="user_email" 
                                    required 
                                    placeholder="e.g. david@example.com" 
                                    className="w-full bg-slate-50 border border-ias-line p-4 text-ias-ink placeholder-ias-slate/40 focus:outline-none focus:border-ias-primary focus:ring-1 focus:ring-ias-primary transition-all rounded-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-ias-slate mb-2">
                                How can we help?
                            </label>
                            <textarea 
                                name="message" 
                                id="message"
                                required 
                                rows={6} 
                                placeholder="Type your message here..." 
                                className="w-full bg-slate-50 border border-ias-line p-4 text-ias-ink placeholder-ias-slate/40 focus:outline-none focus:border-ias-primary focus:ring-1 focus:ring-ias-primary transition-all rounded-sm resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSending}
                            className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md flex items-center justify-center gap-3 rounded-sm ${
                                isSending 
                                ? 'bg-ias-slate text-white cursor-wait' 
                                : 'bg-ias-primary text-white hover:bg-ias-action hover:shadow-lg hover:-translate-y-0.5'
                            }`}
                        >
                            {isSending ? (
                                <>
                                    <span>Sending...</span>
                                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Success Notification Overlay */}
                    <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 z-10 ${isSuccess ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <div className="text-center p-8 max-w-sm">
                            <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="font-serif text-2xl text-ias-ink mb-3 font-medium">Message Sent</h3>
                            <p className="text-ias-slate text-sm leading-relaxed mb-8">
                                Thank you for contacting the Institute. We have received your message and will be in touch shortly.
                            </p>
                            <button 
                                onClick={() => setIsSuccess(false)}
                                className="px-6 py-2 bg-ias-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-ias-action transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>

                </div>
            </div>
         </div>
      </main>
    </div>
  );
};

export default Contact;
