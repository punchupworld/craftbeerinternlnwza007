<template>
  <div>
    <section>
      <intro-component></intro-component>
      <interaction-component></interaction-component>
      <outtro-component></outtro-component>
    </section>
  </div>
</template>

<script>
import InteractionComponent from "./components/InteractionComponent.vue";
import IntroComponent from "./components/IntroComponent.vue";
import OuttroComponent from "./components/OuttroComponent.vue";

export default {
  components: {
    IntroComponent,
    InteractionComponent,
    OuttroComponent,
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
h1 {
  font-size: 70px;
}
h2 {
  font-size: 60px;
}
h3 {
  font-size: 50px;
}
h4 {
  font-size: 40px;
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
</style>
