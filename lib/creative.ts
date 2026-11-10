import fs from "node:fs";
import path from "node:path";
import { createReader } from "@keystatic/core/reader";
import config from "@/keystatic.config";
import type { CreativeItem, Group } from "@/data/creative";

const reader = createReader(process.cwd(), config);

const DEFAULT_INTRO =
  "I make the emails, video ads, and graphics that bring shoppers to a store. This is a selection. [Edit this intro in Keystatic under Creative page.]";

// Keystatic may hand back a full path, "slug/file.ext", or just "file.ext".
// This checks the real files and returns whichever address works.
function publicSrc(dir: string, slug: string, value: string | null | undefined) {
  if (!value) return undefined;
  if (value.startsWith("http")) return value;
  const clean = value.replace(/^\/+/, "");
  const candidates = [clean, `${dir}/${clean}`, `${dir}/${slug}/${clean}`];
  const found = candidates.find((c) => fs.existsSync(path.join(process.cwd(), "public", c)));
  return `/${found ?? candidates[2]}`;
}

export async function getCreativeItems(): Promise<CreativeItem[]> {
  const entries = await reader.collections.creative.all();
  return entries
    .filter(({ entry }) => entry.published)
    .sort(
      (a, b) =>
        (a.entry.sortOrder ?? 999) - (b.entry.sortOrder ?? 999) ||
        a.entry.title.localeCompare(b.entry.title),
    )
    .map(({ slug, entry }) => ({
      id: slug,
      group: entry.group as Group,
      title: entry.title,
      meta: entry.meta,
      label: entry.title,
      ratio: entry.ratio,
      image: publicSrc("images/creative", slug, entry.image),
      alt: entry.alt || undefined,
      video: publicSrc("videos", slug, entry.video),
      poster: publicSrc("images/creative", slug, entry.poster),
      captions: publicSrc("videos", slug, entry.captions),
      note: entry.note || undefined,
    }));
}

export async function getCreativeIntro(): Promise<string> {
  const page = await reader.singletons.creativePage.read();
  return page?.intro || DEFAULT_INTRO;
}