<template>
  <div>
    <!-- part1 -->
    <div
      class="part1 bookmark-bg2 container-fluid d-flex justify-content-center align-items-center"
    >
      <div>
        <div class="container p-4 text-center">
          <h1>แถมไทยมีจำนวนโรงผลิตเบียร์มากกว่า</h1>
          <div class="main-img">
            <img src="@/assets/pics/frame4/4.4/main-img.svg" />
            <vue-aos animation-class="zoomIn animated">
              <div class="factory">
                <img src="@/assets/pics/frame4/4.4/factory.svg" />
              </div>
            </vue-aos>
          </div>
        </div>
      </div>
    </div>
    <!-- alert -->
    <div class="alert">
      <h2 class="text-center">
        ถึงแม้ว่าไทยจะได้เปรียบเรื่องจำนวนของโรงผลิตเบียร์<br />
        <span>แต่ปริมาณการผลิตก็ยังเป็นรองเวียดนาม</span>
      </h2>
    </div>
    <!-- part2 -->
    <div class="part2 bookmark-bg2 container-fluid text-center">
      <div class="line d-flex justify-content-center align-items-center">
        <div class="blue-line"></div>
      </div>
      <h2 class="topic-text">
        ยิ่งไปกว่านั้น แม้ส่วนแบ่งตลาดของ
        ผู้ผลิตเบียร์รายใหญ่ในไทยและเวียดนามจะพอ ๆ กัน
        แต่ผู้ผลิตรายย่อยในเวียดนามกลับมีโอกาสแข่งขันในตลาดนี้มากกว่า
        เพราะเวียดนามมี<span>กฎหมายการผลิต</span>
        ที่เปิดโอกาสให้ผู้ผลิตรายย่อยเข้าแข่งขันได้
      </h2>
      <div class="row hand">
        <div class="left col-lg-6 col-md-12 d-flex flex-column">
          <img src="@/assets/pics/frame4/4.5/th.svg" class="flag m-auto" />
          <p class="b6 mt-5">
            ผู้ผลิตรายย่อยไม่สามารถผลิตคราฟต์เบียร์ในประเทศไทยได้ <br />
            เพราะต้องเป็นบริษัทที่จดทะเบียนตามกฎหมาย <br />
            ใบอนุญาตโรงต้มเบียร์ขนาดเล็กที่มีเงื่อนไขว่า…
          </p>
          <!-- <vue-aos animation-class="slideInUp animated"> -->
          <img src="@/assets/pics/frame4/4.5/hand_1.svg" class="hand1" />
          <!-- </vue-aos> -->
        </div>
        <div class="right col-lg-6 col-md-12 d-flex flex-column">
          <img src="@/assets/pics/frame4/4.5/vn.svg" class="flag m-auto" />
          <!-- <vue-aos animation-class="slideInRight animated"> -->
          <img src="@/assets/pics/frame4/4.5/hand_2.svg" class="hand2 m-auto" />
          <!-- </vue-aos> -->
        </div>
      </div>
    </div>

    <!-- part3 -->
    <div class="part3 bookmark-bg2 container-fluid">
      <div class="container p-4">
        <div class="data text-center">
          <img src="@/assets/pics/frame4/4.6/top.svg" />
        </div>

        <div class="data d-flex flex-column">
          <div class="text-white m-auto">
            <h3>เงื่อนไขด้านการธุรกิจที่เปิดกว้างให้ผู้ผลิตเบียร์ทั้งใน</h3>
            <h3 class="mb-4">และต่างประเทศสามารถแข่งขันกันได้อย่างเป็นธรรม</h3>
          </div>

          <div class="text-main text-center">
            <h1 class="mt-4 mb-1">
              เวียดนามจึงสามารถผลิตคราฟต์เบียร์ภายในประเทศ
            </h1>
            <h1 class="mb-1">ได้อย่างมีอิสระกว่าไทยและยังเป็นฐานการผลิต</h1>
            <h1>เพื่อส่งออกไปยังต่างประเทศ</h1>
          </div>
        </div>

        <div class="data text-center">
          <img src="@/assets/pics/frame4/4.6/bot.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark4.4",
};
</script>

<style scoped>
.bookmark-bg2 {
  background-color: #e3eaf0;
  color: black;
  padding: 2rem;
}
.data img {
  width: 5rem;
}
.text-white h3 {
  background-color: white;
  width: fit-content;
  color: black;
}
.data {
  padding: 5rem;
}
.main-img {
  margin-top: 3rem;
  position: relative;
}
.main-img img {
  width: 100%;
}
.factory {
  position: absolute;
  bottom: 0%;
  left: 0;
  right: 0;
  width: 70%;
  margin: auto;
  transform: translateY(20%);
}
.part1 {
  width: 100vw;
  height: 100vh;
}
.part2 {
  overflow: hidden;
  /* position: relative; */
  width: 100%;
  height: 100%;
}
/* .part2 .line {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid;
}
.part2 .line .blue-line{
  width: 2px;
  height: 60%;
  background: #8ABBE8;
} */
.alert {
  width: 100vw;
  height: 100vh;
  background-image: url("~@/assets/pics/frame4/4.3/bgcolor.svg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 5rem 10rem 5rem 10rem;
}
span {
  color: #de5850;
}
.hand {
  width: 100%;
  margin: auto;
}
.hand .hand1 {
  transform: translateX(-13%);
}
.hand .hand2 {
  transform: translateX(8%);
}
.flag {
  width: 20%;
  margin: 0 !important;
  align-self: center;
}
.topic-text {
  margin-bottom: 4rem;
  padding: 0 8rem 0 8rem;
}
.left {
  border: none;
  border-right: 5px dotted #8abbe8;
}

/* ipad */

@media (max-width: 821px) {
  .alert {
  height: 40vh;
  padding: 5rem 7rem 5rem 7rem;
}
  .data {
    padding: 2rem;
  }
  .data img {
    width: 3rem;
  }
  .text-white h3 {
    font-size: 1.3rem;
  }
  .text-main h1 {
    font-size: 1.5rem;
  }
  .part1 {
    height: 70vh !important;
  }
  .main-img img {
    width: 100%;
  }
  .factory {
    margin-bottom: 5rem;
  }
  .left {
    border-right: hidden;
  }
  .part1 {
    height: 100vh;
    padding: 1rem;
  }
}

/* mobile */
@media (max-width: 540px) {
    .alert {
  height: 30vh;
  padding: 3rem 5rem 5rem 3rem;
}
.alert h2{
  font-size: 1rem;
}
  .factory {
    margin-bottom: 0rem;
  }
  .reminder,
  .reminder-detail {
    font-size: 0.7rem;
  }
  .reminder {
    transform: rotate(-5deg) translateY(0);
  }
  .topic-text {
    font-size: 1rem;
    margin-bottom: 4rem;
    padding: 0 1rem 0 1rem;
  }
  .data {
    padding: 2rem 0 2rem 0;
  }
  .data img {
    width: 10%;
  }
  .text-white h3 {
    font-size: 0.8rem;
  }
  .text-main h1 {
    font-size: 1rem;
  }
}
@media (max-width: 375px) {
  .reminder-detail {
    font-size: 0.5rem;
  }
}
</style>
