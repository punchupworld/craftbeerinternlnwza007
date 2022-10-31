<template>
  <div>
    <section >
      <div class="logo-pu"><a href="#"><img src="@/assets/pics/pulogo.svg" alt=""></a></div>
      <intro-component></intro-component>
      <interaction-component></interaction-component>
      <problem-component v-if="$store.state.count"></problem-component>
      <outtro-component v-if="$store.state.count"></outtro-component>
    </section>
  </div>
</template>

<script>
import InteractionComponent from "./components/InteractionComponent.vue";
import IntroComponent from "./components/IntroComponent.vue";
import OuttroComponent from "./components/OuttroComponent.vue";
import ProblemComponent from "./components/problemComponent.vue";

export default {
  components: {
    IntroComponent,
    InteractionComponent,
    OuttroComponent,
    ProblemComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fahkwang&family=Kanit&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4 {
  font-family: "Kanit", sans-serif;
}
.b1,
.b2,
.b3,
.b4,
.b5,
.b6,
.b7,
.b8 {
  font-family: "Fahkwang", sans-serif;
}
.b1 {
  font-size: 35px;
}
.b2 {
  font-size: 30px;
}
.b3 {
  font-size: 25px;
}
.b4 {
  font-size: 20px;
}
.b5 {
  font-size: 15px;
}
.b6 {
  font-size: 14px;
}
.b7 {
  font-size: 12px;
}
.b8 {
  font-size: 8px;
}
.bookmark-bg {
  width: 100vw;
  height: 100vh;
}

/* เพิ่มโค้ดจากfeedback */
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}

.close:focus, .close:hover {
    color: #000;
    text-decoration: none;
    opacity: .75;
}

.close:not(:disabled):not(.disabled) {
    cursor: pointer;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
}

.modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
}
.logo-pu{
  position: absolute;
  z-index: 1;
}
.logo-pu img{
  position: fixed;
}
</style>
