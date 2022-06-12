<template>
  <main class="pt-5">
    <!-- https://tailwindcss.com/docs/utility-first -->
    <Toast title="ChitChat" text="You have a new message!" />

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#form-states -->
    <form class="y-8">
      <TextBox label="Username" type="text" value="tbone" readonly />
      <TextBox label="Email" type="email" value="tbone" />
      <TextBox label="Password" type="password" value="tbone" />
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
        py-8
        ring-1 ring-slate-900/5
        hover:bg-sky-500 hover:ring-sky-500
      "
    >
      <div class="flex items-center space-x-3">
        <h3
          class="
            text-sm
            font-semibold
            text-slate-900
            group-hover:text-white
            dark:text-white
          "
        >
          New project
        </h3>
      </div>
      <p
        class="
          mt-3
          text-sm text-slate-500
          group-hover:text-white
          dark:text-slate-300
        "
      >
        Create a new project from a variety of starting templates.
      </p>
    </a>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state -->
    <form class="py-8">
      <TextBox
        label="Email"
        type="email"
        peer="Please provide a valid email address."
      />
    </form>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after -->
    <label class="mx-2 block py-8">
      <span
        class="block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        Email
        <span class="ml-0.5 text-red-500" aria-hidden="true">*</span>
      </span>
      <input
        type="email"
        name="email"
        class="focus-error-text-box"
        placeholder="you@example.com"
      />
    </label>
    <blockquote
      class="
        py-8
        text-center text-2xl
        font-semibold
        italic
        text-slate-900
        dark:text-slate-300
      "
    >
      When you look
      <span class="relative">
        <span
          class="absolute -inset-1 block -skew-y-3 bg-pink-500"
          aria-hidden="true"
        ></span>
        <span class="relative text-white">annoyed</span>
      </span>
      all the time, people think that you're busy.
    </blockquote>

    <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons -->
    <form class="rounded-card toast-card my-8">
      <div class="my-1 mx-auto rounded-full bg-slate-300">
        <img
          class="h-16 w-16 m-2"
          src="/img/icons/android-chrome-192x192.png"
          alt="Logo"
        />
      </div>
      <label class="my-2 mx-4 block">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          class="
            block
            w-full
            text-sm text-slate-500
            dark:text-slate-300
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
      class="
        rounded-card
        list-disc
        space-y-3
        my-8
        py-5
        pl-5
        text-slate-500
        dark:text-slate-300
        marker:text-sky-400
      "
    >
      <li class="ml-5">5 cups chopped Porcini mushrooms</li>
      <li class="ml-5">1/2 cup of olive oil</li>
      <li class="ml-5">3lb of celery</li>
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
          class="
            inline-flex
            items-center
            justify-center
            rounded-md
            bg-indigo-500
            p-2
            shadow-lg
          "
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
      <h3
        class="
          mt-5
          text-base
          font-medium
          tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        Writes Upside-Down
      </h3>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-300">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>

    <div class="mx-auto max-w-xs py-8 md:max-w-2xl">
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
            dark:text-white dark:group-open:text-white
          "
        >
          Why do they call it Ovaltine?
        </summary>
        <div class="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-300">
          <p>
            The mug is round. The jar is round. They should call it Roundtine.
          </p>
        </div>
      </details>
    </div>
  </main>
</template>

<script>
import Toast from '@/components/Toast.vue';
import TextBox from '@/components/TextBox.vue';

export default {
  name: 'State',
  components: {
    Toast,
    TextBox,
  },
};
</script>
