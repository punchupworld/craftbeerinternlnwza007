<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container text-center cover">
        <img src="@/assets/pics/frame4/4.2/topic.svg" alt="" />
      </div>
    </div>

    <div
      class="bg2 bookmark-bg container-fluid d-flex justify-content-center"
    >
      <div class="container text-center p-5">
        <h1>
          90% ของส่วนแบ่งในตลาด <br />
          ครอบครองโดยเจ้าใหญ่เหมือนกัน
        </h1>
        <img src="@/assets/pics/frame4/4.3/chart.svg" class="chart mt-5">
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
  background-size: cover;
}
.chart{
  width: 50%;
}
.cover{
  width: 60%;
}
</style>
