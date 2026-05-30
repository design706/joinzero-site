import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://learn.zero.university',
  integrations: [sitemap()],
});
