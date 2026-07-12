import Link from "next/link";
import { cn } from "@/lib/utils";

type OtherWorksBackLinkProps = {
  className?: string;
};

export function OtherWorksBackLink({ className }: OtherWorksBackLinkProps) {
  return (
    <Link
      href="/#gallery"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <span
        className="relative flex h-8 w-8 items-center justify-center"
        aria-hidden
      >
        <span className="absolute h-px w-full bg-foreground/25 transition-all duration-300 group-hover:w-[110%] group-hover:bg-foreground/50" />
        <span className="absolute h-[5px] w-[5px] rotate-45 border-b border-l border-foreground/40 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:border-foreground/70" />
      </span>
      <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-secondary transition-colors duration-300 group-hover:text-foreground">
        Back
      </span>
    </Link>
  );
}
