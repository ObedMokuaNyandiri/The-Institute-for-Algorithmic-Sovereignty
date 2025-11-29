
import React from 'react';
import { Paper, ContentBlock } from '../types';

interface PaperDetailProps {
  paper: Paper;
  onBack: () => void;
}

const PaperDetail: React.FC<PaperDetailProps> = ({ paper, onBack }) => {
  
  // Logic to simulate the content of the PDF viewer
  const openInternalDocumentViewer = () => {
    const viewerWindow = window.open('', '_blank');
    if (!viewerWindow) {
      alert('Please allow popups to view the document.');
      return;
    }

    // --- CUSTOM LAYOUT FOR PAPER ID '4' (HUMAN RIGHTS - MONOCHROME/LEGAL) ---
    if (paper.id === '4') {
        const rightsHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>HUMAN RIGHTS REPORT: ${paper.title}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Helvetica+Neue:wght@400;500;700&display=swap');
            body { background-color: #525252; margin: 0; font-family: 'Merriweather', serif; }
            .page {
              background: white;
              width: 210mm;
              min-height: 297mm;
              padding: 0;
              margin: 40px auto;
              box-shadow: 0 0 50px rgba(0,0,0,0.5);
              position: relative;
              box-sizing: border-box;
            }
            .cover-page {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 30mm;
                text-align: center;
                border-top: 20px solid black;
                border-bottom: 20px solid black;
            }
            .content-page {
                padding: 25mm 25mm;
            }
            .report-header {
                font-family: 'Helvetica Neue', sans-serif;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #666;
                border-bottom: 1px solid #ddd;
                padding-bottom: 10px;
                margin-bottom: 30px;
                display: flex;
                justify-content: space-between;
            }
            .chapter-heading {
                font-family: 'Helvetica Neue', sans-serif;
                font-size: 18px;
                font-weight: 700;
                text-transform: uppercase;
                margin-top: 40px;
                margin-bottom: 20px;
                color: black;
                border-left: 5px solid black;
                padding-left: 15px;
            }
            p {
                font-size: 11pt;
                line-height: 1.6;
                text-align: justify;
                margin-bottom: 15px;
                color: #333;
            }
            @media print {
              body { background: none; }
              .no-print { display: none !important; }
              .page { margin: 0; box-shadow: none; page-break-after: always; width: 100%; }
            }
          </style>
        </head>
        <body>
          <!-- Toolbar -->
          <div class="no-print fixed top-0 left-0 right-0 h-16 bg-black flex items-center justify-between px-6 shadow-md z-50 text-white border-b border-gray-800">
            <div class="flex items-center gap-4">
               <span class="bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-widest">Official Report</span>
               <span class="font-sans text-sm tracking-wider">UN-STYLE FORMAT // ID-04</span>
            </div>
            <button onclick="window.close()" class="text-gray-400 hover:text-white uppercase text-xs tracking-widest">Close Viewer</button>
          </div>
          <div class="h-16 no-print"></div>

          <!-- PAGE 1: COVER -->
          <div class="page cover-page">
             <div class="mb-12">
                <span class="block text-sm font-bold uppercase tracking-[0.3em] mb-4">Institute for Algorithmic Sovereignty</span>
                <span class="block text-xs font-serif italic text-gray-500">Human Rights Directorate</span>
             </div>
             
             <h1 class="text-4xl font-bold text-black mb-8 leading-tight font-sans uppercase">
                ${paper.title}
             </h1>
             
             <div class="w-16 h-1 bg-black mx-auto mb-12"></div>
             
             <div class="text-lg font-serif italic text-gray-600 mb-20">
                "The Right to Have Rights in an Automated Age"
             </div>

             <div class="text-sm font-sans font-bold uppercase tracking-widest text-gray-800">
                Author: ${paper.author}<br/>
                Date: ${paper.date}
             </div>
          </div>

          <!-- DYNAMIC CONTENT PAGES -->
          ${paper.contentBlocks?.map((block, index) => {
             if (block.type === 'heading') {
                 // Start a new page for every heading to act as a chapter
                 return `
                 </div> <!-- Close previous page -->
                 <div class="page content-page">
                    <div class="report-header">
                        <span>Human Rights Impact Assessment</span>
                        <span>Page ${index + 2}</span>
                    </div>
                    <h2 class="chapter-heading">${block.content}</h2>
                 `;
             } else {
                 return `<p>${block.content}</p>`;
             }
          }).join('')}
          </div> <!-- Close final page -->

        </body>
      </html>
        `;
        viewerWindow.document.write(rightsHtml);
        viewerWindow.document.close();
        return;
    }

    // --- CUSTOM LAYOUT FOR PAPER ID '2' (RISK ANALYSIS) ---
    if (paper.id === '2') {
        const riskHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>RISK ASSESSMENT: ${paper.title}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Inter:wght@400;600;800&display=swap');
            body { background-color: #1a1a1a; margin: 0; font-family: 'Inter', sans-serif; }
            .page {
              background: white;
              width: 210mm;
              min-height: 297mm;
              padding: 0;
              margin: 40px auto;
              box-shadow: 0 0 50px rgba(0,0,0,0.5);
              position: relative;
              box-sizing: border-box;
              display: grid;
              grid-template-columns: 60mm 1fr;
              grid-template-rows: 100%;
            }
            .sidebar {
                background-color: #f3f4f6;
                border-right: 1px solid #e5e7eb;
                padding: 40px 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .main-content {
                padding: 40px 50px;
            }
            .risk-header {
                background: #991b1b;
                color: white;
                padding: 20px 50px;
                font-family: 'Roboto Mono', monospace;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: bold;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .content-page {
                background: white;
                width: 210mm;
                min-height: 297mm;
                padding: 25mm;
                margin: 40px auto;
                box-shadow: 0 0 50px rgba(0,0,0,0.5);
            }
            .chapter-title {
                border-bottom: 3px solid #991b1b;
                padding-bottom: 10px;
                margin-bottom: 30px;
                color: #111;
                font-size: 24px;
                font-weight: 800;
                text-transform: uppercase;
            }
            @media print {
              body { background: none; }
              .no-print { display: none !important; }
              .page, .content-page { margin: 0; box-shadow: none; page-break-after: always; width: 100%; }
            }
          </style>
        </head>
        <body>
          <!-- Toolbar -->
          <div class="no-print fixed top-0 left-0 right-0 h-16 bg-black flex items-center justify-between px-6 shadow-md z-50 text-white border-b border-red-900">
            <div class="flex items-center gap-4">
               <span class="bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-widest">Confidential</span>
               <span class="font-mono text-sm tracking-wider">RISK_ASSESSMENT_PROTOCOL_V2</span>
            </div>
            <button onclick="window.close()" class="text-gray-400 hover:text-white uppercase text-xs tracking-widest">Close Viewer</button>
          </div>
          <div class="h-16 no-print"></div>

          <!-- PAGE 1: TITLE & METADATA (Grid Layout) -->
          <div class="page">
             <div class="sidebar">
                <div>
                    <div class="mb-12">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#991b1b" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    
                    <div class="mb-8">
                        <span class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Date</span>
                        <span class="font-mono text-sm font-bold text-gray-900">${paper.date}</span>
                    </div>
                    <div class="mb-8">
                        <span class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Author</span>
                        <span class="font-mono text-sm font-bold text-gray-900">${paper.author}</span>
                    </div>
                    <div class="mb-8">
                        <span class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Classification</span>
                        <span class="font-mono text-sm font-bold text-red-700">HIGH RISK</span>
                    </div>
                    <div class="mb-8">
                        <span class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Sector</span>
                        <span class="font-mono text-sm font-bold text-gray-900">GOV-TECH</span>
                    </div>
                </div>
                <div class="text-[10px] text-gray-400 font-mono">
                    ID: ${paper.id}<br/>
                    NODE: AFRICA-WEST<br/>
                    VER: 1.4.2
                </div>
             </div>
             
             <div class="main-content flex flex-col justify-center">
                <h1 class="text-5xl font-black text-gray-900 leading-tight mb-8 uppercase tracking-tight">
                    Risk Analysis:<br/>
                    <span class="text-red-700">Autonomous<br/>Governance</span>
                </h1>
                <div class="w-20 h-2 bg-black mb-12"></div>
                <p class="text-xl font-medium text-gray-600 leading-relaxed">
                    ${paper.summary}
                </p>
             </div>
          </div>

          <!-- DYNAMIC CONTENT PAGES -->
          ${paper.contentBlocks?.map((block, index) => {
             if (block.type === 'heading') {
                 // Start a new page for every heading
                 return `
                 </div> <!-- Close previous page if open (hacky but works for simple list) -->
                 <div class="content-page">
                    <div class="risk-header no-print-border" style="background:none; color:black; padding:0; margin-bottom:40px; border-bottom:1px solid #eee;">
                        <span>Risk Assessment Protocol</span>
                        <span class="text-red-700 font-mono">SEC-0${index}</span>
                    </div>
                    <h2 class="chapter-title">${block.content}</h2>
                 `;
             } else {
                 return `<p class="text-lg leading-loose text-gray-800 mb-6 text-justify" style="font-family: 'Times New Roman', serif;">${block.content}</p>`;
             }
          }).join('')}
          </div> <!-- Close final page -->

        </body>
      </html>
        `;
        viewerWindow.document.write(riskHtml);
        viewerWindow.document.close();
        return;
    }

    // --- STANDARD LAYOUT FOR OTHER PAPERS (ID 1, 3, etc.) ---
    
    let contentPagesHtml = '';

    if (paper.contentBlocks && paper.contentBlocks.length > 0) {
      let currentContentBuffer = '';
      let pageIndex = 2;

      paper.contentBlocks.forEach((block, index) => {
        const isHeading = block.type === 'heading';
        const isLastBlock = index === paper.contentBlocks!.length - 1;

        if (isHeading && index > 0) {
           contentPagesHtml += `
             <div class="page">
               <div class="content-layer">
                 <div class="flex justify-between items-end border-b-2 border-black pb-4 mb-8">
                    <h2 class="text-2xl font-bold uppercase tracking-tight text-blue-900">Analysis</h2>
                    <span class="text-sm text-gray-500 font-sans">Page ${pageIndex}</span>
                 </div>
                 <div class="text-lg text-black text-justify leading-relaxed">
                   ${currentContentBuffer}
                 </div>
               </div>
               <div class="watermark">IAS OFFICIAL</div>
               <div class="absolute bottom-12 left-0 right-0 text-center text-xs text-gray-400 font-sans">
                 © ${new Date().getFullYear()} Institute for Algorithmic Sovereignty | All Rights Reserved
               </div>
             </div>
           `;
           currentContentBuffer = '';
           pageIndex++;
        }

        if (block.type === 'heading') {
            currentContentBuffer += `<h3 class="text-xl font-bold mt-8 mb-4 uppercase tracking-wide text-black">${block.content}</h3>`;
        } else if (block.type === 'text') {
            currentContentBuffer += `<p class="mb-6">${block.content}</p>`;
        }
        
        if (isLastBlock) {
             contentPagesHtml += `
             <div class="page">
               <div class="content-layer">
                 <div class="flex justify-between items-end border-b-2 border-black pb-4 mb-8">
                    <h2 class="text-2xl font-bold uppercase tracking-tight text-blue-900">Analysis</h2>
                    <span class="text-sm text-gray-500 font-sans">Page ${pageIndex}</span>
                 </div>
                 <div class="text-lg text-black text-justify leading-relaxed">
                   ${currentContentBuffer}
                 </div>
               </div>
               <div class="watermark">IAS OFFICIAL</div>
               <div class="absolute bottom-12 left-0 right-0 text-center text-xs text-gray-400 font-sans">
                 © ${new Date().getFullYear()} Institute for Algorithmic Sovereignty | All Rights Reserved
               </div>
             </div>
           `;
        }
      });

    } else {
      const mockBody = `
        <p class="text-justify leading-relaxed mb-6 text-slate-800">
          In the context of <strong>${paper.tags[0] || 'governance'}</strong>, the current geopolitical landscape presents unprecedented challenges. 
          The rapid deployment of autonomous systems has outpaced the development of regulatory frameworks, creating a sovereignty vacuum that non-state actors are increasingly exploiting.
        </p>
        <p class="text-justify leading-relaxed mb-6 text-slate-800">
          Our analysis indicates that reliance on foreign computational infrastructure constitutes a critical vulnerability. 
          When the physical substrate of cognition data centers, chips, and models is controlled by external entities, the state loses its capacity for independent decision-making during crisis scenarios.
        </p>
        <div class="my-8 p-6 bg-blue-50 border-l-4 border-ias-primary rounded-r-sm">
          <h3 class="font-bold mb-3 uppercase text-sm tracking-widest text-ias-primary">Key Recommendations</h3>
          <ul class="list-disc pl-5 space-y-2 text-ias-ink font-medium">
            <li><strong>Sovereign Compute:</strong> Immediate establishment of national compute clusters to ensure data residency and processing independence.</li>
            <li><strong>Algorithmic Audits:</strong> Implementation of mandatory transparency trails for public sector AI deployment.</li>
            <li><strong>Escalation Control:</strong> Development of "Kill Switch" protocols for autonomous defense grids to prevent machine-speed conflict spirals.</li>
          </ul>
        </div>
        <p class="text-justify leading-relaxed mb-6 text-slate-800">
          The Institute concludes that without immediate intervention in the domain of ${paper.tags[1] || 'governance'}, 
          state authority will continue to erode. This document serves as a preliminary roadmap for legislative action and constitutional review.
        </p>
      `;

      contentPagesHtml = `
          <div class="page">
             <div class="content-layer">
               <div class="flex justify-between items-end border-b-2 border-black pb-4 mb-8">
                  <h2 class="text-2xl font-bold uppercase tracking-tight text-blue-900">Analysis</h2>
                  <span class="text-sm text-gray-500 font-sans">Page 2</span>
               </div>
               
               <div class="text-lg text-black">
                 ${mockBody}
               </div>
             </div>
             
             <div class="watermark">IAS OFFICIAL</div>
             
             <div class="absolute bottom-12 left-0 right-0 text-center text-xs text-gray-400 font-sans">
               © ${new Date().getFullYear()} Institute for Algorithmic Sovereignty | All Rights Reserved
             </div>
          </div>
      `;
    }


    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${paper.title} - IAS Reader</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&family=Inter:wght@400;500;600;700&display=swap');
            body { background-color: #334155; margin: 0; font-family: 'Inter', sans-serif; }
            .page {
              background: white;
              width: 210mm;
              min-height: 297mm;
              padding: 25mm;
              margin: 30px auto;
              box-shadow: 0 0 20px rgba(0,0,0,0.3);
              font-family: 'Times New Roman', serif;
              position: relative;
              box-sizing: border-box;
            }
            @media print {
              body { background: none; }
              .no-print { display: none !important; }
              .page { margin: 0; box-shadow: none; page-break-after: always; width: 100%; height: auto; }
            }
            .watermark {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(-45deg);
              font-size: 80px;
              color: rgba(30, 58, 138, 0.05);
              pointer-events: none;
              white-space: nowrap;
              font-weight: bold;
              z-index: 0;
            }
            .content-layer {
              position: relative;
              z-index: 1;
            }
          </style>
        </head>
        <body>
          <!-- PDF Viewer Toolbar -->
          <div class="no-print fixed top-0 left-0 right-0 h-16 bg-[#1E293B] flex items-center justify-between px-6 shadow-md z-50 text-white border-b border-gray-700">
            <div class="flex items-center gap-4">
               <div class="h-8 w-8 flex items-center justify-center bg-white rounded-sm">
                  <!-- Toolbar Logo Icon (Solid Navy) -->
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="#1E3A8A"/>
                    <circle cx="40" cy="32" r="9" fill="white"/>
                    <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="white" stroke-width="4" stroke-linecap="round"/>
                  </svg>
               </div>
               <div class="flex flex-col">
                  <span class="font-bold text-sm truncate max-w-md">${paper.title}</span>
                  <span class="text-xs text-gray-400">Restricted Access // Read-Only</span>
               </div>
            </div>
            <div class="flex gap-3">
              <button onclick="window.print()" class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-sm text-sm font-bold transition-colors flex items-center gap-2 shadow-lg">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download / Print
              </button>
              <button onclick="window.close()" class="text-gray-400 hover:text-white px-3 py-2 text-sm transition-colors font-medium">Close</button>
            </div>
          </div>

          <!-- Spacer for toolbar -->
          <div class="h-16 no-print"></div>

          <!-- Page 1: Title Page -->
          <div class="page">
            <div class="content-layer h-full flex flex-col justify-between">
              <div class="mt-12 text-center">
                 <div class="mb-8 flex justify-center">
                     <!-- Title Page Logo -->
                     <svg width="240" height="60" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z" fill="#1E3A8A"/>
                        <circle cx="40" cy="32" r="9" fill="white"/>
                        <path d="M24 60C24 60 28 48 40 48C52 48 56 60 56 60" stroke="white" stroke-width="4" stroke-linecap="round"/>
                        <text x="95" y="58" font-family="Times New Roman, serif" font-size="52" font-weight="bold" fill="#1E3A8A" letter-spacing="0.05em">IAS</text>
                        <text x="200" y="32" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="#0F172A">Institute for</text>
                        <text x="200" y="49" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="#0F172A">Algorithmic</text>
                        <text x="200" y="66" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="#0F172A">Sovereignty</text>
                     </svg>
                 </div>
                 <div class="mb-12 text-xs font-bold tracking-[0.3em] uppercase text-blue-900">Official Policy Document</div>
                 <h1 class="text-4xl font-bold mb-8 text-black leading-tight">${paper.title}</h1>
                 <div class="w-24 h-1 bg-blue-900 mx-auto mb-12"></div>
                 <p class="text-xl mb-2 italic font-serif">By ${paper.author}</p>
                 <p class="text-md text-gray-600">${paper.date}</p>
              </div>
              
              <div class="mb-12">
                 <div class="border-t-2 border-b-2 border-gray-100 py-8 my-8 bg-slate-50 px-8">
                    <h2 class="text-sm font-bold uppercase tracking-widest mb-4 text-blue-900">Executive Summary</h2>
                    <p class="text-lg leading-relaxed text-gray-800">${paper.summary}</p>
                 </div>
                 <div class="flex justify-between text-xs text-gray-400 uppercase tracking-wider font-sans">
                    <span>Ref: IAS-DOC-${paper.id.padStart(4, '0')}</span>
                    <span>Classification: Public</span>
                 </div>
              </div>
            </div>
            <div class="watermark">IAS OFFICIAL</div>
          </div>

          <!-- Subsequent Pages (Dynamic) -->
          ${contentPagesHtml}

        </body>
      </html>
    `;

    viewerWindow.document.write(html);
    viewerWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-ias-ink selection:bg-ias-primary selection:text-white pt-24 pb-20 relative">
        
        {/* Background Texture - Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            
            {/* Top Navigation / Breadcrumb */}
            <div className="flex justify-between items-center mb-12 border-b border-ias-line/60 pb-6">
                 <button 
                    onClick={onBack}
                    className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-ias-slate hover:text-ias-primary transition-colors"
                >
                    <span className="w-6 h-6 border border-ias-line flex items-center justify-center bg-white group-hover:border-ias-primary transition-colors">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7 7-7" /></svg>
                    </span>
                    Return to Repository
                </button>
                <div className="hidden md:flex items-center gap-4 text-[10px] font-bold text-ias-slate/40 uppercase tracking-widest font-mono">
                    <span>Secure Transmission</span>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span>ID: {paper.id.padStart(4, '0')}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* LEFT: Main Briefing */}
                <div className="lg:col-span-8 bg-white border border-ias-line shadow-sm p-10 md:p-16 relative overflow-hidden rounded-sm">
                    {/* Security Strip */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-ias-primary"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                         <svg viewBox="0 0 80 80" fill="#1E3A8A" xmlns="http://www.w3.org/2000/svg"><path d="M40 5L75 18V45C75 68 40 78 40 78C40 78 5 68 5 45V18L40 5Z"/></svg>
                    </div>

                    <div className="mb-10">
                        <span className={`inline-block px-3 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] border ${
                            paper.type === 'Policy Brief' ? 'border-blue-100 bg-blue-50 text-ias-primary' : 'border-teal-100 bg-teal-50 text-teal-800'
                        }`}>
                            Official {paper.type}
                        </span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ias-primary font-medium leading-tight mb-8">
                            {paper.title}
                        </h1>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs font-bold uppercase tracking-wider text-ias-slate/60 border-t border-b border-ias-line/50 py-4 font-mono">
                            <span>Authored By: {paper.author}</span>
                            <span className="hidden md:inline">•</span>
                            <span>Published: {paper.date}</span>
                            <span className="hidden md:inline">•</span>
                            <span>Clearance: Public</span>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-ias-primary mb-4 font-sans">Executive Summary</h3>
                        <p className="font-serif text-xl leading-relaxed text-ias-ink mb-10">
                            {paper.summary}
                        </p>
                        
                        {/* Dynamic Strategic Implications Card */}
                        {paper.id === '1' ? (
                             <div className="bg-ias-paper p-8 border border-ias-line/60 rounded-sm">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ias-slate mb-6 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-ias-action rounded-full"></span>
                                    Critical Implications
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">01</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Identifies critical legislative gaps in the current Digital Sovereignty framework concerning autonomous systems.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">02</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Proposes a new sovereignty model based on Global South independence and infrastructure control.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">03</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Outlines immediate action items for state actors to mitigate asymmetric risks.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        ) : paper.id === '2' ? (
                            <div className="bg-ias-paper p-8 border border-ias-line/60 rounded-sm">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ias-slate mb-6 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-ias-action rounded-full"></span>
                                    Critical Implications
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">01</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Identifies critical legislative gaps in the current Geopolitics framework concerning autonomous systems.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">02</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Proposes a new sovereignty model based on AI Risk independence and infrastructure control.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">03</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Outlines immediate action items for state actors to mitigate asymmetric risks.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        ) : paper.id === '3' ? (
                            <div className="bg-ias-paper p-8 border border-ias-line/60 rounded-sm">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ias-slate mb-6 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-ias-action rounded-full"></span>
                                    Critical Implications
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">01</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Reveals how current LLM training practices constitute uncompensated capital transfer from the Global South.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">02</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Advocates for a Sovereign Data Trust model where model weights are licensed rather than data being sold.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">03</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Outlines immediate legislative blocks on cross-border data mining without revenue-sharing agreements.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        ) : paper.id === '4' ? (
                            <div className="bg-ias-paper p-8 border border-ias-line/60 rounded-sm">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ias-slate mb-6 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-ias-action rounded-full"></span>
                                    Critical Implications
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">01</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Identifies critical legislative gaps in the current Human Rights framework concerning autonomous systems.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">02</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Proposes a new sovereignty model based on Algorithmic Bias independence and infrastructure control.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">03</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Outlines immediate action items for state actors to mitigate asymmetric risks.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="bg-ias-paper p-8 border border-ias-line/60 rounded-sm">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ias-slate mb-6 flex items-center gap-2">
                                    <span className="w-1 h-1 bg-ias-action rounded-full"></span>
                                    Critical Implications
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">01</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Identifies critical legislative gaps in the current {paper.tags[0] || 'regulatory'} framework concerning autonomous systems.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">02</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Proposes a new sovereignty model based on {paper.tags[1] || 'digital'} independence and infrastructure control.
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-xs text-ias-action font-bold pt-1">03</span>
                                        <span className="text-sm font-medium text-ias-slate leading-relaxed">
                                            Outlines immediate action items for state actors to mitigate asymmetric risks.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: Control Panel */}
                <div className="lg:col-span-4 space-y-8 sticky top-28">
                    
                    {/* Primary Action Card */}
                    <div className="bg-ias-primary text-white p-8 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-ias-primary to-blue-900 z-0"></div>
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
                        
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl mb-2">Access Document</h3>
                            <p className="text-blue-200 text-xs mb-8 leading-relaxed">
                                View the official policy document in the secure reader. Available for download and print.
                            </p>
                            
                            <button 
                                onClick={openInternalDocumentViewer}
                                className="w-full py-4 bg-white text-ias-primary font-bold text-xs tracking-[0.2em] uppercase hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center gap-3"
                            >
                                Open Dossier
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Metadata Card */}
                    <div className="bg-white border border-ias-line p-8 shadow-sm">
                        <div className="mb-6">
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-ias-slate/60 mb-2">Subject Tags</span>
                            <div className="flex flex-wrap gap-2">
                                {paper.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-slate-100 text-ias-slate text-[10px] font-bold uppercase tracking-wide border border-slate-200">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mb-6">
                             <span className="block text-[10px] font-bold uppercase tracking-widest text-ias-slate/60 mb-2">Document Type</span>
                             <span className="text-sm font-bold text-ias-ink font-mono">{paper.type.toUpperCase()}</span>
                        </div>

                        <div>
                             <span className="block text-[10px] font-bold uppercase tracking-widest text-ias-slate/60 mb-2">Citation (Chicago)</span>
                             <div className="p-3 bg-slate-50 border border-ias-line text-[10px] font-mono text-ias-slate leading-relaxed break-words select-all cursor-text">
                                {paper.author}. "{paper.title}." Institute for Algorithmic Sovereignty, {paper.date}.
                             </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
  );
};

export default PaperDetail;
