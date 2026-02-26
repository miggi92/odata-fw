// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit'
  ],

  devtools: {
    enabled: true
  },
  app: {
    baseURL: '/odata-fw/'
  },
  site: {
    title: 'OData Framework docs',
  },
  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        },
        highlight: {
          langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'abap']
        }
      }
    }
  },
  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://miggi92.github.io/odata-fw/',
    title: 'OData Framework docs',
    description: 'Documentation for the OData Framework in ABAP',
    full: {
      title: 'OData Framework docs - Full Documentation',
      description: 'This is the full documentation for the OData Framework docs.'
    },
    sections: [
      {
        title: 'Documentation',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/%' }
        ]
      }
    ]
  },
  mcp: {
    name: 'Docs template'
  }
})
