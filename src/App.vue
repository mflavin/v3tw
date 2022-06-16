<template>
  <div
    class="
      darkmode-transition
      flex
      h-full
      bg-slate-50
      pt-topbar
      dark:bg-slate-800
    "
  >
    <TopBar />
    <SideBar class="lg:pr-sidebar 2xl:w-28 2xl:pl-60" />
    <div class="w-full px-6 py-8 md:p-content">
      <RouterView class="max-w-2xl" />
    </div>
  </div>
</template>

<script>
import { TopBar } from '@/components/TopBar';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'app',
  components: { TopBar, SideBar },
  created() {
    // Add darkmode-transition class here to avoid first page load not syncing with color changes
    // Also add delay for same reason
    setTimeout(() => document.body.classList.add('darkmode-transition'), 150);
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
  font-family: var(--vt-font-family-base);
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
