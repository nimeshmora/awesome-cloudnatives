import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://awesomecloudnatives.cloud',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});
