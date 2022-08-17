<template>
  <div>
      <cover-component></cover-component>
      <shelf-chart></shelf-chart>
  </div>
</template>

<script>
import CoverComponent from "./open/coverComponent.vue";
import ShelfChart from './open/shelfChart.vue';

export default {
  name: "IntroComponent",
  components: { CoverComponent, ShelfChart },
  data() {
    return {};
  },
};
</script>

<style></style>
