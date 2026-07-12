"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { type DigitalPlatform } from "@/data/digital-platforms";

gsap.registerPlugin(ScrollTrigger);

type PlatformStaggerGridProps = {
  platforms: DigitalPlatform[];
};

export function PlatformStaggerGrid({ platforms }: PlatformStaggerGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<DigitalPlatform | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll("[data-platform-item]"),
    );

    gsap.set(items, { autoAlpha: 0, y: 56 });

    const batch = ScrollTrigger.batch(items, {
      start: "top 88%",
      once: true,
      onEnter: (elements) => {
        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: {
            each: 0.1,
            from: "start",
          },
          overwrite: true,
        });
      },
    });

    return () => {
      batch.forEach((trigger) => trigger.kill());
    };
  }, [platforms]);

  return (
    <>
      <div
        ref={containerRef}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        {platforms.map((platform) => (
          <PlatformCard
            key={platform.slug}
            platform={platform}
            onExpand={() => setActive(platform)}
          />
        ))}
      </div>

      {active ? (
        <PlatformLightbox platform={active} onClose={close} />
      ) : null}
    </>
  );
}

function PlatformMedia({
  platform,
  className = "",
  videoClassName = "",
}: {
  platform: DigitalPlatform;
  className?: string;
  videoClassName?: string;
}) {
  const fit = platform.mediaFit ?? "cover";
  const position = platform.mediaPosition ?? "center";
  const background = platform.mediaBackground ?? "#1a1410";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: background }}
    >
      {platform.previewVideo ? (
        <video
          src={platform.previewVideo}
          className={`absolute inset-0 h-full w-full object-cover ${videoClassName}`}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          poster={platform.thumbnail}
        />
      ) : (
        <Image
          src={platform.thumbnail}
          alt={platform.title}
          fill
          unoptimized
          className={fit === "contain" ? "object-contain" : "object-cover"}
          style={{ objectPosition: position }}
          sizes="(max-width: 768px) 100vw, 90vw"
        />
      )}
    </div>
  );
}

function PlatformCard({
  platform,
  onExpand,
}: {
  platform: DigitalPlatform;
  onExpand: () => void;
}) {
  return (
    <button
      type="button"
      data-platform-item
      onClick={onExpand}
      className="group w-full cursor-pointer text-left will-change-transform"
      aria-label={`Expand ${platform.title}`}
    >
      <div className="glass overflow-hidden rounded-[18px] transition-transform duration-500 group-hover:scale-[1.015]">
        <PlatformMedia platform={platform} className="aspect-[16/10]" />
      </div>
    </button>
  );
}

function PlatformLightbox({
  platform,
  onClose,
}: {
  platform: DigitalPlatform;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const isExternal = platform.href.startsWith("http");

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    gsap.fromTo(
      panel,
      { scale: 0.92, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.45, ease: "power3.out" },
    );
  }, [platform.slug]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={platform.title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#2c1810]/72 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close preview"
      />

      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-6xl opacity-0"
      >
        <div className="glass overflow-hidden rounded-[24px] shadow-[0_24px_80px_rgba(44,24,16,0.28)]">
          <PlatformMedia platform={platform} className="aspect-[16/10] md:aspect-video" />
        </div>

        <div className="mt-4 flex items-center justify-end gap-4">
          {isExternal && platform.href !== "#" ? (
            <a
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-on-media hover:text-white"
            >
              Open site ↗
            </a>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-on-media-subtle px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-on-media transition-colors hover:border-on-media hover:bg-on-media/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
