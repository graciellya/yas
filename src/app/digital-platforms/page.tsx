import type { Metadata } from "next";
import { PlatformStaggerGrid } from "@/components/digital-platforms/PlatformStaggerGrid";
import { MinimalHomeLink } from "@/components/layout/MinimalHomeLink";
import { digitalPlatforms } from "@/data/digital-platforms";

export const metadata: Metadata = {
  title: "Digital Platforms",
  description:
    "Selected websites and digital experiences — UI/UX, brand identity, and interactive work.",
};

export default function DigitalPlatformsPage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-6 md:px-12 lg:px-20">
        <MinimalHomeLink />
      </div>

      <section className="px-6 pb-16 pt-6 md:px-12 md:pb-24 md:pt-8 lg:px-20">
        <div className="container-wide">
          <PlatformStaggerGrid platforms={digitalPlatforms} />
        </div>
      </section>
    </div>
  );
}
