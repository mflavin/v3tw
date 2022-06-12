<template>
  <main>
    <ul class="flex">
      <li
        v-for="(nav, idx) in navItems"
        :key="`${nav.path}_${idx}`"
        class="mr-6"
      >
        <RouterLink class="text-blue-500 hover:text-blue-800" :to="nav.path">
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
