import Image from "next/image";
import Link from "next/link";
import ProjectRow from "@/components/work/ProjectRow";
import ContactBand from "@/components/layout/ContactBand";
import Reveal from "@/components/ui/Reveal";
import { getFeatured } from "@/lib/content";
import { getHome } from "@/lib/home";
import styles from "./page.module.css";

// Wraps the highlighted word in a span so it shows in red.
function renderHeadline(text: string, highlight: string) {
  if (!highlight) return text;
  const i = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span>{text.slice(i, i + highlight.length)}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}

export default async function Home() {
  const [featured, hero] = await Promise.all([getFeatured(), getHome()]);

  return (
    <>
      <div className="container">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 id="hero-heading" className={styles.headline}>
              {renderHeadline(hero.headline, hero.highlight)}
            </h1>
            <p className={styles.sub}>{hero.subline}</p>
            <div className={styles.actions}>
              <Link href="/work" className={styles.primary}>{hero.primaryLabel}</Link>
              <Link href="/contact" className={styles.secondary}>{hero.secondaryLabel}</Link>
            </div>
          </div>
          <div className={styles.logoBlock}>
            <Image
              src="/wylogo-transparent.png"
              alt="WHYDesigns logo: a handwritten w and y joined by a pencil"
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