import type { Metadata } from "next";
import Link from "next/link";
import { MinimalHomeLink } from "@/components/layout/MinimalHomeLink";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected installations, digital platforms, and applications.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-8 md:px-12 lg:px-20">
        <MinimalHomeLink />
      </div>
      <section className="section-pad pb-12 pt-6">
        <div className="container-wide text-center">
          <Reveal>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-[48px]">
              Work
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-[17px] leading-relaxed text-secondary">
              Installations, platforms, and applications for contemporary
              culture.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-line pt-12">
        <div className="container-full grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <ProjectCard project={project} variant="compact" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide text-center">
          <p className="text-[17px] text-secondary">
            Interested in working together?{" "}
            <Link href="/contact" className="text-link hover:text-link-hover">
              Get in touch <span aria-hidden="true">›</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
