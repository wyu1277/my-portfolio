import type { Metadata } from "next";
import WorkIndex from "@/components/work/WorkIndex";
import ContactBand from "@/components/layout/ContactBand";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Work</h1>
          <p className={styles.intro}>Design, development, and the systems behind them.</p>
        </header>
        <WorkIndex />
      </div>
      <ContactBand />
    </>
  );
}