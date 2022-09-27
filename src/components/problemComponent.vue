<template>
  <div>
    <book-mark-5></book-mark-5>
    <vietnam-thai-1></vietnam-thai-1>
    <book-mark-6></book-mark-6>
    <book-mark-4-4></book-mark-4-4>
    <modal-component></modal-component>
    <book-mark-8></book-mark-8>
  </div>
</template>

<script>
import BookMark44 from "./bookmark/BookMark4.4.vue";
import BookMark5 from "./bookmark/BookMark5.vue";
import BookMark6 from "./bookmark/BookMark6.vue";
import BookMark8 from "./bookmark/BookMark8.vue";
import VietnamThai1 from "./detail/VietnamThai1.vue";
import ModalComponent from "./interact/ModalComponent.vue";
export default {
  components: {
    BookMark5,
    VietnamThai1,
    ModalComponent,
    BookMark6,
    BookMark44,
    BookMark8,
  },
  name: "problemComponent",
};
</script>

<style scoped>

</style>
