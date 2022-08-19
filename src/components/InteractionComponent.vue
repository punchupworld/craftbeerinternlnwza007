<template>
  <div>
    <section>
      <book-mark-1></book-mark-1>
      <book-mark-2></book-mark-2>
      <book-mark-3></book-mark-3>
      <book-mark-4></book-mark-4>
      <book-mark-4-1></book-mark-4-1>
      <book-mark-4-2></book-mark-4-2>
      <random-component></random-component>

      <vue-aos animation-class="fadeIn animated" v-if="$store.state.count">
        <act-1></act-1>
      </vue-aos>
      <vue-aos animation-class="zoomIn animated" v-if="$store.state.count">
        <act-2></act-2>
      </vue-aos>
    </section>
  </div>
</template>

<script>
import BookMark1 from "./bookmark/BookMark1.vue";
import BookMark2 from "./bookmark/BookMark2.vue";
import BookMark3 from "./bookmark/BookMark3.vue";
import BookMark41 from "./bookmark/BookMark4.1.vue";
import BookMark42 from "./bookmark/BookMark4.2.vue";
import BookMark4 from "./bookmark/BookMark4.vue";
import Act1 from "./detail/Act1.vue";
import Act2 from "./detail/Act2.vue";
import RandomComponent from './interact/RandomComponent.vue';

export default {
  name: "InteractionComponent",
  components: {
    BookMark1,
    BookMark2,
    BookMark3,
    BookMark4,
    BookMark41,
    BookMark42,
    Act1,
    Act2,
    RandomComponent
  },
};
</script>

<style></style>
