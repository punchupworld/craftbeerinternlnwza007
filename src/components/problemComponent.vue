<template>
  <div>
    <book-mark-5></book-mark-5>
    <vietnam-thai-1></vietnam-thai-1>
    <book-mark-6></book-mark-6>
    <modal-component></modal-component>
  </div>
</template>

<script>
import BookMark5 from "./bookmark/BookMark5.vue";
import BookMark6 from "./bookmark/BookMark6.vue";
import VietnamThai1 from "./detail/VietnamThai1.vue";
import ModalComponent from "./interact/ModalComponent.vue";
export default {
  components: { BookMark5, VietnamThai1, ModalComponent, BookMark6 },
  name: "problemComponent",
};
</script>

<style></style>
