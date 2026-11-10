import Link from "next/link";
import ImageFrame from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import styles from "./ProjectRow.module.css";

type Props = { project: Project; number: string; flip?: boolean };

export default function ProjectRow({ project, number, flip = false }: Props) {
  const href = `/work/${project.slug}`;
  return (
    <article className={`${styles.row} ${flip ? styles.flip : ""}`}>
      <Link href={href} className={styles.media} aria-hidden="true" tabIndex={-1}>
        <ImageFrame
          src={project.thumbnail}
          alt=""
          label={project.placeholder}
          ratio="7 / 5"
          fit="cover"
        />
      </Link>
      <div className={styles.text}>
        <p className={styles.number} aria-hidden="true">{number}</p>
        <p className={styles.byline}>{project.byline}</p>
        <h3 className={styles.title}>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p className={styles.summary}>{project.summary}</p>
        <Link href={href} className={styles.more}>
          View case study <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
