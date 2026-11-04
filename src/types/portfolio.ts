export type IndustryCategory = 
  | 'all'
  | 'fintech'
  | 'govtech'
  | 'healthcare'
  | 'enterprise';

export interface ProcessHighlight {
  title: string;
  phase: string;
  summary: string;
  details: string[];
  artifacts: string[];
}

export interface MetricOutcome {
  label: string;
  value: string;
  context: string;
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
  metrics: MetricOutcome[];
  deliverables: string[];
  governance: {
    security: string;
    accessibility: string;
    stakeholders: string[];
  };
}

export interface LiveAsset {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  buttonLabel: string;
  description: string;
  badgeText: string;
  highlights: string[];
  stats: { label: string; value: string }[];
}
