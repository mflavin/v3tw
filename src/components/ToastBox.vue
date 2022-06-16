<template>
  <div v-if="show" class="rounded-card toast-card">
    <div
      class="
        -mt-2
        h-0
        w-full
        text-right text-slate-500
        hover:text-slate-900
        dark:hover:text-slate-300
      "
    >
      <span
        @click="close()"
        class="text-2xl font-medium lg:cursor-pointer"
        aria-hidden="true"
      >
        &times;
      </span>
    </div>
    <div class="shrink-0 rounded-full bg-slate-300">
      <img class="m-2 h-16 w-16" :src="icon" alt="Logo" />
    </div>
    <div class="w-44">
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
  name: 'ToastBox',
  props: {
    icon: {
      type: String,
      required: false,
      default: '/v3tw/img/icons/android-chrome-192x192.png',
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
