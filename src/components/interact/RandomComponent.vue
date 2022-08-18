<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <button class="btn btn-primary">random!</button>
    </div>

    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container d-flex flex-column align-items-center">
        <div class="result p-5">
          <div class="frame m-4"></div>
          <img
            src="@/assets/pics/beer24/bannok-beer-kiss-me-deadly-stout.png"
            alt=""
          />
        </div>

        <div class="text-center d-flex flex-column">
          <h4>พักเสร็จแล้ว</h4>
          <h3>ไปต่อกันเลย !</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "RandomComponent",
};
</script>

<style scoped>
.bookmark-bg {
  background-color: tomato;
}
.result {
  position: relative;
  width: 80%;
}
.result .frame {
  border: 2px solid;
  background-color: white;
  height: 60vh;
}
.result img {
  position: absolute;
  height: 100%;
  transform: rotate(-10deg);
  top: 0;
}
</style>
