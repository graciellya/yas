export const applicationsStep = {
  index: "03",
  title: "Applications",
  body: "Product design and mobile apps that extend studio practice and reshape how people connect.",
  tools: ["React Native", "Figma", "Xcode", "JS", "Supabase"],
} as const;

export function ApplicationsIntro() {
  return (
    <div className="relative w-full px-6 pb-6 md:px-16 md:pb-8 lg:px-24">
      <div className="relative max-w-3xl">
        <p className="text-xs font-medium tracking-[0.35em] text-secondary">
          {applicationsStep.index}
        </p>
        <h2 className="mt-4 text-[clamp(3rem,11vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-foreground">
          {applicationsStep.title}
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-secondary md:text-lg">
          {applicationsStep.body}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {applicationsStep.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-secondary"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
