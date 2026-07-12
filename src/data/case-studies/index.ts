import { reson8CaseStudy } from "./reson8";
import { soundspotCaseStudy } from "./soundspot";
import { tunetiesCaseStudy } from "./tuneties";
import type { CaseStudy } from "./types";

const caseStudies: Record<string, CaseStudy> = {
  [soundspotCaseStudy.slug]: soundspotCaseStudy,
  [tunetiesCaseStudy.slug]: tunetiesCaseStudy,
  [reson8CaseStudy.slug]: reson8CaseStudy,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export type { CaseStudy } from "./types";
