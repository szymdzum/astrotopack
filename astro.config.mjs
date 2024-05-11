import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
});
