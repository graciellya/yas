"use client";

import { Plasma } from "@/components/visual/Plasma";

export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <Plasma
        color="#e8b490"
        speed={0.6}
        direction="pingpong"
        scale={2.3}
        opacity={0.85}
        mouseInteractive
        trackWindow
      />
    </div>
  );
}
