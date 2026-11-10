import Image from "next/image";
import ZoomableImage from "./ZoomableImage";
import styles from "./ImageFrame.module.css";

type Props = {
  src?: string;
  alt?: string;
  label: string; // shown while there is no real image
  ratio?: string; // shape of the placeholder, and of the crop when fit is "cover"
  shadow?: "red" | "ink" | "gray";
  sizes?: string;
  fit?: "natural" | "cover"; // natural = show the whole image, cover = crop to the ratio
  zoom?: boolean; // natural images open in a modal when clicked
};

export default function ImageFrame({
  src,
  alt = "",
  label,
  ratio = "4 / 3",
  shadow = "red",
  sizes = "(max-width: 800px) 100vw, 60vw",
  fit = "natural",
  zoom = true,
}: Props) {
  if (src && fit === "natural") {
    return (
      <div className={`${styles.frame} ${styles.natural} ${styles[shadow]}`}>
        {zoom ? (
          <ZoomableImage src={src} alt={alt} sizes={sizes} className={styles.naturalImg} />
        ) : (
          <Image src={src} alt={alt} width={0} height={0} sizes={sizes} className={styles.naturalImg} />
        )}
      </div>
    );
  }

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