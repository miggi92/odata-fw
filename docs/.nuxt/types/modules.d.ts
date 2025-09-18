import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/eslint"]?: ModuleDependencyMeta<typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/icon"]?: ModuleDependencyMeta<typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/fonts"]?: ModuleDependencyMeta<typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/color-mode"]?: ModuleDependencyMeta<typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/ui"]?: ModuleDependencyMeta<typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms"]?: ModuleDependencyMeta<typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-llms"]?: ModuleDependencyMeta<typeof import("nuxt-llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms`
     */
    ["content.llms"]: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     */
    ["llms"]: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms`
     */
    ["content.llms"]?: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     */
    ["llms"]?: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms", Exclude<NuxtConfig["content.llms"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-llms", Exclude<NuxtConfig["llms"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/eslint"]?: ModuleDependencyMeta<typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/icon"]?: ModuleDependencyMeta<typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/fonts"]?: ModuleDependencyMeta<typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/color-mode"]?: ModuleDependencyMeta<typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/ui"]?: ModuleDependencyMeta<typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms"]?: ModuleDependencyMeta<typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/mdc"]?: ModuleDependencyMeta<typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/content"]?: ModuleDependencyMeta<typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-llms"]?: ModuleDependencyMeta<typeof import("nuxt-llms").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://ui.nuxt.com/docs/getting-started/installation/nuxt
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms`
     * @see https://www.npmjs.com/package/C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms
     */
    ["content.llms"]: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://content.nuxt.com
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     * @see https://github.com/nuxtlabs/nuxt-llms
     */
    ["llms"]: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://ui.nuxt.com/docs/getting-started/installation/nuxt
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms`
     * @see https://www.npmjs.com/package/C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms
     */
    ["content.llms"]?: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://content.nuxt.com
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package/C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-llms`
     * @see https://github.com/nuxtlabs/nuxt-llms
     */
    ["llms"]?: typeof import("nuxt-llms").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/@nuxt+content@3.7.1_better-sqlite3@12.2.0_magicast@0.3.5/node_modules/@nuxt/content/dist/features/llms", Exclude<NuxtConfig["content.llms"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["C:/Users/miguel.gebhardt/projects/github/odata-fw/docs/node_modules/.pnpm/nuxt-site-config@3.2.8_h3@1_0c9b73547c7afb2d510d79e85f50eaa8/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-llms", Exclude<NuxtConfig["llms"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}