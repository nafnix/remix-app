import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import UnoCSS from "unocss/vite"
import type { Options } from "unplugin-auto-import/types"
import AutoImport from "unplugin-auto-import/vite"
import tsconfigPaths from "vite-tsconfig-paths"

const remixAutoImports: Options["imports"] = [
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // "@remix-run/node"
  {
    "@remix-run/node": [
      "json",
      "redirect",
      "createCookieSessionStorage",
    ],
  },

  {
    from: "@remix-run/node",
    type: true,
    imports: [
      "LinksFunction",
      "LoaderFunctionArgs",
      "ActionFunctionArgs",
      "MetaFunction",
    ],
  },
  // "@remix-run/node"
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // "@remix-run/react"
  {
    "@remix-run/react": [
      "useSubmit",
      "Outlet",
      "Form",
      "useFetcher",
      "useNavigation",
      "useParams",
      "isRouteErrorResponse",
      "useRouteError",
      "useLoaderData",
      "useActionData",
      "NavLink",
      "Link",
      "Links",
      "Meta",
      "Scripts",
      "ScrollRestoration",
      "useSearchParams",
    ],
  },
  // "@remix-run/react"
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // "react-i18next"
  {
    "react-i18next": [
      "useTranslation",
    ],
  },
  // "react-i18next"
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

]

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        "react",
        ...remixAutoImports,
      ],

      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],

      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        "app/utils/**",
        "app/utils/.**",
      ],
    }),

    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),

    tsconfigPaths(),

    UnoCSS(),
  ],
})
