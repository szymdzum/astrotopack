import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import Biome from "astro-biome";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    icon({
      iconDir: "public/icons/",
    }),
    Biome(),
  ],
});
