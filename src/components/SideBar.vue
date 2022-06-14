<template>
  <aside
    class="
      fixed
      bottom-0
      top-topbar
      hidden
      w-sidebar
      overflow-y-scroll
      p-8
      pb-24
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
            text-sm text-slate-500
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
</template>

<script>
export default {
  name: 'SideBar',
};
</script>