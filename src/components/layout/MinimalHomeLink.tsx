"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type MinimalHomeLinkProps = {
  className?: string;
};

export function MinimalHomeLink({ className }: MinimalHomeLinkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-sm font-semibold tracking-tight text-foreground hover:opacity-60",
        className,
      )}
    >
      Atelier
    </Link>
  );
}
