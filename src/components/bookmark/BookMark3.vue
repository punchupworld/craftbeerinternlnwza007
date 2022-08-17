<template>
  <div>
    <div
      class="bookmark-bg2 container-fluid d-flex justify-content-center align-items-center"
    >
      <img src="@/assets/pics/frame3/3.7/background.svg"/>
      <div class="text-right">
        <img src="/assets/pics/frame3/3.7/text.svg" />
      </div>
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
  padding: 0;
  width: 100vw;
  position: relative;
}
.bookmark-bg2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-right {
  position: absolute;
}
</style>
