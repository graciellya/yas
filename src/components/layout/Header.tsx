"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/practice", label: "Practice" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/72 backdrop-blur-xl backdrop-saturate-150">
      <div className="container-full flex h-12 items-center justify-between px-6 md:h-[52px] md:px-12 lg:px-20">
        <Link
          href="/"
          className="text-[21px] font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Gracielly Abreu
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-xs text-foreground/80 transition-colors hover:text-foreground",
                (pathname === href || pathname.startsWith(`${href}/`)) &&
                  "text-foreground",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={cn(
              "block h-[1px] w-[17px] bg-foreground transition-transform",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-[1px] w-[17px] bg-foreground transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-[1px] w-[17px] bg-foreground transition-transform",
              open && "-translate-y-[6px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-background px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-2xl font-semibold tracking-tight text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
