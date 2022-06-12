import { fileURLToPath, URL } from 'url';
// https://vite-plugin-pwa.netlify.app/guide/#setup
import { VitePWA } from 'vite-plugin-pwa';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/v3tw/',
  plugins: [
    vue(),
    // https://vite-plugin-pwa.netlify.app/guide/auto-update.html#setup
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});