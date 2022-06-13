<template>
  <div class="h-full bg-slate-50 pt-24 dark:bg-slate-800">
    <TopBar />
    <SideBar />
    <main class="container mx-auto px-4 sm:px-6 md:px-8 lg:pl-80 xl:pr-60">
      <RouterView />
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
