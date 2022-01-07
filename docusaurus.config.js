// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vest",
  tagline:
    "Declarative validations framework inspired by unit testing libraries",
  url: "https://vestjs.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ealush", // Usually your GitHub org/user name.
  projectName: "vest", // Usually your repo name.
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-M420W03G2K",
        anonymizeIP: true,
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ealush/vest-website/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/ealush/vest-website/edit/main/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      navbar: {
        title: "Vest",
        logo: {
          alt: "Vest Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "get_started",
            position: "left",
            label: "Documentation",
          },
          {
            type: "doc",
            docId: "api_reference",
            position: "left",
            label: "API Reference",
          },
          {
            href: "https://www.npmjs.com/package/vest",
            className: "header-npm-link",
            position: "right",
          },
          {
            href: "https://github.com/ealush/vest",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://discord.gg/WmADZpJnSe",
            className: "header-discord-link",
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
                label: "Get Started",
                to: "/docs/get_started",
              },
              {
                label: "API Reference",
                to: "/docs/api_reference",
              },
              {
                label: "External Resources",
                to: "/docs/external_resources",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/WmADZpJnSe",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/ealush/vest",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ealush`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
