module.exports = {
  title: 'mhost',
  tagline: 'A modern take on the classic host DNS lookup utility including an easy to use and very fast Rust library.',
  url: 'https://mhost.pustina.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lukaspustina', // Usually your GitHub org/user name.
  projectName: 'mhost.pustina.de', // Usually your repo name.
  themeConfig: {
    colorMode: {
    defaultMode: 'light',
    disableSwitch: true,
    respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'mhost',
      logo: {
        alt: 'mhost',
        src: 'img/logo_blue.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/lukaspustina/mhost',
          className: 'header-github-link',
          position: 'right',
          'aria-label': 'GitHub repository',
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
              label: 'API',
              href: 'https://docs.rs/mhost/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/lukaspustina/mhost/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Crates.io',
              href: 'https://crates.io/crates/mhost',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lukaspustina/mhost',
            },
          ],
        },
        {
          title: 'Legal Stuff',
          items: [
            {
              label: "Legal Notice",
              href: "https://lukas.pustina.de/legal_notice/",
            },
            {
              label: "Privacy Policy",
              href: "https://lukas.pustina.de/privacy_policy/",
            },
            {
              label: 'Image Attributions',
              to: 'docs/attributions_images/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lukas Pustina`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
