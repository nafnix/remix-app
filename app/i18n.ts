import type { InitOptions } from "i18next"

export const loadPath = "locales/{{lng}}/{{ns}}.json"

export const i18nInitOptions: InitOptions = {
  supportedLngs: ["zh", "en"],
  fallbackLng: "en",
  defaultNS: "common",
  nsSeparator: ".",
  keySeparator: ".",
  ns: ["common", "glossary", "validation", "demo"],
  react: { useSuspense: false },
  backend: { loadPath: `/${loadPath}` },
}
