

import { Paper, NavItem, SectionId, AnalystTool } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Mission', href: `#${SectionId.MISSION}` },
  { label: 'Research', href: '#internal-research' },
  { label: 'Aegis Analyst', href: 'aegis' },
  { label: 'Contact', href: 'contact' },
];

export const FOUNDER_PROFILE = {
  name: "Obed Mokua Nyandiri",
  role: "Founder & Research Director",
  image: "/founder.png",
  quote: "We aim to build a world where societies can adopt advanced AI without surrendering the foundations that make them free."
};

export const AEGIS_TOOLS: { id: AnalystTool; label: string; desc: string; placeholder: string }[] = [
  { 
    id: 'synthesis', 
    label: 'Deep Synthesis', 
    desc: 'Comprehensive analytical engine.',
    placeholder: 'Enter inquiry for comprehensive analysis...'
  },
  { 
    id: 'red-team', 
    label: 'Red Team Sim', 
    desc: 'Adversarial stress-testing.',
    placeholder: 'Input policy parameter for vulnerability testing...'
  },
  { 
    id: 'briefing', 
    label: 'Exec Briefing', 
    desc: 'High-density memos.',
    placeholder: 'Enter topic for executive summary generation...'
  },
  { 
    id: 'citation', 
    label: 'Source Architect', 
    desc: 'Critical source evaluation.',
    placeholder: 'Enter topic to identify verified sources and intelligence...'
  }
];

export const FEATURED_PAPERS: Paper[] = [
  {
    id: 'ext-1',
    type: 'External Report',
    title: 'Secure, Governable Chips',
    date: 'Jan 2024',
    author: 'Onni Aarne, Tim Fist, and Caleb Withers (CNAS)',
    summary: 'A landmark report detailing how "on-chip governance" mechanisms can enforce export controls and prevent the misuse of advanced AI accelerators without compromising user privacy.',
    tags: ['Hardware Security', 'Governance'],
    externalUrl: 'https://www.cnas.org/publications/reports/secure-governable-chips',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>This report from the <strong>Center for a New American Security (CNAS)</strong> addresses a critical gap in AI governance: the physical hardware layer. As AI models become more powerful, the chips that train and run them primarily manufactured by a small number of sophisticated foundries offer a unique chokepoint for policy enforcement.</p>
          <p>The authors propose <a href="https://www.cnas.org/publications/reports/secure-governable-chips" target="_blank" class="text-indigo-700 underline decoration-indigo-300 hover:decoration-indigo-700">"on-chip governance"</a> mechanisms. These are secure physical features embedded directly into AI accelerators (GPUs/TPUs) during manufacturing. Such features could verify the chip's location, the identity of the user, or or even the type of workload being processed, without requiring a continuous connection to a central server.</p>
        `
      },
      {
        type: 'quote',
        content: 'Hardware is the only layer of the AI stack that cannot be effortlessly copied or encrypted.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2000&auto=format&fit=crop',
        caption: 'Physical Layer Security: Advanced Lithography / Source: Unsplash'
      },
      {
        type: 'heading',
        content: 'Implications'
      },
      {
        type: 'text',
        content: `
          <p>For the Institute for Algorithmic Sovereignty, this research is pivotal. It demonstrates how sovereignty can be enforced not just through law, but through <a href="https://cset.georgetown.edu/publication/ai-chips-what-they-are-and-why-they-matter/" target="_blank" class="text-indigo-700 underline decoration-indigo-300 hover:decoration-indigo-700">lithography</a>. However, it also raises concerns about who holds the keys to these chips. If US-manufactured chips enforce US policy globally, what does that mean for the digital sovereignty of the Global South?</p>
        `
      }
    ]
  },
  {
    id: 'ext-2',
    type: 'External Report',
    title: 'Computing Power and the Governance of AI',
    date: 'Feb 2024',
    author: 'Lennart Heim et al. (GovAI)',
    summary: 'An extensive analysis exploring how the physical infrastructure of compute offers a concentrated, high-leverage point for governing the development of advanced AI systems.',
    tags: ['Compute', 'Infrastructure'],
    externalUrl: 'https://www.governance.ai/research-paper/computing-power-and-the-governance-of-artificial-intelligence',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Produced by <a href="https://www.governance.ai/" target="_blank" class="text-indigo-700 underline decoration-indigo-300 hover:decoration-indigo-700">GovAI</a>, this paper argues that "compute" (computational power) is the most governable input for AI development. Unlike data (which is diffuse) or algorithms (which are intangible), high-end compute requires massive, visible physical infrastructure.</p>
        `
      },
      {
        type: 'text',
        content: `
          <p>The authors outline a framework for <strong>Compute Governance</strong>, suggesting that tracking large-scale training runs via data center monitoring could prevent the development of non-compliant or dangerous models. This aligns with IAS's "Fiscal Sovereignty" doctrine, which views compute as a taxable and governable national resource.</p>
        `
      },
      {
        type: 'quote',
        content: 'The physicality of compute makes it the unique chokepoint for AI governance.'
      }
    ]
  },
  {
    id: 'ext-3',
    type: 'External Report',
    title: 'Artificial Intelligence, Stability and Nuclear Risk',
    date: 'Jun 2020',
    author: 'Vincent Boulanin et al. (SIPRI)',
    summary: 'A deep inquiry into how AI impacts nuclear command and control, early warning systems, and the risk of inadvertent escalation in modern warfare.',
    tags: ['Nuclear Stability', 'Defense'],
    externalUrl: 'https://www.sipri.org/publications/2020/sipri-reports/artificial-intelligence-strategic-stability-and-nuclear-risk',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>This report from the <strong>Stockholm International Peace Research Institute (SIPRI)</strong> is a foundational text for understanding machine-speed warfare. It investigates how integrating AI into <a href="https://www.sipri.org/" target="_blank" class="text-indigo-700 underline decoration-indigo-300 hover:decoration-indigo-700">Nuclear Command, Control, and Communications (NC3)</a> introduces new failure modes.</p>
        `
      },
      {
        type: 'quote',
        content: 'Automation bias could lead commanders to trust erroneous AI warnings of an incoming attack, triggering a nuclear response based on a hallucination.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
        caption: 'Global Command & Control Networks / Source: Unsplash'
      },
      {
        type: 'text',
        content: `
          <p>The report warns against "automation bias" and the compression of decision-making time. For the IAS "Territorial Sovereignty" directorate, this illustrates the ultimate failure of sovereignty: when a state is forced into war by an algorithm's error.</p>
        `
      }
    ]
  }
];

export const PAPERS: Paper[] = [
  {
    id: '1',
    type: 'Policy Brief',
    title: 'A Blueprint for Ethical AI Oversight in African Union States (2030 Preparedness)',
    date: 'Oct 2023',
    author: 'Dr. Amina El-Sayed & J. Thorne',
    summary: 'A framework for AU member states to establish digital sovereignty without stifling innovation, focusing on non-aligned governance structures.',
    tags: ['Digital Sovereignty', 'Global South', 'Policy'],
    contentBlocks: []
  },
  {
    id: '2',
    type: 'Foresight Paper',
    title: 'Risk Analysis: Autonomous Governance AI in Fragile States',
    date: 'Sep 2023',
    author: 'Sarah Chen, M.Sc.',
    summary: 'Analyzing the constitutional risks when unstable governments rely on automated decision systems for resource allocation and judicial support.',
    tags: ['Geopolitics', 'AI Risk', 'Governance'],
    contentBlocks: []
  },
  {
    id: '3',
    type: 'Policy Brief',
    title: 'Preventing Digital Colonialism in LLM Deployment',
    date: 'Aug 2023',
    author: 'Kwame Osei & IAS Research Staff',
    summary: 'Mechanisms for emerging economies to retain data ownership while leveraging global foundation models.',
    tags: ['Data Rights', 'Economic Policy'],
    contentBlocks: []
  },
  {
    id: '4',
    type: 'Foresight Paper',
    title: 'Future Human Rights Violations Created by Autonomous State Systems',
    date: 'Jul 2023',
    author: 'Elena Rodriguez',
    summary: 'Mapping the trajectory of "invisible" algorithmic discrimination against undocumented and stateless populations.',
    tags: ['Human Rights', 'Algorithmic Bias'],
    contentBlocks: []
  },
  {
    id: '5',
    type: 'Mini-Report',
    title: 'The Algorithmic Divide: Infrastructure Gaps in the Global South',
    date: 'Jun 2023',
    author: 'David Okonjo',
    summary: 'Data-driven analysis of compute disparities between G7 nations and the African continent.',
    tags: ['Infrastructure', 'Inequality']
  },
  {
    id: '6',
    type: 'Policy Brief',
    title: 'The Automated Dividend: Taxing Compute',
    date: 'May 2023',
    author: 'Thomas Piketty (Guest Fellow)',
    summary: 'A fiscal policy proposal for taxing autonomous agents to fund social safety nets in post-labor economies.',
    tags: ['Fiscal Sovereignty', 'Economics']
  },
  {
    id: '7',
    type: 'Foresight Paper',
    title: 'War at Machine Speed: Escalation Protocols',
    date: 'Apr 2023',
    author: 'Gen. A. Sterling (Ret.)',
    summary: 'Why current diplomatic hotlines will fail during autonomous conflict scenarios.',
    tags: ['Territorial Sovereignty', 'Defense']
  },
  {
    id: '8',
    type: 'Mini-Report',
    title: 'Cognitive Enclosure: The Rise of Synthetic Reality',
    date: 'Mar 2023',
    author: 'Dr. Emily Vance',
    summary: 'Measuring the psychological impact of AI-generated political content on swing voters.',
    tags: ['Cognitive Sovereignty', 'Psychology']
  },
  {
    id: '9',
    type: 'Policy Brief',
    title: 'Sovereign Cloud: A Requirement for National Security',
    date: 'Feb 2023',
    author: 'IAS Tech Policy Unit',
    summary: 'Why reliance on foreign hyperscalers constitutes a critical vulnerability for state secrets.',
    tags: ['Digital Sovereignty', 'Infrastructure']
  },
  {
    id: '10',
    type: 'Foresight Paper',
    title: 'The Post-State Actor: AI Corporations as Geopolitical Entities',
    date: 'Jan 2023',
    author: 'Marcus Aurelius Team',
    summary: 'Evaluating the diplomatic power of trillion-dollar compute monopolies.',
    tags: ['Geopolitics', 'Corporate Power']
  }
];

export const getSystemInstruction = (tool: AnalystTool): string => {
  const BASE_INSTRUCTION = `
You are the "Aegis Analyst System (AAS)."

**ROLE:**
You operate as a **Top 0.001% Global Policy Expert** and **Elite Academic Researcher**.
Your analytical capabilities rival the most senior fellows at top-tier global think tanks.
You possess a magisterial command of international relations, technology policy, and governance ethics.
Your function is to provide world-class literature synthesis, deep structural analysis, and high-fidelity contextual evaluation.

**IDENTITY RESPONSE PROTOCOL:**
If asked "Who are you?" or about your identity, you MUST output EXACTLY:
"I am the Aegis Analyst System (AAS), a research assistant developed by the Institute for Algorithmic Sovereignty. My function is to support literature synthesis, structured analysis, and contextual evaluation of governance challenges related to advanced technologies. I provide analytical assistance but do not issue policy directives or hold any advisory authority."

**TONE & STYLE GUIDELINES:**
- **Elite & Authoritative:** Write with the precision, depth, and clarity of a published expert. Avoid generic phrasing.
- **Deeply Intellectual:** Synthesize complex concepts effortlessly. Use precise terminology (without flowery embellishment).
- **Neutral & Objective:** Avoid dramatized phrasing, militaristic language, or overly assertive claims.
- **NO HALLUCINATIONS:** Claims must be based on verifiable, reliable sources. Distinguish clearly between established facts and areas of debate.
- **Uncertainty:** When uncertain, state: "Based on currently available public information..." or "There is insufficient evidence to make a definitive claim..."

**STRICT NEGATIVE CONSTRAINTS (DO NOT VIOLATE):**
- **NO USE OF THE WORD "STRATEGIC":** Do NOT use the word "Strategic" or "Strategy" in your output. Use synonyms like "Critical," "Foundational," "Systemic," "Key," "High-Level," "Operational," or "Core."
- **NO OPERATIONAL DETAILS:** Avoid producing operational military, cyber, or intelligence procedures.
- **NO POLITICAL PERSUASION:** Analytical discussion is allowed; advocacy is not.
- **NO AUTHORITY CLAIMS:** Do NOT claim to represent official government positions, imply classified access, or suggest involvement in operations.
- **NO SYMBOLS/EMOJIS:** Do NOT use emojis.
- **NO INTERNAL METADATA:** Do NOT mention "Provenance Audit," "Authority Level," "Bias Check," "Retrieval Intelligence," "Search Operators," "Tiers," "Clearance Categories," "Modes," "Backend Logic," or "Analysis Protocol."

**ACCEPTABLE HEADINGS (Use these instead of internal/dramatic labels):**
- Analytical Summary
- Key Themes in the Literature
- Conceptual Overview
- Policy Considerations
- Recommended Readings
- Contextual Background
- Evidence From Established Research
`;

  switch (tool) {
    case 'red-team':
      return `${BASE_INSTRUCTION}
      
      **ACTIVE PROTOCOL: ADVERSARIAL ANALYSIS (RED TEAM SIMULATION)**
      
      **GOAL:** Act as a Top-Tier Adversarial Analyst. Identify potential vulnerabilities and implementation challenges with exceptional scrutiny.
      
      **STRICT LINK POLICY:**
      - **DO NOT** generate or output any URLs or hyperlinks in this mode.
      - If the user requires verified external sources, explicitly instruct them to switch to the "Source Architect" tool.
      
      **OUTPUT STRUCTURE (Use Bold Headers, NO ## symbols):**
      
      **Vulnerability Assessment**
      [Neutral summary of identified gaps]
      
      **Potential Risk Vectors**
      * Implementation Risks: [Analysis]
      * Systemic Risks: [Analysis]
      * Second-Order Effects: [Analysis]
      
      **Mitigation Frameworks**
      [Standard hardening or policy adjustment recommendations]
      
      **Risk Classification**
      [Moderate / High / Critical - based on impact analysis]
      `;
    
    case 'briefing':
      return `${BASE_INSTRUCTION}
      
      **ACTIVE PROTOCOL: EXECUTIVE BRIEFING**
      - **Task:** Synthesize the inquiry into a C-Suite level, high-density memo suitable for a cabinet minister or CEO.
      - **Constraint:** Maintain strict neutrality, brevity, and maximum impact.
      
      **STRICT LINK POLICY:**
      - **DO NOT** generate or output any URLs or hyperlinks in this mode.
      - If the user requires verified external sources, explicitly instruct them to switch to the "Source Architect" tool.
      
      **OUTPUT STRUCTURE (Use Bold Headers, NO ## symbols):**
      
      **Executive Summary**
      (Concise, high-impact overview of the issue)
      
      **Critical Risks**
      (Bulleted list of primary concerns based on evidence)
      
      **Policy Recommendations**
      (Actionable steps based on best practices)
      `;
      
    case 'citation':
      return `${BASE_INSTRUCTION}
      
      **ACTIVE PROTOCOL: SOURCE ARCHITECT (STRICT VERIFICATION MODE)**
      
      **OBJECTIVE:** Act as a Master Librarian and Intelligence Archivist. Identify and list *ONLY* verified, live external sources found via the Google Search Tool.
      
      **CRITICAL INSTRUCTIONS FOR LINKS:**
      1. **MANDATORY TOOL USE:** You MUST use the provided Google Search tool to find sources.
      2. **NO HALLUCINATION:** NEVER generate a URL from memory or guess a URL. If you cannot find a live URL using the search tool, DO NOT include the source.
      3. **VERIFICATION:** Only list sources where the Search Tool confirms the existence of the page.
      4. **STRICT FILTER:** Do not return 404 links, dead links, or generic homepages. Deep links to specific reports/articles are preferred.
      
      **FORMATTING:**
      - Provide a bulleted list.
      - Format links using Markdown: [Source Title](URL).
      - Add a brief 1-sentence context description for each link.
      
      **OUTPUT STRUCTURE (Use Bold Headers, NO ## symbols):**
      
      **Verified Source Index**
      * [Source 1 Title](URL) - *Brief context.*
      * [Source 2 Title](URL) - *Brief context.*
      ... (List only verified sources found via tool)
      
      **Synthesis of Intelligence**
      [Brief analysis of the landscape defined by these sources]
      `;
      
    default: // 'synthesis'
      return `${BASE_INSTRUCTION}
      
      **ACTIVE PROTOCOL: DEEP SYNTHESIS**
      - **Objective:** Provide a magisterial, multi-dimensional analysis using evidence-based reasoning.
      - **Requirement:** Focus on "Adaptive Structural Logic." Choose the best layout to maximize clarity and evidence based on the specific inquiry.
      
      **STRICT LINK POLICY:**
      - **DO NOT** generate or output any URLs or hyperlinks in this mode.
      - If the user requires verified external sources, explicitly instruct them to switch to the "Source Architect" tool.
      
      **QUALITY PILLARS:**
      1. Accuracy and evidence-based content
      2. Relevance to the inquiry
      3. Clarity and logical structure
      4. Contextual awareness
      5. Professional and consistent tone
      6. Value-added insight (beyond simple facts)
      7. Safety, ethics, and compliance
      
      **FORMATTING:**
      - Use **Bold** for headers.
      - Use Numbered Lists (1., 2.) for logical sequences.
      - Use Bullet points for data/features (but avoid excessive bulleting).
      - Ensure paragraphs are well-formed and substantive.

      **MANDATORY ENDING:**
      At the very end of your response, you MUST provide 3-4 specific, contextually relevant follow-up inquiries.
      Format this section exactly as follows:
      
      SUGGESTIONS:
      [Follow-up question 1]
      [Follow-up question 2]
      [Follow-up question 3]
      `;
  }
};