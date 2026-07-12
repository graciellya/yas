import type { CaseStudy } from "./types";

export const soundspotCaseStudy: CaseStudy = {
  slug: "soundspot-prd",
  productName: "SoundSpot Backstage",
  tagline: "Tiered membership platform for indie musicians and their fans",
  team: [
    "Shuvi Jha",
    "Lucien Roose",
    "Yalcin Tur",
    "David Zhou",
    "Gracielly Abreu",
  ],
  year: "2025",
  pdfSrc: "/work/soundspot-prd.pdf",
  logo: "/work/soundspot/gallery-logo.png",
  overview: {
    introduction:
      "SoundSpot Backstage is an addition to the SoundSpot ecosystem, designed to empower indie musicians and deepen fan–artist connections through memberships, exclusive content, and local discovery.",
    problem:
      "Post-pandemic, major streaming platforms replicated social features, threatening SoundSpot’s community-first position. Indie musicians face inconsistent income, limited visibility, and difficulty building loyal fanbases. Fans want deeper connections and exclusive access that current platforms fail to provide.",
    solution: [
      "Empower indie musicians with a tiered membership model to stabilize income and increase visibility.",
      "Enhance fan engagement through exclusive content, personalized interactions, and behind-the-scenes access.",
      "Reinforce community values by prioritizing authentic artist–fan relationships over mass-market appeal.",
    ],
  },
  objectives: {
    primary: [
      "Increase artist income by 25% and boost visibility within six months via enhanced profiles and analytics.",
      "Fulfill fan desire for deeper connections through exclusive content, personalized interactions, and local discovery.",
      "Integrate Backstage seamlessly into SoundSpot’s existing platform with smooth onboarding for artists and fans.",
    ],
    secondary: [
      "Retain 75% of Backstage users after the first year through strong artist–fan connections.",
      "Establish Backstage as a top-three platform for artist monetization and fan engagement within 12 months.",
    ],
  },
  scope: {
    inScope: [
      "Artist-focused features: enhanced profiles, analytics, and income tools.",
      "Listener-focused features: exclusive content, personalized interactions, location-based discovery.",
      "Mutual engagement: live Q&As, updates, and local events.",
    ],
    outOfScope: [
      "Core music streaming (remains on main SoundSpot platform).",
      "Mainstream, label-backed artists outside the indie ecosystem.",
      "Integration with external platforms beyond SoundSpot.",
    ],
  },
  personas: [
    {
      name: "Jake",
      age: 30,
      role: "The Hustling Guitarist · Austin",
      summary:
        "Plays in a local band with strong social presence but struggles to book gigs outside Austin and convert casual fans into loyal followers.",
      goals: [
        "Network with promoters and venues in new cities.",
        "Stabilize income through fan memberships and higher-tier interactions.",
      ],
    },
    {
      name: "Maya",
      age: 23,
      role: "The Aspiring Producer · Brooklyn",
      summary:
        "Junior software developer creating lo-fi beats on SoundCloud and TikTok. Wants to go full-time but lacks collaborators and marketing know-how.",
      goals: [
        "Find vocalists and instrumentalists to collaborate with.",
        "Use data-driven marketing and fan memberships for sustainable income.",
      ],
    },
  ],
  jobsToBeDone: [
    {
      when: "I want to monetize my music and engage my most dedicated fans",
      want: "Create multiple membership tiers with exclusive content",
      soThat: "I can increase income and deepen connections with supporters",
    },
    {
      when: "I want to showcase my work and engage fans more effectively",
      want: "Create comprehensive, dynamic artist profiles",
      soThat: "I can present music, videos, and events with tier-based access",
    },
    {
      when: "I join Backstage and want to set up my profile quickly",
      want: "Have past performances automatically integrated into my profile",
      soThat: "I can launch a professional portfolio without manual setup",
    },
    {
      when: "I want to understand my audience and optimize engagement",
      want: "Access detailed analytics on profile performance",
      soThat: "I can grow my fanbase and improve monetization",
    },
    {
      when: "I want to discover and connect with local artists",
      want: "Browse a dynamic, location-specific feed",
      soThat: "I can find nearby musicians, attend events, and build community",
    },
  ],
  features: [
    {
      title: "Exclusive Backstage Content",
      description:
        "Artists create membership tiers from free to $100+/month with varying access to exclusive content, early releases, BTS updates, and personalized fan interactions.",
      priority: "P0 — Launch",
    },
    {
      title: "Enhanced Artist Profiles",
      description:
        "Public portfolios showcasing latest music, videos, behind-the-scenes content, and upcoming events with tier-gated access for fans.",
      priority: "P0 — Launch",
    },
    {
      title: "Onboarding for Existing Musicians",
      description:
        "Smart algorithm pulls key clips from saved live-stream performances to auto-populate artist pages and highlight membership benefits.",
      priority: "P0 — Launch",
    },
    {
      title: "Profile Analytics",
      description:
        "Actionable audience insights so artists can grow fanbases, find creative partnerships, and optimize engagement strategies.",
      priority: "P1 — Post-launch",
    },
    {
      title: "Location-Based Exploration",
      description:
        "Dynamic feed of nearby artists blending music clips with backstage updates, events, and exclusive posts for local discovery.",
      priority: "P1 — Post-launch",
    },
  ],
  nonFunctional: [
    "Support 1.5M current users and scale to 5M concurrent users without degraded response times.",
    "Robust artist verification: ID checks, social linkage, and manual review for flagged profiles.",
    "Data security and privacy compliance with encrypted sensitive data and 2FA for artist accounts.",
    "Secure multi-currency payment processing with fraud detection.",
  ],
  techStack: [
    {
      category: "Frontend",
      tools: ["Flutter (mobile & web)"],
    },
    {
      category: "Backend",
      tools: ["Go", "PostgreSQL", "GraphQL"],
    },
    {
      category: "Design & research",
      tools: ["Figma", "Maze"],
    },
    {
      category: "Infrastructure",
      tools: ["AWS", "GitHub Actions", "Datadog"],
    },
    {
      category: "Collaboration",
      tools: ["GitHub", "Slack", "Jira"],
    },
  ],
  teamRoles: [
    {
      group: "Development",
      roles: [
        "2 Frontend developers",
        "2 Backend developers",
        "1 DevOps engineer",
      ],
    },
    {
      group: "Design",
      roles: ["Product designer", "UX researcher"],
    },
    {
      group: "Product",
      roles: ["Product manager"],
    },
    {
      group: "Go-to-market",
      roles: ["Marketing specialist", "Sales manager"],
    },
    {
      group: "Quality",
      roles: ["QA engineer"],
    },
  ],
  budget: [
    { label: "Personnel", amount: "~$1.5M" },
    { label: "Tools & infrastructure", amount: "~$200K" },
    { label: "Marketing & research", amount: "~$300K" },
  ],
  testing: {
    strategy: [
      "Unit testing with 80%+ code coverage across frontend and backend.",
      "Usability testing with musicians and listeners throughout development.",
      "Performance testing under normal and peak load (JMeter / Gatling).",
      "Closed beta with select artists and fans before full launch.",
    ],
    qa: [
      "QA checkpoints built into the development lifecycle.",
      "Automated test suites in CI/CD with rollback on failure.",
      "Bug triage in Jira categorized by severity.",
    ],
    targets: [
      "Fewer than 1 critical bug per 1,000 lines of code.",
      "90%+ beta tester satisfaction score.",
      "Page load under 2 seconds, 99.9% uptime.",
      "Resolve 95%+ of usability issues identified in testing.",
    ],
  },
  kpis: [
    {
      category: "Adoption",
      metrics: [
        "Artist onboarding rate within first 3 months of launch.",
        "Listener engagement rate vs. total active listener base.",
      ],
    },
    {
      category: "Engagement",
      metrics: [
        "Content upload frequency per artist per month.",
        "Interaction rate on backstage posts.",
        "Session duration for listener engagement.",
      ],
    },
    {
      category: "Revenue",
      metrics: [
        "Premium subscription growth tied to backstage content.",
        "Fan tier upgrade rate after launch.",
      ],
    },
    {
      category: "Retention",
      metrics: [
        "6-month churn rate for artists and listeners.",
        "Weekly returning user rate.",
      ],
    },
  ],
  successCriteria: [
    "50%+ of active artists adopt Backstage within 3 months.",
    "Average of 3 backstage posts per artist per month; 60%+ of premium listeners engaging.",
    "10% increase in premium subscriptions within 6 months.",
    "75% returning user rate for artists and listeners after 6 months.",
    "NPS of 8+ and user satisfaction score of 4.5 / 5.",
  ],
  milestones: [
    {
      phase: "Phase 1 · Pre-launch",
      timeframe: "0–3 months",
      items: [
        "Wireframes and interactive prototype (content feeds, subscription tiers, artist profiles).",
        "Secure 10–15 indie artists as early adopters.",
        "Closed beta with artists and fans; collect feedback and fix bugs.",
      ],
    },
    {
      phase: "Phase 2 · Soft launch",
      timeframe: "4–7 months",
      items: [
        "Ship MVP: artist profiles and exclusive backstage content with chat and comments.",
        "Launch to 1,000 early adopters to test scalability.",
        "Iterate on design, performance, and top-requested features.",
      ],
    },
    {
      phase: "Phase 3 · Full launch",
      timeframe: "7–8 months",
      items: [
        "Marketing campaign: social, influencers, targeted ads.",
        "Public release with expanded content library and polished UX.",
        "Outreach to onboard 100+ additional artists.",
      ],
    },
    {
      phase: "Phase 4 · Growth",
      timeframe: "9–12 months",
      items: [
        "Ship analytics and location-based exploration.",
        "Expand membership tiers and international localization.",
        "Community features: forums, Q&A boards, group listening.",
      ],
    },
  ],
  goToMarket: [
    {
      phase: "Pre-launch",
      summary:
        "Build excitement within SoundSpot’s existing user base through in-app notifications, email teasers, and artist ambassadors.",
      tactics: [
        "Beta program with 10–15 musicians and their fans.",
        "Teaser campaigns and influencer partnerships with indie artists.",
        "Knowledge base, FAQs, and chatbot prep for support.",
      ],
    },
    {
      phase: "Launch",
      summary:
        "Introduce Backstage to 1.5M active SoundSpot users via in-app banners and app-store featuring.",
      tactics: [
        "Festival and showcase outreach with data-driven artist proposals.",
        "Targeted ads on Instagram, TikTok, and YouTube.",
        "Referral program with premium rewards for fans and artists.",
      ],
    },
    {
      phase: "Post-launch",
      summary:
        "Scale reach and deepen presence in the indie music community.",
      tactics: [
        "Artist ambassador program with premium benefits.",
        "“SoundSpot Stories” blog and YouTube series.",
        "Virtual concerts and networking events.",
      ],
    },
  ],
  research: [
    {
      stat: "76% of independent musicians struggle financially.",
      source: "Xposure Music Industry Report 2023",
    },
    {
      stat: "41% lack exposure; 36% find it hard to grow a fanbase.",
      source: "Xposure Music Industry Report 2023",
    },
    {
      stat: "92% of fans crave authenticity; 78% want exclusive content; 85% value direct interactions like Q&As.",
      source: "FanCircles Music Industry Report 2023",
    },
  ],
  constraints: [
    "Real-time interactions (live chat, comments) alongside heavy media uploads.",
    "Copyright protection for uploaded works.",
    "Engagement balance so fan interaction doesn’t overwhelm artists.",
    "Scalable moderation for comments and interactions.",
    "Robust cloud storage and streaming for high-quality audio.",
    "Fraud prevention and global safety compliance.",
  ],
  featureFlow: {
    src: "/work/soundspot/page07-img1.png",
    title: "Feature flow overview",
    caption:
      "End-to-end journey from artist profile and membership tiers to fan engagement and premium analytics.",
  },
  screenshots: [
    {
      src: "/work/soundspot/page06-img1.png",
      title: "Artist profile & backstage",
      caption:
        "Tiered backstage feed with exclusive posts, member-only content, and portfolio tabs for indie artists.",
    },
    {
      src: "/work/soundspot/page06-img2.png",
      title: "Premium insights · Action items",
      caption:
        "Data-driven recommendations helping artists plan tours, collaborations, and content strategy.",
    },
    {
      src: "/work/soundspot/page06-img3.png",
      title: "Premium insights · Must-connect",
      caption:
        "Fan interaction rankings and musician networking to surface top supporters and collaboration opportunities.",
    },
  ],
};
