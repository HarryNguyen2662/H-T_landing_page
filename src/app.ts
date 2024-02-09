/**
 * [app.ts] App Configuration
 * ==========================
 *
 * To reduce the number of config files, we aim to
 * combine as much as possible into a single file.
 */

import type { OAuthStrategy } from "@clerk/types";
import type { ContentSection, FooterItem, MainMenuItem } from "~/types";
import { slugify } from "~/utils";

import { productCategories } from "~/server/config/products";
import { networks } from "~/server/config/socials";

import { env } from "./env.mjs";
import { Icons } from "./islands/icons";

// todo: parse this from clerk's dashboard instead of hardcoding it
export const oauthProvidersClerk = [
  { name: "Google", strategy: "oauth_google", icon: "google" },
  { name: "Discord", strategy: "oauth_discord", icon: "discord" },
  // { name: "Microsoft", strategy: "oauth_microsoft", icon: "microsoft" },
  // { name: "Facebook", strategy: "oauth_facebook", icon: "facebook" },
  // { name: "Github", strategy: "oauth_github", icon: "gitHub" },
] satisfies {
  name: string;
  icon: keyof typeof Icons;
  strategy: OAuthStrategy;
}[];

export const appts = {
  name: "H&T AI TECH",
  debug: false,
  social: networks({
    youtube: "HarryNguyen2662",
    discord: "HarryNguyen2662",
    facebook: "HarryNguyen2662",
    twitter: "HarryNguyen2662",
    github: "HarryNguyen2662",
  }),
};

export default appts;

const links = {
  twitter: "https://github.com/HarryNguyen2662",
  github: "https://github.com/HarryNguyen2662",
  githubAccount: "https://github.com/HarryNguyen2662",
  discord: "https://github.com/HarryNguyen2662",
  facebook: "https://github.com/HarryNguyen2662",
};

export const contactConfig = {
  email: "toantoan123toantoan@gmail.com",
};

export const REPOSITORY_OWNER = "blefnk";
export const REPOSITORY_NAME = "relivator";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const DISCORD_URL = "https://discord.gg/Pb8uKbwpsJ";
export const baseUrl = new URL(
  env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
);

export const BASE_URL =
  process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:3000";
export const BRAND_NAME = "Relivator";
export const BRAND_DESCRIPTION =
  "At H&T AI TECH, we leverage cutting-edge AI techniques like object detection, video content analysis, image recognition, and predictive maintenance to develop innovative solutions that extract insights from visual data and keep critical systems running smoothly.";

export const OWNER_ROLE = "owner";
export const ADMIN_ROLE = "admin";
export const MEMBER_ROLE = "member";

export const TRIAL_LENGTH_IN_DAYS = 7;
export const ROLES = [OWNER_ROLE, ADMIN_ROLE, MEMBER_ROLE] as const;

export const settings = {
  themeToggleEnabled: true,
};

export const siteConfig = {
  name: "H&T AI Tech",
  shortName: "H&T AI Tech",
  author: "Harry Nguyen",
  description:
    "At H&T AI TECH, we leverage cutting-edge AI techniques like object detection, video content analysis, image recognition, and predictive maintenance to develop innovative solutions that extract insights from visual data and keep critical systems running smoothly.",
  company: {
    name: "H&T AI TECH",
    link: "https://github.com/HarryNguyen2662",
    email: "toantoan123toantoan@gmail.com",
    twitter: "https://github.com/HarryNguyen2662",
  },
  handles: {
    twitter: "https://github.com/HarryNguyen2662",
  },
  keywords: [
    "App Router",
    "Blefonix",
    "Bleverse",
    "Drizzle Orm",
    "Landing Page",
    "Next.js 14",
    "Nextjs",
    "Open Source",
    "Parallel Routes",
    "PostgreSQL",
    "Radix Ui",
    "React",
    "Relivator",
    "Server Actions",
    "Server Components",
    "Shadcn/UI",
    "Starter",
    "Stripe",
    "T3 Stack",
    "Tailwind Css",
    "Template",
    "Tools",
    "Utils",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: REPOSITORY_OWNER,
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  mainNav: [
    {
      title: "Industry",
      items: [
        {
          title: "Products",
          href: "",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Look",
          href: "",
          description: "Build your own custom clothes.",
          items: [],
        },
        {
          title: "Blog",
          href: "",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: [
        {
          title: "All",
          href: "/",
          description: `All ${category.title}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: "/",
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ] satisfies MainMenuItem[],
  links,
  footerNav: [
    {
      title: "H&T AI Tech",
      items: [
        {
          title: "Community",
          href: "",
          external: true,
        },
        {
          title: "Project",
          href: "",
          external: true,
        },
        {
          title: "Services",
          href: "",
          external: true,
        },
        {
          title: "Demo",
          href: "",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "About",
          href: "/about",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Github",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "Facebook",
          href: links.facebook,
          external: true,
        },
      ],
    },
    {
      title: "Github",
      items: [
        {
          title: "Open-source",
          href: "https://github.com/HarryNguyen2662",
          external: true,
        },
        {
          title: "Project",
          href: "https://github.com/HarryNguyen2662",
          external: true,
        },
        {
          title: "Demo",
          href: "https://github.com/HarryNguyen2662",
          external: true,
        },
        {
          title: "Utils",
          href: "https://github.com/HarryNguyen2662",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};

export const featureCards: ContentSection = {
  header: "Powered by",
  subheader: "What Makes Relivator Possible",
  content: [
    {
      text: "Next.js",
      subtext: "The React Framework",
    },
    {
      text: "shadcn/ui",
      subtext: "Beautifully Designed Components",
    },
    {
      text: "Vercel",
      subtext: "Develop. Preview. Ship.",
    },
  ],
};

export const features: ContentSection = {
  header: "Features",
  subheader: "Why You Need to Download Relivator",
  content: [
    {
      text: "SEO Optimized",
      subtext: "Improved website visibility on search engines",
    },
    {
      text: "Highly Performant",
      subtext: "Fast loading times and smooth performance",
    },
    {
      text: "Easy Customization",
      subtext: "Change your content and layout with little effort",
    },
  ],
};
