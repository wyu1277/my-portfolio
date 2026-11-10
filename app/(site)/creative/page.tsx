import type { Metadata } from "next";
import CreativeGallery from "@/components/creative/CreativeGallery";
import ContactBand from "@/components/layout/ContactBand";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Creative" };

export default function CreativePage() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Creative</h1>
          <p className={styles.intro}>
            I make the emails, video ads, and graphics that bring shoppers to a store. This is a
            selection. [Add a line on volume or channels, such as how often you send campaigns, but
            only a number you can stand behind.]
          </p>
        </header>
        <CreativeGallery />
      </div>
      <ContactBand />
    </>
  );
}