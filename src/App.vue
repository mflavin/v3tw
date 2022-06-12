<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink> -->
  <RouterView :class="{ dark: isDark }" />
</template>

<script>
import { mapState } from 'pinia';
import { darkmode } from '@/stores/darkmode';

export default {
  name: 'app',
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
