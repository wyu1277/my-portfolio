import type { Metadata } from "next";
import WorkIndex from "@/components/work/WorkIndex";
import ContactBand from "@/components/layout/ContactBand";
import { getProjects } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Work" };

export default async function WorkPage() {
  const projects = await getProjects();
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Work</h1>
          <p className={styles.intro}>Design, development, and the systems behind them.</p>
        </header>
        <WorkIndex projects={projects} />
      </div>
      <ContactBand />
    </>
  );
}