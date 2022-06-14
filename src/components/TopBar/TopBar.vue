<template>
  <!-- Fixed nav -->
  <nav
    class="
      fixed
      top-0
      z-50
      w-full
      border-b-2 border-slate-300
      dark:border-slate-700
      2xl:pl-16
    "
  >
    <!-- Desktop style for nav -->
    <ul
      class="
        darkmode-transition
        mx-auto
        flex
        h-topbar
        items-center
        justify-between
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
        <NavMobileMenu @menu-clicked="toggleMenu" />
      </li>
      <!-- Hide nav links until small viewport -->
      <NavLinks class="hidden lg:block" />
      <li class="mx-0.5 hidden items-center p-3 lg:flex">
        <DarkModeSwitch />
      </li>
    </ul>
    <SheetFromDirection :menu="menu" direction="top">
      <!-- Mobile menu styles -->
      <ul class="py-1 text-gray-700 dark:text-gray-200">
        <li class="mx-0.5 text-right">
          <button
            @click="toggleMenu"
            class="
              p-3
              text-slate-500
              hover:text-slate-900
              dark:hover:text-slate-300
            "
          >
            <span class="text-2xl font-medium md:cursor-pointer">&times;</span>
          </button>
        </li>
        <NavLinks @route-clicked="toggleMenu" />
        <li class="mx-0.5 flex items-center p-3">
          <DarkModeSwitch />
        </li>
      </ul>
    </SheetFromDirection>
  </nav>
</template>

<script>
import DarkModeSwitch from './DarkModeSwitch.vue';
import NavLinks from './NavLinks.vue';
import NavMobileMenu from './NavMobileMenu.vue';
import SheetFromDirection from '@/components/SheetFromDirection.vue';

export default {
  name: 'TopBar',
  components: { DarkModeSwitch, NavLinks, NavMobileMenu, SheetFromDirection },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      const menuStatus = !this.menu;
      this.menu = menuStatus;
      if (menuStatus) document.body.classList.add('overflow-hidden');
      else document.body.classList.remove('overflow-hidden');
    },
  },
};
</script>
