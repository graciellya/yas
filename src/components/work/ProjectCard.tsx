import Link from "next/link";
import { type Project, categoryLabels } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "compact";
};

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const compact = variant === "compact";

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article>
        <div
          className={cn(
            "glass overflow-hidden rounded-[18px] transition-transform duration-500 group-hover:scale-[1.01]",
            compact ? "aspect-[4/3]" : "aspect-[16/10]",
          )}
        >
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(160deg, #e8e8ed 0%, #f5f5f7 40%, #d2d2d7 100%)`,
            }}
          />
        </div>

        <div className={cn("text-center", compact ? "mt-3" : "mt-4")}>
          <p className="text-xs text-secondary">
            {categoryLabels[project.category]}
          </p>
          <h3
            className={cn(
              "mt-1 font-semibold tracking-tight text-foreground",
              compact ? "text-lg" : "text-2xl md:text-[28px]",
            )}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-secondary">{project.subtitle}</p>
          <p className="mt-3 text-sm text-link transition-colors group-hover:text-link-hover">
            Learn more <span aria-hidden="true">›</span>
          </p>
        </div>
      </article>
    </Link>
  );
}
