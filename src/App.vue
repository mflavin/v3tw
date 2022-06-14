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
    <main class="container mx-auto lg:pl-sidebar">
      <RouterView class="p-content" />
    </main>
  </div>
</template>

<script>
import { TopBar } from '@/components/TopBar';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'app',
  components: { TopBar, SideBar },
};
</script>

<style>
/* @import "@/assets/base.css"; */
body {
  min-height: 100vh;
}
</style>
