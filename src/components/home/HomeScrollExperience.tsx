"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ApplicationsIntro } from "@/components/home/ApplicationsIntro";
import { GalleryPanel } from "@/components/home/GalleryPanel";
import { HeroWorkMarquee } from "@/components/home/HeroWorkMarquee";
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
import { getGalleryProjects } from "@/data/projects";

const INSTALLATIONS_STEP = 0;
const DIGITAL_PLATFORMS_STEP = 1;
const APPLICATIONS_STEP = 2;
const STEP_ENTER = 0.18;
const STEP_DURATION = 0.22;
const MARQUEE_FADE_START = 0.05;
const MARQUEE_FADE_DURATION = 0.09;
const BASE_SCROLL_VH = 6.2;
const GALLERY_HANDOFF = 0.03;

const VIDEO_STEPS = new Set([INSTALLATIONS_STEP, DIGITAL_PLATFORMS_STEP]);

const activateSteps = [
  {
    index: "01",
    title: "Installations",
    body: "Interactive work built with custom hardware.",
    tools: ["Max/MSP", "Ableton", "TouchDesigner"],
  },
  {
    index: "02",
    title: "Digital platforms",
    body: "UI/UX, brand identity, and digital experiences.",
    moreWorksHref: "/digital-platforms",
  },
  {
    index: "03",
    title: "Applications",
    body: "Product design and mobile apps that extend studio practice and reshape how people connect.",
    tools: ["React Native", "Figma", "Xcode", "JS", "Supabase"],
  },
];

const headline = ["Gracielly", "Abreu"];
const galleryProjects = getGalleryProjects();

function stepWindow(index: number) {
  const enter = STEP_ENTER + index * STEP_DURATION;
  return { enter, exit: enter + STEP_DURATION * 0.82 };
}

const applicationsWindow = stepWindow(APPLICATIONS_STEP);
const heroTimelineEnd = applicationsWindow.enter + GALLERY_HANDOFF;

function getScrollMetrics(track: HTMLDivElement | null) {
  const heroLength = window.innerHeight * BASE_SCROLL_VH * heroTimelineEnd;
  const galleryDistance = Math.max(
    (track?.scrollWidth ?? 0) - window.innerWidth,
    0,
  );
  const total = heroLength + galleryDistance;
  const heroRatio = total > 0 ? heroLength / total : 1;
  const galleryRatio = total > 0 ? galleryDistance / total : 0;

  return {
    heroLength,
    galleryDistance,
    total,
    heroRatio,
    galleryRatio,
    at: (heroT: number) => {
      const t = Math.min(Math.max(heroT / heroTimelineEnd, 0), 1);
      return t * heroRatio;
    },
    heroProgressFromScroll: (scrollProgress: number) => {
      if (heroRatio <= 0) return 0;
      const t = Math.min(Math.max(scrollProgress / heroRatio, 0), 1);
      return t * heroTimelineEnd;
    },
  };
}

type StepPlayback = {
  play: () => void;
  pause: () => void;
};

function StepVideoPanel({ step }: { step: (typeof activateSteps)[number] }) {
  return (
    <div className="relative w-full px-6 pb-16 pt-32 text-on-media md:px-16 md:pb-20 lg:px-24">
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/88 via-[#2c1810]/35 to-transparent" />
      <div className="relative max-w-3xl">
        <p className="text-xs font-medium tracking-[0.35em] text-on-media-subtle">
          {step.index}
        </p>
        <h2 className="mt-4 text-[clamp(3rem,11vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]">
          {step.title}
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-on-media-muted md:text-lg">
          {step.body}
        </p>
        {"tools" in step && step.tools?.length ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {step.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-on-media-subtle px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-on-media-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {"moreWorksHref" in step && step.moreWorksHref ? (
        <Link
          href={step.moreWorksHref}
          className="pointer-events-auto absolute bottom-16 right-6 z-10 inline-flex items-center gap-2.5 rounded-full bg-on-media px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#2c1810] shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.03] md:bottom-20 md:right-16 lg:right-24"
        >
          More works
          <span aria-hidden="true" className="text-base">
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}

export function HomeScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const heroVideoWrapRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const installationsVideoWrapRef = useRef<HTMLDivElement>(null);
  const digitalPlatformsVideoWrapRef = useRef<HTMLDivElement>(null);
  const applicationsPanelRef = useRef<HTMLDivElement>(null);
  const galleryTrackRef = useRef<HTMLDivElement>(null);
  const stepPlaybackRef = useRef<(StepPlayback | null)[]>([null, null]);
  const activeStepRef = useRef<number | null>(null);
  const scrollProgressRef = useRef(0);
  const syncStepVideoRef = useRef<(progress: number) => void>(() => undefined);
  const stepPanelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const railContainerRef = useRef<HTMLDivElement>(null);
  const railSegmentRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [heroVideoFailed, setHeroVideoFailed] = useState(false);
  const heroVideoReadyRef = useRef(false);
  const heroVideoFailedRef = useRef(false);

  useEffect(() => {
    heroVideoReadyRef.current = heroVideoReady;
  }, [heroVideoReady]);

  useEffect(() => {
    heroVideoFailedRef.current = heroVideoFailed;
  }, [heroVideoFailed]);

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
      activeStepRef.current = null;
      syncStepVideoRef.current(scrollProgressRef.current);
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
    const track = galleryTrackRef.current;
    if (!container || !pin || !track) return;

    const ctx = gsap.context(() => {
      const panels = stepPanelRefs.current.filter(Boolean) as HTMLDivElement[];
      const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[];
      const railSegments = railSegmentRefs.current.filter(
        Boolean,
      ) as HTMLSpanElement[];

      gsap.set(panels, { autoAlpha: 0, y: 48 });
      gsap.set(applicationsPanelRef.current, { autoAlpha: 0, y: 32 });
      gsap.set(galleryTrackRef.current, { x: 0 });
      gsap.set(railSegments, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(installationsVideoWrapRef.current, { autoAlpha: 0 });
      gsap.set(digitalPlatformsVideoWrapRef.current, { autoAlpha: 0 });
      gsap.set(marqueeRef.current, { autoAlpha: 1 });

      const instWindow = stepWindow(INSTALLATIONS_STEP);
      const platformsWindow = stepWindow(DIGITAL_PLATFORMS_STEP);
      const metrics = () => getScrollMetrics(galleryTrackRef.current);
      const at = (heroT: number) => metrics().at(heroT);
      const galleryStart = () => metrics().heroRatio;

      const syncStepVideo = (heroProgress: number) => {
        scrollProgressRef.current = heroProgress;

        let current: number | null = null;

        if (heroProgress >= instWindow.enter && heroProgress <= instWindow.exit) {
          current = INSTALLATIONS_STEP;
        } else if (
          heroProgress >= platformsWindow.enter &&
          heroProgress <= platformsWindow.exit
        ) {
          current = DIGITAL_PLATFORMS_STEP;
        }

        if (current !== activeStepRef.current) {
          if (activeStepRef.current !== null) {
            stepPlaybackRef.current[activeStepRef.current]?.pause();
          }
          activeStepRef.current = current;
        }

        if (current !== null) {
          stepPlaybackRef.current[current]?.play();
        }
      };

      syncStepVideoRef.current = syncStepVideo;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${metrics().total}`,
          scrub: 1,
          pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const m = metrics();
            const heroProgress = m.heroProgressFromScroll(self.progress);

            const hero = heroVideoRef.current;
            if (
              hero?.duration &&
              heroVideoReadyRef.current &&
              !heroVideoFailedRef.current
            ) {
              const heroPhase = Math.min(heroProgress / STEP_ENTER, 1);
              hero.currentTime = heroPhase * hero.duration;
            }

            if (self.progress <= m.heroRatio) {
              syncStepVideo(heroProgress);
            } else if (activeStepRef.current !== null) {
              stepPlaybackRef.current[activeStepRef.current]?.pause();
              activeStepRef.current = null;
            }
          },
          onRefresh: (self) => {
            syncStepVideo(metrics().heroProgressFromScroll(self.progress));
          },
        },
      });

      syncStepVideo(tl.scrollTrigger?.progress ?? 0);

      tl.to(
        marqueeRef.current,
        { autoAlpha: 0, duration: MARQUEE_FADE_DURATION, ease: "power2.in" },
        at(MARQUEE_FADE_START),
      );

      tl.to(
        overlayRef.current,
        { opacity: 0.78, duration: 0.35, ease: "none" },
        at(0),
      );

      tl.to(
        heroVideoWrapRef.current,
        { scale: 1.12, autoAlpha: 1, duration: 0.14, ease: "none" },
        at(0),
      );

      tl.to(
        heroVideoWrapRef.current,
        { autoAlpha: 0, duration: 0.1, ease: "power2.inOut" },
        at(STEP_ENTER - 0.04),
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
          at(0.02 + i * 0.025),
        );
      });

      tl.to(
        heroRef.current,
        { autoAlpha: 0, y: -72, duration: 0.12, ease: "power2.inOut" },
        at(0.1),
      );

      tl.to(
        installationsVideoWrapRef.current,
        { autoAlpha: 1, scale: 1.08, duration: 0.12, ease: "power2.out" },
        at(instWindow.enter),
      );

      tl.to(
        installationsVideoWrapRef.current,
        { autoAlpha: 0, scale: 1.12, duration: 0.1, ease: "power2.in" },
        at(instWindow.exit - 0.04),
      );

      tl.to(
        digitalPlatformsVideoWrapRef.current,
        { autoAlpha: 1, scale: 1.08, duration: 0.12, ease: "power2.out" },
        at(platformsWindow.enter),
      );

      tl.to(
        digitalPlatformsVideoWrapRef.current,
        { autoAlpha: 0, scale: 1.12, duration: 0.1, ease: "power2.in" },
        at(platformsWindow.exit - 0.04),
      );

      tl.to(
        overlayRef.current,
        { opacity: 0, duration: 0.1, ease: "power2.in" },
        at(applicationsWindow.enter),
      );

      panels.forEach((panel, i) => {
        const { enter, exit } = stepWindow(i);
        const rail = railSegments[i];

        tl.to(rail, { scaleY: 1, duration: 0.12, ease: "power2.out" }, at(enter));
        tl.to(
          panel,
          { autoAlpha: 1, y: 0, duration: 0.14, ease: "power2.out" },
          at(enter),
        );
        tl.to(
          panel,
          { autoAlpha: 0, y: -36, duration: 0.1, ease: "power2.in" },
          at(exit),
        );
        tl.to(rail, { opacity: 0.35, duration: 0.06 }, at(exit));
      });

      tl.to(
        applicationsPanelRef.current,
        { autoAlpha: 1, y: 0, duration: 0.14, ease: "power2.out" },
        at(applicationsWindow.enter),
      );

      tl.to(
        railContainerRef.current,
        { autoAlpha: 0, duration: 0.1, ease: "power2.in" },
        at(applicationsWindow.enter),
      );

      tl.to(
        galleryTrackRef.current,
        {
          x: () => -metrics().galleryDistance,
          ease: "none",
          duration: metrics().galleryRatio,
        },
        galleryStart(),
      );
    }, container);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative">
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

          <HeroWorkMarquee ref={marqueeRef} />

          <div
            ref={heroRef}
            className="relative z-10 flex h-full flex-col justify-between px-8 py-9 md:px-14 md:py-11 lg:px-[4.5rem]"
          >
            <div className="flex items-start justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/55">
                Selected works
              </p>
              <Link
                href="/contact"
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-1 flex-col justify-end pb-12 md:pb-14">
              <h1 className="flex w-fit flex-col font-black uppercase tracking-[-0.045em] text-white">
                <span className="block overflow-hidden text-[clamp(3.5rem,13vw,9rem)] leading-[0.86]">
                  <span
                    ref={(el) => {
                      wordRefs.current[0] = el;
                    }}
                    className="inline-block will-change-transform"
                  >
                    {headline[0]}
                  </span>
                </span>
                <span className="-mt-1 block self-end overflow-hidden text-[clamp(1.75rem,5.5vw,3.75rem)] leading-none md:-mt-2">
                  <span
                    ref={(el) => {
                      wordRefs.current[1] = el;
                    }}
                    className="inline-block font-display font-normal normal-case italic tracking-[0.04em] will-change-transform"
                  >
                    {headline[1]}
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <div
            ref={railContainerRef}
            className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex md:left-12 lg:left-16"
            aria-hidden
          >
            {activateSteps.map((step, i) => (
              <span
                key={step.index}
                ref={(el) => {
                  railSegmentRefs.current[i] = el;
                }}
                className="block h-12 w-px bg-on-media/90 will-change-transform"
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 z-10">
            {activateSteps.slice(0, 2).map((step, i) => (
              <div
                key={step.title}
                ref={(el) => {
                  stepPanelRefs.current[i] = el;
                }}
                className="absolute inset-0 flex flex-col justify-end opacity-0"
              >
                <StepVideoPanel step={step} />
              </div>
            ))}
          </div>

          <div
            id="gallery"
            ref={applicationsPanelRef}
            className="pointer-events-none absolute inset-0 z-[12] flex flex-col justify-end opacity-0"
          >
            <ApplicationsIntro />

            <div className="relative w-full shrink-0 overflow-hidden pb-4 md:pb-6">
              <div
                ref={galleryTrackRef}
                className="gallery-track pointer-events-auto flex h-[44vh] items-center gap-6 px-6 will-change-transform md:h-[48vh] md:gap-8 md:px-12 md:pl-24 lg:px-20 lg:pl-32"
              >
                {galleryProjects.map((project) => (
                  <GalleryPanel key={project.slug} project={project} compact />
                ))}
                <div className="h-px w-[6vw] shrink-0" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
