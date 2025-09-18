
declare module 'nitropack' {
interface NitroRouteRules {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRouteConfig {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRuntimeHooks {
    'nuxt-og-image:context': (ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
    'nuxt-og-image:satori:vnodes': (vnodes: import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').VNode, ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
  }
}

declare module 'nitropack/types' {
interface NitroRouteRules {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRouteConfig {
    ogImage?: false | import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageOptions & Record<string, any>
  }
  interface NitroRuntimeHooks {
    'nuxt-og-image:context': (ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
    'nuxt-og-image:satori:vnodes': (vnodes: import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').VNode, ctx: import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/types').OgImageRenderEventContext) => void | Promise<void>
  }
}

declare module '#og-image/components' {
  export interface OgImageComponents {
    'Docs': typeof import('../../app/components/OgImage/OgImageDocs.vue')['default']
    'BrandedLogoDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.d.vue.ts')['default']
    'BrandedLogo': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue')['default']
    'FrameDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.d.vue.ts')['default']
    'Frame': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Frame.vue')['default']
    'NuxtDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.d.vue.ts')['default']
    'Nuxt': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Nuxt.vue')['default']
    'NuxtSeoDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.d.vue.ts')['default']
    'NuxtSeo': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/NuxtSeo.vue')['default']
    'PergelDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.d.vue.ts')['default']
    'Pergel': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Pergel.vue')['default']
    'SimpleBlogDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.d.vue.ts')['default']
    'SimpleBlog': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue')['default']
    'UnJsDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.d.vue.ts')['default']
    'UnJs': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/UnJs.vue')['default']
    'WaveDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.d.vue.ts')['default']
    'Wave': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/Wave.vue')['default']
    'WithEmojiDVue': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.d.vue.ts')['default']
    'WithEmoji': typeof import('../../node_modules/.pnpm/nuxt-og-image@5.1.11_@unhea_731cc44203b8d07e639e852ded8c5ff5/node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/WithEmoji.vue')['default']
  }
}
declare module '#og-image/unocss-config' {
  export type theme = any
}

export {}
