<template>
  <main class="h-full">
    <div class="h-full bg-slate-50 dark:bg-slate-800">
      <ul class="flex flex-wrap justify-around bg-slate-50 dark:bg-slate-800">
        <li
          class="mr-5 flex w-full flex-col items-end"
          @click="toggleDarkMode()"
        >
          <div>
            <span class="text-sm dark:text-white">Dark Mode</span>
            <div
              class="
                ml-4
                flex
                h-5
                w-10
                items-center
                rounded-full
                bg-gray-300
                dark:bg-blue-300
              "
            >
              <div
                class="
                  h-4
                  w-4
                  transform
                  rounded-full
                  bg-slate-50
                  shadow-md
                  dark:translate-x-6
                "
              ></div>
            </div>
          </div>
        </li>
        <li
          v-for="(nav, idx) in navItems"
          :key="`${nav.path}_${idx}`"
          class="mx-0.5"
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
              dark:text-white
            "
            :to="nav.path"
          >
            {{ nav.name }}
          </RouterLink>
        </li>
      </ul>
      <RouterView />
    </div>
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { mapActions } from 'pinia';
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
  created() {
    this.updateDarkMode();
  },
  methods: {
    ...mapActions(darkmode, ['toggleDarkMode', 'updateDarkMode']),
  },
};
</script>

<style>
/* @import "@/assets/base.css"; */
body {
  min-height: 100vh;
}
</style>
