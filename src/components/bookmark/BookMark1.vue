<template>
  <div>
    <div class="gradient"></div>
    <div class="bookmark-bg d-flex justify-content-center align-items-center">
      <div class="proi text-center">
        <h1>
          ยังสงสัยอยู่ใช่ไหม <br />
          ว่าเบียร์ทั่วไปแตกต่างยังไงจากคราฟต์เบียร์ยังไง<span> ? </span>
        </h1>
        <div class="choose d-flex justify-content-center">
          <div class="d-flex justify-content-center align-items-center">
            <p class="b3 mb-0">ความแตกต่างด้าน</p>
          </div>

          <b-form-select
            class="choose-form form-select"
            v-model="selected"
            :options="options"
          ></b-form-select>
        </div>
        <p class="grey b4 mt-2 mb-4">วางเมาส์ที่รูปเพื่อดูรายละเอียด</p>

        <div class="imgchoose m-auto">
          <first-svg v-if="selected == 0"></first-svg>
          <second-svg v-if="selected == 1"></second-svg>
          <third-svg v-if="selected == 2"></third-svg>
          <fourth-svg v-if="selected == 3"></fourth-svg>
          <fifth-svg v-if="selected == 4"></fifth-svg>
          <sixth-svg v-if="selected == 5"></sixth-svg>
          <seventh-svg v-if="selected == 6"></seventh-svg>
        </div>

        <h3 class="end1 mt-5">รู้จักกับคราฟต์เบียร์มากขึ้นแล้วใช่ไหม</h3>
        <h1 class="end2">งั้นไปต่อกันเลย !</h1>
      </div>
    </div>
    <div class="part2 bookmark-bg d-flex justify-content-center align-items-center">
      <vue-aos animation-class="zoomIn animated">
        <div class="hello text-center">
          <h2>คราฟต์เบียร์ที่คิดเป็น 1 % นั้น</h2>
          <h1>คาดว่ามีอย่างต่ำ <span>76</span> แบรนด์ในช่วง 20 ปีที่ผ่านมา</h1>
        </div>
      </vue-aos>
    </div>
  </div>
</template>

<script>
import FifthSvg from "../svgimage/FifthSvg.vue";
import FirstSvg from "../svgimage/FirstSvg.vue";
import FourthSvg from "../svgimage/FourthSvg.vue";
import SecondSvg from "../svgimage/SecondSvg.vue";
import SeventhSvg from "../svgimage/SeventhSvg.vue";
import SixthSvg from "../svgimage/SixthSvg.vue";
import ThirdSvg from "../svgimage/ThirdSvg.vue";

export default {
  components: {
    SecondSvg,
    FirstSvg,
    ThirdSvg,
    FourthSvg,
    FifthSvg,
    SixthSvg,
    SeventhSvg,
  },
  name: "BookMark1",
  data() {
    return {
      selected: 0,
      options: [
        { value: 0, text: "ส่วนประกอบ" },
        { value: 1, text: "วัตถุดิบพิเศษ" },
        { value: 2, text: "กระบวนการผลิต" },
        { value: 3, text: "รสชาติ" },
        { value: 4, text: "ราคา (330 มล.)" },
        { value: 5, text: "สเกลการผลิต" },
        { value: 6, text: "การจำหน่าย" },
      ],
    };
  },
};
</script>

<style scoped>
.bookmark-bg {
  overflow: hidden;
}
span {
  /* transform: rotate(20deg) !important; */
  -webkit-text-stroke: 0.1px black;
  color: white;
  font-size: 55px;
  font-weight: bold;
}
.choose-form {
  text-align: center;
  width: 30%;
  margin: 0 1rem;
  font-family: "Fahkwang", sans-serif;
  font-size: 20px;
}
.grey {
  color: #949494;
}
.imgchoose {
  width: 100%;
}
/* gredient */
.gradient {
  width: 100vw;
  height: 30vh;
  background-image: linear-gradient(#e3eaf0, white);
}
@media (max-width: 821px) {
}
@media (max-width: 540px) {
  .proi h1,
  .proi h1 span {
    font-size: 1.1rem;
  }
  .choose p {
    font-size: 0.7rem;
  }
  .choose-form {
    text-align: center;
    width: 30%;
    margin: 0 1rem;
    font-family: "Fahkwang", sans-serif;
    font-size: 0.7rem;
  }
  .grey {
    font-size: 1rem;
  }
  .end1 {
    font-size: 1rem;
  }
  .end2 {
    font-size: 0.8rem !important;
  }

  .part2{
    height: 60vh;
  }
  .hello h2{
    font-size: .9rem;
  }
  .hello h1{
    font-size: 1.1rem;
  }
  .hello h1 span{
    font-size: 1.5rem;
  }
}
</style>
