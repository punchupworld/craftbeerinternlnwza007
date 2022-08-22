<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <button class="btn btn-primary" @click="randomBeer">random!</button>
    </div>

    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
      v-if="$store.state.count"
      id="test"
    >
      <div class="container d-flex flex-column align-items-center">
        <div class="result row" v-if="list.length > 0">
          <div class="bgwhite"></div>
          <div class="abv">
            <p class="b6">
              *ABV ย่อมาจาก Alcohol By Volume หรือ ปริมาณแอลกอฮอล์
            </p>
          </div>

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
    </div>
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
  },
};
</script>

<style scoped>
.bookmark-bg {
  background-image: url("~@/assets/pics/frame3/3.3/bg_game.svg");
  background-repeat: no-repeat;
  background-size: cover;
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
.abv{
  background: white;
  border: 1px solid black;
  padding: .5rem;
  position: absolute;
  bottom: 0;
  width: fit-content;
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
</style>
