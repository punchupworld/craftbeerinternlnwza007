<template>
  <div>
    <section>
      <cover-component></cover-component>
      <shelf-chart></shelf-chart>
    </section>
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
