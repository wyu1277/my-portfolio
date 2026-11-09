export type Project = {
  slug: string;
  title: string;
  byline: string;       // company and role, shown above the title
  summary: string;      // one or two sentences
  placeholder: string;  // label shown until a real thumbnail exists
  thumbnail?: string;   // e.g. "/images/gallery-redesign/thumb.jpg"
  thumbnailAlt?: string;
};

// The three projects featured on the Home page, in order.
export const featured: Project[] = [
  {
    slug: "product-page-gallery",
    title: "Product page gallery redesign",
    byline: "Davek Accessories · Design + development",
    summary:
      "Removed about 1,000px of dead space under the product image while keeping the SEO copy, then added hover arrows to browse the whole gallery.",
    placeholder: "Thumbnail: desktop gallery with hover arrows",
  },
  {
    slug: "dataclay",
    title: "Dataclay redesign",
    byline: "Dataclay · UI/UX design",
    summary:
      "Layouts for a B2B software site: product and pricing pages, a screencast archive, and a product-colored card system still in use today.",
    placeholder: "Thumbnail: product-colored cards and shop comparison",
  },
  {
    slug: "le-waf",
    title: "Le Waf",
    byline: "ETL Group · Product design",
    summary:
      "A premium e-commerce redesign for an artisanal waffle brand, from sketches and wireframes through high-fidelity design and front-end handoff.",
    placeholder: "Thumbnail: Le Waf homepage",
  },
];
