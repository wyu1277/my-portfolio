import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.links}>
        <a href={`mailto:${site.email}`}>Email</a>
        <a href={site.linkedin}>LinkedIn</a>
        <a href={site.resume}>Resume</a>
      </p>
      <p className={styles.note}>{site.name}, {site.location}</p>
    </footer>
  );
}
