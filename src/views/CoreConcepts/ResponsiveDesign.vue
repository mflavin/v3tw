<template>
  <main class="pt-5">Responsive Design</main>
</template>

<script>
import { mapActions } from 'pinia';
import { darkmode } from '@/stores/darkmode';

export default {
  name: 'ResponsiveDesign',
  methods: {
    ...mapActions(darkmode, ['toggleDarkMode']),
  },
};
</script>
