import type { Metadata } from "next";
import Link from "next/link";
import ImageFrame from "@/components/ui/ImageFrame";
import ContactBand from "@/components/layout/ContactBand";
import { site } from "@/data/site";
import { getAbout } from "@/lib/about";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About" };

export default async function AboutPage() {
  const about = await getAbout();
  const paragraphs = about.body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <div>
            <h1 className={styles.title}>About</h1>
            <p className={styles.lead}>{about.lead}</p>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.body}>{p}</p>
            ))}
            <div className={styles.actions}>
              <a href={site.resume} className={styles.primary} download>
                Download resume (PDF)
              </a>
              <Link href="/contact" className={styles.secondary}>Get in touch</Link>
            </div>
          </div>
          <ImageFrame
            src={about.portrait}
            alt={about.portraitAlt}
            label="Portrait or a photo of you working"
            ratio="4 / 5"
            fit="cover"
            zoom={false}
            sizes="(max-width: 800px) 100vw, 40vw"
          />
        </section>

        <section className={styles.tools} aria-labelledby="tools-heading">
          <h2 id="tools-heading" className={styles.toolsLabel}>Tools</h2>
          <p className={styles.toolsList}>{about.tools}</p>
        </section>
      </div>
      <ContactBand />
    </>
  );
}