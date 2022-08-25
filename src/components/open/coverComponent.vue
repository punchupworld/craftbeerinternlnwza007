<template>
  <div>
    <div class="firstpage bookmark-bg">
      <div
        class="disclaimer d-flex justify-content-center align-items-center"
        v-if="toggle == true"
      >
        <vue-aos animation-class="fadeInUp animated">
          <div class="imgdis">
            <div
              class="close-button d-flex justify-content-center align-items-center b2"
              @click="closePopup"
            >
              X
            </div>
            <img src="@/assets/pics/cover/disclaimer.svg" alt="" />
          </div>
        </vue-aos>
      </div>

      <div class="text-center p-4">
        <p class="b5">
          *ผลงานชิ้นนี้เหมาะกับ <br />
          การดูบนหน้าจอคอมพิวเตอร์*
        </p>
      </div>

      <div class="row">
        <div class="col-7">
          <img src="@/assets/pics/cover/shelf.svg" alt="" />
        </div>
        <div
          class="col-5 d-flex justify-content-center align-items-center"
        ></div>
      </div>

      <div class="cart d-flex justify-content-center">
        <div class="img-slider">
          <img src="@/assets/pics/cover/cart.svg" alt="" />
          <div
            class="textblink d-flex justify-content-center align-items-center"
          >
            <p class="textslide b2 animated infinite fadeIn">
              Slide to content (เลื่อนเพื่อเข้าสู่เนื้อหา)
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bookmark-bg">
      <div class="text-center p-4">
        <p class="b5">
          *ผลงานชิ้นนี้เหมาะกับ <br />
          การดูบนหน้าจอคอมพิวเตอร์*
        </p>
      </div>

      <div class="row">
        <div class="col-7">
          <img src="@/assets/pics/cover/shelf_fade.svg" alt="" />
        </div>
        <div class="col-5 d-flex flex-column justify-content-center">
          <vue-aos animation-class="fadeInUp animated">
            <div class="topic">
              <h1 class="text-topic">คราฟต์เบียร์ไทย</h1>
              <h1 class="text-topic">ฝันไกล ไป<span>(ไม่)</span>ถึง</h1>
            </div>
          </vue-aos>
          <div class="text-second b5 align-self-center text-center">
            ชวนทำความเข้าใจปัญหาเบียร์ไทย <br />
            ผ่านคราฟต์เบียร์ 24 แบรนด์
          </div>
        </div>
      </div>

      <div class="text-center">
        <box-icon name="down-arrow-alt"></box-icon>
        <p class="b4">
          SCROLL<br />
          เลื่อนเพื่อหาคำตอบ
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "boxicons";

export default {
  name: "coverComponent",
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    closePopup() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.b5 {
  color: #2c2828;
}
.bookmark-bg {
  background-image: url("~@/assets/pics/cover/background.svg");
  /* background-color: burlywood; */
  object-fit: cover;
  background-color: #e3eaf0;
  background-repeat: no-repeat;
}
.col-7 img {
  width: 100%;
}
.firstpage {
  position: relative;
  overflow: hidden;
}
.cart {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  transform: translateY(30%);
}
.img-slider {
  width: 90%;
  height: 100%;
  position: relative;
}
.cart img {
  height: 100%;
  z-index: 1;
}
.textblink {
  top: 0;
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
}
.textslide {
  color: #949494;
}
.disclaimer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
}
.imgdis {
  position: relative;
}
.close-button {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background: white;
  top: 0;
  right: 0;
  border: 2px solid #de5850;
  color: #de5850;
  border-radius: 50%;
  transform: translate(-20px, 5px);
  cursor: pointer;
}
.close-button:hover {
  background: #de5850;
  color: white;
}
.text-topic {
  border: 1px solid;
  background: white;
  padding: 1rem;
  width: fit-content;
  margin: auto;
}
.text-topic:nth-child(1) {
  transform: translateX(-20%) rotate(4deg);
}
.text-topic:nth-child(2) {
  transform: translateX(20%) rotate(-4deg);
}
.text-topic span {
  color: white;
  -webkit-text-stroke: 0.7px black;
}
.text-second{
  transform: translateY(180%);
}
</style>
