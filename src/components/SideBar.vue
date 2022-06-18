<template>
  <div v-on="$attrs" class="sticky top-0 z-10">
    <nav
      class="
        sticky
        top-0
        z-10
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
          peer
          my-2
          mx-8
          inline-flex
          items-center
          rounded-lg
          text-sm text-slate-500
          hover:bg-slate-50
          dark:text-slate-300 dark:hover:bg-gray-700
        "
      >
        <IconMenu />
        <span class="ml-2">Menu</span>
      </button>
    </nav>
    <!-- Overlay to allow for click away to close menu -->
    <div
      v-if="menu"
      class="fixed top-0 left-0 z-10 h-full w-full bg-slate-900 opacity-75"
      @click="menu = false"
    />
    <aside
      class="
        fixed
        inset-0
        top-[3.8125rem]
        left-[max(0px,calc(50%-45rem))]
        right-auto
        z-10
        w-sidebar
        overflow-y-auto
        border-r-[1px] border-slate-300
        px-8
        pb-10
        dark:border-slate-700
        lg:block
      "
      :class="
        menu ? 'z-10 -mt-16 block bg-white dark:bg-slate-800' : 'hidden'
      "
    >
      <nav class="relative lg:text-sm lg:leading-6">
        <ul>
          <li class="mt-12 lg:mt-8">
            <h5
              class="mb-8 font-bold text-slate-900 dark:text-slate-200 lg:mb-3"
            >
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
                  block
                  border-l border-transparent
                  py-1
                  pl-4
                  text-sm
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
                <RouterLink @click="$emit('route-clicked')" :to="nav.path">
                  {{ nav.name }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
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
      menu: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Pseudo Classes', path: '/coreconcepts/pseudo-classes' },
        { name: 'Responsive Design', path: '/coreconcepts/responsive-design' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>