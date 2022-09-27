<template>
  <div>
    <div class="bg container-fluid">
      <div class="container">
        <div class="hi text-center pt-5">
          <img src="@/assets/pics/frame4/4.1/text2.svg" alt="" />
        </div>

        <div class="row mt-5">
          <div class="col-lg-7 col-12 text-center">
            <p class="b5">
              นอกจาก<span class="b4"> นครโฮจิมินห์ </span
              >จะเป็นเมืองหลวงแห่งคราฟต์เบียร์แล้ว <br />
              <span class="b4">เวียดนาม </span>
              ยังเป็นประเทศเดียวในอาเซียนที่ติดท็อป 10 อันดับ
              <br />
              <br />
              <br />
              <br />
              อีกทั้งคนรุ่นใหม่ในเวียดนามมีพฤติกรรมนิยมการบริโภคคราฟต์เบียร์มากขึ้น
              <br />
              เวียดนามจึงมักจะเป็นจุดหมายปลายทางของผู้ผลิตคราฟต์เบียร์รายย่อย
            </p>

            <div class="imgfont">
              <img src="@/assets/pics/frame4/4.1/text1.svg" alt="" />
            </div>

            <div
              class="imgbeer d-flex justify-content-center align-items-center"
            >
              <img
                src="@/assets/pics/beer24/mahanakhon-white-ale.png"
                class="rotate1"
              />
              <img
                src="@/assets/pics/beer24/pheebok-sawasdee-ipa.png"
                class="rotate2"
              />
              <img
                src="@/assets/pics/beer24/look-krung-brew-konsuayjaidum.png"
                class="rotate1"
              />
              <img
                src="@/assets/pics/beer24/golden-coins-yaowarat-pale-ale.png"
                class="rotate2"
              />
              <img
                src="@/assets/pics/beer24/bootleg-brothers-island-hopper.png"
                class="rotate1"
              />
              <img
                src="@/assets/pics/beer24/yod-beer-bearnana.png"
                class="rotate2"
              />
              <img
                src="@/assets/pics/beer24/triple-pearl-galaxy-villa.png"
                class="rotate1"
              />
            </div>
          </div>
          <div class="col-lg-5 col-12 more">
            <p class="right-text b5">
              * ข้อมูลจาก BarthHaas รายงานว่า <br />
              ในปี 2020 เวียดนามผลิตเบียร์ได้ <br />
              40,000,000 hl เวียดนามจึงอยู่ใน <br />
              ลำดับที่ 8 จาก 10 อันดับประเทศ <br />
              ที่ผลิตเบียร์มากที่สุด *
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VietnamThai1",
};
</script>

<style scoped>
.bg {
  background: #2c2828;
  background-image: url("~@/assets/pics/frame4/4.1/map.svg");
  background-repeat: no-repeat;
  height: 160vh;
}

.container img {
  width: 55%;
}
p {
  color: white;
}
p span {
  color: #f8ef8f;
}
.imgfont img {
  width: 80%;
  margin: 5rem 0;
}
.imgbeer img {
  width: 4%;
  margin: 2rem;
}
.rotate1 {
  transform: rotate(5deg);
}
.rotate2 {
  transform: rotate(-5deg);
}
.col-5 {
  position: relative;
}
.col-5 p {
  color: #cbcbcb;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: left;
  margin: 0;
}
.more{
  align-self:flex-end;
  text-align: end;
}
.right-text{
  transform: translateY(30%);
}
/* ipad */
@media (max-width: 821px) {
  .bg {
    height: 100vh;
  }
  .right-text {
    font-size: 14px;
    transform: translate(-10%, -120px);
  }
  .imgbeer img {
    margin: 1rem;
  }
}
/* mobile */
@media (max-width: 540px) {
  .more {
    display: none;
  }
  .bg {
    background-image: none;
  }
  .hi img {
    width: 80%;
  }
}
</style>
