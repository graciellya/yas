import type { Metadata } from "next";
import Link from "next/link";
import { MinimalHomeLink } from "@/components/layout/MinimalHomeLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "How Atelier approaches installations, digital platforms, and applications for the cultural sector.",
};

const approach = [
  {
    title: "Listen first",
    text: "We begin by understanding artistic intent, institutional constraints, and how audiences encounter the work.",
  },
  {
    title: "Design with restraint",
    text: "Clear typography, honest materials, and technology that steps back when the work should lead.",
  },
  {
    title: "Build for longevity",
    text: "Exhibitions close. Archives remain. We document systems and choose stacks institutions can maintain.",
  },
  {
    title: "Stay through opening",
    text: "Installations are tested on-site. Platforms are validated with real users—not just at handoff.",
  },
];

const capabilities = [
  {
    category: "Installations",
    items: [
      "Site-specific responsive environments",
      "Sensor-driven interaction design",
      "Spatial audio and lighting integration",
      "Exhibition technology consulting",
      "Technical documentation and touring support",
    ],
    count:
      getProjectsByCategory("installation").length +
      getProjectsByCategory("experience").length,
  },
  {
    category: "Digital platforms",
    items: [
      "Artist and studio portfolio websites",
      "Museum collection and archive platforms",
      "Exhibition microsites and campaign pages",
      "CMS strategy and content architecture",
      "Accessibility for cultural organizations",
    ],
    count: getProjectsByCategory("website").length,
  },
  {
    category: "Applications",
    items: [
      "Mobile apps for studio and field practice",
      "Visitor experience and wayfinding tools",
      "Progressive web apps for institutions",
      "Offline-first sync for remote work",
      "Integration with ticketing and CRM systems",
    ],
    count: getProjectsByCategory("app").length,
  },
];

export default function PracticePage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-8 md:px-12 lg:px-20">
        <MinimalHomeLink />
      </div>
      <section className="section-pad pb-12 pt-6 text-center">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-[48px]">
            Practice
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-secondary">
            A studio for artists, curators, and institutions working at the
            intersection of design and creative technology.
          </p>
        </Reveal>
      </section>

      <section className="section-pad border-t border-line">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-[32px]">
              How we work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="glass rounded-[18px] p-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-secondary">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight md:text-[32px]">
              Capabilities
            </h2>
          </Reveal>
          <div className="mt-12 space-y-12">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.category} delay={i * 0.08}>
                <div className="border-t border-line pt-8">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-xl font-semibold text-foreground">
                      {cap.category}
                    </h3>
                    <p className="text-xs text-secondary">
                      {cap.count} project{cap.count !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="text-[15px] text-secondary before:mr-2 before:text-tertiary before:content-['·']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="container-wide text-center">
          <Reveal>
            <SectionLabel>Engagement</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[32px]">
              Typical collaborations
            </h2>
            <ul className="mx-auto mt-8 max-w-lg space-y-4 text-left text-[15px] text-secondary">
              <li>
                <span className="font-medium text-foreground">
                  Exhibition commissions
                </span>{" "}
                — immersive installations for museums, biennials, and galleries
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Digital presence
                </span>{" "}
                — portfolio sites and archives for artists and institutions
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Product partnerships
                </span>{" "}
                — apps and tools for studio practice and visitor experience
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Technical consulting
                </span>{" "}
                — feasibility, audits, and production support
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-10 inline-block text-[17px] text-link hover:text-link-hover"
            >
              Discuss a project <span aria-hidden="true">›</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
