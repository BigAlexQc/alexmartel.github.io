// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maintenance - Secteur H',
  tagline: 'Équipe Maintenance',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BigAlexQc', // Usually your GitHub org/username.
  projectName: 'alexmartel.github.io', // Usually your repo name.

  // Set the production url of your site here
  url: 'https://BigAlexQc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bigalexqc.github.io/',

  trailingSlash: true,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
		  routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/BigAlexQc/bigalexqc.github.io/tree/main/`,
        },       
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
            navbar: {
        title: 'Maintenance - Secteur H',
        items: [
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
        ],
        copyright: `Alexandre Martel-Lafleur – 2024 – 6R1`,
      },
	  docs: {
		sidebar: {
			hideable: true,
		},
	  },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },	      	 
    }),
};




export default config;
