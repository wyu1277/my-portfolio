import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { caseStudies } from "../data/case-studies.ts";
import { campaignStudies } from "../data/campaigns.ts";

const dir = path.join(process.cwd(), "content", "projects");

function save(slug, extra) {
  const file = path.join(dir, `${slug}.yaml`);
  if (!fs.existsSync(file)) return console.log(`skipped ${slug}: no project file`);
  const current = YAML.parse(fs.readFileSync(file, "utf8")) ?? {};
  if (current.briefText) return console.log(`skipped ${slug}: already has content`);
  fs.writeFileSync(file, YAML.stringify({ ...current, ...extra }));
  console.log(`updated ${slug}`);
}

for (const [slug, s] of Object.entries(caseStudies)) {
  if (!s) continue;
  save(slug, {
    role: s.role,
    company: s.company,
    timeline: s.timeline,
    tools: s.tools,
    briefText: s.brief.paragraphs.join("\n\n"),
    constraint: s.brief.constraint ?? "",
    processIntro: s.process?.intro ?? "",
    options: (s.process?.options ?? []).map((o) => ({ label: o.label, note: o.note, chosen: Boolean(o.chosen) })),
    afterReview: s.process?.afterReview ?? "",
    decisions: (s.decisions ?? []).map((d) => ({ title: d.title, body: d.body, imageAlt: "" })),
    componentsIntro: s.components?.intro ?? "",
    components: (s.components?.items ?? []).map((i) => ({ label: i.label, caption: i.caption })),
    shippedIntro: s.shippedVsDesigned?.intro ?? "",
    outcomeShipped: s.outcome.shipped,
    outcomeDifferently: s.outcome.differently,
  });
}

const tile = (t) => ({ name: t.name, caption: t.caption, ratio: t.ratio, alt: "" });

for (const [slug, s] of Object.entries(campaignStudies)) {
  if (!s) continue;
  save(slug, {
    role: s.role,
    company: s.organization,
    timeline: s.timeline,
    tools: s.formats,
    briefText: s.brief.paragraphs.join("\n\n"),
    constraint: s.brief.constraint ?? "",
    groups: s.groups.map((g) => ({ title: g.title, columns: g.columns, tiles: g.tiles.map(tile) })),
    inPlaceNote: s.inPlace?.note ?? "",
    inPlace: (s.inPlace?.tiles ?? []).map(tile),
    reflection: s.reflection,
  });
}