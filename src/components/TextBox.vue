<template>
  <label v-on="$attrs" class="mx-2 block">
    <span class="block font-medium text-slate-700 dark:text-slate-300">
      {{ label }}
    </span>
    <input
      :type="type"
      :value="value"
      :readonly="readonly"
      class="focus-error-text-box peer"
    />
    <p v-if="peer" class="invisible mt-2 text-pink-600 peer-invalid:visible">
      {{ peer }}
    </p>
  </label>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    peer: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
