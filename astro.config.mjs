import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
});
