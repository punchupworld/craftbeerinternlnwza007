<template>
  <div>
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
            <option value="1" selected>ส่วนประกอบ</option>
            <option value="2">วัตถุดิบพิเศษ</option>
            <option value="3">กระบวนการผลิต</option>
            <option value="4">รสชาติ</option>
            <option value="5">ราคา (330 มล.)</option>
            <option value="6">สเกลการผลิต</option>
            <option value="7">การจำหน่าย</option>
          </select>
        </div>
        <p class="grey b4 m-2">วางเมาส์ที่รูปเพื่อดูรายละเอียด</p>

        <div class="imgchoose m-3">
          <img src="" alt="" />
        </div>
        <h3>รู้จักกับคราฟต์เบียร์มากขึ้นแล้วใช่ไหม</h3>
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
export default {
  name: "BookMark1",
  data() {
    return {
      value: 1,
    };
  },
  methods: {},
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
</style>
