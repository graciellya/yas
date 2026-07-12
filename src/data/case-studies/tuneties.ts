import type { CaseStudy } from "./types";

export const tunetiesCaseStudy: CaseStudy = {
  slug: "tuneties",
  productName: "TuneTies",
  tagline: "Find the beat of your community",
  heroLabel: "Product design · CS147 · Research to shipped prototype",
  team: ["Lizi Ottens", "Gracielly Abreu", "Max Murrell", "Steven Beckley"],
  year: "2023",
  pdfSrc: "/work/tuneties/tuneties-report.pdf",
  documents: [
    {
      label: "Final report",
      src: "/work/tuneties/tuneties-report.pdf",
    },
    {
      label: "Med-fi prototype",
      src: "/work/tuneties/tuneties-prototype.pdf",
    },
  ],
  logo: "/work/tuneties/gallery-logo.png",
  overview: {
    introduction:
      "TuneTies is a community-driven mobile app for discovering local live music events and connecting listeners, friends, and artists — from needfinding through med-fi and hi-fi React Native prototype.",
    problem:
      "Live music is highly desirable but hard to discover. Small artists struggle to promote events without large budgets, and existing apps rarely focus on connection. Listeners crave intimate local shows they stumble upon but can't find consistently.",
    solution: [
      "Centralized, location-based discovery for live music events nearby.",
      "Community features to share events with friends and build local music circles.",
      "Artist tools to promote events regardless of size, price, or skill level.",
    ],
  },
  objectives: {
    primary: [
      "Validate that users will follow location-based prompts to discover unknown live events.",
      "Design intuitive task flows for finding, sharing, and creating events.",
      "Ship a testable hi-fi prototype built in React Native with real interaction patterns.",
    ],
    secondary: [
      "Improve discoverability with genre filters, search, and map + list views.",
      "Meet accessibility standards across colorblind filters and readable typography.",
      "Differentiate Friends vs Events tabs for clearer information architecture.",
    ],
  },
  scope: {
    inScope: [
      "Map-based event discovery with heatmap and calendar filtering.",
      "Social features: add friends, share events, community profiles.",
      "Artist event creation flow with captions, genres, and promotion tools.",
      "Lo-fi → med-fi → hi-fi design iteration with usability and heuristic evaluation.",
    ],
    outOfScope: [
      "Production backend with real user-generated event data at launch.",
      "Smartwatch UI (explored, deprioritized for legibility).",
      "Virtual reality at-home concert concept (tested, not selected).",
    ],
  },
  personas: [
    {
      name: "Terry",
      age: 40,
      role: "Spontaneous jazz listener · local bars",
      summary:
        "Enjoys dropping in on live music he discovers but defaults to favorite venues because new events are hard to find spontaneously.",
      goals: [
        "Find new live music in his area without planning ahead.",
        "Discover intimate local performances beyond his usual spots.",
      ],
    },
    {
      name: "Evan",
      age: 20,
      role: "College student · monthly concert-goer",
      summary:
        "Listens to many genres but mostly attends rap concerts — live music is about the experience, not just the artist.",
      goals: [
        "Discover live music based on the type of experience he wants.",
        "Find events that match vibe and crowd energy, not just genre labels.",
      ],
    },
    {
      name: "Elle",
      age: 25,
      role: "Graduate · frequent live events",
      summary:
        "Believes concerts should be a shared experience; loves meeting interesting people in the crowd and feeling part of a community.",
      goals: [
        "Connect with people who share similar music taste at events.",
        "Build community through live music, not just attend alone.",
      ],
    },
  ],
  jobsToBeDone: [
    {
      when: "I want local live events to be more discoverable",
      want: "Browse nearby events on a map with filters and calendar context",
      soThat: "I can find shows spontaneously in my community",
    },
    {
      when: "I want to share a show with people I know",
      want: "Send event invites to friends inside the app",
      soThat: "Attending live music becomes a social experience",
    },
    {
      when: "I'm an artist promoting a small gig",
      want: "Create and publish an event with genre tags and details",
      soThat: "I can reach listeners without a big marketing budget",
    },
  ],
  features: [
    {
      title: "Discover · Map & calendar",
      description:
        "Location-based heatmap with live event markers, current location selector, and calendar/time filtering for nearby shows.",
      priority: "P0 — Launch",
    },
    {
      title: "Events · Share & invite",
      description:
        "Share events with friends, see invite status, and encourage group attendance for community building.",
      priority: "P0 — Launch",
    },
    {
      title: "Connect · Friends & artists",
      description:
        "Browse community profiles, add friends, and discover artists and listeners in your local music scene.",
      priority: "P0 — Launch",
    },
    {
      title: "Create · Artist event promotion",
      description:
        "Multi-step event creation with captions, genres, and publishing flow for artists to promote gigs.",
      priority: "P0 — Launch",
    },
    {
      title: "Filter & search",
      description:
        "Genre filters and search by artist or venue — added after usability testing feedback.",
      priority: "P1 — Post-launch",
    },
  ],
  nonFunctional: [
    "Accessible color palette validated across colorblind simulation filters.",
    "Checkbox and selection states use icon shape, not color alone.",
    "Readable typography with improved font size and contrast on map views.",
    "Cross-platform React Native + Expo Go for multi-device testing.",
  ],
  techStack: [
    { category: "Design", tools: ["Figma", "Maze usability testing"] },
    { category: "Prototype", tools: ["React Native", "Expo Go"] },
    { category: "Research", tools: ["Interviews", "Empathy maps", "Experience prototypes"] },
    { category: "Course", tools: ["Stanford CS147 · HCI design"] },
  ],
  teamRoles: [
    {
      group: "Team TuneTies",
      roles: [
        "Lizi Ottens · PM / Developer",
        "Gracielly Abreu · Designer",
        "Max Murrell · Developer",
        "Steven Beckley · PM / Designer",
      ],
    },
  ],
  budget: [],
  testing: {
    strategy: [
      "6 needfinding interviews with concert-goers and performing artists.",
      "Experience prototypes: Music Radar, Musical Dating App, At-Home Concert.",
      "Lo-fi and med-fi usability testing with iterative UI revisions.",
      "Heuristic evaluation with peer design group (severity 3–4 fixes prioritized).",
    ],
    qa: [
      "Revised Connect/Community tabs → Friends/Events for clarity.",
      "Added + button on Events tab for event creation affordance.",
      "User location pin, invite history, and username display on profiles.",
    ],
    targets: [
      "Users completed core discover → share → create flows in testing.",
      "No major colorblind accessibility failures after palette audit.",
      "Heuristic violations H1, H3, H4, H6, H11, H12 addressed in med-fi revision.",
    ],
  },
  kpis: [
    {
      category: "Research",
      metrics: [
        "3 synthesis themes: experience, community, discovery friction.",
        "3 POV statements driving HMW brainstorm.",
      ],
    },
    {
      category: "Design",
      metrics: [
        "4 task flows implemented in med-fi prototype.",
        "2 wizard-of-oz features for map events and fake friend network.",
      ],
    },
    {
      category: "Delivery",
      metrics: [
        "Hi-fi React Native prototype with customizable event creation.",
        "Full design evolution documented from sketches to final build.",
      ],
    },
  ],
  successCriteria: [
    "Music Radar concept validated — users willing to follow discovery prompts.",
    "Friends vs Events IA clarified through usability testing.",
    "Accessibility pass on colorblind filters and checkbox patterns.",
    "Shipped interactive prototype demoable on device via Expo.",
  ],
  milestones: [
    {
      phase: "Needfinding",
      timeframe: "Weeks 1–3",
      items: [
        "6 interviews at live venues + remote sessions with artists and listeners.",
        "Empathy maps and synthesis into experience, community, and discovery themes.",
      ],
    },
    {
      phase: "Experience prototypes",
      timeframe: "Weeks 4–5",
      items: [
        "Tested Music Radar, Musical Dating App, and At-Home Concert concepts.",
        "Selected Music Radar → rebranded to TuneTies for broadest user reach.",
      ],
    },
    {
      phase: "Lo-fi → Med-fi",
      timeframe: "Weeks 6–8",
      items: [
        "Mobile vs smartwatch exploration; mobile selected for richer UI.",
        "Three task levels: find event (simple), share (moderate), create (complex).",
      ],
    },
    {
      phase: "Hi-fi build",
      timeframe: "Weeks 9–10",
      items: [
        "Figma spec translated to React Native with Expo Go.",
        "Heuristic evaluation fixes and final prototype demo.",
      ],
    },
  ],
  goToMarket: [
    {
      phase: "Next steps",
      summary: "Path from academic prototype toward a production-ready app.",
      tactics: [
        "App Store deployment with richer event customization.",
        "Profile customization for artists and their musical niche.",
        "In-app communication and concert-going party features.",
      ],
    },
  ],
  research: [
    {
      stat: "Live events are about experience — venue, intimacy, crowd, and who you're with — not music alone.",
    },
    {
      stat: "Community and culture strongly influence how enjoyable a concert feels, even for solo attendees.",
    },
    {
      stat: "Local events are desirable but underground and hard to find; artists lack promotion budgets.",
    },
  ],
  constraints: [
    "Users in non-walkable or low-event areas may have sparse discovery results.",
    "Leading users to unsafe areas and pedestrian distraction are ethical risks.",
    "Prototype used wizard-of-oz map data and fake users without a live backend.",
  ],
  experiencePrototypes: [
    {
      name: "Music Radar",
      hypothesis: "Users will follow directions to unknown live events nearby.",
      learning:
        "Users accept reasonable risk, but repeated bad destinations would kill trust — validated core concept.",
    },
    {
      name: "Musical Dating App",
      hypothesis: "Music taste is enough to connect strangers.",
      learning:
        "Great icebreaker for conversation, but insufficient as the center of a product.",
    },
    {
      name: "At-Home Concert",
      hypothesis: "Multimodal VR + haptics can simulate live concert ambience.",
      learning:
        "Increasing immersion improved experience, but hardware cost limits ubiquity.",
    },
  ],
  taskFlows: [
    {
      level: "Simple",
      title: "Finding a local live event",
      description:
        "Core discover flow — map, markers, calendar filter, and event details with minimal steps.",
      image: "/work/tuneties/report-p20-2.png",
    },
    {
      level: "Moderate",
      title: "Sharing events with friends",
      description:
        "Find an event, select friends, and send invites with visible invite status.",
      image: "/work/tuneties/report-p21-2.png",
    },
    {
      level: "Complex",
      title: "Creating & promoting an event",
      description:
        "Artist-only flow with prompts for event details, genres, and publishing.",
      image: "/work/tuneties/report-p23-2.png",
    },
  ],
  heuristicFixes: [
    {
      issue: "Colorblind users struggled with checkbox status",
      fix: "Distinct selected vs unselected icons instead of color-only states.",
    },
    {
      issue: "User location unclear on map",
      fix: "Added location pin and improved map contrast and typography.",
    },
    {
      issue: "Connect vs Community tabs confused users",
      fix: "Renamed to Friends and Events with clearer affordances.",
    },
    {
      issue: "Follow vs Add inconsistent terminology",
      fix: "Standardized on Add friends; show usernames under display names.",
    },
  ],
  featureFlow: {
    src: "/work/tuneties/report-p16-2.png",
    title: "Lo-fi prototype",
    caption:
      "Early TuneTies screens exploring discover, friends, and event creation before med-fi polish.",
  },
  screenshots: [
    {
      src: "/work/tuneties/prototype-screen-01.png",
      title: "Discover · Map & calendar",
      caption:
        "Location-based event discovery with heatmap markers and September 2023 calendar filter.",
    },
    {
      src: "/work/tuneties/prototype-screen-04.png",
      title: "Onboarding",
      caption: "Explore upcoming and nearby events — value prop for new users.",
    },
    {
      src: "/work/tuneties/prototype-screen-05.png",
      title: "Connect · Community",
      caption:
        "Find your tribe — browse artists and friends in the local music community.",
    },
    {
      src: "/work/tuneties/prototype-screen-06.png",
      title: "Sign in",
      caption: "Auth flow for returning users entering the TuneTies app.",
    },
  ],
};
