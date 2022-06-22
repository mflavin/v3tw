<template>
  <div v-on="$attrs" class="sticky top-0 z-10">
    <nav
      class="
        sticky
        top-0
        z-10
        flex
        justify-between
        border-b-[1px] border-slate-300
        bg-slate-50
        dark:border-slate-700 dark:bg-slate-800
        lg:hidden
      "
    >
      <button
        @click="toggleMenu"
        type="button"
        class="
          rounded-lg
          py-2
          px-8
          text-slate-500
          hover:bg-slate-50
          dark:text-slate-300 dark:hover:bg-gray-700
        "
      >
        <IconMenu class="absolute" />
        <span class="ml-8">Menu</span>
      </button>
      <button
        @click="scrollToTopOfPage"
        type="button"
        class="
          rounded-lg
          py-2
          px-8
          text-slate-500
          hover:bg-slate-50
          dark:text-slate-300 dark:hover:bg-gray-700
        "
      >
        <span class="ml-2">Return To Top</span>
      </button>
    </nav>
  </div>
  <!-- Overlay to allow for click away to close menu -->
  <div
    v-if="menu"
    class="top-0 left-0 z-[99] h-full w-full"
    :class="{ 'fixed bg-slate-900 opacity-75': show }"
    @click="toggleMenu()"
  />
  <aside
    class="
      fixed
      inset-0
      top-[3.8125rem]
      left-[max(0px,calc(50%-45rem))]
      z-[99]
      -mt-16
      w-64
      -translate-x-full
      overflow-y-auto
      border-r-[1px] border-slate-300
      bg-white
      px-8
      pb-10
      transition
      duration-300
      ease-in-out
      dark:border-slate-700 dark:bg-slate-800
      lg:z-10
      lg:mt-0
      lg:block
      lg:-translate-x-0
      lg:bg-transparent
      lg:dark:bg-transparent
      2xl:w-72
    "
    :class="{ 'top-0 -translate-x-0': show }"
  >
    <nav class="relative lg:text-sm lg:leading-6">
      <ul>
        <li class="mt-12 lg:mt-8">
          <h5 class="mb-8 font-bold text-slate-900 dark:text-slate-200 lg:mb-3">
            Core Concepts
          </h5>
          <ul
            class="
              space-y-6
              border-l border-slate-300
              dark:border-slate-700
              lg:space-y-2
            "
          >
            <li
              v-for="(nav, idx) in navItems"
              :key="`${nav.path}_${idx}`"
              class="
                -ml-px
                border-l border-transparent
                pl-4
                text-sm
                transition-none
                hover:border-slate-700 hover:text-indigo-500
                focus:bg-sky-200
                dark:hover:border-slate-300 dark:hover:text-indigo-400
              "
              :class="
                nav.path === $route.path
                  ? 'text-indigo-500 dark:text-indigo-400'
                  : 'text-slate-700 dark:text-slate-300'
              "
            >
              <RouterLink
                class="transition-none"
                @click="$emit('route-clicked')"
                :to="nav.path"
              >
                {{ nav.name }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import IconMenu from '@/components/icons/IconMenu.vue';
export default {
  name: 'SideBar',
  components: {
    IconMenu,
  },
  data() {
    return {
      show: false,
      menu: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Pseudo Classes', path: '/coreconcepts/pseudo-classes' },
        { name: 'Responsive Design', path: '/coreconcepts/responsive-design' },
      ],
    };
  },
  computed: {
    currentRoute() {},
  },
  methods: {
    toggleMenu() {
      if (!this.menu) this.menu = !this.menu;
      else setTimeout(() => (this.menu = !this.menu), 300);
      setTimeout(() => (this.show = !this.show), 0);
    },
    scrollToTopOfPage() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>