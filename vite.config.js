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
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Vite',
        short_name: 'Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/icons/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/img/icons/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
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
