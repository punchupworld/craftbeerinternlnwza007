<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container text-center">
        <img src="@/assets/pics/frame4/4.2/topic.svg" alt="" />
      </div>
    </div>

    <div
      class="bg2 bookmark-bg container-fluid d-flex justify-content-center"
    >
      <div class="container text-center">
        <h1 class="mt-5">
          90% ของส่วนแบ่งในตลาด <br />
          ครอบครองโดยเจ้าใหญ่เหมือนกัน
        </h1>
        <img src="@/assets/pics/frame4/4.3/chart.svg" class="chart">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark6",
};
</script>

<style scoped>
.bookmark-bg {
  background-color: #e3eaf0;
}
.bg2{
  background-image: url("~@/assets/pics/frame4/4.3/bgcolor.svg");
  background-repeat: no-repeat;
}
.container img {
  width: 70%;
}
</style>
