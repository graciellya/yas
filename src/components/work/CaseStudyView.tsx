import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { CaseStudy } from "@/data/case-studies/types";

type CaseStudyViewProps = {
  study: CaseStudy;
};

export function CaseStudyView({ study }: CaseStudyViewProps) {
  return (
    <div className="pb-24">
      <section className="section-pad border-b border-line pb-16 pt-4">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-secondary">
                  {study.heroLabel ?? "Product · PRD · Shipped scope"}
                </p>
                <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,7vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.03em] text-foreground">
                  {study.productName}
                </h1>
                <p className="mt-5 max-w-2xl text-[19px] leading-relaxed text-secondary">
                  {study.tagline}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-tertiary">
                  <span>{study.year}</span>
                  <span>Team · {study.team.join(", ")}</span>
                </div>
              </div>
              {study.logo ? (
                <div className="flex shrink-0 items-center justify-center px-8 py-6 md:px-10 md:py-8">
                  <Image
                    src={study.logo}
                    alt={`${study.productName} logo`}
                    width={500}
                    height={500}
                    className="h-auto w-[min(100%,160px)] object-contain md:w-[180px]"
                    priority
                  />
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>The problem</SectionLabel>
            <p className="mt-4 text-[17px] leading-relaxed text-secondary">
              {study.overview.problem}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionLabel>The solution</SectionLabel>
            <ul className="mt-4 space-y-3">
              {study.overview.solution.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-link/40 pl-4 text-[17px] leading-relaxed text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {study.videoSrc ? (
        <section className="section-pad border-b border-line">
          <div className="container-wide">
            <Reveal>
              <SectionLabel>Product demo</SectionLabel>
              <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-secondary">
                Full walkthrough — profile setup, taste tags, playlist generation,
                and library.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-8 overflow-hidden rounded-[24px] border border-line bg-surface">
                <video
                  src={study.videoSrc}
                  poster={study.videoPoster}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="mx-auto aspect-video w-full max-w-4xl"
                />
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section-pad border-b border-line">
        <div className="container-wide">
          <Reveal>
            <SectionLabel>Product screens</SectionLabel>
            <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-secondary">
              Mockups from the PRD — artist profiles, backstage content,
              membership tiers, and premium analytics.
            </p>
          </Reveal>

          {study.featureFlow ? (
            <Reveal delay={0.05}>
              <figure className="mt-10 overflow-hidden rounded-[24px] glass">
                <Image
                  src={study.featureFlow.src}
                  alt={study.featureFlow.title}
                  width={1400}
                  height={1400}
                  className="h-auto w-full"
                  priority
                />
                <figcaption className="border-t border-line px-6 py-4 text-sm text-secondary md:px-8">
                  {study.featureFlow.caption}
                </figcaption>
              </figure>
            </Reveal>
          ) : null}

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {study.screenshots.map((screen, i) => (
              <Reveal key={screen.src} delay={0.08 + i * 0.05}>
                <figure className="flex h-full flex-col">
                  <div className="overflow-hidden rounded-[28px] border border-line bg-[#0a0a0a] p-3 shadow-lg">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      width={946}
                      height={2048}
                      className="h-auto w-full rounded-[20px]"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className="text-base font-semibold text-foreground">
                      {screen.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {screen.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {study.experiencePrototypes?.length ? (
        <section className="section-pad border-b border-line">
          <div className="container-wide">
            <Reveal>
              <SectionLabel>Experience prototypes</SectionLabel>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {study.experiencePrototypes.map((proto, i) => (
                <Reveal key={proto.name} delay={i * 0.05}>
                  <article className="glass h-full rounded-[20px] p-6 md:p-8">
                    <h3 className="text-lg font-semibold text-foreground">
                      {proto.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      <span className="font-medium text-foreground">
                        Tested:
                      </span>{" "}
                      {proto.hypothesis}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-tertiary">
                      <span className="font-medium text-secondary">
                        Learned:
                      </span>{" "}
                      {proto.learning}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {study.taskFlows?.length ? (
        <section className="section-pad border-b border-line">
          <div className="container-wide">
            <Reveal>
              <SectionLabel>Task flows</SectionLabel>
            </Reveal>
            <div className="mt-8 space-y-12">
              {study.taskFlows.map((flow, i) => (
                <Reveal key={flow.title} delay={i * 0.05}>
                  <article>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-secondary">
                      {flow.level}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      {flow.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-secondary">
                      {flow.description}
                    </p>
                    {flow.image ? (
                      <figure className="mt-6 overflow-hidden rounded-[20px] glass">
                        <Image
                          src={flow.image}
                          alt={flow.title}
                          width={1527}
                          height={835}
                          className="h-auto w-full"
                        />
                      </figure>
                    ) : null}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-pad border-b border-line">
        <div className="container-wide grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Primary objectives</SectionLabel>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-[17px] leading-relaxed text-secondary">
              {study.objectives.primary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionLabel>Success criteria · 6 months</SectionLabel>
            <ul className="mt-4 space-y-3">
              {study.successCriteria.map((item) => (
                <li
                  key={item}
                  className="glass rounded-lg px-4 py-3 text-[15px] leading-relaxed text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-wide">
          <Reveal>
            <SectionLabel>User personas</SectionLabel>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {study.personas.map((persona, i) => (
              <Reveal key={persona.name} delay={i * 0.05}>
                <article className="glass h-full rounded-[20px] p-6 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-secondary">
                    {persona.name}, {persona.age}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {persona.role}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-secondary">
                    {persona.summary}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-line pt-4">
                    {persona.goals.map((goal) => (
                      <li
                        key={goal}
                        className="text-sm leading-relaxed text-tertiary"
                      >
                        → {goal}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-wide overflow-x-auto">
          <Reveal>
            <SectionLabel>Jobs to be done</SectionLabel>
          </Reveal>
          <table className="mt-8 w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                <th className="pb-4 pr-6 font-medium">When…</th>
                <th className="pb-4 pr-6 font-medium">I want to…</th>
                <th className="pb-4 font-medium">So that…</th>
              </tr>
            </thead>
            <tbody>
              {study.jobsToBeDone.map((job) => (
                <tr key={job.when} className="border-b border-line/70">
                  <td className="py-5 pr-6 align-top text-secondary">
                    {job.when}
                  </td>
                  <td className="py-5 pr-6 align-top text-foreground">
                    {job.want}
                  </td>
                  <td className="py-5 align-top text-secondary">{job.soThat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-wide">
          <Reveal>
            <SectionLabel>Feature scope</SectionLabel>
          </Reveal>
          <div className="mt-8 space-y-4">
            {study.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.04}>
                <article className="glass flex flex-col gap-4 rounded-[20px] p-6 md:flex-row md:items-start md:justify-between md:p-8">
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-secondary">
                      {feature.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-medium text-secondary">
                    {feature.priority}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-line">
        <div className="container-wide grid gap-16 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <Reveal>
              <SectionLabel>Research insights</SectionLabel>
              <ul className="mt-4 space-y-4">
                {study.research.map((item) => (
                  <li
                    key={item.stat}
                    className="border-l-2 border-foreground/20 pl-4"
                  >
                    <p className="text-[17px] font-medium text-foreground">
                      {item.stat}
                    </p>
                    {item.source ? (
                      <p className="mt-1 text-sm text-tertiary">
                        {item.source}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.06}>
              <SectionLabel>Release timeline</SectionLabel>
              <div className="mt-6 space-y-6">
                {study.milestones.map((milestone) => (
                  <div
                    key={milestone.phase}
                    className="border-l border-line pl-6"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-secondary">
                      {milestone.timeframe}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {milestone.phase}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {milestone.items.map((item) => (
                        <li
                          key={item}
                          className="text-[15px] leading-relaxed text-secondary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-10">
            <Reveal delay={0.08}>
              <SectionLabel>Tech stack</SectionLabel>
              <ul className="mt-4 space-y-4">
                {study.techStack.map((group) => (
                  <li key={group.category}>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                      {group.category}
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      {group.tools.join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionLabel>Team</SectionLabel>
              <ul className="mt-4 space-y-4">
                {study.teamRoles.map((group) => (
                  <li key={group.group}>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                      {group.group}
                    </p>
                    <ul className="mt-1 space-y-1">
                      {group.roles.map((role) => (
                        <li key={role} className="text-sm text-foreground">
                          {role}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Reveal>

            {study.budget.length ? (
              <Reveal delay={0.12}>
                <SectionLabel>Budget</SectionLabel>
                <ul className="mt-4 space-y-2">
                  {study.budget.map((line) => (
                    <li
                      key={line.label}
                      className="flex justify-between border-b border-line pb-2 text-sm"
                    >
                      <span className="text-secondary">{line.label}</span>
                      <span className="font-medium text-foreground">
                        {line.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </aside>
        </div>
      </section>

      {study.heuristicFixes?.length ? (
        <section className="section-pad border-b border-line">
          <div className="container-wide">
            <Reveal>
              <SectionLabel>Heuristic evaluation fixes</SectionLabel>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {study.heuristicFixes.map((fix) => (
                <li
                  key={fix.issue}
                  className="glass rounded-[16px] px-5 py-4 md:px-6"
                >
                  <p className="text-sm font-medium text-foreground">
                    {fix.issue}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    → {fix.fix}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {study.goToMarket.length > 0 ? (
        <section className="section-pad border-b border-line">
          <div className="container-wide">
            <Reveal>
              <SectionLabel>
                {study.goToMarket[0]?.phase === "Next steps"
                  ? "Next steps"
                  : "Go-to-market"}
              </SectionLabel>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {study.goToMarket.map((phase, i) => (
                <Reveal key={phase.phase} delay={i * 0.05}>
                  <article className="glass h-full rounded-[20px] p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {phase.phase}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-secondary">
                      {phase.summary}
                    </p>
                    <ul className="mt-4 space-y-2 border-t border-line pt-4">
                      {phase.tactics.map((tactic) => (
                        <li
                          key={tactic}
                          className="text-sm leading-relaxed text-tertiary"
                        >
                          · {tactic}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-pad">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Testing & QA</SectionLabel>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-secondary">
              {study.testing.strategy.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2 text-sm text-tertiary">
              {study.testing.targets.map((item) => (
                <li key={item}>→ {item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionLabel>KPIs tracked</SectionLabel>
            <div className="mt-4 space-y-5">
              {study.kpis.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                    {group.category}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {group.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="text-sm leading-relaxed text-foreground"
                      >
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="container-wide mt-16 rounded-[24px] glass px-6 py-8 md:px-10">
            <p className="text-sm font-medium text-foreground">
              Source documents
            </p>
            <div className="mt-4 flex flex-wrap gap-6">
              {(study.documents?.length
                ? study.documents
                : study.pdfSrc
                  ? [{ label: "Full document", src: study.pdfSrc }]
                  : []
              ).map((doc) => (
                <a
                  key={doc.src}
                  href={doc.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-link hover:text-link-hover"
                >
                  {doc.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
