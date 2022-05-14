<template>
  <div class="flex item-center justify-center">
    <div class="css-house-drawing" :style="houseStyles" />
  </div>
</template>

<script>
export default {
  name: 'House',
  computed: {
    houseStyles() {
      return {
      };
    },
  },
};
</script>

<style>

.css-house-drawing {
  --wall-width: 4px;
  background: white;

  border: var(--wall-width) solid #642850;
  border-radius: 4px;

  width: 100px;
  height: 100px;
  margin-top: 75px;
  position: relative;
}

.css-house-drawing::before {
  --wall-width: 4px;
  --ceiling-length: 74px;

  margin-top: -52px;
  border-top: var(--wall-width) solid #642850;
  /* border-right: var(--wall-width) solid #f00; */
  /* border-bottom: var(--wall-width) solid #0f0; */
  border-left: var(--wall-width) solid #00f;
  border-radius: 8px;

  background: white;
  content: '';
  transform: rotate(45deg);
  position: absolute;
  top: 14px;
  left: 9px;
  height: var(--ceiling-length);
  width: var(--ceiling-length);
  z-index: -2;
}
</style>
