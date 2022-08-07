<template>
  <div>
    <section>
      <book-mark-1></book-mark-1>
      <book-mark-2></book-mark-2>
      <book-mark-3></book-mark-3>
      <book-mark-4></book-mark-4>
      <vn-th-1></vn-th-1>
      <act-1></act-1>
      <act-2></act-2>

    </section>
  </div>
</template>

<script>
import BookMark1 from "./bookmark/BookMark1.vue";
import BookMark2 from "./bookmark/BookMark2.vue";
import BookMark3 from "./bookmark/BookMark3.vue";
import BookMark4 from "./bookmark/BookMark4.vue";
import Act1 from './detail/Act1.vue';
import Act2 from './detail/Act2.vue';
import VnTh1 from './detail/VnTh1.vue';


export default {
  name: "InteractionComponent",
  components: {
    BookMark1,
    BookMark2,
    BookMark3,
    BookMark4,
    VnTh1,
    Act1,
    Act2,
  },
};
</script>

<style></style>
