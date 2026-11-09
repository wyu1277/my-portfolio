"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import styles from "./Nav.module.css";

const links = [
  { href: "/work", label: "Work" },
  { href: "/creative", label: "Creative" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.name}>{site.name}</Link>
      <nav aria-label="Main">
        <ul className={styles.list}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? styles.active : styles.link}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className={styles.contact}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
