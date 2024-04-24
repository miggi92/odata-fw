import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

import { version } from "../../package.json";

// https://vitepress.dev/reference/site-config
export default
  // withMermaid(

  defineConfig({
    title: "ABAP OData Framework",
    lang: 'en-US',
    base: '/odata-fw/',
    description: "A odata framework for a SAP System. ",

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'en' }],
      ['meta', { property: 'og:site_name', content: 'ABAP OData framework' }],
      ['meta', { property: 'og:url', content: 'https://miggi92.github.io/odata-fw/' }],
    ],
    lastUpdated: true,
    sitemap: {
      hostname: "https://miggi92.github.io/odata-fw/"
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: nav(),
      editLink: {
        pattern: 'https://github.com/miggi92/odata-fw/edit/master/docs/:path',
        text: 'Edit this page on GitHub'
      },
      outline: [2, 6],
      search: {
        provider: 'local',
        options: {
          _render(src, env, md) {
            const html = md.render(src, env)
            if (env.frontmatter?.title)
              return md.render(`# ${env.frontmatter.title}`) + html
            return html
          }
        }
      },
      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },

      sidebar: {
        "/documentation/": sidebarDocumentation(),
      },
      logo: '/odata_fw_logo_transparent.png',

      socialLinks: [
        { icon: 'github', link: 'https://github.com/miggi92/odata-fw' }
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2019 - present miggi92'
      }
    },
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
    }
  }
    // )
  );

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Documentation', link: '/documentation/', activeMatch: "/documentation/" },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/miggi92/odata-fw/blob/master/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/miggi92/odata-fw/blob/master/CONTRIBUTING.md'
        }
      ]
    },
  ];
}

function sidebarDocumentation() {
  return [
    {
      text: "Documentation",
      collapsed: false,
      items: [
        { text: 'Creating a service', link: '/documentation/Creating-a-service' },
        { text: 'DPC boilerplate code', link: '/documentation/DPC-boilerplate-code' },
        {
          text: 'OData customizing', link: '/documentation/customizing/', collapsed: true,
          items: [
            { text: 'Create namespace', link: '/documentation/customizing/create-namespace' },
            { text: 'Define entity', link: '/documentation/customizing/define-entity' },
            { text: 'Define properties', link: '/documentation/customizing/define-properties' },
            { text: 'Define navigation properties', link: '/documentation/customizing/define-associations' },
            { text: 'Define search/value helps', link: '/documentation/customizing/define-searchhelps' }
          ]
        }
      ],
    },
    {
      text: 'Development Objects',
      link: '/documentation/dev-objects/',
      collapsed: true,
      items: [
        { text: 'Documentation', link: '/documentation/dev-objects/' }, {
          text: 'Classes', link: '/documentation/dev-objects/classes/',
          collapsed: true,
          items: [
            { text: 'ZCL_ODATA_DATA_PROVIDER', link: '/documentation/dev-objects/classes/ZCL_ODATA_DATA_PROVIDER' },
            { text: 'ZCL_ODATA_DOCUMENTS', link: '/documentation/dev-objects/classes/ZCL_ODATA_DOCUMENTS' },
            { text: 'ZCL_ODATA_FW_CONTROLLER', link: '/documentation/dev-objects/classes/ZCL_ODATA_FW_CONTROLLER' },
            { text: 'ZCL_ODATA_FW_CUST_DPC', link: '/documentation/dev-objects/classes/ZCL_ODATA_FW_CUST_DPC' },
            { text: 'ZCL_ODATA_FW_CUST', link: '/documentation/dev-objects/classes/ZCL_ODATA_FW_CUST' },
            { text: 'ZCL_ODATA_FW_MPC', link: '/documentation/dev-objects/classes/ZCL_ODATA_FW_MPC' },
            { text: 'ZCL_ODATA_MAIN', link: '/documentation/dev-objects/classes/ZCL_ODATA_MAIN' },
            { text: 'ZCL_ODATA_UTILS', link: '/documentation/dev-objects/classes/ZCL_ODATA_UTILS' },
            { text: 'ZCL_ODATA_VALUE_HELP', link: '/documentation/dev-objects/classes/ZCL_ODATA_VALUE_HELP' },
            {
              text: 'Annotations', link: '/documentation/dev-objects/classes/annotations/', collapsed: true,
              items: [
                { text: 'ZCL_ODATA_ANNOTATION_COMMON', link: '/documentation/dev-objects/classes/annotations/ZCL_ODATA_ANNOTATION_COMMON' },
                { text: 'ZCL_ODATA_ANNOTATION_SHLP', link: '/documentation/dev-objects/classes/annotations/ZCL_ODATA_ANNOTATION_SHLP' },
              ]
            },
          ]
        }, {
          text: 'DDIC objects', link: '/documentation/dev-objects/ddic/', collapsed: true
        },
        {
          text: 'SAP objects', link: '/documentation/dev-objects/sap-objects/'
        }]
    }
  ];
}
