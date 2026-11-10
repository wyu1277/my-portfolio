import Link from "next/link";
import type { ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import type { CaseStudy as Study } from "@/data/case-studies";
import styles from "./CaseStudy.module.css";

const categoryLabel = {
  design: "Product and web design",
  campaigns: "Campaign",
  systems: "Systems",
} as const;

type Props = { project: Project; study: Study; next?: Project };

export default function CaseStudy({ project, study, next }: Props) {
  const sections: { title: string; note?: string; body: ReactNode }[] = [];

  sections.push({
    title: "The brief",
    body: (
      <>
        {study.brief.paragraphs.map((t, i) => (
          <p key={i} className={styles.text}>{t}</p>
        ))}
        {study.brief.constraint && (
          <div className={styles.constraint}>
            <p className={styles.constraintLabel}>Constraint</p>
            <p>{study.brief.constraint}</p>
          </div>
        )}
      </>
    ),
  });

  if (study.process) {
    const p = study.process;
    sections.push({
      title: "Process: options explored",
      body: (
        <>
          <p className={styles.text}>{p.intro}</p>
          <ul className={styles.options}>
            {p.options.map((o) => (
              <li key={o.label}>
                <ImageFrame
                  src={o.image}
                  alt=""
                  label={`Option ${o.label}`}
                  ratio="4 / 3"
                  shadow={o.chosen ? "ink" : "gray"}
                  sizes="(max-width: 800px) 100vw, 30vw"
                />
                <p className={styles.optName}>
                  Option {o.label}
                  {o.chosen && <span className={styles.chosen}>Chosen</span>}
                </p>
                <p className={styles.optNote}>{o.note}</p>
              </li>
            ))}
          </ul>
          {p.afterReview && (
            <p className={styles.text}>
              <strong>What changed after review:</strong> {p.afterReview}
            </p>
          )}
        </>
      ),
    });
  }

  if (study.decisions) {
    sections.push({
      title: "Key decisions",
      body: (
        <>
          {study.decisions.map((d, i) => (
            <article key={d.title} className={i % 2 === 1 ? `${styles.decision} ${styles.flip}` : styles.decision}>
              <div className={styles.decisionMedia}>
                <ImageFrame src={d.image} alt={d.imageAlt ?? ""} label={d.imageLabel} ratio="4 / 3" sizes="(max-width: 800px) 100vw, 40vw" />
              </div>
              <div>
                <p className={styles.eyebrow}>Decision {i + 1}</p>
                <h3 className={styles.decisionTitle}>{d.title}</h3>
                <p className={styles.text}>{d.body}</p>
              </div>
            </article>
          ))}
        </>
      ),
    });
  }

  if (study.components) {
    sections.push({
      title: "Components",
      note: "Optional section",
      body: (
        <>
          <p className={styles.text}>{study.components.intro}</p>
          <ul className={styles.tiles}>
            {study.components.items.map((c) => (
              <li key={c.label}>
                <ImageFrame src={c.image} alt="" label={c.label} ratio="3 / 2" sizes="(max-width: 800px) 50vw, 20vw" />
                <p className={styles.optNote}>{c.caption}</p>
              </li>
            ))}
          </ul>
        </>
      ),
    });
  }

  if (study.shippedVsDesigned) {
    const s = study.shippedVsDesigned;
    sections.push({
      title: "Shipped vs. designed",
      body: (
        <>
          <p className={styles.text}>{s.intro}</p>
          <div className={styles.pair}>
            <figure>
              <ImageFrame src={s.designImage} alt="" label={s.designLabel} ratio="4 / 3" shadow="gray" sizes="(max-width: 800px) 100vw, 40vw" />
              <figcaption className={styles.optName}>{s.designLabel}</figcaption>
            </figure>
            <figure>
              <ImageFrame src={s.liveImage} alt="" label={s.liveLabel} ratio="4 / 3" sizes="(max-width: 800px) 100vw, 40vw" />
              <figcaption className={styles.optName}>{s.liveLabel}</figcaption>
            </figure>
          </div>
        </>
      ),
    });
  }

  sections.push({
    title: "Outcome and reflection",
    body: (
      <div className={styles.outcome}>
        <div>
          <h3 className={styles.outcomeHead}>What shipped</h3>
          <p className={styles.text}>{study.outcome.shipped}</p>
        </div>
        <div>
          <h3 className={styles.outcomeHead}>What I would do differently</h3>
          <p className={styles.text}>{study.outcome.differently}</p>
        </div>
      </div>
    ),
  });

  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <Link href="/work" className={styles.back}>
            <span aria-hidden="true">&larr;</span> All work
          </Link>
          <p className={styles.category}>{categoryLabel[project.category]}</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <dl className={styles.meta}>
            <div><dt>Role</dt><dd>{study.role}</dd></div>
            <div><dt>Company</dt><dd>{study.company}</dd></div>
            <div><dt>Timeline</dt><dd>{study.timeline}</dd></div>
            <div><dt>Tools</dt><dd>{study.tools}</dd></div>
          </dl>
        </header>

        <ImageFrame src={study.hero} alt={study.heroAlt ?? ""} label={study.heroLabel} ratio="16 / 8" sizes="100vw" />

        <div className={styles.sections}>
          {sections.map((s, i) => (
            <section key={s.title} className={styles.section} aria-labelledby={`section-${i}`}>
              <div>
                <p className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`section-${i}`} className={styles.sectionTitle}>{s.title}</h2>
                {s.note && <p className={styles.note}>{s.note}</p>}
              </div>
              <div>{s.body}</div>
            </section>
          ))}
        </div>
      </div>

      {next && (
        <Link href={`/work/${next.slug}`} className={styles.next}>
          <span className={styles.nextInner}>
            <span>
              <span className={styles.nextLabel}>Next project</span>
              <span className={styles.nextTitle}>{next.title}</span>
            </span>
            <span className={styles.nextArrow} aria-hidden="true">&rarr;</span>
          </span>
        </Link>
      )}
    </>
  );
}