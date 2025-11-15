import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nimeshmora.github.io',
  base: '/awesome-cloudnatives',
  output: 'static',
  trailingSlash: 'always',
});
