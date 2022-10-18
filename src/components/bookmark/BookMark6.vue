<template>
  <div>
    <div class="gradient"></div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container text-center cover">
        <img
          src="@/assets/pics/frame4/4.2/topic.svg"
          alt=""
          class="big-topic"
        />
      </div>
    </div>

    <div class="bg2 bookmark-bg container-fluid d-flex justify-content-center">
      <div class="content2 container text-center p-5">
        <h1>
          90% ของส่วนแบ่งในตลาด <br />
          ครอบครองโดยเจ้าใหญ่เหมือนกัน
        </h1>
        <img src="@/assets/pics/frame4/4.3/chart.svg" class="chart mt-5" />
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
.bg2 {
  background-image: url("~@/assets/pics/frame4/4.3/bgcolor.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.chart {
  width: 50%;
}
.cover {
  width: 60%;
}
.gradient {
  width: 100vw;
  height: 50vh;
  background-image: linear-gradient(#2c2828, #e3eaf0);
}
/* ipad */
@media (max-width: 821px) {
  .bookmark-bg {
    height: 60vh;
  }
  .bg2 {
    background-color: #e3eaf0;
    background-image: none;
  }
  .chart {
    width: 70%;
  }
  .content2 {
    align-self: center;
  }
  .gradient {
    height: 30vh;
  }
}

/* mobile */
@media (max-width: 540px) {
  .content2 h1 {
    font-size: 1.3rem;
  }
  .container {
    width: 100%;
  }
  .container .big-topic{
    width: 80%;
  }
  .chart{
    width: 90%;
  }
}
</style>
