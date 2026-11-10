export type Group = "email" | "video" | "hero" | "graphic";

export type CreativeItem = {
  id: string;
  group: Group;
  title: string; // shown under the tile
  meta: string; // e.g. "Email · Klaviyo"
  label: string; // shown in the placeholder
  ratio: string; // e.g. "3 / 4"
  image?: string; // e.g. "/images/creative/spring-email.jpg"
  alt?: string; // describe the image for screen readers
  video?: string; // e.g. "/videos/solo-ad.mp4"
  poster?: string; // still image shown before play
  captions?: string; // e.g. "/videos/solo-ad.vtt"
  note?: string; // longer text, used by the functional graphics feature
};

export const creativeItems: CreativeItem[] = [
  { id: "email-1", group: "email", title: "[Campaign name]", meta: "Email · Klaviyo", label: "Full-length email 1", ratio: "3 / 4" },
  { id: "email-2", group: "email", title: "[Campaign name]", meta: "Email · Klaviyo", label: "Full-length email 2", ratio: "3 / 4" },
  { id: "email-3", group: "email", title: "[Campaign name]", meta: "Email · Klaviyo", label: "Full-length email 3", ratio: "3 / 4" },
  { id: "email-4", group: "email", title: "[Campaign name]", meta: "Email · Klaviyo", label: "Full-length email 4", ratio: "3 / 4" },

  { id: "video-1", group: "video", title: "[Ad name]", meta: "Video ad · [length] · captioned", label: "Video ad 1", ratio: "9 / 16" },
  { id: "video-2", group: "video", title: "[Ad name]", meta: "Video ad · [length] · captioned", label: "Video ad 2", ratio: "9 / 16" },
  { id: "video-3", group: "video", title: "[Ad name]", meta: "Video ad · [length] · captioned", label: "Video ad 3", ratio: "9 / 16" },
  { id: "video-4", group: "video", title: "[Ad name]", meta: "Video ad · [length] · captioned", label: "Video ad 4", ratio: "9 / 16" },

  { id: "hero-1", group: "hero", title: "[Hero name]", meta: "Homepage hero", label: "Site hero 1", ratio: "16 / 9" },
  { id: "hero-2", group: "hero", title: "[Hero name]", meta: "Collection hero", label: "Site hero 2", ratio: "16 / 9" },

  {
    id: "sizing-chart",
    group: "graphic",
    title: "Sizing chart",
    meta: "Product page graphic",
    label: "Sizing chart",
    ratio: "4 / 3",
    note: "[The shopper problem it solved and how you made it clear.]",
  },
];