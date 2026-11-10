import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/work/CaseStudy";
import CampaignStudy from "@/components/work/CampaignStudy";
import { getProjects, getStudy } from "@/lib/content";

type Params = Promise<{ slug: string }>;

async function available() {
  return (await getProjects()).filter((p) => p.published && p.hasStudy);
}

export async function generateStaticParams() {
  return (await available()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = (await available()).find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.summary } : { title: "Case study" };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const list = await available();
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = list[index];
  const next = list.length > 1 ? list[(index + 1) % list.length] : undefined;

  const result = await getStudy(slug);
  if (!result) notFound();

  return result.kind === "campaign" ? (
    <CampaignStudy project={project} study={result.study} next={next} />
  ) : (
    <CaseStudy project={project} study={result.study} next={next} />
  );
}