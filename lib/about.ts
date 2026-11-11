import fs from "node:fs";
import path from "node:path";
import { createReader } from "@keystatic/core/reader";
import config from "@/keystatic.config";

const reader = createReader(process.cwd(), config);

const DEFAULTS = {
  lead: "My initials are W-H-Y, so I took the hint.",
  body:
    "I find the why before I start designing. On a product page, the why was a shopper scrolling past a thousand pixels of empty space to find the image again, and the answer was a new layout, which I designed and built. I'm a designer who codes, with a communication design degree from NYC College of Technology and a software engineering certificate from Fullstack Academy. I'm open to design and front-end roles in New York or remote.",
  tools:
    "Figma, Illustrator, Photoshop, InDesign, HTML, CSS, JavaScript, Liquid, Bricks Builder, Shopify, Klaviyo, WCAG testing",
};

// Keystatic may hand back a full path, "file.jpg", or "images/about/file.jpg".
// This checks the real files and returns whichever address works.
function imageSrc(value: string | null | undefined) {
  if (!value) return undefined;
  if (value.startsWith("http")) return value;
  const clean = value.replace(/^\/+/, "");
  const candidates = [clean, `images/about/${clean}`];
  const found = candidates.find((c) => fs.existsSync(path.join(process.cwd(), "public", c)));
  return `/${found ?? candidates[1]}`;
}

export async function getAbout() {
  const page = await reader.singletons.aboutPage.read();
  return {
    lead: page?.lead || DEFAULTS.lead,
    body: page?.body || DEFAULTS.body,
    tools: page?.tools || DEFAULTS.tools,
    portrait: imageSrc(page?.portrait),
    portraitAlt: page?.portraitAlt || "",
  };
}