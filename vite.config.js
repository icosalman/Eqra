import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures relative asset paths so it works on GitHub Pages subpaths
});
