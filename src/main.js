import { ViteSSG } from 'vite-ssg';
import App from '@/App.vue';
import '@/index.css';
import router from '@/router';

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: router.routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    if (!isClient) return;
    router.isReady().then(async () => {
      const { registerSW } = await import('virtual:pwa-register');
      registerSW({ onOfflineReady() {}, immediate: true });
    });
  },
);
