<template>
  <div>
    <div class="gradient"></div>
    <div class="bookmark-bg d-flex justify-content-center align-items-center">
      <div class="text-center">
        <h1>
          ยังสงสัยอยู่ใช่ไหม <br />
          ว่าเบียร์ทั่วไปแตกต่างยังไงจากคราฟต์เบียร์ยังไง<span> ? </span>
        </h1>
        <div class="choose d-flex justify-content-center">
          <div class="d-flex justify-content-center align-items-center">
            <p class="b3 mb-0">ความแตกต่างด้าน</p>
          </div>

          <select
            class="choose-form form-select"
            aria-label="Default select example"
          >
            <option selected @click="changeValue(0)">ส่วนประกอบ</option>
            <option @click="changeValue(1)">วัตถุดิบพิเศษ</option>
            <option @click="changeValue(2)">กระบวนการผลิต</option>
            <option @click="changeValue(3)">รสชาติ</option>
            <option @click="changeValue(4)">ราคา (330 มล.)</option>
            <option @click="changeValue(5)">สเกลการผลิต</option>
            <option @click="changeValue(6)">การจำหน่าย</option>
          </select>
        </div>
        <p class="grey b4 mt-2 mb-4">วางเมาส์ที่รูปเพื่อดูรายละเอียด</p>

        <div class="imgchoose m-auto">
          <!-- <img src="@/assets/pics/compare/2/main.svg" alt="" /> -->
          <second-svg v-if="value == 0"></second-svg>
        </div>

        <h3 class="mt-5">รู้จักกับคราฟต์เบียร์มากขึ้นแล้วใช่ไหม</h3>
        <h1>งั้นไปต่อกันเลย !</h1>
      </div>
    </div>
    <div class="bookmark-bg d-flex justify-content-center align-items-center">
      <vue-aos animation-class="zoomIn animated">
        <div class="text-center">
          <h2>คราฟต์เบียร์ที่คิดเป็น 1 % นั้น</h2>
          <h1>คาดว่ามีอย่างต่ำ <span>76</span> แบรนด์ในช่วง 20 ปีที่ผ่านมา</h1>
        </div>
      </vue-aos>
    </div>
  </div>
</template>

<script>
import SecondSvg from "../svgimage/SecondSvg.vue";

export default {
  components: { SecondSvg },
  name: "BookMark1",
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    changeValue(number) {
      this.value = number;
      console.log(this.value);
    },
  },
};
</script>

<style scoped>
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
  width: 60%;
}
/* gredient */
.gradient {
  width: 100vw;
  height: 30vh;
  background-image: linear-gradient(#E3EAF0, white);
}
</style>
