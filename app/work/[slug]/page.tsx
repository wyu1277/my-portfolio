import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/work/CaseStudy";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

type Params = Promise<{ slug: string }>;

const available = () => projects.filter((p) => p.published && caseStudies[p.slug]);

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
  const study = caseStudies[slug];
  if (index === -1 || !study) notFound();

  const next = list.length > 1 ? list[(index + 1) % list.length] : undefined;
  return <CaseStudy project={list[index]} study={study} next={next} />;
}