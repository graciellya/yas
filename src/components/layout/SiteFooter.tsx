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

function ContactIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
      className={className}
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
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
  const content = (
    <>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-background/60 transition-colors group-hover:bg-background/80 md:h-16 md:w-16">
        <Icon className="h-6 w-6 text-foreground md:h-7 md:w-7" />
      </span>
      <span className="w-[5.5rem] text-center text-[15px] font-medium leading-snug tracking-tight text-foreground md:text-[17px]">
        {label}
      </span>
    </>
  );

  const className =
    "group inline-flex w-[5.5rem] flex-col items-center gap-3 rounded-xl py-1 transition-opacity hover:opacity-70 md:gap-3.5";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/resume" || pathname === "/contact") return null;

  return (
    <footer className="relative z-[1] w-full border-t border-line bg-surface/55 backdrop-blur-xl">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-12 md:py-12 lg:px-20">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center">
          <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full sm:h-64 sm:w-64 md:h-72 md:w-72">
            <Image
              src={siteContact.photo}
              alt="Gracielly Abreu"
              fill
              unoptimized
              className="scale-[1.55] object-cover object-[center_14%]"
              sizes="(max-width: 768px) 224px, 288px"
            />
          </div>

          <div className="ml-0 flex flex-col items-center gap-4 sm:ml-auto sm:items-start">
            <p className="text-left text-[11px] font-medium uppercase tracking-[0.28em] text-secondary">
              Let&apos;s connect
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-end sm:gap-10 md:gap-12 lg:gap-14">
              <FooterLink
                href={siteContact.contactHref}
                label="Contact"
                icon={ContactIcon}
              />
              <FooterLink
                href={siteContact.linkedIn}
                label="LinkedIn"
                icon={LinkedInIcon}
                external
              />
              <FooterLink
                href={`mailto:${siteContact.email}`}
                label="Email"
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
