<template>
  <div>
    <div class="bookmark-bg d-flex justify-content-center align-items-center">
      <div
        class="disclaimer d-flex flex-column align-items-center"
        v-if="dis == 1"
      >
        <p
          class="b4 closebtn d-flex justify-content-center align-items-center"
          @click="showdisclaim(0)"
        >
          X
        </p>
        <h1 class="distopic text-center mb-lg-5 mb-md-3 mb-sm-1">DISCLAIMER</h1>
        <p class="maindis b4 text-center">
          ข้อมูลคราฟต์เบียร์ไทยที่ใช้ในโปรเจกต์นี้เป็นเพียง 24<br />
          แบรนด์ที่มีข้อมูลเผยแพร่อย่างเป็นทางการ<br /><br /><br />

          คำนิยามของคำว่าคราฟต์เบียร์ในที่นี้คือ<br />
          เบียร์ที่มีรสชาติและเอกลักษณ์เฉพาะตัว<br />
          สร้างสรรค์ขึ้นจากวัตถุดิบธรรมชาติ ผลิตโดยผู้ประกอบการรายย่อย<br />
          และผลิตในโรงงานผลิตเบียร์ขนาดเล็ก
        </p>
        <p class="subdis b7 text-center">
          หมายเหตุ: ความหมายของคราฟต์เบียร์แตกต่างกันไปในแต่ละที่
          ขึ้นอยู่กับผู้ให้คำนิยาม<br />
          อ่านคำนิยามของ Brewers Association ได้
          <a
            href="https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition/"
            target="_blank"
            class="link"
            >ที่นี่</a
          >
        </p>
      </div>
      <div class="all d-flex align-items-center">
        <p
          class="disbut b1 d-flex justify-content-center align-items-center"
          @click="showdisclaim(1)"
        >
          i
        </p>
        <div class="left d-flex justify-content-center align-items-center">
          <img src="@/assets/pics/frame3/3.2/topic.svg" alt="" />
        </div>
        <vue-aos animation-class="slideInRight animated">
          <img src="@/assets/pics/frame3/3.2/hand.svg" />
        </vue-aos>
      </div>
    </div>

    <div
      class="bottlelayer container-fluid d-flex justify-content-center align-items-center pt-lg-5 pb-lg-5 pt-sm-2 pb-sm-2"
    >
      <div>
        <h1 class="bighead text-center mb-5">
          จาก 24 แบรนด์แม่ ผลิตคราฟต์เบียร์ออกมาถึง 244 ผลิตภัณฑ์ <br />
          จากการรวบรวมข้อมูลพบว่า…
        </h1>

        <p class="ending b4 text-center">
          คราฟต์เบียร์ไทยส่วนใหญ่เป็นประเภท IPA รองลงมาเป็น Pale Ale, Wheat Beer
          และ Ale ตามลำดับ
        </p>
        <p class="subending b6 text-center grey">
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

        <p class="subhead b5 text-center grey">
          (ข้อมูลคราฟต์เบียร์อิงจากเว็บไซต์ untappd และ brewver)
        </p>

        <div class="layer">
          <bottle-layer></bottle-layer>
        </div>

      </div>
    </div>

    <div class="mostsale container p-5">
      <h1 class="text-center">แบรนด์ที่มีสินค้าออกมาโลดแล่นในตลาดมากที่สุด</h1>
      <p class="b5 grey text-center">
        รวบรวมข้อมูลจากเว็บไซต์ untappd และ brewver ณ วันที่ 9-12 กรกฎาคม 2563
      </p>
      <div class="row">
        <div
          class="bottlechart col-lg-3 col-md-4 col-4 d-flex flex-column justify-content-end"
        >
          <p class="b4 num align-self-center">46</p>
          <div
            class="bott1 align-self-center"
            @mouseover="showdescrib(1)"
            @mouseout="showdescrib(0)"
          >
            <img src="@/assets/pics/frame3/bottle/bottle2/1.svg" />
          </div>
          <p class="describ b5 align-self-center text-center">
            เอาท์ลอว์<br />(Outlaw)
          </p>
        </div>
        <div
          class="bottlechart col-lg-3 col-md-2 col-2 d-flex flex-column justify-content-end"
        >
          <p class="b4 num align-self-center">24</p>
          <div
            class="bott2 align-self-center"
            @mouseover="showdescrib(2)"
            @mouseout="showdescrib(0)"
          >
            <img src="@/assets/pics/frame3/bottle/bottle2/2.svg" />
          </div>
          <p class="describ b5 align-self-center text-center">
            โกลเด้นคอยส์<br />(Golden Coins)
          </p>
        </div>
        <div
          class="bottlechart col-lg-2 col-md-2 col-2 d-flex flex-column justify-content-end"
        >
          <p class="b4 num align-self-center">16</p>
          <div
            class="bott3 align-self-center"
            @mouseover="showdescrib(3)"
            @mouseout="showdescrib(0)"
          >
            <img src="@/assets/pics/frame3/bottle/bottle2/3.svg" />
          </div>
          <p class="describ b5 align-self-center text-center">
            ผีบอก<br />(Pheebok)
          </p>
        </div>
        <div
          class="bottlechart col-lg-2 col-md-2 col-2 d-flex flex-column justify-content-end"
        >
          <p class="b4 num align-self-center">15</p>
          <div
            class="bott4 align-self-center"
            @mouseover="showdescrib(4)"
            @mouseout="showdescrib(0)"
          >
            <img src="@/assets/pics/frame3/bottle/bottle2/4.svg" />
          </div>
          <p class="describ b5 align-self-center text-center">
            สโตน เฮด<br />(Stone Head)
          </p>
        </div>
        <div
          class="bottlechart col-lg-2 col-md-2 col-2 d-flex flex-column justify-content-end"
        >
          <p class="b4 num align-self-center">14</p>
          <div
            class="bott5 align-self-center"
            @mouseover="showdescrib(5)"
            @mouseout="showdescrib(0)"
          >
            <img src="@/assets/pics/frame3/bottle/bottle2/5.svg" />
          </div>
          <p class="describ b5 align-self-center text-center">
            ลูกกรุง บริวว์<br />(Look-krung Brew)
          </p>
        </div>
      </div>
    </div>
    <div class="text-mobile d-flex justify-content-center">
      <p class="b5 hidetext" v-if="active == 0">
        กดที่ขวดเพื่ออ่านรายละเอียด
      </p>

      <p class="b5 hidetext" v-if="active == 1">เอาท์ลอว์ (Outlaw)</p>
      <p class="b5 hidetext" v-if="active == 2">โกลเด้นคอยส์ (Golden Coins)</p>
      <p class="b5 hidetext" v-if="active == 3">ผีบอก (Pheebok)</p>
      <p class="b5 hidetext" v-if="active == 4">สโตน เฮด (Stone Head)</p>
      <p class="b5 hidetext" v-if="active == 5">
        ลูกกรุง บริวว์ (Look-krung Brew)
      </p>
    </div>
    <div class="floor"></div>
  </div>
</template>

<script>
import BottleLayer from "../svgimage/BottleLayer.vue";
export default {
  components: { BottleLayer },
  name: "BookMark2",
  data() {
    return {
      active: 0,
      dis: 0,
    };
  },
  methods: {
    showdescrib(num) {
      this.active = num;
    },
    showdisclaim(num) {
      this.dis = num;
    },
  },
};
</script>
<style scoped>
.disclaimer {
  border: 1.5px solid;
  position: absolute;
  background: white;
  padding: 3rem 10rem;
  z-index: 2;
}
.distopic {
  background: #de5850;
  color: white;
  padding: 1rem 5rem;
}
.link {
  text-decoration: none;
  color: #de5850;
  cursor: pointer;
}
.link:hover {
  text-decoration: underline;
}
.disbut {
  border: 4px solid #de5850;
  color: #de5850;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 45%;
  bottom: 35%;
  z-index: 1;
  cursor: pointer;
}
.disbut:hover {
  color: white;
  background: #de5850;
}
.closebtn {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background: white;
  top: 0;
  right: -1%;
  border: 2px solid #de5850;
  color: #de5850;
  border-radius: 50%;
  transform: translate(-20px, 5px);
  cursor: pointer;
}
.closebtn:hover {
  background: #de5850;
  color: white;
}
.disbut:hover {
  color: white;
  background: #de5850;
}
.hidetext {
  display: none;
}
.bookmark-bg {
  overflow: hidden;
  position: relative;
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
  top: 50%;
}
.textbox {
  padding: 1rem;
  border: 1px solid;
  margin: 2rem;
  position: relative;
}
.textbox p,
.hand p {
  margin: 0;
}
.textbox .daw {
  color: #de5850;
  position: absolute;
  font-size: 120px;
  top: -99%;
  left: -2%;
}
/* mostsale */
.row {
  height: 80vh;

  padding-left: 5rem;
  padding-right: 5rem;
}
.bottlechart {
  z-index: 1;
  position: relative;
}
.num {
  margin-bottom: 0;
  color: #de5850;
}
.describ {
  position: absolute;
  transform: translateY(140%);
  border: 1px solid;
  padding: 0.5rem 0.5rem;
  background: white;
}
.floor {
  width: 100%;
  height: 10vh;
  background-color: lightgrey;
  transform: translateY(-90%);
}
.bott1 {
  height: 100%;
  object-fit: cover;
}
.bott1 img {
  transform: translateY(2%);
}
.bott2 {
  height: 60%;
  object-fit: cover;
}
.bott3 {
  height: 40%;
  object-fit: cover;
}
.bott4 {
  height: 38%;
  object-fit: cover;
}
.bott5 {
  height: 36%;
  object-fit: cover;
}
.bott1 img,
.bott2 img,
.bott3 img,
.bott4 img,
.bott5 img {
  width: 100%;
  height: 100%;
}

/* ipad */
@media (max-width: 821px) {
  .bookmark-bg {
    height: 70vh;
  }
  .textbox .daw {
    top: -65%;
    left: -2;
  }
  /* disclaimer */
  .disclaimer {
    padding: 1rem 4rem;
  }
  .disbut {
    font-size: 1.3rem;
    width: 2.3rem;
    height: 2.3rem;
    bottom: 42%;
  }
  .maindis {
    font-size: 1rem;
  }
  .subdis {
    font-size: 0.7rem;
  }
  /* mostsale */
  .row {
    height: 50vh;

    padding-left: 2rem;
    padding-right: 2rem;
  }
  .describ {
    font-size: 0.5rem;
  }
  .floor {
    height: 5vh;
    transform: translateY(-180%);
  }
  .bott1 {
    height: 90%;
    object-fit: cover;
  }
  .bott1 img {
    transform: translateY(-2%);
  }
  .bott2 img {
    transform: translateY(4%);
  }
  .bott4 img {
    transform: translateY(-3%);
  }
  .bott5 img {
    transform: translateY(-7%);
  }
  .bott3 {
    width: 60%;
  }
  .bott4 {
    width: 60%;
  }
  .bott5 {
    height: 36%;
    width: 60%;
    object-fit: cover;
  }
  .bott1 img,
  .bott2 img,
  .bott3 img,
  .bott4 img,
  .bott5 img {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 540px) {
  .bighead {
    font-size: 1rem;
  }
  .subhead {
    font-size: 0.6rem;
  }
  .ending {
    font-size: 0.8rem;
  }
  .subending {
    font-size: 0.5rem;
  }
  .textbox .daw {
    font-size: 90px;
    transform: translate(-20%, 10%);
  }
  .textbox p {
    font-size: 0.5rem;
  }
  /* disclaimer */
  .distopic{
    font-size: 1rem;
    padding: .5rem .5rem;
  }
  .disclaimer {
    padding: 1rem 1rem;
  }
  .disbut {
    font-size: .7rem;
    width: 1.2rem;
    height: 1.2rem;
    bottom: 42%;
    border: 2px solid;
  }
  .maindis {
    font-size: .5rem;
  }
  .subdis {
    font-size: .5rem;
  }
  .closebtn{
    width: 1.5rem;
    height: 1.5rem;
  }
  /* mostsale */
  .row {
    height: 50vh;
    padding-left: 0rem;
    padding-right: 0rem;
  }
  .mostsale h1 {
    font-size: 1.2rem;
  }
  .mostsale .b5 {
    font-size: 0.7rem;
  }
  .num {
    font-size: 0.8rem;
  }
  .bott1 {
    transform: translateY(4%);
  }
  .bott2 {
    transform: translateY(4.5%);
  }
  .floor {
    height: 5vh;
    transform: translateY(-300%);
  }
  .describ {
    display: none;
  }
  .textmobile {
    position: relative;
    width: 100%;
  }
  .hidetext {
    display: block;
    transform: translateY(-100%);
    position: absolute;
  }
}
</style>
