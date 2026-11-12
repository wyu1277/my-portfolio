"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import type { CreativeItem } from "@/data/creative";
import styles from "./VideoGrid.module.css";

function PlayIcon() {
  return (
    <svg className={styles.playIcon} width="88" height="88" viewBox="0 0 88 88" aria-hidden="true" focusable="false">
      <circle cx="44" cy="44" r="42" fill="rgba(30,27,27,0.62)" stroke="#fff" strokeWidth="3" />
      <path d="M36 28 L64 44 L36 60 Z" fill="#fff" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <path d="m22 9-6 6" />
      <path d="m16 9 6 6" />
    </svg>
  );
}

export default function VideoGrid({ items }: { items: CreativeItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<CreativeItem | null>(null);
  const [muted, setMuted] = useState(true);

  // Open the dialog once a video has been chosen.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  function open(item: CreativeItem) {
    setMuted(true); // always start with the sound off
    setActive(item);
  }

  function close() {
    dialogRef.current?.close();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDialogElement>) {
    if (e.key.toLowerCase() === "m" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const v = videoRef.current;
      if (v) v.muted = !v.muted;
    }
  }

  return (
    <>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={styles.tile}
              onClick={() => open(item)}
              aria-label={`Play video: ${item.title}${item.meta ? `, ${item.meta}` : ""}`}
              aria-haspopup="dialog"
            >
              {item.poster ? (
                <Image
                  src={item.poster}
                  alt=""
                  fill
                  sizes="(max-width: 800px) 100vw, 40vw"
                  className={styles.poster}
                />
              ) : (
                <span className={styles.noPoster}>{item.title}</span>
              )}
              <PlayIcon />
            </button>
            <p className={styles.name}>{item.title}</p>
            <p className={styles.meta}>{item.meta}</p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={active ? `Video player: ${active.title}` : "Video player"}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onClose={() => {
          videoRef.current?.pause();
          setActive(null);
        }}
      >
        <button type="button" className={styles.close} onClick={close}>
          Close
        </button>

        {active && (
          <div className={styles.stage}>
            <div className={styles.playerWrap}>
              <video
                key={active.id}
                ref={videoRef}
                className={styles.player}
                style={{ aspectRatio: active.ratio }}
                autoPlay
                muted
                playsInline
                controls
                preload="metadata"
                poster={active.poster}
                aria-label={active.title}
                onVolumeChange={(e) => setMuted(e.currentTarget.muted || e.currentTarget.volume === 0)}
              >
                <source src={active.video} />
                {active.captions && (
                  <track kind="captions" src={active.captions} srcLang="en" label="English" default />
                )}
              </video>
              {muted && (
                <span className={styles.soundOff}>
                  <MutedIcon /> Sound off
                </span>
              )}
            </div>
            <p className={styles.playerName}>{active.title}</p>
            <p className={styles.playerHint}>
              {active.meta ? `${active.meta} · ` : ""}press M to turn sound {muted ? "on" : "off"}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
