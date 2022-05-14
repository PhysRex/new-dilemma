<template>
  <div class="relative pt-1">
    <label :for="name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{{ label }}</label>
    <input
      :value="modelValue"
      :min="min"
      :max="max"
      type="range"
      :name="name"
      :class="[
        name,
        'styled-slider slider-progress w-full cursor-pointer'
      ]"
      :style="`--value: ${modelValue}; --min:${min}; --max:${max};`"
      @input="updateValue"
    />
    <div class="flex justify-between -mt-4">
      <div class="text-sm italic">Conservative</div>
      <div class="text-sm italic">Aggressive</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeInput',
  props: {
    modelValue: { type: [String, Number], default: 0 },
    name: { type: String, default: 'input' },
    label: { type: String, default: 'Input' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: undefined },
  },
  methods: {
    updateValue(event) {
      const updatedValue = Number(event.target.value);
      this.$emit('update:modelValue', updatedValue);
    },
  },
};
</script>

<style>
/*generated with Input range slider CSS style generator (version 20211225)
https://toughengineer.github.io/demo/slider-styler*/
input[type="range"].styled-slider {
  height: 2.2em;
  -webkit-appearance: none;
}

/*progress support*/
input[type="range"].styled-slider.slider-progress {
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));
}

input[type="range"].styled-slider:focus {
  outline: none;
}

/*webkit*/
input[type="range"].styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.2em;
  height: 1.2em;
  border-radius: 1.2em;
  background: #DC2626;
  border: none;
  box-shadow: 0 0 2px black;
  margin-top: calc(max((0.51em - 1px - 1px) * 0.5,0px) - 1.2em * 0.5);
}
input[type="range"].styled-slider::-moz-range-thumb {
  width: 1.2em;
  height: 1.2em;
  border-radius: 1.2em;
  background: #DC2626;
  border: none;
  box-shadow: 0 0 2px black;
}
input[type="range"].styled-slider::-ms-thumb {
  width: 1.2em;
  height: 1.2em;
  border-radius: 1.2em;
  background: #DC2626;
  border: none;
  box-shadow: 0 0 2px black;
  margin-top: 0;
  box-sizing: border-box;
}

input[type="range"].styled-slider::-webkit-slider-runnable-track {
  height: 0.51em;
  /* border: 1px solid #b2b2b2; */
  border-radius: 0.5em;
  background: #efefef;
  box-shadow: none;
}
input[type="range"].styled-slider::-moz-range-track {
  height: max(calc(0.51em - 1px - 1px),0px);
  /* border: 1px solid #b2b2b2; */
  border-radius: 0.5em;
  background: #efefef;
  box-shadow: none;
}
input[type="range"].styled-slider::-ms-track {
  height: 0.51em;
  border-radius: 0.5em;
  background: #efefef;
  /* border: 1px solid #b2b2b2; */
  box-shadow: none;
  box-sizing: border-box;
}
input[type="range"].styled-slider.slider-progress::-ms-fill-lower {
  height: max(calc(0.51em - 1px - 1px),0px);
  border-radius: 0.5em 0 0 0.5em;
  margin: -1px 0 -1px -1px;
  background: #F85300;
  /* border: 1px solid #b2b2b2; */
  border-right-width: 0;
}

input[type="range"].styled-slider.slider-progress:hover::-ms-fill-lower {
  background: #c11f1f;
  border-color: #9a9a9a;
}

input[type="range"].styled-slider.slider-progress:active::-ms-fill-lower {
  background: #c11f1f;
  border-color: #c1c1c1;
}

input[type="range"].styled-slider::-webkit-slider-thumb:hover {
  background: #c11f1f;
}
input[type="range"].styled-slider::-webkit-slider-thumb:active {
  background: #c11f1f;
}
input[type="range"].styled-slider::-moz-range-thumb:hover {
  background: #c11f1f;
}
input[type="range"].styled-slider::-ms-thumb:hover {
  background: #c11f1f;
}
input[type="range"].styled-slider::-moz-range-thumb:active {
  background: #c11f1f;
}
input[type="range"].styled-slider::-ms-thumb:active {
  background: #c11f1f;
}

input[type="range"].styled-slider:hover::-webkit-slider-runnable-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}
input[type="range"].styled-slider:active::-webkit-slider-runnable-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}
input[type="range"].styled-slider:hover::-moz-range-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}
input[type="range"].styled-slider:hover::-ms-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}

input[type="range"].styled-slider:active::-moz-range-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}
input[type="range"].styled-slider:active::-ms-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}

input[type="range"].styled-slider.slider-progress::-webkit-slider-runnable-track {
  background: linear-gradient(#DC2626,#DC2626) 0/var(--sx) 100% no-repeat, #efefef;
}

input[type="range"].styled-slider.slider-progress:hover::-webkit-slider-runnable-track {
  background: linear-gradient(#DC2626,#DC2626) 0/var(--sx) 100% no-repeat, #e5e5e5;
}

input[type="range"].styled-slider.slider-progress:active::-webkit-slider-runnable-track {
  background: linear-gradient(#DC2626,#DC2626) 0/var(--sx) 100% no-repeat, #f5f5f5;
}
input[type="range"].styled-slider.slider-progress::-moz-range-track {
  background: linear-gradient(#DC2626,#DC2626) 0/var(--sx) 100% no-repeat, #efefef;
}

input[type="range"].styled-slider.slider-progress:hover::-moz-range-track {
  background: linear-gradient(#DC2626,#DC2626) 0/var(--sx) 100% no-repeat, #e5e5e5;
}

input[type="range"].styled-slider.slider-progress:active::-moz-range-track {
  background: linear-gradient(#DC2626,#DC2626) 0/var(--sx) 100% no-repeat, #f5f5f5;
}

input[type="range"].styled-slider::-ms-fill-upper {
  background: transparent;
  border-color: transparent;
}
input[type="range"].styled-slider::-ms-fill-lower {
  background: transparent;
  border-color: transparent;
}

</style>
