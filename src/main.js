import { ViteSSG } from 'vite-ssg';
import App from '@/App.vue';
import '@/index.css';
import router from '@/router';

// https://vite-plugin-pwa.netlify.app/guide/auto-update.html#runtime
// import { registerSW } from 'virtual:pwa-register';
// const updateSW = registerSW({
//   onOfflineReady() {},
// });

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: router.routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)
