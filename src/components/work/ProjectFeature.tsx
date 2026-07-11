import Link from "next/link";
import { type Project, categoryLabels } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectFeatureProps = {
  project: Project;
  reversed?: boolean;
};

export function ProjectFeature({ project, reversed }: ProjectFeatureProps) {
  return (
    <section className="section-pad">
      <div
        className={cn(
          "container-full grid items-center gap-10 md:grid-cols-2 md:gap-16",
          reversed && "md:[&>*:first-child]:order-2",
        )}
      >
        <Link
          href={`/work/${project.slug}`}
          className="group block overflow-hidden rounded-[28px] bg-surface"
        >
          <div
            className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02] md:aspect-square"
            style={{
              background: `linear-gradient(145deg, #e8e8ed 0%, #f5f5f7 50%, #d2d2d7 100%)`,
            }}
          />
        </Link>

        <div className="max-w-md md:max-w-none">
          <p className="text-xs font-medium text-secondary">
            {categoryLabels[project.category]} · {project.year}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-[40px] md:leading-[1.08]">
            {project.title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-secondary">
            {project.subtitle}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-tertiary">
            {project.description}
          </p>
          <Link
            href={`/work/${project.slug}`}
            className="mt-6 inline-block text-[17px] text-link hover:text-link-hover"
          >
            Learn more <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
