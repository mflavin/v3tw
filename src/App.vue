<template>
  <div class="h-full bg-slate-50 pt-20 dark:bg-slate-800">
    <TopBar />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import TopBar from '@/components/TopBar.vue';
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
