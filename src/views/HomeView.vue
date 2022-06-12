<template>
  <main class="pt-5">
    <!-- https://tailwindcss.com/docs/utility-first -->
    <div class="rounded-card toast-card">
      <div class="-mt-2 w-full text-right text-slate-400 hover:text-slate-900">
        <span class="text-2xl font-medium md:cursor-pointer" aria-hidden="true"> &times; </span>
      </div>
      <div class="shrink-0">
        <img class="h-12 w-12" src="favicon.ico" alt="Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-sm text-slate-500">You have a new message!</p>
      </div>
    </div>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#form-states -->
    <form>
      <label class="mx-2 block">
        <span class="block text-sm font-medium text-slate-700">Username</span>
        <!-- Using form state modifers, the classes can be identical for every input -->
        <input type="text" value="tbone" disabled class="focus-error-text-box" />
      </label>
      <label class="mx-2 block">
        <span class="block text-sm font-medium text-slate-700">Email</span>
        <!-- Using form state modifers, the classes can be identical for every input -->
        <input type="email" value="tbone" class="focus-error-text-box" />
      </label>
      <label class="mx-2 block">
        <span class="block text-sm font-medium text-slate-700">Password</span>
        <!-- Using form state modifers, the classes can be identical for every input -->
        <input type="password" value="tbone" class="focus-error-text-box" />
      </label>
    </form>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state -->
    <a
      href="#"
      class="
        rounded-card
        group
        my-4
        block
        p-6
        ring-1 ring-slate-900/5
        hover:bg-sky-500 hover:ring-sky-500
      "
    >
      <div class="flex items-center space-x-3">
        <h3 class="text-sm font-semibold text-slate-900 group-hover:text-white">New project</h3>
      </div>
      <p class="mt-3 text-sm text-slate-500 group-hover:text-white">
        Create a new project from a variety of starting templates.
      </p>
    </a>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state -->
    <form>
      <label class="mx-2 block">
        <span class="block text-sm font-medium text-slate-700">Email</span>
        <input type="email" class="focus-error-text-box peer" />
        <p class="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
          Please provide a valid email address.
        </p>
      </label>
    </form>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after -->
    <label class="mx-2 block">
      <span class="block text-sm font-medium text-slate-700">
        Email
        <span class="ml-0.5 text-red-500" aria-hidden="true">*</span>
      </span>
      <input type="email" name="email" class="focus-error-text-box" placeholder="you@example.com" />
    </label>
    <blockquote class="pt-6 text-center text-2xl font-semibold italic text-slate-900">
      When you look
      <span class="relative">
        <span class="absolute -inset-1 block -skew-y-3 bg-pink-500" aria-hidden="true"></span>
        <span class="relative text-white">annoyed</span>
      </span>
      all the time, people think that you're busy.
    </blockquote>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text -->
    <label class="relative block py-6">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
          <!-- ... -->
        </svg>
      </span>
      <input
        class="focus-error-text-box placeholder:italic placeholder:text-slate-400"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
    </label>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons -->
    <form class="rounded-card toast-card">
      <div class="my-1 mx-auto">
        <img class="h-16 w-16" src="img/icons/apple-touch-icon.png" alt="Logo" />
      </div>
      <label class="my-2 mx-4 block">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          class="
            block
            w-full
            text-sm text-slate-500
            file:mr-4
            file:rounded-full
            file:border-0
            file:bg-violet-50
            file:py-2
            file:px-4
            file:text-sm
            file:font-semibold
            file:text-violet-700
            hover:file:bg-violet-100
          "
        />
      </label>
    </form>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#list-markers -->
    <ul
      role="list"
      class="rounded-card mb-8 list-disc space-y-3 pl-5 text-slate-400 marker:text-sky-400"
    >
      <li class="m-4">5 cups chopped Porcini mushrooms</li>
      <li class="m-4">1/2 cup of olive oil</li>
      <li class="m-4">3lb of celery</li>
    </ul>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#list-markers -->
    <div
      class="
        rounded-card rounded-lg
        bg-white
        px-6
        py-8
        shadow-xl
        ring-1 ring-slate-900/5
        dark:bg-slate-900
      "
    >
      <div>
        <span
          @click="toggleDarkMode()"
          class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Writes Upside-Down
      </h3>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
    </div>

    <div class="mx-auto max-w-lg p-8">
      <details
        class="
          group
          rounded-lg
          p-6
          open:bg-white open:shadow-lg open:ring-1 open:ring-black/5
          dark:open:bg-slate-900 dark:open:ring-white/10
        "
        open
      >
        <summary
          class="
            select-none
            text-sm
            font-semibold
            leading-6
            text-slate-900
            dark:group-open:text-white
          "
        >
          Why do they call it Ovaltine?
        </summary>
        <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          <p>The mug is round. The jar is round. They should call it Roundtine.</p>
        </div>
      </details>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'pinia'
import { darkmode } from '@/stores/darkmode'

export default {
  methods: {
    ...mapActions(darkmode, ['toggleDarkMode']),
  },
}
</script>
