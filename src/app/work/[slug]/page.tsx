import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MinimalHomeLink } from "@/components/layout/MinimalHomeLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { categoryLabels, getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="min-h-screen">
      <div className="px-6 pt-8 md:px-12 lg:px-20">
        <MinimalHomeLink />
      </div>
      <section className="section-pad pb-12 pt-6 text-center">
        <Reveal>
          <Link
            href="/work"
            className="text-sm text-link hover:text-link-hover"
          >
            Work
          </Link>
          <p className="mt-6 text-xs font-medium text-secondary">
            {categoryLabels[project.category]} · {project.year}
            {project.venue ? ` · ${project.venue}` : ""}
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-[48px] md:leading-[1.08]">
            {project.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[19px] text-secondary">
            {project.subtitle}
          </p>
          <p className="mt-2 text-sm text-tertiary">{project.client}</p>
        </Reveal>
      </section>

      <Reveal>
        <div className="container-full px-6 md:px-12 lg:px-20">
          <div
            className="aspect-[16/9] w-full rounded-[28px] glass"
            style={{
              background: `linear-gradient(160deg, #e8e8ed 0%, #f5f5f7 45%, #d2d2d7 100%)`,
            }}
            role="img"
            aria-label={`Visual for ${project.title}`}
          />
        </div>
      </Reveal>

      <section className="section-pad">
        <div className="container-wide grid gap-16 lg:grid-cols-[1fr_280px] lg:gap-20">
          <div className="space-y-10">
            <Reveal>
              <SectionLabel>Overview</SectionLabel>
              <p className="mt-3 text-[19px] leading-relaxed text-foreground">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <SectionLabel>Context</SectionLabel>
              <p className="mt-3 text-[17px] leading-relaxed text-secondary">
                {project.context}
              </p>
            </Reveal>
          </div>

          <aside className="space-y-10">
            <Reveal delay={0.08}>
              <SectionLabel>Deliverables</SectionLabel>
              <ul className="mt-3 space-y-3">
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line pb-3 text-[15px] text-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <SectionLabel>Technologies</SectionLabel>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="glass rounded-full px-3 py-1 text-xs text-secondary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>

        <Reveal delay={0.15}>
          <nav className="container-wide mt-20 border-t border-line pt-10 text-center">
            <p className="text-xs text-secondary">Next project</p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="mt-2 inline-block text-xl font-semibold text-link hover:text-link-hover"
            >
              {nextProject.title} <span aria-hidden="true">›</span>
            </Link>
          </nav>
        </Reveal>
      </section>
    </article>
  );
}
