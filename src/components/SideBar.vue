<template>
  <div v-on="$attrs">
    <SheetFromDirection class="lg:hidden" :menu="menu" direction="left">
      <aside
        class="
          fixed
          bottom-0
          top-topbar
          hidden
          w-sidebar
          overflow-y-scroll
          border-r-[1px] border-slate-300
          p-8
          pb-24
          dark:border-slate-700
          lg:block
        "
      >
        <nav>
          <ul>
            <li
              v-for="(x, idx) in ' 1 '.repeat(100).split('1')"
              :key="idx"
              class="
                py-1
                text-sm text-slate-700
                hover:text-indigo-300
                focus:bg-sky-200
                dark:text-slate-300 dark:hover:text-indigo-500
                sm:rounded-lg
              "
            >
              {{ idx }}
            </li>
          </ul>
        </nav>
      </aside>
    </SheetFromDirection>
    <aside
      class="
        fixed
        inset-0
        top-[3.8125rem]
        left-[max(0px,calc(50%-45rem))]
        right-auto
        z-20
        hidden
        w-[19.5rem]
        overflow-y-auto
        px-8
        pb-10
        lg:block
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
                v-for="(x, idx) in [
                  'First Page',
                  'Second Page',
                  'Third Page',
                  'Fourth Page',
                  'Fifth Page',
                ]"
                :key="idx"
                class="
                  -ml-px
                  block
                  border-l border-transparent
                  py-1
                  pl-4
                  text-sm text-slate-700
                  hover:border-slate-700 hover:text-indigo-300
                  focus:bg-sky-200
                  dark:text-slate-300
                  dark:hover:border-slate-300
                  dark:hover:text-indigo-500
                "
              >
                {{ x }}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
import SheetFromDirection from '@/components/SheetFromDirection.vue';
export default {
  name: 'SideBar',
  components: { SheetFromDirection },
  data() {
    return {
      menu: false,
    };
  },
};
</script>