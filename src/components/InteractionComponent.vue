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
import BookMark1 from "./bookmark/BookMark1.vue";
import BookMark2 from "./bookmark/BookMark2.vue";
import BookMark3 from "./bookmark/BookMark3.vue";
import BookMark4 from "./bookmark/BookMark4.vue";


export default {
  name: "InteractionComponent",
  components: {
    BookMark1,
    BookMark2,
    BookMark3,
    BookMark4,
  },
};
</script>

<style></style>
