<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container text-center">
        <vue-aos animation-class="slideInUp animated">
          <div class="topic">
            <img src="@/assets/pics/frame3/3.10/text.svg" class="mb-4" />
            <p class="topic-text b5">
              การที่ผู้ผลิตรายย่อยมีพื้นที่ในตลาดเบียร์ของประเทศ
              ทำให้ประชาชนสามารถมีตัวเลือกด้านรสชาติที่หลากหลาย <br />
              และได้ดื่มเบียร์ที่มีคุณภาพ
              อีกทั้งความหลากหลายของเบียร์ยังนำมาซึ่งโอกาสทางเศรษฐกิจ เช่น
            </p>
          </div>
        </vue-aos>

        <div class="three row">
          <div class="col-4 p-lg-5 p-md-4">
            <img src="@/assets/pics/frame3/3.10/01.svg" />
          </div>
          <div class="col-4 p-lg-5 p-md-4">
            <img src="@/assets/pics/frame3/3.10/02.svg" />
          </div>
          <div class="col-4 p-lg-5 p-md-4">
            <img src="@/assets/pics/frame3/3.10/03.svg" />
          </div>

          <div class="each-image col-4">
            <!-- <div class="detail">
              <p class="b3">เพิ่มโอกาสการจ้างงาน</p>
              <p class="b5">
                ในอาชีพที่เกี่ยวข้อง เช่น นักออกแบบบรรจุภัณฑ์
                ธุรกิจที่เกี่ยวกับการขนส่งสินค้า
              </p>
            </div> -->
            <img src="@/assets/pics/frame3/3.10/1text.svg" alt="" />
          </div>
          <div class="each-image col-4">
            <!-- <div class="detail">
              <p class="b3">ดึงดูดนักท่องเที่ยว</p>
              <p class="b5">มาเยี่ยมชมและ ดื่มเบียร์ท้องถิ่นในงานเทศกาลเบียร</p>
            </div> -->
            <img src="@/assets/pics/frame3/3.10/2text.svg" alt="" />
          </div>
          <div class="each-image col-4">
            <!-- <div class="detail">
              <p class="b3">เพิ่มรายได้และมูลค่าให้กับผลผลิตทางการเกษตร</p>
              <p class="b5">ซึ่งช่วยให้เกษตรกรมีรายได้เพิ่มมากขึ้น</p>
            </div> -->
            <img src="@/assets/pics/frame3/3.10/3text.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark4.2",
};
</script>

<style scoped>
.bookmark-bg {
  background-color: #f8ef8f;
}
.topic img {
  width: 70%;
}
.detail {
  background-color: white;
  border: 1px solid black;
  padding: 1rem;
}

/* ipad */
@media (max-width: 821px) {
  .each-image img {
    width: 90%;
  }
  .topic {
    margin: 5rem 0;
  }
  .topic img {
    width: 95%;
  }
}
/* mobile */
@media (max-width: 540px) {
  .bookmark-bg{
    height: 60vh;
  }
  .topic img {
    width: 100%;
  }
  .topic-text {
    font-size: 0.5rem;
  }
}
</style>
