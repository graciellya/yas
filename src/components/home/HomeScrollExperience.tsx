"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { HorizontalScrollGallery } from "@/components/home/HorizontalScrollGallery";
import {
  LocalScrollVideo,
  type LocalVideoControls,
} from "@/components/visual/LocalScrollVideo";
import {
  YouTubeScrollVideo,
  type YouTubeVideoControls,
} from "@/components/visual/YouTubeScrollVideo";
import {
  DIGITAL_PLATFORMS_VIDEO_FALLBACK,
  DIGITAL_PLATFORMS_VIDEO_SRC,
  INSTALLATIONS_YOUTUBE_URL,
} from "@/data/media";

const INSTALLATIONS_STEP = 0;
const DIGITAL_PLATFORMS_STEP = 1;
const STEP_ENTER = 0.18;
const STEP_DURATION = 0.22;

const VIDEO_STEPS = new Set([INSTALLATIONS_STEP, DIGITAL_PLATFORMS_STEP]);

const activateSteps = [
  {
    index: "01",
    title: "Installations",
    body: "Immersive environments that respond to space, light, and presence.",
  },
  {
    index: "02",
    title: "Digital platforms",
    body: "Archives and websites with editorial clarity for artists and museums.",
  },
  {
    index: "03",
    title: "Applications",
    body: "Tools that extend studio practice and reshape visitor experience.",
  },
];

const headline = ["Design", "for", "culture"];

function stepWindow(index: number) {
  const enter = STEP_ENTER + index * STEP_DURATION;
  return { enter, exit: enter + STEP_DURATION * 0.82 };
}

type StepPlayback = {
  play: () => void;
  pause: () => void;
};

function StepVideoPanel({ step }: { step: (typeof activateSteps)[number] }) {
  return (
    <div className="relative w-full px-6 pb-16 pt-32 md:px-16 md:pb-20 lg:px-24">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative max-w-3xl">
        <p className="text-xs font-medium tracking-[0.35em] text-white/50">
          {step.index}
        </p>
        <h2 className="mt-4 text-[clamp(3rem,11vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-white">
          {step.title}
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
          {step.body}
        </p>
      </div>
    </div>
  );
}

export function HomeScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const heroVideoWrapRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const installationsVideoWrapRef = useRef<HTMLDivElement>(null);
  const digitalPlatformsVideoWrapRef = useRef<HTMLDivElement>(null);
  const stepPlaybackRef = useRef<(StepPlayback | null)[]>([
    null,
    null,
    null,
  ]);
  const activeStepRef = useRef<number | null>(null);
  const scrollProgressRef = useRef(0);
  const syncStepVideoRef = useRef<(progress: number) => void>(() => undefined);
  const stepPanelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const railSegmentRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [heroVideoFailed, setHeroVideoFailed] = useState(false);

  const setStepPlayback = useCallback(
    (index: number, controls: StepPlayback) => {
      stepPlaybackRef.current[index] = controls;
    },
    [],
  );

  const handleInstallationsReady = useCallback(
    (controls: YouTubeVideoControls) => {
      setStepPlayback(INSTALLATIONS_STEP, controls);
      const progress = scrollProgressRef.current;
      const { enter, exit } = stepWindow(INSTALLATIONS_STEP);
      if (progress >= enter && progress <= exit) {
        activeStepRef.current = null;
        syncStepVideoRef.current(progress);
      }
    },
    [setStepPlayback],
  );

  const handleDigitalPlatformsReady = useCallback(
    (controls: LocalVideoControls) => {
      setStepPlayback(DIGITAL_PLATFORMS_STEP, controls);
      const progress = scrollProgressRef.current;
      const { enter, exit } = stepWindow(DIGITAL_PLATFORMS_STEP);
      if (progress >= enter && progress <= exit) {
        activeStepRef.current = null;
        syncStepVideoRef.current(progress);
      }
    },
    [setStepPlayback],
  );

  useEffect(() => {
    const hero = heroVideoRef.current;
    if (!hero) return;

    const onReady = () => setHeroVideoReady(true);
    const onError = () => setHeroVideoFailed(true);

    hero.addEventListener("loadedmetadata", onReady);
    hero.addEventListener("error", onError);

    return () => {
      hero.removeEventListener("loadedmetadata", onReady);
      hero.removeEventListener("error", onError);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const pin = pinRef.current;
    if (!container || !pin) return;

    const ctx = gsap.context(() => {
      const panels = stepPanelRefs.current.filter(Boolean) as HTMLDivElement[];
      const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
      const railSegments = railSegmentRefs.current.filter(
        Boolean,
      ) as HTMLSpanElement[];

      gsap.set(panels, { autoAlpha: 0, y: 48 });
      gsap.set(railSegments, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(installationsVideoWrapRef.current, { autoAlpha: 0 });
      gsap.set(digitalPlatformsVideoWrapRef.current, { autoAlpha: 0 });

      const instWindow = stepWindow(INSTALLATIONS_STEP);
      const platformsWindow = stepWindow(DIGITAL_PLATFORMS_STEP);

      const syncStepVideo = (progress: number) => {
        scrollProgressRef.current = progress;

        let current: number | null = null;

        if (progress >= instWindow.enter && progress <= instWindow.exit) {
          current = INSTALLATIONS_STEP;
        } else if (
          progress >= platformsWindow.enter &&
          progress <= platformsWindow.exit
        ) {
          current = DIGITAL_PLATFORMS_STEP;
        }

        if (current === activeStepRef.current) return;

        if (activeStepRef.current !== null) {
          stepPlaybackRef.current[activeStepRef.current]?.pause();
        }

        if (current !== null) {
          stepPlaybackRef.current[current]?.play();
        }

        activeStepRef.current = current;
      };

      syncStepVideoRef.current = syncStepVideo;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;

            const hero = heroVideoRef.current;
            if (hero?.duration && heroVideoReady && !heroVideoFailed) {
              const heroPhase = Math.min(p / STEP_ENTER, 1);
              hero.currentTime = heroPhase * hero.duration;
            }

            syncStepVideo(p);
          },
          onRefresh: (self) => {
            syncStepVideo(self.progress);
          },
        },
      });

      syncStepVideo(tl.scrollTrigger?.progress ?? 0);

      tl.to(
        overlayRef.current,
        { opacity: 0.78, duration: 0.35, ease: "none" },
        0,
      );

      tl.to(
        heroVideoWrapRef.current,
        { scale: 1.12, autoAlpha: 1, duration: 0.14, ease: "none" },
        0,
      );

      tl.to(
        heroVideoWrapRef.current,
        { autoAlpha: 0, duration: 0.1, ease: "power2.inOut" },
        STEP_ENTER - 0.04,
      );

      words.forEach((word, i) => {
        tl.fromTo(
          word,
          { yPercent: 0, opacity: 1 },
          {
            yPercent: -120,
            opacity: 0,
            duration: 0.08,
            ease: "power2.in",
          },
          0.02 + i * 0.025,
        );
      });

      tl.to(
        heroRef.current,
        { autoAlpha: 0, y: -72, duration: 0.12, ease: "power2.inOut" },
        0.1,
      );

      tl.to(
        installationsVideoWrapRef.current,
        { autoAlpha: 1, scale: 1.08, duration: 0.12, ease: "power2.out" },
        instWindow.enter,
      );

      tl.to(
        installationsVideoWrapRef.current,
        { autoAlpha: 0, scale: 1.12, duration: 0.1, ease: "power2.in" },
        instWindow.exit - 0.04,
      );

      tl.to(
        digitalPlatformsVideoWrapRef.current,
        { autoAlpha: 1, scale: 1.08, duration: 0.12, ease: "power2.out" },
        platformsWindow.enter,
      );

      tl.to(
        digitalPlatformsVideoWrapRef.current,
        { autoAlpha: 0, scale: 1.12, duration: 0.1, ease: "power2.in" },
        platformsWindow.exit - 0.04,
      );

      panels.forEach((panel, i) => {
        const { enter, exit } = stepWindow(i);
        const rail = railSegments[i];

        tl.to(rail, { scaleY: 1, duration: 0.12, ease: "power2.out" }, enter);
        tl.to(
          panel,
          { autoAlpha: 1, y: 0, duration: 0.14, ease: "power2.out" },
          enter,
        );
        tl.to(
          panel,
          { autoAlpha: 0, y: -36, duration: 0.1, ease: "power2.in" },
          exit,
        );
        if (i < panels.length - 1) {
          tl.to(rail, { opacity: 0.35, duration: 0.06 }, exit);
        }
      });
    }, container);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [heroVideoReady, heroVideoFailed]);

  return (
    <>
      <div ref={containerRef} className="relative h-[520vh]">
        <div
          ref={pinRef}
          className="relative h-screen w-full overflow-hidden"
        >
          <div
            ref={heroVideoWrapRef}
            className="absolute inset-0 will-change-transform"
          >
            {!heroVideoFailed ? (
              <video
                ref={heroVideoRef}
                className="h-full w-full object-cover"
                muted
                playsInline
                preload="auto"
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="hero-fallback h-full w-full opacity-80" />
            )}
          </div>

          <div
            ref={installationsVideoWrapRef}
            className="absolute inset-0 z-[1] will-change-transform"
          >
            <YouTubeScrollVideo
              url={INSTALLATIONS_YOUTUBE_URL}
              onReady={handleInstallationsReady}
            />
          </div>

          <div
            ref={digitalPlatformsVideoWrapRef}
            className="absolute inset-0 z-[1] will-change-transform"
          >
            <LocalScrollVideo
              src={DIGITAL_PLATFORMS_VIDEO_SRC}
              fallbackSrc={DIGITAL_PLATFORMS_VIDEO_FALLBACK}
              onReady={handleDigitalPlatformsReady}
            />
          </div>

          <div
            ref={overlayRef}
            className="absolute inset-0 z-[2] bg-black/45 will-change-[opacity]"
          />

          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%)]" />

          <div
            ref={heroRef}
            className="relative z-10 flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-10 lg:px-16"
          >
            <div className="flex items-start justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/55">
                Vol. 01 — 2026
              </p>
              <Link
                href="/contact"
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-1 flex-col justify-end pb-16 md:pb-24">
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60 md:text-base">
                Design & creative technology for contemporary artists, museums,
                and cultural institutions.
              </p>
              <h1 className="max-w-[14ch] text-[clamp(3.5rem,13vw,9rem)] font-black uppercase leading-[0.86] tracking-[-0.045em] text-white">
                {headline.map((word, i) => (
                  <span key={word} className="inline-block overflow-hidden">
                    <span
                      ref={(el) => {
                        wordRefs.current[i] = el;
                      }}
                      className="inline-block will-change-transform"
                    >
                      {word}
                      {i < headline.length - 1 ? "\u00a0" : ""}
                    </span>
                  </span>
                ))}
              </h1>
            </div>
          </div>

          <div
            className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex md:left-12 lg:left-16"
            aria-hidden
          >
            {activateSteps.map((step, i) => (
              <span
                key={step.index}
                ref={(el) => {
                  railSegmentRefs.current[i] = el;
                }}
                className="block h-12 w-px bg-white/90 will-change-transform"
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 z-10">
            {activateSteps.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => {
                  stepPanelRefs.current[i] = el;
                }}
                className={
                  VIDEO_STEPS.has(i)
                    ? "absolute inset-0 flex flex-col justify-end opacity-0"
                    : "absolute inset-0 flex items-end px-6 pb-24 opacity-0 md:items-center md:pl-24 md:pr-16 md:pb-0 lg:pl-32 lg:pr-24"
                }
              >
                {VIDEO_STEPS.has(i) ? (
                  <StepVideoPanel step={step} />
                ) : (
                  <div className="max-w-3xl">
                    <p className="text-xs font-medium tracking-[0.35em] text-white/50">
                      {step.index}
                    </p>
                    <h2 className="mt-4 text-[clamp(3rem,11vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-white">
                      {step.title}
                    </h2>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 md:text-lg">
                      {step.body}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <HorizontalScrollGallery />

      <section className="relative z-[1]">
        <div className="glass-dark section-pad border-t border-white/10">
          <div className="container-wide text-center">
            <h2 className="text-[clamp(2rem,6vw,3.25rem)] font-black uppercase tracking-[-0.03em]">
              Let&apos;s build together
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[17px] text-white/70">
              Installations, platforms, and applications for artists and
              institutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[17px]">
              <Link
                href="/contact"
                className="text-[#2997ff] hover:text-[#64b5ff]"
              >
                Get in touch ›
              </Link>
              <Link href="/work" className="text-white/70 hover:text-white">
                All projects ›
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
