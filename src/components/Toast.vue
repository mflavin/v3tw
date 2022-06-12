<template>
  <div v-if="show" class="rounded-card toast-card">
    <div class="-mt-2 w-full text-right text-slate-400 hover:text-slate-900">
      <span
        @click="close()"
        class="text-2xl font-medium md:cursor-pointer"
        aria-hidden="true"
      >
        &times;
      </span>
    </div>
    <div class="shrink-0">
      <img class="h-12 w-12" :src="icon" alt="Logo" />
    </div>
    <div class="w-40">
      <div class="text-xl font-medium text-black dark:text-white">
        {{ title }}
      </div>
      <p class="text-sm text-slate-500 dark:text-slate-300">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    icon: {
      type: String,
      required: false,
      default: '/favicon.ico',
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>