"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContact } from "@/data/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
      className={className}
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3.5 6.5 8.5 7 8.5-7" />
    </svg>
  );
}

function ResumeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
      className={className}
    >
      <path d="M8 3h8l4 4v14H8V3z" />
      <path d="M16 3v4h4M10 12h6M10 16h6M10 8h3" />
    </svg>
  );
}

type FooterLinkProps = {
  href: string;
  label: string;
  icon: typeof LinkedInIcon;
  external?: boolean;
};

function FooterLink({ href, label, icon: Icon, external }: FooterLinkProps) {
  const row = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface/70 backdrop-blur-sm">
        <Icon className="h-5 w-5 text-foreground" />
      </span>
      <span className="min-w-0 text-left text-[clamp(1rem,2.4vw,1.35rem)] font-medium leading-snug tracking-tight text-foreground">
        {label}
      </span>
    </>
  );

  const className =
    "group grid w-full grid-cols-[2.75rem_1fr] items-center gap-x-4 rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface/45 md:grid-cols-[2.75rem_minmax(0,20rem)] md:gap-x-5 md:px-4";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {row}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {row}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {row}
    </a>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/resume") return null;

  return (
    <footer className="relative z-[1] min-h-[75vh] border-t border-line">
      <div className="flex min-h-[75vh] items-center justify-center px-6 py-16 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 lg:gap-16">
          <div className="relative h-52 w-52 shrink-0 overflow-hidden rounded-full md:h-60 md:w-60 lg:h-64 lg:w-64">
            <Image
              src={siteContact.photo}
              alt="Gracielly Abreu"
              fill
              unoptimized
              className="scale-125 object-cover object-[center_18%]"
              sizes="(max-width: 768px) 208px, 256px"
            />
          </div>

          <div className="glass w-full max-w-sm rounded-[1.75rem] px-5 py-6 md:max-w-md md:px-7 md:py-8">
            <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.28em] text-secondary">
              Contact
            </p>
            <p className="font-display text-2xl font-medium tracking-tight text-foreground md:text-[1.75rem]">
              Gracielly Abreu
            </p>

            <div className="mt-6 flex flex-col gap-1">
              <FooterLink
                href={siteContact.linkedIn}
                label="LinkedIn"
                icon={LinkedInIcon}
                external
              />
              <FooterLink
                href={`mailto:${siteContact.email}`}
                label={siteContact.email}
                icon={MailIcon}
              />
              <FooterLink
                href={siteContact.resumeHref}
                label="Resume"
                icon={ResumeIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
