"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./ZoomableImage.module.css";

type Props = { src: string; alt: string; sizes: string; className?: string };

export default function ZoomableImage({ src, alt, sizes, className }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        aria-label={alt ? `Enlarge image: ${alt}` : "Enlarge image"}
        onClick={() => dialogRef.current?.showModal()}
      >
        <Image src={src} alt={alt} width={0} height={0} sizes={sizes} className={className} />
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={alt || "Enlarged image"}
        onClick={(e) => {
          if (e.target === dialogRef.current || (e.target as HTMLElement).dataset.close) {
            dialogRef.current?.close();
          }
        }}
      >
        <button type="button" className={styles.close} onClick={() => dialogRef.current?.close()}>
          Close
        </button>
        {/* Plain img on purpose: shows the original file at full detail. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={styles.big} loading="lazy" data-close="" />
      </dialog>
    </>
  );
}