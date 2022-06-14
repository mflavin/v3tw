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
        block
        whitespace-nowrap
        p-3
        hover:text-indigo-300
        focus:bg-sky-200
        dark:text-white dark:hover:text-indigo-500
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
