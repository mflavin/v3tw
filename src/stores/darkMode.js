import { defineStore } from 'pinia';

export const darkmode = defineStore({
  id: 'darkmode',
  state: () => ({
    dark: false,
  }),
  getters: {
    isDark: (state) => state.dark,
  },
  actions: {
    toggleDarkMode() {
      this.dark = !this.dark;
    },
  },
});
