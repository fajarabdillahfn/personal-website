import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL ?? "https://fajar-personal-site.pages.dev";

export default defineConfig({
  compressHTML: true,
  site,
});
