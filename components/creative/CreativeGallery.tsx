"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import VideoGrid from "./VideoGrid";
import ProjectCard from "@/components/work/ProjectCard";
import type { CreativeItem, Group } from "@/data/creative";
import type { Project } from "@/data/projects";
import styles from "./CreativeGallery.module.css";

const filters = ["All", "Email", "Video", "Web graphics", "Campaigns"] as const;
type Filter = (typeof filters)[number];

const filterFor: Record<Group | "campaigns", Filter> = {
  email: "Email",
  video: "Video",
  hero: "Web graphics",
  graphic: "Web graphics",
  campaigns: "Campaigns",
};

const sections = [
  { key: "email", title: "Email", note: "Built as templates", cols: 4, shadow: "ink" },
  { key: "video", title: "Video ads", note: "6 to 14 seconds", cols: 4, shadow: "red" },
  { key: "hero", title: "Site heroes", note: "", cols: 2, shadow: "red" },
  { key: "graphic", title: "Functional graphics", note: "", cols: 1, shadow: "gray" },
  { key: "campaigns", title: "Campaigns", note: "", cols: 2, shadow: "ink" },
] as const;

function Media({ item, shadow }: { item: CreativeItem; shadow: "red" | "ink" | "gray" }) {
  if (item.video) {
    return (
      <video
        className={styles.video}
        style={{ aspectRatio: item.ratio }}
        controls
        preload="metadata"
        poster={item.poster}
        aria-label={item.title}
      >
        <source src={item.video} />
        {item.captions && (
          <track kind="captions" src={item.captions} srcLang="en" label="English" default />
        )}
      </video>
    );
  }
  return (
    <ImageFrame
      src={item.image}
      alt={item.alt ?? ""}
      label={item.label}
      ratio={item.ratio}
      shadow={shadow}
      sizes="(max-width: 800px) 100vw, 40vw"
    />
  );
}

export default function CreativeGallery({
  items: allItems,
  campaigns,
}: {
  items: CreativeItem[];
  campaigns: Project[];
}) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = sections
    .filter((s) => filter === "All" || filterFor[s.key] === filter)
    .map((s) => ({
      ...s,
      items: s.key === "campaigns" ? [] : allItems.filter((i) => i.group === s.key),
    }))
    .filter((s) => (s.key === "campaigns" ? campaigns.length > 0 : s.items.length > 0));

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter creative work">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? `${styles.chip} ${styles.chipOn}` : styles.chip}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className={styles.srOnly} aria-live="polite">
        {visible.length} {visible.length === 1 ? "section" : "sections"} shown
      </p>

      {visible.map((s, i) => (
        <section key={s.key} className={styles.section} aria-labelledby={`creative-${s.key}`}>
          <div>
            <p className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
            <h2 id={`creative-${s.key}`} className={styles.sectionTitle}>{s.title}</h2>
            {s.note && <p className={styles.note}>{s.note}</p>}
          </div>

          <div>
            {s.key === "campaigns" ? (
              <div className={styles.projects}>
                {campaigns.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            ) : s.key === "video" ? (
              <VideoGrid items={s.items} />
            ) : s.key === "graphic" ? (
              s.items.map((item) => (
                <article key={item.id} className={styles.feature}>
                  <Media item={item} shadow={s.shadow} />
                  <div>
                    <h3 className={styles.featureTitle}>{item.title}</h3>
                    {item.note && <p className={styles.text}>{item.note}</p>}
                  </div>
                </article>
              ))
            ) : (
              <ul className={styles.grid} style={{ "--cols": s.cols } as CSSProperties}>
                {s.items.map((item) => (
                  <li key={item.id}>
                    <Media item={item} shadow={s.shadow} />
                    <p className={styles.name}>{item.title}</p>
                    <p className={styles.meta}>{item.meta}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {visible.length === 0 && <p className={styles.empty}>Nothing here yet.</p>}
    </>
  );
}