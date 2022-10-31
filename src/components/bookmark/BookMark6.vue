<template>
  <div>
    <div class="gradient"></div>

    <div
      class="bg2 bookmark-bg container-fluid d-flex flex-column justify-content-center"
    >
      <div class="container text-center cover">
        <img
          src="@/assets/pics/frame4/4.2/topic.svg"
          alt=""
          class="big-topic"
        />
      </div>
      <div class="content2 container text-center p-lg-5 p-sm-1 p-1 d-flex flex-column align-items-center">
        <img
          src="@/assets/pics/frame4/4.3/chart.svg"
          class="chart mt-5 text-center"
        />
        <p class="describ b4 mt-5">
          90% ของส่วนแบ่งในตลาด<br />
          ครอบครองโดยเจ้าใหญ่เหมือนกัน
        </p>
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
  background-repeat: no-repeat;
  background-size: cover;
}
.big-topic{
  width: 70%;
}
.content2 {
  width: 100%;
  height: 100%;
}
.chart {
  height: 80%;
}
.describ{
  background: white;
  border: 1px solid;
  padding: 1rem 2rem;
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
  .big-topic{
    width: 100%;
  }
  .chart {
    width: 50%;
  }
  .gradient {
    height: 30vh;
  }
}

/* mobile */
@media (max-width: 540px) {
  .bookmark-bg{
    height: unset;
  }
  .content2 h1 {
    font-size: 1.3rem;
  }
  .container {
    width: 100%;
  }
  .container .big-topic {
    width: 80%;
  }
  .chart {
    width: 50%;
  }
  .describ{
    font-size: .5rem;
    padding: 1rem 1rem;
  }
}
</style>
