<template>
  <div class="bg-slate-50 dark:bg-slate-800">
    <TopBar />
    <SideBar />
    <div class="mx-auto max-w-8xl px-4 pt-topbar sm:px-6 md:px-8 lg:pt-28">
      <div class="lg:pl-sidebar">
        <RouterView class="mx-auto max-w-3xl lg:mx-0" />
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import { TopBar } from '@/components/TopBar';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'app',
  components: { TopBar, SideBar },
  created() {
    // Remove transition-none class here to avoid first page load not syncing with color changes
    // Also add delay for same reason
    // setTimeout(() => document.body.classList.remove('transition-none'), 150);

    useHead({
      title: 'Website Title',
      meta: [
        {
          name: 'description',
          content: 'Website description',
        },
      ],
    });
  },
};
</script>

<style>
/* @import "@/assets/base.css"; */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  letter-spacing: 0.2px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
