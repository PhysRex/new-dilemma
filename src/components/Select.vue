<template>
  <div>
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
      {{ header }}
    </label>
    <div class="relative">
      <select
        :id="name"
        :value="modelValue"
        class="block appearance-none w-full bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :class="[modelValue === undefined ? 'text-gray-400' : 'text-gray-700']"
        @change="handleSelectChange"
      >
        <option value="undefined" selected hidden>{{ placeholder }}</option>
        <option
          v-for="item in items"
          :key="item.value"
          :value="item.value"
          class="text-gray-700"
        >
          {{ item.text }}
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    modelValue: { type: [String, Number, Boolean], default: '' },
    header: { type: String, default: '' },
    name: { type: String, default: 'select' },
    placeholder: { type: String, default: 'Please Choose...' },
    items: { type: Array, default: () => [] },
  },
  methods: {
    handleSelectChange(event) {
      const updatedValue = event.target.value;
      this.$emit('update:modelValue', updatedValue);
    },
  },
};
</script>

<style>

</style>
