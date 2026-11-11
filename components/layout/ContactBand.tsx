import { getSite } from "@/lib/site";
import styles from "./ContactBand.module.css";

export default async function ContactBand() {
  const site = await getSite();
  return (
    <section className={styles.band} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <h2 id="contact-heading" className={styles.heading}>
          Have a role or project in mind? Let&rsquo;s talk.
        </h2>
        {site.email && (
          <a href={`mailto:${site.email}`} className={styles.button}>{site.email}</a>
        )}
      </div>
    </section>
  );
}