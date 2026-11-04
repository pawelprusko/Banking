import { CaseStudy, LiveAsset } from '../types/portfolio';

export const LIVE_ASSETS: LiveAsset[] = [
  {
    id: 'roche-design-system',
    title: 'Roche Global Design System & Data Viz Standards',
    subtitle: 'Healthcare · Data-Dense Products',
    url: 'https://www.figma.com/design/jpGf8NVGHgLwfVcWNjKaDb/Tableau-1.1---R-Design-System--1-?node-id=7-9471&t=2ll65dT8YFsfMUEo-1',
    buttonLabel: 'Inspect Figma Design System File',
    description:
      'Enterprise component libraries, educational guidelines, and BI templates built for data-dense web tools, clinical software, and analytics dashboards.',
    highlights: [
      'Created deeply customized Figma component libraries and dedicated educational guidebooks focused entirely on complex data visualization.',
      'Collaborated directly with the Tableau Product Owner to establish official enterprise Tableau dashboard templates and chart-oriented color palettes accessible directly within the Tableau platform for BI developers.',
      'Established strict, accessible data visualization color systems fully aligned with Roche Brand guidelines, ensuring optimal contrast and readability.',
      'Standardized complex data tables, multi-column filters, metric cards, and design tokens to maintain complete alignment between design and engineering.'
    ],
    structuredHighlights: [
      {
        label: 'Design System & Educational Materials',
        detail: 'Created deeply customized Figma component libraries and dedicated educational guidebooks focused entirely on complex data visualization.'
      },
      {
        label: 'Tableau Integration',
        detail: 'Collaborated directly with the Tableau Product Owner to establish official enterprise Tableau dashboard templates and chart-oriented color palettes accessible directly within the Tableau platform for BI developers.'
      },
      {
        label: 'Brand-Aligned Data Palettes',
        detail: 'Established strict, accessible data visualization color systems fully aligned with Roche Brand guidelines, ensuring optimal contrast and readability.'
      },
      {
        label: 'Component Specs & Data Patterns',
        detail: 'Standardized complex data tables, multi-column filters, metric cards, and design tokens to maintain complete alignment between design and engineering.'
      }
    ]
  },
  {
    id: 'stx-next-dashboards',
    title: 'STX Next — Data Experience Design Offering & Dashboards',
    subtitle: 'B2B SaaS · Dashboards & Analytics',
    description:
      'Created the Data Experience Design framework and designed dashboards that turn complex infrastructure data into clear, actionable views.',
    scope: 'Led the design of custom analytics dashboards and established our data UX offering.',
    impact: 'Built clear, decision-focused dashboards that help teams spot anomalies and take action faster.',
    highlights: [
      'Dashboard layout model connecting dense metrics directly to user actions',
      'Multi-dimensional filtering that reduces visual noise for executives and operators alike'
    ],
    presentations: [
      {
        id: 'cudos',
        title: '1. AWS CUDOS: Cloud Billing Analytics for Executive Strategy',
        subtitle: 'Transforming Cloud Billing Analytics Into Executive Strategy',
        description: 'How we turned overwhelming AWS billing data into clear, decision-ready dashboards for leadership.',
        pdfUrl: 'https://drive.google.com/file/d/14B2Jqb4epv-GSTmjocLK7lsiMvwmhwTm/view'
      },
      {
        id: 'finops',
        title: '2. Finops Cloud Intelligence: Financial Dashboards for Cloud Ecosystems',
        subtitle: 'Actionable Cloud Intelligence Analytics',
        description: 'Designing financial dashboards in Snowflake to make multi-cloud costs easy to track and optimize.',
        pdfUrl: 'https://drive.google.com/file/d/1SQpZMhshXDdSwAnOsq979A8VadZKavoL/view'
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
    duration: '6 Months',
    tags: [
      'Web & Mobile UX',
      'Discovery',
      'Rapid Prototyping',
      'AI-Assisted Design'
    ],
    overview:
      'Product design for a web and mobile portfolio app that brings traditional banking balances and crypto holdings together into a clear, secure experience.',
    highlights: [
      {
        phase: 'Discovery',
        title: 'User Research & Market Analysis',
        summary: 'Identified user anxieties around crypto transfers, fluctuating fees, and wallet security.',
        details: [
          'Interviewed active crypto traders and private banking clients to understand where they get stuck or hesitate.',
          'Analyzed popular fintech and crypto apps to see what made transaction flows feel trustworthy versus confusing.',
          'Mapped key user worries around blockchain jargon, network fees, and sending funds to the wrong address.'
        ],
        artifacts: ['User Interview Notes', 'Competitor Teardowns', 'User Journey Map']
      },
      {
        phase: 'Alignment',
        title: 'Product Scope & Requirements',
        summary: 'Balanced compliance requirements with a straightforward portfolio overview.',
        details: [
          'Ran regular workshops with compliance, legal, and engineering to define must-haves for MVP.',
          'Structured the core screens: total balance, asset breakdown, performance over time, and transfer flows.',
          'Designed security flows for biometric login, transaction confirmations, and session timeouts.'
        ],
        artifacts: ['Feature Matrix', 'App Navigation Map', 'Security Flow Specs']
      },
      {
        phase: 'Prototyping',
        title: 'Rapid Prototyping & Figma Components',
        summary: 'Explored visual layouts quickly, then built a clean, reusable component library.',
        details: [
          'Used rapid visual exploration to test chart styles, card densities, and layout options in days.',
          'Built a modular Figma library with consistent spacing, tokens, and accessible color variants.',
          'Ensured chart colors and balance indicators remain easy to read in both light and dark modes.'
        ],
        artifacts: ['Figma Component Library', 'Clickable Mobile Prototype', 'Token Stylesheet']
      },
      {
        phase: 'Iteration',
        title: 'Usability Testing & Refinements',
        summary: 'Tested transfer flows with real users to ensure fees and destination checks were crystal clear.',
        details: [
          'Ran usability sessions on interactive prototypes, focusing on deposit and withdrawal flows.',
          'Replaced technical gas fee sliders with simple, plain-language options showing real fiat costs.',
          'Added explicit confirmation screens to verify recipient addresses and selected networks before signing.'
        ],
        artifacts: ['Usability Test Summary', 'Revised Transfer Flows', 'Developer Handoff Specs']
      }
    ],
    architectureBlueprint: {
      type: 'Portfolio Structure',
      description: 'A clean 3-level structure from high-level balances down to individual transactions.',
      layers: [
        {
          layerName: 'Level 1: Overview',
          items: ['Total Portfolio Value', '24h Balance Change', 'Quick Actions (Send, Receive, Swap)', 'Asset Allocation Chart']
        },
        {
          layerName: 'Level 2: Holdings & History',
          items: ['Fiat Accounts', 'Crypto Wallets', 'Transaction History', 'Performance Charts']
        },
        {
          layerName: 'Level 3: Transactions',
          items: ['Address Validation', 'Fee Breakdown in Fiat', 'Biometric Confirmation', 'Receipt & Status Screen']
        }
      ]
    },
    deliverables: [
      'Web & Mobile Component Library (Figma)',
      'Clickable Prototypes for Key Flows',
      'Design Tokens for Frontend Developers',
      'Usability Findings & Recommendations'
    ],
    governance: {
      security: 'Designed in line with Strong Customer Authentication (SCA) and mobile biometric standards.',
      accessibility: 'Tested for high-contrast chart readability and dynamic system text sizing.',
      stakeholders: ['Product Managers', 'Compliance & Legal Counsel', 'Frontend & Mobile Engineers']
    }
  },
  {
    id: 'coi-mobywatel',
    number: '02',
    title: 'COI (Polish Central IT Centre)',
    subtitle: 'mObywatel & gov.pl Ecosystem',
    client: 'Polish Central IT Centre (COI) / Ministry of Digital Affairs',
    industry: 'Public Sector & GovTech',
    category: 'govtech',
    role: 'Senior UX/UI Consultant',
    duration: '12 Months',
    tags: [
      'Mass-Scale Mobile UX',
      'Digital Identity',
      'WCAG 2.1/2.2',
      'Multi-Stakeholder'
    ],
    overview:
      'UX/UI design for digital public services in mObywatel—Poland’s national citizen identity app. Focused on accessibility, document verification, and clear navigation for millions of citizens.',
    highlights: [
      {
        phase: 'Scope',
        title: 'Citizen Service Design',
        summary: 'Designing digital documents that are clear and accessible to everyone, regardless of age or digital literacy.',
        details: [
          'Designed presentation layouts for official documents, including national ID and driver licenses.',
          'Ensured smooth, fast rendering even on older and low-cost smartphones.',
          'Created offline-first views so citizens can verify their documents without an active internet connection.'
        ],
        artifacts: ['User Journey Maps', 'Offline Presentation Flows', 'Document Layout Specs']
      },
      {
        phase: 'Accessibility',
        title: 'WCAG 2.1 / 2.2 Accessibility',
        summary: 'Designing for strict public sector accessibility standards and assistive tech.',
        details: [
          'Followed European and Polish digital accessibility laws (WCAG 2.1/2.2 AA).',
          'Tested directly with VoiceOver and TalkBack screen readers for proper reading order and accessible labels.',
          'Used minimum 48×48px tap targets and high-contrast color pairings across light and dark themes.'
        ],
        artifacts: ['Accessibility Checklist', 'Screen Reader Specifications', 'Contrast Audit']
      },
      {
        phase: 'Alignment',
        title: 'Stakeholder Alignment',
        summary: 'Coordinating requirements between government ministries, legal teams, and backend engineers.',
        details: [
          'Worked with ministerial representatives, legal advisers, and security teams on document standards.',
          'Designed anti-forgery visual elements, such as animated holograms and dynamic security watermarks.',
          'Created shared design guidelines for independent engineering teams building microservices.'
        ],
        artifacts: ['Cross-Ministry Alignment Notes', 'Hologram & Security Specs', 'Design System Guidelines']
      }
    ],
    architectureBlueprint: {
      type: 'Document Verification Flow',
      description: 'How digital documents are stored, presented, and verified on-device and offline.',
      layers: [
        {
          layerName: 'On-Screen Document',
          items: ['Dynamic Hologram', 'QR Code for In-Person Verification', 'Document Data & Expiry', 'Offline Encrypted Cache']
        },
        {
          layerName: 'Verification Flow',
          items: ['Field Officer In-Person Check', 'Cryptographic Token Refresh', 'Biometric Device Unlock']
        },
        {
          layerName: 'Backend Integration',
          items: ['National Citizen Register (PESEL)', 'Vehicle & Driver Database (CEPiK)', 'Audit Logs']
        }
      ]
    },
    deliverables: [
      'Mobile Component Library in Figma',
      'WCAG 2.1 / 2.2 AA Guidelines & Screen Reader Notes',
      'Security & Hologram Animation Specs',
      'User Flows for Onboarding & Document Setup'
    ],
    governance: {
      security: 'Hardware-backed keystore encryption and dynamic security elements to prevent screenshot forgery.',
      accessibility: 'WCAG 2.1 AA compliant across all document views.',
      stakeholders: ['Ministry of Digital Affairs', 'COI Engineering Leads', 'Verification Authorities', 'Security Advisors']
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
    duration: '3 Months',
    tags: [
      'Deep Discovery',
      'IDI',
      'Focus Groups',
      'Service Blueprinting',
      'Product Vision'
    ],
    overview:
      'A 3-month UX discovery engagement for an insurance group: analyzing operational bottlenecks, interviewing adjusters, and creating a unified product vision for their claims platform.',
    highlights: [
      {
        phase: 'Research',
        title: 'User Interviews & Focus Groups',
        summary: 'Identified daily frustrations across claims adjusters, underwriters, and corporate clients.',
        details: [
          'Conducted in-depth interviews with claims adjusters, underwriters, and operational leads.',
          'Ran focus groups with enterprise clients to understand policy and claim expectations.',
          'Pinpointed the main bottleneck: adjusters were jumping between 7 disconnected legacy tools to process a single claim.'
        ],
        artifacts: ['Interview Transcripts & Insights', 'User Personas', 'Pain Point Map']
      },
      {
        phase: 'Blueprinting',
        title: 'Service Blueprinting (Current vs Future State)',
        summary: 'Mapped out operational processes from customer claim submission to final payout.',
        details: [
          'Mapped the current process, connecting client actions with adjuster tasks and legacy database steps.',
          'Designed a streamlined future-state blueprint that cut out redundant manual handoffs and duplicate data entry.',
          'Clarified the end-to-end journey from initial accident notice to automated intake and settlement.'
        ],
        artifacts: ['Current-State Service Blueprint', 'Future-State Target Blueprint', 'Process Bottleneck Analysis']
      },
      {
        phase: 'Vision',
        title: 'Product Vision & Wireframes',
        summary: 'Turned research findings into a clear product roadmap and clickable wireframes.',
        details: [
          'Built interactive wireframe prototypes to test and validate new claim handling flows with adjusters.',
          'Created an executive presentation showing feature priorities, system consolidation, and rollout stages.',
          'Delivered prioritized user stories and wireframe specs ready for engineering estimation.'
        ],
        artifacts: ['Executive Product Vision Deck', 'Phased Rollout Roadmap', 'Clickable Wireframe Prototypes']
      }
    ],
    architectureBlueprint: {
      type: 'Claims Platform Structure',
      description: 'Connecting customer self-service with internal adjuster workflows.',
      layers: [
        {
          layerName: 'Client & Broker Portal',
          items: ['Step-by-Step Claim Wizard', 'Document & Photo Upload', 'Live Claim Status Tracker']
        },
        {
          layerName: 'Claims & Underwriting Desk',
          items: ['Incoming Triage Queue', 'All-in-One Document Viewer', 'Settlement Calculation & Approval']
        },
        {
          layerName: 'Backend & Core Systems',
          items: ['Policy Database', 'Document Storage & Audit Trail', 'Notification Engine']
        }
      ]
    },
    deliverables: [
      'Current-State and Future-State Service Blueprints',
      'User Research Synthesis (Interviews & Focus Groups)',
      'Clickable Workflow Wireframes',
      'Product Strategy & Rollout Plan'
    ],
    governance: {
      security: 'Compliant with GDPR and financial audit trail requirements.',
      accessibility: 'Designed for comfortable, all-day desktop use with clear typography and low visual strain.',
      stakeholders: ['Operations Directors', 'Head of Underwriting', 'Claims Team Leads', 'IT Architects']
    }
  }
];
