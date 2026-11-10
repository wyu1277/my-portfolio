export type Category = "design" | "campaigns" | "systems";
export type Discipline = "Design" | "Development" | "Systems" | "Campaigns";

export type Project = {
  slug: string;
  title: string;
  byline: string; // company and role, shown above the title
  summary: string; // one or two sentences
  placeholder: string; // label shown until a real thumbnail exists
  category: Category; // decides the section and shadow color
  disciplines: Discipline[]; // used by the filter chips
  published: boolean; // false = hidden everywhere
  wide?: boolean; // true = large feature card
  thumbnail?: string; // e.g. "/images/dataclay/thumb.jpg"
  thumbnailAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "dataclay",
    title: "Dataclay redesign",
    byline: "Dataclay · UI/UX design",
    summary:
      "Product, pricing, and learning pages for a B2B video-automation software company. A product-colored card system, buttons, and shop comparison layouts are still in use.",
    placeholder: "Thumbnail: product-colored cards and shop comparison",
    category: "design",
    disciplines: ["Design"],
    published: true,
    wide: true,
  },
  {
    slug: "product-page-gallery",
    title: "Product page gallery redesign",
    byline: "Davek Accessories · Design + development",
    summary:
      "Removed about 1,000px of dead space under the product image while keeping the SEO copy, and added hover arrows to browse the whole gallery.",
    placeholder: "Thumbnail: desktop gallery with hover arrows",
    category: "design",
    disciplines: ["Design", "Development"],
    published: true,
  },
  {
    slug: "le-waf",
    title: "Le Waf",
    byline: "ETL Group · Product design",
    summary:
      "A premium redesign for an artisanal waffle brand, from sketches and wireframes to high-fidelity design and front-end handoff.",
    placeholder: "Thumbnail: Le Waf homepage",
    category: "design",
    disciplines: ["Design"],
    published: true,
  },
  {
    slug: "its-time-for-chelsea",
    title: "It's Time for Chelsea",
    byline: "Chamber of Commerce · Campaign design",
    summary:
      "Instagram posts, Chelsea Market ads, and LinkNYC kiosk ads that ran in Chelsea, built on the citywide It's Time for NYC brand.",
    placeholder: "Photo: LinkNYC kiosk and Chelsea Market screen, in place",
    category: "campaigns",
    disciplines: ["Campaigns"],
    published: true,
  },
  {
    slug: "shop-the-village",
    title: "Shop the Village",
    byline: "Chamber of Commerce · Campaign design",
    summary:
      "A winter shopping campaign for Greenwich Village stores, adapting the Chamber's brand palette to the season across Instagram and kiosk screens.",
    placeholder: "Photo: Shop the Village kiosk screens",
    category: "campaigns",
    disciplines: ["Campaigns"],
    published: true,
  },
  {
    slug: "accessibility-audit",
    title: "Accessibility audit and fixes",
    byline: "Davek Accessories · Development + systems",
    summary:
      "Keyboard, screen reader, and focus fixes across three regional storefronts, with a change log and regression checklist. WAVE errors from 20 to 0.",
    placeholder: "Thumbnail: WAVE before and after",
    category: "systems",
    disciplines: ["Development", "Systems"],
    published: true,
  },
  {
    slug: "reviews-and-google-ratings",
    title: "Making our reviews visible to Google",
    byline: "Davek Accessories · Systems",
    summary:
      "Connected Judge.me reviews to Google and built the review-request flow. Monthly reviews grew from about 9 to about 61.",
    placeholder: "Thumbnail: review volume chart",
    category: "systems",
    disciplines: ["Systems"],
    published: true, 
  },
];

// The three projects shown on the Home page, in order.
export const featured: Project[] = [
  "product-page-gallery",
  "dataclay",
  "le-waf",
]
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));