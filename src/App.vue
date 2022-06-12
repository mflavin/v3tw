<template>
  <main>
    <ul class="flex">
      <li
        v-for="(nav, idx) in navItems"
        :key="`${nav.path}_${idx}`"
        class="mr-6"
      >
        <RouterLink
          class="
            rounded-card
            my-4
            block
            px-6
            py-2
            ring-1 ring-slate-900/5
            hover:bg-sky-500 hover:ring-sky-500
          "
          :to="nav.path"
        >
          {{ nav.name }}
        </RouterLink>
      </li>
    </ul>
    <RouterView :class="{ dark: isDark }" />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { mapState } from 'pinia';
import { darkmode } from '@/stores/darkmode';

export default {
  name: 'app',
  data() {
    return {
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'States', path: '/coreconcepts/states' },
        { name: 'Responsive Design', path: '/coreconcepts/responsive-design' },
      ],
    };
  },
  computed: {
    ...mapState(darkmode, ['isDark']),
  },
};
</script>

<style>
/* @import "@/assets/base.css"; */
body {
  background-color: #eee;
}
</style>
