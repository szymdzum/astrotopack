import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import icon from "astro-icon";

import biome from "astro-biome";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    biome(),
  ],
});
