import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { MinimalHomeLink } from "@/components/layout/MinimalHomeLink";
import {
  resumeEducation,
  resumeExperience,
  resumeLeadership,
  resumeProfile,
  resumeProjects,
  resumeSkills,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Gracielly Abreu — design, creative technology, and product experience.",
};

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line pt-8 first:border-t-0 first:pt-0">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function RoleBlock({
  organization,
  title,
  location,
  period,
  bullets,
}: {
  organization: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
}) {
  return (
    <article className="mb-7 last:mb-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-[17px] font-semibold text-foreground">
            {organization}
          </h3>
          <p className="text-[15px] text-secondary">{title}</p>
        </div>
        <p className="shrink-0 text-[13px] text-tertiary sm:text-right">
          {location}
          <span className="mx-2 hidden sm:inline">·</span>
          <span className="block sm:inline">{period}</span>
        </p>
      </div>
      <ul className="mt-3 space-y-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="text-[14px] leading-relaxed text-secondary before:mr-2 before:text-tertiary before:content-['·']"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 pt-6 md:px-12 lg:px-20">
        <MinimalHomeLink />
      </div>

      <section className="px-6 pb-16 pt-8 md:px-12 md:pb-24 md:pt-10 lg:px-20">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,200px)_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-xl lg:mx-0">
                <Image
                  src={resumeProfile.photo}
                  alt={resumeProfile.name}
                  fill
                  unoptimized
                  className="scale-125 object-cover object-[center_18%]"
                  sizes="200px"
                  priority
                />
              </div>

              <div className="mt-6 text-center lg:text-left">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  {resumeProfile.name}
                </h1>
                <p className="mt-1 text-sm text-secondary">
                  {resumeProfile.location}
                </p>
                <div className="mt-4 space-y-1 text-[14px]">
                  <a
                    href={`mailto:${resumeProfile.email}`}
                    className="block text-link hover:text-link-hover"
                  >
                    {resumeProfile.email}
                  </a>
                  <a
                    href={resumeProfile.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-link hover:text-link-hover"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="space-y-10">
                <ResumeSection title="Education">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-[17px] font-semibold text-foreground">
                        {resumeEducation.school}
                      </h3>
                      <p className="text-[15px] text-secondary">
                        {resumeEducation.degree} ·{" "}
                        {resumeEducation.concentration}
                      </p>
                    </div>
                    <p className="text-[13px] text-tertiary">
                      {resumeEducation.period}
                    </p>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-secondary">
                    <span className="font-medium text-foreground">
                      Coursework:
                    </span>{" "}
                    {resumeEducation.coursework.join(", ")}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-secondary">
                    <span className="font-medium text-foreground">
                      Activities:
                    </span>{" "}
                    {resumeEducation.activities.join(", ")}
                  </p>
                </ResumeSection>

                <ResumeSection title="Technical Skills">
                  <div className="space-y-3 text-[14px] leading-relaxed text-secondary">
                    <p>
                      <span className="font-medium text-foreground">
                        Programming:
                      </span>{" "}
                      {resumeSkills.programming.join(", ")}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Software:
                      </span>{" "}
                      {resumeSkills.software.join(", ")}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Design:
                      </span>{" "}
                      {resumeSkills.design.join(", ")}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Languages:
                      </span>{" "}
                      {resumeSkills.languages.join(", ")}
                    </p>
                  </div>
                </ResumeSection>

                <ResumeSection title="Experience">
                  {resumeExperience.map((role) => (
                    <RoleBlock key={`${role.organization}-${role.title}`} {...role} />
                  ))}
                </ResumeSection>

                <ResumeSection title="Projects">
                  {resumeProjects.map((project) => (
                    <article key={project.title} className="mb-7 last:mb-0">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-[17px] font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-[13px] text-tertiary">
                          {project.context}
                        </p>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {project.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="text-[14px] leading-relaxed text-secondary before:mr-2 before:text-tertiary before:content-['·']"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </ResumeSection>

                <ResumeSection title="Leadership & Development">
                  {resumeLeadership.map((item) => (
                    <article key={item.title} className="mb-6 last:mb-0">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="text-[17px] font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {"period" in item && item.period ? (
                          <p className="text-[13px] text-tertiary">
                            {item.period}
                          </p>
                        ) : null}
                      </div>
                      <ul className="mt-3 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="text-[14px] leading-relaxed text-secondary before:mr-2 before:text-tertiary before:content-['·']"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </ResumeSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
