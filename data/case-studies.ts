export type CaseOption = { label: string; note: string; chosen?: boolean; image?: string };
export type CaseDecision = { title: string; body: string; imageLabel: string; image?: string; imageAlt?: string };
export type CaseItem = { label: string; caption: string; image?: string };
export type GalleryItem = { title: string; caption: string; wide: boolean; image?: string; alt?: string };
export type ComparisonPair = {
  label: string;
  caption: string;
  designImage?: string;
  designAlt?: string;
  liveImage?: string;
  liveAlt?: string;
};

export type CaseStudy = {
  role: string;
  company: string;
  timeline: string;
  tools: string;
  heroLabel: string;
  hero?: string;
  heroAlt?: string;
  brief: { paragraphs: string[]; constraint?: string };
  process?: { intro: string; options: CaseOption[]; afterReview?: string };
  decisions?: CaseDecision[];
  galleryIntro?: string;
  gallery?: GalleryItem[];
  components?: { intro: string; items: CaseItem[] };
  shippedVsDesigned?: { intro: string; pairs: ComparisonPair[] };
  outcome: { shipped: string; differently: string };
};