"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Reveal.module.css";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight * 0.9;
    if (reduceMotion || alreadyVisible) return; // stays visible, no animation

    const show = () => {
      el.classList.remove(styles.hidden);
      observer.disconnect();
      el.removeEventListener("focusin", show);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show();
      },
      { threshold: 0.15 },
    );

    el.classList.add(styles.hidden);
    void el.offsetWidth; // let the browser register the hidden state first
    el.classList.add(styles.animate);

    observer.observe(el);
    el.addEventListener("focusin", show);

    return () => {
      observer.disconnect();
      el.removeEventListener("focusin", show);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}