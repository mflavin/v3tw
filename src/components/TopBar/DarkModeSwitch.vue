<template>
  <div class="contents lg:cursor-pointer" @click="toggleDarkMode()">
    <div
      class="
        hidden
        whitespace-nowrap
        hover:text-indigo-500
        dark:text-white dark:hover:text-indigo-400
        xl:block font-semibold
      "
    >
      Dark mode
    </div>
    <div
      class="
        ml-2
        flex
        h-5
        w-12
        items-center
        rounded-full
        border border-slate-500
        bg-slate-200
        hover:border-slate-700
        dark:bg-slate-600 dark:hover:border-slate-300
      "
    >
      <div
        class="
          delay-50
          flex
          h-5
          w-5
          transform
          items-center
          justify-center
          rounded-full
          bg-slate-50
          shadow-lg
          transition
          dark:translate-x-7 dark:bg-black
        "
      >
        <img
          v-if="isDark"
          class="h-3.5 w-3.5 rounded-full"
          src="/img/icons/moon-white-24.png"
          alt="Logo"
        />
        <img
          v-else
          class="h-3.5 w-3.5 rounded-full"
          src="/img/icons/sun-black-24.png"
          alt="Logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { darkmode } from '@/stores/darkmode';

export default {
  name: 'DarkModeSwitch',
  created() {
    this.updateDarkMode();
  },
  computed: {
    ...mapState(darkmode, ['isDark']),
  },
  methods: {
    ...mapActions(darkmode, ['toggleDarkMode', 'updateDarkMode']),
  },
};
</script>
