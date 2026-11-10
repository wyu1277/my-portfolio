"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import CreativePreview from "./CreativePreview";
import { projects, type Category, type Discipline } from "@/data/projects";
import styles from "./WorkIndex.module.css";

const filters = ["All", "Design", "Development", "Systems", "Campaigns"] as const;
type Filter = (typeof filters)[number];

const sections: { category: Category; title: string; sub: string }[] = [
  { category: "design", title: "Product and web design", sub: "Interfaces designed and, where it applies, built." },
  { category: "campaigns", title: "Campaigns", sub: "Designed for kiosks, market screens, and social, and seen in public." },
  { category: "systems", title: "Systems", sub: "The work that keeps a store usable and trusted." },
];

export default function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = projects.filter(
    (p) => p.published && (filter === "All" || p.disciplines.includes(filter as Discipline)),
  );

  const renderSection = (s: (typeof sections)[number]) => {
    const items = visible.filter((p) => p.category === s.category);
    if (items.length === 0) return null;
    return (
      <section key={s.category} className={styles.section} aria-labelledby={`${s.category}-heading`}>
        <h2 id={`${s.category}-heading`}>{s.title}</h2>
        <p className={styles.sub}>{s.sub}</p>
        {items.filter((p) => p.wide).map((p) => (
          <ProjectCard key={p.slug} project={p} wide />
        ))}
        <div className={styles.grid}>
          {items.filter((p) => !p.wide).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects">
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
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
      </p>

      {renderSection(sections[0])}
      {renderSection(sections[1])}
      {filter === "All" && <CreativePreview />}
      {renderSection(sections[2])}

      {visible.length === 0 && (
        <p className={styles.empty}>No projects match this filter yet.</p>
      )}
    </>
  );
}