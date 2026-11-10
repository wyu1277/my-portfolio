import { config, fields, collection, singleton } from "@keystatic/core";

const photo = (label: string) =>
  fields.image({
    label,
    description: "Compress to under about 500 KB before uploading.",
    directory: "public/images/projects",
    publicPath: "/images/projects/",
  });

const shape = () =>
  fields.select({
    label: "Shape",
    options: [
      { label: "Tall (3:4)", value: "3 / 4" },
      { label: "Square (1:1)", value: "1 / 1" },
      { label: "Landscape (4:3)", value: "4 / 3" },
      { label: "Wide (3:2)", value: "3 / 2" },
      { label: "Widescreen (16:9)", value: "16 / 9" },
    ],
    defaultValue: "4 / 3",
  });

const tiles = (label: string) =>
  fields.array(
    fields.object({
      name: fields.text({ label: "Name" }),
      caption: fields.text({ label: "Caption" }),
      ratio: shape(),
      image: photo("Image"),
      alt: fields.text({ label: "Image description", description: "For screen readers." }),
    }),
    { label, itemLabel: (props) => props.fields.name.value || "Tile" },
  );

export default config({
  storage: { kind: "local" },

    singletons: {
    creativePage: singleton({
      label: "Creative page",
      path: "content/creative-page",
      schema: {
        intro: fields.text({
          label: "Intro paragraph",
          multiline: true,
          description: "Shown under the page title. Only use numbers you can stand behind.",
        }),
      },
    }),
  },

  collections: {
        creative: collection({
      label: "Creative items",
      slugField: "title",
      path: "content/creative/*",
      schema: {
        title: fields.slug({
          name: { label: "Name", description: "Shown under the tile, e.g. the campaign name." },
        }),
        group: fields.select({
          label: "Type",
          options: [
            { label: "Email", value: "email" },
            { label: "Video ad", value: "video" },
            { label: "Site hero", value: "hero" },
            { label: "Functional graphic (large feature)", value: "graphic" },
          ],
          defaultValue: "email",
        }),
        meta: fields.text({
          label: "Small line under the name",
          description: "e.g. Email, Klaviyo or Video ad, 12 seconds, captioned",
        }),
        ratio: fields.select({
          label: "Placeholder shape",
          description: "Only used while there is no image or video. Uploaded images show at their natural shape.",
          options: [
            { label: "Tall (3:4)", value: "3 / 4" },
            { label: "Vertical video (9:16)", value: "9 / 16" },
            { label: "Square (1:1)", value: "1 / 1" },
            { label: "Landscape (4:3)", value: "4 / 3" },
            { label: "Widescreen (16:9)", value: "16 / 9" },
          ],
          defaultValue: "3 / 4",
        }),
        image: fields.image({
          label: "Image",
          description: "Emails, heroes, and graphics. Compress to under about 500 KB.",
          directory: "public/images/creative",
          publicPath: "/images/creative/",
        }),
        alt: fields.text({
          label: "Image description",
          description: "Describe what the image shows, for screen readers.",
        }),
        video: fields.file({
          label: "Video (MP4)",
          description: "Short clips only, ideally under 5 MB.",
          directory: "public/videos",
          publicPath: "/videos/",
        }),
        poster: fields.image({
          label: "Video poster image",
          description: "A still shown before the video plays.",
          directory: "public/images/creative",
          publicPath: "/images/creative/",
        }),
        captions: fields.file({
          label: "Captions file (.vtt)",
          description: "Captions for the video.",
          directory: "public/videos",
          publicPath: "/videos/",
        }),
        note: fields.text({
          label: "Longer text",
          multiline: true,
          description: "Used for functional graphics, such as the sizing chart.",
        }),
        published: fields.checkbox({ label: "Published", defaultValue: true }),
        sortOrder: fields.integer({
          label: "Sort order",
          description: "Lower numbers come first within a type.",
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      schema: {
        // ---- Cards (Home, Work, Creative) ----
        title: fields.slug({ name: { label: "Title" } }),
        byline: fields.text({
          label: "Byline",
          description: "Company and role, e.g. Davek Accessories · Design + development",
        }),
        summary: fields.text({
          label: "Summary",
          multiline: true,
          description: "One or two sentences shown on the cards.",
        }),
        category: fields.select({
          label: "Section",
          description: "Campaigns use the campaign page layout. Everything else uses the case study layout.",
          options: [
            { label: "Product and web design", value: "design" },
            { label: "Campaigns", value: "campaigns" },
            { label: "Systems", value: "systems" },
          ],
          defaultValue: "design",
        }),
        disciplines: fields.multiselect({
          label: "Filter tags",
          options: [
            { label: "Design", value: "Design" },
            { label: "Development", value: "Development" },
            { label: "Systems", value: "Systems" },
            { label: "Campaigns", value: "Campaigns" },
          ],
          defaultValue: [],
        }),
        published: fields.checkbox({
          label: "Published",
          description: "Unchecked projects stay hidden from the website.",
          defaultValue: false,
        }),
        wide: fields.checkbox({
          label: "Large feature card",
          description: "Shows the project as the big card at the top of its section.",
          defaultValue: false,
        }),
        homeOrder: fields.integer({
          label: "Home page position",
          description: "1, 2, or 3 to feature it on the Home page. Leave empty to leave it off.",
        }),
        sortOrder: fields.integer({
          label: "Sort order",
          description: "Lower numbers come first within a section.",
        }),
        thumbnail: photo("Thumbnail"),
        thumbnailAlt: fields.text({
          label: "Thumbnail description",
          description: "Describe the image for screen readers. Leave empty if it is purely decorative.",
        }),

        // ---- Page header (both layouts) ----
        role: fields.text({ label: "Page · Role" }),
        company: fields.text({ label: "Page · Company or organization" }),
        timeline: fields.text({ label: "Page · Timeline" }),
        tools: fields.text({ label: "Page · Tools (case studies) or formats (campaigns)" }),
        heroImage: photo("Page · Hero image"),
        heroAlt: fields.text({ label: "Page · Hero image description" }),

        // ---- Brief (both layouts) ----
        briefText: fields.text({
          label: "Page · The brief",
          multiline: true,
          description:
            "Leave a blank line between paragraphs. The project page appears only when this is filled in.",
        }),
        constraint: fields.text({ label: "Page · Constraint (optional)", multiline: true }),

        // ---- Case study layout ----
        processIntro: fields.text({ label: "Case study · Options intro", multiline: true }),
        options: fields.array(
          fields.object({
            label: fields.text({ label: "Label", description: "e.g. A, B, C" }),
            note: fields.text({ label: "One line on the idea and the tradeoff", multiline: true }),
            chosen: fields.checkbox({ label: "Chosen", defaultValue: false }),
            image: photo("Image"),
          }),
          { label: "Case study · Options explored", itemLabel: (p) => `Option ${p.fields.label.value}` },
        ),
        afterReview: fields.text({ label: "Case study · What changed after review", multiline: true }),
        decisions: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            body: fields.text({ label: "Text", multiline: true }),
            image: photo("Image"),
            imageAlt: fields.text({ label: "Image description" }),
          }),
          { label: "Case study · Key decisions", itemLabel: (p) => p.fields.title.value || "Decision" },
        ),
        componentsIntro: fields.text({ label: "Case study · Components intro", multiline: true }),
        components: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            caption: fields.text({ label: "Caption" }),
            image: photo("Image"),
          }),
          { label: "Case study · Components", itemLabel: (p) => p.fields.label.value || "Component" },
        ),
        shippedIntro: fields.text({ label: "Case study · Shipped vs. designed intro", multiline: true }),
        designImage: photo("Case study · Shipped vs. designed: my design file"),
        liveImage: photo("Case study · Shipped vs. designed: live site"),
        outcomeShipped: fields.text({ label: "Case study · What shipped", multiline: true }),
        outcomeDifferently: fields.text({ label: "Case study · What I would do differently", multiline: true }),

        // ---- Campaign layout ----
        groups: fields.array(
          fields.object({
            title: fields.text({ label: "Group title" }),
            columns: fields.select({
              label: "Layout",
              options: [
                { label: "Two tall plus one wide", value: "1fr 1fr 2fr" },
                { label: "Three equal", value: "1fr 1fr 1fr" },
                { label: "Two equal", value: "1fr 1fr" },
                { label: "One", value: "1fr" },
              ],
              defaultValue: "1fr 1fr 1fr",
            }),
            tiles: tiles("Tiles"),
          }),
          { label: "Campaign · The work, grouped by format", itemLabel: (p) => p.fields.title.value || "Group" },
        ),
        inPlaceNote: fields.text({ label: "Campaign · Seen in place: note", multiline: true }),
        inPlace: tiles("Campaign · Seen in place: photos"),
        reflection: fields.text({ label: "Campaign · Reflection", multiline: true }),
      },
    }),
  },
});