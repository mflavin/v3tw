<template>
  <li
    v-bind="$attrs"
    v-for="(nav, idx) in navItems"
    :key="`${nav.path}_${idx}`"
  >
    <RouterLink
      class="
        block
        whitespace-nowrap
        font-semibold
        leading-6
        hover:text-indigo-500
        dark:text-white dark:hover:text-indigo-400
        lg:p-0
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
