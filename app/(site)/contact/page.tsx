import type { Metadata } from "next";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container">
      <section className={styles.wrap}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.intro}>
          Have a role or project in mind? The quickest way to reach me is by email.
        </p>
        <a href={`mailto:${site.email}`} className={styles.email}>{site.email}</a>
        <ul className={styles.links}>
          <li><a href={site.linkedin}>LinkedIn</a></li>
          <li><a href={site.resume} download>Resume (PDF)</a></li>
        </ul>
        <p className={styles.location}>Based in {site.location}.</p>
      </section>
    </div>
  );
}