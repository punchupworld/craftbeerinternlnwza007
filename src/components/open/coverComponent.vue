<template>
  <div>
    <!-- <div class="bookmark-bg">
      <div class="slider"></div>
      <div class="slider"></div>
      <div class="slider"></div>
    </div> -->

    <!-- <div class="firstpage bookmark-bg">
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
        <div class="col-lg-7 col-md-12">
          <img src="@/assets/pics/cover/shelf.svg" alt="" />
        </div>
        <div
          class="col-lg-5 col-md-12 d-flex justify-content-center align-items-center"
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
    </div> -->

    <div class="bookmark-bg">
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
        <div class="jjj col-lg-7 col-md-12">
          <img src="@/assets/pics/cover/shelf_fade.svg" alt="" />
        </div>
        <div
          class="hhh col-lg-5 col-md-12 d-flex flex-column justify-content-center"
        >
          <vue-aos animation-class="fadeInUp animated" v-if="toggle == false">
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

      <div class="scroll-to text-center animated infinite bounce">
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

import interact from "interactjs";

export default {
  name: "coverComponent",
  data() {
    return {
      toggle: true,
      screenX: 0,
      screenY: 0,
    };
  },
  mounted: function () {
    let myDraggable = this.$refs.myDraggable;
    this.initInteract(myDraggable);
  },
  methods: {
    closePopup() {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      this.$store.commit("startResult", true);
      document.getElementsByTagName("body")[0].style.overflow = "hidden auto";
      this.toggle = !this.toggle;
    },
    initInteract: function (selector) {
      interact(".slider") // target elements with the 'slider' class
        .draggable({
          // make the element fire drag events
          origin: "self", // (0, 0) will be the element's top-left
          inertia: true, // start inertial movement if thrown
          modifiers: [
            interact.modifiers.restrict({
              restriction: "self", // keep the drag coords within the element
            }),
          ],
          onmove: this.dragMoveListener,
          onend: this.onDragEnd,
        });
    },
    dragMoveListener: function (event) {
      const sliderWidth = interact.getElementRect(
        event.target.parentNode
      ).width;
      const value = event.pageX / sliderWidth;

      event.target.style.paddingLeft = value * 100 + "%";
      event.target.setAttribute("data-value", value.toFixed(2));
    },
    onDragEnd: function (event) {
      var target = event.target;
      console.log(target);
      // update the state
      this.screenX = target.getBoundingClientRect().left;
      this.screenY = target.getBoundingClientRect().top;
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
  overflow-x: hidden;
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
  border: 1px solid black;
}
.cart img {
  height: 100%;
  z-index: 1;
  border: 1px solid red;
  /* transform: translateX(200%); */
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
  font-size: 2.5rem;
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
.text-second {
  transform: translateY(180%);
  font-size: 1.5rem;
}

/* the slider bar */
.slider {
  position: relative;
  width: 100%;
  height: 1em;
  margin: 1.5em auto;
  background-color: #29e;
  border-radius: 0.5em;
  box-sizing: border-box;

  font-size: 11vh;

  -ms-touch-action: none;
  touch-action: none;
}

/* the slider handle */
.slider:before {
  content: "";
  display: block;
  position: relative;
  top: -0.5em;

  width: 2em;
  height: 2em;
  margin-left: -1em;
  border: solid 0.25em #fff;
  border-radius: 1em;
  background-color: inherit;

  box-sizing: border-box;
}

/* display the value */
.slider:after {
  content: attr(data-value);
  position: absolute;
  top: -1.5em;
  width: 2em;
  line-height: 1em;
  margin-left: -1em;
  text-align: center;
}

body {
  margin: 5% 10%;
}

/* ipad */
@media (max-width: 821px) {
  .hhh {
    transform: translateY(-160%);
  }
  .hhh .text-second {
    transform: translateY(270px);
    font-size: 1.5rem;
  }
}
@media (max-width: 540px) {
  .disclaimer .imgdis {
    width: 90%;
  }
  .disclaimer .imgdis img {
    width: 100%;
  }
  .disclaimer .imgdis .close-button {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }
  .hhh {
    transform: translateY(-110%);
  }
  .hhh .text-second {
    transform: translateY(200px);
    font-size: 1rem;
  }
  .scroll-to {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 1rem;
  }
  .scroll-to p {
    font-size: 1rem;
  }
}

/* my phone */
@media (max-width: 539px) {
  .hhh .text-second {
    transform: translateY(130px);
    font-size: 1rem;
  }
}

@media (max-width: 376px) {
  .hhh .text-second {
    transform: translateY(110px);
    font-size: 0.8rem;
  }
}
</style>
