import type { Metadata } from "next";
import CreativeGallery from "@/components/creative/CreativeGallery";
import ContactBand from "@/components/layout/ContactBand";
import { getProjects } from "@/lib/content";
import { getCreativeItems, getCreativeIntro } from "@/lib/creative";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Creative" };

export default async function CreativePage() {
  const [items, intro, projects] = await Promise.all([
    getCreativeItems(),
    getCreativeIntro(),
    getProjects(),
  ]);
  const campaigns = projects.filter((p) => p.published && p.category === "campaigns");

  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Creative</h1>
          <p className={styles.intro}>{intro}</p>
        </header>
        <CreativeGallery items={items} campaigns={campaigns} />
      </div>
      <ContactBand />
    </>
  );
}