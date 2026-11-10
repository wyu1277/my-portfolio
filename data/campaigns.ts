export type CampaignTile = {
  label: string; // shown in the placeholder
  name: string;
  caption: string;
  ratio: string; // e.g. "3 / 4"
  image?: string;
  alt?: string;
};

export type CampaignGroup = {
  title: string;
  columns: string; // CSS grid columns, e.g. "1fr 1fr 2fr"
  tiles: CampaignTile[];
};

export type CampaignStudy = {
  role: string;
  organization: string;
  timeline: string;
  formats: string;
  heroLabel: string;
  hero?: string;
  heroAlt?: string;
  brief: { paragraphs: string[]; constraint?: string };
  groups: CampaignGroup[];
  inPlace?: { note: string; tiles: CampaignTile[] };
  reflection: string;
};

const org = "Greenwich Village Chelsea Chamber of Commerce";

export const campaignStudies: Record<string, CampaignStudy | undefined> = {
  "its-time-for-chelsea": {
    role: "Graphic Design Intern",
    organization: org,
    timeline: "[Dates]",
    formats: "Kiosk, market screens, social",
    heroLabel: "Hero: a photo of the ad in place, or the strongest single piece",
    brief: {
      paragraphs: [
        "It's Time for Chelsea was a campaign to bring shoppers to local businesses in Chelsea.",
        "I designed Instagram posts for individual businesses, ads for the screens at Chelsea Market, and ads for LinkNYC kiosks.",
      ],
      constraint:
        "The campaign was built on the colors and framework of the citywide It's Time for NYC initiative, so the work had to look connected to it.",
    },
    groups: [
      {
        title: "Kiosk ads and market screens",
        columns: "1fr 1fr 2fr",
        tiles: [
          { label: "LinkNYC kiosk ad 1", name: "Kiosk ad", caption: "[Format and size]", ratio: "3 / 4" },
          { label: "LinkNYC kiosk ad 2", name: "Kiosk ad", caption: "[Format and size]", ratio: "3 / 4" },
          { label: "Chelsea Market screen", name: "Chelsea Market screen", caption: "[Format and size]", ratio: "3 / 2" },
        ],
      },
      {
        title: "Instagram posts",
        columns: "1fr 1fr 1fr",
        tiles: [
          { label: "Instagram post 1", name: "Instagram post", caption: "[Business name]", ratio: "1 / 1" },
          { label: "Instagram post 2", name: "Instagram post", caption: "[Business name]", ratio: "1 / 1" },
          { label: "Instagram post 3", name: "Instagram post", caption: "[Business name]", ratio: "1 / 1" },
        ],
      },
    ],
    inPlace: {
      note: "Only use photos you took or have permission to use.",
      tiles: [
        { label: "Photo: kiosk on the street", name: "LinkNYC kiosk", caption: "[Where and when]", ratio: "4 / 3" },
        { label: "Photo: screen at Chelsea Market", name: "Chelsea Market", caption: "[Where and when]", ratio: "4 / 3" },
      ],
    },
    reflection:
      "Designing within an existing brand system is its own skill: the work is making many pieces feel consistent across very different formats.",
  },

  "shop-the-village": {
    role: "Graphic Design Intern",
    organization: org,
    timeline: "[Dates]",
    formats: "Kiosk screens, social",
    heroLabel: "Hero: the strongest kiosk screen or a photo in place",
    brief: {
      paragraphs: [
        "Shop the Village was a winter shopping campaign for Greenwich Village stores.",
        "I designed Instagram posts and kiosk screens that show the Village's stores in a warm, seasonal mood.",
      ],
      constraint:
        "I started from the Chamber's branding deck and adapted its palette toward deeper, cooler winter tones.",
    },
    groups: [
      {
        title: "Kiosk screens",
        columns: "1fr 1fr 1fr",
        tiles: [
          { label: "Kiosk screen 1", name: "Kiosk screen", caption: "[Format and size]", ratio: "3 / 4" },
          { label: "Kiosk screen 2", name: "Kiosk screen", caption: "[Format and size]", ratio: "3 / 4" },
          { label: "Kiosk screen 3", name: "Kiosk screen", caption: "[Format and size]", ratio: "3 / 4" },
        ],
      },
      {
        title: "Instagram posts",
        columns: "1fr 1fr 1fr",
        tiles: [
          { label: "Instagram post 1", name: "Instagram post", caption: "[Store name]", ratio: "1 / 1" },
          { label: "Instagram post 2", name: "Instagram post", caption: "[Store name]", ratio: "1 / 1" },
          { label: "Instagram post 3", name: "Instagram post", caption: "[Store name]", ratio: "1 / 1" },
        ],
      },
    ],
    reflection:
      "Adapting an existing palette to a season taught me how far a brand can stretch while still looking like itself.",
  },
};