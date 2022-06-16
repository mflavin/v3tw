<template>
  <div>
    <ToastBox
      title="Tailwind CSS"
      text="Going through the Core Concepts sections here"
    />
  </div>
</template>

<script>
import ToastBox from '@/components/ToastBox.vue';

export default {
  name: 'HomeView',
  components: {
    ToastBox,
  },
};
</script>
