<template>
  <div>
    <div class="main2 d-flex">
      <div class="left">
        <vue-aos animation-class="zoomIn animated">
          <img
            v-if="step == 0"
            src="@/assets/pics/shelfchart/2.1/shelf1.svg"
            alt=""
          />
          <img
            v-else-if="step == 1"
            src="@/assets/pics/shelfchart/2.2/shelf2.svg"
            alt=""
          />
          <img v-else src="@/assets/pics/shelfchart/2.3/shelf3.svg" alt="" />
        </vue-aos>
      </div>

      <Scrollama @step-enter="testScrollama" class="main__scrollama">
        <div class="step justify-content-center" data-step-no="1">
          <div class="data">
            <vue-aos animation-class="bounceInRight animated">
              <img
                src="@/assets/pics/shelfchart/2.1/topic.svg"
                alt=""
                class="topicpic"
            /></vue-aos>
          </div>
        </div>
        <div class="step" data-step-no="2">
          <div class="data data1">
            <p class="b4">
              เบียร์ที่คนไทยส่วนใหญ่คุ้นเคยกว่า <span class="b2">99%</span>
            </p>

            <div class="imgtext d-flex mb-4">
              <p class="b4">ล้วนเป็น</p>
              <img
                src="@/assets/pics/shelfchart/2.2/lager.svg"
                v-b-popover.hover.bottom="
                  `ลาเกอร์ (Lager) = เบียร์ที่มีรสฮอปส์ค่อนข้างชัดเจน
โดดเด่นเรื่องความซ่า แตกต่างจากเบียร์ประเภทใหญ่
อีกประเภท คือ เอล (Ale) ที่จะมีรสชาติหวาน มีกลิ่นผลไม้
หรือเครื่องเทศ ลาเกอร์แบ่งย่อยได้อีกมากกว่า 25 ประเภท
ขึ้นอยู่กับเทคนิควิธีและรายละเอียดปลีกย่อยของผู้ผลิต`
                "
                title="ลาเกอร์คืออะไร ?"
              />
            </div>

            <p class="b4">แต่ด้วยการผลิตครั้งละปริมาณมาก</p>
            <p class="b4 mb-5">จึงทำให้มีรสชาติที่ไม่ซับซ้อน</p>

            <div class="imgtext d-flex align-items-center">
              <p class="b4">อีก <span class="b2">1%</span> ที่เหลือคือ</p>
              <!-- <img src="@/assets/pics/shelfchart/2.2/1.svg" class="rotate1" /> -->
              <div class="rotate1 highlight2">
                <p class="b3">"คราฟเบียร์"</p>
              </div>
            </div>
            <div class="imgtext d-flex mb-5">
              <p class="b4">และ</p>
              <!-- <img src="@/assets/pics/shelfchart/2.2/2.svg" class="rotate2" /> -->
              <div class="rotate2 highlight2">
                <p class="b3">"เบียร์นำเข้าจากต่างประเทศ"</p>
              </div>
            </div>

            <p class="b4">
              ซึ่งประกอบไปด้วยประเภทลาเกอร์และเอล แต่ด้วย ความเป็น “คราฟต์”
              ทำให้มีรสชาติที่มีเอกลักษณ์ มากกว่าเบียร์กระแสหลัก
            </p>
          </div>
        </div>

        <div class="step" data-step-no="3">
          <div class="data data2">
            <div class="imgtext d-flex">
              <img
                class="imgleft animated infinite pulse"
                src="@/assets/pics/shelfchart/2.3/95.svg"
              />
              <div class="text">
                <p class="b4">ของตลาดเบียร์ ถือครองโดย</p>
                <p class="b4">
                  <span class="b3">ผู้ผลิตรายใหญ่ 2 ราย</span> คือ
                </p>
              </div>
            </div>
            <br />
            <div class="imgtext d-flex justify-content-center mb-5">
              <div class="text">
                <p class="b3 highlight">บจก.บุญรอดบริวเวอรี่</p>
                <div class="and d-flex align-items-center">
                  <p class="b1">&</p>
                  <p class="b3 highlight">บมจ.ไทยเบฟเวอเรจ</p>
                </div>
              </div>
            </div>

            <div class="imgtext d-flex mb-5">
              <img
                class="imgleft animated infinite pulse"
                src="@/assets/pics/shelfchart/2.3/4.svg"
              />
              <div class="text">
                <p class="b3"><span class="b4">ของ</span> บจก.ไทยเอเชีย</p>
                <p class="b3">แปซิฟิก บริวเวอรี่</p>
              </div>
            </div>

            <div class="imgtext d-flex">
              <img
                class="imgleft animated infinite pulse"
                src="@/assets/pics/shelfchart/2.3/1.svg"
              />
              <div class="text">
                <p class="b3">
                  <span class="b4">ที่เหลือคือ</span> ผู้ผลิตคราฟต์เบียร์
                </p>
                <p class="b4">ซึ่งมีฐานะเป็นผู้ผลิตรายย่อย</p>
              </div>
            </div>
          </div>
        </div>
      </Scrollama>
    </div>

    <!-- <div class="bookmark-bg">
      <div class="row">
        <div class="col-7 chart">
          <img src="@/assets/pics/shelfchart/2.2/shelf2.svg" alt="" />
        </div>

        <div
          class="col-5 data d-flex justify-content-center align-items-center"
        >
          <div class="right">
            <p class="b5">
              เบียร์ที่คนไทยส่วนใหญ่คุ้นเคยกว่า<span class="b3">99%</span>
            </p>

            <div class="imgtext d-flex mb-4">
              <p class="b5">ล้วนเป็น</p>
              <img src="@/assets/pics/shelfchart/2.2/lager.svg" alt="" />
            </div>

            <p class="b5 mb-5">
              แต่ด้วยการผลิตครั้งละปริมาณมาก <br />
              จึงทำให้มีรสชาติที่ไม่ซับซ้อน
            </p>

            <div class="imgtext d-flex mt-5">
              <p class="b5">และอีก<span class="b3">1%</span>ที่เหลือคือ</p>
              <img src="@/assets/pics/shelfchart/2.2/lager.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bookmark-bg">
      <div class="row">
        <div class="col-7 chart">
          <img src="@/assets/pics/shelfchart/2.3/shelf3.svg" alt="" />
        </div>

        <div
          class="col-5 data d-flex justify-content-center align-items-center"
        >
          <div class="right row w-100">
            <div class="col-4">
              <img src="@/assets/pics/shelfchart/2.3/95.svg" alt="" />
            </div>

            <div class="col-8">
              <p class="b5">
                ของตลาดเบียร์ ถือครองโดย <br /><span class="b4"
                  >ผู้ผลิตรายใหญ่ 2 ราย</span
                >
                คือ
              </p>
            </div>

            <div class="col-4">
              <img src="@/assets/pics/shelfchart/2.3/4.svg" alt="" />
            </div>

            <div class="col-8">
              <p class="b5">
                ของ
                <span class="b4">บจก.ไทยเอเชีย <br />แปซิฟิก บริวเวอรี่</span>
              </p>
            </div>

            <div class="col-4">
              <img src="@/assets/pics/shelfchart/2.3/1.svg" alt="" />
            </div>

            <div class="col-8">
              <p class="b5">
                ที่เหลือคือ<span class="b4">ผู้ผลิตคราฟต์เบียร์</span>
                <br />ซึ่งมีฐานะเป็นผู้ผลิตรายย่อย
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";

export default {
  name: "shelfChart",
  data() {
    return {
      step: 0,
    };
  },
  components: {
    Scrollama,
  },
  methods: {
    testScrollama({ index }) {
      this.step = index;
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}

/* part scrollama */
.main__scrollama {
  flex: 1;
}
.step {
  height: 100vh;
  padding: 0 5rem;
  background-color: #e3eaf0;

  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.left {
  width: 55%;
  height: 100vh;
  background: #e3eaf0;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: sticky;
  /* border-right: 1px solid #8ABBE8; */
}
.left img {
  width: 100%;
}
.imgtext img {
  width: 170px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.imgtext .imgleft {
  width: 140px;
}
.rotate1 {
  transform: rotate(-2deg);
}
.rotate2 {
  transform: rotate(2deg);
}
.text {
  margin-left: 1.5rem;
}
.highlight {
  color: #8abbe8;
  background: white;
  border: 1px solid black;
  padding: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.highlight2 {
  color: #de5850;
  background: white;
  border: 1px solid black;
  padding: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-left: 1rem;
}
.text .highlight {
  transform: rotate(-1.5deg);
}
.and .highlight {
  transform: rotate(1.5deg);
}
.and .b1 {
  margin-right: 1rem;
}
.data2 img{
  width: 100%;
}

/* ipad */
@media (max-width: 821px) {
  .left {
    width: 60%;
  }
  .scrollama__steps {
    width: 40%;
  }
  .step {
    width: 100%;
    padding: 0 1rem;
    
  }
  .topicpic {
    width: 90%;
  }

  .data1 p {
    font-size: 0.9rem;
  }
  .data1 span {
    font-size: 1.4rem;
  }

  .data2 .imgtext{
    align-items: flex-start;
  }
  .data2 .imgtext img{
    width: 30%;
  }
  .data2 p{
    font-size: 1rem;
  }
  .data2 span{
    font-size: 1.1rem;
  }
  .text .highlight{
    font-size: .6rem;
  }
}

/* mobile */
@media (max-width: 540px) {
  .left {
    width: 45%;
    /* height: 80vh; */
  }
  .scrollama__steps {
    width: 55%;
  }
  .step {
    width: 100%;
    padding: 0 1rem;
    /* height: 80vh; */
    
  }
  .topicpic {
    width: 90%;
  }

  .data1 p {
    font-size: .6rem;
  }
  .data1 span {
    font-size: 1rem;
  }
  .data1 img{
    width: 60%;
  }

  .data2 .imgtext{
    align-items: flex-start;
  }
  .data2 .imgtext img{
    width: 35%;
  }
  .data2 p{
    font-size: .6rem;
  }
  .data2 span{
    font-size: .8rem;
  }
  .text .highlight{
    font-size: .6rem;
  }
}
</style>
