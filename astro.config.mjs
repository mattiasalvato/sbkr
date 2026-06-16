import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Inserisci il tuo dominio reale
  site: 'https://www.sambobikerent.it',

  // Assicurati che sia così o cancellala del tutto
  base: '/',

  integrations: [sitemap()]
});