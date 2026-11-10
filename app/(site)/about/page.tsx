import type { Metadata } from "next";
import Link from "next/link";
import ImageFrame from "@/components/ui/ImageFrame";
import ContactBand from "@/components/layout/ContactBand";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <section className={styles.hero}>
          <div>
            <h1 className={styles.title}>About</h1>
            <p className={styles.lead}>
              [Two or three sentences in your own voice: who you are and what you do.]
            </p>
            <p className={styles.body}>
              [One short paragraph: your background and what you are looking for.]
            </p>
            <div className={styles.actions}>
              <a href={site.resume} className={styles.primary} download>
                Download resume (PDF)
              </a>
              <Link href="/contact" className={styles.secondary}>Get in touch</Link>
            </div>
          </div>
          <ImageFrame label="Portrait or a photo of you working" ratio="4 / 5" sizes="(max-width: 800px) 100vw, 40vw" />
        </section>

        <section className={styles.tools} aria-labelledby="tools-heading">
          <h2 id="tools-heading" className={styles.toolsLabel}>Tools</h2>
          <p className={styles.toolsList}>
            Figma, Illustrator, Photoshop, HTML, CSS, JavaScript, Liquid, Shopify, Klaviyo, WCAG testing
          </p>
        </section>
      </div>
      <ContactBand />
    </>
  );
}