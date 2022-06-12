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
      <img class="h-12 w-12" src="/favicon.ico" alt="Logo" />
    </div>
    <div class="w-40">
      <div class="text-xl font-medium text-black">Tailwind CSS</div>
      <p class="text-sm text-slate-500">
        Going through the Core Concepts sections here
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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