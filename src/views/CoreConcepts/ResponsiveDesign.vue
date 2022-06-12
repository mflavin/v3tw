<template>
  <div class="rounded-card md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img
          class="
            h-48
            w-full
            rounded
            object-fill
            md:h-full md:w-48 md:object-cover
          "
          src="/img/art.png"
          alt="Logo"
        />
      </div>
      <div class="p-8">
        <div
          class="text-sm font-semibold uppercase tracking-wide text-indigo-500"
        >
          Case study
        </div>
        <a
          href="#"
          class="
            mt-1
            block
            text-lg
            font-medium
            leading-tight
            text-black
            hover:underline
            dark:text-white
          "
        >
          Finding customers for your new business
        </a>
        <p class="mt-2 text-slate-500 dark:text-slate-300">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { darkmode } from '@/stores/darkmode';

export default {
  name: 'ResponsiveDesign',
  methods: {
    ...mapActions(darkmode, ['toggleDarkMode']),
  },
};
</script>
