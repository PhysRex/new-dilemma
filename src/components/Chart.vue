<template>
  <div class="flex justify-center">
    <canvas ref="productsBar" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

export default {
  name: 'Chart',
  props: ['chartData', 'options', 'type', 'overrides'],
  data() {
    return {
      data: {},
    };
  },
  created() {
    Chart.register(...registerables);
  },
  watch: {
    chartData(newData) {
      this.chart.data = newData;
      this.chart.update();
      // this.chart.destroy();
    },
  },
  mounted() {
    const ctx = this.$refs.productsBar;

    this.chart = new Chart(ctx, { // eslint-disable-line no-new
      type: this.type || 'doughnut',
      data: this.chartData,
      options: this.options,
      overrides: this.overrides,
    });
  },
};
</script>

<style>

</style>
