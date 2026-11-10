export type Group = "email" | "video" | "hero" | "graphic";

export type CreativeItem = {
  id: string;
  group: Group;
  title: string; // shown under the tile
  meta: string; // small line under the title
  label: string; // shown in the placeholder
  ratio: string; // e.g. "3 / 4"
  image?: string;
  alt?: string;
  video?: string;
  poster?: string;
  captions?: string;
  note?: string; // longer text, used by the functional graphics feature
};