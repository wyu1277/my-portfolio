import Image from "next/image";
import styles from "./ImageFrame.module.css";

type Props = {
  src?: string;
  alt?: string;
  label: string; // shown while there is no real image
  ratio?: string;
  shadow?: "red" | "ink" | "gray";
  sizes?: string;
};

export default function ImageFrame({
  src,
  alt = "",
  label,
  ratio = "4 / 3",
  shadow = "red",
  sizes = "(max-width: 800px) 100vw, 60vw",
}: Props) {
  return (
    <div className={`${styles.frame} ${styles[shadow]}`} style={{ aspectRatio: ratio }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className={styles.img} />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
