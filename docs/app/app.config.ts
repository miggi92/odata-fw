export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'OData FW Documentation',
  },
  header: {
    title: 'OData FW Documentation',
    to: '/',
    logo: {
      alt: 'OData FW Logo',
      light: 'logo.svg',
      dark: 'logo.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/miggi92/odata-fw',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `miggi92 • © 2019 - ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/miggi92/odata-fw',
      'target': '_blank',
      'aria-label': 'OData Framework on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/miggi92/odata-fw/edit/master/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/miggi92/odata-fw',
        target: '_blank'
      }]
    }
  }
})
