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
  hasStudy?: boolean; // true once the project page has content
  wide?: boolean; // true = large feature card
  homeOrder?: number; // 1 to 3 = featured on the Home page
  sortOrder?: number; // lower comes first within a section
  thumbnail?: string;
  thumbnailAlt?: string;
};