export type ProjectCategory =
  | "installation"
  | "website"
  | "app"
  | "experience";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  client: string;
  venue?: string;
  description: string;
  context: string;
  deliverables: string[];
  technologies: string[];
  accent: string;
  featured: boolean;
  inGallery?: boolean;
  galleryLogo?: string;
  pdfSrc?: string;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  installation: "Installation",
  website: "Digital Platform",
  app: "Application",
  experience: "Interactive Experience",
};

export const projects: Project[] = [
  {
    slug: "soundspot-prd",
    title: "SoundSpot",
    subtitle: "Product requirements · tiered membership for indie artists",
    category: "app",
    year: "2025",
    client: "Team project · 5 contributors",
    description:
      "End-to-end PRD for SoundSpot Backstage — a shipped-scope product defining membership tiers, artist profiles, fan engagement, and go-to-market for 1.5M users.",
    context:
      "Structured product documentation covering problem framing, personas, JTBD, feature prioritization, milestones, KPIs, and launch strategy.",
    deliverables: [
      "Product requirements document",
      "User personas & jobs-to-be-done",
      "Feature scope & prioritization",
      "Go-to-market & success metrics",
    ],
    technologies: ["Product strategy", "UX research", "Figma", "Jira"],
    accent: "#E54B35",
    featured: true,
    inGallery: true,
    galleryLogo: "/work/soundspot/gallery-logo.png",
    pdfSrc: "/work/soundspot-prd.pdf",
  },
  {
    slug: "tuneties",
    title: "TuneTies",
    subtitle: "Live music discovery · research to React Native prototype",
    category: "app",
    year: "2023",
    client: "Stanford CS147 · Team project",
    description:
      "End-to-end product design for a community-driven live music app — needfinding, experience prototypes, lo-fi to med-fi UI, and hi-fi React Native build.",
    context:
      "CS147 final deliverable covering interviews, POVs, task flows, usability testing, heuristic evaluation, and shipped interactive prototype.",
    deliverables: [
      "Needfinding report & empathy maps",
      "Med-fi Figma prototype",
      "Hi-fi React Native app",
      "Heuristic evaluation & revisions",
    ],
    technologies: ["Figma", "React Native", "Expo", "User research"],
    accent: "#3D6B4F",
    featured: true,
    inGallery: true,
    galleryLogo: "/work/tuneties/gallery-logo.png",
    pdfSrc: "/work/tuneties/tuneties-report.pdf",
  },
  {
    slug: "reson8",
    title: "Reson8",
    subtitle: "Algorithmic playlists · share with friends",
    category: "app",
    year: "2025",
    client: "Personal project",
    description:
      "Mobile app that generates personalized playlists from taste preferences and Spotify data — genres, region, cultural style — with social sharing built in.",
    context:
      "Shipped prototype covering profile setup, algorithmic playlist creation, library views, and friends tab for sharing mixes.",
    deliverables: [
      "Product concept & feature scope",
      "Mobile UI prototype",
      "Playlist generation flow",
      "Demo video",
    ],
    technologies: ["React Native", "Expo", "Spotify API", "Figma"],
    accent: "#8B2252",
    featured: true,
    inGallery: true,
    galleryLogo: "/work/reson8/logo.svg",
  },
  {
    slug: "liminal-threshold",
    title: "Liminal Threshold",
    subtitle: "Responsive environment for a solo exhibition",
    category: "installation",
    year: "2025",
    client: "Contemporary Arts Center",
    venue: "Gallery 3, North Wing",
    description:
      "A site-specific installation translating visitor proximity into shifting light fields and spatial audio. Designed as a durational piece that rewards slow movement and return visits.",
    context:
      "Commissioned for a six-month exhibition cycle. Collaborated with the artist on translating conceptual sketches into real-time sensor choreography and exhibition lighting protocols.",
    deliverables: [
      "Custom sensor network & control system",
      "Spatial audio composition pipeline",
      "Exhibition lighting design",
      "Technical documentation for touring",
    ],
    technologies: ["TouchDesigner", "Arduino", "Dante Audio", "Custom PCB"],
    accent: "#C4A882",
    featured: true,
    inGallery: false,
  },
  {
    slug: "archive-of-motion",
    title: "Archive of Motion",
    subtitle: "Digital catalogue for a museum collection",
    category: "website",
    year: "2024",
    client: "Regional Museum of Contemporary Art",
    description:
      "An editorial web platform presenting time-based works with frame-accurate playback, curatorial essays, and accessible metadata standards aligned with museum cataloguing practices.",
    context:
      "The institution needed a public-facing archive that felt as considered as their print publications—without sacrificing discoverability for researchers and general audiences.",
    deliverables: [
      "Information architecture & UX strategy",
      "Custom CMS integration",
      "Video & time-based media handling",
      "Accessibility audit (WCAG 2.2 AA)",
    ],
    technologies: ["Next.js", "Sanity CMS", "Mux", "Vercel"],
    accent: "#7A8B7E",
    featured: true,
    inGallery: false,
  },
  {
    slug: "residency-journal",
    title: "Residency Journal",
    subtitle: "Mobile companion for artist residencies",
    category: "app",
    year: "2024",
    client: "International Residency Program",
    description:
      "A quiet, studio-first mobile app for documenting process—sketches, field notes, and ambient captures—designed to disappear into daily practice rather than demand attention.",
    context:
      "Built for artists working across remote locations with intermittent connectivity. Emphasis on offline capture, minimal interface, and export formats compatible with institutional archives.",
    deliverables: [
      "iOS & Android application",
      "Offline-first sync architecture",
      "Brand & interaction design",
      "Archive export tooling",
    ],
    technologies: ["React Native", "SQLite", "Expo", "Cloudflare R2"],
    accent: "#8B6E7A",
    featured: true,
    inGallery: false,
  },
  {
    slug: "echo-chamber",
    title: "Echo Chamber",
    subtitle: "Participatory sound sculpture",
    category: "experience",
    year: "2023",
    client: "Biennial Foundation",
    venue: "Outdoor Pavilion",
    description:
      "An interactive work where collective humming reshapes a generative soundscape in real time. Designed for groups of 2–40 visitors with graceful degradation at peak attendance.",
    context:
      "Developed during a three-week on-site residency. Balanced artistic intent with robust operation across weather, crowd flow, and daily maintenance by gallery staff.",
    deliverables: [
      "Interactive software & hardware integration",
      "Crowd-flow UX design",
      "Staff training materials",
      "Maintenance & calibration guide",
    ],
    technologies: ["Max/MSP", "Raspberry Pi", "Custom microphones", "Weatherproof enclosures"],
    accent: "#6E7A8B",
    featured: false,
    inGallery: false,
  },
  {
    slug: "studio-index",
    title: "Studio Index",
    subtitle: "Portfolio platform for a contemporary artist",
    category: "website",
    year: "2023",
    client: "Studio of M. Okonkwo",
    description:
      "A restrained portfolio site structured like a catalogue raisonné—chronological index, exhibition history, and press materials with typographic hierarchy inspired by art book design.",
    context:
      "The artist's previous site prioritized trend over clarity. This rebuild foregrounds the work and supports inquiries from curators, collectors, and institutional partners.",
    deliverables: [
      "Visual identity refinement",
      "Responsive web design & development",
      "Contact & inquiry workflows",
      "Analytics for institutional outreach",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Resend", "Plausible"],
    accent: "#A8927A",
    featured: false,
    inGallery: false,
  },
  {
    slug: "wayfinding-system",
    title: "Wayfinding System",
    subtitle: "Digital navigation for a museum campus",
    category: "app",
    year: "2022",
    client: "City Museum Group",
    description:
      "A progressive web app guiding visitors through a multi-building campus—exhibition schedules, accessibility routes, and audio-described tours integrated with existing ticketing.",
    context:
      "Replacing printed maps that couldn't keep pace with rotating programming. Designed with input from accessibility consultants and front-of-house staff.",
    deliverables: [
      "PWA design & development",
      "Indoor positioning integration",
      "Multilingual content structure",
      "Staff content management tools",
    ],
    technologies: ["Next.js PWA", "Mapbox", "Headless CMS", "Service Workers"],
    accent: "#7A868B",
    featured: false,
    inGallery: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getGalleryProjects(): Project[] {
  return projects.filter((p) => p.inGallery);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
