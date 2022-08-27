// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AveroaJS',
  tagline: "Simple and 'Quick Development' Nodejs Framework",
  url: 'https://averoa.com',
  // url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/averoa1.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'budiherma1', // Usually your GitHub org/user name.
  projectName: 'averoajs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AveroaJS',
        logo: {
          alt: 'AveroaJS Logo',
          src: 'img/averoa1.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'right',
            label: 'Documentation',
          },
          {to: '/resources', label: 'Resources', position: 'right'},
          {to: '/partners', label: 'Partners', position: 'right'},
          {
            href: 'https://github.com/budiherma1/averoajs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Ns9ncbM5',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/averoa.tech',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Resources',
                to: '/resources',
              },
              {
                label: 'Partners',
                to: '/partners',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/budiherma1/averoajs',
              },
            ],
          },
          {
            title: 'Averoa',
            items: [
              {
                label: 'About',
                href: 'https://averoa.com/about',
              },
              {
                label: 'Product',
                href: 'https://averoa.com/products',
              },
              {
                label: 'Services',
                href: 'https://averoa.com/services',
              },
              {
                label: 'Teams',
                href: 'https://averoa.com/team',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AveroaJS, Inc. Built by averoa.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
