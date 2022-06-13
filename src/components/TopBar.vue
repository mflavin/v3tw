<template>
  <nav class="fixed top-0 z-50 w-full">
    <ul class="flex h-20 justify-between bg-slate-50 p-4 dark:bg-slate-800">
      <li class="sm:w-36 md:w-2/6 lg:w-1/2">
        <img
          class="m-2 w-10 sm:w-12"
          src="/img/icons/android-chrome-192x192.png"
          alt="Logo"
        />
      </li>
      <li class="mt-3 sm:hidden">
        <button
          v-if="!menu"
          @click="menu = !menu"
          class="group flex w-10 cursor-pointer items-center justify-center p-1"
        >
          <span class="relative h-4 w-8 overflow-hidden text-right">
            <span
              class="
                delay-50
                absolute
                -ml-4
                h-0.5
                w-4
                bg-slate-500
                transition
                group-hover:translate-x-1 group-hover:bg-slate-900
                dark:bg-slate-500 dark:group-hover:bg-slate-300
              "
            ></span>
            <span
              class="
                delay-50
                absolute
                top-1.5
                -ml-4
                h-0.5
                w-4
                translate-x-2
                bg-slate-500
                transition
                group-hover:translate-x-0 group-hover:bg-slate-900
                dark:bg-slate-500 dark:group-hover:bg-slate-300
              "
            ></span>
            <span
              class="
                delay-50
                absolute
                top-3
                -ml-4
                h-0.5
                w-4
                translate-x-1
                bg-slate-500
                transition
                group-hover:translate-x-2 group-hover:bg-slate-900
                dark:bg-slate-500 dark:group-hover:bg-slate-300
              "
            ></span>
          </span>
        </button>
        <div
          class="
            fixed
            left-0
            top-0
            z-50
            h-full
            w-full
            translate-y-full
            divide-y divide-gray-100
            rounded
            bg-white
            shadow
            transition-transform
            delay-100
            dark:bg-gray-700
          "
          :class="{ 'translate-y-0': menu }"
        >
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li class="mx-0.5 text-right">
              <button
                @click="menu = !menu"
                class="
                  p-3
                  text-slate-500
                  hover:text-slate-900
                  dark:hover:text-slate-300
                "
              >
                <span class="text-2xl font-medium md:cursor-pointer">
                  &times;
                </span>
              </button>
            </li>
            <li
              v-for="(nav, idx) in navItems"
              :key="`${nav.path}_${idx}`"
              class="mx-0.5"
            >
              <RouterLink
                @click="menu = false"
                class="
                  block
                  p-3
                  hover:bg-gray-100
                  focus:bg-sky-200
                  dark:text-white dark:hover:text-black
                "
                :to="nav.path"
              >
                {{ nav.name }}
              </RouterLink>
            </li>
            <li class="mx-0.5 flex items-center p-3">
              <div class="block dark:text-white">Dark mode</div>
              <div
                @click="toggleDarkMode()"
                class="
                  ml-2
                  flex
                  h-5
                  w-12
                  items-center
                  rounded-full
                  border border-slate-500
                  bg-slate-200
                  dark:bg-slate-600
                "
              >
                <div
                  class="
                    delay-50
                    flex
                    h-5
                    w-5
                    transform
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-50
                    shadow-lg
                    transition
                    dark:translate-x-7 dark:bg-black
                  "
                >
                  <img
                    v-if="isDark"
                    class="h-3.5 w-3.5 rounded-full"
                    src="/img/icons/moon-white-24.png"
                    alt="Logo"
                  />
                  <img
                    v-else
                    class="h-3.5 w-3.5 rounded-full"
                    src="/img/icons/sun-black-24.png"
                    alt="Logo"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li
        v-for="(nav, idx) in navItems"
        :key="`${nav.path}_${idx}`"
        class="mx-0.5 hidden sm:block"
      >
        <RouterLink
          @click="menu = false"
          class="
            block
            p-3
            hover:bg-gray-100
            focus:bg-sky-200
            dark:text-white dark:hover:text-black
          "
          :to="nav.path"
        >
          {{ nav.name }}
        </RouterLink>
      </li>
      <li class="mx-0.5 hidden items-baseline p-3 sm:flex">
        <div class="block dark:text-white">Dark mode</div>
        <div
          @click="toggleDarkMode()"
          class="
            ml-2
            flex
            h-5
            w-12
            items-center
            rounded-full
            border border-slate-500
            bg-slate-200
            dark:bg-slate-600
          "
        >
          <div
            class="
              delay-50
              flex
              h-5
              w-5
              transform
              items-center
              justify-center
              rounded-full
              bg-slate-50
              shadow-lg
              transition
              dark:translate-x-7 dark:bg-black
            "
          >
            <img
              v-if="isDark"
              class="h-3.5 w-3.5 rounded-full"
              src="/img/icons/moon-white-24.png"
              alt="Logo"
            />
            <img
              v-else
              class="h-3.5 w-3.5 rounded-full"
              src="/img/icons/sun-black-24.png"
              alt="Logo"
            />
          </div>
        </div>
      </li>
    </ul>
    <div></div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { darkmode } from '@/stores/darkmode';

export default {
  name: 'TopBar',
  data() {
    return {
      menu: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'States', path: '/coreconcepts/states' },
        { name: 'Responsive Design', path: '/coreconcepts/responsive-design' },
      ],
    };
  },
  created() {
    this.updateDarkMode();
  },
  computed: {
    ...mapState(darkmode, ['isDark']),
  },
  methods: {
    ...mapActions(darkmode, ['toggleDarkMode', 'updateDarkMode']),
  },
};
</script>
