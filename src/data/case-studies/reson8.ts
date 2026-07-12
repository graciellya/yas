import type { CaseStudy } from "./types";

export const reson8CaseStudy: CaseStudy = {
  slug: "reson8",
  productName: "Reson8",
  tagline: "Algorithmic playlists, tuned to you — share with friends",
  heroLabel: "Application · Shipped prototype",
  team: ["Gracielly Abreu"],
  year: "2025",
  videoSrc: "/work/reson8/demo.mp4",
  videoPoster: "/work/reson8/poster.jpg",
  logo: "/work/reson8/logo.svg",
  overview: {
    introduction:
      "Reson8 is a mobile music app that builds personalized playlists from your taste profile — genres, regions, cultural styles, and Spotify data — then lets you share mixes with friends.",
    problem:
      "Streaming apps recommend songs, but playlists still feel generic. Taste is multidimensional (genre, region, culture, mood), and sharing a curated mix with friends is fragmented across DMs and links.",
    solution: [
      "Generate playlists from an algorithm that weights your stated preferences and listening profile.",
      "Connect Spotify to pull top artists and inform recommendations.",
      "Share playlists and discover music socially through a dedicated friends tab.",
    ],
  },
  objectives: {
    primary: [
      "Ship a working prototype with profile setup, playlist generation, and library views.",
      "Let users define taste dimensions: genres, regional music, and cultural style.",
      "Enable social sharing so playlists become something you send to friends, not just save.",
    ],
    secondary: [
      "Integrate Spotify OAuth for connected listening data.",
      "Support playlist naming, editing, and mood-based mixes.",
      "Maintain readable UI on a bold, music-forward visual identity.",
    ],
  },
  scope: {
    inScope: [
      "Sign up / sign in and profile with taste preferences.",
      "Spotify account connection and top artists display.",
      "Algorithmic playlist creation and library management.",
      "Friends tab for social sharing flows.",
    ],
    outOfScope: [
      "Full music streaming playback licensing.",
      "Production-scale recommendation engine / ML pipeline.",
      "Real-time collaborative playlist editing.",
    ],
  },
  personas: [
    {
      name: "Alex",
      age: 22,
      role: "College listener · heavy Spotify user",
      summary:
        "Makes playlists for every mood but tired of manually digging through the same artists. Wants mixes that reflect regional and cultural taste, not just top 40.",
      goals: [
        "Get playlist suggestions that match nuanced taste tags.",
        "Send a playlist to friends before a road trip or party.",
      ],
    },
    {
      name: "Jordan",
      age: 27,
      role: "DJ & curator · friend group tastemaker",
      summary:
        "Friends ask Jordan for music recommendations constantly. Wants a faster way to generate and share vibe-specific lists.",
      goals: [
        "Create mood-based mixes in seconds.",
        "Share curated playlists without exporting to another app.",
      ],
    },
  ],
  jobsToBeDone: [
    {
      when: "I want a playlist that matches my mood and taste",
      want: "Generate a mix from my genre, region, and cultural preferences",
      soThat: "I can press play on something that feels personal, not random",
    },
    {
      when: "I found a great mix and want friends to hear it",
      want: "Share the playlist from the friends tab",
      soThat: "We can listen to the same vibe together",
    },
    {
      when: "I'm setting up my taste profile",
      want: "Connect Spotify and tag my favorite genres and styles",
      soThat: "Recommendations reflect how I actually listen",
    },
  ],
  features: [
    {
      title: "Taste profile",
      description:
        "Favorite genres, regional music, and cultural style tags — plus Spotify connection and top artists — feed the recommendation algorithm.",
      priority: "P0 — Launch",
    },
    {
      title: "Algorithmic playlists",
      description:
        "Generate mood-based mixes (e.g. Melancholy Mix) from weighted preferences. Name, edit, and save to your library.",
      priority: "P0 — Launch",
    },
    {
      title: "Friends & sharing",
      description:
        "Dedicated social tab to share playlists with friends and discover what others are listening to.",
      priority: "P0 — Launch",
    },
    {
      title: "Library",
      description:
        "Browse created and saved playlists with track lists, artwork grids, and duration metadata.",
      priority: "P0 — Launch",
    },
  ],
  nonFunctional: [
    "High-contrast readable text on dark UI surfaces.",
    "Mobile-first layout with bottom nav: Create · Friends · Library · Profile.",
    "Muted autoplay-safe video demos for portfolio presentation.",
  ],
  techStack: [
    { category: "Mobile", tools: ["React Native", "Expo"] },
    { category: "Integrations", tools: ["Spotify OAuth", "Streaming APIs"] },
    { category: "Design", tools: ["Custom UI", "Motion & gradient system"] },
  ],
  teamRoles: [
    {
      group: "Product & design",
      roles: ["Gracielly Abreu · Design, development, product"],
    },
  ],
  budget: [],
  testing: {
    strategy: [
      "End-to-end prototype walkthrough: sign up → profile → generate playlist → library.",
      "Spotify connection flow and taste-tag editing.",
      "Visual QA for text contrast on burgundy gradient backgrounds.",
    ],
    qa: [
      "Improved label contrast for preference chips and section headers.",
      "Consistent white primary text on dark cards.",
    ],
    targets: [
      "Core create → share → library loop demoable in under 3 minutes.",
      "Readable preference tags at a glance on profile screens.",
    ],
  },
  kpis: [
    {
      category: "Product",
      metrics: [
        "Taste dimensions captured: genres, region, cultural style.",
        "Playlist generated with track list, duration, and artwork.",
      ],
    },
    {
      category: "Social",
      metrics: [
        "Friends tab for sharing flows.",
        "Shareable playlist output from library.",
      ],
    },
  ],
  successCriteria: [
    "User can connect Spotify and set taste preferences.",
    "Algorithm generates a named playlist from profile inputs.",
    "Playlist viewable in library with full track listing.",
    "Friends tab supports sharing use case.",
  ],
  milestones: [
    {
      phase: "Concept",
      timeframe: "Week 1",
      items: [
        "Define algorithm inputs: genres, region, culture, Spotify top artists.",
        "Map core flows: profile, create, library, friends.",
      ],
    },
    {
      phase: "Design & build",
      timeframe: "Weeks 2–4",
      items: [
        "Dark burgundy visual system and bottom navigation.",
        "Sign up, profile, and Spotify connection screens.",
      ],
    },
    {
      phase: "Prototype",
      timeframe: "Week 5",
      items: [
        "Playlist generation and library views.",
        "Recorded demo video for portfolio and user testing.",
      ],
    },
  ],
  goToMarket: [],
  research: [
    {
      stat: "Users want playlists that reflect mood and cultural taste — not just genre buckets.",
    },
    {
      stat: "Sharing music is social; friends want the same mix, not a link buried in chat.",
    },
    {
      stat: "Connected accounts (Spotify) reduce friction when building a taste profile.",
    },
  ],
  constraints: [
    "Recommendation logic is prototype-grade, not production ML.",
    "Playback depends on external streaming integration.",
    "UI contrast must stay readable on dark gradient backgrounds.",
  ],
  screenshots: [
    {
      src: "/work/reson8/screen-01.jpg",
      title: "Sign up",
      caption: "Onboarding with account creation and taste profile setup.",
    },
    {
      src: "/work/reson8/poster.jpg",
      title: "Profile & Spotify",
      caption:
        "Connected Spotify account, top artists, and taste tags that power recommendations.",
    },
    {
      src: "/work/reson8/screen-03.jpg",
      title: "Your playlist",
      caption:
        "Algorithm-generated mix with track list — name, edit, and save to library.",
    },
  ],
};
