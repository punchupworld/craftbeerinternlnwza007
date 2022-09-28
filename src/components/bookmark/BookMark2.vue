<template>
  <div>
    <div class="bookmark-bg d-flex justify-content-center">
      <div class="all d-flex align-items-center">
        <div class="left d-flex justify-content-center align-items-center">
          <img src="@/assets/pics/frame3/3.2/topic.svg" alt="" />
        </div>
        <vue-aos animation-class="slideInRight animated">
          <img src="@/assets/pics/frame3/3.2/hand.svg" alt="" class="hand" />
        </vue-aos>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark2",
}
</script>
<style scoped>
.bookmark-bg{
  overflow: hidden;
}
.all {
  width: 100%;
  height: 100%;
  position: relative;
}
.left {
  width: 60%;
  position: absolute;
  height: 100%;
}
.left img {
  width: 70%;
}
.hand{
  width: 100%;
}
/* ipad */
@media (max-width: 821px) {
  .bookmark-bg {
    height: 70vh;
  }
}
</style>
