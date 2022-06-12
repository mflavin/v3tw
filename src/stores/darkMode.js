import { defineStore } from 'pinia';

export const darkmode = defineStore({
  id: 'darkmode',
  actions: {
    updateDarkMode() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      )
        document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
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
