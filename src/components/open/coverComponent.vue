<template>
  <div>
    <div class="bookmark-bg container-fluid">
      <div class="text-center p-4">
        <p class="b5">*ผลงานชิ้นนี้เหมาะกับการดูบนหน้าจอคอมพิวเตอร์*</p>
      </div>

      <div class="row">
        <div class="col-7">
          <img src="@/assets/pics/cover/shelf.svg" alt="" />
        </div>
        <div
          class="col-5 d-flex justify-content-center align-items-center"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coverComponent",
  data() {
    return {};
  },
};
</script>

<style scoped>
.b5 {
  color: #2c2828;
}
.bookmark-bg {
  background-image: url("~@/assets/pics/cover/background.svg");
  /* background-color: burlywood; */
  object-fit: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
.col-7 img {
  width: 160%;
}
</style>
