import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/work/CaseStudy";
import CampaignStudy from "@/components/work/CampaignStudy";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import { campaignStudies } from "@/data/campaigns";

type Params = Promise<{ slug: string }>;

const hasStudy = (slug: string) => Boolean(caseStudies[slug] || campaignStudies[slug]);
const available = () => projects.filter((p) => p.published && hasStudy(p.slug));

export function generateStaticParams() {
  return available().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = available().find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.summary } : { title: "Case study" };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const list = available();
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = list[index];
  const next = list.length > 1 ? list[(index + 1) % list.length] : undefined;

  const campaign = campaignStudies[slug];
  if (campaign) return <CampaignStudy project={project} study={campaign} next={next} />;

  const study = caseStudies[slug];
  if (!study) notFound();
  return <CaseStudy project={project} study={study} next={next} />;
}