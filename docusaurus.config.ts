import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "MiMLoader Docs",
  tagline: "Moonstone Island Mod Loader",
  favicon: "img/MiML-Icon.png",

  future: {
    v4: true,
  },

  url: "https://docs.mimloader.com",
  baseUrl: "/",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mimloader/docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/MiML-Banner.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "MiMLoader",
      logo: {
        alt: "Moonstone Island Mod Loader Logo",
        src: "img/MiML-Icon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Guide",
        },
        {
          href: "https://github.com/mimloader/mimloader",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Guide",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/sNPtBKCsqK",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Moonstone Island Mod Loader. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
