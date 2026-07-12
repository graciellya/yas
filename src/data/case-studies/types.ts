export type CaseStudyPersona = {
  name: string;
  age: number;
  role: string;
  summary: string;
  goals: string[];
};

export type CaseStudyJob = {
  when: string;
  want: string;
  soThat: string;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
  priority: "P0 — Launch" | "P1 — Post-launch";
};

export type CaseStudyMilestone = {
  phase: string;
  timeframe: string;
  items: string[];
};

export type CaseStudyKpi = {
  category: string;
  metrics: string[];
};

export type CaseStudyScreenshot = {
  src: string;
  title: string;
  caption: string;
};

export type CaseStudy = {
  slug: string;
  productName: string;
  tagline: string;
  team: string[];
  year: string;
  heroLabel?: string;
  pdfSrc?: string;
  documents?: { label: string; src: string }[];
  logo?: string;
  overview: {
    introduction: string;
    problem: string;
    solution: string[];
  };
  objectives: {
    primary: string[];
    secondary: string[];
  };
  scope: {
    inScope: string[];
    outOfScope: string[];
  };
  personas: CaseStudyPersona[];
  jobsToBeDone: CaseStudyJob[];
  features: CaseStudyFeature[];
  nonFunctional: string[];
  techStack: { category: string; tools: string[] }[];
  teamRoles: { group: string; roles: string[] }[];
  budget: { label: string; amount: string }[];
  testing: {
    strategy: string[];
    qa: string[];
    targets: string[];
  };
  kpis: CaseStudyKpi[];
  successCriteria: string[];
  milestones: CaseStudyMilestone[];
  goToMarket: { phase: string; summary: string; tactics: string[] }[];
  research: { stat: string; source?: string }[];
  constraints: string[];
  experiencePrototypes?: {
    name: string;
    hypothesis: string;
    learning: string;
  }[];
  taskFlows?: {
    level: string;
    title: string;
    description: string;
    image?: string;
  }[];
  heuristicFixes?: {
    issue: string;
    fix: string;
  }[];
  featureFlow?: {
    src: string;
    title: string;
    caption: string;
  };
  videoSrc?: string;
  videoPoster?: string;
  screenshots: CaseStudyScreenshot[];
};
