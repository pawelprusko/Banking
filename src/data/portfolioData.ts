import { CaseStudy, LiveAsset } from '../types/portfolio';

export const LIVE_ASSETS: LiveAsset[] = [
  {
    id: 'roche-design-system',
    title: 'Roche Global Design System & Component Library',
    subtitle: 'Enterprise Healthcare · Data-Oriented Products',
    url: 'https://www.figma.com/design/jpGf8NVGHgLwfVcWNjKaDb/Tableau-1.1---R-Design-System--1-?node-id=7-9471&t=2ll65dT8YFsfMUEo-1',
    buttonLabel: 'Inspect Figma Design System File',
    description:
      'UI component system tailored for data-oriented products, analytical tooling, and high-density information interfaces.',
    highlights: [
      'UI component library specialized for data-oriented products and analytical software suites',
      'High-density data tables, advanced multi-dimensional filtering, and complex dataset presentation',
      'Structured design token architecture (Global, Semantic, Component) for enterprise web applications',
      'Comprehensive component specifications ensuring zero-drift developer handoff'
    ]
  },
  {
    id: 'stx-next-dashboards',
    title: 'STX Next — Data Experience Design Offering & Dashboards',
    subtitle: 'Enterprise B2B SaaS · Presentation Decks',
    description:
      'Conception and delivery of tailored Data Experience Design services and interactive analytics dashboards that translate complex telemetry into actionable business decisions.',
    scope: 'Led the creation of custom Data Experience Design services and interactive analytics dashboards.',
    impact: 'Created tailored, data-oriented products that allow enterprise users to extract actionable insights efficiently.',
    highlights: [
      'Metric-to-action layout model connecting dense telemetry with immediate operator actions',
      'Multi-dimensional filtering and cognitive noise reduction engineered for both executive leadership and operational staff'
    ],
    presentations: [
      {
        id: 'cudos',
        title: '1. AWS CUDOS: Cloud Billing Analytics for Executive Strategy',
        subtitle: 'Transforming Cloud Billing Analytics Into Executive Strategy',
        description: 'Dedicated presentation of the AWS CUDOS dashboard architecture, eliminating billing data noise and empowering strategic cloud cost governance.',
        pdfUrl: '/assets/aistudio/AWS_CUDOS_Deck_-_Transforming_Cloud_Billing_Analytics_Into_Executive_Strategy_8585215a.pdf'
      },
      {
        id: 'finops',
        title: '2. Finops Cloud Intelligence: Financial Dashboards for Cloud Ecosystems',
        subtitle: 'Actionable Cloud Intelligence Analytics',
        description: 'Presentation of the FinOps and Snowflake dashboard ecosystem, translating millions of raw billing rows into intuitive, executive-ready decision triggers.',
        pdfUrl: '/assets/aistudio/FinOps_Deck_-_Actionable_Cloud_Intelligence_Analytics_cb4362d1.pdf'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'catsquant',
    number: '01',
    title: 'Catsquant',
    subtitle: 'Digital Banking & Crypto Portfolio App',
    client: 'Catsquant Financial',
    industry: 'Banking & FinTech',
    category: 'fintech',
    role: 'Lead Product Designer',
    duration: '8 Months',
    tags: [
      'Web & Mobile'
    ],
    overview:
      'Product design for a mobile portfolio application bringing together traditional fiat balances and crypto asset tracking into a unified, secure experience across web and mobile platforms.',
    highlights: [
      {
        phase: 'Discovery',
        title: 'User Research & Competitor Analysis',
        summary: 'Identified friction points in traditional crypto transfer and portfolio monitoring.',
        details: [
          'Conducted qualitative interviews with active investors to identify anxiety triggers during high-volatility market events.',
          'Benchmarked mainstream banking and crypto interfaces to understand where verification flows felt clear versus overwhelming.',
          'Mapped transfer confirmation anxieties caused by technical jargon, dynamic network fees, and irreversible addresses.'
        ],
        artifacts: ['User Interview Findings Summary', 'Competitor Flow Comparison', 'Key Friction Heatmap']
      },
      {
        phase: 'Alignment',
        title: 'Stakeholder & Compliance Workshops',
        summary: 'Aligned regulatory constraints with core portfolio feature requirements.',
        details: [
          'Held recurring alignment workshops with compliance officers, legal advisors, and backend developers.',
          'Structured core portfolio features: consolidated balance overview, P&L views, asset allocation, and multi-network transfers.',
          'Defined security interaction flows including biometric signing, session timeouts, and confirmation checks.'
        ],
        artifacts: ['Core Feature Matrix', 'Information Architecture Diagram', 'Security Sign-Off Specs']
      },
      {
        phase: 'Prototyping',
        title: 'AI-Assisted Rapid Vibe-Prototyping & High-Fidelity Figma System',
        summary: 'Explored visual directions rapidly before building structured, accessible component libraries.',
        details: [
          'Used AI-assisted visual explorations to test multiple layout densities and charting concepts within days.',
          'Hardened validated concepts into structured Figma components with Auto Layout, consistent tokens, and flexible states.',
          'Engineered accessible color palettes ensuring balance indicators remained clear across light, dark, and high-contrast modes.'
        ],
        artifacts: ['UI Component Kit (Figma)', 'Interactive Clickable Prototype', 'Token Mapping Specifications']
      },
      {
        phase: 'Iteration',
        title: 'Usability Testing & Refinement',
        summary: 'Iterated on transfer confirmation flows and fee transparency.',
        details: [
          'Tested interactive prototypes with target users to evaluate transfer confirmation clarity.',
          'Simplified multi-network fee selection into plain-language estimates with transparent fiat breakdowns.',
          'Refined transaction confirmation dialogs to explicitly verify destination networks and recipient checksums.'
        ],
        artifacts: ['Usability Feedback Summary', 'Iterated Transfer Flow Specs', 'Final Developer Handoff Documentation']
      }
    ],
    architectureBlueprint: {
      type: 'Portfolio Information Architecture',
      description: 'Clear three-tier structure separating high-level balance monitoring from granular transaction execution.',
      layers: [
        {
          layerName: 'Tier 1: Portfolio Overview',
          items: ['Consolidated Total Balance', '24h Performance Summary', 'Quick Transfer / Receive Actions', 'Asset Allocation']
        },
        {
          layerName: 'Tier 2: Asset Details & Breakdown',
          items: ['Fiat Accounts & Wallets', 'Individual Crypto Holdings', 'Historical Transaction Log', 'Performance Charting']
        },
        {
          layerName: 'Tier 3: Transaction Execution',
          items: ['Network & Address Validation', 'Transparent Fee Estimate', 'Biometric Authorization', 'Status Confirmation']
        }
      ]
    },
    deliverables: [
      'Comprehensive Web & Mobile Figma UI Component Library',
      'Interactive Prototypes for Critical Financial User Flows',
      'Design Token JSON Repository Synced with Engineering Pods',
      'Usability Test Reports & Transfer Flow Handbooks'
    ],
    governance: {
      security: 'Aligned with Strong Customer Authentication (SCA) principles and biometric verification standards.',
      accessibility: 'Accessible color contrasts for financial charts and dynamic system font scaling.',
      stakeholders: ['Product Lead', 'Compliance & Legal Counsel', 'Engineering Leads']
    }
  },
  {
    id: 'coi-mobywatel',
    number: '02',
    title: 'COI (Centralny Ośrodek Informatyki)',
    subtitle: 'mObywatel & gov.pl Ecosystem',
    client: 'Centralny Ośrodek Informatyki (COI) / Ministry of Digital Affairs',
    industry: 'Public Sector & GovTech',
    category: 'govtech',
    role: 'Senior UX/UI Consultant',
    duration: '14 Months',
    tags: [
      'Mass-Scale Mobile UX',
      'Digital Identity',
      'WCAG 2.1/2.2',
      'Multi-Stakeholder'
    ],
    overview:
      'UX/UI design for digital public services within the mObywatel mobile ecosystem—Poland’s nationwide citizen identity app, emphasizing accessibility, verification security, and clarity for millions of users.',
    highlights: [
      {
        phase: 'Scope',
        title: 'Mass-Scale Citizen Service Design',
        summary: 'Designing digital identity services accessible to all citizens across varied devices and digital literacy levels.',
        details: [
          'Structured clear interaction patterns for digital document presentation, including ID cards and driver certificates.',
          'Accounted for diverse device capabilities, ensuring snappy performance on entry-level smartphones.',
          'Designed resilient offline presentation modes so citizens can reliably prove identity without active mobile connectivity.'
        ],
        artifacts: ['Citizen User Journey Maps', 'Offline-First Fallback Flows', 'Document Display Specifications']
      },
      {
        phase: 'Accessibility',
        title: 'Rigorous WCAG 2.1 / 2.2 Compliance',
        summary: 'Auditing and designing for strict digital accessibility standards and assistive technologies.',
        details: [
          'Ensured full compliance with Polish and European public sector digital accessibility mandates (WCAG 2.1/2.2 AA).',
          'Conducted hands-on testing with VoiceOver and TalkBack screen readers to guarantee proper focus order and semantic roles.',
          'Enforced 48×48px minimum touch targets and robust contrast ratios across light and dark system appearances.'
        ],
        artifacts: ['Accessibility Audit Reports', 'Screen Reader Labeling Specifications', 'Contrast Ratio Checklists']
      },
      {
        phase: 'Governance',
        title: 'Multi-Stakeholder & Institutional Alignment',
        summary: 'Aligning requirements across government ministries, legal teams, and backend IT architecture.',
        details: [
          'Collaborated closely with ministerial representatives, legal teams, and security engineers.',
          'Designed visual and cryptographic security elements, including dynamic holograms and watermarks to prevent forgery during inspections.',
          'Documented standardized component guidelines for cross-functional engineering teams building independent microservices.'
        ],
        artifacts: ['Institutional Decision Records', 'Document Security Visual Specs', 'Shared Component Library Guidelines']
      }
    ],
    architectureBlueprint: {
      type: 'Citizen Document Verification Model',
      description: 'Secure interaction flow separating local document presentation from backend registry checks.',
      layers: [
        {
          layerName: 'Presentation Layer',
          items: ['Dynamic Holographic Visuals', 'QR Inspection Code', 'Document Details & Expiry', 'Offline Local Cache']
        },
        {
          layerName: 'Verification Protocol',
          items: ['In-Person Field Verification', 'Cryptographic Token Refresh', 'Device Biometric Unlock']
        },
        {
          layerName: 'State Registry Sync',
          items: ['Central Citizen Database Integration', 'Driver & Vehicle Registry (CEPiK)', 'Audit & Status Logs']
        }
      ]
    },
    deliverables: [
      'Document Presentation Mobile Kit in Figma',
      'WCAG 2.1 / 2.2 AA Accessibility Guidelines & Screen Reader Annotations',
      'Security Elements & Holographic Animation Specs',
      'Onboarding and Document Activation User Flows'
    ],
    governance: {
      security: 'Hardware-backed keystore authorization and dynamic inspection security elements.',
      accessibility: 'WCAG 2.1 AA certified for public sector digital services.',
      stakeholders: ['Ministry of Digital Affairs', 'COI Technical Leads', 'Verification Authorities', 'Security Advisors']
    }
  },
  {
    id: 'advartis',
    number: '03',
    title: 'Advartis',
    subtitle: 'Enterprise Insurance Platform Discovery',
    client: 'Advartis Group',
    industry: 'Insurance & Service Design',
    category: 'enterprise',
    role: 'Lead Service Designer & UX Strategist',
    duration: '6 Months',
    tags: [
      'Deep Discovery',
      'IDI',
      'Focus Groups',
      'Service Blueprinting',
      'Product Vision'
    ],
    overview:
      'Conducted a strategic UX discovery engagement for an enterprise insurance organization, analyzing operational workflows, mapping AS-IS bottlenecks, and defining the product vision for a modern unified claims platform.',
    highlights: [
      {
        phase: 'Research',
        title: 'In-Depth Interviews & Focus Groups',
        summary: 'Uncovered key operational pain points across adjusters, underwriters, and clients.',
        details: [
          'Conducted In-Depth Interviews (IDI) with claims adjusters, regional underwriters, and operational team leads.',
          'Facilitated Focus Group Interviews (FGI) with enterprise corporate clients to capture policy management expectations.',
          'Identified core operational bottlenecks: heavy system fragmentation and redundant manual data entry across disparate tools.'
        ],
        artifacts: ['Qualitative Research Transcripts', 'User Persona & Journey Maps', 'Pain Point Inventory']
      },
      {
        phase: 'Blueprinting',
        title: 'Service Blueprinting (AS-IS to TO-BE)',
        summary: 'Mapped operational processes from customer touchpoints through backend processing.',
        details: [
          'Constructed detailed AS-IS Service Blueprints connecting customer actions, internal employee tasks, and backend dependencies.',
          'Designed a unified TO-BE Service Blueprint that eliminated redundant manual handoffs through smart validation workflows.',
          'Clarified the journey from initial incident notification through automated document intake to settlement decision.'
        ],
        artifacts: ['AS-IS Operational Blueprint', 'TO-BE Target Service Blueprint', 'Process Gap Analysis']
      },
      {
        phase: 'Vision',
        title: 'Product Vision, Roadmaps & Interactive Wireframes',
        summary: 'Synthesized insights into a phased modernization roadmap and validated wireframes.',
        details: [
          'Created clickable mid-fidelity wireframe prototypes to validate revised claim management workflows with internal adjusters.',
          'Formulated an executive product vision deck detailing feature roadmaps, system consolidation benefits, and delivery phases.',
          'Delivered prioritized backlogs and functional UX specifications ready for development scoping.'
        ],
        artifacts: ['Executive Product Vision Presentation', 'Phased Digital Roadmap', 'Clickable Mid-Fidelity Wireframes']
      }
    ],
    architectureBlueprint: {
      type: 'Insurance Platform Service Architecture',
      description: 'End-to-end alignment of customer touchpoints with internal adjuster operational workflows.',
      layers: [
        {
          layerName: 'Frontstage: Customer & Broker Portal',
          items: ['Guided Claim Submission Wizard', 'Digital Document Upload', 'Transparent Status Tracking']
        },
        {
          layerName: 'Backstage: Claims & Underwriting Desk',
          items: ['Triage Queue & Task Assignment', 'Consolidated Document Viewer', 'Settlement Calculation & Approval']
        },
        {
          layerName: 'Support Systems & Infrastructure',
          items: ['Core Policy Database', 'Document Archive & Audit Vault', 'Automated Notification Services']
        }
      ]
    },
    deliverables: [
      'Comprehensive AS-IS and TO-BE Enterprise Service Blueprints',
      'Qualitative User Research Synthesis (IDI & FGI Reports)',
      'Clickable Workflow Wireframes & Usability Feedback',
      'Phased Product Transformation Roadmap for Stakeholders'
    ],
    governance: {
      security: 'GDPR compliance and strict financial audit trail preservation.',
      accessibility: 'Clean typographic hierarchy reducing visual strain during prolonged data review.',
      stakeholders: ['Operations Directors', 'Head of Underwriting', 'Claims Department Leads', 'IT Architecture Group']
    }
  }
];
