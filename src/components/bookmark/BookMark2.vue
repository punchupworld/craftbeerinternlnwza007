<template>
  <div>
    <div class="bookmark-bg d-flex justify-content-center">
      <div class="all d-flex align-items-center">
        <div class="left d-flex justify-content-center align-items-center">
          <img src="@/assets/pics/frame3/3.2/topic.svg" alt="" />
        </div>
        <vue-aos animation-class="slideInRight animated">
          <img src="@/assets/pics/frame3/3.2/hand.svg"/>
        </vue-aos>
      </div>
    </div>

    <div
      class="bottlelayer container-fluid d-flex justify-content-center align-items-center pt-5 pb-5"
    >
      <div>
        <h1 class="text-center">
          เราได้รวบรวมข้อมูลคราฟต์เบียร์จำนวน <span>244</span> ตัว <br />
          จากคราฟต์เบียร์ไทย 24 แบรนด์ พบว่า…
        </h1>
        <p class="b5 text-center grey">
          (ข้อมูลคราฟต์เบียร์อิงจากเว็บไซต์ untappd และ brewver)
        </p>

        <div class="layer">
          <bottle-layer></bottle-layer>
        </div>

        <p class="b4 text-center">
          คราฟต์เบียร์ไทยส่วนใหญ่เป็นประเภท IPA รองลงมาเป็น Pale Ale, Wheat Beer
          และ Ale ตามลำดับ
        </p>
        <p class="b6 text-center grey">
          ประเภท Ale ในที่นี้ได้แก่ Red Ale, Cream Ale, Wheat Ale, Blonde Ale,
          Sour Ale, Brown Ale และ Farmhouse Ale
        </p>

        <div class="textbox">
          <p class="h1 daw">*</p>
          <p class="b5 text-center">
            นอกจากนี้ยังมีเบียร์ประเภทอื่น ๆ อีก คือ Lager (9 ตัว), Porter (7
            ตัว), Plisner (7 ตัว), Fruit Beer (1 ตัว) และ Kolsch (1 ตัว)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BottleLayer from "../svgimage/BottleLayer.vue";
export default {
  components: { BottleLayer },
  name: "BookMark2",
};
</script>
<style scoped>
.bookmark-bg {
  overflow: hidden;
}
.all {
  width: 100%;
  height: 100%;
  position: relative;
}
.left {
  width: 60%;
  position: absolute;
  height: 100%;
}
.left img {
  width: 70%;
}
.bottlelayer{

}
.layer {
  height: 30%;
  width: 100%;
  padding: 4rem;
  position: relative;
}
.grey {
  color: #949494;
}
.hand {
  position: absolute;
  right: 10%;
  top: 50%
}
.textbox {
  padding: 1rem;
  border: 1px solid;
  margin: 2rem;
  position: relative;
}
.textbox p,.hand p {
  margin: 0;
}
.textbox .daw {
  color: #de5850;
  position: absolute;
  font-size: 120px;
  top: -99%;
  left: -2%;
}
/* ipad */
@media (max-width: 821px) {
  .bookmark-bg {
    height: 70vh;
  }
}
</style>
