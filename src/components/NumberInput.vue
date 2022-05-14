<template>
  <label :class="[!!label ? 'mb-2' : 'mb-6']" class="block uppercase tracking-wide text-gray-700 text-xs font-bold" :for="`${name}-input`">
    {{ label }}
  </label>
  <div class="relative appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 leading-tight focus-within:outline-none focus-within:bg-white" :class="{ 'pl-8': prefix, 'pr-8': postfix }">
    <span class="prefix -ml-4 absolute">{{ prefix }}</span>
    <input
      :value="formattedValue"
      :name="`${name}-input`"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-none rounded leading-tight focus:outline-none focus:bg-white"
      inputmode="number"
      type="text"
      min="0"
      :placeholder="placeholder"
      @blur="updateValue"
      @change="updateValue"
    >
    <span class="postfix -ml-4 absolute right-0 top-3 mr-3">{{ postfix }}</span>
  </div>
</template>

<script>
import numeral from 'numeral';

export default {
  name: 'NumberInput',
  props: {
    modelValue: { type: [String, Number], default: 0 },
    name: { type: String, default: 'input' },
    placeholder: { type: String, default: 'Enter input' },
    label: { type: String, default: '' },
    prefix: { type: String, default: '' },
    postfix: { type: String, default: '' },
    format: { type: String, default: '0,0' },
  },
  mounted() {
    this.formatCurrency(this.modelValue);
  },
  computed: {
    formattedValue() {
      return this.formatCurrency(this.modelValue);
    },
  },
  methods: {
    formatCurrency(value) {
      if (this.format) {
        const formattedValue = numeral(value).format(this.format);
        return formattedValue;
      }

      return value;
    },
    updateValue(event) {
      const updatedValue = numeral(event.target.value).value();
      this.$emit('update:modelValue', updatedValue);
    },
  },
};
</script>

<style>

</style>
