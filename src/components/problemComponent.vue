<template>
  <div>
    <div class="gradient3"></div>
    <book-mark-5></book-mark-5>
    <vietnam-thai-1></vietnam-thai-1>
    <book-mark-6></book-mark-6>
    <book-mark-4-4></book-mark-4-4>
    <div class="gradient1"></div>
    <modal-component></modal-component>
    <div class="gradient2"></div>
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
.gradient1,
.gradient2 {
  width: 100vw;
  height: 30vh;
}

.gradient1 {
  background-image: linear-gradient(#e3eaf0, #62a083);
}
.gradient2 {
  background-image: linear-gradient(#62a083, #2c2828);
}
.gradient3 {
  width: 100vw;
  height: 50vh;
  background-image: linear-gradient(#f8ef8f, #2c2828);
}
</style>
