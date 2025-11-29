

export interface ContentBlock {
  type: 'text' | 'heading' | 'image' | 'quote';
  content: string;
  caption?: string;
}

export interface Paper {
  id: string;
  type: 'Policy Brief' | 'Foresight Paper' | 'Mini-Report' | 'External Report';
  title: string;
  date: string;
  author: string;
  summary: string;
  tags: string[];
  externalUrl?: string;
  contentBlocks?: ContentBlock[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export type AnalystTool = 'synthesis' | 'red-team' | 'briefing' | 'citation';

export enum SectionId {
  HOME = 'home',
  MISSION = 'mission',
  RESEARCH = 'research',
  ASSISTANT = 'assistant',
  CONTACT = 'contact'
}

export type ViewState = 'landing' | 'archive' | 'paper' | 'about' | 'contact' | 'legal' | 'aegis';
