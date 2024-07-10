import { resolve } from "node:path"
import Backend from "i18next-fs-backend"
import { RemixI18Next } from "remix-i18next/server"
import { i18nInitOptions, loadPath } from "~/i18n"

export const i18nServerInitOptions: typeof i18nInitOptions = {
  ...i18nInitOptions,
  backend: { loadPath: resolve("public", loadPath) },
}

export default new RemixI18Next({
  detection: {
    supportedLanguages: i18nServerInitOptions.supportedLngs as string[],
    fallbackLanguage: i18nServerInitOptions.fallbackLng as string,
  },
  // This is the configuration for i18next used when translating messages server-side only
  i18next: { ...i18nServerInitOptions },
  // The i18next plugins you want RemixI18next to use for `i18n.getFixedT` inside loaders and actions.
  // E.g. The Backend plugin for loading translations from the file system
  // Tip: You could pass `resources` to the `i18next` configuration and avoid a backend here
  plugins: [Backend],
})
