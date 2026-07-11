"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import {
  type Project,
  categoryLabels,
  projects,
} from "@/data/projects";

function GalleryPanel({ project, index }: { project: Project; index: number }) {
  return (
    <article className="panel relative h-[62vh] w-[88vw] shrink-0 md:h-[68vh] md:w-[72vw] lg:w-[58vw]">
      <Link
        href={`/work/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-sm glass"
      >
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <div
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            style={{
              background: `linear-gradient(155deg, ${project.accent}22 0%, #e8e8ed 35%, #f5f5f7 70%, ${project.accent}44 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_45%)]" />
          <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/60">
              {String(index + 1).padStart(2, "0")} — {categoryLabels[project.category]}
            </p>
            <h3 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
              {project.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/75 md:text-base">
              {project.subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-line px-6 py-4 md:px-8">
          <p className="text-sm text-secondary">
            {project.client} · {project.year}
          </p>
          <span className="text-sm text-link transition-colors group-hover:text-link-hover">
            View ›
          </span>
        </div>
      </Link>
    </article>
  );
}

export function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () =>
        Math.max(track.scrollWidth - window.innerWidth, 0);

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: pinRef.current,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div ref={pinRef} className="flex h-screen flex-col overflow-hidden">
        <div className="flex shrink-0 items-end justify-between px-6 pb-8 pt-10 md:px-12 lg:px-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-secondary">
              Selected work
            </p>
            <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,5vw,3rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-foreground">
              Scroll the gallery
            </h2>
          </div>
          <p className="hidden text-[11px] font-medium uppercase tracking-[0.35em] text-secondary md:block">
            Keep scrolling →
          </p>
        </div>

        <div className="relative min-h-0 flex-1">
          <div
            ref={trackRef}
            className="gallery-track flex h-full items-center gap-6 px-6 will-change-transform md:gap-8 md:px-12 lg:px-20"
          >
            {projects.map((project, index) => (
              <GalleryPanel key={project.slug} project={project} index={index} />
            ))}
            <div className="h-px w-[6vw] shrink-0" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
