import Image from "next/image";
import Link from "next/link";
import { getCaseStudy } from "@/data/case-studies";
import { type Project } from "@/data/projects";

export function GalleryPanel({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const caseStudy = getCaseStudy(project.slug);
  const logo = project.galleryLogo ?? caseStudy?.logo;
  const previewImage =
    caseStudy?.videoPoster ??
    (!logo ? caseStudy?.screenshots[0]?.src : undefined);

  return (
    <article
      className={`panel relative shrink-0 ${
        compact
          ? "h-[44vh] w-[84vw] md:h-[48vh] md:w-[68vw] lg:w-[54vw]"
          : "h-[62vh] w-[88vw] md:h-[68vh] md:w-[72vw] lg:w-[58vw]"
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border-0 bg-surface shadow-[0_8px_32px_rgba(44,24,16,0.08)] backdrop-blur-xl md:rounded-[2.5rem]"
      >
        <div className="relative min-h-0 flex-1 overflow-hidden">
          {logo ? (
            <>
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${project.accent}40 0%, transparent 58%), linear-gradient(165deg, #121216 0%, #08080a 55%, #030303 100%)`,
                }}
              />
              <div
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
                style={{ backgroundColor: project.accent }}
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className={`relative flex aspect-square items-center justify-center ${
                    project.slug === "soundspot-prd"
                      ? "h-[min(50%,272px)]"
                      : "h-[min(40%,224px)]"
                  }`}
                >
                  <Image
                    src={logo}
                    alt={`${project.title} logo`}
                    width={512}
                    height={512}
                    unoptimized
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent)]" />
            </>
          ) : previewImage ? (
            <>
              <Image
                src={previewImage}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 88vw, 58vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.15)_45%,transparent)]" />
            </>
          ) : (
            <div
              className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{
                background: `linear-gradient(155deg, ${project.accent}22 0%, #e8e8ed 35%, #f5f5f7 70%, ${project.accent}44 100%)`,
              }}
            />
          )}
          {!logo && !previewImage ? (
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_45%)]" />
          ) : null}
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="inline-flex aspect-square min-w-[3.25rem] items-center justify-center rounded-xl bg-[#2c1810]/35 text-sm font-medium text-on-media backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
