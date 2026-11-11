import { createReader } from "@keystatic/core/reader";
import config from "@/keystatic.config";

const reader = createReader(process.cwd(), config);

// Used until you fill in the form. Change the words in Keystatic, not here.
const DEFAULTS = {
  eyebrow: "Designer + front-end developer · New York",
  headline: "Why first. Design second.",
  highlight: "Why",
  subline:
    "I'm a designer who also codes. I work out the reason behind a design before I make it, whether it's a website, a storefront, or the emails and ads around it.",
  primaryLabel: "See my work",
  secondaryLabel: "Get in touch",
};

export async function getHome() {
  const h = await reader.singletons.homePage.read();
  return {
    eyebrow: h?.eyebrow || DEFAULTS.eyebrow,
    headline: h?.headline || DEFAULTS.headline,
    highlight: h?.highlight ?? DEFAULTS.highlight,
    subline: h?.subline || DEFAULTS.subline,
    primaryLabel: h?.primaryLabel || DEFAULTS.primaryLabel,
    secondaryLabel: h?.secondaryLabel || DEFAULTS.secondaryLabel,
  };
}