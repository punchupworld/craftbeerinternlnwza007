<template>
  <div>
    <!-- part1 -->
    <div class="part1 bookmark-bg2 container-fluid">
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

        <div class="alert">
          <p class="b4 reminder">Reminder</p>
          <p class="b5 reminder-detail">
            ถึงแม้ว่าไทยจะได้เปรียบเรื่องจำนวนของโรงผลิตเบียร์
            แต่ปริมาณการผลิตก็ยังเป็นรองเวียดนาม ยิ่งไปกว่านั้น แม้ส่วนแบ่งตลาด
            <br />ของผู้ผลิตเบียร์รายใหญ่ในไทยและเวียดนามจะพอ ๆ กัน
            แต่ผู้ผลิตรายย่อยในเวียดนามก็มีโอกาสแข่งขันในตลาดนี้มากกว่า<br />
            ทั้งนี้เพราะเวียดนามมีกฎหมายการผลิตที่เปิดโอกาสให้ผู้ผลิตรายย่อยเข้าแข่งขันได้
          </p>
        </div>
      </div>
    </div>
    <!-- part2 -->
    <div class="part2 bookmark-bg2 container-fluid text-center">
      <div class="line d-flex justify-content-center align-items-center">
        <div class="blue-line"></div>
      </div>
      <h2 class="topic-text">
        แต่ผู้ผลิตรายย่อยในเวียดนามกลับมีโอกาสแข่งขัน <br />
        ในตลาดนี้มากกว่า เพราะเวียดนามมี<span>กฎหมายการผลิต</span> <br />
        ที่เปิดโอกาสให้ผู้ผลิตรายย่อยเข้าแข่งขันได้
      </h2>
      <div class="row hand">
        <div class="left col-6 d-flex flex-column">
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
        <div class="right col-6 d-flex flex-column">
          <img src="@/assets/pics/frame4/4.5/vn.svg" class="flag m-auto" />
          <!-- <vue-aos animation-class="slideInRight animated"> -->
            <img
              src="@/assets/pics/frame4/4.5/hand_2.svg"
              class="hand2 m-auto"
            />
          <!-- </vue-aos> -->
        </div>
      </div>
    </div>

    <!-- part3 -->
    <div class="bookmark-bg2 container-fluid">
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
  margin: 3rem;
  position: relative;
}
.main-img img {
  width: 40%;
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
  position: relative;
  margin-top: 5rem;
}
.reminder {
  color: white;
  background: #de5850;
  border: 1px solid black;
  width: fit-content;
  margin: auto;
  padding: 0.5rem 1rem;
  top: 0;
  left: 0;
  position: absolute;
  transform: rotate(-5deg) translate(100%, 0px);
}
.reminder-detail {
  background: white;
  border: 1px solid black;
  padding: 1.5rem 1rem;
  width: fit-content;
  margin: auto;
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
}
.left {
  border: none;
  border-right: 5px dotted #8abbe8;
}
</style>
