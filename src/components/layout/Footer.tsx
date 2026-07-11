import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[1] border-t border-white/20 text-xs text-secondary">
      <div className="container-full grid gap-8 px-6 py-10 md:grid-cols-4 md:px-12 lg:px-20">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold text-foreground">Atelier</p>
          <p className="mt-2 max-w-xs leading-relaxed">
            Design and creative technology for artists, museums, and cultural
            institutions.
          </p>
        </div>

        <div>
          <p className="mb-3 font-medium text-foreground">Explore</p>
          <ul className="space-y-2">
            <li>
              <Link href="/work" className="hover:text-foreground">
                Work
              </Link>
            </li>
            <li>
              <Link href="/practice" className="hover:text-foreground">
                Practice
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-medium text-foreground">Connect</p>
          <ul className="space-y-2">
            <li>
              <a href="mailto:hello@atelier.studio" className="hover:text-foreground">
                hello@atelier.studio
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-full flex flex-col gap-2 px-6 py-4 md:flex-row md:justify-between md:px-12 lg:px-20">
          <p>Copyright © {year} Atelier Studio. All rights reserved.</p>
          <p>United States</p>
        </div>
      </div>
    </footer>
  );
}
