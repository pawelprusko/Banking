import { CaseStudy, LiveAsset } from '../types/portfolio';

export const LIVE_ASSETS: LiveAsset[] = [
  {
    id: 'roche-design-system',
    title: 'Roche Global Design System & Component Library',
    subtitle: 'Enterprise Healthcare · Global Multibrand Architecture',
    url: 'https://www.figma.com/',
    buttonLabel: 'Inspect Figma Design System File',
    description:
      'Live Figma file demonstrating multi-brand component architecture, design tokens, and developer handoff specs for complex clinical diagnostics and lab data software.',
    badgeText: 'Figma Library',
    highlights: [
      'Multi-tier token architecture (Global primitives → Semantic aliases → Component tokens)',
      'Density-switchable UI components (Compact 32px data grid rows vs Comfortable 48px touch rows)',
      'Zero-drift developer handoff with automated token exports for React & Web Components',
      'High-contrast clinical themes tested for ISO 9241 and WCAG 2.1 AA medical compliance'
    ],
    stats: [
      { label: 'Token Variables', value: '480+' },
      { label: 'Reusable Components', value: '120+' },
      { label: 'Global Teams Unified', value: '14' }
    ]
  },
  {
    id: 'stx-next-dashboards',
    title: 'STX Next Data Experience Dashboards',
    subtitle: 'Interactive Prototype Suite · Enterprise B2B SaaS',
    url: 'https://pawel-prusko-ux-ax-designer-portfol-gamma.vercel.app/',
    buttonLabel: 'Explore Interactive Dashboards Demo',
    description:
      'Collection of 5 live interactive data-oriented dashboard prototypes developed to showcase metric-to-action UI across finance, risk modeling, and infrastructure monitoring.',
    badgeText: '5 Live Prototypes',
    highlights: [
      'Metric-to-action trigger architecture transforming telemetry tables into actionable decisions',
      'Complex multi-dimensional filtering, range sliders, and dynamic cohort slicing',
      'Visual hierarchy for high-density cognitive loads under real-time streaming constraints',
      'Complete responsive parity engineered for executive tablet reviews and operator workstations'
    ],
    stats: [
      { label: 'Interactive Demos', value: '5 Live' },
      { label: 'Density Metrics', value: '60+ KPIs' },
      { label: 'Decision Latency', value: '< 2.4s' }
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
      'Mobile UX (iOS/Android)',
      'Discovery',
      'Rapid Prototyping',
      'AI-Assisted Design'
    ],
    overview:
      'Engineered an institutional-grade mobile portfolio management application bridging traditional fiat banking balances with high-frequency crypto asset tracking. Focused on reducing cognitive friction during high-volatility market events.',
    highlights: [
      {
        phase: 'Phase 1',
        title: 'Discovery & Competitor Benchmark',
        summary: 'Uncovered key anxiety triggers during asset liquidation and complex multi-chain transfers.',
        details: [
          'Conducted 16 in-depth interviews with active digital asset holders, retail crypto traders, and private wealth managers.',
          'Benchmarked 9 leading European fintech apps (Revolut, N26, SwissBorg, Binance, Kraken Pro) across speed-to-action and transaction confirmation clarity.',
          'Identified critical cognitive drop-off: users feared irreversible blockchain transfer mistakes due to ambiguous fee calculation and confirmation modals.'
        ],
        artifacts: ['Quantitative Persona Matrix', 'Anxiety Friction Heatmap', 'Feature Priority Scoring']
      },
      {
        phase: 'Phase 2',
        title: 'Alignment & Stakeholder Workshops',
        summary: 'Synthesized regulatory compliance with executive vision into a consolidated product MVP.',
        details: [
          'Facilitated cross-functional workshops with compliance officers, liquidity engineers, and mobile leads.',
          'Mapped core financial portfolio features: consolidated P&L waterfall, real-time staking yield counters, and one-tap emergency hedging.',
          'Established strict cryptographic security requirements (biometric signing, session timeouts, and anti-phishing visual phrases).'
        ],
        artifacts: ['Core Feature Matrix', 'Regulatory Security Architecture', 'Information Hierarchy Map']
      },
      {
        phase: 'Phase 3',
        title: 'AI-Assisted Rapid Vibe-Prototyping & Figma System',
        summary: 'Leveraged generative tools to iterate through 40+ visual layouts in 5 days before hardening into Figma components.',
        details: [
          'Utilized AI-accelerated generative workflows to prototype visual density patterns, micro-interactions, and chart color contrast variations.',
          'Transitioned validated concepts into structured, token-driven Figma libraries with auto-layout v5 components.',
          'Built accessible high-contrast color palettes ensuring positive/negative yields are distinguishable for deuteranopia and protanopia users.'
        ],
        artifacts: ['High-Fidelity Component Library', 'Interactive Mobile Prototype (Figma)', 'Token Alias Variable Map']
      },
      {
        phase: 'Phase 4',
        title: 'Continuous Usability Testing & Iteration',
        summary: 'Conducted moderated usability sessions to achieve sub-4 second transaction execution time.',
        details: [
          'Ran 24 moderated usability lab sessions across iOS TestFlight builds testing transaction confirmation speed and confidence.',
          'Redesigned the multi-chain gas fee selector from raw Gwei inputs into a 3-tier plain-language estimate (Normal, Fast, Instant) with real fiat cost preview.',
          'Reduced transfer error rate during testing to 0.4% through explicit address checksum validation and reciprocal confirmation badges.'
        ],
        artifacts: ['Usability Scorecards (SUS: 86.4)', 'Error Frequency Telemetry', 'Final Handoff Specification']
      }
    ],
    architectureBlueprint: {
      type: 'Mobile Portfolio Information Architecture',
      description: 'Progressive disclosure pipeline dividing high-level portfolio overview from deep transaction drill-downs.',
      layers: [
        {
          layerName: 'Level 1: Executive Overview',
          items: ['Consolidated Net Worth', '24h Delta KPI', 'Asset Allocation Donut', 'Immediate Action Bar (Deposit / Swap / Transfer)']
        },
        {
          layerName: 'Level 2: Asset Telemetry',
          items: ['Fiat Accounts (EUR / USD / PLN)', 'Staked Protocols', 'Real-Time Order Books', 'Historical Performance Charts']
        },
        {
          layerName: 'Level 3: Execution & Signing',
          items: ['Chain Selection & Gas Preview', 'Recipient Address Sanitizer', 'Biometric Authorization', 'Cryptographic Proof Modal']
        }
      ]
    },
    metrics: [
      { label: 'SUS Score', value: '86.4', context: 'Exceeded banking benchmark by +18 points' },
      { label: 'Execution Speed', value: '3.8s', context: 'Average time to complete asset transfer' },
      { label: 'Error Rate', value: '0.4%', context: 'Reduced transfer configuration errors' }
    ],
    deliverables: [
      'Comprehensive iOS & Android Figma Design System',
      'Interactive Micro-Interaction Specs for Financial Charts',
      'Design Token JSON repository synced with React Native repository',
      'End-to-End User Flow Blueprints for KYC & Asset Transfers'
    ],
    governance: {
      security: 'Compliant with PSD2 Strong Customer Authentication (SCA) & MiCA digital asset regulations.',
      accessibility: 'WCAG 2.1 Level AA compliant color contrast and text scaling support up to 200%.',
      stakeholders: ['Chief Product Officer', 'Head of Compliance', 'Lead Smart Contract Engineer', 'iOS/Android Tech Leads']
    }
  },
  {
    id: 'coi-mobywatel',
    number: '02',
    title: 'COI (Centralny Ośrodek Informatyki)',
    subtitle: 'mObywatel & gov.pl Digital Ecosystem',
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
      'Designed critical digital services and mobile interaction patterns within the mObywatel ecosystem—Poland’s official government mobile app used by over 15 million citizens for identity verification, driver licenses, vehicle cards, and official state communications.',
    highlights: [
      {
        phase: 'Phase 1',
        title: 'Mass-Scale Citizen Service Scope',
        summary: 'Architecting digital services resilient across extreme demographic diversity (ages 13 to 90+).',
        details: [
          'Audited end-to-end citizen journeys across digital ID verification, temporary driver licenses, and municipal digital certificates.',
          'Addressed extreme variance in digital literacy and hardware capability, ensuring smooth rendering across low-tier Android handsets.',
          'Established offline-first fallback patterns so citizens can prove digital identity even with zero cellular connectivity in remote areas.'
        ],
        artifacts: ['Citizen Demographic Persona Matrix', 'Edge-Case Connectivity Map', 'Legal Verification Journey']
      },
      {
        phase: 'Phase 2',
        title: 'Rigorous WCAG 2.1 / 2.2 Accessibility Compliance',
        summary: 'Ensured state-mandated digital accessibility compliance across high-contrast, screen readers, and dynamic type.',
        details: [
          'Engineered components compliant with European Accessibility Act (EAA) and Polish digital accessibility laws (Dz.U. 2019 poz. 848).',
          'Conducted real-device testing with VoiceOver (iOS) and TalkBack (Android), eliminating accessibility tree traps and unannounced status updates.',
          'Maintained minimum touch target geometry of 48×48px and guaranteed 7:1 contrast ratios on essential verification badges.'
        ],
        artifacts: ['WCAG 2.1/2.2 AA Audit Report', 'Screen Reader Pronunciation Guide', 'Dynamic Type Scaling Chart']
      },
      {
        phase: 'Phase 3',
        title: 'Complex Multi-Ministry Governance',
        summary: 'Harmonized divergent legal requirements from the Ministry of Digital Affairs, Police, and Healthcare.',
        details: [
          'Facilitated weekly alignment syncs across ministerial legal representatives, data protection officers (DPO), and state security engineers.',
          'Standardized digital hologram security stamps and dynamic cryptographic watermark animations to prevent visual forgery during police inspections.',
          'Documented strict component guidelines adopted across cross-functional delivery pods working on independent micro-services.'
        ],
        artifacts: ['Inter-Agency Decision Log', 'Hologram Security Verification Spec', 'Service UI Governance Manual']
      }
    ],
    architectureBlueprint: {
      type: 'Citizen Identity Verification Architecture',
      description: 'Zero-knowledge verification flow separating on-device biometric check from centralized state registers.',
      layers: [
        {
          layerName: 'Layer 1: Citizen Client Interface',
          items: ['Dynamic Hologram Renderer', 'QR Inspection Code Generator', 'Cryptographic Watermark Engine', 'Offline Cache Vault']
        },
        {
          layerName: 'Layer 2: Verification Protocol',
          items: ['Police / Clerk In-Person Scan Mode', 'PKI Public Key Exchange', 'Session TTL & Tamper Detection']
        },
        {
          layerName: 'Layer 3: State Registry Integration',
          items: ['PESEL Core Database Gateway', 'Central Vehicle Register (CEPiK)', 'State Document Validation Hub']
        }
      ]
    },
    metrics: [
      { label: 'Citizen Base', value: '15M+', context: 'Active users across iOS & Android platforms' },
      { label: 'WCAG Compliance', value: '100%', context: 'Strict AA conformance across all tested modules' },
      { label: 'Inspection Time', value: '< 2.1s', context: 'Average document verification speed by field officers' }
    ],
    deliverables: [
      'Digital Document Mobile Component Kit (Figma)',
      'WCAG 2.1 / 2.2 Accessibility Matrix & Screen Reader Documentation',
      'Dynamic Holographic Document Watermark Specification',
      'Citizen Onboarding & Identity Recovery UX Blueprints'
    ],
    governance: {
      security: 'End-to-end hardware-backed keystore integration (Android KeyStore / iOS Secure Enclave).',
      accessibility: 'Full WCAG 2.1 AA certified by independent government accessibility testers.',
      stakeholders: ['Ministry of Digital Affairs', 'Centralny Ośrodek Informatyki Engineering Leads', 'National Police Headquarters', 'Chief State Security Officers']
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
      'Led an end-to-end UX discovery engagement for a legacy enterprise insurance organization. Mapped complex operational bottlenecks, conducted extensive user research, and synthesized insights into a unified B2B platform product vision.',
    highlights: [
      {
        phase: 'Phase 1',
        title: 'Deep Research: IDI & Focus Group Interviews',
        summary: 'Gathered qualitative insights from 42 internal claims adjusters, regional brokers, and enterprise clients.',
        details: [
          'Conducted 28 In-Depth Interviews (IDI) with senior risk underwriters, operational claims handlers, and regional agency directors.',
          'Organized 4 Focus Group Interviews (FGI) with enterprise corporate clients managing fleet and property liability policies.',
          'Identified severe productivity friction: claims adjusters spent 68% of their day alt-tabbing between 7 disconnected terminal systems.'
        ],
        artifacts: ['Qualitative Transcript Repository', 'Empathy & Frustration Maps', 'Stakeholder Expectation Grids']
      },
      {
        phase: 'Phase 2',
        title: 'Service Blueprinting (AS-IS to TO-BE)',
        summary: 'Visualized cross-silo business workflows to expose undocumented manual touchpoints and data redundancies.',
        details: [
          'Mapped comprehensive AS-IS operational blueprint detailing customer frontstage actions, claims adjuster backstage tasks, and backend mainframe syncs.',
          'Engineered a streamlined TO-BE Service Blueprint eliminating 11 redundant manual approvals through automated risk triage algorithms.',
          'Unified policy onboarding, underwriting calculations, and incident claim tracking into a single continuous thread.'
        ],
        artifacts: ['Large-Format AS-IS Service Blueprint', 'TO-BE Target Architecture Blueprint', 'Touchpoint Friction Matrix']
      },
      {
        phase: 'Phase 3',
        title: 'Product Vision, Roadmaps & Interactive Wireframes',
        summary: 'Translated strategic research insights into a 3-year phased implementation roadmap and wireframes.',
        details: [
          'Constructed clickable low-to-mid fidelity prototype simulations used to validate proposed workflows with claims adjusters.',
          'Synthesized findings into an executive C-suite presentation securing $2.4M multi-year digital transformation budget approval.',
          'Delivered prioritized user story backlog, feature impact-vs-effort matrices, and functional wireframe specifications.'
        ],
        artifacts: ['Executive Product Vision Deck', 'Phased Modernization Roadmap', 'Clickable Mid-Fidelity Wireframe Prototype']
      }
    ],
    architectureBlueprint: {
      type: 'Insurance Service Blueprint Architecture',
      description: 'End-to-end service layers aligning user touchpoints with automated backend validation.',
      layers: [
        {
          layerName: 'Frontstage: Broker & Client Touchpoints',
          items: ['Unified Policy Configuration Portal', 'One-Click Document Upload', 'Self-Service Claim Status Tracker']
        },
        {
          layerName: 'Backstage: Underwriter & Adjuster Operations',
          items: ['Automated Risk Score Calculator', 'Consolidated Document OCR Triage', 'Direct Messaging & Escalation Queue']
        },
        {
          layerName: 'Support Processes & Enterprise Systems',
          items: ['Legacy Mainframe Policy Connector', 'Reinsurance Risk Engine', 'Fraud Detection Anomaly Scorer']
        }
      ]
    },
    metrics: [
      { label: 'Operational Steps', value: '-42%', context: 'Reduction in manual handoffs between departments' },
      { label: 'Underwriting Time', value: '4 days → 45m', context: 'Projected policy approval turnaround reduction' },
      { label: 'Executive Buy-In', value: '$2.4M', context: 'Transformation budget unlocked by discovery deliverables' }
    ],
    deliverables: [
      'Comprehensive AS-IS and TO-BE Enterprise Service Blueprints',
      'Qualitative Research Synthesis Report (28 IDIs & 4 FGIs)',
      'Clickable Low-to-Mid Fidelity Workflow Prototypes',
      '3-Year Phased Digital Transformation Product Roadmap'
    ],
    governance: {
      security: 'GDPR compliance and strict financial audit trail immutability.',
      accessibility: 'Desktop enterprise ergonomics optimizing dense data scanning without cognitive strain.',
      stakeholders: ['Board of Directors', 'Head of Underwriting', 'Chief Claims Officer', 'IT Infrastructure VP']
    }
  },
  {
    id: 'roche-design-system',
    number: '04',
    title: 'Roche',
    subtitle: 'Global Enterprise Design System & Mentorship',
    client: 'F. Hoffmann-La Roche AG',
    industry: 'Healthcare & Heavy Data',
    category: 'healthcare',
    role: 'Lead Design System Architect & Mentor',
    duration: '18 Months',
    tags: [
      'Design Systems',
      'Governance',
      'Mentorship',
      'Designer-Developer Collaboration'
    ],
    overview:
      'Architected and led the global enterprise design system initiative across Roche’s diagnostics and clinical research web tools. Standardized multi-brand token structures, created high-density data tables, and established design mentorship practices.',
    highlights: [
      {
        phase: 'Phase 1',
        title: 'System Architecture & Design Tokens',
        summary: 'Architected scalable multi-brand Figma token variables for complex clinical data tools.',
        details: [
          'Engineered a 3-layer design token architecture (Global Core -> Semantic Aliases -> Component-Specific Scopes) using Figma Variables and Style Dictionary.',
          'Built high-density clinical data components: micro-sparkline cells, nested biological hierarchy trees, and multi-variable biomarker charts.',
          'Designed light and dark clinical themes calibrated for dim hospital lab environments and bright office workstations.'
        ],
        artifacts: ['Figma Variables Architecture', 'W3C Design Token JSON Specs', 'Clinical Data Table Component Suite']
      },
      {
        phase: 'Phase 2',
        title: 'Governance, Contribution Model & Tooling',
        summary: 'Established a sustainable federated governance model across distributed global engineering teams.',
        details: [
          'Created the Design System Contribution Framework: RFC submission process, cross-discipline review board, and regression testing.',
          'Integrated GitHub Actions to automatically parse Figma token exports into CSS custom properties and TypeScript type definitions.',
          'Formulated strict deprecation schedules ensuring backward compatibility across legacy medical diagnostic suites.'
        ],
        artifacts: ['RFC Contribution Guidelines', 'Automated Token Sync CI/CD Pipeline', 'Version Release Playbook']
      },
      {
        phase: 'Phase 3',
        title: 'Mentorship & Designer-Developer Collaboration',
        summary: 'Mentored 20+ product designers and bridged communication gaps with frontend engineers.',
        details: [
          'Held bi-weekly Design System Office Hours and hands-on workshops coaching designers on Auto Layout v5, token logic, and accessibility.',
          'Paired directly with lead React engineers to review component API design, keyboard navigation traps, and ARIA role mappings.',
          'Authored comprehensive documentation in Storybook and Zeroheight, transforming adoption from 24% to 89% across active product pods.'
        ],
        artifacts: ['Design System University Curriculum', 'Storybook ARIA Guidelines', 'Quarterly Adoption Scorecards']
      }
    ],
    architectureBlueprint: {
      type: 'Enterprise Token & Component Hierarchy',
      description: 'Synchronized pipeline from Figma variables through Style Dictionary to production React packages.',
      layers: [
        {
          layerName: 'Tier 1: Global Primitives',
          items: ['Color Hues (50-950)', 'Spacing Grid (4px/8px)', 'Typography Scales', 'Radius & Motion Curves']
        },
        {
          layerName: 'Tier 2: Semantic Intent & Modes',
          items: ['Background / Surface Tokens', 'State Accents (Clinical Alert, Normal, Warning)', 'Density Modes (Compact vs Default)']
        },
        {
          layerName: 'Tier 3: Component Implementations',
          items: ['Biomarker Data Table', 'Micro-Sparklines', 'Multi-Select Facet Drawer', 'Dosage Range Sliders']
        }
      ]
    },
    metrics: [
      { label: 'System Adoption', value: '89%', context: 'Across 14 global healthcare software teams' },
      { label: 'Sprint Velocity', value: '+35%', context: 'Faster UI delivery for newly scaffolded clinical tools' },
      { label: 'Design Consistency', value: '98%', context: 'Component reuse audit across active product repositories' }
    ],
    deliverables: [
      'Multi-Brand Enterprise Figma Component Library & Variables',
      'Automated Token Export Pipeline (Figma → Style Dictionary → NPM)',
      'Storybook Component Documentation & Accessibility Handbooks',
      'Mentorship & Contribution Playbook for Global Design Teams'
    ],
    governance: {
      security: 'Compliant with HIPAA data masking and clinical research audit standards.',
      accessibility: 'ISO 9241-110 dialogue principles & WCAG 2.1 AA certified for medical monitors.',
      stakeholders: ['Global Head of UX', 'Clinical Diagnostics Product Directors', 'Principal Enterprise Architects', 'Global Regulatory Affairs']
    }
  },
  {
    id: 'stx-next',
    number: '05',
    title: 'STX Next',
    subtitle: 'Data Experience Design & Analytics Offering',
    client: 'STX Next / Enterprise Clients',
    industry: 'Enterprise B2B SaaS',
    category: 'enterprise',
    role: 'Co-Lead Data Experience Design',
    duration: '12 Months',
    tags: [
      'Data Experience',
      'Analytics Dashboards',
      'Offering Leadership'
    ],
    overview:
      'Co-founded and pioneered the "Data Experience Design" (DXD) offering at Europe’s largest Python software house. Formulated frameworks and delivered advanced analytics dashboards that transform raw data streams into intuitive decision cockpits.',
    highlights: [
      {
        phase: 'Phase 1',
        title: 'Service Creation & Offering Leadership',
        summary: 'Pioneered an end-to-end consulting framework bridging Data Science models with user-centric UI.',
        details: [
          'Identified strategic gap in enterprise consulting: sophisticated machine learning models failed to drive impact due to unreadable, cluttered BI dashboards.',
          'Co-founded the Data Experience Design practice, defining service offerings, pitch collateral, and scoping estimation playbooks.',
          'Trained cross-functional sales engineering and product teams on metric-to-action design principles.'
        ],
        artifacts: ['DXD Service Offering Deck', 'Data-to-Action Maturity Matrix', 'Client Scoping Playbook']
      },
      {
        phase: 'Phase 2',
        title: 'Delivery: Metric-to-Action Dashboards',
        summary: 'Designed custom enterprise telemetry cockpits, interactive filtering engines, and metric cards.',
        details: [
          'Delivered bespoke dashboard suites for enterprise fintech, supply chain, and IoT clients handling millions of streaming data points.',
          'Engineered the "Metric-to-Action" pattern: every KPI card couples a descriptive status with a prescriptive contextual action trigger.',
          'Built 5 live interactive prototype dashboards to demonstrate real-time telemetry rendering and zero-latency filtering.'
        ],
        artifacts: ['5 Interactive Dashboard Prototypes', 'Metric Card Component Specification', 'Telemetry Filter Logic Schematics']
      }
    ],
    architectureBlueprint: {
      type: 'Data Experience Design (DXD) Pipeline',
      description: 'Systematic transformation of raw telemetry into actionable user triggers.',
      layers: [
        {
          layerName: 'Stage 1: Raw Telemetry Ingestion',
          items: ['Data Pipeline Streams', 'Real-time WebSocket Feeds', 'Event Logs & Latency Counters']
        },
        {
          layerName: 'Stage 2: Semantic Normalization',
          items: ['Threshold Classification', 'Statistical Anomaly Detection', 'Aggregated Time Buckets']
        },
        {
          layerName: 'Stage 3: Decision & Action Layer',
          items: ['Contextual KPI Cards', 'Interactive Cohort Sliders', 'One-Click Mitigation Triggers']
        }
      ]
    },
    metrics: [
      { label: 'Interactive Dashboards', value: '5 Live', context: 'Production-grade prototypes showcased to clients' },
      { label: 'Commercial Win Rate', value: '+45%', context: 'In data-intensive client RFP pitches' },
      { label: 'Cognitive Load', value: '-60%', context: 'Reduction in operator time required to spot critical anomalies' }
    ],
    deliverables: [
      '5 Publicly Accessible Live Dashboard Prototypes (Vercel)',
      'Data Experience Design (DXD) Enterprise Methodology Framework',
      'Advanced Metric Card & Telemetry Data Visualization UI Kit',
      'Interactive Filtering Mechanics & Progressive Disclosure Specs'
    ],
    governance: {
      security: 'Role-based access control (RBAC) visualization and tenant data isolation.',
      accessibility: 'Contrast-safe categorical color palettes for data visualizations (ColorBrewer optimized).',
      stakeholders: ['STX Next Board', 'Vice President of Consulting', 'Enterprise B2B Client CTOs', 'Lead Data Scientists']
    }
  }
];

export const METHODOLOGY_STAGES = [
  {
    step: '01',
    title: 'Discovery & Strategic Alignment',
    summary: 'Deconstruct complex domain constraints through IDIs, FGIs, and AS-IS service blueprinting.',
    description:
      'Senior UX in enterprise environments begins before a single pixel is placed. I conduct rigorous qualitative interviews with subject matter experts, underwrite legal/regulatory boundaries, and map AS-IS operational friction points to expose root causes.',
    keyPoints: [
      'In-Depth Interviews (IDI) with domain specialists (underwriters, traders, clinicians)',
      'Focus Group Interviews (FGI) and stakeholder consensus mapping',
      'AS-IS Service Blueprinting to expose manual cross-silo handoffs',
      'Regulatory constraint scoping (PSD2, EAA, HIPAA, WCAG, GDPR)'
    ]
  },
  {
    step: '02',
    title: 'Information Architecture & Data Density',
    summary: 'Structure deep cognitive hierarchies, progressive disclosure, and tabular models.',
    description:
      'Information-rich products fail when designers either over-simplify or clutter. I employ mathematical hierarchy, tabular numerals, progressive disclosure, and density modes (compact vs. comfortable) so operators can process dense metrics without cognitive fatigue.',
    keyPoints: [
      'Metric-to-Action design: pairing every status with a prescriptive reaction',
      'Progressive disclosure: executive summaries cascading into deep audit logs',
      'Tabular data modeling: sorting, pinning, multi-facet filtering, and sparklines',
      'Cognitive load budgeting to prevent visual fatigue under pressure'
    ]
  },
  {
    step: '03',
    title: 'Tokenized Systems & Governance',
    summary: 'Build scalable multi-brand Figma libraries, design tokens, and zero-drift developer handoffs.',
    description:
      'A design system is a living infrastructure product. I engineer 3-tier token systems (Global -> Semantic -> Component) linked to automated GitHub Action pipelines, pairing directly with frontend engineers to guarantee 1:1 code parity.',
    keyPoints: [
      'W3C-compliant token hierarchies using Figma Variables & Style Dictionary',
      'Multi-brand & multi-density support for diverse digital ecosystems',
      'Strict WCAG 2.1/2.2 AA accessibility audits (screen readers, color blindness)',
      'Federated governance, RFC contribution models, and designer mentorship'
    ]
  },
  {
    step: '04',
    title: 'Rapid Validation & Telemetry Loops',
    summary: 'Accelerate iteration cycles with vibe-prototyping and validate through real-user testing.',
    description:
      'I blend AI-assisted visual experimentation with moderated usability testing to de-risk high-stakes investments. By putting functional prototypes in front of users early, we achieve rapid consensus and sub-second execution speeds.',
    keyPoints: [
      'AI-assisted vibe-prototyping for rapid visual & structural exploration',
      'High-fidelity interactive prototypes simulating streaming telemetry',
      'Moderated usability lab testing with System Usability Scale (SUS) benchmarks',
      'Continuous telemetry monitoring for post-deployment usability optimization'
    ]
  }
];
