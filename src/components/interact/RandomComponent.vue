<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div
        class="dis d-flex justify-content-center align-items-center"
        v-if="toggle == true"
      >
        <vue-aos animation-class="fadeInUp animated">
          <div class="img-box">
            <div
              class="close d-flex justify-content-center align-items-center b2"
              @click="toggleButton"
            >
              X
            </div>
            <img src="@/assets/pics/frame3/3.3/disclaimer.svg" alt="" />
          </div>
        </vue-aos>
      </div>
      <button
        class="randombtn d-flex justify-content-center align-items-center b3"
        @click="randomBeer"
      >
        Random!
      </button>
    </div>

    <div
      class="bookmark-bg randompart container-fluid d-flex flex-column"
      v-if="$store.state.count"
      id="test"
    >
      <div
        class="paper row align-self-center d-flex justify-content-center align-items-center"
        v-if="list.length > 0"
      >
        <div
          class="right right1 col-lg-4 col-md-4 d-flex justify-content-center align-items-center"
        >
          <vue-aos animation-class="zoomIn animated">
            <img
              :src="require(`@/assets/pics/beer24/${list[0].imgpath}`)"
              class="bottle-beer"
            />
          </vue-aos>
        </div>

        <div
          class="right right2 col-12 col-lg-8 col-md-8 mt-2 d-flex justify-content-center align-items-center"
        >
          <div>
            <h1 class="name pb-lg-4 pb-2">{{ list[0].name }}</h1>
            <p class="b4">
              <span class="bold">แบรนด์ : </span>{{ list[0].brand }}
            </p>
            <p class="b4">
              <span class="bold">ประเภท : </span>{{ list[0].type }}
            </p>
            <p class="b4"><span class="bold">ABV : </span>{{ list[0].abv }}</p>
            <p class="b4">
              <span class="bold">รสชาติ : </span>{{ list[0].flavor }}
            </p>
          </div>
        </div>

        <p class="b6 abv">
          *ABV ย่อมาจาก Alcohol By Volume หรือ ปริมาณแอลกอฮอล์
        </p>

        <div class="footer d-flex flex-column">
          <img
            src="@/assets/pics/profile/restart.svg"
            class="align-self-center"
            @click="randomBeer2"
          />
          <p class="b5 align-self-center">Try Again <br />สุ่มอีกครั้ง</p>
        </div>
      </div>

      <div class="text text-center">
        <h2>พักเสร็จแล้ว</h2>
        <h1>ไปต่อกันเลย !</h1>
      </div>
    </div>

    <!-- ทำไทม์ไลน์แล้วมาเปิดด้วย -->

    <!-- <div
      class="bookmark-bg2 p-5 d-flex justify-content-center align-items-center"
      v-if="$store.state.count"
    >
      <div class="content-timeline">
        <div class="topic text-center">
          <h1>
            ลองมาย้อนดูไทม์ไลน์การเติบโต <br />
            ของเบียร์ไทยทั้ง <span class="stroke">24</span> แบรนด์กัน
          </h1>
        </div>

        <div class="timeline text-center mt-5">
          <img src="@/assets/pics/frame3/3.5/smalltimeline.svg" alt="" />
        </div>
      </div>
    </div> -->





    <!-- <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
      v-if="$store.state.count"
      id="test"
    >
      <div class="container d-flex flex-column align-items-center">
        <div class="result row" v-if="list.length > 0">
          <div class="bgwhite"></div>

          <p class="b6 abv">
            *ABV ย่อมาจาก Alcohol By Volume หรือ ปริมาณแอลกอฮอล์
          </p>

          <div
            class="imgframe col-5 d-flex align-items-center justify-content-center"
          >
            <vue-aos animation-class="zoomInUp animated">
              <img :src="require(`@/assets/pics/beer24/${list[0].imgpath}`)" />
            </vue-aos>
          </div>
          <div
            class="dataframe col-6 d-flex align-items-center justify-content-center pb-2"
          >
            <div>
              <h1 class="name pt-2 pb-4">{{ list[0].name }}</h1>
              <p class="b4">
                <span class="bold">แบรนด์ : </span>{{ list[0].brand }}
              </p>
              <p class="b4">
                <span class="bold">ประเภท : </span>{{ list[0].type }}
              </p>
              <p class="b4">
                <span class="bold">ABV : </span>{{ list[0].abv }}
              </p>
              <p class="b4">
                <span class="bold">รสชาติ : </span>{{ list[0].flavor }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center d-flex flex-column">
          <h4>พักเสร็จแล้ว</h4>
          <h3>ไปต่อกันเลย !</h3>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import craftBeers from "@/assets/data/craft-beers";

export default {
  name: "RandomComponent",
  data() {
    return {
      list: [],
      beers: craftBeers,
      toggle: true,
    };
  },
  methods: {
    randomBeer() {
      // console.log(this.$store.state.count);
      //   console.log(this.beers);
      var random = Math.floor(Math.random() * 24) + 1;
      this.list = this.beers.filter((x) => x.id == random);
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      this.$store.commit("showResult", true);
      setTimeout(() => {
        document.getElementById("test").scrollIntoView();
        document.getElementsByTagName("body")[0].style.overflow = "unset";
      }, 500);

      //   console.log(JSON.stringify(this.list));
    },
    randomBeer2() {
      var random = Math.floor(Math.random() * 24) + 1;
      this.list = this.beers.filter((x) => x.id == random);
    },
    toggleButton() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.bookmark-bg {
  background-image: url("~@/assets/pics/frame3/3.3/bg_game.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.bookmark-bg2 {
  background: #e3eaf0;
  width: 100vw;
  height: 100vh;
}
.bgwhite {
  position: absolute;
  width: 95%;
  height: 80%;
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
  /* height: 90vh; */
}
.b4 {
  margin: 0;
}
.imgframe img {
  width: 70%;
  transform: rotate(-6deg);
}
.imgframe,
.dataframe {
  z-index: 1;
}
.name {
  color: #de5850;
}

/* test design2 */
.paper {
  width: 55%;
  height: 60vh;
  border: 1px solid;
  background: white;
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.right {
  padding: 1rem 4rem;
}
.bottle-beer {
  width: 100%;
  transform: rotate(-7deg);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.abv {
  background: white;
  border: 1px solid black;
  padding: 0.5rem;
  position: absolute;
  width: fit-content;
  bottom: 0;
  right: 0;
  transform: translate(-3%, 85%);
}
.footer {
  position: absolute;
  width: fit-content;
  bottom: 0;
  right: -30%;
}
.footer img:hover {
  transform: rotate(90deg) scale(1.1);
}
.footer img {
  width: 15%;
  transition: 0.3s ease;
  cursor: pointer;
}
.randompart {
  justify-content: center;
  padding: 5rem 0;
  overflow: hidden;
}
.text {
  margin-top: 5rem;
}
/* disclaimer */
.dis {
  position: absolute;
  width: 100%;
  height: 100%;
}
.img-box {
  position: relative;
}

.close {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background: white;
  top: 0;
  right: 0;
  border: 2px solid #de5850;
  color: #de5850;
  border-radius: 50%;
  transform: translate(-40%, 40%);
  cursor: pointer;
}
.close:hover {
  background: #de5850;
  color: white;
}
.content-timeline {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.topic h1 {
  color: #8abbe8;
}
.stroke {
  color: white;
  -webkit-text-stroke: 1px black;
  font-size: 3.5rem;
}

.randombtn {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background: white;
  border: 10px solid black;
  cursor: pointer;
}
.randombtn:hover {
  background: #de5850;
  border: 10px solid #f8ef8f;
  color: #f8ef8f;
}
.timeline img {
  width: 100%;
}
/* ipad */
@media (max-width: 821px) {
  .bookmark-bg2 {
    height: 80vh;
  }
  .paper {
    width: 70%;
    height: 35vh;
  }
  .footer {
    bottom: 0;
    right: -40%;
  }
  .name {
    font-size: 1.8rem;
  }
  .right p {
    font-size: 1rem;
  }
  .img-box {
    width: 90%;
  }
  .img-box img {
    width: 100%;
    height: 100%;
  }
  .right1{
    padding: 0rem 2rem;
  }
}

/* mobile */
@media (max-width: 540px) {
  .paper {
    width: 80%;
    height: 50vh;
  }
  .right {
    padding: 1rem 2rem;
  }
  .right h1 {
    text-align: center;
  }
  .bottle-beer {
    width: 30%;
  }
  .right2 {
    height: 55%;
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
  .name {
    font-size: 1.3rem;
  }
  .right1 {
    height: 45%;
  }
  .right p {
    font-size: 0.7rem;
  }
  .abv {
    display: none;
  }
  .footer {
    left: 0;
    right: 0;
    width: 100%;
    bottom: -40%;
  }
  .footer p {
    margin-top: 1rem;
  }
  .text {
    display: none;
  }
  .topic h1,
  .topic span {
    font-size: 1.5rem;
  }
  .close {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }
}
@media (max-width: 376px) {
  .paper {
    width: 70%;
    height: 68vh;
  }
  .bottle-beer {
    width: 30%;
  }
  .footer {
    left: 0;
    right: 0;
    width: 100%;
    bottom: -25%;
  }
  .footer img {
    width: 2rem;
  }
  .footer p {
    font-size: 0.6rem;
  }
}
</style>
