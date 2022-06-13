<template>
  <button
    @click="$emit('menu-clicked')"
    class="group flex w-10 cursor-pointer items-center justify-center p-1"
  >
    <span class="relative h-4 w-8 overflow-hidden text-right">
      <span class="hamburgerlines group-hover:translate-x-1"></span>
      <span
        class="hamburgerlines top-1.5 translate-x-2 group-hover:translate-x-0"
      ></span>
      <span
        class="hamburgerlines top-3 translate-x-1 group-hover:translate-x-2"
      ></span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'NavMobileMenu',
};
</script>

