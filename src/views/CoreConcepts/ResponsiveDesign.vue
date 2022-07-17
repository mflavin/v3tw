<template>
  <div>
    <div class="rounded-card sm:flex">
      <div class="sm:shrink-0">
        <img
          class="h-48 w-full rounded object-fill sm:h-full sm:w-48 sm:object-cover"
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
          class="mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:text-white"
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
import { useHead } from '@vueuse/head';

export default {
  name: 'ResponsiveDesign',
  created() {
    useHead({
      title: 'Responsive Design Page',
      meta: [
        {
          name: 'description',
          content: 'Tailwind css responsive design guide section',
        },
      ],
    });
  },
};
</script>
