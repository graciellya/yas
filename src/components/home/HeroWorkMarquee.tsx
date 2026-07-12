import { forwardRef } from "react";

const workBannerItems = [
  "Creative Technology",
  "UI/UX Design",
  "Installations",
  "Digital Platforms",
  "React Native",
  "Max/MSP & Ableton",
  "Brand Identity",
  "Culture",
  "Product Design",
  "Interactive Media",
  "Museums & Galleries",
];

function MarqueeItem({ item, vertical = false }: { item: string; vertical?: boolean }) {
  return (
    <span
      className={
        vertical
          ? "flex shrink-0 flex-col items-center gap-2 py-2"
          : "flex shrink-0 items-center gap-5"
      }
    >
      <span
        className={
          vertical
            ? "whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.28em] text-white [writing-mode:vertical-lr]"
            : "whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.32em] text-white"
        }
      >
        {item}
      </span>
      <span className="text-[7px] text-white/45" aria-hidden>
        ✦
      </span>
    </span>
  );
}

function MarqueeTrack({
  duplicate = false,
  vertical = false,
}: {
  duplicate?: boolean;
  vertical?: boolean;
}) {
  return (
    <div
      className={
        vertical
          ? "hero-marquee-track flex shrink-0 flex-col items-center pb-4"
          : "hero-marquee-track flex shrink-0 items-center pr-5"
      }
      aria-hidden={duplicate ? true : undefined}
    >
      {workBannerItems.map((item) => (
        <MarqueeItem
          key={`${item}${duplicate ? "-dup" : ""}`}
          item={item}
          vertical={vertical}
        />
      ))}
    </div>
  );
}

function HorizontalEdge({
  className,
  reverse = false,
}: {
  className: string;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`hero-marquee-inner flex w-max ${reverse ? "hero-marquee-inner-reverse-x" : ""}`}
      >
        <MarqueeTrack />
        <MarqueeTrack duplicate />
      </div>
    </div>
  );
}

function VerticalEdge({
  className,
  reverse = false,
}: {
  className: string;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`hero-marquee-inner-y flex h-max flex-col items-center ${reverse ? "hero-marquee-inner-reverse-y" : ""}`}
      >
        <MarqueeTrack vertical />
        <MarqueeTrack vertical duplicate />
      </div>
    </div>
  );
}

export const HeroWorkMarquee = forwardRef<HTMLDivElement>(
  function HeroWorkMarquee(_props, ref) {
    return (
      <div
        ref={ref}
        className="pointer-events-none absolute inset-0 z-30 opacity-100 will-change-[opacity,visibility]"
      >
        <HorizontalEdge className="absolute inset-x-0 top-0 border-b border-white/40 py-1" />
        <HorizontalEdge
          className="absolute inset-x-0 bottom-0 border-t border-white/40 py-1"
          reverse
        />
        <VerticalEdge className="absolute inset-y-0 left-0 w-[18px] border-r border-white/40 md:w-5" />
        <VerticalEdge
          className="absolute inset-y-0 right-0 w-[18px] border-l border-white/40 md:w-5"
          reverse
        />
      </div>
    );
  },
);
