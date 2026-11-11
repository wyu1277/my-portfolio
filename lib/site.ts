import fs from "node:fs";
import path from "node:path";
import { createReader } from "@keystatic/core/reader";
import config from "@/keystatic.config";

const reader = createReader(process.cwd(), config);

// Used until you fill in Site settings. Change them in Keystatic, not here.
const DEFAULTS = {
  name: "Wilson Yu",
  email: "why@whydesigns.co",
  location: "New York",
};

// Keystatic may hand back a full path or just a file name.
// This checks the real file and returns an address that works, or nothing.
function fileSrc(value: string | null | undefined) {
  if (!value) return undefined;
  if (value.startsWith("http")) return value;
  const clean = value.replace(/^\/+/, "");
  const candidates = [clean, `files/${clean}`];
  const found = candidates.find((c) => fs.existsSync(path.join(process.cwd(), "public", c)));
  return found ? `/${found}` : undefined;
}

export async function getSite() {
  const s = await reader.singletons.siteSettings.read();
  return {
    name: s?.name || DEFAULTS.name,
    email: s?.email || DEFAULTS.email,
    linkedin: s?.linkedin || "",
    location: s?.location || DEFAULTS.location,
    resume: fileSrc(s?.resume),
  };
}