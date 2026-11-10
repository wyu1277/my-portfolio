export type CaseOption = { label: string; note: string; chosen?: boolean; image?: string };
export type CaseDecision = { title: string; body: string; imageLabel: string; image?: string; imageAlt?: string };
export type CaseItem = { label: string; caption: string; image?: string };

export type CaseStudy = {
  role: string;
  company: string;
  timeline: string;
  tools: string;
  heroLabel: string;
  hero?: string;
  heroAlt?: string;
  brief: { paragraphs: string[]; constraint?: string };
  process?: { intro: string; options: CaseOption[]; afterReview?: string };
  decisions?: CaseDecision[];
  components?: { intro: string; items: CaseItem[] };
  shippedVsDesigned?: {
    intro: string;
    designLabel: string;
    liveLabel: string;
    designImage?: string;
    liveImage?: string;
  };
  outcome: { shipped: string; differently: string };
};

export const caseStudies: Record<string, CaseStudy | undefined> = {
  "product-page-gallery": {
    role: "Designer and developer",
    company: "Davek Accessories",
    timeline: "[Launch date]",
    tools: "HTML, CSS, JavaScript, Liquid",
    heroLabel: "Hero: before and after of a desktop product page",
    brief: {
      paragraphs: [
        "On desktop, the product description is long because it carries SEO copy that has to stay. As shoppers scrolled down to read it, the image was left behind, and roughly 1,000 pixels or more of empty space sat below it.",
        "Switching images was worse. The thumbnails sat at the bottom of a sticky gallery as tall as the viewport, so shoppers had to scroll down to change the image and back up to see it.",
      ],
      constraint:
        "The SEO copy could not be cut, so the layout had to change instead. Mobile already had these features and no dead space, so this is desktop only.",
    },
    decisions: [
      {
        title: "Benchmarking before building",
        body: "I looked at Blunt and Weatherman as direct competitors and IKEA as a general e-commerce benchmark. [What you took from each, one line apiece.]",
        imageLabel: "Image: annotated competitor screenshots",
      },
      {
        title: "Hover arrows to browse the whole gallery",
        body: "Hovering over the product image now shows arrows that step through every image, so shoppers no longer need the thumbnails. This did not exist before. A magnifying-glass cursor signals that the image can be clicked for a larger view.",
        imageLabel: "Image: hover arrows on the product image",
      },
      {
        title: "No gallery navigation inside the modal",
        body: "I tried it, but high-resolution images loaded slowly. The fix would have been loading a low-resolution version first and swapping in the sharp one, and I judged the extra complexity wasn't worth it for a secondary view. The modal shows the chosen image, and the arrows on the page handle browsing.",
        imageLabel: "Image: the modal view",
      },
    ],
    outcome: {
      shipped:
        "The new gallery is live on all desktop product pages. It removed the dead space and kept the SEO copy. I built and tested it on a backup theme first, then added feedback from coworkers and a review from my boss. I used AI tools to help write the code, and I defined the behavior, tested every iteration in the browser, and directed the fixes.",
      differently:
        "I didn't build accessibility into the modal at launch. I added keyboard and screen reader support later, and now it's part of my checklist before anything ships.",
    },
  },

  dataclay: {
    role: "UX Designer and Web Developer",
    company: "Dataclay",
    timeline: "Oct 2023 to Oct 2024",
    tools: "Figma, Bricks Builder",
    heroLabel: "Hero: the shop page, design file next to the live page",
    brief: {
      paragraphs: [
        "Dataclay makes software that automates personalized video production, including Templater, an After Effects plugin. Their site was [a stock WordPress template, confirm].",
        "The goal was a clear layout for a large site with four products and many plan tiers, serving creatives, developers, and enterprise buyers.",
      ],
      constraint:
        "The brand identity and color palette were finalized before I started, so my job was layout, organization, and applying the brand across the key pages.",
    },
    process: {
      intro:
        "For each page I presented about three layout options to the company's technical lead and iterated on his feedback. He also wrote the code for the interactive elements and implemented some of the more complex layouts.",
      options: [
        { label: "A", note: "[One line on the idea and the tradeoff.]" },
        { label: "B", note: "[One line on the idea and the tradeoff.]", chosen: true },
        { label: "C", note: "[One line on the idea and the tradeoff.]" },
      ],
      afterReview: "[One or two specific changes that came from his feedback.]",
    },
    decisions: [
      {
        title: "Color-coded cards for each product",
        body: "Each Dataclay product has a vivid neon brand color, so I gave each card a solid colored shadow showing which product it belongs to. [Why this solution, and what the earlier options looked like.]",
        imageLabel: "Image: product cards with colored shadows",
      },
      {
        title: "A plan comparison that explains the choice",
        body: "The shop page has to help buyers choose among many plan tiers. [How you structured the comparison and what you rejected.]",
        imageLabel: "Image: the plan comparison",
      },
    ],
    components: {
      intro: "[A line on how the buttons and cards were designed to be reused across pages.]",
      items: [
        { label: "Buttons", caption: "[Caption]" },
        { label: "Cards", caption: "[Caption]" },
      ],
    },
    shippedVsDesigned: {
      intro:
        "The card style, buttons, and shop comparison layouts remain in use on the live site. Other pages have changed since.",
      designLabel: "My design file",
      liveLabel: "Live site today",
    },
    outcome: {
      shipped:
        "The card style, buttons, and the shop and plan comparison layouts are still in use. I built most of the pages in Bricks Builder, and the technical lead added code for the interactive elements.",
      differently: "[Your answer.]",
    },
  },

  "le-waf": {
    role: "Product Designer",
    company: "ETL Group",
    timeline: "[Dates]",
    tools: "Figma, InVision",
    heroLabel: "Hero: Le Waf homepage",
    brief: {
      paragraphs: [
        "Le Waf makes artisanal waffles and had gained attention from a Food Network appearance. Their existing site didn't look like the product: it didn't feel premium or show the craft behind it.",
        "They wanted a full redesign that built trust and made buying easy.",
      ],
    },
    decisions: [
      {
        title: "Sketch first, polish later",
        body: "Sketching showed me that modular sections with generous white space suited a premium product, so I built the layouts around that.",
        imageLabel: "Image: low-fidelity wireframes",
      },
      {
        title: "Photography and story up front",
        body: "The homepage opens on a large product image and a short brand story. Product pages use big photography and describe the ingredients and the care behind each waffle.",
        imageLabel: "Image: homepage and product page",
      },
      {
        title: "Handoff with the engineers",
        body: "I imported the designs into InVision so the front-end engineers could inspect them and export CSS, and I worked with them on interactions the mockups didn't cover.",
        imageLabel: "Image: handoff screens",
      },
    ],
    outcome: {
      shipped:
        "Delivered and built by the client's front-end team. Post-launch analytics belonged to the client, so I don't have performance figures to share.",
      differently: "I'd now agree on success metrics with the client at the start of a project.",
    },
  },
    "accessibility-audit": {
    role: "Sole owner, from audit to documentation",
    company: "Davek Accessories",
    timeline: "About two weeks, alongside my regular duties",
    tools: "WAVE, Lighthouse, NVDA, JavaScript, Liquid",
    heroLabel: "Hero: WAVE results, before and after",
    brief: {
      paragraphs: [
        "An accessibility audit of our Shopify storefronts turned up problems for people who navigate with a keyboard or a screen reader. Dropdown menus opened by themselves while someone was tabbing through them. Popups appeared without moving focus into them. Product image thumbnails were read aloud as “Image 1, Image 2, Image 3.” Some carousels couldn’t be read reliably.",
        "These aren’t edge cases. If you can’t operate a menu, a popup, or a cart with a keyboard, you can’t shop the store.",
      ],
      constraint:
        "Our email signup popups come from Klaviyo and our cart upsell comes from a third-party app, so I couldn’t edit their markup. The fixes had to work from the outside.",
    },
    decisions: [
      {
        title: "Menus that wait to be opened",
        body: "I rewrote the menu script so that tabbing moves through items without opening dropdowns. Enter or the Down Arrow opens a submenu, and Escape closes it.",
        imageLabel: "Image: keyboard navigation through the menu",
      },
      {
        title: "Focus that goes where the popup goes",
        body: "I wrote JavaScript that detects when each Klaviyo popup and the cart dialog appears, moves focus into it, traps focus until it’s closed, closes it with Escape, and returns focus to where the user was. I reused the same logic across all of them.",
        imageLabel: "Image: focus trap in a popup",
      },
      {
        title: "Three regional sites, three different bugs",
        body: "The Canada popup nested its heading inside a different element, which broke my first selector. The UK site ran a cookie notice through the same Klaviyo system, and my script attached itself to the wrong popup until I targeted each one by its content.",
        imageLabel: "Image: the regional popups",
      },
      {
        title: "Images, links, and carousels",
        body: "I made product thumbnails announce their real alt text, removed duplicate tab stops where an image and title both linked to the same product, gave unclear links descriptive labels, labeled every dialog, and reworked carousel focus handling after finding that Firefox with NVDA behaved differently from Chrome.",
        imageLabel: "Image: before and after of the product thumbnails",
      },
      {
        title: "Written down so the fixes last",
        body: "Theme updates and third-party apps can undo fixes, so I wrote a change log and recovery guide covering each one: the issue, the intended behavior, what I changed, where in the theme to look, and the symptoms if it breaks again. I added a regression checklist to run after every theme update.",
        imageLabel: "Image: the regression checklist",
      },
    ],
    outcome: {
      shipped:
        "WAVE errors dropped from 20 to 0 on [page scanned, date], and the AIM score rose from 5.8 to 7.6 out of 10. All fixes shipped across three regional storefronts in about two weeks. [Add one contrast line after you check the 13 flagged items.] Automated results aren’t the same as full compliance, so I treat manual keyboard and screen reader testing as the real check.",
      differently:
        "Automating the regression checklist so it runs on each theme update, and adding JAWS and VoiceOver to my testing.",
    },
  },

  "reviews-and-google-ratings": {
    role: "Sole owner, from setup to monitoring",
    company: "Davek Accessories",
    timeline: "[Start month] to present",
    tools: "Judge.me, Google Merchant Center, Shopify Flow",
    heroLabel: "Hero: before and after Google search results",
    brief: {
      paragraphs: [
        "Searching for our flagship umbrella in Google showed almost no reviews, and our ads had no star ratings. The reviews existed, but Google couldn’t see them. Reviews collected through the Shop App were never published to Google, and nothing connected our ratings to Merchant Center or Google Ads.",
        "For a shopper comparing options in search, a missing rating looks like a missing track record.",
      ],
    },
    decisions: [
      {
        title: "Connected the reviews to Google",
        body: "I set up a product ratings feed from Judge.me to Google Merchant Center and published the existing Shop App reviews, so they would appear on product listings and in ads.",
        imageLabel: "Image: the feed from Judge.me to Google",
      },
      {
        title: "A steady stream of new reviews",
        body: "I created an automated flow in Shopify Flow that sends a review request after an order is fulfilled, so reviews arrive continuously instead of in occasional bursts.",
        imageLabel: "Image: the review-request email",
      },
      {
        title: "Keeping an eye on it",
        body: "I check incoming reviews weekly and pass low ratings to customer service for private follow-up.",
        imageLabel: "Image: the monthly review volume chart",
      },
    ],
    outcome: {
      shipped:
        "Monthly reviews grew from about 9 a month in 2025 to about 61 a month between February and September 2026. The flagship product now shows [251, confirm in Judge.me] reviews at [4.7] in Google, and star ratings appear on every product listing in our ads. The average rating stayed steady (about 4.7 before the flow, about 4.8 now), so the problem was visibility and volume, not quality.",
      differently:
        "Testing the effect of star ratings on click-through with a clean before and after, and tracking how many shoppers see ratings at each stage of search.",
    },
  },
};