import Link from "next/link";
import ImageFrame from "@/components/ui/ImageFrame";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

const shadowFor = { design: "red", campaigns: "ink", systems: "gray" } as const;

export default function ProjectCard({
  project,
  wide = false,
}: {
  project: Project;
  wide?: boolean;
}) {
  const href = `/work/${project.slug}`;
  return (
    <article className={wide ? styles.wide : styles.card}>
      <Link href={href} className={styles.media} aria-hidden="true" tabIndex={-1}>
        <ImageFrame
          src={project.thumbnail}
          alt=""
          label={project.placeholder}
          ratio={wide ? "7 / 5" : "4 / 3"}
          shadow={shadowFor[project.category]}
        />
      </Link>
      <div>
        <p className={styles.byline}>{project.byline}</p>
        <h3 className={styles.title}>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p className={styles.summary}>{project.summary}</p>
      </div>
    </article>
  );
}