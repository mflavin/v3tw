import { defineStore } from 'pinia';

export const darkmode = defineStore({
  id: 'darkmode',
  state: () => ({
    dark: true,
  }),
  getters: {
    isDark: (state) => state.dark,
  },
  actions: {
    updateDarkMode() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
        this.dark = true;
      } else {
        document.documentElement.classList.remove('dark');
        this.dark = false;
      }
    },
    toggleDarkMode() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      )
        localStorage.theme = 'light';
      else localStorage.theme = 'dark';
      this.updateDarkMode();
    },
  },
});
