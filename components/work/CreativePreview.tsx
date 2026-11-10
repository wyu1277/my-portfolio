import Link from "next/link";
import ImageFrame from "@/components/ui/ImageFrame";
import styles from "./CreativePreview.module.css";

const items = [
  { label: "Full-length email 1", name: "[Campaign name]", meta: "Email · Klaviyo" },
  { label: "Full-length email 2", name: "[Campaign name]", meta: "Email · Klaviyo" },
  { label: "Full-length email 3", name: "[Campaign name]", meta: "Email · Klaviyo" },
  { label: "Video ad still", name: "[Ad name]", meta: "Video ad · Meta" },
];

export default function CreativePreview() {
  return (
    <section className={styles.section} aria-labelledby="creative-heading">
      <h2 id="creative-heading">Email and promo creative</h2>
      <p className={styles.sub}>
        Weekly campaign emails built in Klaviyo, plus video ads and graphics.
      </p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.label}>
            <ImageFrame label={item.label} ratio="3 / 4" shadow="ink" sizes="(max-width: 800px) 50vw, 25vw" />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.meta}>{item.meta}</p>
          </li>
        ))}
      </ul>
      <Link href="/creative" className={styles.more}>
        View all creative <span aria-hidden="true">&rarr;</span>
      </Link>
    </section>
  );
}