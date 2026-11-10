import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: { kind: "local" },

  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      schema: {
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
        thumbnail: fields.image({
          label: "Thumbnail",
          description: "Compress to under about 500 KB before uploading.",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
        }),
        thumbnailAlt: fields.text({
          label: "Thumbnail description",
          description: "Describe the image for screen readers. Leave empty if it is purely decorative.",
        }),
      },
    }),
  },
});