import Image from "next/image";
import Link from "next/link";
import ProjectRow from "@/components/work/ProjectRow";
import ContactBand from "@/components/layout/ContactBand";
import Reveal from "@/components/ui/Reveal";
import { getFeatured } from "@/lib/content";
import styles from "./page.module.css";

export default async function Home() {
  const featured = await getFeatured();
  return (
    <>
      <div className="container">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div>
            <p className={styles.eyebrow}>Designer + front-end developer · New York</p>
            <h1 id="hero-heading" className={styles.headline}>
              Digital design with a <span>reason</span> behind every choice.
            </h1>
            <p className={styles.sub}>
              I design and build websites, storefronts, and the visuals around them.
            </p>
            <div className={styles.actions}>
              <Link href="/work" className={styles.primary}>See my work</Link>
              <Link href="/contact" className={styles.secondary}>Get in touch</Link>
            </div>
          </div>
          <div className={styles.logoBlock}>
            <Image
              src="/wylogo-transparent.png"
              alt="WY logo: a handwritten w and y joined by a pencil"
              width={848}
              height={750}
              priority
              className={styles.logo}
            />
          </div>
        </section>

        <section aria-labelledby="work-heading">
          <div className={styles.sectionHead}>
            <h2 id="work-heading">Selected work</h2>
            <Link href="/work">All work <span aria-hidden="true">&rarr;</span></Link>
          </div>
          {featured.map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectRow project={p} number={`0${i + 1}`} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </section>

        <p className={styles.also}>
          <span className={styles.alsoLabel}>Also</span>
          <Link href="/creative">Creative: emails, video, graphics <span aria-hidden="true">&rarr;</span></Link>
        </p>
      </div>
      <ContactBand />
    </>
  );
}