export type DigitalPlatform = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  accent: string;
  thumbnail: string;
  previewVideo?: string;
  mediaFit?: "cover" | "contain";
  mediaPosition?: string;
  mediaBackground?: string;
  href: string;
  tags: string[];
};

/** Selected websites from ciel pith studio portfolio */
export const digitalPlatforms: DigitalPlatform[] = [
  {
    slug: "ciel-pith",
    title: "ciel pith",
    subtitle: "Studio site · Clarity above. Essence within.",
    client: "Design studio",
    year: "2026",
    accent: "#85533B",
    thumbnail: "/ciel-pith/cielpith-home.png",
    mediaFit: "contain",
    mediaPosition: "top center",
    mediaBackground: "#c6bcb1",
    href: "https://cielpith.vercel.app",
    tags: ["Studio", "Portfolio", "Editorial"],
  },
  {
    slug: "eight-ball",
    title: "Eight Ball",
    subtitle: "Forest green · Condensed sans",
    client: "Jordan Vale",
    year: "2026",
    accent: "#2F4F3E",
    thumbnail: "/ciel-pith/works/jordan-vale.png",
    previewVideo: "/ciel-pith/works/eight-ball.mov",
    href: "https://github.com/graciellya/cielpith/tree/master/works/jordan-vale",
    tags: ["Artist site", "Motion", "Editorial"],
  },
  {
    slug: "collage",
    title: "Collage",
    subtitle: "Cream sidebar · Red star",
    client: "Nola Whitmore",
    year: "2026",
    accent: "#85533B",
    thumbnail: "/ciel-pith/works/nola-whitmore.png",
    href: "https://github.com/graciellya/cielpith/tree/master/works/nola-whitmore",
    tags: ["Portfolio", "Layout", "Identity"],
  },
  {
    slug: "prism",
    title: "Prism",
    subtitle: "Italic serif · Gold glow",
    client: "Volume Lighting",
    year: "2026",
    accent: "#C4A882",
    thumbnail: "/ciel-pith/works/volume.png",
    previewVideo: "/ciel-pith/works/volume.mp4",
    href: "https://github.com/graciellya/cielpith/tree/master/works/volume",
    tags: ["Studio site", "Typography", "Dark UI"],
  },
  {
    slug: "gradient-blinds",
    title: "Gradient Blinds",
    subtitle: "Grey lavender · Cursor carousel",
    client: "Product landing",
    year: "2026",
    accent: "#9A8FA8",
    thumbnail: "/ciel-pith/works/gradient-blinds.png",
    previewVideo: "/ciel-pith/works/gradient-blinds.mov",
    href: "https://github.com/graciellya/cielpith/tree/master/works/gradient-blinds",
    tags: ["Interaction", "GSAP", "Hero"],
  },
  {
    slug: "orbit",
    title: "Orbit",
    subtitle: "Black · Concentric rings",
    client: "Transition system",
    year: "2026",
    accent: "#1A1A1A",
    thumbnail: "/ciel-pith/works/orbit.png",
    previewVideo: "/ciel-pith/works/orbit.mp4",
    href: "https://github.com/graciellya/cielpith/tree/master/works/orbit",
    tags: ["Motion", "Cursor", "Minimal"],
  },
];

export const cielPithStudio = {
  name: "ciel pith",
  tagline: "Clarity above. Essence within.",
  logo: "/ciel-pith/logo.png",
  email: "cielpith@gmail.com",
} as const;
