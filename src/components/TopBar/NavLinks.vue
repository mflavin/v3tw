<template>
  <li
    v-for="(nav, idx) in navItems"
    :key="`${nav.path}_${idx}`"
    class="mx-0.5"
    v-bind="$attrs"
  >
    <RouterLink
      @click="$emit('route-clicked')"
      class="
        block whitespace-nowrap
        p-3
        hover:bg-gray-100
        focus:bg-sky-200
        dark:text-white dark:hover:text-black
        sm:rounded-lg
      "
      :to="nav.path"
    >
      {{ nav.name }}
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'NavLinks',
  data() {
    return {
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Pseudo Classes', path: '/coreconcepts/pseudo-classes' },
        { name: 'Responsive Design', path: '/coreconcepts/responsive-design' },
      ],
    };
  },
};
</script>
