<template>
  <div
    class="
      fixed
      left-0
      top-0
      z-50
      h-full
      w-full
      translate-y-full
      divide-y divide-gray-100
      rounded
      bg-white
      shadow
      transition-transform
      delay-100
      dark:bg-gray-700
    "
    :class="{ 'translate-y-0': menu }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SheetFromBelow',
  props: {
    menu: {
      type: Boolean,
      required: true,
    },
  },
};
</script>