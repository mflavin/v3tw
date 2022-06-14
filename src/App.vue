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
    <div class="2xl:w-28 2xl:pl-20">
      <SideBar />
    </div>
    <main class="w-full md:container md:mx-auto lg:pl-sidebar">
      <RouterView class="px-6 py-8 md:p-content" />
    </main>
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
body {
  min-height: 100vh;
}
</style>
