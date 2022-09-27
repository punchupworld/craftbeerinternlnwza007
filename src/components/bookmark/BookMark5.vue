<template>
  <div>
    <div class="gradient3"></div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <vue-aos animation-class="zoomIn animated">
        <div class="container">
          <img src="@/assets/pics/frame4/4/topic.svg" alt="" />
        </div>
      </vue-aos>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark5",
};
</script>

<style scoped>
.bookmark-bg {
  background: #2c2828;
}
.gradient3 {
  width: 100vw;
  height: 50vh;
  background-image: linear-gradient(#f8ef8f, #2c2828);
}
@media (max-width: 821px) {
  .gradient3 {
    height: 30vh;
  }
  .bookmark-bg {
    height: 50vh;
  }
}
/* mobile */
@media (max-width: 540px) {
  .gradient3 {
    height: 20vh;
  }
}
</style>
