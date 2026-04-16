import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const siteUrl = process.env.CF_PAGES_URL || process.env.URL || "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  redirects: {
    "/": "/en/",
  },
  integrations: [
    svelte(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
    icon({
      include: {
        "fa6-brands": [
          "github",
          "linkedin",
          "twitter",
          "microsoft",
          "js",
          "vuejs",
          "html5",
          "css3-alt",
          "docker",
          "git-alt",
        ],
        "fa6-solid": [
          "envelope",
          "moon",
          "sun",
          "code",
          "server",
          "database",
          "globe",
          "laptop-code",
          "arrow-right",
          "chevron-up",
          "bars",
          "xmark",
          "briefcase",
          "house",
          "user",
          "diagram-project",
          "screwdriver-wrench",
          "link",
          "graduation-cap",
          "cloud",
          "code-branch",
          "calendar-days",
          "download",
          "lightbulb",
          "arrow-up",
          "up-right-from-square",
        ],
      },
    }),
  ],
});
