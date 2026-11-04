export type IndustryCategory = 
  | 'all'
  | 'fintech'
  | 'govtech'
  | 'enterprise';

export interface ProcessHighlight {
  title: string;
  phase: string;
  summary: string;
  details: string[];
  artifacts: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  category: IndustryCategory;
  role: string;
  duration: string;
  tags: string[];
  overview: string;
  highlights: ProcessHighlight[];
  architectureBlueprint: {
    type: string;
    description: string;
    layers: {
      layerName: string;
      items: string[];
    }[];
  };
  deliverables: string[];
  governance: {
    security: string;
    accessibility: string;
    stakeholders: string[];
  };
}

export interface PresentationLink {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  pdfUrl: string;
}

export interface StructuredHighlight {
  label: string;
  detail: string;
}

export interface LiveAsset {
  id: string;
  title: string;
  subtitle: string;
  url?: string;
  buttonLabel?: string;
  description: string;
  scope?: string;
  impact?: string;
  highlights: string[];
  structuredHighlights?: StructuredHighlight[];
  presentations?: PresentationLink[];
}

