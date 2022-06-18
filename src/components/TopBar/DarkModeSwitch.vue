<template>
  <div
    v-on="$attrs"
    class="flex cursor-pointer select-none"
    @click="toggleDarkMode()"
  >
    <div
      class="
        whitespace-nowrap
        text-sm
        font-semibold
        hover:text-indigo-500
        dark:text-white dark:hover:text-indigo-400
        lg:hidden
        xl:block
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
        bg-slate-100
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
        <IconMoon class="h-3.5 w-3.5 rounded-full text-white" v-if="isDark" />
        <IconSun class="h-3.5 w-3.5 rounded-full" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { darkmode } from '@/stores/darkmode';
import { IconSun, IconMoon } from '@/components/icons';

export default {
  name: 'DarkModeSwitch',
  components: { IconSun, IconMoon },
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
