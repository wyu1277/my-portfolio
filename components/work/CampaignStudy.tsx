import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import type { CampaignStudy as Study, CampaignTile } from "@/data/campaigns";
import base from "./CaseStudy.module.css";
import styles from "./CampaignStudy.module.css";

type Props = { project: Project; study: Study; next?: Project };

function Tile({ tile }: { tile: CampaignTile }) {
  return (
    <li>
      <ImageFrame
        src={tile.image}
        alt={tile.alt ?? ""}
        label={tile.label}
        ratio={tile.ratio}
        shadow="ink"
        sizes="(max-width: 800px) 100vw, 40vw"
      />
      <p className={styles.tileName}>{tile.name}</p>
      <p className={styles.tileCaption}>{tile.caption}</p>
    </li>
  );
}

export default function CampaignStudy({ project, study, next }: Props) {
  const sections: { title: string; note?: string; body: ReactNode }[] = [];

  sections.push({
    title: "The brief",
    body: (
      <>
        {study.brief.paragraphs.map((t, i) => (
          <p key={i} className={base.text}>{t}</p>
        ))}
        {study.brief.constraint && (
          <div className={base.constraint}>
            <p className={base.constraintLabel}>Constraint</p>
            <p>{study.brief.constraint}</p>
          </div>
        )}
      </>
    ),
  });

  sections.push({
    title: "The work",
    note: "Grouped by format",
    body: (
      <>
        {study.groups.map((g) => (
          <div key={g.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{g.title}</h3>
            <ul className={styles.tiles} style={{ "--cols": g.columns } as CSSProperties}>
              {g.tiles.map((t, i) => (
                <Tile key={i} tile={t} />
              ))}
            </ul>
          </div>
        ))}
      </>
    ),
  });

  if (study.inPlace) {
    sections.push({
      title: "Seen in place",
      note: "Optional section",
      body: (
        <>
          <ul className={styles.tiles} style={{ "--cols": "1fr 1fr" } as CSSProperties}>
            {study.inPlace.tiles.map((t, i) => (
              <Tile key={i} tile={t} />
            ))}
          </ul>
          <p className={base.text}>{study.inPlace.note}</p>
        </>
      ),
    });
  }

  sections.push({
    title: "Reflection",
    body: <p className={base.text}>{study.reflection}</p>,
  });

  return (
    <>
      <div className="container">
        <header className={base.header}>
          <Link href="/work" className={base.back}>
            <span aria-hidden="true">&larr;</span> All work
          </Link>
          <p className={base.category}>Campaign</p>
          <h1 className={base.title}>{project.title}</h1>
          <p className={base.summary}>{project.summary}</p>
          <dl className={base.meta}>
            <div><dt>Role</dt><dd>{study.role}</dd></div>
            <div><dt>Organization</dt><dd>{study.organization}</dd></div>
            <div><dt>Timeline</dt><dd>{study.timeline}</dd></div>
            <div><dt>Formats</dt><dd>{study.formats}</dd></div>
          </dl>
        </header>

        <ImageFrame
          src={study.hero}
          alt={study.heroAlt ?? ""}
          label={study.heroLabel}
          ratio="16 / 8"
          shadow="ink"
          sizes="100vw"
        />

        <div className={base.sections}>
          {sections.map((s, i) => (
            <section key={s.title} className={base.section} aria-labelledby={`section-${i}`}>
              <div>
                <p className={base.num} aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`section-${i}`} className={base.sectionTitle}>{s.title}</h2>
                {s.note && <p className={base.note}>{s.note}</p>}
              </div>
              <div>{s.body}</div>
            </section>
          ))}
        </div>
      </div>

      {next && (
        <Link href={`/work/${next.slug}`} className={base.next}>
          <span className={base.nextInner}>
            <span>
              <span className={base.nextLabel}>Next project</span>
              <span className={base.nextTitle}>{next.title}</span>
            </span>
            <span className={base.nextArrow} aria-hidden="true">&rarr;</span>
          </span>
        </Link>
      )}
    </>
  );
}