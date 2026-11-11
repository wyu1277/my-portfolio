import fs from "node:fs";
import path from "node:path";
import { createReader } from "@keystatic/core/reader";
import config from "@/keystatic.config";
import type { Category, Discipline, Project } from "@/data/projects";
import type { CaseStudy, ComparisonPair } from "@/data/case-studies";
import type { CampaignStudy } from "@/data/campaigns";

const reader = createReader(process.cwd(), config);

// Keystatic may hand back a full path, "slug/file.jpg", or just "file.jpg".
// This checks the real files and returns whichever address works.
function imageSrc(slug: string, value: string | null | undefined) {
  if (!value) return undefined;
  if (value.startsWith("http")) return value;
  const clean = value.replace(/^\/+/, "");
  const candidates = [clean, `images/projects/${clean}`, `images/projects/${slug}/${clean}`];
  const found = candidates.find((c) => fs.existsSync(path.join(process.cwd(), "public", c)));
  return `/${found ?? candidates[2]}`;
}

export async function getProjects(): Promise<Project[]> {
  const entries = await reader.collections.projects.all();
  return entries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      byline: entry.byline,
      summary: entry.summary,
      placeholder: `Thumbnail: ${entry.title}`,
      category: entry.category as Category,
      disciplines: [...entry.disciplines] as Discipline[],
      published: entry.published,
      hasStudy: entry.briefText.trim().length > 0,
      wide: entry.wide,
      homeOrder: entry.homeOrder ?? undefined,
      sortOrder: entry.sortOrder ?? 999,
      thumbnail: imageSrc(slug, entry.thumbnail),
      thumbnailAlt: entry.thumbnailAlt || undefined,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder || a.title.localeCompare(b.title));
}

export async function getFeatured(): Promise<Project[]> {
  const all = await getProjects();
  return all
    .filter((p) => p.published && p.homeOrder)
    .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0))
    .slice(0, 3);
}

export type StudyResult =
  | { kind: "case"; study: CaseStudy }
  | { kind: "campaign"; study: CampaignStudy };

type TileEntry = { name: string; caption: string; ratio: string; image: string | null; alt: string };

export async function getStudy(slug: string): Promise<StudyResult | null> {
  const e = await reader.collections.projects.read(slug);
  if (!e || !e.briefText.trim()) return null;

  const brief = {
    paragraphs: e.briefText.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean),
    constraint: e.constraint || undefined,
  };

  if (e.category === "campaigns") {
    const tile = (t: TileEntry) => ({
      label: t.name || "Image",
      name: t.name,
      caption: t.caption,
      ratio: t.ratio,
      image: imageSrc(slug, t.image),
      alt: t.alt || undefined,
    });
    const study: CampaignStudy = {
      role: e.role,
      organization: e.company,
      timeline: e.timeline,
      formats: e.tools,
      heroLabel: "Hero image",
      hero: imageSrc(slug, e.heroImage),
      heroAlt: e.heroAlt || undefined,
      brief,
      groups: e.groups.map((g) => ({ title: g.title, columns: g.columns, tiles: g.tiles.map(tile) })),
      inPlace: e.inPlace.length > 0 ? { note: e.inPlaceNote, tiles: e.inPlace.map(tile) } : undefined,
      reflection: e.reflection,
    };
    return { kind: "campaign", study };
  }

  // Shipped vs. designed: a list of comparisons. The older single pair still works.
  const pairs: ComparisonPair[] = e.comparisons.map((c) => ({
    label: c.label,
    caption: c.caption,
    designImage: imageSrc(slug, c.designImage),
    designAlt: c.designAlt || undefined,
    liveImage: imageSrc(slug, c.liveImage),
    liveAlt: c.liveAlt || undefined,
  }));
  if (pairs.length === 0 && (e.designImage || e.liveImage)) {
    pairs.push({
      label: "",
      caption: "",
      designImage: imageSrc(slug, e.designImage),
      liveImage: imageSrc(slug, e.liveImage),
    });
  }

  const study: CaseStudy = {
    role: e.role,
    company: e.company,
    timeline: e.timeline,
    tools: e.tools,
    heroLabel: "Hero image",
    hero: imageSrc(slug, e.heroImage),
    heroAlt: e.heroAlt || undefined,
    brief,
    process:
      e.options.length > 0
        ? {
            intro: e.processIntro,
            options: e.options.map((o) => ({
              label: o.label,
              note: o.note,
              chosen: o.chosen,
              image: imageSrc(slug, o.image),
            })),
            afterReview: e.afterReview || undefined,
          }
        : undefined,
    decisions:
      e.decisions.length > 0
        ? e.decisions.map((d) => ({
            title: d.title,
            body: d.body,
            imageLabel: `Image: ${d.title}`,
            image: imageSrc(slug, d.image),
            imageAlt: d.imageAlt || undefined,
          }))
        : undefined,
    galleryIntro: e.galleryIntro || undefined,
    gallery:
      e.gallery.length > 0
        ? e.gallery.map((g) => ({
            title: g.title,
            caption: g.caption,
            wide: g.size === "full",
            image: imageSrc(slug, g.image),
            alt: g.alt || undefined,
          }))
        : undefined,
    components:
      e.components.length > 0
        ? {
            intro: e.componentsIntro,
            items: e.components.map((c) => ({
              label: c.label,
              caption: c.caption,
              image: imageSrc(slug, c.image),
            })),
          }
        : undefined,
    shippedVsDesigned:
      pairs.length > 0 || e.shippedIntro ? { intro: e.shippedIntro, pairs } : undefined,
    outcome: { shipped: e.outcomeShipped, differently: e.outcomeDifferently },
  };
  return { kind: "case", study };
}