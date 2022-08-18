<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <button class="btn btn-primary" @click="randomBeer">random!</button>
    </div>

    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container d-flex flex-column align-items-center">
        <div class="result row p-5">
          <!-- <div class="frame m-4"></div>
          <img
            src="@/assets/pics/beer24/bannok-beer-kiss-me-deadly-stout.png"
            alt=""
          /> -->
          <div class="bgwhite"></div>

          <div
            class="imgframe col-5 d-flex align-items-center justify-content-center"
          >
            <img
              src="@/assets/pics/beer24/bannok-beer-kiss-me-deadly-stout.png"
            />
          </div>
          <div
            class="dataframe col-7 d-flex align-items-center justify-content-center pb-5"
          >
            <div>
              <h2 class="pt-5 pb-5">"เบียร์ภูเก็ต"</h2>
              <p class="b4"><span class="bold">แบรนด์ : </span>Phuket Beer</p>
              <p class="b4"><span class="bold">ประเภท :</span>Premium Lager</p>
              <p class="b4"><span class="bold">ABV : </span>5%</p>
              <p class="b4">
                <span class="bold">รสชาติ : </span
                >มีรสชาติและกลิ่นคั่วที่เป็นเอกลักษณ์ โดยมีส่วนผสมพิเศษ คือ
                ข้าวหอมมะลิของไทย, มอลต์บาร์เลย์ และฮ็อปเยอรมัน
              </p>
            </div>
          </div>
        </div>

        <div class="text-center d-flex flex-column">
          <h4>พักเสร็จแล้ว</h4>
          <h3>ไปต่อกันเลย !</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: "",
    };
  },
  name: "RandomComponent",
  methods: {
    randomBeer() {
      this.result = Math.floor(Math.random() * 24 + 1);
      console.log("SAWASDEE");
    },
  },
};
</script>

<style scoped>
.bookmark-bg {
  background-color: tomato;
}
.bgwhite {
  position: absolute;
  width: 95%;
  height: 70%;
  background: white;
  border: solid 2px black;

  /* set absolute to center */
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
}
.result {
  position: relative;
  width: 70%;
}
.bold {
  font-weight: bolder;
}
.b4 {
  margin: 0;
}
.imgframe img {
  width: 100%;
  transform: rotate(-6deg);
}
.imgframe,
.dataframe {
  z-index: 1;
}
</style>
