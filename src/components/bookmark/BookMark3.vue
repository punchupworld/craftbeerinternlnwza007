<template>
  <div>
    <div class="bookmark-bg2 container-fluid d-flex align-items-center">
      <img src="@/assets/pics/frame3/3.7/text.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark3",
};
</script>

<style scoped>
.bookmark-bg2 {
  background-image: url("~@/assets/pics/frame3/3.7/background.svg");
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5rem;
  justify-content: end;
}
.bookmark-bg2 img {
  width: 50%;
}
@media (max-width: 821px) {
  .bookmark-bg2 {
    background-image: none;
    background-color: #f8ef8f;
    justify-content: center;
    height: 70vh;
  }
  .bookmark-bg2 img {
    width: 85%;
  }
}
@media (max-width: 540px) {
  .bookmark-bg2 img {
    width: 120%;
  }
}
</style>
