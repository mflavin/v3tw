<template>
  <!-- Mobile menu sheet from below -->
  <div class="nav-sheet" :class="classObject">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SheetFromDirection',
  props: {
    menu: {
      type: Boolean,
      required: true,
    },
    direction: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      directions: {
        top: {
          open: 'translate-y-full -top-full',
          closed: 'translate-y-0 -top-full',
        },
        right: {
          open: 'translate-x-[0px] top-0',
          closed: 'translate-x-full top-0',
        },
        bottom: {
          open: 'translate-y-0 top-0',
          closed: 'translate-y-full top-0',
        },
        left: {
          open: 'top-0 -translate-x-[0px]',
          closed: 'top-0 -translate-x-full',
        },
      },
    };
  },
  computed: {
    classObject() {
      const { directions, menu, direction } = this;
      const getStatus = directions[direction];
      if (menu) return getStatus.open;
      return getStatus.closed;
    },
  },
};
</script>