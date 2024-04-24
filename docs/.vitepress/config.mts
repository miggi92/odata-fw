import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ABAP OData Framework",
  lang: 'en-US',
  description: "A odata framework for a SAP System. ",
  head: [['link', { rel: 'icon', href: '../assets/favicon.ico' }]],
  sitemap: {
    hostname: "https://miggi92.github.io/odata-fw/"
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Documentation', link: '/documentation/' },
          { text: 'Creating a service', link: '/documentation/Creating-a-service' },
          { text: 'DPC boilerplate code', link: '/documentation/DPC-boilerplate-code' }
        ]
      }
    ],
    logo: '../assets/odata_fw_logo_transparent.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/miggi92/odata-fw' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019 - present miggi92'
    }
  }
})
