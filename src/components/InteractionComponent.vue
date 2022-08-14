<template>
  <div>
    <section>
      <book-mark-1></book-mark-1>
      <book-mark-2></book-mark-2>
      <book-mark-3></book-mark-3>

      <book-mark-4></book-mark-4>

      <vietnam-thai-1></vietnam-thai-1>

      <vue-aos animation-class="fadeIn animated">
        <act-1></act-1>
      </vue-aos>
      <vue-aos animation-class="zoomIn animated">
        <act-2></act-2>
      </vue-aos>
      <vue-aos animation-class="fadeIn animated">
        <modal-component></modal-component>
      </vue-aos>
    </section>
  </div>
</template>

<script>
import BookMark1 from "./bookmark/BookMark1.vue";
import BookMark2 from "./bookmark/BookMark2.vue";
import BookMark3 from "./bookmark/BookMark3.vue";
import BookMark4 from "./bookmark/BookMark4.vue";
import Act1 from "./detail/Act1.vue";
import Act2 from "./detail/Act2.vue";
import VietnamThai1 from "./detail/VietnamThai1.vue";
import ModalComponent from "./interact/ModalComponent.vue";

export default {
  name: "InteractionComponent",
  components: {
    BookMark1,
    BookMark2,
    BookMark3,
    BookMark4,
    VietnamThai1,
    Act1,
    Act2,
    ModalComponent,
  },
};
</script>

<style></style>
