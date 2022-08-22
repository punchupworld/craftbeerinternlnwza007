<template>
  <div>
    <div class="firstpage bookmark-bg">
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
        <div
          class="col-5 d-flex justify-content-center align-items-center"
        ></div>
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
    return {};
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
}
.cart {
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;
}
.img-slider {
  width: 80%;
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
</style>
