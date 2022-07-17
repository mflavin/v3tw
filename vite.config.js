import { fileURLToPath, URL } from 'url';
// https://vite-plugin-pwa.netlify.app/guide/#setup
import { VitePWA } from 'vite-plugin-pwa';

const { resolve } = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
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
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window'],
  },
});
