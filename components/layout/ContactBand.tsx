import { site } from "@/data/site";
import styles from "./ContactBand.module.css";

export default function ContactBand() {
  return (
    <section className={styles.band} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <h2 id="contact-heading" className={styles.heading}>
          Have a role or project in mind? Let&rsquo;s talk.
        </h2>
        <a href={`mailto:${site.email}`} className={styles.button}>{site.email}</a>
      </div>
    </section>
  );
}
