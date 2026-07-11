import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-[1] flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm text-secondary">Page not found</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
        404
      </h1>
      <Link
        href="/"
        className="mt-8 text-[17px] text-link hover:text-link-hover"
      >
        Return home <span aria-hidden="true">›</span>
      </Link>
    </div>
  );
}
