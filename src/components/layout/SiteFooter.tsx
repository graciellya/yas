import { siteContact } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative z-[1] border-t border-line">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-5 text-[14px] md:px-12 lg:px-20">
        <a
          href={siteContact.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hover:text-link-hover"
        >
          Resume ↗
        </a>
        <a
          href={siteContact.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hover:text-link-hover"
        >
          LinkedIn ↗
        </a>
        <a
          href={`mailto:${siteContact.email}`}
          className="text-link hover:text-link-hover"
        >
          {siteContact.email}
        </a>
      </div>
    </footer>
  );
}
