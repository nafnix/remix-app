import { vitePlugin as remix } from "@remix-run/dev"
import { defineConfig } from "vite"
import UnoCSS from "unocss/vite"

export default defineConfig({
  plugins: [
    remix({
      appDirectory: "src",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    UnoCSS(),
  ],
})
