<template>
  <div>
    <section>
      <book-mark-1></book-mark-1>
      <book-mark-2></book-mark-2>
      <book-mark-3></book-mark-3>
      <book-mark-4></book-mark-4>
    </section>
  </div>
</template>

<script>
import BookMark1 from "./common/BookMark1.vue";
import BookMark2 from "./common/BookMark2.vue";
import BookMark3 from "./common/BookMark3.vue";
import BookMark4 from "./common/BookMark4.vue";

export default {
  name: "IntroComponent",
  components: {
    BookMark1,
    BookMark2,
    BookMark3,
    BookMark4,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
