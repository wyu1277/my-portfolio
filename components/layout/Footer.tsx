import { getSite } from "@/lib/site";
import styles from "./Footer.module.css";

export default async function Footer() {
  const site = await getSite();
  return (
    <footer className={styles.footer}>
      <p className={styles.links}>
        {site.email && <a href={`mailto:${site.email}`}>Email</a>}
        {site.linkedin && <a href={site.linkedin}>LinkedIn</a>}
        {site.resume && <a href={site.resume}>Resume</a>}
      </p>
      <p className={styles.note}>
        {site.name}
        {site.location ? `, ${site.location}` : ""}
      </p>
    </footer>
  );
}