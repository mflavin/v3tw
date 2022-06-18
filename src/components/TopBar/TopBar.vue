<template>
  <nav
    v-on="$attrs"
    class="
      top-0
      block
      w-full
      border-b-[1px] border-slate-300
      dark:border-slate-700
      lg:fixed lg:z-10
    "
  >
    <!-- Desktop style for nav -->
    <ul
      class="
        mx-auto
        flex
        h-topbar
        max-w-8xl
        items-center
        justify-between
        space-x-8
        bg-slate-50
        dark:bg-slate-800
      "
    >
      <li class="lg:w-full">
        <a href="/" class="transition duration-300 hover:opacity-75">
          <img
            class="my-2 ml-8 w-10"
            src="/img/icons/android-chrome-192x192.png"
            alt="Logo"
          />
        </a>
      </li>
      <!-- Show mobile menu button until small viewport -->
      <li class="my-2 mr-8 lg:hidden">
        <button
          @click="toggleMenu()"
          type="button"
          class="
            m-2
            mr-8
            inline-flex
            items-center
            rounded-lg
            text-sm text-slate-500
            hover:bg-slate-50
            dark:text-slate-300 dark:hover:bg-gray-700
          "
        >
          <IconSettings />
        </button>
        <div
          v-if="menu"
          class="
            fixed
            top-8
            right-4
            z-50
            my-4
            w-56
            list-none
            divide-y divide-slate-100
            rounded-lg
            bg-white
            p-2
            pb-4
            shadow
            transition
            duration-300
            ease-in-out
            dark:divide-gray-600 dark:bg-gray-700
          "
          :class="show ? 'opacity-100' : 'opacity-0'"
        >
          <div class="py-2 px-5">
            <div class="flex h-5 items-center justify-between">
              <span class="block text-sm text-gray-900 dark:text-white">
                mflavin
              </span>
              <div class="-mt-4 block text-right text-slate-500">
                <span
                  @click="toggleMenu()"
                  class="
                    cursor-pointer
                    text-2xl
                    font-medium
                    hover:text-slate-900
                    dark:hover:text-slate-300
                  "
                  aria-hidden="true"
                >
                  &times;
                </span>
              </div>
            </div>
            <span
              class="
                block
                truncate
                text-sm
                font-medium
                text-gray-500
                dark:text-gray-400
              "
            >
              mflavin@email.com
            </span>
          </div>
          <ul>
            <NavLinks class="py-2 px-5 text-sm" />
            <li class="border-t border-slate-100 px-5 dark:border-gray-600">
              <DarkModeSwitch class="pt-3" />
            </li>
          </ul>
        </div>
        <!-- Overlay to allow for click away to close menu -->
        <div
          v-if="menu"
          class="fixed top-0 left-0 z-10 h-full w-full"
          @click="toggleMenu()"
        ></div>
      </li>
      <!-- Hide nav links until small viewport -->
      <NavLinks class="hidden px-3 py-1 text-sm lg:block" />
      <li class="mx-0.5 hidden items-center pr-3 lg:flex">
        <DarkModeSwitch />
      </li>
    </ul>
  </nav>
</template>

<script>
import IconSettings from '@/components/icons/IconSettings.vue';
import DarkModeSwitch from './DarkModeSwitch.vue';
import NavLinks from './NavLinks.vue';

export default {
  name: 'TopBar',
  components: {
    IconSettings,
    DarkModeSwitch,
    NavLinks,
  },
  data() {
    return {
      show: false,
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      if (!this.menu) this.menu = !this.menu;
      else setTimeout(() => (this.menu = !this.menu), 300);
      setTimeout(() => (this.show = !this.show), 0);
    },
  },
};
</script>
