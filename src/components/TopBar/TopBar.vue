<template>
  <nav
    v-on="$attrs"
    class="
      top-0
      z-50
      block
      w-full
      border-b-[1px] border-slate-300
      dark:border-slate-700
      lg:fixed
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
        <img
          class="my-2 ml-8 w-10"
          src="/img/icons/android-chrome-192x192.png"
          alt="Logo"
        />
      </li>
      <!-- Show mobile menu button until small viewport -->
      <li class="my-2 mr-8 lg:hidden">
        <button
          @click="toggleMenu"
          type="button"
          class="
            peer
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
          class="
            peer
            absolute
            top-8
            right-4
            z-50
            my-4
            list-none
            divide-y divide-slate-100
            rounded
            bg-white
            shadow
            dark:divide-gray-600 dark:bg-gray-700
          "
          :class="menu ? 'block' : 'hidden'"
        >
          <div class="py-3 px-4">
            <span class="block text-sm text-gray-900 dark:text-white">
              mflavin
            </span>
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
          <ul class="py-1">
            <NavLinks />
            <li class="mx-0.5 flex items-center pr-3">
              <DarkModeSwitch />
            </li>
          </ul>
        </div>
        <!-- Overlay to allow for click away to close menu -->
        <div
          v-if="menu"
          class="fixed top-0 left-0 h-full w-full"
          @click="menu = false"
        ></div>
      </li>
      <!-- Hide nav links until small viewport -->
      <NavLinks class="hidden lg:block" />
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
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>
